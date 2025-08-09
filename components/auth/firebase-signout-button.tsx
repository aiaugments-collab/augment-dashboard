'use client';

import { signOutUser } from '@/lib/firebase/auth';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

interface FirebaseSignOutButtonProps {
  children?: React.ReactNode;
  variant?: 'default' | 'ghost' | 'outline';
  className?: string;
}

export function FirebaseSignOutButton({ children, variant = 'ghost', className }: FirebaseSignOutButtonProps) {
  const handleSignOut = async () => {
    try {
      // Sign out from Firebase
      await signOutUser();
      
      // Clear server session
      await fetch('/api/auth/firebase-signout', {
        method: 'POST',
      });
      
      // Redirect to login
      window.location.href = '/login';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Button variant={variant} onClick={handleSignOut} className={`flex items-center gap-2 ${className || ''}`}>
      {children || (
        <>
          <LogOut className="h-4 w-4" />
          Sign Out
        </>
      )}
    </Button>
  );
}
