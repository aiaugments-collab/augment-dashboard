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

  // CTA Banner - Oracle RC11 style
  const ctaBanner = {
    title: "Accelerate AI innovation with enterprise-grade machine learning platforms",
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
      title: "AutoML & Model Development",
      description: "Build and deploy machine learning models with automated model selection, hyperparameter tuning, and feature engineering capabilities.",
      actionText: "Learn more",
      actionType: 'primary' as const
    },
    {
      title: "MLOps & Model Management",
      description: "Streamline ML workflows with automated model training, versioning, deployment pipelines, and performance monitoring at scale.",
      actionText: "Explore MLOps",
      actionType: 'primary' as const
    },
    {
      title: "AI-Powered Analytics",
      description: "Extract insights from your data with pre-built AI models, natural language processing, and computer vision capabilities.",
      actionText: "View analytics",
      actionType: 'primary' as const
    }
  ];

  // Product Tour Slides - Oracle RC118 style
  const tourSlides = [
    {
      id: 1,
      title: "Deliver powerful AI results from start to finish",
      description: "AI Augments ML Platforms helps you build and deploy machine learning models by connecting the right AI tools to the right data sources, support your innovation goals with clear model performance tracking, and quickly adapt to changing business requirements.",
      image: "", // Will use CSS mockup
      imageAlt: "AI/ML Platform Dashboard"
    },
    {
      id: 2,
      title: "Effortlessly build and deploy ML models",
      description: "Regardless of your ML expertise, you can easily use the intuitive AutoML interface to build, train, and deploy machine learning models with drag-and-drop simplicity and automated optimization.",
      image: "", // Will use CSS mockup
      imageAlt: "Model Development Interface"
    },
    {
      id: 3,
      title: "Match AI capabilities to business needs",
      description: "The intelligent model recommendation engine helps you select the best AI algorithms for your use cases by analyzing data patterns, performance requirements, and business objectives automatically.",
      image: "", // Will use CSS mockup
      imageAlt: "AI Model Selection Engine"
    }
  ];

  // Customer Logos - Oracle RC56 style
  const customerLogosData = {
    title: "Trusted by AI-forward organizations worldwide",
    description: "Join thousands of companies that rely on our AI/ML platform",
    logos: [
      { name: "AITech", logo: "", alt: "AITech logo" }, // Will use CSS mockup
      { name: "MLCorp", logo: "", alt: "MLCorp logo" },
      { name: "DataScience Pro", logo: "", alt: "DataScience Pro logo" },
      { name: "AIFlow", logo: "", alt: "AIFlow logo" },
      { name: "MLBoost", logo: "", alt: "MLBoost logo" },
      { name: "AIVision", logo: "", alt: "AIVision logo" }
    ]
  };

  // Featured Article - Oracle RC61 style
  const featuredArticle = {
    title: "The Future of Enterprise AI: Democratizing Machine Learning",
    quote: "Organizations using enterprise AI/ML platforms see 80% faster time-to-market for AI solutions and 65% improvement in model accuracy through automated optimization.",
    source: "AI Research Institute",
    image: "",
    imageAlt: "AI Research",
    actionText: "Read the full report",
    actionType: 'primary' as const,
    actionLink: "#article"
  };

  // Customer Video - Oracle RC10 style
  const customerVideo = {
    title: "InnovateCorp accelerated AI deployment by 300% with automated ML platforms",
    videoId: "ai-ml-success-story",
    thumbnail: "", // Will use CSS mockup
    duration: "5:25",
    onPlayVideo: (videoId: string) => console.log('Play video:', videoId)
  };

  // Use Cases - Oracle RC36 style
  const useCasesData = {
    title: "AI/ML Platform use cases",
    useCases: [
      {
        title: "Predictive Analytics",
        description: "Build predictive models for demand forecasting, customer behavior analysis, and risk assessment with automated feature engineering.",
        actionText: "Explore predictive analytics"
      },
      {
        title: "Computer Vision",
        description: "Develop image recognition, object detection, and visual inspection solutions with pre-trained models and custom training capabilities.",
        actionText: "View computer vision"
      },
      {
        title: "Natural Language Processing",
        description: "Create intelligent text analysis, sentiment analysis, and chatbot solutions with advanced NLP models and language understanding.",
        actionText: "Learn about NLP"
      }
    ]
  };

  // Advanced Features
  const featureTabs = [
    { id: 'automl', title: 'AutoML & Development' },
    { id: 'mlops', title: 'MLOps & Deployment' },
    { id: 'ai-services', title: 'AI Services' },
    { id: 'monitoring', title: 'Model Monitoring' }
  ];

  const featureDetails = {
    'automl': {
      title: 'AutoML & Development',
      subtitle: 'Automated machine learning workflows',
      description: 'Build high-quality machine learning models with automated feature engineering, model selection, and hyperparameter optimization.',
      subsections: [
        {
          title: 'Automated model selection',
          description: 'Automatically test and compare multiple algorithms to find the best-performing model for your data and use case.'
        },
        {
          title: 'Feature engineering',
          description: 'Automatically generate and select the most relevant features from your data to improve model performance.'
        }
      ],
      actions: [
        { text: 'Try AutoML platform', type: 'link' as const, onAction: () => console.log('AutoML platform') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'mlops': {
      title: 'MLOps & Deployment',
      subtitle: 'Production ML pipeline management',
      description: 'Streamline your ML workflows with automated training pipelines, model versioning, and scalable deployment infrastructure.',
      subsections: [
        {
          title: 'Automated pipelines',
          description: 'Create and manage end-to-end ML pipelines with automated training, validation, and deployment workflows.'
        },
        {
          title: 'Model versioning',
          description: 'Track and manage different versions of your models with automated rollback and A/B testing capabilities.'
        }
      ],
      actions: [
        { text: 'Explore MLOps tools', type: 'link' as const, onAction: () => console.log('MLOps tools') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'ai-services': {
      title: 'AI Services',
      subtitle: 'Pre-built AI capabilities',
      description: 'Leverage pre-trained AI models for computer vision, natural language processing, and predictive analytics.',
      subsections: [
        {
          title: 'Computer vision APIs',
          description: 'Use pre-trained models for image classification, object detection, and optical character recognition.'
        },
        {
          title: 'NLP services',
          description: 'Integrate natural language processing capabilities including sentiment analysis, entity extraction, and language translation.'
        }
      ],
      actions: [
        { text: 'View AI services', type: 'link' as const, onAction: () => console.log('AI services') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'monitoring': {
      title: 'Model Monitoring',
      subtitle: 'Production model performance tracking',
      description: 'Monitor model performance in production with drift detection, performance alerts, and automated retraining capabilities.',
      subsections: [
        {
          title: 'Performance monitoring',
          description: 'Track model accuracy, latency, and throughput in real-time with customizable dashboards and alerts.'
        },
        {
          title: 'Drift detection',
          description: 'Automatically detect data drift and model degradation with statistical analysis and automated retraining triggers.'
        }
      ],
      actions: [
        { text: 'See monitoring tools', type: 'link' as const, onAction: () => console.log('Monitoring tools') }
      ],
      mockupContent: { type: 'dashboard' as const }
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
        advancedFeaturesTitle="AI/ML Platform Features"
        advancedFeaturesDescription="Accelerate AI innovation with automated machine learning, MLOps pipelines, and enterprise-grade AI services."
        featureTabs={featureTabs}
        featureDetails={featureDetails}
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