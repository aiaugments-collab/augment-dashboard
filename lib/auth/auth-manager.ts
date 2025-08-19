import { AuthProvider, AuthUser, AuthResult, ProviderRegistry } from './types';

class AuthManagerClass implements ProviderRegistry {
  private providers: Map<string, AuthProvider> = new Map();
  private activeProvider: string | null = null;

  register(name: string, provider: AuthProvider): void {
    this.providers.set(name, provider);
    
    // Set as active if it's the first provider or matches environment
    if (!this.activeProvider || process.env.AUTH_PROVIDER === name) {
      this.activeProvider = name;
    }
  }

  get(name: string): AuthProvider | null {
    return this.providers.get(name) || null;
  }

  getActive(): AuthProvider {
    if (!this.activeProvider) {
      throw new Error('No active authentication provider set');
    }
    
    const provider = this.providers.get(this.activeProvider);
    if (!provider) {
      throw new Error(`Authentication provider '${this.activeProvider}' not found`);
    }
    
    return provider;
  }

  setActive(name: string): void {
    if (!this.providers.has(name)) {
      throw new Error(`Authentication provider '${name}' not registered`);
    }
    this.activeProvider = name;
  }

  getActiveProviderName(): string {
    return this.activeProvider || 'none';
  }

  // Proxy methods to active provider for convenience
  async signIn(email: string, password: string): Promise<AuthResult> {
    return this.getActive().signIn(email, password);
  }

  async signUp(email: string, password: string, name?: string): Promise<AuthResult> {
    return this.getActive().signUp(email, password, name);
  }

  async signOut(): Promise<void> {
    return this.getActive().signOut();
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    return this.getActive().getCurrentUser();
  }

  async updateUserProfile(updates: Partial<AuthUser>): Promise<AuthResult> {
    return this.getActive().updateUserProfile(updates);
  }

  async resetPassword(email: string): Promise<void> {
    return this.getActive().resetPassword(email);
  }

  async changePassword(newPassword: string): Promise<void> {
    return this.getActive().changePassword(newPassword);
  }

  onAuthStateChanged(callback: (user: AuthUser | null) => void): () => void {
    return this.getActive().onAuthStateChanged(callback);
  }
}

// Singleton instance
export const AuthManager = new AuthManagerClass();

// Helper to get configured provider based on environment
export function getConfiguredProvider(): string {
  return process.env.AUTH_PROVIDER || 'stack-auth';
}

// Environment-based provider initialization
export function initializeAuth() {
  const providerName = getConfiguredProvider();
  console.log(`Initializing authentication with provider: ${providerName}`);
  
  // The actual provider registration happens in provider modules
  // This just ensures we have the right active provider
  if (AuthManager.get(providerName)) {
    AuthManager.setActive(providerName);
  }
}
