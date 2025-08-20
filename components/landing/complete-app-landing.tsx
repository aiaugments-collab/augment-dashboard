"use client";

import React from 'react';
import AiAugmentsHeader from './aiaugments-header';
import AiAugmentsAppHero from './aiaugments-app-hero';
import CTABanner from './cta-banner';
import AppContentCards from './app-content-cards';
import ProductTour from './product-tour';
import CustomerLogos from './customer-logos';
import FeaturedArticle from './featured-article';
import CustomerVideo from './customer-video';
import UseCases from './use-cases';
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

interface ContentCard {
  title: string;
  description: string;
  actionText: string;
  actionType: 'primary' | 'secondary';
  onAction?: () => void;
  image?: string;
}

interface TourSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface CustomerLogo {
  name: string;
  logo: string;
  link?: string;
  alt: string;
}

interface UseCase {
  title: string;
  description: string;
  actionText: string;
  actionLink?: string;
  onAction?: () => void;
}

interface CompleteAppLandingProps {
  appName: string;
  
  // Hero Section
  hero: HeroProps;
  
  // Optional sections - include if you want them
  includeHeader?: boolean;
  includeCTABanner?: boolean;
  includeContentCards?: boolean;
  includeProductTour?: boolean;
  includeCustomerLogos?: boolean;
  includeFeaturedArticle?: boolean;
  includeCustomerVideo?: boolean;
  includeUseCases?: boolean;
  includeGetStarted?: boolean;
  includeRelatedProducts?: boolean;
  includeBenefits?: boolean;
  includeCustomerSuccess?: boolean;
  includeResources?: boolean;
  includeAdvancedFeatures?: boolean;
  includeFinalCTA?: boolean;
  
  // Section Data
  ctaBanner?: {
    title: string;
    primaryButton: { text: string; onClick?: () => void; };
    secondaryButton: { text: string; onClick?: () => void; };
  };
  contentCards?: ContentCard[];
  tourSlides?: TourSlide[];
  customerLogosData?: {
    title: string;
    description: string;
    logos: CustomerLogo[];
  };
  featuredArticle?: {
    title: string;
    quote: string;
    source: string;
    image?: string;
    imageAlt?: string;
    actionText: string;
    actionLink: string;
  };
  customerVideo?: {
    title: string;
    videoId: string;
    thumbnail: string;
    duration: string;
    onPlayVideo?: (videoId: string) => void;
  };
  useCasesData?: {
    title: string;
    useCases: UseCase[];
  };
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
  includeCTABanner = false,
  includeContentCards = false,
  includeProductTour = false,
  includeCustomerLogos = false,
  includeFeaturedArticle = false,
  includeCustomerVideo = false,
  includeUseCases = false,
  includeGetStarted = true,
  includeRelatedProducts = false,
  includeBenefits = false,
  includeCustomerSuccess = false,
  includeResources = false,
  includeAdvancedFeatures = false,
  includeFinalCTA = true,
  ctaBanner,
  contentCards = [],
  tourSlides = [],
  customerLogosData,
  featuredArticle,
  customerVideo,
  useCasesData,
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
      
      {/* CTA Banner Section - Right after hero */}
      {includeCTABanner && ctaBanner && (
        <CTABanner
          title={ctaBanner.title}
          primaryButton={ctaBanner.primaryButton}
          secondaryButton={ctaBanner.secondaryButton}
        />
      )}
      
      {/* Content Cards Section */}
      {includeContentCards && contentCards.length > 0 && (
        <AppContentCards
          appName={appName}
          cards={contentCards}
        />
      )}
      
      {/* Advanced Features Section */}
      {includeAdvancedFeatures && featureTabs.length > 0 && (
        <AdvancedDetailedFeaturesSection
          appName={appName}
          sectionTitle={advancedFeaturesTitle || `${appName} features`}
          sectionDescription={advancedFeaturesDescription || `Explore the powerful features of ${appName}.`}
          featureTabs={featureTabs}
          featureDetails={featureDetails}
        />
      )}
      
      {/* Product Tour Section */}
      {includeProductTour && tourSlides.length > 0 && (
        <ProductTour
          appName={appName}
          slides={tourSlides}
          onRequestDemo={onRequestDemo}
        />
      )}
      
      {/* Customer Logos Section */}
      {includeCustomerLogos && customerLogosData && (
        <CustomerLogos
          title={customerLogosData.title}
          description={customerLogosData.description}
          logos={customerLogosData.logos}
        />
      )}
      
      {/* Featured Article Section */}
      {includeFeaturedArticle && featuredArticle && (
        <FeaturedArticle
          title={featuredArticle.title}
          quote={featuredArticle.quote}
          source={featuredArticle.source}
          image={featuredArticle.image}
          imageAlt={featuredArticle.imageAlt}
          actionText={featuredArticle.actionText}
          actionLink={featuredArticle.actionLink}
        />
      )}
      
      {/* Customer Video Section */}
      {includeCustomerVideo && customerVideo && (
        <CustomerVideo
          title={customerVideo.title}
          videoId={customerVideo.videoId}
          thumbnail={customerVideo.thumbnail}
          duration={customerVideo.duration}
          onPlayVideo={customerVideo.onPlayVideo}
        />
      )}
      
      {/* Use Cases Section */}
      {includeUseCases && useCasesData && (
        <UseCases
          title={useCasesData.title}
          useCases={useCasesData.useCases}
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
