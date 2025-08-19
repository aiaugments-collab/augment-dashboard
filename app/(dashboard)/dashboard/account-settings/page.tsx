'use client';

import { AccountSettings } from "@stackframe/stack";
import { useUser } from "@stackframe/stack";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { CircleIcon, Loader2, ArrowLeft } from 'lucide-react';
import { StackAuthWrapper } from '@/components/auth/stack-auth-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AccountSettingsPage() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <StackAuthWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Dashboard</span>
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <CircleIcon className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Account Settings</h1>
                <p className="text-slate-600 mt-1">Manage your account preferences and profile</p>
              </div>
            </div>
          </div>

          {/* Account Settings Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
            <div className="p-8">
              <AccountSettings fullPage={false} />
            </div>
          </div>
        </div>
      </div>
    </StackAuthWrapper>
  );
}
