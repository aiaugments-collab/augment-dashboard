'use client';

import { useFirebaseAuth } from '@/hooks/use-firebase-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FirebaseLoginForm } from '@/components/auth/firebase-login-form';
import { CircleIcon, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const { firebaseUser, loading } = useFirebaseAuth();
  const router = useRouter();

  useEffect(() => {
    // If user is already logged in, redirect to dashboard
    if (firebaseUser) {
      router.push('/dashboard');
    }
  }, [firebaseUser, router]);

  // If user is logged in, show loading while redirecting
  if (firebaseUser) {
    return (
      <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <CircleIcon className="h-12 w-12 text-orange-500" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Redirecting to dashboard...
          </h2>
          <div className="mt-8 flex justify-center">
            <Loader2 className="animate-spin h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <CircleIcon className="h-12 w-12 text-orange-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to AI Platform
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to your account or create a new one
        </p>
      </div>
      
      <div className="mt-8">
        <FirebaseLoginForm onSuccess={() => router.push('/dashboard')} />
      </div>
    </div>
  );
}