import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/connection';
import { getUserAppAccess } from '@/lib/access-control/app-access';
import { getUserById } from '@/lib/auth/firebase-user-sync';
import { getSession } from '@/lib/auth/session';

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Get user details from database using Auth0 ID
    const user = await getUserById(session.user.id.toString());
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Use the centralized access control function
    const { apps, subscription } = await getUserAppAccess(user.id);

    return NextResponse.json({
      apps,
      userSubscription: subscription ? {
        plan: {
          name: subscription.planId, // This will need to be populated properly
          position: subscription.planLevel
        },
        status: subscription.status
      } : null
    });

  } catch (error) {
    console.error('Error fetching app catalog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch app catalog' },
      { status: 500 }
    );
  }
}