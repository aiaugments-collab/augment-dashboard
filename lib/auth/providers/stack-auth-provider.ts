import { BaseAuthProvider } from './base-provider';
import { AuthUser, AuthResult } from '../types';
import { stackClientApp } from '@/stack';

export class StackAuthProvider extends BaseAuthProvider {
  constructor() {
    super('stack-auth');
  }

  async signIn(email: string, password: string): Promise<AuthResult> {
    try {
      const result = await stackClientApp.signInWithCredential({
        email,
        password,
      });

      if (result.status === 'ok') {
        const user = stackClientApp.useUser();
        if (user) {
          return {
            user: this.normalizeUser(user),
            error: null,
          };
        }
      }
      
      return {
        user: null,
        error: 'Failed to sign in',
      };
    } catch (error: any) {
      return {
        user: null,
        error: this.handleAuthError(error),
      };
    }
  }

  async signUp(email: string, password: string, name?: string): Promise<AuthResult> {
    try {
      const result = await stackClientApp.signUpWithCredential({
        email,
        password,
      });

      if (result.status === 'ok') {
        const user = stackClientApp.useUser();
        if (user && name) {
          // Update display name if provided
          await user.update({
            displayName: name,
          });
        }

        if (user) {
          return {
            user: this.normalizeUser(user),
            error: null,
          };
        }
      }
      
      return {
        user: null,
        error: 'Failed to create account',
      };
    } catch (error: any) {
      return {
        user: null,
        error: this.handleAuthError(error),
      };
    }
  }

  async signOut(): Promise<void> {
    try {
      const user = stackClientApp.useUser();
      if (user) {
        await user.signOut();
      }
    } catch (error: any) {
      console.error('Sign out error:', error);
      throw new Error(this.handleAuthError(error));
    }
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      // Stack Auth's useUser() hook only works in React components
      // For async operations, we need to check differently
      const user = stackClientApp.useUser();
      return user ? this.normalizeUser(user) : null;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }

  async updateUserProfile(updates: Partial<AuthUser>): Promise<AuthResult> {
    try {
      const user = stackClientApp.useUser();
      if (!user) {
        return {
          user: null,
          error: 'No authenticated user',
        };
      }

      await user.update({
        displayName: updates.name,
        // Stack Auth handles profile updates differently
        // Add more fields as needed based on Stack Auth API
      });

      return {
        user: this.normalizeUser(user),
        error: null,
      };
    } catch (error: any) {
      return {
        user: null,
        error: this.handleAuthError(error),
      };
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      // TODO: Implement password reset with Stack Auth
      // This would typically be: await stackClientApp.resetPassword(email);
      console.warn('Password reset not yet implemented for Stack Auth');
      throw new Error('Password reset functionality coming soon');
    } catch (error: any) {
      throw new Error(this.handleAuthError(error));
    }
  }

  async changePassword(newPassword: string): Promise<void> {
    try {
      const user = stackClientApp.useUser();
      if (!user) {
        throw new Error('No authenticated user');
      }

      // TODO: Implement password change with Stack Auth
      // This would typically be: await user.updatePassword({ newPassword });
      console.warn('Password change not yet implemented for Stack Auth');
      throw new Error('Password change functionality coming soon');
    } catch (error: any) {
      throw new Error(this.handleAuthError(error));
    }
  }

  onAuthStateChanged(callback: (user: AuthUser | null) => void): () => void {
    // Stack Auth uses a different pattern for auth state changes
    // This is a simplified implementation
    let currentUser: AuthUser | null = null;

    const checkAuthState = async () => {
      const user = await this.getCurrentUser();
      if (user !== currentUser) {
        currentUser = user;
        callback(user);
      }
    };

    // Initial check
    checkAuthState();

    // Set up polling (Stack Auth might have a better way)
    const interval = setInterval(checkAuthState, 1000);

    return () => {
      clearInterval(interval);
    };
  }

  getProviderData(): Record<string, any> {
    return {
      name: 'Stack Auth',
      version: '1.0.0',
      features: ['email/password', 'profile-management', 'password-reset'],
    };
  }

  // Stack Auth specific methods
  getStackUser() {
    return stackClientApp.useUser();
  }

  async refreshToken(): Promise<void> {
    // Stack Auth handles token refresh automatically
    try {
      // No explicit refresh needed for Stack Auth
      console.log('Token refresh handled automatically by Stack Auth');
    } catch (error) {
      console.error('Token refresh error:', error);
    }
  }
}
