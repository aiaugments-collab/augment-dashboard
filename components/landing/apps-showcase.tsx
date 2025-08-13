"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, Users, FileSignature, Zap, MessageSquare, Share2, Calendar,
  ArrowRight, Star, CheckCircle, Crown, ExternalLink
} from 'lucide-react';

export function AppsShowcaseSection() {
  const apps = [
    {
      name: "CRM & Sales",
      slug: "crm",
      description: "Transform your sales process with comprehensive customer relationship management and pipeline tracking.",
      icon: TrendingUp,
      color: "bg-blue-500",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600",
      features: ["Lead Management", "Sales Pipeline", "Email Integration", "Analytics"],
      rating: 4.6,
      users: "2,847",
      planRequired: false,
      badge: "Popular"
    },
    {
      name: "Human Resources",
      slug: "human-resources", 
      description: "Complete HR management with employee lifecycle, payroll processing, and performance tracking.",
      icon: Users,
      color: "bg-pink-500",
      gradientFrom: "from-pink-500",
      gradientTo: "to-rose-600",
      features: ["Employee Management", "Payroll", "Performance Reviews", "Compliance"],
      rating: 4.4,
      users: "1,523",
      planRequired: true,
      planLevel: "Starter",
      badge: "Essential"
    },
    {
      name: "Digital Signatures",
      slug: "digital-signature",
      description: "Secure, legally binding e-signatures with enterprise-grade compliance and document management.",
      icon: FileSignature,
      color: "bg-blue-600",
      gradientFrom: "from-blue-600",
      gradientTo: "to-cyan-600",
      features: ["E-Signatures", "Legal Compliance", "Mobile Signing", "Audit Trail"],
      rating: 4.7,
      users: "3,245",
      planRequired: true,
      planLevel: "Starter",
      badge: "Secure"
    },
    {
      name: "Marketing Automation",
      slug: "marketing-automation",
      description: "AI-powered marketing campaigns with lead nurturing, customer journeys, and conversion optimization.",
      icon: Zap,
      color: "bg-orange-500",
      gradientFrom: "from-orange-500",
      gradientTo: "to-amber-600",
      features: ["AI Campaigns", "Lead Scoring", "Journey Mapping", "ROI Analytics"],
      rating: 4.5,
      users: "1,847",
      planRequired: true,
      planLevel: "Professional",
      badge: "AI-Powered"
    },
    {
      name: "Customer Support",
      slug: "customer-support",
      description: "Comprehensive support platform with ticketing, live chat, knowledge base, and team collaboration.",
      icon: MessageSquare,
      color: "bg-teal-500",
      gradientFrom: "from-teal-500",
      gradientTo: "to-cyan-600",
      features: ["Ticketing System", "Live Chat", "Knowledge Base", "SLA Management"],
      rating: 4.4,
      users: "2,156",
      planRequired: true,
      planLevel: "Starter",
      badge: "Support"
    },
    {
      name: "Social Media Manager",
      slug: "social-media-manager",
      description: "Automate social media across all platforms with scheduling, analytics, and engagement tracking.",
      icon: Share2,
      color: "bg-indigo-500",
      gradientFrom: "from-indigo-500",
      gradientTo: "to-purple-600",
      features: ["Multi-Platform", "Smart Scheduling", "Analytics", "Team Collaboration"],
      rating: 4.6,
      users: "4,892",
      planRequired: true,
      planLevel: "Starter",
      badge: "Popular"
    },
    {
      name: "Calendar & Scheduling",
      slug: "calendar-scheduler",
      description: "Advanced appointment scheduling with client booking, reminders, and calendar integration.",
      icon: Calendar,
      color: "bg-green-500",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-600",
      features: ["Smart Booking", "Reminders", "Calendar Sync", "Time Zone Support"],
      rating: 4.3,
      users: "892",
      planRequired: false,
      badge: "Free"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Popular": return "bg-blue-100 text-blue-700 border-blue-200";
      case "AI-Powered": return "bg-orange-100 text-orange-700 border-orange-200";
      case "Secure": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Free": return "bg-green-100 text-green-700 border-green-200";
      case "Essential": return "bg-pink-100 text-pink-700 border-pink-200";
      case "Support": return "bg-teal-100 text-teal-700 border-teal-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white" id="apps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Apps for Every Business Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of business applications. Each app is designed to solve specific challenges 
            and integrate seamlessly with your workflow.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {apps.map((app, index) => (
            <Card key={app.slug} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              {/* Card Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${app.gradientFrom} ${app.gradientTo}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 ${app.color} rounded-xl text-white mb-4`}>
                    <app.icon className="h-6 w-6" />
                  </div>
                  <Badge className={getBadgeColor(app.badge)}>
                    {app.badge === "Popular" && <Star className="w-3 h-3 mr-1" />}
                    {app.badge === "AI-Powered" && <Zap className="w-3 h-3 mr-1" />}
                    {app.badge === "Secure" && <CheckCircle className="w-3 h-3 mr-1" />}
                    {app.badge === "Essential" && <Users className="w-3 h-3 mr-1" />}
                    {app.badge === "Free" && <CheckCircle className="w-3 h-3 mr-1" />}
                    {app.planRequired && app.planLevel === "Professional" && <Crown className="w-3 h-3 mr-1" />}
                    {app.badge}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {app.name}
                </CardTitle>
                
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(app.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {app.rating}/5 ({app.users} users)
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {app.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Plan Information */}
                {app.planRequired ? (
                  <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-sm text-orange-700">
                      <Crown className="h-4 w-4 inline mr-1" />
                      Requires {app.planLevel} Plan
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-sm text-green-700">
                      <CheckCircle className="h-4 w-4 inline mr-1" />
                      Free to Use
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button asChild className="w-full group-hover:scale-105 transition-transform">
                    <Link href={`/app/${app.slug}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View App Details
                    </Link>
                  </Button>
                  
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/app/${app.slug}/launch`}>
                      Launch App
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with our free apps and upgrade to unlock advanced features as your business grows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/login">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link href="/pricing">
                View Pricing Plans
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
