import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth/session';
import { getUserById } from '@/lib/auth/firebase-user-sync';
import { connectDB } from '@/lib/db/connection';
import { UserSubscription } from '@/lib/db/schemas/userSubscription';
import { getEnabledApps } from '@/lib/apps/registry';
import { initializeAppRegistry } from '@/lib/apps/initialize-registry';

// Interface for app with access information
interface AppWithAccess {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  icon?: string;
  color?: string;
  category?: string;
  isPopular?: boolean;
  isFeatured?: boolean;
  popularity?: number;
  rating?: number;
  integrationStatus: string;
  requiresPlan: boolean;
  minimumPlanLevel?: number;
  status: string;
  hasAccess: boolean;
  accessReason: string;
  userPlanLevel: number;
  requiredPlanLevel?: number;
  upgradeUrl?: string;
}

async function getUserPlanLevel(userId: string): Promise<number> {
  try {
    await connectDB();
    
    const userSubscription = await UserSubscription.findOne({
      userId,
      status: 'active'
    }).populate('planId');

    if (!userSubscription) {
      return 0; // Free tier
    }

    // Check if subscription is expired
    if (userSubscription.expiresAt && new Date() > userSubscription.expiresAt) {
      return 0; // Expired subscription = free tier
    }

    return userSubscription.planId.position || 0;
  } catch (error) {
    console.error('Error getting user plan level:', error);
    return 0;
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user details from database using Auth0 ID
    const user = await getUserById(session.user.id.toString());
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Initialize app registry
    initializeAppRegistry();

    // Get user's plan level
    const userPlanLevel = await getUserPlanLevel(user.id);

    // Get all enabled apps from registry
    const enabledApps = getEnabledApps();

    // Convert registry apps to format expected by dashboard
    const appsWithAccess: AppWithAccess[] = Object.entries(enabledApps).map(([slug, appEntry]) => {
      const { metadata, accessRequirements } = appEntry.module;
      
      // Determine access
      let hasAccess = true;
      let accessReason = 'free';
      
      if (accessRequirements.requiresPlan) {
        if (userPlanLevel === 0) {
          hasAccess = false;
          accessReason = 'upgrade_required';
        } else if (accessRequirements.minimumPlanLevel && userPlanLevel < accessRequirements.minimumPlanLevel) {
          hasAccess = false;
          accessReason = 'upgrade_required';
        } else {
          accessReason = 'plan_level_access';
        }
      }

      return {
        _id: slug,
        name: metadata.name,
        slug: metadata.slug,
        description: metadata.description,
        shortDescription: metadata.shortDescription,
        icon: metadata.icon,
        color: metadata.color,
        category: metadata.category,
        isPopular: metadata.isPopular,
        isFeatured: metadata.isFeatured,
        popularity: metadata.popularity,
        rating: metadata.rating,
        integrationStatus: metadata.integrationStatus,
        requiresPlan: accessRequirements.requiresPlan,
        minimumPlanLevel: accessRequirements.minimumPlanLevel,
        status: metadata.status,
        hasAccess,
        accessReason,
        userPlanLevel,
        requiredPlanLevel: accessRequirements.minimumPlanLevel,
        upgradeUrl: hasAccess ? undefined : '/pricing'
      };
    });

    // Sort apps (featured first, then popular, then by popularity score, then by name)
    const sortedApps = appsWithAccess.sort((a, b) => {
      if (a.isFeatured !== b.isFeatured) {
        return b.isFeatured ? 1 : -1;
      }
      if (a.isPopular !== b.isPopular) {
        return b.isPopular ? 1 : -1;
      }
      if ((a.popularity || 0) !== (b.popularity || 0)) {
        return (b.popularity || 0) - (a.popularity || 0);
      }
      return a.name.localeCompare(b.name);
    });

    // Get subscription info
    let subscription = null;
    if (userPlanLevel > 0) {
      try {
        await connectDB();
        const userSubscription = await UserSubscription.findOne({
          userId: user.id,
          status: 'active'
        }).populate('planId');

        if (userSubscription) {
          subscription = {
            plan: {
              name: userSubscription.planId.name,
              position: userSubscription.planId.position
            },
            status: userSubscription.status
          };
        }
      } catch (error) {
        console.error('Error fetching subscription:', error);
      }
    }

    return NextResponse.json({
      apps: sortedApps,
      userSubscription: subscription
    });

  } catch (error) {
    console.error('Error fetching app registry:', error);
    return NextResponse.json(
      { error: 'Failed to fetch app registry' },
      { status: 500 }
    );
  }
}
