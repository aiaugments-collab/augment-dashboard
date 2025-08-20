"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function HumanResourcesLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/human-resources/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for HR');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for HR');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for HR');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for HR');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading HR datasheet');
  };

  // Hero configuration
  const heroProps = {
    title: "AI-Powered Human Resources Management",
    description: [
      'Our complete <span class="text-blue-600 font-medium">AI-powered HR</span> solution with embedded <span class="text-blue-600 font-medium">artificial intelligence</span> brings consistent processes and a single source of truth across your entire human resources organization—from employee lifecycle management and payroll processing to performance tracking and compliance management.',
      'The application helps you improve your employee experience, increase your HR team\'s efficiency, and manage your workforce more effectively than ever before.'
    ],
    videoTitle: "What is the AI Augments Human Resources Management Suite?",
    videoDuration: "3:12",
    dashboardColor: {
      primary: "bg-gradient-to-br from-green-50 via-white to-blue-50",
      secondary: "bg-green-100",
      accent: "bg-blue-100"
    },
    dashboardMetrics: {
      metric1: { label: "Employees", color: "bg-green-100" },
      metric2: { label: "Performance", color: "bg-blue-100" },
      metric3: { label: "Payroll", color: "bg-purple-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-green-400 to-green-600",
    bottomGradient: "bg-gradient-to-r from-green-100 via-blue-100 to-purple-100",
    featureShowcases: {
      feature1: { label: "Employee Management", color: "bg-gradient-to-br from-green-200 to-green-400" },
      feature2: { label: "Payroll Processing", color: "bg-gradient-to-br from-blue-200 to-blue-400" },
      feature3: { label: "Performance Reviews", color: "bg-gradient-to-br from-purple-200 to-purple-400" },
      feature4: { label: "Compliance", color: "bg-gradient-to-br from-orange-200 to-orange-400" }
    }
  };

  // Related products
  const relatedProducts = [
    {
      title: "AI Augments CRM & Sales",
      subtitle: "Sales automation platform",
      description: "Streamline your sales process with AI-powered lead management and pipeline optimization.",
      actionText: "See CRM details",
      onAction: () => router.push('/app/crm')
    },
    {
      title: "AI Augments AI-HR",
      subtitle: "Intelligent HR insights",
      description: "Advanced AI-powered analytics and predictive HR management for strategic decision making.",
      actionText: "See AI-HR details",
      onAction: () => router.push('/app/ai-hr')
    },
    {
      title: "AI Augments Digital Signature",
      subtitle: "Secure document signing",
      description: "Streamline HR document processes with legally compliant digital signatures.",
      actionText: "See digital signature details",
      onAction: () => router.push('/app/digital-signature')
    },
    {
      title: "AI Augments Calendar Scheduler",
      subtitle: "Smart appointment management",
      description: "Optimize HR meetings and interviews with intelligent scheduling capabilities.",
      actionText: "See calendar details",
      onAction: () => router.push('/app/calendar-scheduler')
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Streamline employee lifecycle management",
      description: "Automate onboarding, performance reviews, and offboarding processes with AI-driven workflows that ensure consistency and compliance across your organization.",
      actionText: "Learn about HR automation (PDF)",
      actionType: 'pdf' as const,
      onAction: () => console.log('Download HR automation PDF')
    },
    {
      title: "Optimize workforce planning and analytics",
      description: "Make data-driven decisions with predictive analytics that forecast hiring needs, identify retention risks, and optimize team performance.",
      actionText: "See workforce analytics demo",
      actionType: 'tour' as const,
      onAction: () => console.log('Workforce analytics tour')
    },
    {
      title: "Ensure compliance and reduce risk",
      description: "Stay compliant with ever-changing regulations through automated tracking, reporting, and policy management that reduces legal risks.",
      actionText: "Explore compliance features",
      actionType: 'link' as const,
      onAction: () => console.log('Compliance features')
    }
  ];

  // Customer story
  const customerStory = {
    title: "HRTech Solutions reduces hiring time by 50% with AI-powered recruitment workflows",
    description: "Learn how HRTech Solutions transformed their recruitment process and improved employee satisfaction using AI Augments HR, resulting in 50% faster hiring and 30% higher employee retention rates.",
    actionText: "Read the HRTech story",
    onAction: () => console.log('Read customer story')
  };

  // Customer logos
  const customerLogos = [
    "HRTech", "TalentFlow", "WorkForce Pro", "PeopleFirst", 
    "HROptimize", "TalentLab", "HRInnovate", "WorkSmart", "PeopleOps"
  ];

  // CTA Banner - Oracle RC11 style
  const ctaBanner = {
    title: "Transform your HR operations with AI-powered workforce management",
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
      title: "Employee Lifecycle Management",
      description: "Streamline every stage of the employee journey from onboarding to offboarding with automated workflows and personalized experiences.",
      actionText: "Learn more",
      actionType: 'primary' as const
    },
    {
      title: "Performance & Talent Management",
      description: "Drive employee growth with comprehensive performance management, goal tracking, and talent development programs.",
      actionText: "Explore performance",
      actionType: 'primary' as const
    },
    {
      title: "Payroll & Benefits Administration",
      description: "Ensure accurate payroll processing and benefits management with automated calculations and compliance tracking.",
      actionText: "View payroll",
      actionType: 'primary' as const
    }
  ];

  // Product Tour Slides - Oracle RC118 style
  const tourSlides = [
    {
      id: 1,
      title: "Deliver exceptional HR results from start to finish",
      description: "AI Augments HR Management helps you optimize your workforce by connecting the right HR tools to the right processes, support your people goals with clear performance tracking, and quickly adapt to changing workforce needs.",
      image: "", // Will use CSS mockup
      imageAlt: "HR Management Dashboard"
    },
    {
      id: 2,
      title: "Effortlessly manage employee lifecycle processes",
      description: "Regardless of your HR expertise, you can easily use the intuitive interface to manage onboarding, performance reviews, and employee development with automated workflows.",
      image: "", // Will use CSS mockup
      imageAlt: "Employee Management Interface"
    },
    {
      id: 3,
      title: "Match HR strategies to organizational needs",
      description: "The intelligent HR engine helps you make data-driven decisions about workforce planning, talent development, and employee engagement by analyzing performance patterns and organizational metrics automatically.",
      image: "", // Will use CSS mockup
      imageAlt: "HR Analytics Engine"
    }
  ];

  // Customer Logos - Oracle RC56 style
  const customerLogosData = {
    title: "Trusted by HR leaders worldwide",
    description: "Join thousands of organizations that rely on our HR platform",
    logos: [
      { name: "HRTech", logo: "", alt: "HRTech logo" }, // Will use CSS mockup
      { name: "TalentFlow", logo: "", alt: "TalentFlow logo" },
      { name: "WorkForce Pro", logo: "", alt: "WorkForce Pro logo" },
      { name: "PeopleFirst", logo: "", alt: "PeopleFirst logo" },
      { name: "HROptimize", logo: "", alt: "HROptimize logo" },
      { name: "TalentLab", logo: "", alt: "TalentLab logo" }
    ]
  };

  // Featured Article - Oracle RC61 style
  const featuredArticle = {
    title: "The Future of HR: AI-Driven Workforce Management",
    quote: "Organizations using AI-powered HR management see 50% reduction in hiring time and 30% improvement in employee retention through data-driven workforce strategies.",
    source: "Human Resources Technology Institute",
    image: "",
    imageAlt: "HR Research",
    actionText: "Read the full report",
    actionType: 'primary' as const,
    actionLink: "#article"
  };

  // Customer Video - Oracle RC10 style
  const customerVideo = {
    title: "HRTech Solutions reduced hiring time by 50% with AI-powered recruitment workflows",
    videoId: "hr-success-story",
    thumbnail: "", // Will use CSS mockup
    duration: "4:05",
    onPlayVideo: (videoId: string) => console.log('Play video:', videoId)
  };

  // Use Cases - Oracle RC36 style
  const useCasesData = {
    title: "HR Management use cases",
    useCases: [
      {
        title: "Enterprise Workforce Management",
        description: "Manage large-scale workforces with comprehensive HR tools for employee lifecycle, performance management, and organizational development.",
        actionText: "Explore enterprise HR"
      },
      {
        title: "Remote Team Management",
        description: "Support distributed teams with digital onboarding, virtual performance reviews, and remote employee engagement tools.",
        actionText: "View remote solutions"
      },
      {
        title: "Compliance & Risk Management",
        description: "Ensure regulatory compliance with automated tracking, policy management, and comprehensive audit trails for HR processes.",
        actionText: "Learn about compliance"
      }
    ]
  };

  // Advanced Features Section Data - simplified for now
  const featureTabs = [
    { id: 'employee-management', title: 'Employee lifecycle management' },
    { id: 'performance-tracking', title: 'Performance management' },
    { id: 'payroll-benefits', title: 'Payroll and benefits' }
  ];

  const featureDetails = {
    'employee-management': {
      title: 'Employee lifecycle management',
      subtitle: 'From hire to retire - seamlessly managed',
      description: 'Streamline every stage of the employee journey with automated workflows that ensure consistent, compliant, and engaging experiences from onboarding to offboarding.',
      subsections: [
        {
          title: 'Smart onboarding automation',
          description: 'Create personalized onboarding experiences with automated task assignments, document collection, and integration with IT systems for seamless first-day experiences.'
        }
      ],
      actions: [
        { text: 'Read Employee Management guide (PDF)', type: 'link' as const, onAction: () => console.log('Employee management PDF') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'performance-tracking': {
      title: 'Performance management',
      subtitle: 'Data-driven performance optimization',
      description: 'Drive employee growth and organizational success with comprehensive performance management tools that provide actionable insights and streamlined review processes.',
      subsections: [
        {
          title: 'Continuous feedback systems',
          description: 'Enable ongoing performance conversations with real-time feedback tools, peer reviews, and goal tracking that goes beyond annual reviews.'
        }
      ],
      actions: [
        { text: 'Explore performance tools', type: 'link' as const, onAction: () => console.log('Performance tools') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'payroll-benefits': {
      title: 'Payroll and benefits',
      subtitle: 'Accurate and compliant compensation management',
      description: 'Ensure accurate, timely, and compliant payroll processing while maximizing the value of your benefits programs through intelligent automation and analytics.',
      subsections: [
        {
          title: 'Automated payroll processing',
          description: 'Process payroll with precision using automated calculations, tax compliance, and integration with time tracking systems for error-free compensation.'
        }
      ],
      actions: [
        { text: 'Learn about payroll automation (PDF)', type: 'link' as const, onAction: () => console.log('Payroll PDF') }
      ],
      mockupContent: { type: 'dashboard' as const }
    }
  };

  return (
    <CompleteAppLanding
      appName="Human Resources Management"
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
      advancedFeaturesTitle="AI Augments Human Resources Management features"
      advancedFeaturesDescription="Transform your HR operations with comprehensive tools that streamline processes, ensure compliance, and provide strategic insights for workforce optimization and employee satisfaction."
      featureTabs={featureTabs}
      featureDetails={featureDetails}
      finalCTAText="See how AI Augments Human Resources Management transforms your workforce."
      onChatWithBot={handleChatWithBot}
      onRequestDemo={handleRequestDemo}
      onContactSales={handleContactSales}
      onTakeTour={handleTakeTour}
      onBrowseTours={handleBrowseTours}
      onReadDatasheet={handleReadDatasheet}
    />
  );
}