import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth/session';
import { connectDB } from '@/lib/db/mongodb';
import { User } from '@/lib/db/schemas';
import SubscriptionManager from '@/lib/subscription/subscription-manager';

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get user's subscription
    const subscription = await SubscriptionManager.getUserSubscription(user.id);
    
    // Get user's accessible apps
    const userApps = await SubscriptionManager.getUserApps(user.id);

    return NextResponse.json({
      subscription,
      apps: userApps,
      hasActiveSubscription: subscription?.status === 'active'
    }, { status: 200 });

  } catch (error) {
    console.error('Get subscription status API error:', error);
    return NextResponse.json(
      { error: 'Failed to get subscription status' },
      { status: 500 }
    );
  }
}