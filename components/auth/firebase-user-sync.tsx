'use client';

import { useAuth } from './firebase-auth-provider';
import { useEffect, useState } from 'react';

export function FirebaseUserSync({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncCompleted, setSyncCompleted] = useState(false);

  useEffect(() => {
    async function syncUser() {
      if (!user || loading || isSyncing || syncCompleted) {
        return;
      }

      setIsSyncing(true);
      
      try {
        const response = await fetch('/api/auth/sync-firebase-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL
          })
        });

        const result = await response.json(); 
        
        if (result.success) {
          console.log('Firebase user synced successfully:', result.user);
          setSyncCompleted(true);
        } else {
          console.error('Failed to sync Firebase user:', result.error);
        }
      } catch (error) {
        console.error('Error syncing Firebase user:', error);
      } finally {
        setIsSyncing(false);
      }
    }

    syncUser();
  }, [user, loading, isSyncing, syncCompleted]);

  return <>{children}</>;
}
