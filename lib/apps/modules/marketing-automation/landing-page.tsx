"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function MarketingAutomationLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/marketing-automation/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Marketing Automation');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Marketing Automation');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Marketing Automation');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Marketing Automation');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Marketing Automation datasheet');
  };

  // Hero configuration
  const heroProps = {
    title: "AI-Powered Marketing Automation",
    description: [
      'Our complete <span class="text-blue-600 font-medium">AI-powered marketing automation</span> solution with embedded <span class="text-blue-600 font-medium">artificial intelligence</span> brings consistent processes and a single source of truth across your entire marketing organization—from campaign management and lead nurturing to customer journeys and conversion optimization.',
      'The application helps you improve your marketing ROI, increase your campaign effectiveness, and engage customers more intelligently than ever before.'
    ],
    videoTitle: "What is the AI Augments Marketing Automation Suite?",
    videoDuration: "3:05",
    dashboardColor: {
      primary: "bg-gradient-to-br from-orange-50 via-white to-purple-50",
      secondary: "bg-orange-100",
      accent: "bg-purple-100"
    },
    dashboardMetrics: {
      metric1: { label: "Campaigns", color: "bg-orange-100" },
      metric2: { label: "Leads", color: "bg-purple-100" },
      metric3: { label: "ROI", color: "bg-green-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-orange-400 to-orange-600",
    bottomGradient: "bg-gradient-to-r from-orange-100 via-purple-100 to-green-100",
    featureShowcases: {
      feature1: { label: "AI Campaigns", color: "bg-gradient-to-br from-orange-200 to-orange-400" },
      feature2: { label: "Lead Scoring", color: "bg-gradient-to-br from-purple-200 to-purple-400" },
      feature3: { label: "Journey Mapping", color: "bg-gradient-to-br from-green-200 to-green-400" },
      feature4: { label: "ROI Analytics", color: "bg-gradient-to-br from-blue-200 to-blue-400" }
    }
  };

  // Related products
  const relatedProducts = [
    {
      title: "AI Augments CRM & Sales",
      subtitle: "Sales pipeline integration",
      description: "Seamlessly connect marketing campaigns with sales pipeline for better lead qualification and conversion tracking.",
      actionText: "See CRM integration",
      onAction: () => router.push('/app/crm')
    },
    {
      title: "AI Augments Social Media Manager",
      subtitle: "Social media automation",
      description: "Extend your marketing reach with integrated social media campaigns and engagement tracking.",
      actionText: "See social media details",
      onAction: () => router.push('/app/social-media-manager')
    },
    {
      title: "AI Augments Customer Support",
      subtitle: "Customer engagement",
      description: "Create cohesive customer experiences from marketing touchpoints to support interactions.",
      actionText: "See support integration",
      onAction: () => router.push('/app/customer-support')
    },
    {
      title: "AI Augments Digital Signature",
      subtitle: "Contract automation",
      description: "Automate marketing agreement signing and vendor contract management processes.",
      actionText: "See signature details",
      onAction: () => router.push('/app/digital-signature')
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Increase marketing ROI by 300%",
      description: "Optimize campaign performance with AI-driven insights that identify the most effective channels, messaging, and timing for maximum return on investment.",
      actionText: "Learn about ROI optimization (PDF)",
      actionType: 'pdf' as const,
      onAction: () => console.log('Download ROI optimization PDF')
    },
    {
      title: "Automate lead nurturing at scale",
      description: "Create personalized customer journeys that adapt in real-time based on behavior, preferences, and engagement patterns to maximize conversion rates.",
      actionText: "See lead nurturing demo",
      actionType: 'tour' as const,
      onAction: () => console.log('Lead nurturing demo')
    },
    {
      title: "Reduce manual campaign work by 80%",
      description: "Eliminate repetitive tasks with intelligent automation that handles campaign execution, A/B testing, and performance optimization automatically.",
      actionText: "Explore automation features",
      actionType: 'link' as const,
      onAction: () => console.log('Automation features')
    }
  ];

  // Customer story
  const customerStory = {
    title: "GrowthTech increases lead conversion by 250% with AI-powered marketing automation",
    description: "Learn how GrowthTech transformed their marketing strategy and improved campaign performance using AI Augments Marketing Automation, resulting in 250% higher lead conversion and 180% revenue growth.",
    actionText: "Read the GrowthTech story",
    onAction: () => console.log('Read customer story')
  };

  // Customer logos
  const customerLogos = [
    "GrowthTech", "MarketFlow", "CampaignPro", "LeadGen Max", 
    "AutoMarket", "ConvertLab", "MarketingAI", "GrowthOps", "CampaignTech"
  ];

  // Advanced Features Section Data
  const featureTabs = [
    { id: 'campaign-automation', title: 'Campaign automation' },
    { id: 'lead-management', title: 'Lead management' },
    { id: 'analytics-insights', title: 'Analytics and insights' }
  ];

  const featureDetails = {
    'campaign-automation': {
      title: 'Campaign automation',
      subtitle: 'Intelligent marketing campaigns that run themselves',
      description: 'Create sophisticated marketing campaigns that automatically optimize for performance, adjust messaging based on audience response, and scale across multiple channels.',
      subsections: [
        {
          title: 'Multi-channel campaign orchestration',
          description: 'Coordinate campaigns across email, social media, paid advertising, and content marketing with unified messaging and consistent branding.'
        }
      ],
      actions: [
        { text: 'Read Campaign Automation guide (PDF)', type: 'link' as const, onAction: () => console.log('Campaign automation PDF') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'lead-management': {
      title: 'Lead management',
      subtitle: 'Intelligent lead scoring and nurturing',
      description: 'Automatically score, segment, and nurture leads with AI-powered insights that identify the most promising prospects and personalize their journey.',
      subsections: [
        {
          title: 'Predictive lead scoring',
          description: 'Use machine learning algorithms to score leads based on behavior, demographics, and engagement patterns for better sales handoff.'
        }
      ],
      actions: [
        { text: 'Explore lead management tools', type: 'link' as const, onAction: () => console.log('Lead management tools') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'analytics-insights': {
      title: 'Analytics and insights',
      subtitle: 'Data-driven marketing intelligence',
      description: 'Make informed marketing decisions with comprehensive analytics that reveal campaign performance, customer behavior, and optimization opportunities.',
      subsections: [
        {
          title: 'Real-time performance tracking',
          description: 'Monitor campaign performance in real-time with customizable dashboards and automated alerts for key performance indicators.'
        }
      ],
      actions: [
        { text: 'Learn about marketing analytics (PDF)', type: 'link' as const, onAction: () => console.log('Analytics PDF') }
      ],
      mockupContent: { type: 'dashboard' as const }
    }
  };

  return (
    <CompleteAppLanding
      appName="Marketing Automation"
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
      advancedFeaturesTitle="AI Augments Marketing Automation features"
      advancedFeaturesDescription="Transform your marketing strategy with intelligent automation that optimizes campaigns, nurtures leads, and delivers measurable ROI through data-driven insights."
      featureTabs={featureTabs}
      featureDetails={featureDetails}
      finalCTAText="See how AI Augments Marketing Automation transforms your marketing strategy."
      onChatWithBot={handleChatWithBot}
      onRequestDemo={handleRequestDemo}
      onContactSales={handleContactSales}
      onTakeTour={handleTakeTour}
      onBrowseTours={handleBrowseTours}
      onReadDatasheet={handleReadDatasheet}
    />
  );
}