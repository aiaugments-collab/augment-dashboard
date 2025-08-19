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