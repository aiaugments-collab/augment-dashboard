'use client';

import { useUser } from "@stackframe/stack";
import { SignUp } from "@stackframe/stack";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { CircleIcon, Loader2 } from 'lucide-react';
import { StackAuthWrapper } from '@/components/auth/stack-auth-wrapper';

export default function SignUpPage() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Redirecting to dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <StackAuthWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 p-8">
            <div className="flex flex-col items-center space-y-6">
              {/* Brand Icon */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <CircleIcon className="w-6 h-6 text-white fill-current" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              {/* Welcome Text */}
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
                <p className="text-slate-600">Join our AI AUGMENTS and get started</p>
              </div>

              {/* Sign Up Component */}
              <div className="w-full">
                <SignUp fullPage={false} />
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-sm text-slate-600">
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StackAuthWrapper>
  );
}
