import { notFound, redirect } from 'next/navigation';
import { getSession } from '@/lib/auth/session';
import { getUserById } from '@/lib/auth/firebase-user-sync';
import { getApp, isAppAvailable } from '@/lib/apps/registry';
import { LaunchContext } from '@/lib/apps/types';
import { initializeAppRegistry } from '@/lib/apps/initialize-registry';

interface LaunchPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function LaunchPage({ params, searchParams }: LaunchPageProps) {
  const { slug } = await params;
  const searchParamsObj = await searchParams;
  
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

  // TODO: Check access here (similar to app page)
  // For now, assume user has access

  // Prepare launch context
  const launchContext: LaunchContext = {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      planLevel: 0, // TODO: Get actual plan level
    },
    searchParams: new URLSearchParams(searchParamsObj as Record<string, string>)
  };

  try {
    // Execute the app's launch handler
    const launchResult = await appEntry.module.launchHandler(launchContext);
    
    if (launchResult.success && launchResult.redirectUrl) {
      // Redirect to the app
      redirect(launchResult.redirectUrl);
    } else if (launchResult.requiresSetup && launchResult.setupUrl) {
      // Redirect to setup page
      redirect(launchResult.setupUrl);
    } else {
      // Show error or redirect back to app page
      const errorMessage = launchResult.error || 'Failed to launch app';
      redirect(`/app/${slug}?error=${encodeURIComponent(errorMessage)}`);
    }
  } catch (error) {
    console.error('App launch error:', error);
    redirect(`/app/${slug}?error=${encodeURIComponent('An unexpected error occurred')}`);
  }
}
