import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth/session';
import { getUserById } from '@/lib/auth/firebase-user-sync';
import { seedSubscriptionData } from '@/lib/db/seed-subscriptions';

export async function POST(request: NextRequest) {
  try {
    // Check authentication and admin role
    const session = await getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await getUserById(session.user.id.toString());
    if (!user || user.role !== 'platform_admin') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    // Run seed data
    const result = await seedSubscriptionData();
    
    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 500 });
    }

  } catch (error) {
    console.error('Seed subscriptions error:', error);
    return NextResponse.json(
      { error: 'Failed to seed subscription data' },
      { status: 500 }
    );
  }
}