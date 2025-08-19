import { AuthProvider, AuthUser, AuthResult } from '../types';

export abstract class BaseAuthProvider implements AuthProvider {
  protected providerName: string;

  constructor(providerName: string) {
    this.providerName = providerName;
  }

  abstract signIn(email: string, password: string): Promise<AuthResult>;
  abstract signUp(email: string, password: string, name?: string): Promise<AuthResult>;
  abstract signOut(): Promise<void>;
  abstract getCurrentUser(): Promise<AuthUser | null>;
  abstract updateUserProfile(updates: Partial<AuthUser>): Promise<AuthResult>;
  abstract resetPassword(email: string): Promise<void>;
  abstract changePassword(newPassword: string): Promise<void>;
  abstract onAuthStateChanged(callback: (user: AuthUser | null) => void): () => void;
  abstract getProviderData(): Record<string, any>;

  getProviderName(): string {
    return this.providerName;
  }

  // Helper method to normalize user data across providers
  protected normalizeUser(providerUser: any): AuthUser {
    return {
      id: providerUser.id || providerUser.uid || providerUser._id,
      email: providerUser.email,
      name: providerUser.name || providerUser.displayName,
      picture: providerUser.picture || providerUser.photoURL || providerUser.avatar,
      emailVerified: providerUser.emailVerified || false,
      createdAt: providerUser.createdAt ? new Date(providerUser.createdAt) : undefined,
      updatedAt: providerUser.updatedAt ? new Date(providerUser.updatedAt) : undefined,
    };
  }

  // Helper method to handle auth errors consistently
  protected handleAuthError(error: any): string {
    if (typeof error === 'string') return error;
    if (error?.message) return error.message;
    if (error?.code) {
      // Common error code mapping
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          return 'Invalid email or password';
        case 'auth/email-already-in-use':
          return 'Email is already registered';
        case 'auth/weak-password':
          return 'Password is too weak';
        case 'auth/invalid-email':
          return 'Invalid email address';
        case 'auth/too-many-requests':
          return 'Too many failed attempts. Please try again later';
        default:
          return error.code;
      }
    }
    return 'Authentication error occurred';
  }
}
