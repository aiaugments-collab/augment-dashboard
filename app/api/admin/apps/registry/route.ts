import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth/session';
import { getUserById } from '@/lib/auth/firebase-user-sync';
import { getEnabledApps } from '@/lib/apps/registry';
import { initializeAppRegistry } from '@/lib/apps/initialize-registry';

export async function GET(request: NextRequest) {
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

    // Initialize app registry
    initializeAppRegistry();

    // Get all enabled apps from registry
    const enabledApps = getEnabledApps();

    // Convert registry apps to admin format
    const registryApps = Object.entries(enabledApps).map(([slug, appEntry]) => {
      const { metadata, accessRequirements } = appEntry.module;
      
      return {
        _id: slug,
        name: metadata.name,
        slug: metadata.slug,
        description: metadata.description,
        shortDescription: metadata.shortDescription,
        icon: metadata.icon,
        color: metadata.color,
        category: metadata.category,
        isPopular: metadata.isPopular || false,
        isFeatured: metadata.isFeatured || false,
        popularity: metadata.popularity || 0,
        rating: metadata.rating || 0,
        integrationStatus: metadata.integrationStatus || 'ready',
        requiresPlan: accessRequirements.requiresPlan,
        minimumPlanLevel: accessRequirements.minimumPlanLevel || 0,
        status: metadata.status || 'active',
        source: 'registry', // Mark as registry-managed
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    });

    // Sort by name
    registryApps.sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({
      success: true,
      apps: registryApps,
      totalApps: registryApps.length,
      source: 'app_registry'
    });

  } catch (error) {
    console.error('Error fetching registry apps:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch registry apps'
    }, { status: 500 });
  }
}

