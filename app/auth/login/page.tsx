'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CircleIcon, Loader2 } from 'lucide-react';

export default function AuthLoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main login page
    router.push('/login');
  }, [router]);

  return (
    <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <CircleIcon className="h-12 w-12 text-orange-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Redirecting to login...
        </h2>
        
        <div className="mt-8 flex justify-center">
          <Loader2 className="animate-spin h-8 w-8 text-orange-500" />
        </div>
        
        <p className="mt-4 text-center text-sm text-gray-600">
          If you're not redirected automatically, 
          <a href="/login" className="text-orange-600 hover:text-orange-500 ml-1">
            click here to sign in
          </a>
        </p>
      </div>
    </div>
  );
}
