'use client';

import { useUser } from "@stackframe/stack";
import { SignIn } from "@stackframe/stack";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { CircleIcon, Loader2 } from 'lucide-react';
import { StackAuthWrapper } from '@/components/auth/stack-auth-wrapper';

export default function LoginPage() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    // If user is already logged in, redirect to dashboard
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  // If user is logged in, show loading while redirecting
  if (user) {
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
    <StackAuthWrapper>
      <div className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <CircleIcon className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to continue to your dashboard</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <SignIn fullPage={false} />
            
            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/sign-up" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </StackAuthWrapper>
  );
}