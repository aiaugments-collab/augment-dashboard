"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function SecurityIdentityLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/security-identity/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Security & Identity');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Security & Identity');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Security & Identity');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Security & Identity');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Security & Identity datasheet');
  };

  const heroProps = {
    title: "Security & Identity Management",
    description: [
      'Our comprehensive <span class="text-red-600 font-medium">Security & Identity platform</span> with embedded <span class="text-red-600 font-medium">artificial intelligence</span> brings identity management and security solutions for enterprise access control and compliance.'
    ],
    videoTitle: "Security & Identity Management Overview",
    videoDuration: "4:00",
    dashboardColor: {
      primary: "bg-gradient-to-br from-red-50 via-white to-pink-50",
      secondary: "bg-red-100",
      accent: "bg-pink-100"
    },
    dashboardMetrics: {
      metric1: { label: "Users", color: "bg-red-100" },
      metric2: { label: "Security", color: "bg-pink-100" },
      metric3: { label: "Compliance", color: "bg-rose-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-red-400 to-red-600",
    bottomGradient: "bg-gradient-to-r from-red-100 via-pink-100 to-rose-100",
    featureShowcases: {
      feature1: { label: "Identity", color: "bg-gradient-to-br from-red-200 to-red-400" },
      feature2: { label: "Access", color: "bg-gradient-to-br from-pink-200 to-pink-400" },
      feature3: { label: "Security", color: "bg-gradient-to-br from-rose-200 to-rose-400" },
      feature4: { label: "Compliance", color: "bg-gradient-to-br from-orange-200 to-orange-400" }
    }
  };

  // CTA Banner - Oracle RC11 style
  const ctaBanner = {
    title: "Secure your enterprise with AI-powered identity and access management",
    primaryButton: {
      text: "Get started",
      onClick: handleRequestDemo
    },
    secondaryButton: {
      text: "Take a tour",
      onClick: handleTakeTour
    }
  };

  // Content Cards - Oracle RC59 style
  const contentCards = [
    {
      title: "Identity & Access Management",
      description: "Centralized identity management with single sign-on, multi-factor authentication, and role-based access controls for enterprise security.",
      actionText: "Learn more",
      actionType: 'primary' as const
    },
    {
      title: "Zero Trust Security",
      description: "Implement zero trust architecture with continuous verification, least privilege access, and AI-powered threat detection and response.",
      actionText: "Explore zero trust",
      actionType: 'primary' as const
    },
    {
      title: "Compliance & Governance",
      description: "Maintain regulatory compliance with automated audit trails, policy enforcement, and comprehensive security reporting and analytics.",
      actionText: "View compliance",
      actionType: 'primary' as const
    }
  ];

  // Product Tour Slides - Oracle RC118 style
  const tourSlides = [
    {
      id: 1,
      title: "Deliver comprehensive security results from start to finish",
      description: "AI Augments Security & Identity helps you protect your organization by connecting the right security controls to the right access points, support your security goals with clear visibility into threats and compliance, and quickly adapt to evolving security requirements.",
      image: "", // Will use CSS mockup
      imageAlt: "Security Dashboard Overview"
    },
    {
      id: 2,
      title: "Effortlessly manage user identities and access",
      description: "Regardless of your security expertise, you can easily use the intuitive management console to provision users, manage permissions, and monitor access patterns with automated workflows.",
      image: "", // Will use CSS mockup
      imageAlt: "Identity Management Interface"
    },
    {
      id: 3,
      title: "Match security policies to business requirements",
      description: "The intelligent policy engine helps you create and enforce security policies that align with your business needs while maintaining compliance and reducing security risks automatically.",
      image: "", // Will use CSS mockup
      imageAlt: "Policy Management Engine"
    }
  ];

  // Customer Logos - Oracle RC56 style
  const customerLogosData = {
    title: "Trusted by security-conscious organizations worldwide",
    description: "Join thousands of companies that rely on our security platform",
    logos: [
      { name: "SecureTech", logo: "", alt: "SecureTech logo" }, // Will use CSS mockup
      { name: "IdentityCorp", logo: "", alt: "IdentityCorp logo" },
      { name: "SafeGuard", logo: "", alt: "SafeGuard logo" },
      { name: "TrustMax", logo: "", alt: "TrustMax logo" },
      { name: "SecureFlow", logo: "", alt: "SecureFlow logo" },
      { name: "IdentityPro", logo: "", alt: "IdentityPro logo" }
    ]
  };

  // Featured Article - Oracle RC61 style
  const featuredArticle = {
    title: "The Future of Enterprise Security: AI-Driven Identity Management",
    quote: "Organizations implementing AI-powered identity and access management see 50% reduction in security incidents and 70% improvement in compliance audit performance.",
    source: "Enterprise Security Research Institute",
    image: "",
    imageAlt: "Security Research",
    actionText: "Read the full report",
    actionType: 'primary' as const,
    actionLink: "#article"
  };

  // Customer Video - Oracle RC10 style
  const customerVideo = {
    title: "SecureBank reduced security incidents by 65% with AI-powered identity management",
    videoId: "security-success-story",
    thumbnail: "", // Will use CSS mockup
    duration: "3:30",
    onPlayVideo: (videoId: string) => console.log('Play video:', videoId)
  };

  // Use Cases - Oracle RC36 style
  const useCasesData = {
    title: "Security & Identity use cases",
    useCases: [
      {
        title: "Enterprise Access Control",
        description: "Manage user access across all enterprise applications with centralized identity management and automated provisioning workflows.",
        actionText: "Explore access control"
      },
      {
        title: "Regulatory Compliance",
        description: "Maintain compliance with GDPR, HIPAA, SOX, and other regulations through automated audit trails and policy enforcement.",
        actionText: "View compliance solutions"
      },
      {
        title: "Threat Detection & Response",
        description: "Detect and respond to security threats in real-time with AI-powered behavioral analysis and automated incident response.",
        actionText: "Learn about threat detection"
      }
    ]
  };

  // Advanced Features
  const featureTabs = [
    { id: 'identity-management', title: 'Identity Management' },
    { id: 'access-control', title: 'Access Control' },
    { id: 'threat-detection', title: 'Threat Detection' },
    { id: 'compliance', title: 'Compliance & Governance' }
  ];

  const featureDetails = {
    'identity-management': {
      title: 'Identity Management',
      subtitle: 'Centralized user identity and authentication',
      description: 'Manage user identities across your entire organization with single sign-on, multi-factor authentication, and automated user lifecycle management.',
      subsections: [
        {
          title: 'Single sign-on (SSO)',
          description: 'Enable seamless access to all applications with enterprise-grade SSO and federated identity management.'
        },
        {
          title: 'Multi-factor authentication',
          description: 'Secure user access with adaptive MFA that adjusts security requirements based on risk assessment.'
        }
      ],
      actions: [
        { text: 'Try identity management', type: 'link' as const, onAction: () => console.log('Identity management') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'access-control': {
      title: 'Access Control',
      subtitle: 'Role-based access and permissions',
      description: 'Implement fine-grained access controls with role-based permissions, attribute-based access control, and just-in-time access provisioning.',
      subsections: [
        {
          title: 'Role-based access control',
          description: 'Define and manage user roles with granular permissions and automated role assignment based on organizational structure.'
        },
        {
          title: 'Just-in-time access',
          description: 'Provide temporary elevated access for specific tasks with automatic revocation and comprehensive audit logging.'
        }
      ],
      actions: [
        { text: 'Explore access controls', type: 'link' as const, onAction: () => console.log('Access controls') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'threat-detection': {
      title: 'Threat Detection',
      subtitle: 'AI-powered security monitoring',
      description: 'Detect and respond to security threats with machine learning-powered behavioral analysis and automated incident response.',
      subsections: [
        {
          title: 'Behavioral analytics',
          description: 'Monitor user behavior patterns and detect anomalies that may indicate security threats or compromised accounts.'
        },
        {
          title: 'Automated response',
          description: 'Automatically respond to security incidents with predefined workflows and real-time threat mitigation.'
        }
      ],
      actions: [
        { text: 'See threat detection', type: 'link' as const, onAction: () => console.log('Threat detection') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'compliance': {
      title: 'Compliance & Governance',
      subtitle: 'Regulatory compliance and audit management',
      description: 'Maintain regulatory compliance with automated audit trails, policy enforcement, and comprehensive reporting capabilities.',
      subsections: [
        {
          title: 'Audit trails',
          description: 'Comprehensive logging and audit trails for all user activities and system changes with tamper-proof storage.'
        },
        {
          title: 'Policy enforcement',
          description: 'Automated policy enforcement with real-time compliance monitoring and violation alerts.'
        }
      ],
      actions: [
        { text: 'View compliance tools', type: 'link' as const, onAction: () => console.log('Compliance tools') }
      ],
      mockupContent: { type: 'table' as const }
    }
  };

  return (
    <div>
      <CompleteAppLanding
        appName="Security & Identity Management"
        hero={heroProps}
        includeGetStarted={true}
        includeBenefits={false}
        includeCustomerSuccess={false}
        includeRelatedProducts={false}
        includeAdvancedFeatures={true}
        includeFinalCTA={true}
        // Oracle-style sections
        includeCTABanner={true}
        ctaBanner={ctaBanner}
        includeContentCards={true}
        contentCards={contentCards}
        includeProductTour={true}
        tourSlides={tourSlides}
        includeCustomerLogos={true}
        customerLogosData={customerLogosData}
        includeFeaturedArticle={true}
        featuredArticle={featuredArticle}
        includeCustomerVideo={true}
        customerVideo={customerVideo}
        includeUseCases={true}
        useCasesData={useCasesData}
        // Existing props
        relatedProducts={[]}
        benefits={[]}
        customerStory={{title: "", description: "", actionText: "", onAction: () => {}}}
        customerLogos={[]}
        advancedFeaturesTitle="Security & Identity Features"
        advancedFeaturesDescription="Protect your enterprise with comprehensive identity management, access control, and AI-powered security monitoring."
        featureTabs={featureTabs}
        featureDetails={featureDetails}
        finalCTAText="Get started with Security & Identity Management."
        onChatWithBot={handleChatWithBot}
        onRequestDemo={handleRequestDemo}
        onContactSales={handleContactSales}
        onTakeTour={handleTakeTour}
        onBrowseTours={handleBrowseTours}
        onReadDatasheet={handleReadDatasheet}
      />
    </div>
  );
}