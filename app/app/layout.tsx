import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apps - Augment Dashboard',
  description: 'Access and manage your business applications',
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
