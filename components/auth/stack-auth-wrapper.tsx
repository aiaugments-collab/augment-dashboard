'use client';

import { Suspense } from 'react';
import { CircleIcon, Loader2 } from 'lucide-react';

interface StackAuthWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

function DefaultFallback() {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <CircleIcon className="h-12 w-12 text-orange-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Loading...
        </h2>
        <div className="mt-8 flex justify-center">
          <Loader2 className="animate-spin h-8 w-8 text-orange-500" />
        </div>
      </div>
    </div>
  );
}

export function StackAuthWrapper({ children, fallback }: StackAuthWrapperProps) {
  return (
    <Suspense fallback={fallback || <DefaultFallback />}>
      {children}
    </Suspense>
  );
}
