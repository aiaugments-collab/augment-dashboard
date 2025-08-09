import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/connection';
import { SubscriptionPlan, PlanApp, App } from '@/lib/db/schemas';

// Public API - accessible to all users
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Get all active plans with their app relationships
    const plans = await SubscriptionPlan.find({ isActive: true })
      .sort({ position: 1 })
      .lean();

    const planApps = await PlanApp.find({})
      .populate('appId')
      .lean();

    const allApps = await App.find({ status: 'active' }).lean();

    // Group apps by plan
    const plansWithApps = plans.map(plan => {
      const includedApps = planApps
        .filter(pa => pa.planId.toString() === (plan._id as string).toString() && pa.isIncluded)
        .map(pa => pa.appId ? {
          _id: pa.appId._id.toString(),
          name: pa.appId.name,
          slug: pa.appId.slug,
          description: pa.appId.description,
          icon: pa.appId.icon,
          color: pa.appId.color,
          category: pa.appId.category
        } : null)
        .filter(Boolean);

      return {
        _id: (plan._id as any).toString(),
        name: plan.name,
        description: plan.description,
        price: plan.price,
        position: plan.position,
        features: plan.features,
        isActive: plan.isActive,
        stripePriceId: plan.stripePriceId,
        includedApps,
        appCount: includedApps.length
      };
    });

    // Serialize allApps too
    const serializedApps = allApps.map(app => ({
      _id: (app._id as any).toString(),
      name: app.name,
      slug: app.slug,
      description: app.description,
      icon: app.icon,
      color: app.color,
      category: app.category,
      status: app.status
    }));

    return NextResponse.json({
      plans: plansWithApps,
      allApps: serializedApps,
      totalPlans: plans.length
    });

  } catch (error) {
    console.error('Get plans error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch plans' },
      { status: 500 }
    );
  }
}