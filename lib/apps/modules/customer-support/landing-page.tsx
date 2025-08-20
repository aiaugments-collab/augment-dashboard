"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function CustomerSupportLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Customer Support');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Customer Support');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Customer Support');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Customer Support');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Customer Support datasheet');
  };

  const heroProps = {
    title: "AI-Powered Customer Support Platform",
    description: [
      'Our complete <span class="text-blue-600 font-medium">AI-powered customer support</span> solution with embedded <span class="text-blue-600 font-medium">artificial intelligence</span> brings consistent processes and a single source of truth across your entire support organization—from ticketing and live chat to knowledge base management and team collaboration.',
      'The application helps you improve your customer satisfaction, increase your team\'s efficiency, and resolve issues faster than ever before.'
    ],
    videoTitle: "What is the AI Augments Customer Support Platform?",
    videoDuration: "2:55",
    dashboardColor: {
      primary: "bg-gradient-to-br from-teal-50 via-white to-cyan-50",
      secondary: "bg-teal-100",
      accent: "bg-cyan-100"
    },
    dashboardMetrics: {
      metric1: { label: "Tickets", color: "bg-teal-100" },
      metric2: { label: "Resolved", color: "bg-green-100" },
      metric3: { label: "Satisfaction", color: "bg-blue-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-teal-400 to-teal-600",
    bottomGradient: "bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100",
    featureShowcases: {
      feature1: { label: "Ticketing System", color: "bg-gradient-to-br from-teal-200 to-teal-400" },
      feature2: { label: "Live Chat", color: "bg-gradient-to-br from-cyan-200 to-cyan-400" },
      feature3: { label: "Knowledge Base", color: "bg-gradient-to-br from-blue-200 to-blue-400" },
      feature4: { label: "SLA Management", color: "bg-gradient-to-br from-green-200 to-green-400" }
    }
  };

  const relatedProducts = [
    {
      title: "AI Augments CRM & Sales",
      subtitle: "Customer relationship integration",
      description: "Connect support interactions with sales data for comprehensive customer relationship management.",
      actionText: "See CRM integration",
      onAction: () => router.push('/app/crm')
    },
    {
      title: "AI Augments Marketing Automation",
      subtitle: "Customer journey alignment",
      description: "Align support experiences with marketing touchpoints for consistent customer communications.",
      actionText: "See marketing details",
      onAction: () => router.push('/app/marketing-automation')
    }
  ];

  const benefits = [
    {
      title: "Reduce response times by 75%",
      description: "Accelerate issue resolution with AI-powered ticket routing, automated responses, and intelligent priority assignment that gets customers help faster.",
      actionText: "Learn about response optimization (PDF)",
      actionType: 'pdf' as const,
      onAction: () => console.log('Download response optimization PDF')
    },
    {
      title: "Increase customer satisfaction to 95%+",
      description: "Deliver exceptional support experiences with personalized interactions, proactive issue detection, and comprehensive self-service options.",
      actionText: "See satisfaction improvements demo",
      actionType: 'tour' as const,
      onAction: () => console.log('Satisfaction demo')
    }
  ];

  const customerStory = {
    title: "SupportTech reduces ticket resolution time by 60% with AI-powered automation",
    description: "Discover how SupportTech transformed their customer support operations using AI Augments Customer Support, achieving 60% faster resolution times and 40% higher customer satisfaction.",
    actionText: "Read the SupportTech story",
    onAction: () => console.log('Read customer story')
  };

  const customerLogos = [
    "SupportTech", "HelpDesk Pro", "ServiceMax", "CustomerFirst", 
    "SupportFlow", "TicketLab", "ServiceAI", "HelpCenter", "SupportOps"
  ];

  // CTA Banner - Oracle RC11 style
  const ctaBanner = {
    title: "Elevate customer satisfaction with AI-powered support solutions",
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
      title: "Smart Ticketing & Case Management",
      description: "Automate ticket creation, routing, and escalation with AI-powered classification that ensures the right expert handles each customer issue.",
      actionText: "Learn more",
      actionType: 'primary' as const
    },
    {
      title: "Knowledge Base & Self-Service",
      description: "Build comprehensive knowledge bases that empower customers to find answers quickly while providing agents with instant access to solutions.",
      actionText: "Explore knowledge base",
      actionType: 'primary' as const
    },
    {
      title: "Omnichannel Support & Live Chat",
      description: "Provide seamless support across email, chat, phone, and social media with unified customer interaction history and context.",
      actionText: "View omnichannel",
      actionType: 'primary' as const
    }
  ];

  // Product Tour Slides - Oracle RC118 style
  const tourSlides = [
    {
      id: 1,
      title: "Deliver exceptional support results from start to finish",
      description: "AI Augments Customer Support helps you resolve customer issues by connecting the right support tools to the right workflows, support your service goals with clear performance tracking, and quickly adapt to changing customer needs.",
      image: "", // Will use CSS mockup
      imageAlt: "Customer Support Dashboard"
    },
    {
      id: 2,
      title: "Effortlessly manage tickets and customer interactions",
      description: "Regardless of your support team size, you can easily use the unified interface to manage tickets, track customer interactions, and resolve issues with automated workflows and intelligent routing.",
      image: "", // Will use CSS mockup
      imageAlt: "Ticket Management Interface"
    },
    {
      id: 3,
      title: "Match support resources to customer priorities",
      description: "The intelligent support engine helps you prioritize and route tickets by analyzing customer importance, issue complexity, and agent expertise automatically.",
      image: "", // Will use CSS mockup
      imageAlt: "Support Routing Engine"
    }
  ];

  // Customer Logos - Oracle RC56 style
  const customerLogosData = {
    title: "Trusted by customer-focused organizations worldwide",
    description: "Join thousands of support teams that rely on our platform",
    logos: [
      { name: "SupportTech", logo: "", alt: "SupportTech logo" }, // Will use CSS mockup
      { name: "HelpDesk Pro", logo: "", alt: "HelpDesk Pro logo" },
      { name: "ServiceMax", logo: "", alt: "ServiceMax logo" },
      { name: "CustomerFirst", logo: "", alt: "CustomerFirst logo" },
      { name: "SupportFlow", logo: "", alt: "SupportFlow logo" },
      { name: "TicketLab", logo: "", alt: "TicketLab logo" }
    ]
  };

  // Featured Article - Oracle RC61 style
  const featuredArticle = {
    title: "The Future of Customer Support: AI-Enhanced Service Delivery",
    quote: "Organizations using AI-powered customer support see 75% reduction in response times and 95% customer satisfaction through intelligent automation and personalized service.",
    source: "Customer Service Excellence Institute",
    image: "",
    imageAlt: "Customer Support Research",
    actionText: "Read the full report",
    actionType: 'primary' as const,
    actionLink: "#article"
  };

  // Customer Video - Oracle RC10 style
  const customerVideo = {
    title: "SupportTech reduced ticket resolution time by 60% with AI-powered automation",
    videoId: "support-success-story",
    thumbnail: "", // Will use CSS mockup
    duration: "3:40",
    onPlayVideo: (videoId: string) => console.log('Play video:', videoId)
  };

  // Use Cases - Oracle RC36 style
  const useCasesData = {
    title: "Customer Support use cases",
    useCases: [
      {
        title: "Enterprise Help Desk",
        description: "Manage large-scale customer support operations with advanced ticketing, SLA management, and comprehensive reporting capabilities.",
        actionText: "Explore enterprise support"
      },
      {
        title: "E-commerce Customer Service",
        description: "Provide specialized support for online retailers with order management integration, return processing, and customer communication tools.",
        actionText: "View e-commerce solutions"
      },
      {
        title: "Technical Support & IT",
        description: "Handle technical issues with specialized tools for troubleshooting, remote assistance, and technical knowledge management.",
        actionText: "Learn about technical support"
      }
    ]
  };

  const featureTabs = [
    { id: 'ticketing', title: 'Smart ticketing system' },
    { id: 'knowledge-base', title: 'Knowledge management' }
  ];

  const featureDetails = {
    'ticketing': {
      title: 'Smart ticketing system',
      subtitle: 'Intelligent ticket management and routing',
      description: 'Automate ticket creation, routing, and escalation with AI-powered classification that ensures the right expert handles each customer issue.',
      subsections: [
        {
          title: 'Automated ticket classification',
          description: 'Automatically categorize and prioritize tickets using natural language processing and machine learning algorithms.'
        }
      ],
      actions: [
        { text: 'Read Ticketing guide (PDF)', type: 'link' as const }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'knowledge-base': {
      title: 'Knowledge management',
      subtitle: 'Centralized knowledge and self-service',
      description: 'Build comprehensive knowledge bases that empower customers to find answers quickly while providing agents with instant access to solutions.',
      subsections: [
        {
          title: 'AI-powered search and suggestions',
          description: 'Help customers and agents find relevant information instantly with intelligent search and contextual content recommendations.'
        }
      ],
      actions: [
        { text: 'Explore knowledge features', type: 'link' as const }
      ],
      mockupContent: { type: 'table' as const }
    }
  };

  return (
    <CompleteAppLanding
      appName="Customer Support Platform"
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
      advancedFeaturesTitle="AI Augments Customer Support Platform features"
      advancedFeaturesDescription="Deliver exceptional customer support with intelligent automation that improves response times, enhances satisfaction, and empowers your team to resolve issues efficiently."
      featureTabs={featureTabs}
      featureDetails={featureDetails}
      finalCTAText="See how AI Augments Customer Support transforms your service delivery."
      onChatWithBot={handleChatWithBot}
      onRequestDemo={handleRequestDemo}
      onContactSales={handleContactSales}
      onTakeTour={handleTakeTour}
      onBrowseTours={handleBrowseTours}
      onReadDatasheet={handleReadDatasheet}
    />
  );
}