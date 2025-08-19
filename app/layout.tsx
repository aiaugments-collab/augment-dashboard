import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from 'swr';
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack";
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Business Applications Suite - Oracle Cloud Style',
  description: 'Complete cloud applications suite for modern business. CRM, HR, Finance, Marketing and more.'
};

export const viewport: Viewport = {
  maximumScale: 1
};

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${inter.variable}`}
    >
      <body className={`min-h-[100dvh] bg-gray-50 font-sans ${inter.className}`}>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <Suspense fallback={
              <div className="min-h-[100dvh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
              </div>
            }>
              <SWRConfig
                value={{
                  fallback: {
                    // We do NOT await here
                    // Only components that read this data will suspend
                    '/api/user': getUser(),
                    '/api/team': getTeamForUser()
                  }
                }}
              >
                {children}
              </SWRConfig>
            </Suspense>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
