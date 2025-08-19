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

  return (
    <div>
      <CompleteAppLanding
        appName="Communications Systems"
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
        advancedFeaturesTitle="Communications Features"
        advancedFeaturesDescription="Enterprise communication and collaboration capabilities."
        featureTabs={[]}
        featureDetails={{}}
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