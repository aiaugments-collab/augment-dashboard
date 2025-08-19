"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';
import AdvancedDetailedFeaturesSection from '@/components/landing/detailed-features-section-advanced';

export function CRMLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/crm/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for CRM');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for CRM');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for CRM');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for CRM');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading CRM datasheet');
  };

  // Hero configuration
  const heroProps = {
    title: "AI-Powered CRM & Sales Management",
    description: [
      'Our complete <span class="text-blue-600 font-medium">AI-powered CRM</span> solution with embedded <span class="text-blue-600 font-medium">artificial intelligence</span> brings consistent processes and a single source of truth across your entire sales organization—from lead management and pipeline tracking to customer relationship management and sales analytics.',
      'The application helps you improve your customer engagements, increase your sales team\'s productivity, and close more deals faster than ever before.'
    ],
    videoTitle: "What is the AI Augments CRM & Sales Management Suite?",
    videoDuration: "2:45",
    dashboardColor: {
      primary: "bg-gradient-to-br from-blue-50 via-white to-green-50",
      secondary: "bg-blue-100",
      accent: "bg-green-100"
    },
    dashboardMetrics: {
      metric1: { label: "Leads", color: "bg-blue-100" },
      metric2: { label: "Deals", color: "bg-green-100" },
      metric3: { label: "Revenue", color: "bg-purple-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-blue-400 to-blue-600",
    bottomGradient: "bg-gradient-to-r from-blue-100 via-purple-100 to-green-100",
    featureShowcases: {
      feature1: { label: "Lead Management", color: "bg-gradient-to-br from-blue-200 to-blue-400" },
      feature2: { label: "Sales Pipeline", color: "bg-gradient-to-br from-green-200 to-green-400" },
      feature3: { label: "AI Analytics", color: "bg-gradient-to-br from-purple-200 to-purple-400" },
      feature4: { label: "Deal Tracking", color: "bg-gradient-to-br from-orange-200 to-orange-400" }
    }
  };

  // Related products
  const relatedProducts = [
    {
      title: "AI Augments Marketing Automation",
      subtitle: "Intelligent campaign management",
      description: "Automate your marketing campaigns with AI-powered insights and lead nurturing capabilities.",
      actionText: "See marketing automation details",
      onAction: () => router.push('/app/marketing-automation')
    },
    {
      title: "AI Augments Customer Support",
      subtitle: "Smart customer service",
      description: "Deliver exceptional customer support with AI-powered ticketing and knowledge management.",
      actionText: "See customer support details",
      onAction: () => router.push('/app/customer-support')
    },
    {
      title: "AI Augments Human Resources",
      subtitle: "Intelligent workforce management",
      description: "Streamline your HR processes with AI-powered employee management and analytics.",
      actionText: "See HR management details",
      onAction: () => router.push('/app/human-resources')
    },
    {
      title: "AI Augments Digital Signature",
      subtitle: "Secure document signing",
      description: "Close deals faster with legally compliant digital signatures and document management.",
      actionText: "See digital signature details",
      onAction: () => router.push('/app/digital-signature')
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Accelerate sales cycles with AI insights",
      description: "Gain real-time visibility into your sales pipeline to close deals faster while reducing manual work and increasing conversion rates.",
      actionText: "Learn about AI-powered sales (PDF)",
      actionType: 'pdf' as const,
      onAction: () => console.log('Download AI sales PDF')
    },
    {
      title: "Optimize lead management and scoring",
      description: "Automatically score and prioritize leads based on AI analysis to focus your team's efforts on the highest-value opportunities.",
      actionText: "Take a lead scoring tour",
      actionType: 'tour' as const,
      onAction: () => console.log('Lead scoring tour')
    },
    {
      title: "Enhance customer relationship tracking",
      description: "Maintain comprehensive customer profiles and interaction histories to improve relationships and increase customer lifetime value.",
      actionText: "Explore customer insights features",
      actionType: 'link' as const,
      onAction: () => console.log('Customer insights')
    }
  ];

  // Customer story
  const customerStory = {
    title: "TechFlow Solutions increases sales conversion by 40% with AI-powered CRM insights",
    description: "Discover how TechFlow Solutions transformed their sales process and improved customer relationships using AI Augments CRM, resulting in a 40% increase in conversion rates and 25% reduction in sales cycle time.",
    actionText: "Read the TechFlow story",
    onAction: () => console.log('Read customer story')
  };

  // Customer logos
  const customerLogos = [
    "TechFlow", "SalesForce Pro", "GrowthCorp", "LeadGen Inc", 
    "ConvertMax", "Pipeline Co", "RevBoost", "CRM Masters", "Deal Closers"
  ];

  // Advanced Features Section Data
  const featureTabs = [
    { id: 'lead-management', title: 'Lead management and scoring' },
    { id: 'sales-pipeline', title: 'Sales pipeline optimization' },
    { id: 'customer-insights', title: 'Customer relationship insights' },
    { id: 'ai-analytics', title: 'AI-powered sales analytics' },
    { id: 'automation', title: 'Sales process automation' },
    { id: 'integration', title: 'Third-party integrations' }
  ];

  const featureDetails = {
    'lead-management': {
      title: 'Lead management and scoring',
      subtitle: 'Intelligent lead qualification and prioritization',
      description: 'Transform your lead management process with AI-powered lead scoring that automatically evaluates and prioritizes prospects based on their likelihood to convert, engagement patterns, and behavioral data.',
      subsections: [
        {
          title: 'AI-powered lead scoring',
          description: 'Automatically score leads based on demographic data, behavioral patterns, engagement history, and predictive analytics to identify your highest-value prospects.'
        },
        {
          title: 'Lead qualification automation',
          description: 'Streamline lead qualification with automated workflows that route leads to the right sales reps based on territory, expertise, and availability.'
        },
        {
          title: 'Lead nurturing campaigns',
          description: 'Create sophisticated nurturing sequences that adapt based on lead behavior, engagement levels, and stage in the buying journey.'
        }
      ],
      actions: [
        { text: 'Read the Lead Management data sheet (PDF)', type: 'link' as const, onAction: () => console.log('Lead management PDF') },
        { text: 'Take a lead scoring demo', type: 'secondary' as const, onAction: () => console.log('Lead scoring demo') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'sales-pipeline': {
      title: 'Sales pipeline optimization',
      subtitle: 'Accelerate deals through every stage',
      description: 'Gain complete visibility into your sales pipeline with advanced forecasting, deal progression tracking, and AI-powered recommendations to close deals faster.',
      subsections: [
        {
          title: 'Pipeline forecasting',
          description: 'Get accurate sales forecasts with AI-powered predictive analytics that analyze historical data, current pipeline health, and market trends.'
        },
        {
          title: 'Deal progression tracking',
          description: 'Monitor deal progression in real-time with automated stage updates, milestone tracking, and bottleneck identification.'
        },
        {
          title: 'Revenue optimization',
          description: 'Maximize revenue potential with intelligent pricing recommendations, upselling opportunities, and cross-selling suggestions.'
        }
      ],
      actions: [
        { text: 'Explore pipeline optimization features', type: 'link' as const, onAction: () => console.log('Pipeline features') },
        { text: 'See forecasting in action', type: 'secondary' as const, onAction: () => console.log('Forecasting demo') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'customer-insights': {
      title: 'Customer relationship insights',
      subtitle: 'Deep customer intelligence for better relationships',
      description: 'Build stronger customer relationships with comprehensive customer profiles, interaction history, and AI-powered insights that help you understand and serve your customers better.',
      subsections: [
        {
          title: '360-degree customer view',
          description: 'Access complete customer profiles with contact information, interaction history, purchase behavior, and communication preferences in one unified view.'
        },
        {
          title: 'Relationship mapping',
          description: 'Visualize customer relationships, identify key stakeholders, and track influence patterns to navigate complex B2B sales processes.'
        },
        {
          title: 'Customer health scoring',
          description: 'Monitor customer satisfaction and predict churn risk with AI-powered health scores based on engagement, usage, and support interactions.'
        }
      ],
      actions: [
        { text: 'Learn about customer insights (PDF)', type: 'link' as const, onAction: () => console.log('Customer insights PDF') },
        { text: 'View customer profiles demo', type: 'secondary' as const, onAction: () => console.log('Customer profiles demo') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'ai-analytics': {
      title: 'AI-powered sales analytics',
      subtitle: 'Data-driven sales intelligence',
      description: 'Make informed decisions with advanced analytics and AI-powered insights that reveal sales patterns, performance trends, and optimization opportunities.',
      subsections: [
        {
          title: 'Performance analytics',
          description: 'Track individual and team performance with comprehensive dashboards showing conversion rates, activity metrics, and goal achievement.'
        },
        {
          title: 'Predictive insights',
          description: 'Leverage machine learning to predict deal outcomes, identify at-risk opportunities, and recommend next best actions for each prospect.'
        },
        {
          title: 'Sales coaching intelligence',
          description: 'Identify coaching opportunities with AI analysis of sales calls, email interactions, and deal progression patterns.'
        }
      ],
      actions: [
        { text: 'Read analytics capabilities overview (PDF)', type: 'link' as const, onAction: () => console.log('Analytics PDF') },
        { text: 'See AI insights in action', type: 'secondary' as const, onAction: () => console.log('AI insights demo') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'automation': {
      title: 'Sales process automation',
      subtitle: 'Eliminate manual work and focus on selling',
      description: 'Automate repetitive tasks and streamline your sales processes with intelligent workflows that adapt to your team\'s unique selling methodology.',
      subsections: [
        {
          title: 'Workflow automation',
          description: 'Create sophisticated automation rules that trigger actions based on lead behavior, deal stages, and time-based events.'
        },
        {
          title: 'Email automation',
          description: 'Send personalized, timely emails with smart templates that adapt based on prospect profile, engagement history, and sales stage.'
        },
        {
          title: 'Task automation',
          description: 'Automatically create follow-up tasks, schedule meetings, and update records based on predefined rules and AI recommendations.'
        }
      ],
      actions: [
        { text: 'Explore automation workflows', type: 'link' as const, onAction: () => console.log('Automation workflows') },
        { text: 'See automation in action', type: 'secondary' as const, onAction: () => console.log('Automation demo') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'integration': {
      title: 'Third-party integrations',
      subtitle: 'Connect your entire sales tech stack',
      description: 'Seamlessly integrate with your existing tools and systems to create a unified sales ecosystem that maximizes productivity and data consistency.',
      subsections: [
        {
          title: 'Marketing automation integration',
          description: 'Connect with leading marketing platforms to ensure seamless lead handoff and maintain lead context throughout the sales process.'
        },
        {
          title: 'Communication tools',
          description: 'Integrate with email platforms, video conferencing tools, and phone systems to track all customer interactions in one place.'
        },
        {
          title: 'Business applications',
          description: 'Connect with ERP, accounting, and customer support systems to provide a complete view of customer relationships and business processes.'
        }
      ],
      actions: [
        { text: 'View integration catalog', type: 'link' as const, onAction: () => console.log('Integration catalog') },
        { text: 'See integrations demo', type: 'secondary' as const, onAction: () => console.log('Integrations demo') }
      ],
      mockupContent: { type: 'dashboard' as const }
    }
  };

  return (
            <div>
      <CompleteAppLanding
        appName="CRM & Sales Management"
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
        advancedFeaturesTitle="AI Augments CRM & Sales Management features"
        advancedFeaturesDescription="Gain full visibility into and control of your sales process across your organization and customer networks to improve conversion rates, decrease sales cycles, and optimize revenue generation and customer satisfaction."
        featureTabs={featureTabs}
        featureDetails={featureDetails}
        finalCTAText="See how AI Augments CRM & Sales Management transforms your sales process."
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
