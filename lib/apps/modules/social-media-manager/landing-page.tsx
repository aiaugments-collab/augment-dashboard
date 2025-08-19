"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function SocialMediaManagerLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Social Media Manager');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Social Media Manager');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Social Media Manager');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Social Media Manager');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Social Media Manager datasheet');
  };

  const heroProps = {
    title: "AI-Powered Social Media Management",
    description: [
      'Our complete <span class="text-blue-600 font-medium">AI-powered social media management</span> solution with embedded <span class="text-blue-600 font-medium">artificial intelligence</span> brings consistent processes and a single source of truth across all your social platforms—from content scheduling and analytics to engagement tracking and team collaboration.',
      'The application helps you improve your social media presence, increase your engagement rates, and manage all platforms more effectively than ever before.'
    ],
    videoTitle: "What is the AI Augments Social Media Management Suite?",
    videoDuration: "2:38",
    dashboardColor: {
      primary: "bg-gradient-to-br from-indigo-50 via-white to-purple-50",
      secondary: "bg-indigo-100",
      accent: "bg-purple-100"
    },
    dashboardMetrics: {
      metric1: { label: "Posts", color: "bg-indigo-100" },
      metric2: { label: "Engagement", color: "bg-purple-100" },
      metric3: { label: "Analytics", color: "bg-pink-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-indigo-400 to-indigo-600",
    bottomGradient: "bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100",
    featureShowcases: {
      feature1: { label: "Multi-Platform", color: "bg-gradient-to-br from-indigo-200 to-indigo-400" },
      feature2: { label: "Smart Scheduling", color: "bg-gradient-to-br from-purple-200 to-purple-400" },
      feature3: { label: "Analytics", color: "bg-gradient-to-br from-pink-200 to-pink-400" },
      feature4: { label: "Team Collaboration", color: "bg-gradient-to-br from-blue-200 to-blue-400" }
    }
  };

  const benefits = [
    {
      title: "Increase engagement rates by 400%",
      description: "Optimize posting times, content formats, and messaging with AI insights that identify what resonates most with your audience across all platforms.",
      actionText: "Learn about engagement optimization (PDF)",
      actionType: 'pdf' as const,
      onAction: () => console.log('Download engagement PDF')
    },
    {
      title: "Save 20+ hours per week on content management",
      description: "Automate content scheduling, cross-platform posting, and performance tracking to focus on strategy rather than manual social media tasks.",
      actionText: "See automation features demo",
      actionType: 'tour' as const,
      onAction: () => console.log('Automation demo')
    }
  ];

  const customerStory = {
    title: "SocialBrand increases followers by 300% with AI-powered content strategy",
    description: "Learn how SocialBrand transformed their social media presence using AI Augments Social Media Manager, resulting in 300% follower growth and 250% higher engagement rates.",
    actionText: "Read the SocialBrand story",
    onAction: () => console.log('Read customer story')
  };

  const featureTabs = [
    { id: 'content-scheduling', title: 'Content scheduling' },
    { id: 'analytics', title: 'Social analytics' }
  ];

  const featureDetails = {
    'content-scheduling': {
      title: 'Content scheduling',
      subtitle: 'Intelligent content planning and distribution',
      description: 'Schedule and manage content across multiple social platforms with AI-powered optimization that maximizes reach and engagement.',
      subsections: [
        {
          title: 'Optimal timing recommendations',
          description: 'AI analyzes your audience behavior to recommend the best times to post for maximum engagement on each platform.'
        }
      ],
      actions: [
        { text: 'Read Scheduling guide (PDF)', type: 'link' as const }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'analytics': {
      title: 'Social analytics',
      subtitle: 'Comprehensive social media insights',
      description: 'Track performance across all platforms with detailed analytics that reveal what content drives engagement and conversions.',
      subsections: [
        {
          title: 'Cross-platform performance tracking',
          description: 'Monitor key metrics across all social platforms in unified dashboards with actionable insights and trend analysis.'
        }
      ],
      actions: [
        { text: 'Explore analytics features', type: 'link' as const }
      ],
      mockupContent: { type: 'table' as const }
    }
  };

  return (
    <CompleteAppLanding
      appName="Social Media Management"
      hero={heroProps}
      includeGetStarted={true}
      includeBenefits={true}
      includeCustomerSuccess={true}
      includeAdvancedFeatures={true}
      includeFinalCTA={true}
      benefits={benefits}
      customerStory={customerStory}
      advancedFeaturesTitle="AI Augments Social Media Management features"
      advancedFeaturesDescription="Maximize your social media impact with intelligent tools that automate content management, optimize engagement, and provide actionable insights across all platforms."
      featureTabs={featureTabs}
      featureDetails={featureDetails}
      finalCTAText="See how AI Augments Social Media Management transforms your social presence."
      onChatWithBot={handleChatWithBot}
      onRequestDemo={handleRequestDemo}
      onContactSales={handleContactSales}
      onTakeTour={handleTakeTour}
      onBrowseTours={handleBrowseTours}
      onReadDatasheet={handleReadDatasheet}
    />
  );
}