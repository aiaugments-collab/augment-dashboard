"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function AnalyticsBILandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/analytics-bi/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Analytics & BI');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Analytics & BI');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Analytics & BI');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Analytics & BI');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Analytics & BI datasheet');
  };

  const heroProps = {
    title: "Analytics & Business Intelligence",
    description: [
      'Our comprehensive <span class="text-cyan-600 font-medium">Analytics & BI platform</span> with embedded <span class="text-cyan-600 font-medium">artificial intelligence</span> brings data analytics and business intelligence platforms for comprehensive business insights.'
    ],
    videoTitle: "Analytics & Business Intelligence Overview",
    videoDuration: "3:30",
    dashboardColor: {
      primary: "bg-gradient-to-br from-cyan-50 via-white to-blue-50",
      secondary: "bg-cyan-100",
      accent: "bg-blue-100"
    },
    dashboardMetrics: {
      metric1: { label: "Reports", color: "bg-cyan-100" },
      metric2: { label: "Data Sources", color: "bg-blue-100" },
      metric3: { label: "Insights", color: "bg-teal-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-cyan-400 to-cyan-600",
    bottomGradient: "bg-gradient-to-r from-cyan-100 via-blue-100 to-teal-100",
    featureShowcases: {
      feature1: { label: "Dashboards", color: "bg-gradient-to-br from-cyan-200 to-cyan-400" },
      feature2: { label: "Analytics", color: "bg-gradient-to-br from-blue-200 to-blue-400" },
      feature3: { label: "Reports", color: "bg-gradient-to-br from-teal-200 to-teal-400" },
      feature4: { label: "Insights", color: "bg-gradient-to-br from-indigo-200 to-indigo-400" }
    }
  };

  return (
    <div>
      <CompleteAppLanding
        appName="Analytics & Business Intelligence"
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
        advancedFeaturesTitle="Analytics & BI Features"
        advancedFeaturesDescription="Advanced analytics and business intelligence capabilities."
        featureTabs={[]}
        featureDetails={{}}
        finalCTAText="Get started with Analytics & Business Intelligence."
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