import { AppModule, AppRegistry, AppRegistryEntry } from './types';

// Central registry for all app modules
class AppRegistryManager {
  private registry: AppRegistry = {};

  // Register a new app module
  registerApp(slug: string, module: AppModule, enabled: boolean = true): void {
    this.registry[slug] = {
      module,
      enabled,
      lastUpdated: new Date()
    };
  }

  // Get an app by slug
  getApp(slug: string): AppRegistryEntry | undefined {
    return this.registry[slug];
  }

  // Get all apps
  getAllApps(): AppRegistry {
    return { ...this.registry };
  }

  // Get enabled apps only
  getEnabledApps(): AppRegistry {
    const enabledApps: AppRegistry = {};
    Object.entries(this.registry).forEach(([slug, entry]) => {
      if (entry.enabled) {
        enabledApps[slug] = entry;
      }
    });
    return enabledApps;
  }

  // Get apps by category
  getAppsByCategory(category: string): AppRegistry {
    const categoryApps: AppRegistry = {};
    Object.entries(this.registry).forEach(([slug, entry]) => {
      if (entry.enabled && entry.module.metadata.category === category) {
        categoryApps[slug] = entry;
      }
    });
    return categoryApps;
  }

  // Get apps by plan level
  getAppsByPlanLevel(planLevel: number): AppRegistry {
    const planApps: AppRegistry = {};
    Object.entries(this.registry).forEach(([slug, entry]) => {
      if (entry.enabled) {
        const { requiresPlan, minimumPlanLevel } = entry.module.accessRequirements;
        if (!requiresPlan || (minimumPlanLevel !== undefined && planLevel >= minimumPlanLevel)) {
          planApps[slug] = entry;
        }
      }
    });
    return planApps;
  }

  // Get popular/featured apps
  getFeaturedApps(): AppRegistry {
    const featuredApps: AppRegistry = {};
    Object.entries(this.registry).forEach(([slug, entry]) => {
      if (entry.enabled && (entry.module.metadata.isFeatured || entry.module.metadata.isPopular)) {
        featuredApps[slug] = entry;
      }
    });
    return featuredApps;
  }

  // Check if app exists and is enabled
  isAppAvailable(slug: string): boolean {
    const app = this.registry[slug];
    return app !== undefined && app.enabled && app.module.metadata.status === 'active';
  }

  // Enable/disable an app
  setAppStatus(slug: string, enabled: boolean): void {
    if (this.registry[slug]) {
      this.registry[slug].enabled = enabled;
      this.registry[slug].lastUpdated = new Date();
    }
  }

  // Get app metadata only (for catalog display)
  getAppMetadata(slug: string) {
    const app = this.registry[slug];
    return app ? app.module.metadata : undefined;
  }

  // Search apps by name, description, or tags
  searchApps(query: string): AppRegistry {
    const searchTerm = query.toLowerCase();
    const results: AppRegistry = {};
    
    Object.entries(this.registry).forEach(([slug, entry]) => {
      if (!entry.enabled) return;
      
      const { metadata } = entry.module;
      const searchableText = [
        metadata.name,
        metadata.description,
        metadata.shortDescription,
        ...(metadata.tags || []),
        metadata.category
      ].filter(Boolean).join(' ').toLowerCase();
      
      if (searchableText.includes(searchTerm)) {
        results[slug] = entry;
      }
    });
    
    return results;
  }

  // Get apps sorted by popularity
  getAppsByPopularity(): Array<{ slug: string; entry: AppRegistryEntry }> {
    return Object.entries(this.registry)
      .filter(([_, entry]) => entry.enabled)
      .sort(([_a, a], [_b, b]) => {
        const popularityA = a.module.metadata.popularity || 0;
        const popularityB = b.module.metadata.popularity || 0;
        return popularityB - popularityA;
      })
      .map(([slug, entry]) => ({ slug, entry }));
  }
}

// Create singleton instance
export const appRegistry = new AppRegistryManager();

// Helper functions for easy access
export const getApp = (slug: string) => appRegistry.getApp(slug);
export const getAllApps = () => appRegistry.getAllApps();
export const getEnabledApps = () => appRegistry.getEnabledApps();
export const isAppAvailable = (slug: string) => appRegistry.isAppAvailable(slug);
export const searchApps = (query: string) => appRegistry.searchApps(query);
export const getAppsByCategory = (category: string) => appRegistry.getAppsByCategory(category);
export const getAppsByPlanLevel = (planLevel: number) => appRegistry.getAppsByPlanLevel(planLevel);
export const getFeaturedApps = () => appRegistry.getFeaturedApps();

// Export the registry manager for module registration
export { AppRegistryManager };
