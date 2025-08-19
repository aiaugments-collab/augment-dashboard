"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function ERPHCMLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/erp-hcm/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for ERP & HCM');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for ERP & HCM');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for ERP & HCM');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for ERP & HCM');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading ERP & HCM datasheet');
  };

  // Hero configuration
  const heroProps = {
    title: "ERP & HCM Solutions",
    description: [
      'Our comprehensive <span class="text-blue-600 font-medium">ERP & HCM platform</span> with embedded <span class="text-blue-600 font-medium">artificial intelligence</span> brings complete business process management across your entire enterprise—from financial management and supply chain optimization to human capital management and business intelligence.',
      'The application helps you streamline operations, improve workforce productivity, and optimize business performance while reducing operational complexity and costs.'
    ],
    videoTitle: "What is the AI Augments ERP & HCM Solutions?",
    videoDuration: "4:20",
    dashboardColor: {
      primary: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
      secondary: "bg-blue-100",
      accent: "bg-indigo-100"
    },
    dashboardMetrics: {
      metric1: { label: "Employees", color: "bg-blue-100" },
      metric2: { label: "Processes", color: "bg-indigo-100" },
      metric3: { label: "Efficiency", color: "bg-purple-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-blue-400 to-blue-600",
    bottomGradient: "bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100",
    featureShowcases: {
      feature1: { label: "Financial Management", color: "bg-gradient-to-br from-blue-200 to-blue-400" },
      feature2: { label: "Human Resources", color: "bg-gradient-to-br from-indigo-200 to-indigo-400" },
      feature3: { label: "Supply Chain", color: "bg-gradient-to-br from-purple-200 to-purple-400" },
      feature4: { label: "Business Intelligence", color: "bg-gradient-to-br from-cyan-200 to-cyan-400" }
    }
  };

  // Related products
  const relatedProducts = [
    {
      title: "AI Augments Healthcare & EHR",
      subtitle: "Healthcare management systems",
      description: "Comprehensive electronic health records and clinical solutions for healthcare organizations.",
      actionText: "See healthcare EHR details",
      onAction: () => router.push('/app/healthcare-ehr')
    },
    {
      title: "AI Augments Analytics & BI",
      subtitle: "Business intelligence platform",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence.",
      actionText: "See analytics details",
      onAction: () => router.push('/app/analytics-bi')
    },
    {
      title: "AI Augments Database Solutions",
      subtitle: "Database management tools",
      description: "Comprehensive database administration and management tools for enterprise data infrastructure.",
      actionText: "See database details",
      onAction: () => router.push('/app/database-solutions')
    },
    {
      title: "AI Augments Security & Identity",
      subtitle: "Enterprise security management",
      description: "Protect your enterprise with comprehensive identity and security management solutions.",
      actionText: "See security details",
      onAction: () => router.push('/app/security-identity')
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Streamline business operations with integrated workflows",
      description: "Gain complete visibility into your business processes to optimize operations while reducing manual work and improving cross-departmental collaboration.",
      actionText: "Learn about business process optimization (PDF)",
      actionType: 'pdf' as const,
      onAction: () => console.log('Download business process PDF')
    },
    {
      title: "Optimize workforce management and productivity",
      description: "Empower your HR team with comprehensive human capital management tools that streamline recruitment, performance management, and employee development.",
      actionText: "Take an HCM workflow tour",
      actionType: 'tour' as const,
      onAction: () => console.log('HCM workflow tour')
    },
    {
      title: "Enhance financial visibility and control",
      description: "Maintain complete financial oversight with real-time reporting, automated processes, and integrated accounting that improves decision-making and compliance.",
      actionText: "Explore financial management features",
      actionType: 'link' as const,
      onAction: () => console.log('Financial management features')
    }
  ];

  // Customer story
  const customerStory = {
    title: "Global Manufacturing Corp reduces operational costs by 35% with integrated ERP & HCM workflows",
    description: "Discover how Global Manufacturing Corp transformed their business operations and improved workforce efficiency using AI Augments ERP & HCM Solutions, resulting in 35% cost reduction and 50% improvement in process efficiency.",
    actionText: "Read the Global Manufacturing Corp story",
    onAction: () => console.log('Read customer story')
  };

  // Customer logos
  const customerLogos = [
    "Global Manufacturing", "Enterprise Solutions", "BusinessFlow Corp", "Operations Inc", 
    "WorkForce Pro", "Enterprise Co", "ProcessMax", "Business Masters", "Operations Plus"
  ];

  // Advanced Features Section Data
  const featureTabs = [
    { id: 'financial-management', title: 'Financial management & accounting' },
    { id: 'human-resources', title: 'Human capital management' },
    { id: 'supply-chain', title: 'Supply chain optimization' },
    { id: 'business-intelligence', title: 'Business intelligence & reporting' },
    { id: 'process-automation', title: 'Business process automation' },
    { id: 'integration', title: 'Enterprise system integrations' }
  ];

  const featureDetails = {
    'financial-management': {
      title: 'Financial management & accounting',
      subtitle: 'Complete financial oversight and control',
      description: 'Transform your financial operations with comprehensive accounting, budgeting, and financial reporting capabilities that provide real-time visibility and ensure compliance across your organization.',
      subsections: [
        {
          title: 'Automated accounting processes',
          description: 'Streamline accounting workflows with automated journal entries, reconciliation, and financial reporting that reduces errors and improves efficiency.'
        },
        {
          title: 'Budget planning and forecasting',
          description: 'Create comprehensive budgets and forecasts with scenario planning, variance analysis, and predictive analytics for better financial planning.'
        }
      ],
      actions: [
        { text: 'Read the Financial Management data sheet (PDF)', type: 'link' as const, onAction: () => console.log('Financial management PDF') },
        { text: 'Take a financial reporting demo', type: 'secondary' as const, onAction: () => console.log('Financial reporting demo') }
      ],
      mockupContent: { type: 'dashboard' as const }
    }
  };

  return (
    <div>
      <CompleteAppLanding
        appName="ERP & HCM Solutions"
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
        advancedFeaturesTitle="AI Augments ERP & HCM Solutions features"
        advancedFeaturesDescription="Gain complete visibility and control of your business operations across your organization to streamline processes, optimize workforce management, and improve financial performance."
        featureTabs={featureTabs}
        featureDetails={featureDetails}
        finalCTAText="See how AI Augments ERP & HCM Solutions transforms your business operations."
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