import { StackAuthWrapper } from '@/components/auth/stack-auth-wrapper';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StackAuthWrapper>
      <section className="flex flex-col min-h-screen">
        {children}
      </section>
    </StackAuthWrapper>
  );
}
