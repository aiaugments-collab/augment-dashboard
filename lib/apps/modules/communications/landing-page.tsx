"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function CommunicationsLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/communications/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Communications');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Communications');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Communications');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Communications');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Communications datasheet');
  };

  const heroProps = {
    title: "Communications Systems",
    description: [
      'Our comprehensive <span class="text-green-600 font-medium">Communications platform</span> with embedded <span class="text-green-600 font-medium">artificial intelligence</span> brings enterprise communication and collaboration tools for seamless business connectivity.'
    ],
    videoTitle: "Communications Systems Overview",
    videoDuration: "3:20",
    dashboardColor: {
      primary: "bg-gradient-to-br from-green-50 via-white to-emerald-50",
      secondary: "bg-green-100",
      accent: "bg-emerald-100"
    },
    dashboardMetrics: {
      metric1: { label: "Users", color: "bg-green-100" },
      metric2: { label: "Messages", color: "bg-emerald-100" },
      metric3: { label: "Uptime", color: "bg-teal-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-green-400 to-green-600",
    bottomGradient: "bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100",
    featureShowcases: {
      feature1: { label: "Voice", color: "bg-gradient-to-br from-green-200 to-green-400" },
      feature2: { label: "Video", color: "bg-gradient-to-br from-emerald-200 to-emerald-400" },
      feature3: { label: "Chat", color: "bg-gradient-to-br from-teal-200 to-teal-400" },
      feature4: { label: "Collaboration", color: "bg-gradient-to-br from-cyan-200 to-cyan-400" }
    }
  };

  // CTA Banner - Oracle RC11 style
  const ctaBanner = {
    title: "Connect your team with enterprise-grade communication solutions",
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
      title: "Unified Communications",
      description: "Integrate voice, video, chat, and collaboration tools in one platform with seamless switching between communication modes.",
      actionText: "Learn more",
      actionType: 'primary' as const
    },
    {
      title: "Video Conferencing & Collaboration",
      description: "Host high-quality video meetings with screen sharing, recording, and real-time collaboration tools for remote and hybrid teams.",
      actionText: "Explore video",
      actionType: 'primary' as const
    },
    {
      title: "Enterprise Messaging",
      description: "Secure team messaging with channels, file sharing, integrations, and advanced search capabilities for enterprise workflows.",
      actionText: "View messaging",
      actionType: 'primary' as const
    }
  ];

  // Product Tour Slides - Oracle RC118 style
  const tourSlides = [
    {
      id: 1,
      title: "Deliver seamless communication results from start to finish",
      description: "AI Augments Communications helps you connect your teams by integrating the right communication tools with the right workflows, support your collaboration goals with clear activity tracking, and quickly adapt to changing communication needs.",
      image: "", // Will use CSS mockup
      imageAlt: "Communications Dashboard"
    },
    {
      id: 2,
      title: "Effortlessly manage team communications",
      description: "Regardless of your team size, you can easily use the unified interface to manage voice calls, video meetings, and team messaging with intelligent routing and automated workflows.",
      image: "", // Will use CSS mockup
      imageAlt: "Communication Management Interface"
    },
    {
      id: 3,
      title: "Match communication tools to team needs",
      description: "The intelligent communication engine helps you select the best communication method for each interaction by analyzing context, urgency, and participant preferences automatically.",
      image: "", // Will use CSS mockup
      imageAlt: "Smart Communication Engine"
    }
  ];

  // Customer Logos - Oracle RC56 style
  const customerLogosData = {
    title: "Trusted by connected organizations worldwide",
    description: "Join thousands of companies that rely on our communication platform",
    logos: [
      { name: "CommTech", logo: "", alt: "CommTech logo" }, // Will use CSS mockup
      { name: "TeamConnect", logo: "", alt: "TeamConnect logo" },
      { name: "CollabCorp", logo: "", alt: "CollabCorp logo" },
      { name: "UnifiedComm", logo: "", alt: "UnifiedComm logo" },
      { name: "TeamFlow", logo: "", alt: "TeamFlow logo" },
      { name: "ConnectPro", logo: "", alt: "ConnectPro logo" }
    ]
  };

  // Featured Article - Oracle RC61 style
  const featuredArticle = {
    title: "The Future of Enterprise Communications: AI-Enhanced Collaboration",
    quote: "Organizations using unified communication platforms see 40% improvement in team productivity and 55% reduction in communication overhead through intelligent routing and automation.",
    source: "Enterprise Communication Research Institute",
    image: "",
    imageAlt: "Communication Research",
    actionText: "Read the full report",
    actionType: 'primary' as const,
    actionLink: "#article"
  };

  // Customer Video - Oracle RC10 style
  const customerVideo = {
    title: "GlobalTeam improved collaboration efficiency by 50% with unified communications",
    videoId: "communications-success-story",
    thumbnail: "", // Will use CSS mockup
    duration: "3:45",
    onPlayVideo: (videoId: string) => console.log('Play video:', videoId)
  };

  // Use Cases - Oracle RC36 style
  const useCasesData = {
    title: "Communications use cases",
    useCases: [
      {
        title: "Remote Team Collaboration",
        description: "Enable seamless collaboration for distributed teams with integrated video conferencing, file sharing, and project management tools.",
        actionText: "Explore remote collaboration"
      },
      {
        title: "Customer Support Communications",
        description: "Provide omnichannel customer support with integrated voice, chat, email, and video support across all customer touchpoints.",
        actionText: "View support solutions"
      },
      {
        title: "Enterprise Integration",
        description: "Integrate communications with business applications, CRM systems, and workflow automation for streamlined operations.",
        actionText: "Learn about integrations"
      }
    ]
  };

  // Advanced Features
  const featureTabs = [
    { id: 'unified-comms', title: 'Unified Communications' },
    { id: 'video-collaboration', title: 'Video & Collaboration' },
    { id: 'messaging', title: 'Enterprise Messaging' },
    { id: 'integrations', title: 'Business Integrations' }
  ];

  const featureDetails = {
    'unified-comms': {
      title: 'Unified Communications',
      subtitle: 'All communication tools in one platform',
      description: 'Integrate voice, video, messaging, and collaboration tools with seamless switching and intelligent routing capabilities.',
      subsections: [
        {
          title: 'Voice over IP (VoIP)',
          description: 'Enterprise-grade voice calling with advanced features like call routing, voicemail, and conference calling.'
        },
        {
          title: 'Presence and status',
          description: 'Real-time presence indicators and status updates to help teams know when colleagues are available for communication.'
        }
      ],
      actions: [
        { text: 'Try unified communications', type: 'link' as const, onAction: () => console.log('Unified communications') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'video-collaboration': {
      title: 'Video & Collaboration',
      subtitle: 'High-quality video meetings and collaboration',
      description: 'Host video conferences with screen sharing, recording, whiteboarding, and real-time collaboration features.',
      subsections: [
        {
          title: 'HD video conferencing',
          description: 'High-definition video meetings with support for large groups, breakout rooms, and advanced meeting controls.'
        },
        {
          title: 'Screen sharing and recording',
          description: 'Share screens, applications, and record meetings with automatic transcription and searchable content.'
        }
      ],
      actions: [
        { text: 'Explore video features', type: 'link' as const, onAction: () => console.log('Video features') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'messaging': {
      title: 'Enterprise Messaging',
      subtitle: 'Secure team messaging and chat',
      description: 'Team messaging with channels, direct messages, file sharing, and enterprise-grade security and compliance.',
      subsections: [
        {
          title: 'Team channels',
          description: 'Organize conversations by team, project, or topic with public and private channels and message threading.'
        },
        {
          title: 'File sharing and search',
          description: 'Share files securely with version control and powerful search capabilities across all messages and files.'
        }
      ],
      actions: [
        { text: 'See messaging tools', type: 'link' as const, onAction: () => console.log('Messaging tools') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'integrations': {
      title: 'Business Integrations',
      subtitle: 'Connect with your business applications',
      description: 'Integrate communications with CRM, project management, and business applications for streamlined workflows.',
      subsections: [
        {
          title: 'CRM integration',
          description: 'Connect with popular CRM systems to automatically log calls, messages, and meetings with customer records.'
        },
        {
          title: 'Workflow automation',
          description: 'Automate communication workflows with triggers, notifications, and integration with business process tools.'
        }
      ],
      actions: [
        { text: 'View integrations', type: 'link' as const, onAction: () => console.log('Business integrations') }
      ],
      mockupContent: { type: 'dashboard' as const }
    }
  };

  return (
    <div>
      <CompleteAppLanding
        appName="Communications Systems"
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
        advancedFeaturesTitle="Communications Features"
        advancedFeaturesDescription="Connect your teams with unified communications, video collaboration, and enterprise messaging solutions."
        featureTabs={featureTabs}
        featureDetails={featureDetails}
        finalCTAText="Get started with Communications Systems."
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