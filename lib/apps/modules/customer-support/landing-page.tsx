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