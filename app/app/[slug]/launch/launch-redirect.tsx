"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface LaunchRedirectProps {
  url: string;
  appName: string;
  returnUrl: string;
}

export default function LaunchRedirect({ url, appName, returnUrl }: LaunchRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    // Open the app URL in a new tab
    window.open(url, '_blank');
    
    // After a short delay, redirect back to the app page
    const timer = setTimeout(() => {
      router.push(returnUrl);
    }, 1000);

    return () => clearTimeout(timer);
  }, [url, returnUrl, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Launching {appName}...</p>
        <p className="text-sm text-gray-500 mt-2">
          Opening in new tab. You'll be redirected back shortly.
        </p>
      </div>
    </div>
  );
}
