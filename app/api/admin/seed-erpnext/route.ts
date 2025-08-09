import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth/session';
import { getUserById } from '@/lib/auth/firebase-user-sync';
import { seedErpNextApp } from '@/lib/db/seed-erpnext-app';

export async function POST(request: NextRequest) {
  try {
    // Check if user is admin
    const session = await getSession();
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const user = await getUserById(session.user.id.toString());
    if (!user || user.role !== 'platform_admin') {
      return NextResponse.json({ error: 'Platform admin access required' }, { status: 403 });
    }

    // Seed ERPNext app
    const app = await seedErpNextApp();
    
    // Check if app was just created or already existed
    const isNewApp = app.createdAt && new Date(app.createdAt).getTime() > (Date.now() - 1000);
    
    return NextResponse.json({
      success: true,
      message: isNewApp ? 'ERPNext app seeded successfully' : 'ERPNext app already exists',
      app,
      isNewApp
    });

  } catch (error) {
    console.error('Error seeding ERPNext app:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to seed ERPNext app'
    }, { status: 500 });
  }
}
