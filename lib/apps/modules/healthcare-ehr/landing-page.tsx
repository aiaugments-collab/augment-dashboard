"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';
import AdvancedDetailedFeaturesSection from '@/components/landing/detailed-features-section-advanced';

export function HealthcareEHRLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/healthcare-ehr/launch');
  };

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Healthcare EHR');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Healthcare EHR');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Healthcare EHR');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Healthcare EHR');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Healthcare EHR datasheet');
  };

  // Hero configuration
  const heroProps = {
    title: "Healthcare & EHR Systems",
    description: [
      'Our comprehensive <span class="text-green-600 font-medium">Healthcare EHR system</span> with embedded <span class="text-green-600 font-medium">artificial intelligence</span> brings FHIR R4 compliance and clinical excellence across your entire healthcare organization—from patient records and clinical workflows to population health management and revenue cycle optimization.',
      'The application helps you improve patient outcomes, increase clinical efficiency, and maintain compliance with healthcare regulations while reducing administrative burden.'
    ],
    videoTitle: "What is the AI Augments Healthcare & EHR System?",
    videoDuration: "3:15",
    dashboardColor: {
      primary: "bg-gradient-to-br from-green-50 via-white to-blue-50",
      secondary: "bg-green-100",
      accent: "bg-blue-100"
    },
    dashboardMetrics: {
      metric1: { label: "Patients", color: "bg-green-100" },
      metric2: { label: "Records", color: "bg-blue-100" },
      metric3: { label: "Compliance", color: "bg-purple-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-green-400 to-green-600",
    bottomGradient: "bg-gradient-to-r from-green-100 via-blue-100 to-purple-100",
    featureShowcases: {
      feature1: { label: "Patient Records", color: "bg-gradient-to-br from-green-200 to-green-400" },
      feature2: { label: "Clinical Workflows", color: "bg-gradient-to-br from-blue-200 to-blue-400" },
      feature3: { label: "FHIR Compliance", color: "bg-gradient-to-br from-purple-200 to-purple-400" },
      feature4: { label: "Population Health", color: "bg-gradient-to-br from-teal-200 to-teal-400" }
    }
  };

  // Related products
  const relatedProducts = [
    {
      title: "AI Augments ERP & HCM Solutions",
      subtitle: "Enterprise resource planning",
      description: "Streamline your business operations with comprehensive ERP and human capital management solutions.",
      actionText: "See ERP & HCM details",
      onAction: () => router.push('/app/erp-hcm')
    },
    {
      title: "AI Augments Security & Identity",
      subtitle: "Enterprise security management",
      description: "Protect your healthcare data with advanced security and identity management solutions.",
      actionText: "See security details",
      onAction: () => router.push('/app/security-identity')
    },
    {
      title: "AI Augments Analytics & BI",
      subtitle: "Healthcare data analytics",
      description: "Transform healthcare data into actionable insights with advanced analytics and business intelligence.",
      actionText: "See analytics details",
      onAction: () => router.push('/app/analytics-bi')
    },
    {
      title: "AI Augments Communications",
      subtitle: "Healthcare communications",
      description: "Enhance patient and provider communications with unified messaging and collaboration tools.",
      actionText: "See communications details",
      onAction: () => router.push('/app/communications')
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Improve patient outcomes with AI-powered clinical insights",
      description: "Gain real-time visibility into patient health patterns and clinical workflows to improve care quality while reducing medical errors and enhancing patient safety.",
      actionText: "Learn about clinical AI insights (PDF)",
      actionType: 'pdf' as const,
      onAction: () => console.log('Download clinical AI PDF')
    },
    {
      title: "Ensure FHIR R4 compliance and interoperability",
      description: "Maintain industry-standard compliance with complete FHIR R4 implementation for seamless healthcare data exchange and interoperability.",
      actionText: "Take a FHIR compliance tour",
      actionType: 'tour' as const,
      onAction: () => console.log('FHIR compliance tour')
    },
    {
      title: "Optimize revenue cycle and administrative efficiency",
      description: "Streamline billing, coding, and administrative processes with automated workflows that reduce costs and improve revenue cycle performance.",
      actionText: "Explore revenue cycle features",
      actionType: 'link' as const,
      onAction: () => console.log('Revenue cycle features')
    }
  ];

  // Customer story
  const customerStory = {
    title: "Regional Medical Center reduces administrative burden by 45% with AI-powered EHR workflows",
    description: "Discover how Regional Medical Center transformed their clinical operations and improved patient care using AI Augments Healthcare EHR, resulting in 45% reduction in administrative tasks and 30% improvement in clinical efficiency.",
    actionText: "Read the Regional Medical Center story",
    onAction: () => console.log('Read customer story')
  };

  // Customer logos
  const customerLogos = [
    "Regional Medical", "HealthTech Pro", "ClinicalCorp", "MedFlow Inc", 
    "CarePlus", "HealthMax Co", "MedBoost", "Clinical Masters", "HealthCare Plus"
  ];

  // Advanced Features Section Data
  const featureTabs = [
    { id: 'patient-records', title: 'Patient records management' },
    { id: 'clinical-workflows', title: 'Clinical workflow optimization' },
    { id: 'fhir-compliance', title: 'FHIR R4 compliance & interoperability' },
    { id: 'population-health', title: 'Population health analytics' },
    { id: 'revenue-cycle', title: 'Revenue cycle management' },
    { id: 'integration', title: 'Healthcare system integrations' }
  ];

  const featureDetails = {
    'patient-records': {
      title: 'Patient records management',
      subtitle: 'Comprehensive electronic health records',
      description: 'Transform patient care with complete EHR system that maintains comprehensive patient records with real-time updates, clinical documentation, and seamless care coordination across your healthcare network.',
      subsections: [
        {
          title: 'Complete patient profiles',
          description: 'Maintain comprehensive patient records with medical history, demographics, allergies, medications, and care plans in one unified system.'
        },
        {
          title: 'Clinical documentation',
          description: 'Streamline clinical documentation with templates, voice recognition, and automated data entry that reduces administrative burden.'
        },
        {
          title: 'Care coordination',
          description: 'Enable seamless care coordination between providers with shared access to patient information and care plans.'
        }
      ],
      actions: [
        { text: 'Read the Patient Records data sheet (PDF)', type: 'link' as const, onAction: () => console.log('Patient records PDF') },
        { text: 'Take a patient records demo', type: 'secondary' as const, onAction: () => console.log('Patient records demo') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'clinical-workflows': {
      title: 'Clinical workflow optimization',
      subtitle: 'Streamline clinical processes',
      description: 'Optimize clinical workflows with intelligent automation, decision support systems, and integrated tools that improve efficiency and patient safety throughout your organization.',
      subsections: [
        {
          title: 'Clinical decision support',
          description: 'AI-powered clinical decision support provides real-time alerts, drug interaction warnings, and evidence-based treatment recommendations.'
        },
        {
          title: 'Workflow automation',
          description: 'Automate routine clinical tasks, appointment scheduling, and administrative processes to improve efficiency and reduce errors.'
        },
        {
          title: 'Quality reporting',
          description: 'Generate comprehensive quality reports and compliance documentation with automated data collection and analysis.'
        }
      ],
      actions: [
        { text: 'Explore clinical workflow features', type: 'link' as const, onAction: () => console.log('Clinical workflow features') },
        { text: 'See workflow automation in action', type: 'secondary' as const, onAction: () => console.log('Workflow demo') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'fhir-compliance': {
      title: 'FHIR R4 compliance & interoperability',
      subtitle: 'Industry-standard healthcare data exchange',
      description: 'Ensure seamless healthcare data exchange with complete FHIR R4 compliance, enabling interoperability with other healthcare systems and supporting modern healthcare integration requirements.',
      subsections: [
        {
          title: 'FHIR R4 implementation',
          description: 'Complete FHIR R4 implementation with support for all major resource types including Patient, Encounter, Observation, and Condition.'
        },
        {
          title: 'SMART on FHIR',
          description: 'Support for SMART on FHIR applications enabling third-party app integration and patient access to their health data.'
        },
        {
          title: 'HL7 integration',
          description: 'Seamless HL7 messaging integration for real-time data exchange with laboratory systems, imaging centers, and other providers.'
        }
      ],
      actions: [
        { text: 'Learn about FHIR compliance (PDF)', type: 'link' as const, onAction: () => console.log('FHIR compliance PDF') },
        { text: 'View FHIR integration demo', type: 'secondary' as const, onAction: () => console.log('FHIR demo') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'population-health': {
      title: 'Population health analytics',
      subtitle: 'Data-driven population health insights',
      description: 'Improve population health outcomes with advanced analytics, risk stratification, and care management tools that help identify health trends and optimize care delivery across patient populations.',
      subsections: [
        {
          title: 'Risk stratification',
          description: 'Identify high-risk patients using predictive analytics and clinical indicators to enable proactive care management and intervention.'
        },
        {
          title: 'Health trend analysis',
          description: 'Analyze population health trends, disease patterns, and outcome metrics to inform public health initiatives and care strategies.'
        },
        {
          title: 'Care management programs',
          description: 'Design and implement targeted care management programs for chronic diseases, preventive care, and population-specific health initiatives.'
        }
      ],
      actions: [
        { text: 'Read population health analytics overview (PDF)', type: 'link' as const, onAction: () => console.log('Population health PDF') },
        { text: 'See analytics in action', type: 'secondary' as const, onAction: () => console.log('Analytics demo') }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'revenue-cycle': {
      title: 'Revenue cycle management',
      subtitle: 'Optimize financial performance',
      description: 'Streamline revenue cycle processes with automated billing, coding assistance, and claims management that reduces administrative costs and improves financial performance.',
      subsections: [
        {
          title: 'Automated billing',
          description: 'Automate billing processes with intelligent charge capture, coding assistance, and claim generation to reduce errors and improve efficiency.'
        },
        {
          title: 'Claims management',
          description: 'Manage insurance claims with automated submission, tracking, and denial management to optimize reimbursement and reduce administrative burden.'
        },
        {
          title: 'Financial reporting',
          description: 'Generate comprehensive financial reports and analytics to monitor revenue cycle performance and identify optimization opportunities.'
        }
      ],
      actions: [
        { text: 'Explore revenue cycle workflows', type: 'link' as const, onAction: () => console.log('Revenue cycle workflows') },
        { text: 'See billing automation in action', type: 'secondary' as const, onAction: () => console.log('Billing demo') }
      ],
      mockupContent: { type: 'table' as const }
    },
    'integration': {
      title: 'Healthcare system integrations',
      subtitle: 'Connect your entire healthcare ecosystem',
      description: 'Seamlessly integrate with laboratory systems, imaging centers, pharmacy networks, and other healthcare providers to create a unified healthcare ecosystem.',
      subsections: [
        {
          title: 'Laboratory integration',
          description: 'Connect with laboratory systems for real-time test ordering, result delivery, and clinical decision support integration.'
        },
        {
          title: 'Imaging integration',
          description: 'Integrate with PACS and imaging systems for seamless image viewing, reporting, and clinical workflow integration.'
        },
        {
          title: 'Pharmacy networks',
          description: 'Connect with pharmacy networks for e-prescribing, medication management, and drug interaction checking.'
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
        appName="Healthcare & EHR Systems"
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
        advancedFeaturesTitle="AI Augments Healthcare & EHR Systems features"
        advancedFeaturesDescription="Gain complete visibility and control of your healthcare operations across your organization and provider networks to improve patient outcomes, ensure compliance, and optimize clinical efficiency."
        featureTabs={featureTabs}
        featureDetails={featureDetails}
        finalCTAText="See how AI Augments Healthcare & EHR Systems transforms your clinical operations."
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
