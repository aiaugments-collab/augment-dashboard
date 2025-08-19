import { StackServerApp, StackClientApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie", 
  urls: {
    signIn: "/login",
    afterSignIn: "/dashboard",
    afterSignUp: "/dashboard",
    home: "/",
  },
});

export const stackClientApp = new StackClientApp({
  baseUrl: process.env.NEXT_PUBLIC_STACK_URL!,
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID!,
  publishableClientKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY!,
  tokenStore: "nextjs-cookie",
  urls: {
    signIn: "/login",
    afterSignIn: "/dashboard", 
    afterSignUp: "/dashboard",
    home: "/",
  },
});
