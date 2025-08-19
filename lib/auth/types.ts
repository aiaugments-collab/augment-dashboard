// Generic authentication types that work with any provider

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  picture?: string;
  emailVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AuthProvider {
  // Core authentication methods
  signIn(email: string, password: string): Promise<AuthResult>;
  signUp(email: string, password: string, name?: string): Promise<AuthResult>;
  signOut(): Promise<void>;
  
  // User management
  getCurrentUser(): Promise<AuthUser | null>;
  updateUserProfile(updates: Partial<AuthUser>): Promise<AuthResult>;
  
  // Password management
  resetPassword(email: string): Promise<void>;
  changePassword(newPassword: string): Promise<void>;
  
  // State management
  onAuthStateChanged(callback: (user: AuthUser | null) => void): () => void;
  
  // Provider-specific data
  getProviderName(): string;
  getProviderData(): Record<string, any>;
}

export interface AuthResult {
  user: AuthUser | null;
  error: string | null;
}

export interface AuthConfig {
  provider: 'stack-auth' | 'firebase' | 'auth0' | 'supabase';
  config: Record<string, any>;
}

export interface DatabaseUser extends AuthUser {
  _id: string;
  role: string;
  plan?: string;
  subscription?: string;
  authProviderId: string; // Which provider they use
  providerSpecificId: string; // Provider's user ID
  lastLogin?: Date;
  deletedAt?: Date;
}

// Context types
export interface AuthContextType {
  user: AuthUser | null;
  dbUser: DatabaseUser | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<AuthResult>;
  signUp: (email: string, password: string, name?: string) => Promise<AuthResult>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (updates: Partial<AuthUser>) => Promise<AuthResult>;
  refresh: () => Promise<void>;
}

// Provider registration
export interface ProviderRegistry {
  register(name: string, provider: AuthProvider): void;
  get(name: string): AuthProvider | null;
  getActive(): AuthProvider;
  setActive(name: string): void;
}
