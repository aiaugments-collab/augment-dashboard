"use client";

import CompleteAppLanding from '@/components/landing/complete-app-landing';
import { FooterSection } from '@/components/landing/footer';

export default function LandingPage() {
  // Platform Hero Props
  const heroProps = {
    title: "Transform Your Business with AI-Powered Applications",
    subtitle: "The Complete AI Business Platform",
    description: [
      "AIAUGMENTS delivers a comprehensive suite of AI-powered business applications that work seamlessly together.",
      "From CRM and HR to analytics and automation, everything you need to run and grow your business - powered by artificial intelligence."
    ],
    videoTitle: "AIAUGMENTS Platform Overview",
    videoDuration: "3:45",
    dashboardColor: {
      primary: "#2563eb",
      secondary: "#3b82f6", 
      accent: "#1d4ed8"
    },
    dashboardMetrics: {
      metric1: { label: "Active Users", color: "#10b981" },
      metric2: { label: "Revenue Growth", color: "#f59e0b" },
      metric3: { label: "System Performance", color: "#8b5cf6" }
    },
    centralFigureColor: "#2563eb",
    bottomGradient: "from-blue-50 to-white",
    featureShowcases: {
      feature1: { label: "AI Automation", color: "#3b82f6" },
      feature2: { label: "Real-time Analytics", color: "#10b981" },
      feature3: { label: "Unified Platform", color: "#8b5cf6" },
      feature4: { label: "Enterprise Security", color: "#f59e0b" }
    }
  };

  // CTA Banner - Oracle RC11 style
  const ctaBanner = {
    title: "Ready to transform your business?",
    primaryButton: { text: "Get Started Today", onClick: () => console.log('Get started clicked') },
    secondaryButton: { text: "Schedule Demo", onClick: () => console.log('Schedule demo clicked') }
  };

  // Content Cards - Oracle RC59 style
  const contentCards = [
    {
      title: "Integrated Business Applications",
      description: "Complete suite of AI-powered applications for sales, marketing, HR, support, and operations - all working together seamlessly.",
      actionText: "Explore Applications",
      actionType: 'primary' as const
    },
    {
      title: "AI-First Architecture",
      description: "Every application is built with AI at its core, providing intelligent automation, predictive insights, and smart recommendations.",
      actionText: "Learn About AI Features",
      actionType: 'primary' as const
    },
    {
      title: "Enterprise-Grade Platform",
      description: "Scalable, secure, and compliant platform trusted by businesses of all sizes with 99.9% uptime and enterprise support.",
      actionText: "View Platform Features",
      actionType: 'primary' as const
    }
  ];

  // Product Tour Slides - Oracle RC118 style
  const tourSlides = [
    {
      id: 1,
      title: "Unified Business Management Dashboard",
      description: "Get a complete view of your business with our unified dashboard that connects all your applications and provides real-time insights across sales, operations, and performance.",
      image: "", // Will use CSS mockup
      imageAlt: "AIAUGMENTS Platform Dashboard"
    },
    {
      id: 2,
      title: "AI-Powered Automation Engine",
      description: "Automate routine tasks and processes across all applications with our intelligent automation engine that learns from your business patterns and optimizes workflows.",
      image: "", // Will use CSS mockup
      imageAlt: "AI Automation Interface"
    },
    {
      id: 3,
      title: "Cross-Application Analytics",
      description: "Make data-driven decisions with comprehensive analytics that span all your business applications, providing unified reporting and predictive insights.",
      image: "", // Will use CSS mockup
      imageAlt: "Platform Analytics View"
    }
  ];

  // Customer Logos - Oracle RC56 style
  const customerLogosData = {
    title: "Trusted by leading organizations worldwide",
    description: "Join thousands of companies that rely on AIAUGMENTS for their business operations",
    logos: [
      { name: "TechCorp Global", logo: "", alt: "TechCorp Global logo" },
      { name: "InnovateNow", logo: "", alt: "InnovateNow logo" },
      { name: "FutureScale", logo: "", alt: "FutureScale logo" },
      { name: "DataFlow Systems", logo: "", alt: "DataFlow Systems logo" },
      { name: "SmartBusiness Inc", logo: "", alt: "SmartBusiness Inc logo" },
      { name: "NextGen Solutions", logo: "", alt: "NextGen Solutions logo" }
    ]
  };

  // Featured Article - Oracle RC61 style
  const featuredArticle = {
    title: "The Future of Business Operations: AI Integration Done Right",
    quote: "Organizations using integrated AI AUGMENTSs like AIAUGMENTS report 40% faster decision-making, 35% reduction in operational costs, and 60% improvement in employee productivity through intelligent automation.",
    source: "Enterprise Technology Research Institute",
    image: "",
    imageAlt: "AI Business Platform Research",
    actionText: "Read the full study",
    actionType: 'primary' as const,
    actionLink: "#research-study"
  };

  // Customer Video - Oracle RC10 style
  const customerVideo = {
    title: "GlobalTech increased operational efficiency by 45% with AIAUGMENTS platform",
    videoId: "platform-success-story",
    thumbnail: "", // Will use CSS mockup
    duration: "4:30",
    onPlayVideo: (videoId: string) => console.log('Play video:', videoId)
  };

  // Use Cases - Oracle RC36 style
  const useCasesData = {
    title: "Transform Every Aspect of Your Business",
    description: "Discover how AIAUGMENTS delivers value across all business functions",
    useCases: [
      {
        title: "Small & Medium Businesses",
        description: "Complete business management solution with CRM, HR, accounting, and operations - all integrated and AI-powered for growing companies.",
        actionText: "Explore SMB Solutions"
      },
      {
        title: "Enterprise Organizations",
        description: "Scalable platform with advanced analytics, compliance features, and enterprise integrations for large organizations with complex needs.",
        actionText: "View Enterprise Features"
      },
      {
        title: "Digital Transformation",
        description: "Modernize legacy business processes with AI-first applications that streamline operations and enable data-driven decision making.",
        actionText: "Learn About Digital Transformation"
      }
    ]
  };

  // Handler functions
  const handleChatWithBot = () => console.log('Chat with bot');
  const handleRequestDemo = () => console.log('Request demo');
  const handleContactSales = () => console.log('Contact sales');
  const handleTakeTour = () => console.log('Take tour');
  const handleBrowseTours = () => console.log('Browse tours');
  const handleReadDatasheet = () => console.log('Read datasheet');

  return (
    <main className="bg-white">
      <CompleteAppLanding
        appName="AIAUGMENTS Platform"
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

        advancedFeaturesTitle="AIAUGMENTS Platform Core Features"
        advancedFeaturesDescription="Discover the powerful features that make AIAUGMENTS the most comprehensive AI business platform available today."
        featureTabs={[
          { id: 'unified-platform', title: 'Unified Platform' },
          { id: 'ai-automation', title: 'AI Automation' },
          { id: 'enterprise-security', title: 'Enterprise Security' }
        ]}
        featureDetails={{
          'unified-platform': {
            title: 'Unified Business Platform',
            description: 'All your business applications in one integrated platform with shared data, unified user experience, and seamless workflows.',
            subsections: [
              { title: 'Single Sign-On', description: 'Access all applications with one login across the entire platform' },
              { title: 'Shared Data Layer', description: 'Customer and business data synchronized across all applications' },
              { title: 'Unified Analytics', description: 'Comprehensive reporting and insights from all business functions' },
              { title: 'Cross-App Automation', description: 'Automated workflows that span multiple applications' },
              { title: 'Consistent Interface', description: 'Unified user experience across all business applications' },
              { title: 'Central Administration', description: 'Manage users, permissions, and settings from one dashboard' }
            ]
          },
          'ai-automation': {
            title: 'Intelligent Automation',
            description: 'AI-powered automation that learns from your business patterns and continuously optimizes processes for maximum efficiency.',
            subsections: [
              { title: 'Smart Process Automation', description: 'Intelligent workflows that adapt to your business needs' },
              { title: 'Predictive Analytics', description: 'AI-driven insights that forecast trends and opportunities' },
              { title: 'Document Processing', description: 'Automated extraction and processing of business documents' },
              { title: 'Decision Automation', description: 'AI-powered decision making for routine business processes' },
              { title: 'ML Optimization', description: 'Continuous learning and optimization of business workflows' },
              { title: 'Natural Language Processing', description: 'Advanced text analysis and communication automation' }
            ]
          },
          'enterprise-security': {
            title: 'Enterprise Security & Compliance',
            description: 'Bank-level security with comprehensive compliance features that meet the strictest industry standards and regulations.',
            subsections: [
              { title: 'Multi-Factor Authentication', description: 'Advanced security with multiple verification methods' },
              { title: 'End-to-End Encryption', description: 'Complete data protection in transit and at rest' },
              { title: 'Compliance Standards', description: 'GDPR, HIPAA, and other regulatory compliance built-in' },
              { title: 'Access Control', description: 'Granular role-based permissions and access management' },
              { title: 'Audit Trails', description: 'Comprehensive logging and monitoring of all system activities' },
              { title: 'SOC 2 Certified', description: 'Independently verified security and availability controls' }
            ]
          }
        }}
        finalCTAText="Transform your business operations with the power of AI."
        onChatWithBot={handleChatWithBot}
        onRequestDemo={handleRequestDemo}
        onContactSales={handleContactSales}
        onTakeTour={handleTakeTour}
        onBrowseTours={handleBrowseTours}
        onReadDatasheet={handleReadDatasheet}
      />
      <FooterSection />
    </main>
  );
}