"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppModuleProps } from '../../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, Users, Target, BarChart3, Zap, MessageSquare, 
  ExternalLink, ArrowUpCircle, CheckCircle, Star, ArrowLeft,
  Phone, Mail, Calendar, Globe, DollarSign, Clock, 
  ChevronDown, ChevronUp, Play, Smartphone, Database,
  PieChart, Bell, Shield, Workflow, FileText, Link2
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

export function CRMLandingPage(props: AppModuleProps) {
  const router = useRouter();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleLaunch = () => {
    router.push('/app/crm/launch');
  };

  const stats = [
    { value: "30%", label: "Increase in Sales", color: "blue" },
    { value: "45%", label: "Faster Lead Response", color: "green" },
    { value: "60%", label: "Time Saved on Admin", color: "purple" },
    { value: "25%", label: "Higher Conversion", color: "orange" }
  ];

  const mainFeatures = [
    {
      icon: Target,
      title: "Lead Management",
      description: "Capture, qualify, and nurture leads from multiple channels with automated scoring and routing.",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Sales Pipeline",
      description: "Visual pipeline management with drag-and-drop functionality and customizable sales stages.",
      color: "green"
    },
    {
      icon: Users,
      title: "Contact Management",
      description: "Centralized customer database with complete interaction history and relationship tracking.",
      color: "purple"
    },
    {
      icon: DollarSign,
      title: "Deal Tracking",
      description: "Monitor opportunities from initial contact to close with probability scoring and forecasting.",
      color: "orange"
    },
    {
      icon: Mail,
      title: "Email Integration",
      description: "Sync with your email provider for seamless communication tracking and automated follow-ups.",
      color: "teal"
    },
    {
      icon: Phone,
      title: "Call Management",
      description: "Built-in calling with automatic logging, recording, and CRM data integration.",
      color: "indigo"
    }
  ];

  const advancedFeatures = [
    {
      icon: Workflow,
      title: "Sales Automation",
      description: "Automate repetitive tasks, follow-ups, and workflows to focus on closing deals.",
      color: "blue"
    },
    {
      icon: PieChart,
      title: "Advanced Analytics",
      description: "Real-time dashboards with sales forecasting, performance metrics, and ROI tracking.",
      color: "green"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "AI-powered alerts for hot leads, deal updates, and follow-up reminders.",
      color: "yellow"
    },
    {
      icon: Link2,
      title: "Integrations",
      description: "Connect with 100+ tools including email, calendar, marketing automation, and accounting software.",
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Mobile CRM",
      description: "Full-featured mobile app for managing your sales process on the go.",
      color: "pink"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, data encryption, and role-based access.",
      color: "red"
    }
  ];

  const testimonials = [
    {
      quote: "Our sales team closed 40% more deals in the first quarter after implementing this CRM. The automation features saved us 20 hours per week.",
      author: "Sarah Johnson",
      role: "Sales Director",
      company: "TechCorp Solutions"
    },
    {
      quote: "The lead scoring and pipeline management transformed how we approach sales. We can now focus on the hottest prospects and close deals faster.",
      author: "Mike Chen",
      role: "VP of Sales",
      company: "Growth Dynamics"
    },
    {
      quote: "Integration with our existing tools was seamless. The reporting gives us insights we never had before, helping us optimize our entire sales process.",
      author: "Emily Rodriguez",
      role: "Operations Manager",
      company: "Scale Ventures"
    }
  ];

  const comparisonFeatures = [
    { feature: "Contact Management", us: true, competitor1: true, competitor2: true },
    { feature: "Advanced Pipeline Management", us: true, competitor1: true, competitor2: false },
    { feature: "Built-in Calling & Recording", us: true, competitor1: false, competitor2: true },
    { feature: "AI-Powered Lead Scoring", us: true, competitor1: false, competitor2: false },
    { feature: "Unlimited Email Tracking", us: true, competitor1: "Limited", competitor2: "Paid Add-on" },
    { feature: "Custom Reporting Dashboard", us: true, competitor1: "Limited", competitor2: true },
    { feature: "Mobile App (iOS & Android)", us: true, competitor1: true, competitor2: false },
    { feature: "API Access", us: true, competitor1: "Enterprise Only", competitor2: "Paid Add-on" },
    { feature: "24/7 Support", us: true, competitor1: false, competitor2: "Enterprise Only" }
  ];

  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "Most teams are up and running within 24 hours. Our setup wizard guides you through importing contacts, configuring your pipeline, and connecting integrations. We also provide onboarding support to ensure a smooth transition."
    },
    {
      question: "Can we import data from our current CRM?",
      answer: "Yes! We support data migration from all major CRM platforms including Salesforce, HubSpot, Pipedrive, and others. Our migration specialists will handle the entire process to ensure no data is lost."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with 100+ tools including Gmail, Outlook, Slack, Zoom, QuickBooks, Mailchimp, and more. We also provide a robust API for custom integrations."
    },
    {
      question: "Is there a mobile app?",
      answer: "Yes, we have full-featured mobile apps for both iOS and Android. You can manage your entire sales process, make calls, send emails, and update deals from anywhere."
    },
    {
      question: "How secure is our data?",
      answer: "Security is our top priority. We're SOC 2 Type II certified, use bank-level encryption, and provide regular security audits. Your data is hosted on secure AWS servers with automatic backups."
    },
    {
      question: "What support do you provide?",
      answer: "We offer 24/7 customer support via chat, email, and phone. Plus, dedicated onboarding assistance, training materials, and a comprehensive knowledge base."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <LandingHeader
        title="CRM & Sales"
        hasAccess={props.hasAccess}
        onLaunch={handleLaunch}
        launchText="Launch CRM"
        accentColor="blue"
      />

      {/* Hero Section */}
      <HeroSection
        icon={TrendingUp}
        title="CRM &"
        subtitle="Sales"
        description="Transform your sales process with our comprehensive CRM platform. Track leads, manage opportunities, and close more deals with intelligent automation."
        hasAccess={props.hasAccess}
        onLaunch={handleLaunch}
        launchText="Launch CRM Now"
        accentColor="blue"
        upgradeReason="This powerful CRM requires a paid subscription to access all advanced features."
      />

      {/* ROI Statistics */}
      <StatsSection stats={stats} />

      {/* Main Features */}
      <FeaturesSection
        title="Everything You Need to {{accent}}Close More Deals"
        subtitle="From lead capture to deal closure, our CRM provides all the tools your sales team needs to succeed."
        features={mainFeatures}
        accentColor="blue"
      />

      {/* Demo Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                See It In Action
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Watch how our CRM streamlines your entire sales process, from lead capture to deal closure. 
                See real examples of automation, pipeline management, and reporting in action.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Lead scoring and qualification automation",
                  "Visual pipeline management",
                  "Email tracking and automation",
                  "Advanced reporting and forecasting"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              {props.hasAccess ? (
                <Button onClick={handleLaunch} className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Play className="h-4 w-4 mr-2" />
                  Try It Now
                </Button>
              ) : (
                <Link href="/pricing">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Play className="h-4 w-4 mr-2" />
                    Start Free Trial
                  </Button>
                </Link>
              )}
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Product Demo</p>
                  <p className="text-sm text-gray-500">Click to explore our CRM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Features for <span className="text-blue-600">Enterprise Sales</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Go beyond basic CRM with advanced automation, AI-powered insights, and enterprise-grade security.
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

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-blue-600">CRM</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we compare to other popular CRM solutions. More features, better value.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900">Features</th>
                  <th className="text-center p-4 font-semibold text-blue-600">Our CRM</th>
                  <th className="text-center p-4 font-semibold text-gray-600">Competitor A</th>
                  <th className="text-center p-4 font-semibold text-gray-600">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.us === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-blue-600 font-medium">{row.us}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.competitor1 === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.competitor1 === false ? (
                        <span className="text-red-500">✕</span>
                      ) : (
                        <span className="text-orange-500 text-sm">{row.competitor1}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.competitor2 === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.competitor2 === false ? (
                        <span className="text-red-500">✕</span>
                      ) : (
                        <span className="text-orange-500 text-sm">{row.competitor2}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Social Proof */}
      <SocialProofSection
        title="Trusted by over 10,000+ businesses worldwide"
        companies={['TechCorp', 'SalesForce Pro', 'Growth Co', 'Scale Inc', 'Revenue Labs']}
        accentColor="blue"
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our CRM platform
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
        title="Ready to Transform Your Sales Process?"
        subtitle="Join thousands of sales teams who've increased their revenue with our CRM platform."
        hasAccess={props.hasAccess}
        onLaunch={handleLaunch}
        launchText="Launch CRM Now"
        accentColor="blue"
      />

      {/* Footer */}
      <LandingFooter
        appName="CRM & Sales"
        githubUrl="https://github.com/backink/crm-app"
      />
    </div>
  );
}
