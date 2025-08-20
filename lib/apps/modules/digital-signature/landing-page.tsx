"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function DigitalSignatureLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/digital-signature/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Digital Signature');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Digital Signature');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Digital Signature');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Digital Signature');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Digital Signature datasheet');
  };

  // Hero configuration
  const heroProps = {
    title: "AI-Powered Digital Signature Solution",
    description: [
      'Our complete <span class="text-blue-600 font-medium">AI-powered digital signature</span> solution with embedded <span class="text-blue-600 font-medium">artificial intelligence</span> brings consistent processes and a single source of truth across your entire document workflow—from secure e-signatures and legal compliance to document management and audit trails.',
      'The application helps you improve your document processing speed, increase your team\'s efficiency, and ensure compliance with legal requirements faster than ever before.'
    ],
    videoTitle: "What is the AI Augments Digital Signature Solution?",
    videoDuration: "2:28",
    dashboardColor: {
      primary: "bg-gradient-to-br from-purple-50 via-white to-blue-50",
      secondary: "bg-purple-100",
      accent: "bg-blue-100"
    },
    dashboardMetrics: {
      metric1: { label: "Documents", color: "bg-purple-100" },
      metric2: { label: "Signed", color: "bg-green-100" },
      metric3: { label: "Pending", color: "bg-blue-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-purple-400 to-purple-600",
    bottomGradient: "bg-gradient-to-r from-purple-100 via-blue-100 to-green-100",
    featureShowcases: {
      feature1: { label: "E-Signatures", color: "bg-gradient-to-br from-purple-200 to-purple-400" },
      feature2: { label: "Legal Compliance", color: "bg-gradient-to-br from-blue-200 to-blue-400" },
      feature3: { label: "Mobile Signing", color: "bg-gradient-to-br from-green-200 to-green-400" },
      feature4: { label: "Audit Trail", color: "bg-gradient-to-br from-orange-200 to-orange-400" }
    }
  };

  // Related products
  const relatedProducts = [
    {
      title: "AI Augments Human Resources",
      subtitle: "Workforce management",
      description: "Streamline HR document signing with integrated digital signature workflows for contracts and policies.",
      actionText: "See HR management details",
      onAction: () => router.push('/app/human-resources')
    },
    {
      title: "AI Augments CRM & Sales",
      subtitle: "Sales document automation",
      description: "Close deals faster with integrated contract signing and proposal management capabilities.",
      actionText: "See CRM details",
      onAction: () => router.push('/app/crm')
    },
    {
      title: "AI Augments Customer Support",
      subtitle: "Support documentation",
      description: "Enable customers to sign service agreements and support documents with ease.",
      actionText: "See support details",
      onAction: () => router.push('/app/customer-support')
    },
    {
      title: "AI Augments Marketing Automation",
      subtitle: "Campaign agreements",
      description: "Automate marketing contract signing and vendor agreement processes.",
      actionText: "See marketing details",
      onAction: () => router.push('/app/marketing-automation')
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Accelerate document signing by 85%",
      description: "Eliminate printing, scanning, and mailing delays with secure digital signatures that can be completed in minutes rather than days or weeks.",
      actionText: "Learn about signature speed (PDF)",
      actionType: 'pdf' as const,
      onAction: () => console.log('Download signature speed PDF')
    },
    {
      title: "Ensure legal compliance and security",
      description: "Meet global e-signature regulations including eIDAS, ESIGN Act, and UETA with bank-level security and comprehensive audit trails.",
      actionText: "See compliance features demo",
      actionType: 'tour' as const,
      onAction: () => console.log('Compliance demo')
    },
    {
      title: "Reduce costs and environmental impact",
      description: "Cut document processing costs by up to 70% while eliminating paper waste and creating a more sustainable business process.",
      actionText: "Calculate your savings",
      actionType: 'link' as const,
      onAction: () => console.log('Savings calculator')
    }
  ];

  // Customer story
  const customerStory = {
    title: "LegalTech Corp reduces contract processing time by 80% with AI-powered signature workflows",
    description: "Discover how LegalTech Corp transformed their contract management process and improved client satisfaction using AI Augments Digital Signature, resulting in 80% faster contract execution and 95% client satisfaction rates.",
    actionText: "Read the LegalTech story",
    onAction: () => console.log('Read customer story')
  };

  // Customer logos
  const customerLogos = [
    "LegalTech", "SignaturePro", "ContractFlow", "DocuSafe", 
    "SignatureMax", "LegalFlow", "ContractTech", "DocSmart", "SignEase"
  ];

  // CTA Banner - Oracle RC11 style
  const ctaBanner = {
    title: "Accelerate your document workflows with secure digital signatures",
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
      title: "Electronic Signatures & Workflows",
      description: "Create, send, and manage electronic signatures with enterprise-grade security and compliance that meets global legal standards.",
      actionText: "Learn more",
      actionType: 'primary' as const
    },
    {
      title: "Document Management & Templates",
      description: "Centralized document storage with version control, template management, and intelligent organization for all your signature workflows.",
      actionText: "Explore documents",
      actionType: 'primary' as const
    },
    {
      title: "Legal Compliance & Security",
      description: "Ensure your documents meet the highest security standards and legal requirements with comprehensive audit trails and compliance features.",
      actionText: "View compliance",
      actionType: 'primary' as const
    }
  ];

  // Product Tour Slides - Oracle RC118 style
  const tourSlides = [
    {
      id: 1,
      title: "Deliver secure signature results from start to finish",
      description: "AI Augments Digital Signature helps you streamline document workflows by connecting the right signature tools to the right processes, support your compliance goals with clear audit tracking, and quickly adapt to changing legal requirements.",
      image: "", // Will use CSS mockup
      imageAlt: "Digital Signature Dashboard"
    },
    {
      id: 2,
      title: "Effortlessly manage document signing workflows",
      description: "Regardless of your document complexity, you can easily use the intuitive interface to create signature workflows, manage templates, and track document status with automated notifications.",
      image: "", // Will use CSS mockup
      imageAlt: "Document Workflow Interface"
    },
    {
      id: 3,
      title: "Match signature requirements to legal standards",
      description: "The intelligent compliance engine helps you ensure legal validity by analyzing document types, signature requirements, and regulatory compliance automatically.",
      image: "", // Will use CSS mockup
      imageAlt: "Compliance Management Engine"
    }
  ];

  // Customer Logos - Oracle RC56 style
  const customerLogosData = {
    title: "Trusted by document-driven organizations worldwide",
    description: "Join thousands of companies that rely on our signature platform",
    logos: [
      { name: "LegalTech", logo: "", alt: "LegalTech logo" }, // Will use CSS mockup
      { name: "SignaturePro", logo: "", alt: "SignaturePro logo" },
      { name: "ContractFlow", logo: "", alt: "ContractFlow logo" },
      { name: "DocuSafe", logo: "", alt: "DocuSafe logo" },
      { name: "SignatureMax", logo: "", alt: "SignatureMax logo" },
      { name: "LegalFlow", logo: "", alt: "LegalFlow logo" }
    ]
  };

  // Featured Article - Oracle RC61 style
  const featuredArticle = {
    title: "The Future of Document Signing: AI-Enhanced Digital Workflows",
    quote: "Organizations using AI-powered digital signature solutions see 85% faster document processing and 70% reduction in administrative costs through automated workflows and compliance management.",
    source: "Digital Transformation Research Institute",
    image: "",
    imageAlt: "Digital Signature Research",
    actionText: "Read the full report",
    actionType: 'primary' as const,
    actionLink: "#article"
  };

  // Customer Video - Oracle RC10 style
  const customerVideo = {
    title: "LegalTech Corp reduced contract processing time by 80% with AI-powered signature workflows",
    videoId: "digital-signature-success-story",
    thumbnail: "", // Will use CSS mockup
    duration: "3:50",
    onPlayVideo: (videoId: string) => console.log('Play video:', videoId)
  };

  // Use Cases - Oracle RC36 style
  const useCasesData = {
    title: "Digital Signature use cases",
    useCases: [
      {
        title: "Legal & Contract Management",
        description: "Streamline legal document signing with secure workflows, multi-party signatures, and comprehensive audit trails for contract management.",
        actionText: "Explore legal solutions"
      },
      {
        title: "HR & Employee Documents",
        description: "Digitize HR processes with electronic signatures for employment contracts, policy acknowledgments, and employee onboarding documents.",
        actionText: "View HR solutions"
      },
      {
        title: "Sales & Customer Agreements",
        description: "Accelerate sales cycles with fast, secure signature collection for proposals, contracts, and customer agreements.",
        actionText: "Learn about sales integration"
      }
    ]
  };

  // Advanced Features Section Data
  const featureTabs = [
    { id: 'e-signatures', title: 'Electronic signatures' },
    { id: 'document-management', title: 'Document management' },
    { id: 'compliance-security', title: 'Compliance and security' }
  ];

  const featureDetails = {
    'e-signatures': {
      title: 'Electronic signatures',
      subtitle: 'Legally binding signatures made simple',
      description: 'Create, send, and manage electronic signatures with enterprise-grade security and compliance that meets global legal standards.',
      subsections: [
        {
          title: 'Multi-party signing workflows',
          description: 'Handle complex signing scenarios with sequential or parallel signing, conditional routing, and automated reminders for all parties involved.'
        }
      ],
      actions: [
        { text: 'Read E-Signature guide (PDF)', type: 'link' as const, onAction: () => console.log('E-signature PDF') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'document-management': {
      title: 'Document management',
      subtitle: 'Organize and track all your documents',
      description: 'Centralized document storage with version control, template management, and intelligent organization for all your signature workflows.',
      subsections: [
        {
          title: 'Template library management',
          description: 'Create reusable document templates with pre-positioned signature fields, form data, and conditional logic for consistent workflows.'
        }
      ],
      actions: [
        { text: 'Explore document features', type: 'link' as const, onAction: () => console.log('Document features') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'compliance-security': {
      title: 'Compliance and security',
      subtitle: 'Enterprise-grade security and legal compliance',
      description: 'Ensure your documents meet the highest security standards and legal requirements with comprehensive audit trails and compliance features.',
      subsections: [
        {
          title: 'Advanced authentication methods',
          description: 'Verify signer identity with multi-factor authentication, biometric verification, and knowledge-based authentication for maximum security.'
        }
      ],
      actions: [
        { text: 'Learn about security features (PDF)', type: 'link' as const, onAction: () => console.log('Security PDF') }
      ],
      mockupContent: { type: 'dashboard' as const }
    }
  };

  return (
    <CompleteAppLanding
      appName="Digital Signature Solution"
      hero={heroProps}
      includeGetStarted={true}
      includeBenefits={true}
      includeCustomerSuccess={true}
      includeRelatedProducts={true}
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
      relatedProducts={relatedProducts}
      benefits={benefits}
      customerStory={customerStory}
      customerLogos={customerLogos}
      advancedFeaturesTitle="AI Augments Digital Signature Solution features"
      advancedFeaturesDescription="Streamline your document signing process with secure, legally compliant electronic signatures that accelerate business workflows and improve customer experience."
      featureTabs={featureTabs}
      featureDetails={featureDetails}
      finalCTAText="See how AI Augments Digital Signature transforms your document workflow."
      onChatWithBot={handleChatWithBot}
      onRequestDemo={handleRequestDemo}
      onContactSales={handleContactSales}
      onTakeTour={handleTakeTour}
      onBrowseTours={handleBrowseTours}
      onReadDatasheet={handleReadDatasheet}
    />
  );
}