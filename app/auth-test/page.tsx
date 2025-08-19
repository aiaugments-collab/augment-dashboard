'use client';

import { useUser } from "@stackframe/stack";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AuthTestPage() {
  const user = useUser();
  const loading = false; // Stack Auth handles loading internally

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">Stack Auth Integration Test</h1>
      
      <div className="flex justify-center space-x-4">
        {!user ? (
                      <Link href="/login">Sign In</Link>
        ) : (
          <Button onClick={() => user?.signOut()}>
            Sign Out
          </Button>
        )}
      </div>

      {loading && (
        <div className="text-center">Loading user data...</div>
      )}

      {user && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Welcome, {user.displayName || user.primaryEmail}!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Auth User Data:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
                {JSON.stringify({
                  id: user.id,
                  email: user.primaryEmail,
                  name: user.displayName,
                  emailVerified: user.primaryEmailVerified,
                  picture: user.profileImageUrl
                }, null, 2)}
              </pre>
            </div>
            
            {user && (
              <div>
                              <h3 className="text-lg font-medium mb-4">Stack Auth User Data:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
                {JSON.stringify({
                  id: user.id,
                  primaryEmail: user.primaryEmail,
                  displayName: user.displayName,
                  profileImageUrl: user.profileImageUrl
                }, null, 2)}
              </pre>
              </div>
            )}
          </div>
        </div>
      )}

      {!user && !loading && (
        <div className="text-center space-y-4">
          <p>Please log in to see your profile information.</p>
        </div>
      )}
    </div>
  );
}