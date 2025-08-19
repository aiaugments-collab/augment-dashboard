"use client";

import React from 'react';
import AiAugmentsHeader from './aiaugments-header';
import AiAugmentsAppHero from './aiaugments-app-hero';
import GetStartedSection from './get-started-section';
import RelatedProductsSection from './related-products-section';
import BenefitsSection from './benefits-section';
import CustomerSuccessSection from './customer-success-section';
import ResourcesSection from './resources-section';
import AdvancedDetailedFeaturesSection from './detailed-features-section-advanced';
import FinalCTASection from './final-cta-section';

// Types
interface HeroProps {
  title: string;
  subtitle?: string;
  description: string[];
  videoTitle: string;
  videoDuration: string;
  dashboardColor: {
    primary: string;
    secondary: string;
    accent: string;
  };
  dashboardMetrics: {
    metric1: { label: string; color: string };
    metric2: { label: string; color: string };
    metric3: { label: string; color: string };
  };
  centralFigureColor: string;
  bottomGradient: string;
  featureShowcases: {
    feature1: { label: string; color: string };
    feature2: { label: string; color: string };
    feature3: { label: string; color: string };
    feature4: { label: string; color: string };
  };
}

interface RelatedProduct {
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
  onAction?: () => void;
}

interface Benefit {
  title: string;
  description: string;
  actionText: string;
  actionType: 'pdf' | 'tour' | 'link';
  onAction?: () => void;
}

// Advanced features types
interface FeatureTab {
  id: string;
  title: string;
  isActive?: boolean;
}

interface FeatureDetail {
  title: string;
  subtitle?: string;
  description: string;
  subsections: {
    title: string;
    description: string;
  }[];
  actions?: {
    text: string;
    type: 'primary' | 'secondary' | 'link';
    onAction?: () => void;
  }[];
  mockupContent?: {
    type: 'dashboard' | 'table' | 'chart' | 'form';
    data?: any;
  };
}

interface ResourceItem {
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

interface CompleteAppLandingProps {
  appName: string;
  
  // Hero Section
  hero: HeroProps;
  
  // Optional sections - include if you want them
  includeHeader?: boolean;
  includeGetStarted?: boolean;
  includeRelatedProducts?: boolean;
  includeBenefits?: boolean;
  includeCustomerSuccess?: boolean;
  includeResources?: boolean;
  includeAdvancedFeatures?: boolean;
  includeFinalCTA?: boolean;
  
  // Section Data
  relatedProducts?: RelatedProduct[];
  benefits?: Benefit[];
  customerStory?: {
    title: string;
    description: string;
    actionText: string;
    onAction?: () => void;
  };
  customerLogos?: string[];
  resources?: ResourceItem[];
  
  // Advanced features data
  advancedFeaturesTitle?: string;
  advancedFeaturesDescription?: string;
  featureTabs?: FeatureTab[];
  featureDetails?: { [key: string]: FeatureDetail };
  
  finalCTAText?: string;
  
  // Action Handlers
  onChatWithBot?: () => void;
  onRequestDemo?: () => void;
  onContactSales?: () => void;
  onTakeTour?: () => void;
  onBrowseTours?: () => void;
  onReadDatasheet?: () => void;
}

const CompleteAppLanding: React.FC<CompleteAppLandingProps> = ({
  appName,
  hero,
  includeHeader = true,
  includeGetStarted = true,
  includeRelatedProducts = false,
  includeBenefits = false,
  includeCustomerSuccess = false,
  includeResources = false,
  includeAdvancedFeatures = false,
  includeFinalCTA = true,
  relatedProducts = [],
  benefits = [],
  customerStory,
  customerLogos = [],
  resources = [],
  advancedFeaturesTitle,
  advancedFeaturesDescription,
  featureTabs = [],
  featureDetails = {},
  finalCTAText,
  onChatWithBot,
  onRequestDemo,
  onContactSales,
  onTakeTour,
  onBrowseTours,
  onReadDatasheet
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      {includeHeader && <AiAugmentsHeader />}
      
      {/* Hero Section - Always included */}
      <AiAugmentsAppHero
        {...hero}
        onChatWithBot={onChatWithBot}
        onRequestDemo={onRequestDemo}
      />
      
      {/* Advanced Features Section - Right after hero for education */}
      {includeAdvancedFeatures && featureTabs.length > 0 && (
        <AdvancedDetailedFeaturesSection
          appName={appName}
          sectionTitle={advancedFeaturesTitle || `${appName} features`}
          sectionDescription={advancedFeaturesDescription || `Explore the powerful features of ${appName}.`}
          featureTabs={featureTabs}
          featureDetails={featureDetails}
        />
      )}
      
      {/* Get Started Section */}
      {includeGetStarted && (
        <GetStartedSection
          appName={appName}
          onContactSales={onContactSales}
          onRequestDemo={onRequestDemo}
          onTakeTour={onTakeTour}
        />
      )}
      
      {/* Benefits Section */}
      {includeBenefits && benefits.length > 0 && (
        <BenefitsSection appName={appName} benefits={benefits} />
      )}
      
      {/* Customer Success Section */}
      {includeCustomerSuccess && (
        <CustomerSuccessSection
          appName={appName}
          customerStory={customerStory}
          customerLogos={customerLogos}
        />
      )}
      
      {/* Related Products Section */}
      {includeRelatedProducts && relatedProducts.length > 0 && (
        <RelatedProductsSection relatedProducts={relatedProducts} />
      )}
      
      {/* Resources Section */}
      {includeResources && (
        <ResourcesSection appName={appName} resources={resources} />
      )}
      
      {/* Final CTA Section */}
      {includeFinalCTA && (
        <FinalCTASection
          appName={appName}
          ctaText={finalCTAText}
          onBrowseTours={onBrowseTours}
          onReadDatasheet={onReadDatasheet}
        />
      )}
    </div>
  );
};

export default CompleteAppLanding;
