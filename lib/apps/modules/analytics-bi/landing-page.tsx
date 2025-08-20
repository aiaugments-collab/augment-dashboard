"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function AnalyticsBILandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/analytics-bi/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Analytics & BI');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Analytics & BI');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Analytics & BI');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Analytics & BI');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Analytics & BI datasheet');
  };

  const heroProps = {
    title: "Analytics & Business Intelligence",
    description: [
      'Our comprehensive <span class="text-cyan-600 font-medium">Analytics & BI platform</span> with embedded <span class="text-cyan-600 font-medium">artificial intelligence</span> brings data analytics and business intelligence platforms for comprehensive business insights.'
    ],
    videoTitle: "Analytics & Business Intelligence Overview",
    videoDuration: "3:30",
    dashboardColor: {
      primary: "bg-gradient-to-br from-cyan-50 via-white to-blue-50",
      secondary: "bg-cyan-100",
      accent: "bg-blue-100"
    },
    dashboardMetrics: {
      metric1: { label: "Reports", color: "bg-cyan-100" },
      metric2: { label: "Data Sources", color: "bg-blue-100" },
      metric3: { label: "Insights", color: "bg-teal-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-cyan-400 to-cyan-600",
    bottomGradient: "bg-gradient-to-r from-cyan-100 via-blue-100 to-teal-100",
    featureShowcases: {
      feature1: { label: "Dashboards", color: "bg-gradient-to-br from-cyan-200 to-cyan-400" },
      feature2: { label: "Analytics", color: "bg-gradient-to-br from-blue-200 to-blue-400" },
      feature3: { label: "Reports", color: "bg-gradient-to-br from-teal-200 to-teal-400" },
      feature4: { label: "Insights", color: "bg-gradient-to-br from-indigo-200 to-indigo-400" }
    }
  };

  // CTA Banner - Oracle RC11 style
  const ctaBanner = {
    title: "Transform your data into actionable insights with AI-powered analytics",
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
      title: "Business Intelligence Dashboards",
      description: "Create interactive dashboards and reports that provide real-time insights into your business performance and key metrics.",
      actionText: "Learn more",
      actionType: 'primary' as const
    },
    {
      title: "Advanced Analytics & AI",
      description: "Leverage machine learning and predictive analytics to uncover hidden patterns and forecast future trends in your data.",
      actionText: "Explore AI features",
      actionType: 'primary' as const
    },
    {
      title: "Data Integration & ETL",
      description: "Connect and transform data from multiple sources with powerful ETL capabilities and real-time data processing.",
      actionText: "View integrations",
      actionType: 'primary' as const
    }
  ];

  // Product Tour Slides - Oracle RC118 style
  const tourSlides = [
    {
      id: 1,
      title: "Deliver powerful analytics results from start to finish",
      description: "AI Augments Analytics & BI helps you transform raw data into actionable insights by connecting the right data sources to the right analytics tools, support your organization's goals with a clear view of business performance, and quickly adapt to changing market requirements.",
      image: "", // Will use CSS mockup
      imageAlt: "Analytics Dashboard Overview"
    },
    {
      id: 2,
      title: "Effortlessly create interactive dashboards",
      description: "Regardless of your level of experience, you can easily use the high performance drag-and-drop functionality to create stunning dashboards and reports that tell your data story.",
      image: "", // Will use CSS mockup
      imageAlt: "Dashboard Builder Interface"
    },
    {
      id: 3,
      title: "Match data insights to business decisions",
      description: "The innovative AI-powered analytics engine helps you find the most relevant insights for your business decisions by analyzing patterns, trends, and correlations automatically.",
      image: "", // Will use CSS mockup
      imageAlt: "AI Analytics Engine"
    }
  ];

  // Customer Logos - Oracle RC56 style
  const customerLogosData = {
    title: "Trusted by leading organizations worldwide",
    description: "Join thousands of companies that rely on our analytics platform",
    logos: [
      { name: "DataCorp", logo: "", alt: "DataCorp logo" },
      { name: "Analytics Pro", logo: "", alt: "Analytics Pro logo" },
      { name: "InsightFlow", logo: "", alt: "InsightFlow logo" },
      { name: "MetricMax", logo: "", alt: "MetricMax logo" },
      { name: "DataVision", logo: "", alt: "DataVision logo" },
      { name: "AnalyticsCorp", logo: "", alt: "AnalyticsCorp logo" }
    ]
  };

  // Featured Article - Oracle RC61 style
  const featuredArticle = {
    title: "The Future of Business Intelligence: AI-Driven Analytics",
    quote: "Organizations using AI-powered analytics are 3x more likely to make faster business decisions and 2.5x more likely to improve their competitive advantage through data-driven insights.",
    source: "TechAnalytics Research Institute",
    image: "",
    imageAlt: "Analytics Research",
    actionText: "Read the full report",
    actionType: 'primary' as const,
    actionLink: "#article"
  };

  // Customer Video - Oracle RC10 style
  const customerVideo = {
    title: "DataFlow increased decision-making speed by 60% with AI-powered analytics",
    videoId: "analytics-success-story",
    thumbnail: "", // Will use CSS mockup
    duration: "3:45",
    onPlayVideo: (videoId: string) => console.log('Play video:', videoId)
  };

  // Use Cases - Oracle RC36 style
  const useCasesData = {
    title: "Analytics & BI use cases",
    useCases: [
      {
        title: "Financial Analytics",
        description: "Track revenue, expenses, and profitability with real-time financial dashboards and predictive forecasting.",
        actionText: "Explore financial analytics",
      },
      {
        title: "Sales Performance",
        description: "Monitor sales metrics, pipeline health, and team performance with comprehensive sales analytics and reporting.",
        actionText: "View sales analytics"
      },
      {
        title: "Customer Insights",
        description: "Understand customer behavior, preferences, and lifetime value through advanced customer analytics and segmentation.",
        actionText: "Learn about customer analytics"
      }
    ]
  };

  // Advanced Features
  const featureTabs = [
    { id: 'dashboards', title: 'Interactive Dashboards' },
    { id: 'ai-analytics', title: 'AI-Powered Analytics' },
    { id: 'data-integration', title: 'Data Integration' },
    { id: 'reporting', title: 'Advanced Reporting' }
  ];

  const featureDetails = {
    'dashboards': {
      title: 'Interactive Dashboards',
      subtitle: 'Real-time business intelligence',
      description: 'Create stunning, interactive dashboards that provide real-time insights into your business performance with drag-and-drop simplicity.',
      subsections: [
        {
          title: 'Drag-and-drop builder',
          description: 'Build professional dashboards without coding using our intuitive drag-and-drop interface.'
        },
        {
          title: 'Real-time updates',
          description: 'Get live data updates and real-time monitoring of your key business metrics.'
        }
      ],
      actions: [
        { text: 'Try dashboard builder', type: 'link' as const, onAction: () => console.log('Dashboard builder') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'ai-analytics': {
      title: 'AI-Powered Analytics',
      subtitle: 'Machine learning insights',
      description: 'Leverage artificial intelligence to uncover hidden patterns and predict future trends in your data.',
      subsections: [
        {
          title: 'Predictive analytics',
          description: 'Forecast future trends and outcomes using advanced machine learning algorithms.'
        },
        {
          title: 'Automated insights',
          description: 'Discover important patterns and anomalies automatically with AI-powered analysis.'
        }
      ],
      actions: [
        { text: 'Explore AI features', type: 'link' as const, onAction: () => console.log('AI features') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'data-integration': {
      title: 'Data Integration',
      subtitle: 'Connect all your data sources',
      description: 'Seamlessly integrate data from multiple sources with powerful ETL capabilities and real-time processing.',
      subsections: [
        {
          title: 'Multiple connectors',
          description: 'Connect to databases, APIs, files, and cloud services with pre-built connectors.'
        },
        {
          title: 'ETL processing',
          description: 'Transform and clean your data with powerful ETL tools and automated workflows.'
        }
      ],
      actions: [
        { text: 'View connectors', type: 'link' as const, onAction: () => console.log('Data connectors') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'reporting': {
      title: 'Advanced Reporting',
      subtitle: 'Professional reports and exports',
      description: 'Generate comprehensive reports with advanced formatting, scheduling, and distribution capabilities.',
      subsections: [
        {
          title: 'Automated reports',
          description: 'Schedule and distribute reports automatically to stakeholders via email or shared folders.'
        },
        {
          title: 'Multiple formats',
          description: 'Export reports in PDF, Excel, PowerPoint, and other formats for easy sharing.'
        }
      ],
      actions: [
        { text: 'See reporting features', type: 'link' as const, onAction: () => console.log('Reporting features') }
      ],
      mockupContent: { type: 'table' as const }
    }
  };

  return (
    <div>
      <CompleteAppLanding
        appName="Analytics & Business Intelligence"
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
        advancedFeaturesTitle="Analytics & BI Features"
        advancedFeaturesDescription="Transform your data into actionable insights with comprehensive analytics and business intelligence capabilities."
        featureTabs={featureTabs}
        featureDetails={featureDetails}
        finalCTAText="Get started with Analytics & Business Intelligence."
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