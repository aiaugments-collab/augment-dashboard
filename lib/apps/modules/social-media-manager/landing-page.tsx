"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppModuleProps } from '../../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Share2, Calendar, BarChart3, Users, 
  ExternalLink, ArrowUpCircle, CheckCircle, Star, ArrowLeft,
  Smartphone, Globe, Zap, TrendingUp, Target, MessageSquare,
  Clock, Hash, Repeat, Heart, Eye, ChevronDown, ChevronUp,
  Image, Video, Bot, Shield, Settings, Bell
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

export function SocialMediaManagerLandingPage(props: AppModuleProps) {
  const router = useRouter();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleLaunch = () => {
    router.push('/app/social-media-manager/launch');
  };

  const stats = [
    { value: "5x", label: "Faster Content Publishing", color: "indigo" },
    { value: "300%", label: "Increase in Engagement", color: "pink" },
    { value: "80%", label: "Time Saved on Management", color: "purple" },
    { value: "50%", label: "Better Post Performance", color: "blue" }
  ];

  const mainFeatures = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Schedule posts across all platforms with AI-powered optimal timing recommendations and content optimization.",
      color: "indigo"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track engagement, reach, ROI, and competitor performance with comprehensive social media analytics.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Manage multiple team members with role-based access, approval workflows, and content calendars.",
      color: "pink"
    },
    {
      icon: Bot,
      title: "AI Content Assistant",
      description: "Generate engaging captions, hashtags, and content ideas with our AI-powered writing assistant.",
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "Unified Inbox",
      description: "Manage all your social media messages, comments, and mentions from one centralized dashboard.",
      color: "green"
    },
    {
      icon: Hash,
      title: "Hashtag Research",
      description: "Find trending hashtags, analyze performance, and optimize your content for maximum reach.",
      color: "orange"
    }
  ];

  const advancedFeatures = [
    {
      icon: Video,
      title: "Video & Story Management",
      description: "Schedule and publish videos, Stories, Reels, and TikToks with auto-resizing and optimization.",
      color: "red"
    },
    {
      icon: Target,
      title: "Audience Insights",
      description: "Deep analytics on your audience demographics, behavior, and optimal posting times.",
      color: "blue"
    },
    {
      icon: Repeat,
      title: "Content Recycling",
      description: "Automatically resurface your best-performing content with smart recycling suggestions.",
      color: "green"
    },
    {
      icon: Shield,
      title: "Brand Safety",
      description: "AI-powered content moderation and brand safety checks before publishing.",
      color: "yellow"
    },
    {
      icon: Bell,
      title: "Crisis Management",
      description: "Real-time monitoring and alerts for mentions, trends, and potential PR issues.",
      color: "red"
    },
    {
      icon: Settings,
      title: "Workflow Automation",
      description: "Create custom automation rules for responses, publishing, and content curation.",
      color: "purple"
    }
  ];

  const testimonials = [
    {
      quote: "We increased our social media engagement by 400% and cut our management time in half. The AI content suggestions are incredibly helpful.",
      author: "Lisa Chen",
      role: "Marketing Director",
      company: "Fashion Forward"
    },
    {
      quote: "Managing 15+ social accounts used to take our team 20 hours a week. Now it takes 4 hours with better results.",
      author: "Marcus Johnson",
      role: "Social Media Manager",
      company: "Tech Startup Hub"
    },
    {
      quote: "The analytics helped us understand our audience better and optimize our content strategy. Our reach doubled in 3 months.",
      author: "Sofia Rodriguez",
      role: "Brand Manager",
      company: "Wellness Co"
    }
  ];

  const platforms = [
    { name: "Facebook", supported: true, features: ["Posts", "Stories", "Reels", "Events"] },
    { name: "Instagram", supported: true, features: ["Posts", "Stories", "Reels", "IGTV"] },
    { name: "Twitter/X", supported: true, features: ["Tweets", "Threads", "Spaces"] },
    { name: "LinkedIn", supported: true, features: ["Posts", "Articles", "Stories"] },
    { name: "TikTok", supported: true, features: ["Videos", "Stories"] },
    { name: "YouTube", supported: true, features: ["Videos", "Shorts", "Community"] },
    { name: "Pinterest", supported: true, features: ["Pins", "Stories", "Ideas"] },
    { name: "Snapchat", supported: true, features: ["Snaps", "Stories", "Spotlight"] }
  ];

  const faqs = [
    {
      question: "Which social media platforms do you support?",
      answer: "We support all major platforms including Facebook, Instagram, Twitter/X, LinkedIn, TikTok, YouTube, Pinterest, and Snapchat. New platforms are added regularly based on user demand."
    },
    {
      question: "Can I schedule videos and Stories?",
      answer: "Yes! You can schedule videos, Stories, Reels, TikToks, and all other content types. Our system automatically optimizes formats for each platform."
    },
    {
      question: "How does the AI content assistant work?",
      answer: "Our AI analyzes your brand voice, industry trends, and high-performing content to suggest captions, hashtags, and content ideas. It learns from your preferences to improve over time."
    },
    {
      question: "Can multiple team members use the same account?",
      answer: "Absolutely! You can add unlimited team members with role-based permissions. Set up approval workflows, assign content creators, and manage everything from one dashboard."
    },
    {
      question: "Do you provide analytics and reporting?",
      answer: "Yes, we offer comprehensive analytics including engagement rates, reach, impressions, click-through rates, competitor analysis, and custom reports you can share with stakeholders."
    },
    {
      question: "Is there a mobile app?",
      answer: "Yes, we have full-featured mobile apps for iOS and Android. You can create, schedule, publish, and respond to comments from anywhere."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <LandingHeader
        title="Social Media Manager"
        hasAccess={props.hasAccess}
        onLaunch={handleLaunch}
        launchText="Launch Social Manager"
        accentColor="indigo"
      />

      {/* Hero Section */}
      <HeroSection
        icon={Share2}
        title="Social Media"
        subtitle="Manager"
        description="Automate your social media presence across all platforms. Schedule posts, engage with audiences, and analyze performance from one central dashboard."
        hasAccess={props.hasAccess}
        onLaunch={handleLaunch}
        launchText="Launch Social Manager"
        accentColor="indigo"
        rating={{ stars: 5, reviews: 4821 }}
        upgradeReason="This comprehensive social media management platform requires a Starter plan or higher."
      />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Main Features */}
      <FeaturesSection
        title="Everything You Need for {{accent}}Social Media Success"
        subtitle="From content creation to performance analysis, manage your entire social media strategy from one powerful platform."
        features={mainFeatures}
        accentColor="indigo"
      />

      {/* Platform Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect All Your <span className="text-indigo-600">Social Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage everything from one dashboard. We support all major social media platforms with native publishing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Share2 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{platform.name}</h3>
                  <div className="space-y-1">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-600">{feature}</div>
                    ))}
                  </div>
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
              Advanced Features for <span className="text-indigo-600">Professional Growth</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your social media strategy to the next level with AI-powered tools and enterprise-grade features.
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

      {/* Content Types Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Support for Every Content Type
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From simple text posts to complex video campaigns, our platform handles every type of social media content with ease.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Image, label: "Images & Graphics" },
                  { icon: Video, label: "Videos & Reels" },
                  { icon: Calendar, label: "Stories & Highlights" },
                  { icon: MessageSquare, label: "Live Streams" }
                ].map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <type.icon className="h-5 w-5 text-indigo-600" />
                    <span className="text-gray-700 font-medium">{type.label}</span>
                  </div>
                ))}
              </div>
              {props.hasAccess ? (
                <Button onClick={handleLaunch} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Share2 className="h-4 w-4 mr-2" />
                  Start Creating Content
                </Button>
              ) : (
                <Link href="/pricing">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Share2 className="h-4 w-4 mr-2" />
                    Get Started
                  </Button>
                </Link>
              )}
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Share2 className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Content Creation Studio</p>
                  <p className="text-sm text-gray-500">All formats, all platforms</p>
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
        title="Trusted by 25,000+ brands and creators worldwide"
        companies={['Fashion Forward', 'Tech Hub', 'Wellness Co', 'Creative Studio', 'Growth Agency']}
        accentColor="indigo"
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about social media management
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
        title="Ready to Transform Your Social Media Strategy?"
        subtitle="Join thousands of brands who've automated their social media and seen incredible growth."
        hasAccess={props.hasAccess}
        onLaunch={handleLaunch}
        launchText="Launch Social Manager"
        accentColor="indigo"
      />

      {/* Footer */}
      <LandingFooter
        appName="Social Media Manager"
        githubUrl="https://github.com/backink/socialautopost"
      />
    </div>
  );
}
