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

  return (
    <div>
      <CompleteAppLanding
        appName="Database Management Solutions"
        hero={heroProps}
        includeGetStarted={true}
        includeBenefits={false}
        includeCustomerSuccess={false}
        includeRelatedProducts={false}
        includeAdvancedFeatures={false}
        includeFinalCTA={true}
        relatedProducts={[]}
        benefits={[]}
        customerStory={{title: "", description: "", actionText: "", onAction: () => {}}}
        customerLogos={[]}
        advancedFeaturesTitle="Database Management Features"
        advancedFeaturesDescription="Advanced database administration tools."
        featureTabs={[]}
        featureDetails={{}}
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
