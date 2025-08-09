import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { User, Team, TeamMember, ActivityLog, ActivityType } from '@/lib/db/schemas';
import { setSession } from '@/lib/auth/session';

async function logActivity(
  teamId: string | null | undefined,
  userId: string,
  type: ActivityType,
  ipAddress?: string
) {
  const newActivity = new ActivityLog({
    teamId,
    userId,
    action: type,
    ipAddress: ipAddress || 'unknown'
  });
  
  await newActivity.save();
}

export async function POST(request: NextRequest) {
  try {
    const { uid, email, name, emailVerified, photoURL } = await request.json();

    if (!uid || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await connectDB();

    // Find existing user by Firebase UID or email
    let user = await User.findOne({
      $or: [
        { firebaseUid: uid },
        { email: email }
      ]
    });

    let isNewUser = false;

    if (user) {
      // Update existing user with Firebase data
      user.firebaseUid = uid;
      user.email = email;
      user.name = name || user.name;
      user.emailVerified = emailVerified;
      user.picture = photoURL || user.picture;
      user.lastLogin = new Date();
      await user.save();
    } else {
      // Create new user
      isNewUser = true;
      user = new User({
        firebaseUid: uid,
        email,
        name: name || '',
        emailVerified,
        picture: photoURL,
        role: 'member',
        lastLogin: new Date()
      });
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
    await setSession(user);

    // Log sign in activity
    const teamMember = await TeamMember.findOne({ userId: user._id.toString() })
      .populate('teamId');
    const team = teamMember?.teamId as any;
    
    if (team) {
      await logActivity(team._id.toString(), user._id.toString(), ActivityType.SIGN_IN);
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        isNewUser
      }
    });

  } catch (error) {
    console.error('Error syncing Firebase user:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
