'use client';

import React from 'react';
import { useUser, useStackApp } from "@stackframe/stack";
import useSWR from 'swr';

export function useStackAuth() {
  const user = useUser();
  const stackApp = useStackApp();
  
  // Fetch the synced user data from database
  const { data: dbUser, error: dbError, mutate } = useSWR(
    user ? '/api/user' : null,
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 401) return null;
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    },
    {
      errorRetryCount: 1,
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  );

  const signOut = async () => {
    try {
      if (user) {
        await user.signOut();
        await fetch('/api/auth/signout', { method: 'POST' });
        mutate(undefined, false); // Clear user data
      }
    } catch (err: any) {
      console.error('Sign out error:', err);
      throw err;
    }
  };

  const refresh = async () => {
    mutate();
  };

  // Sync user to database when user changes
  React.useEffect(() => {
    if (user) {
      syncUserToDatabase(user);
    }
  }, [user]);

  return {
    user,
    dbUser: dbUser || null,
    loading: !user && !dbError, // Stack Auth manages loading state
    error: dbError,
    signOut,
    refresh,
    stackApp,
  };
}

// Helper function to sync user to database
async function syncUserToDatabase(user: any) {
  try {
    const response = await fetch('/api/auth/sync-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: user.id,
        email: user.primaryEmail,
        name: user.displayName,
        picture: user.profileImageUrl,
        emailVerified: user.primaryEmailVerified,
        provider: 'stack-auth',
      }),
    });

    if (!response.ok) {
      console.error('Failed to sync user to database');
    }
  } catch (error) {
    console.error('User sync error:', error);
  }
}
