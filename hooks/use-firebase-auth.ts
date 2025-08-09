'use client';

import { useAuth } from '@/components/auth/firebase-auth-provider';
import { signOutUser } from '@/lib/firebase/auth';
import useSWR from 'swr';

export function useFirebaseAuth() {
  const { user, loading } = useAuth();
  
  // Fetch the synced user data from our database
  const { data: dbUser, error, mutate } = useSWR(
    user ? '/api/user' : null,
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        // Don't throw error for unauthorized users on public pages
        if (response.status === 401) return null;
        throw new Error('Failed to fetch user');
      }
      return response.json();
    },
    {
      // Add timeout and error handling
      errorRetryCount: 1,
      shouldRetryOnError: false,
      revalidateOnFocus: false
    }
  );

  const signOut = async () => {
    try {
      await signOutUser();
      await fetch('/api/auth/firebase-signout', { method: 'POST' });
      window.location.href = '/login';
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return {
    firebaseUser: user,
    dbUser,
    loading,
    error,
    signOut,
    mutate
  };
}
