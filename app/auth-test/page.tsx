'use client';

import { useFirebaseAuth } from '@/hooks/use-firebase-auth';
import { FirebaseSignOutButton } from '@/components/auth/firebase-signout-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AuthTestPage() {
  const { firebaseUser, dbUser, loading } = useFirebaseAuth();

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">Firebase Auth Integration Test</h1>
      
      <div className="flex justify-center space-x-4">
        {!firebaseUser ? (
                      <Link href="/login">Sign In</Link>
        ) : (
          <FirebaseSignOutButton />
        )}
      </div>

      {loading && (
        <div className="text-center">Loading user data...</div>
      )}

      {firebaseUser && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Welcome, {firebaseUser.displayName || firebaseUser.email}!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Firebase User Data:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
                {JSON.stringify({
                  uid: firebaseUser.uid,
                  email: firebaseUser.email,
                  displayName: firebaseUser.displayName,
                  emailVerified: firebaseUser.emailVerified,
                  photoURL: firebaseUser.photoURL
                }, null, 2)}
              </pre>
            </div>
            
            {dbUser && (
              <div>
                <h3 className="text-lg font-medium mb-4">Database User Data:</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
                  {JSON.stringify(dbUser, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      {!firebaseUser && !loading && (
        <div className="text-center space-y-4">
          <p>Please log in to see your profile information.</p>
        </div>
      )}
    </div>
  );
}