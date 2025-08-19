"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function SecurityIdentityLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/security-identity/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Security & Identity');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Security & Identity');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Security & Identity');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Security & Identity');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Security & Identity datasheet');
  };

  const heroProps = {
    title: "Security & Identity Management",
    description: [
      'Our comprehensive <span class="text-red-600 font-medium">Security & Identity platform</span> with embedded <span class="text-red-600 font-medium">artificial intelligence</span> brings identity management and security solutions for enterprise access control and compliance.'
    ],
    videoTitle: "Security & Identity Management Overview",
    videoDuration: "4:00",
    dashboardColor: {
      primary: "bg-gradient-to-br from-red-50 via-white to-pink-50",
      secondary: "bg-red-100",
      accent: "bg-pink-100"
    },
    dashboardMetrics: {
      metric1: { label: "Users", color: "bg-red-100" },
      metric2: { label: "Security", color: "bg-pink-100" },
      metric3: { label: "Compliance", color: "bg-rose-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-red-400 to-red-600",
    bottomGradient: "bg-gradient-to-r from-red-100 via-pink-100 to-rose-100",
    featureShowcases: {
      feature1: { label: "Identity", color: "bg-gradient-to-br from-red-200 to-red-400" },
      feature2: { label: "Access", color: "bg-gradient-to-br from-pink-200 to-pink-400" },
      feature3: { label: "Security", color: "bg-gradient-to-br from-rose-200 to-rose-400" },
      feature4: { label: "Compliance", color: "bg-gradient-to-br from-orange-200 to-orange-400" }
    }
  };

  return (
    <div>
      <CompleteAppLanding
        appName="Security & Identity Management"
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
        advancedFeaturesTitle="Security & Identity Features"
        advancedFeaturesDescription="Enterprise security and identity management capabilities."
        featureTabs={[]}
        featureDetails={{}}
        finalCTAText="Get started with Security & Identity Management."
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