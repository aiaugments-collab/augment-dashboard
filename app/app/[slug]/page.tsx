import { notFound, redirect } from 'next/navigation';
import { getSession } from '@/lib/auth/session';
import { getUserById } from '@/lib/auth/firebase-user-sync';
import { connectDB } from '@/lib/db/connection';
import { UserSubscription } from '@/lib/db/schemas/userSubscription';
import { getApp, isAppAvailable } from '@/lib/apps/registry';
import { AppModuleProps } from '@/lib/apps/types';
import { initializeAppRegistry } from '@/lib/apps/initialize-registry';

interface AppPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getAppAccessInfo(userId: string, appSlug: string) {
  await connectDB();
  
  // Get app from registry
  const appEntry = getApp(appSlug);
  if (!appEntry) {
    return null;
  }

  const { accessRequirements } = appEntry.module;
  
  // If app doesn't require a plan, it's free
  if (!accessRequirements.requiresPlan) {
    return {
      hasAccess: true,
      accessReason: 'free' as const,
      userPlanLevel: 0,
    };
  }

  // Get user's active subscription
  const userSubscription = await UserSubscription.findOne({
    userId,
    status: 'active'
  }).populate('planId');

  if (!userSubscription) {
    return {
      hasAccess: false,
      accessReason: 'upgrade_required' as const,
      requiredPlanLevel: accessRequirements.minimumPlanLevel || 1,
      userPlanLevel: 0,
      upgradeUrl: '/pricing'
    };
  }

  // Check if subscription is expired
  if (userSubscription.expiresAt && new Date() > userSubscription.expiresAt) {
    return {
      hasAccess: false,
      accessReason: 'subscription_expired' as const,
      upgradeUrl: '/pricing'
    };
  }

  const userPlan = userSubscription.planId;
  const userPlanLevel = userPlan.position || 0;

  // Check if user's plan level meets minimum requirement
  if (accessRequirements.minimumPlanLevel && userPlanLevel >= accessRequirements.minimumPlanLevel) {
    return {
      hasAccess: true,
      accessReason: 'plan_level_access' as const,
      userPlanLevel,
      requiredPlanLevel: accessRequirements.minimumPlanLevel
    };
  }

  // Check custom access if defined
  if (accessRequirements.customAccessCheck) {
    const hasCustomAccess = await accessRequirements.customAccessCheck({ id: userId, planLevel: userPlanLevel });
    if (hasCustomAccess) {
      return {
        hasAccess: true,
        accessReason: 'included_in_plan' as const,
        userPlanLevel
      };
    }
  }

  // User needs to upgrade
  return {
    hasAccess: false,
    accessReason: 'upgrade_required' as const,
    requiredPlanLevel: accessRequirements.minimumPlanLevel || 1,
    userPlanLevel,
    upgradeUrl: '/pricing'
  };
}

export default async function AppPage({ params, searchParams }: AppPageProps) {
  const { slug } = await params;
  
  // Initialize app registry
  initializeAppRegistry();
  
  // Check if user is authenticated
  const session = await getSession();
  if (!session?.user) {
    redirect('/login');
  }

  // Get user details
  const user = await getUserById(session.user.id.toString());
  if (!user) {
    redirect('/login');
  }

  // Check if app exists and is available
  if (!isAppAvailable(slug)) {
    notFound();
  }

  // Get app from registry
  const appEntry = getApp(slug);
  if (!appEntry) {
    notFound();
  }

  // Get access information
  const accessInfo = await getAppAccessInfo(user.id, slug);
  if (!accessInfo) {
    notFound();
  }

  // Prepare user context
  const appUser = {
    id: user.id,
    email: user.email,
    name: user.name,
    planLevel: accessInfo.userPlanLevel || 0,
    subscription: user.currentPlanId ? {
      planId: user.currentPlanId,
      status: user.subscriptionStatus || 'unknown',
    } : undefined
  };

  // Prepare props for the app landing page
  const appProps: AppModuleProps = {
    user: appUser,
    hasAccess: accessInfo.hasAccess,
    accessReason: accessInfo.accessReason,
    upgradeUrl: accessInfo.upgradeUrl,
    requiredPlanLevel: accessInfo.requiredPlanLevel,
    userPlanLevel: accessInfo.userPlanLevel
  };

  // Render the app's landing page component
  const LandingPageComponent = appEntry.module.landingPage;
  
  return <LandingPageComponent {...appProps} />;
}
