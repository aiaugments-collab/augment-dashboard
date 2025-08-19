"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function CloudInfrastructureLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/cloud-infrastructure/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Cloud Infrastructure');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Cloud Infrastructure');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Cloud Infrastructure');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Cloud Infrastructure');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Cloud Infrastructure datasheet');
  };

  const heroProps = {
    title: "Cloud Infrastructure Solutions",
    description: [
      'Our comprehensive <span class="text-amber-600 font-medium">Cloud Infrastructure platform</span> with embedded <span class="text-amber-600 font-medium">artificial intelligence</span> brings complete cloud platform and infrastructure services for scalable enterprise solutions.'
    ],
    videoTitle: "Cloud Infrastructure Solutions Overview",
    videoDuration: "4:10",
    dashboardColor: {
      primary: "bg-gradient-to-br from-amber-50 via-white to-orange-50",
      secondary: "bg-amber-100",
      accent: "bg-orange-100"
    },
    dashboardMetrics: {
      metric1: { label: "Servers", color: "bg-amber-100" },
      metric2: { label: "Regions", color: "bg-orange-100" },
      metric3: { label: "Uptime", color: "bg-yellow-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-amber-400 to-amber-600",
    bottomGradient: "bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100",
    featureShowcases: {
      feature1: { label: "Compute", color: "bg-gradient-to-br from-amber-200 to-amber-400" },
      feature2: { label: "Storage", color: "bg-gradient-to-br from-orange-200 to-orange-400" },
      feature3: { label: "Network", color: "bg-gradient-to-br from-yellow-200 to-yellow-400" },
      feature4: { label: "Security", color: "bg-gradient-to-br from-red-200 to-red-400" }
    }
  };

  return (
    <div>
      <CompleteAppLanding
        appName="Cloud Infrastructure Solutions"
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
        advancedFeaturesTitle="Cloud Infrastructure Features"
        advancedFeaturesDescription="Enterprise-grade cloud platform services."
        featureTabs={[]}
        featureDetails={{}}
        finalCTAText="Get started with Cloud Infrastructure Solutions."
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