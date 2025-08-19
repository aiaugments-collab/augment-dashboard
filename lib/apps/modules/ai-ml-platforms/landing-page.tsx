"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function AIMLPlatformsLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/ai-ml-platforms/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for AI/ML Platforms');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for AI/ML Platforms');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for AI/ML Platforms');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for AI/ML Platforms');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading AI/ML Platforms datasheet');
  };

  const heroProps = {
    title: "AI/ML Platforms",
    description: [
      'Our comprehensive <span class="text-purple-600 font-medium">AI/ML platform</span> with embedded <span class="text-purple-600 font-medium">artificial intelligence</span> brings artificial intelligence and machine learning tools for advanced automation and insights.'
    ],
    videoTitle: "AI/ML Platforms Overview",
    videoDuration: "5:15",
    dashboardColor: {
      primary: "bg-gradient-to-br from-purple-50 via-white to-indigo-50",
      secondary: "bg-purple-100",
      accent: "bg-indigo-100"
    },
    dashboardMetrics: {
      metric1: { label: "Models", color: "bg-purple-100" },
      metric2: { label: "Training", color: "bg-indigo-100" },
      metric3: { label: "Accuracy", color: "bg-violet-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-purple-400 to-purple-600",
    bottomGradient: "bg-gradient-to-r from-purple-100 via-indigo-100 to-violet-100",
    featureShowcases: {
      feature1: { label: "AutoML", color: "bg-gradient-to-br from-purple-200 to-purple-400" },
      feature2: { label: "Training", color: "bg-gradient-to-br from-indigo-200 to-indigo-400" },
      feature3: { label: "Deployment", color: "bg-gradient-to-br from-violet-200 to-violet-400" },
      feature4: { label: "Monitoring", color: "bg-gradient-to-br from-fuchsia-200 to-fuchsia-400" }
    }
  };

  return (
    <div>
      <CompleteAppLanding
        appName="AI/ML Platforms"
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
        advancedFeaturesTitle="AI/ML Platform Features"
        advancedFeaturesDescription="Advanced artificial intelligence and machine learning capabilities."
        featureTabs={[]}
        featureDetails={{}}
        finalCTAText="Get started with AI/ML Platforms."
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