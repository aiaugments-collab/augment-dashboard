'use client';

import { LandingHeader } from '@/components/landing/landing-header';
import { StackAuthWrapper } from '@/components/auth/stack-auth-wrapper';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <StackAuthWrapper>
      <div className="min-h-screen bg-background">
        <LandingHeader />
        <main className="pt-16">
          {children}
        </main>
      </div>
    </StackAuthWrapper>
  );
}