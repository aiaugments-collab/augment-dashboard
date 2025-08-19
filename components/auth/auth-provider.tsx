'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AuthContextType, AuthUser, DatabaseUser } from '@/lib/auth/types';
import { AuthManager } from '@/lib/auth/auth-manager';
import useSWR from 'swr';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the synced user data from database
  const { data: dbUser, error: dbError, mutate } = useSWR<DatabaseUser>(
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

  useEffect(() => {
    let isMounted = true;
    let unsubscribe: (() => void) | null = null;

    const initializeAuth = async () => {
      try {
        // Get initial user
        const currentUser = await AuthManager.getCurrentUser();
        if (isMounted) {
          setUser(currentUser);
          setLoading(false);
        }

        // Set up auth state listener
        unsubscribe = AuthManager.onAuthStateChanged((authUser) => {
          if (isMounted) {
            setUser(authUser);
            setError(null);
            if (!authUser) {
              // Clear SWR cache when user signs out
              mutate(undefined, false);
            }
          }
        });
      } catch (err) {
        console.error('Auth initialization error:', err);
        if (isMounted) {
          setError('Failed to initialize authentication');
          setLoading(false);
        }
      }
    };

    // Set timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      if (isMounted && loading) {
        console.warn('Auth initialization timeout');
        setLoading(false);
      }
    }, 3000);

    initializeAuth();

    return () => {
      isMounted = false;
      clearTimeout(timeout);
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [loading, mutate]);

  const signIn = async (email: string, password: string) => {
    setError(null);
    const result = await AuthManager.signIn(email, password);
    
    if (result.error) {
      setError(result.error);
    } else if (result.user) {
      // Sync user to database
      await syncUserToDatabase(result.user);
      mutate(); // Refresh user data
    }
    
    return result;
  };

  const signUp = async (email: string, password: string, name?: string) => {
    setError(null);
    const result = await AuthManager.signUp(email, password, name);
    
    if (result.error) {
      setError(result.error);
    } else if (result.user) {
      // Sync user to database
      await syncUserToDatabase(result.user);
      mutate(); // Refresh user data
    }
    
    return result;
  };

  const signOut = async () => {
    try {
      await AuthManager.signOut();
      await fetch('/api/auth/signout', { method: 'POST' });
      mutate(undefined, false); // Clear user data
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to sign out');
      throw err;
    }
  };

  const resetPassword = async (email: string) => {
    setError(null);
    try {
      await AuthManager.resetPassword(email);
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email');
      throw err;
    }
  };

  const updateProfile = async (updates: Partial<AuthUser>) => {
    setError(null);
    const result = await AuthManager.updateUserProfile(updates);
    
    if (result.error) {
      setError(result.error);
    } else {
      mutate(); // Refresh user data
    }
    
    return result;
  };

  const refresh = async () => {
    mutate();
  };

  const contextValue: AuthContextType = {
    user,
    dbUser: dbUser || null,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
    refresh,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Helper function to sync user to database
async function syncUserToDatabase(user: AuthUser) {
  try {
    const response = await fetch('/api/auth/sync-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
        emailVerified: user.emailVerified,
        provider: AuthManager.getActiveProviderName(),
      }),
    });

    if (!response.ok) {
      console.error('Failed to sync user to database');
    }
  } catch (error) {
    console.error('User sync error:', error);
  }
}
