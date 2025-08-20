"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function DatabaseSolutionsLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/database-solutions/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Database Solutions');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Database Solutions');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Database Solutions');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Database Solutions');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Database Solutions datasheet');
  };

  // Simple hero configuration
  const heroProps = {
    title: "Database Management Solutions",
    description: [
      'Our comprehensive <span class="text-purple-600 font-medium">Database Management platform</span> with embedded <span class="text-purple-600 font-medium">artificial intelligence</span> brings advanced database administration and optimization across your entire data infrastructure.'
    ],
    videoTitle: "Database Management Solutions Overview",
    videoDuration: "3:45",
    dashboardColor: {
      primary: "bg-gradient-to-br from-purple-50 via-white to-violet-50",
      secondary: "bg-purple-100",
      accent: "bg-violet-100"
    },
    dashboardMetrics: {
      metric1: { label: "Databases", color: "bg-purple-100" },
      metric2: { label: "Performance", color: "bg-violet-100" },
      metric3: { label: "Uptime", color: "bg-indigo-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-purple-400 to-purple-600",
    bottomGradient: "bg-gradient-to-r from-purple-100 via-violet-100 to-indigo-100",
    featureShowcases: {
      feature1: { label: "Performance", color: "bg-gradient-to-br from-purple-200 to-purple-400" },
      feature2: { label: "Security", color: "bg-gradient-to-br from-violet-200 to-violet-400" },
      feature3: { label: "Backup", color: "bg-gradient-to-br from-indigo-200 to-indigo-400" },
      feature4: { label: "Analytics", color: "bg-gradient-to-br from-pink-200 to-pink-400" }
    }
  };

  // CTA Banner - Oracle RC11 style
  const ctaBanner = {
    title: "Optimize your database performance with AI-powered management solutions",
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
      title: "Database Performance Optimization",
      description: "Automatically optimize database performance with AI-powered query optimization, indexing recommendations, and resource allocation.",
      actionText: "Learn more",
      actionType: 'primary' as const
    },
    {
      title: "Backup & Recovery Solutions",
      description: "Comprehensive backup and disaster recovery with automated scheduling, point-in-time recovery, and cross-region replication.",
      actionText: "Explore backup",
      actionType: 'primary' as const
    },
    {
      title: "Database Security & Compliance",
      description: "Secure your data with encryption, access controls, audit logging, and compliance reporting for regulatory requirements.",
      actionText: "View security",
      actionType: 'primary' as const
    }
  ];

  // Product Tour Slides - Oracle RC118 style
  const tourSlides = [
    {
      id: 1,
      title: "Deliver optimal database performance from start to finish",
      description: "AI Augments Database Solutions helps you manage and optimize your databases by connecting the right performance tools to the right workloads, support your data goals with clear performance monitoring, and quickly adapt to changing database requirements.",
      image: "", // Will use CSS mockup
      imageAlt: "Database Management Dashboard"
    },
    {
      id: 2,
      title: "Effortlessly manage database operations",
      description: "Regardless of your database expertise, you can easily use the intuitive management console to monitor performance, manage backups, and optimize queries with automated recommendations.",
      image: "", // Will use CSS mockup
      imageAlt: "Database Operations Interface"
    },
    {
      id: 3,
      title: "Match database resources to application needs",
      description: "The intelligent resource management engine helps you allocate the right database resources for your applications by analyzing usage patterns, performance metrics, and cost optimization automatically.",
      image: "", // Will use CSS mockup
      imageAlt: "Resource Management Engine"
    }
  ];

  // Customer Logos - Oracle RC56 style
  const customerLogosData = {
    title: "Trusted by data-driven organizations worldwide",
    description: "Join thousands of companies that rely on our database solutions",
    logos: [
      { name: "DataTech", logo: "", alt: "DataTech logo" }, // Will use CSS mockup
      { name: "DatabasePro", logo: "", alt: "DatabasePro logo" },
      { name: "QueryMax", logo: "", alt: "QueryMax logo" },
      { name: "DataFlow", logo: "", alt: "DataFlow logo" },
      { name: "DBOptimize", logo: "", alt: "DBOptimize logo" },
      { name: "DataVault", logo: "", alt: "DataVault logo" }
    ]
  };

  // Featured Article - Oracle RC61 style
  const featuredArticle = {
    title: "The Future of Database Management: AI-Driven Performance Optimization",
    quote: "Organizations using AI-powered database management see 60% improvement in query performance and 45% reduction in database administration overhead.",
    source: "Database Technology Research Institute",
    image: "",
    imageAlt: "Database Research",
    actionText: "Read the full report",
    actionType: 'primary' as const,
    actionLink: "#article"
  };  

  // Customer Video - Oracle RC10 style
  const customerVideo = {
    title: "DataCorp improved database performance by 70% with AI-powered optimization",
    videoId: "database-success-story",
    thumbnail: "", // Will use CSS mockup
    duration: "4:10",
    onPlayVideo: (videoId: string) => console.log('Play video:', videoId)
  };

  // Use Cases - Oracle RC36 style
  const useCasesData = {
    title: "Database Management use cases",
    useCases: [
      {
        title: "Enterprise Data Warehousing",
        description: "Manage large-scale data warehouses with automated optimization, partitioning strategies, and performance monitoring for analytics workloads.",
        actionText: "Explore data warehousing"
      },
      {
        title: "High-Performance Applications",
        description: "Optimize databases for high-performance applications with real-time monitoring, automatic scaling, and intelligent caching strategies.",
        actionText: "View performance solutions"
      },
      {
        title: "Disaster Recovery & Compliance",
        description: "Ensure business continuity with comprehensive backup strategies, disaster recovery planning, and regulatory compliance management.",
        actionText: "Learn about DR solutions"
      }
    ]
  };

  // Advanced Features
  const featureTabs = [
    { id: 'performance', title: 'Performance Optimization' },
    { id: 'backup-recovery', title: 'Backup & Recovery' },
    { id: 'security', title: 'Security & Compliance' },
    { id: 'monitoring', title: 'Monitoring & Analytics' }
  ];

  const featureDetails = {
    'performance': {
      title: 'Performance Optimization',
      subtitle: 'AI-powered database performance tuning',
      description: 'Automatically optimize database performance with intelligent query optimization, indexing recommendations, and resource allocation.',
      subsections: [
        {
          title: 'Query optimization',
          description: 'Analyze and optimize slow queries with AI-powered recommendations for indexes, query rewrites, and execution plans.'
        },
        {
          title: 'Resource allocation',
          description: 'Automatically allocate CPU, memory, and storage resources based on workload patterns and performance requirements.'
        }
      ],
      actions: [
        { text: 'Try performance tools', type: 'link' as const, onAction: () => console.log('Performance tools') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'backup-recovery': {
      title: 'Backup & Recovery',
      subtitle: 'Comprehensive data protection',
      description: 'Protect your data with automated backup scheduling, point-in-time recovery, and disaster recovery capabilities.',
      subsections: [
        {
          title: 'Automated backups',
          description: 'Schedule and manage automated backups with compression, encryption, and retention policy management.'
        },
        {
          title: 'Point-in-time recovery',
          description: 'Restore databases to any point in time with transaction log backups and incremental recovery options.'
        }
      ],
      actions: [
        { text: 'Explore backup solutions', type: 'link' as const, onAction: () => console.log('Backup solutions') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'security': {
      title: 'Security & Compliance',
      subtitle: 'Enterprise database security',
      description: 'Secure your databases with encryption, access controls, audit logging, and compliance reporting capabilities.',
      subsections: [
        {
          title: 'Data encryption',
          description: 'Encrypt data at rest and in transit with industry-standard encryption algorithms and key management.'
        },
        {
          title: 'Access controls',
          description: 'Implement fine-grained access controls with role-based permissions and database-level security policies.'
        }
      ],
      actions: [
        { text: 'View security features', type: 'link' as const, onAction: () => console.log('Security features') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'monitoring': {
      title: 'Monitoring & Analytics',
      subtitle: 'Real-time database insights',
      description: 'Monitor database performance with real-time metrics, alerts, and comprehensive analytics dashboards.',
      subsections: [
        {
          title: 'Performance monitoring',
          description: 'Track database performance metrics, query execution times, and resource utilization in real-time.'
        },
        {
          title: 'Predictive analytics',
          description: 'Use machine learning to predict performance issues and capacity needs before they impact your applications.'
        }
      ],
      actions: [
        { text: 'See monitoring tools', type: 'link' as const, onAction: () => console.log('Monitoring tools') }
      ],
      mockupContent: { type: 'dashboard' as const }
    }
  };

  return (
    <div>
      <CompleteAppLanding
        appName="Database Management Solutions"
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
        advancedFeaturesTitle="Database Management Features"
        advancedFeaturesDescription="Optimize your database performance with AI-powered management, automated backup solutions, and comprehensive security features."
        featureTabs={featureTabs}
        featureDetails={featureDetails}
        finalCTAText="Get started with Database Management Solutions."
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
