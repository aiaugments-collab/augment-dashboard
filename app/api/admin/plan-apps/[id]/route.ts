import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth/session';
import { getUserById } from '@/lib/auth/firebase-user-sync';
import { connectDB } from '@/lib/db/connection';
import { PlanApp } from '@/lib/db/schemas/planApp';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    await connectDB();

    // Resolve params
    const { id } = await params;

    const planApp = await PlanApp.findByIdAndDelete(id);
    if (!planApp) {
      return NextResponse.json({ error: 'Plan-app relationship not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'App removed from plan successfully'
    });

  } catch (error) {
    console.error('Error deleting plan-app relationship:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to delete plan-app relationship'
    }, { status: 500 });
  }
}