"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function AIHRLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleChatWithBot = () => {
    console.log('Opening chatbot for AI-HR');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for AI-HR');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for AI-HR');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for AI-HR');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading AI-HR datasheet');
  };

  const heroProps = {
    title: "AI-Powered Intelligent Human Resources",
    description: [
      'Our complete <span class="text-blue-600 font-medium">AI-powered intelligent HR</span> solution with embedded <span class="text-blue-600 font-medium">artificial intelligence</span> brings consistent processes and a single source of truth across your entire human resources organization—from intelligent talent acquisition and predictive analytics to automated compliance and employee engagement optimization.',
      'The application helps you improve your HR decision-making, increase your talent retention, and optimize workforce management more intelligently than ever before.'
    ],
    videoTitle: "What is the AI Augments Intelligent Human Resources Suite?",
    videoDuration: "3:25",
    dashboardColor: {
      primary: "bg-gradient-to-br from-violet-50 via-white to-fuchsia-50",
      secondary: "bg-violet-100",
      accent: "bg-fuchsia-100"
    },
    dashboardMetrics: {
      metric1: { label: "Talent", color: "bg-violet-100" },
      metric2: { label: "Analytics", color: "bg-fuchsia-100" },
      metric3: { label: "Engagement", color: "bg-purple-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-violet-400 to-violet-600",
    bottomGradient: "bg-gradient-to-r from-violet-100 via-fuchsia-100 to-purple-100",
    featureShowcases: {
      feature1: { label: "AI Recruitment", color: "bg-gradient-to-br from-violet-200 to-violet-400" },
      feature2: { label: "Predictive Analytics", color: "bg-gradient-to-br from-fuchsia-200 to-fuchsia-400" },
      feature3: { label: "Employee Insights", color: "bg-gradient-to-br from-purple-200 to-purple-400" },
      feature4: { label: "Smart Optimization", color: "bg-gradient-to-br from-pink-200 to-pink-400" }
    }
  };

  const relatedProducts = [
    {
      title: "AI Augments Human Resources",
      subtitle: "Core HR management",
      description: "Complement AI insights with comprehensive HR management tools for complete workforce optimization.",
      actionText: "See HR management details",
      onAction: () => router.push('/app/human-resources')
    },
    {
      title: "AI Augments CRM & Sales",
      subtitle: "Talent pipeline integration",
      description: "Connect recruitment efforts with sales team hiring needs for strategic talent acquisition.",
      actionText: "See CRM integration",
      onAction: () => router.push('/app/crm')
    }
  ];

  const benefits = [
    {
      title: "Predict employee turnover 6 months in advance",
      description: "Use advanced machine learning algorithms to identify at-risk employees and implement retention strategies before they consider leaving.",
      actionText: "Learn about predictive analytics (PDF)",
      actionType: 'pdf' as const,
      onAction: () => console.log('Download predictive analytics PDF')
    },
    {
      title: "Reduce hiring costs by 60% with AI recruitment",
      description: "Streamline candidate sourcing, screening, and selection with AI-powered tools that identify the best talent faster and more accurately.",
      actionText: "See AI recruitment demo",
      actionType: 'tour' as const,
      onAction: () => console.log('AI recruitment demo')
    },
    {
      title: "Increase employee engagement by 45%",
      description: "Optimize workplace satisfaction with AI-driven insights that identify engagement drivers and recommend personalized improvement strategies.",
      actionText: "Explore engagement optimization",
      actionType: 'link' as const,
      onAction: () => console.log('Engagement optimization')
    }
  ];

  const customerStory = {
    title: "TalentTech reduces turnover by 70% with AI-powered workforce intelligence",
    description: "Learn how TalentTech transformed their HR strategy using AI Augments Intelligent HR, achieving 70% lower turnover rates and 55% faster hiring processes through predictive analytics.",
    actionText: "Read the TalentTech story",
    onAction: () => console.log('Read customer story')
  };

  const customerLogos = [
    "TalentTech", "AI Workforce", "SmartHire", "PredictiveHR", 
    "TalentAI", "WorkforceIQ", "HRIntelligence", "TalentOptim", "SmartTalent"
  ];

  const featureTabs = [
    { id: 'predictive-analytics', title: 'Predictive HR analytics' },
    { id: 'ai-recruitment', title: 'AI-powered recruitment' },
    { id: 'employee-insights', title: 'Employee intelligence' }
  ];

  const featureDetails = {
    'predictive-analytics': {
      title: 'Predictive HR analytics',
      subtitle: 'Future-focused workforce intelligence',
      description: 'Leverage advanced analytics and machine learning to predict workforce trends, optimize hiring decisions, and prevent employee turnover before it happens.',
      subsections: [
        {
          title: 'Turnover prediction modeling',
          description: 'Identify employees at risk of leaving using behavioral patterns, engagement metrics, and performance indicators to enable proactive retention efforts.'
        },
        {
          title: 'Performance forecasting',
          description: 'Predict future employee performance based on historical data, skills assessments, and career progression patterns to optimize team composition.'
        },
        {
          title: 'Workforce planning intelligence',
          description: 'Anticipate hiring needs, skill gaps, and organizational changes with predictive models that guide strategic workforce decisions.'
        }
      ],
      actions: [
        { text: 'Read Predictive Analytics guide (PDF)', type: 'link' as const, onAction: () => console.log('Predictive analytics PDF') },
        { text: 'See prediction models demo', type: 'secondary' as const, onAction: () => console.log('Prediction demo') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'ai-recruitment': {
      title: 'AI-powered recruitment',
      subtitle: 'Intelligent talent acquisition',
      description: 'Transform your hiring process with AI that sources, screens, and evaluates candidates more effectively than traditional methods.',
      subsections: [
        {
          title: 'Automated candidate sourcing',
          description: 'Discover qualified candidates across multiple platforms using AI algorithms that match job requirements with candidate profiles and experience.'
        },
        {
          title: 'Intelligent resume screening',
          description: 'Automatically evaluate resumes and applications using natural language processing to identify the most promising candidates quickly.'
        },
        {
          title: 'Bias-free candidate evaluation',
          description: 'Ensure fair and objective candidate assessment with AI models designed to minimize unconscious bias in hiring decisions.'
        }
      ],
      actions: [
        { text: 'Explore AI recruitment tools', type: 'link' as const, onAction: () => console.log('Recruitment tools') },
        { text: 'See candidate matching demo', type: 'secondary' as const, onAction: () => console.log('Matching demo') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'employee-insights': {
      title: 'Employee intelligence',
      subtitle: 'Deep workforce understanding',
      description: 'Gain unprecedented insights into employee satisfaction, performance drivers, and engagement patterns to create a thriving workplace culture.',
      subsections: [
        {
          title: 'Sentiment analysis and feedback',
          description: 'Analyze employee communications, surveys, and feedback using natural language processing to understand sentiment and identify concerns early.'
        },
        {
          title: 'Performance pattern recognition',
          description: 'Identify what drives high performance across different roles and teams to replicate success factors throughout the organization.'
        },
        {
          title: 'Personalized development recommendations',
          description: 'Provide tailored career development suggestions based on individual skills, performance, and career aspirations using AI-driven analysis.'
        }
      ],
      actions: [
        { text: 'Learn about employee insights (PDF)', type: 'link' as const, onAction: () => console.log('Employee insights PDF') },
        { text: 'View sentiment analysis demo', type: 'secondary' as const, onAction: () => console.log('Sentiment demo') }
      ],
      mockupContent: { type: 'dashboard' as const }
    }
  };

  return (
    <CompleteAppLanding
      appName="Intelligent Human Resources"
      hero={heroProps}
      includeGetStarted={true}
      includeBenefits={true}
      includeCustomerSuccess={true}
      includeRelatedProducts={true}
      includeAdvancedFeatures={true}
      includeFinalCTA={true}
      relatedProducts={relatedProducts}
      benefits={benefits}
      customerStory={customerStory}
      customerLogos={customerLogos}
      advancedFeaturesTitle="AI Augments Intelligent Human Resources features"
      advancedFeaturesDescription="Transform your HR strategy with advanced AI that predicts workforce trends, optimizes recruitment, and provides deep insights for strategic decision-making and employee satisfaction."
      featureTabs={featureTabs}
      featureDetails={featureDetails}
      finalCTAText="See how AI Augments Intelligent HR transforms your workforce strategy."
      onChatWithBot={handleChatWithBot}
      onRequestDemo={handleRequestDemo}
      onContactSales={handleContactSales}
      onTakeTour={handleTakeTour}
      onBrowseTours={handleBrowseTours}
      onReadDatasheet={handleReadDatasheet}
    />
  );
}