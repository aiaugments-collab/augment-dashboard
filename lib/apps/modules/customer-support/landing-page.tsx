"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppModuleProps } from '../../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, Clock, Users, BarChart3, 
  ExternalLink, ArrowUpCircle, CheckCircle, Star, ArrowLeft,
  Headphones, Globe, Zap, Heart, Award, Shield, Bot,
  PhoneCall, Mail, Search, FileText, ChevronDown, ChevronUp,
  Smile, Target, TrendingUp, AlertCircle, Settings, Share2, Smartphone
} from 'lucide-react';
import {
  LandingHeader,
  HeroSection,
  StatsSection,
  FeaturesSection,
  SocialProofSection,
  TestimonialsSection,
  CTASection,
  LandingFooter
} from '../../base/landing-components';

export function CustomerSupportLandingPage(props: AppModuleProps) {
  const router = useRouter();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleLaunch = () => {
    router.push('/app/customer-support/launch');
  };

  const stats = [
    { value: "90%", label: "Customer Satisfaction", color: "teal" },
    { value: "60%", label: "Faster Response Times", color: "blue" },
    { value: "40%", label: "Reduction in Support Costs", color: "green" },
    { value: "24/7", label: "Automated Support", color: "purple" }
  ];

  const mainFeatures = [
    {
      icon: MessageSquare,
      title: "Advanced Ticketing",
      description: "Organize and track customer inquiries with smart routing, SLA management, and automated escalations.",
      color: "teal"
    },
    {
      icon: Headphones,
      title: "Live Chat Support",
      description: "Real-time customer assistance with chat widgets, team collaboration, and visitor tracking.",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Knowledge Base",
      description: "Self-service portal with searchable articles, FAQ management, and analytics on content performance.",
      color: "purple"
    },
    {
      icon: Bot,
      title: "AI Chatbot",
      description: "Intelligent chatbot with natural language processing to handle routine inquiries automatically.",
      color: "indigo"
    },
    {
      icon: PhoneCall,
      title: "Voice Support",
      description: "Integrated phone support with call routing, recording, and CRM integration for complete context.",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Comprehensive reporting on team performance, customer satisfaction, and support trends.",
      color: "orange"
    }
  ];

  const advancedFeatures = [
    {
      icon: Target,
      title: "SLA Management",
      description: "Set and track service level agreements with automated alerts and escalation workflows.",
      color: "red"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Internal notes, @mentions, and real-time collaboration tools for seamless teamwork.",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Integration",
      description: "Convert emails to tickets automatically and manage all communication from one platform.",
      color: "green"
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Powerful search across all tickets, knowledge base, and customer history with AI suggestions.",
      color: "purple"
    },
    {
      icon: Smile,
      title: "Customer Feedback",
      description: "Automated satisfaction surveys and feedback collection with sentiment analysis.",
      color: "yellow"
    },
    {
      icon: Settings,
      title: "Workflow Automation",
      description: "Custom automation rules for ticket routing, responses, and follow-up actions.",
      color: "indigo"
    }
  ];

  const testimonials = [
    {
      quote: "Our customer satisfaction scores improved by 35% after implementing this support platform. The AI chatbot handles 60% of our routine inquiries.",
      author: "Jennifer Walsh",
      role: "Customer Success Manager",
      company: "TechFlow Solutions"
    },
    {
      quote: "We reduced our average response time from 4 hours to 15 minutes. The team collaboration features are fantastic for complex issues.",
      author: "David Chen",
      role: "Support Team Lead",
      company: "CloudServe Inc"
    },
    {
      quote: "The knowledge base analytics helped us identify gaps in our documentation. We've seen a 50% increase in self-service resolution.",
      author: "Maria Rodriguez",
      role: "Operations Director",
      company: "ServicePro"
    }
  ];

  const supportChannels = [
    { name: "Live Chat", icon: MessageSquare, description: "Real-time messaging with customers" },
    { name: "Email Support", icon: Mail, description: "Convert emails to tickets automatically" },
    { name: "Phone Support", icon: PhoneCall, description: "Integrated voice support with recording" },
    { name: "Social Media", icon: Share2, description: "Monitor and respond to social mentions" },
    { name: "Help Center", icon: Globe, description: "Self-service knowledge base portal" },
    { name: "Mobile App", icon: Smartphone, description: "Support on iOS and Android apps" }
  ];

  const faqs = [
    {
      question: "How does the AI chatbot work?",
      answer: "Our AI chatbot uses natural language processing to understand customer inquiries and provide instant responses. It learns from your knowledge base and past conversations to improve over time. When it can't help, it seamlessly transfers to human agents with full context."
    },
    {
      question: "Can we integrate with our existing tools?",
      answer: "Yes! We integrate with 100+ popular tools including CRM systems (Salesforce, HubSpot), communication tools (Slack, Teams), and e-commerce platforms (Shopify, WooCommerce). We also provide robust APIs for custom integrations."
    },
    {
      question: "What reporting and analytics are available?",
      answer: "We provide comprehensive analytics including response times, resolution rates, customer satisfaction scores, team performance metrics, and trend analysis. All reports can be customized and exported for stakeholder sharing."
    },
    {
      question: "How secure is customer data?",
      answer: "Security is our top priority. We're SOC 2 Type II certified with GDPR compliance, use end-to-end encryption, and provide role-based access controls. All data is hosted on secure AWS infrastructure with regular backups."
    },
    {
      question: "Can we customize the help center?",
      answer: "Absolutely! You can fully customize your help center with your branding, colors, and layout. Add custom categories, create multi-language content, and embed it on your website with a simple widget."
    },
    {
      question: "Is there a mobile app for agents?",
      answer: "Yes, we have full-featured mobile apps for iOS and Android. Agents can respond to tickets, access customer history, collaborate with team members, and manage their workload from anywhere."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Header */}
      <LandingHeader
        title="Customer Support Center"
        hasAccess={props.hasAccess}
        onLaunch={handleLaunch}
        launchText="Launch Support Center"
        accentColor="teal"
      />

      {/* Hero Section */}
      <HeroSection
        icon={MessageSquare}
        title="Customer Support"
        subtitle="Center"
        description="Deliver exceptional customer service with our comprehensive support platform. Manage tickets, live chat, and knowledge base all in one place."
        hasAccess={props.hasAccess}
        onLaunch={handleLaunch}
        launchText="Launch Support Center"
        accentColor="teal"
        rating={{ stars: 5, reviews: 3892 }}
        upgradeReason="This comprehensive customer support platform requires a Starter plan or higher."
      />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Main Features */}
      <FeaturesSection
        title="Everything You Need for {{accent}}Exceptional Support"
        subtitle="From ticket management to AI-powered automation, deliver world-class customer service across all channels."
        features={mainFeatures}
        accentColor="teal"
      />

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Across All <span className="text-teal-600">Communication Channels</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet your customers where they are with unified support across email, chat, phone, social media, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <channel.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{channel.name}</h3>
                  <p className="text-sm text-gray-600">{channel.description}</p>
                  <CheckCircle className="h-4 w-4 text-green-500 mx-auto mt-3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Features for <span className="text-teal-600">Enterprise Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline operations with automation, analytics, and enterprise-grade security and compliance features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className={`p-3 bg-${feature.color}-100 rounded-lg w-fit mb-4`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Measure What Matters
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Track key performance indicators and gain actionable insights to continuously improve your customer support operations.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { metric: "First Response Time", value: "< 5 minutes average" },
                  { metric: "Resolution Rate", value: "95% first contact resolution" },
                  { metric: "Customer Satisfaction", value: "4.8/5 average rating" },
                  { metric: "Agent Productivity", value: "40% improvement" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{item.metric}</span>
                    <span className="text-teal-600 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
              {props.hasAccess ? (
                <Button onClick={handleLaunch} className="bg-teal-600 hover:bg-teal-700 text-white">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics Dashboard
                </Button>
              ) : (
                <Link href="/pricing">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Get Started
                  </Button>
                </Link>
              )}
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Real-time Analytics</p>
                  <p className="text-sm text-gray-500">Track performance metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Social Proof */}
      <SocialProofSection
        title="Trusted by 15,000+ support teams worldwide"
        companies={['TechFlow Solutions', 'CloudServe Inc', 'ServicePro', 'SupportDesk', 'HelpCenter Co']}
        accentColor="teal"
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our customer support platform
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </CardHeader>
                {openFAQ === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Customer Support?"
        subtitle="Join thousands of teams who've improved customer satisfaction and reduced support costs with our platform."
        hasAccess={props.hasAccess}
        onLaunch={handleLaunch}
        launchText="Launch Support Center"
        accentColor="teal"
      />

      {/* Footer */}
      <LandingFooter
        appName="Customer Support Center"
        githubUrl="https://github.com/backink/customer-support"
      />
    </div>
  );
}
