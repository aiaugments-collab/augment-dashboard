import { AuthManager } from './auth-manager';
import { StackAuthProvider } from './providers/stack-auth-provider';

// Initialize auth providers
export function initializeAuthProviders() {
  // Register Stack Auth provider
  const stackAuthProvider = new StackAuthProvider();
  AuthManager.register('stack-auth', stackAuthProvider);

  // Set active provider based on environment
  const activeProvider = process.env.NEXT_PUBLIC_AUTH_PROVIDER || 'stack-auth';
  if (AuthManager.get(activeProvider)) {
    AuthManager.setActive(activeProvider);
    console.log(`Initialized auth with provider: ${activeProvider}`);
  } else {
    console.warn(`Provider '${activeProvider}' not found, using default`);
  }
}

// Call this in your app initialization
if (typeof window !== 'undefined') {
  // Client-side initialization
  initializeAuthProviders();
}
