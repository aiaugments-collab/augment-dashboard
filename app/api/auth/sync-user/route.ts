import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { User, Team, TeamMember, ActivityLog, ActivityType } from '@/lib/db/schemas';
import { setSession } from '@/lib/auth/session';

async function logActivity(
  teamId: string | null | undefined,
  userId: string,
  action: ActivityType,
  ipAddress?: string
) {
  const newActivity = new ActivityLog({
    teamId: teamId || undefined,
    userId,
    action: action, // ActivityType enum will be converted to string
    ipAddress: ipAddress || 'unknown'
  });
  
  await newActivity.save();
}

export async function POST(request: NextRequest) {
  try {
    const { id, email, name, picture, emailVerified, provider } = await request.json();

    if (!id || !email || !provider) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: id, email, provider' },
        { status: 400 }
      );
    }

    await connectDB();

    // Find existing user by provider-specific ID or email
    let user = await User.findOne({
      $or: [
        { authProviderId: provider, providerSpecificId: id },
        { email: email },
        // Legacy provider compatibility
        ...(provider === 'firebase' ? [{ firebaseUid: id }] : []),
        ...(provider === 'auth0' ? [{ auth0Id: id }] : []),
      ]
    });

    let isNewUser = false;

    if (user) {
      // Update existing user with new provider data
      user.authProviderId = provider;
      user.providerSpecificId = id;
      user.email = email;
      user.name = name || user.name;
      user.emailVerified = emailVerified ?? user.emailVerified;
      user.picture = picture || user.picture;
      user.lastLogin = new Date();

      // Migrate legacy fields
      if (provider === 'firebase' && !user.firebaseUid) {
        user.firebaseUid = id;
      }
      if (provider === 'auth0' && !user.auth0Id) {
        user.auth0Id = id;
      }

      await user.save();
    } else {
      // Create new user
      isNewUser = true;
      const userData: any = {
        authProviderId: provider,
        providerSpecificId: id,
        email,
        name: name || '',
        emailVerified: emailVerified ?? false,
        picture: picture,
        role: 'member',
        lastLogin: new Date()
      };

      // Set legacy fields for compatibility
      if (provider === 'firebase') {
        userData.firebaseUid = id;
      }
      if (provider === 'auth0') {
        userData.auth0Id = id;
      }

      user = new User(userData);
      await user.save();

      // Create a team for new users
      const newTeam = new Team({
        name: `${email}'s Team`
      });
      await newTeam.save();

      // Add user to team as owner
      const teamMember = new TeamMember({
        userId: user._id.toString(),
        teamId: newTeam._id.toString(),
        role: 'owner'
      });
      await teamMember.save();

      // Update user role to owner
      user.role = 'owner';
      await user.save();

      // Log team creation activity
      await logActivity(newTeam._id.toString(), user._id.toString(), ActivityType.CREATE_TEAM);
    }

    // Set session for the user
    await setSession({ id: user._id.toString() });

    // Log sign in activity
    const teamMember = await TeamMember.findOne({ userId: user._id.toString() })
      .populate('teamId');
    const team = teamMember?.teamId as any;
    
    await logActivity(
      team?._id?.toString(),
      user._id.toString(),
      isNewUser ? ActivityType.CREATE_USER : ActivityType.SIGN_IN
    );

    return NextResponse.json({
      success: true,
      user: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        authProviderId: user.authProviderId,
        providerSpecificId: user.providerSpecificId,
      },
      isNewUser
    });

  } catch (error) {
    console.error('User sync error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
