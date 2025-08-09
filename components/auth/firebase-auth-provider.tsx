'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to stop loading after 1 second if Firebase doesn't respond
    const timeout = setTimeout(() => {
      console.log('Firebase timeout - showing login buttons');
      setLoading(false);
    }, 1000);

    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        clearTimeout(timeout);
        setUser(user);
        setLoading(false);
      }, (error) => {
        console.error('Firebase auth error:', error);
        clearTimeout(timeout);
        setLoading(false);
      });

      return () => {
        clearTimeout(timeout);
        unsubscribe();
      };
    } catch (error) {
      console.error('Firebase initialization error:', error);
      clearTimeout(timeout);
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
