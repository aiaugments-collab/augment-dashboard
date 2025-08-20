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

  // CTA Banner - Oracle RC11 style
  const ctaBanner = {
    title: "Scale your infrastructure with enterprise-grade cloud solutions",
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
      title: "Compute & Virtual Machines",
      description: "Deploy scalable virtual machines and containers with automated provisioning, load balancing, and high availability configurations.",
      actionText: "Learn more",
      actionType: 'primary' as const
    },
    {
      title: "Storage & Data Management",
      description: "Secure, scalable storage solutions with automated backup, disaster recovery, and multi-region data replication capabilities.",
      actionText: "Explore storage",
      actionType: 'primary' as const
    },
    {
      title: "Network & Security",
      description: "Enterprise-grade networking with VPC, load balancers, firewalls, and advanced security monitoring and threat detection.",
      actionText: "View networking",
      actionType: 'primary' as const
    }
  ];

  // Product Tour Slides - Oracle RC118 style
  const tourSlides = [
    {
      id: 1,
      title: "Deliver scalable infrastructure results from start to finish",
      description: "AI Augments Cloud Infrastructure helps you build and manage enterprise-grade cloud solutions by connecting the right compute resources to the right workloads, support your organization's scalability goals with clear infrastructure monitoring, and quickly adapt to changing demand requirements.",
      image: "", // Will use CSS mockup
      imageAlt: "Cloud Infrastructure Dashboard"
    },
    {
      id: 2,
      title: "Effortlessly manage cloud resources",
      description: "Regardless of your level of experience, you can easily use the high performance management console to provision, monitor, and scale your cloud infrastructure with automated workflows.",
      image: "", // Will use CSS mockup
      imageAlt: "Resource Management Interface"
    },
    {
      id: 3,
      title: "Match workloads to optimal resources",
      description: "The innovative AI-powered resource optimization engine helps you find the best-fit infrastructure for your workloads by analyzing performance patterns, cost efficiency, and scalability requirements automatically.",
      image: "", // Will use CSS mockup
      imageAlt: "Resource Optimization Engine"
    }
  ];

  // Customer Logos - Oracle RC56 style
  const customerLogosData = {
    title: "Trusted by leading enterprises worldwide",
    description: "Join thousands of companies that rely on our cloud infrastructure",
    logos: [
      { name: "CloudTech", logo: "", alt: "CloudTech logo" }, // Will use CSS mockup
      { name: "InfraCorp", logo: "", alt: "InfraCorp logo" },
      { name: "ScaleMax", logo: "", alt: "ScaleMax logo" },
      { name: "CloudFlow", logo: "", alt: "CloudFlow logo" },
      { name: "TechInfra", logo: "", alt: "TechInfra logo" },
      { name: "CloudBoost", logo: "", alt: "CloudBoost logo" }
    ]
  };

  // Featured Article - Oracle RC61 style
  const featuredArticle = {
    title: "The Future of Cloud Infrastructure: AI-Driven Resource Management",
    quote: "Organizations using AI-powered cloud infrastructure management see 40% reduction in operational costs and 60% improvement in resource utilization efficiency.",
    source: "Cloud Infrastructure Research Institute",
    image: "",
    imageAlt: "Cloud Infrastructure Research",
    actionText: "Read the full report",
    actionType: 'primary' as const,
    actionLink: "#article"
  };

  // Customer Video - Oracle RC10 style
  const customerVideo = {
    title: "TechScale reduced infrastructure costs by 45% with AI-powered cloud management",
    videoId: "cloud-infrastructure-success",
    thumbnail: "", // Will use CSS mockup
    duration: "4:20",
    onPlayVideo: (videoId: string) => console.log('Play video:', videoId)
  };

  // Use Cases - Oracle RC36 style
  const useCasesData = {
    title: "Cloud Infrastructure use cases",
    useCases: [
      {
        title: "Enterprise Applications",
        description: "Host mission-critical enterprise applications with high availability, auto-scaling, and disaster recovery capabilities.",
        actionText: "Explore enterprise hosting"
      },
      {
        title: "Development & Testing",
        description: "Provision development and testing environments on-demand with automated CI/CD pipelines and environment management.",
        actionText: "View DevOps solutions"
      },
      {
        title: "Data & Analytics",
        description: "Build scalable data processing and analytics platforms with distributed computing and high-performance storage solutions.",
        actionText: "Learn about data platforms"
      }
    ]
  };

  // Advanced Features
  const featureTabs = [
    { id: 'compute', title: 'Compute Services' },
    { id: 'storage', title: 'Storage Solutions' },
    { id: 'networking', title: 'Network & Security' },
    { id: 'monitoring', title: 'Monitoring & Analytics' }
  ];

  const featureDetails = {
    'compute': {
      title: 'Compute Services',
      subtitle: 'Scalable virtual machines and containers',
      description: 'Deploy and manage virtual machines, containers, and serverless functions with automated scaling and high availability.',
      subsections: [
        {
          title: 'Virtual machines',
          description: 'Launch scalable VMs with customizable configurations, automated provisioning, and load balancing.'
        },
        {
          title: 'Container orchestration',
          description: 'Deploy containerized applications with Kubernetes orchestration and automated container management.'
        }
      ],
      actions: [
        { text: 'Try compute services', type: 'link' as const, onAction: () => console.log('Compute services') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'storage': {
      title: 'Storage Solutions',
      subtitle: 'Secure and scalable data storage',
      description: 'Store and manage your data with enterprise-grade security, automated backup, and multi-region replication.',
      subsections: [
        {
          title: 'Object storage',
          description: 'Scalable object storage with versioning, lifecycle management, and global content delivery.'
        },
        {
          title: 'Database services',
          description: 'Managed database services with automated backups, scaling, and high availability configurations.'
        }
      ],
      actions: [
        { text: 'Explore storage options', type: 'link' as const, onAction: () => console.log('Storage options') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'networking': {
      title: 'Network & Security',
      subtitle: 'Enterprise networking and security',
      description: 'Build secure networks with VPC, load balancers, firewalls, and advanced threat protection.',
      subsections: [
        {
          title: 'Virtual private cloud',
          description: 'Create isolated network environments with custom routing, subnets, and security groups.'
        },
        {
          title: 'Security services',
          description: 'Protect your infrastructure with firewalls, DDoS protection, and security monitoring.'
        }
      ],
      actions: [
        { text: 'View security features', type: 'link' as const, onAction: () => console.log('Security features') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'monitoring': {
      title: 'Monitoring & Analytics',
      subtitle: 'Infrastructure monitoring and insights',
      description: 'Monitor your infrastructure performance with real-time metrics, alerts, and predictive analytics.',
      subsections: [
        {
          title: 'Performance monitoring',
          description: 'Track resource utilization, performance metrics, and system health with real-time dashboards.'
        },
        {
          title: 'Predictive analytics',
          description: 'Use AI-powered analytics to predict capacity needs and optimize resource allocation.'
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
        appName="Cloud Infrastructure Solutions"
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
        advancedFeaturesTitle="Cloud Infrastructure Features"
        advancedFeaturesDescription="Build and manage enterprise-grade cloud infrastructure with scalable compute, storage, and networking solutions."
        featureTabs={featureTabs}
        featureDetails={featureDetails}
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