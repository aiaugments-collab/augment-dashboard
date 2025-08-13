// Base interfaces and utilities for app modules

export interface BaseAppConfig {
  // Common configuration that all apps might need
  enableAnalytics?: boolean;
  enableErrorReporting?: boolean;
  customCSS?: string;
  customJS?: string;
}

// Common app layout props
export interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  showBackButton?: boolean;
  customActions?: React.ReactNode; 
  config?: BaseAppConfig;
}

// Common button actions for app cards
export interface AppActionButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'secondary' | 'destructive';
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

// App card display data
export interface AppCardData {
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  isPopular?: boolean;
  isFeatured?: boolean;
  rating?: number;
  integrationStatus: 'ready' | 'beta' | 'coming_soon';
  hasAccess: boolean;
  accessReason?: string;
  actions: AppActionButton[];
}

// SSO token data for apps that need it
export interface SSOTokenData {
  token: string;
  expiresAt: string;
  targetApp: string;
  redirectUrl: string;
}
