"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AppModuleProps } from '../../types';
import CompleteAppLanding from '@/components/landing/complete-app-landing';

export function CalendarSchedulerLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleChatWithBot = () => {
    console.log('Opening chatbot for Calendar Scheduler');
  };

  const handleRequestDemo = () => {
    console.log('Requesting demo for Calendar Scheduler');
  };

  const handleContactSales = () => {
    console.log('Contacting sales for Calendar Scheduler');
  };

  const handleTakeTour = () => {
    console.log('Taking tour for Calendar Scheduler');
  };

  const handleBrowseTours = () => {
    console.log('Browsing product tours');
  };

  const handleReadDatasheet = () => {
    console.log('Reading Calendar Scheduler datasheet');
  };

  const heroProps = {
    title: "AI-Powered Calendar & Scheduling",
    description: [
      'Our complete <span class="text-blue-600 font-medium">AI-powered scheduling</span> solution with embedded <span class="text-blue-600 font-medium">artificial intelligence</span> brings consistent processes and a single source of truth across your entire appointment management—from smart booking and calendar integration to automated reminders and time zone support.',
      'The application helps you improve your scheduling efficiency, increase your booking rates, and manage appointments more intelligently than ever before.'
    ],
    videoTitle: "What is the AI Augments Calendar & Scheduling Suite?",
    videoDuration: "2:20",
    dashboardColor: {
      primary: "bg-gradient-to-br from-green-50 via-white to-emerald-50",
      secondary: "bg-green-100",
      accent: "bg-emerald-100"
    },
    dashboardMetrics: {
      metric1: { label: "Bookings", color: "bg-green-100" },
      metric2: { label: "Scheduled", color: "bg-emerald-100" },
      metric3: { label: "Availability", color: "bg-blue-100" }
    },
    centralFigureColor: "bg-gradient-to-b from-green-400 to-green-600",
    bottomGradient: "bg-gradient-to-r from-green-100 via-emerald-100 to-blue-100",
    featureShowcases: {
      feature1: { label: "Smart Booking", color: "bg-gradient-to-br from-green-200 to-green-400" },
      feature2: { label: "Reminders", color: "bg-gradient-to-br from-emerald-200 to-emerald-400" },
      feature3: { label: "Calendar Sync", color: "bg-gradient-to-br from-blue-200 to-blue-400" },
      feature4: { label: "Time Zone Support", color: "bg-gradient-to-br from-teal-200 to-teal-400" }
    }
  };

  const benefits = [
    {
      title: "Eliminate scheduling conflicts and reduce no-shows by 70%",
      description: "Prevent double-bookings and reduce missed appointments with intelligent scheduling algorithms and automated reminder systems.",
      actionText: "Learn about scheduling optimization (PDF)",
      actionType: 'pdf' as const,
      onAction: () => console.log('Download scheduling PDF')
    },
    {
      title: "Save 15+ hours per week on calendar management",
      description: "Automate appointment booking, rescheduling, and calendar coordination to focus on what matters most - your core business activities.",
      actionText: "See time-saving features demo",
      actionType: 'tour' as const,
      onAction: () => console.log('Time-saving demo')
    }
  ];

  const customerStory = {
    title: "SchedulePro increases booking efficiency by 85% with AI-powered automation",
    description: "Discover how SchedulePro streamlined their appointment management using AI Augments Calendar Scheduler, resulting in 85% more efficient booking processes and 90% customer satisfaction.",
    actionText: "Read the SchedulePro story",
    onAction: () => console.log('Read customer story')
  };

  const featureTabs = [
    { id: 'smart-booking', title: 'Smart booking system' },
    { id: 'calendar-integration', title: 'Calendar integration' }
  ];

  const featureDetails = {
    'smart-booking': {
      title: 'Smart booking system',
      subtitle: 'Intelligent appointment scheduling',
      description: 'Enable seamless appointment booking with AI-powered availability detection, conflict prevention, and automatic optimization of your schedule.',
      subsections: [
        {
          title: 'Intelligent availability detection',
          description: 'Automatically detect and offer optimal time slots based on your preferences, buffer times, and existing commitments.'
        }
      ],
      actions: [
        { text: 'Read Smart Booking guide (PDF)', type: 'link' as const }
      ],
      mockupContent: { type: 'dashboard' as const }
    },
    'calendar-integration': {
      title: 'Calendar integration',
      subtitle: 'Seamless calendar synchronization',
      description: 'Connect with all major calendar platforms for unified scheduling that prevents conflicts and keeps everyone synchronized.',
      subsections: [
        {
          title: 'Multi-platform synchronization',
          description: 'Sync with Google Calendar, Outlook, Apple Calendar, and other platforms for real-time availability updates.'
        }
      ],
      actions: [
        { text: 'Explore integration options', type: 'link' as const }
      ],
      mockupContent: { type: 'table' as const }
    }
  };

  return (
    <CompleteAppLanding
      appName="Calendar & Scheduling"
      hero={heroProps}
      includeGetStarted={true}
      includeBenefits={true}
      includeCustomerSuccess={true}
      includeAdvancedFeatures={true}
      includeFinalCTA={true}
      benefits={benefits}
      customerStory={customerStory}
      advancedFeaturesTitle="AI Augments Calendar & Scheduling features"
      advancedFeaturesDescription="Streamline your appointment management with intelligent scheduling tools that eliminate conflicts, reduce no-shows, and optimize your time for maximum productivity."
      featureTabs={featureTabs}
      featureDetails={featureDetails}
      finalCTAText="See how AI Augments Calendar & Scheduling optimizes your time management."
      onChatWithBot={handleChatWithBot}
      onRequestDemo={handleRequestDemo}
      onContactSales={handleContactSales}
      onTakeTour={handleTakeTour}
      onBrowseTours={handleBrowseTours}
      onReadDatasheet={handleReadDatasheet}
    />
  );
}