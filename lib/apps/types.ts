
// Base app metadata that was previously stored in database
export interface AppMetadata {
  name: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  longDescription?: string;
  icon?: string; 
  color?: string;
  category?: string;
  screenshots?: string[];
  features?: string[];
  tags?: string[];
  website?: string;
  supportUrl?: string;
  integrationStatus: 'ready' | 'beta' | 'coming_soon';
  popularity?: number;
  rating?: number;
  isPopular?: boolean;
  isFeatured?: boolean;
  launchInNewTab?: boolean;
  status: 'active' | 'inactive';
}

// Access requirements for each app
export interface AccessRequirements {
  requiresPlan: boolean;
  minimumPlanLevel?: number; // 0=free, 1=starter, 2=pro, 3=enterprise
  customAccessCheck?: (user: any) => Promise<boolean>;
}

// Result of launching an app
export interface LaunchResult {
  success: boolean;
  redirectUrl?: string;
  message?: string;
  error?: string;
  requiresSetup?: boolean;
  setupUrl?: string;
}

// User context passed to apps
export interface AppUser {
  id: string;
  email: string;
  name?: string;
  planLevel: number;
  subscription?: {
    planId: string;
    status: string;
    expiresAt?: Date;
  };
}

// Launch context with additional data
export interface LaunchContext {
  user: AppUser;
  request?: Request;
  searchParams?: URLSearchParams;
}

// Main app module interface
export interface AppModule {
  metadata: AppMetadata;
  accessRequirements: AccessRequirements;
  landingPage: React.ComponentType<AppModuleProps>;
  launchHandler: (context: LaunchContext) => Promise<LaunchResult>;
}

// Props passed to app landing pages
export interface AppModuleProps {
  user: AppUser;
  hasAccess: boolean;
  accessReason?: 'free' | 'included_in_plan' | 'plan_level_access' | 'upgrade_required' | 'subscription_expired';
  upgradeUrl?: string;
  requiredPlanLevel?: number;
  userPlanLevel?: number;
}

// App registry entry
export interface AppRegistryEntry {
  module: AppModule;
  enabled: boolean;
  lastUpdated: Date;
}

// Registry interface
export interface AppRegistry {
  [slug: string]: AppRegistryEntry;
}
