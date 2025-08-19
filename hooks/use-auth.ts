'use client';

import { useAuth as useAuthContext } from '@/components/auth/auth-provider';

// Simple re-export for convenience and consistency
export const useAuth = useAuthContext;

// Additional helper hooks can be added here if needed
export function useUser() {
  const { user, dbUser, loading } = useAuth();
  return { user, dbUser, loading };
}

export function useAuthActions() {
  const { signIn, signUp, signOut, resetPassword, updateProfile } = useAuth();
  return { signIn, signUp, signOut, resetPassword, updateProfile };
}
