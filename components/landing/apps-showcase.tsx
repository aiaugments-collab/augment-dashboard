"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, Users, FileSignature, Zap, MessageSquare, Share2, Calendar,
  ArrowRight, Star, CheckCircle, Crown, ExternalLink, DollarSign, Cog, Building
} from 'lucide-react';

export function AppsShowcaseSection() {
  // Oracle-style application categories
  const applicationCategories = [
    {
      title: "Customer Experience (CX)",
      description: "Complete customer lifecycle management from lead to loyalty",
      icon: TrendingUp,
      color: "bg-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      apps: [
        { name: "CRM & Sales", slug: "crm", description: "Lead management and sales pipeline" },
        { name: "Customer Support", slug: "customer-support", description: "Help desk and service management" },
        { name: "Digital Signatures", slug: "digital-signature", description: "Secure document signing" }
      ]
    },
    {
      title: "Human Capital Management (HCM)",
      description: "End-to-end human resources and workforce management",
      icon: Users,
      color: "bg-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      apps: [
        { name: "AI-HR", slug: "ai-hr", description: "Intelligent human resources" },
        { name: "Human Resources", slug: "human-resources", description: "Employee lifecycle management" },
        { name: "Calendar Scheduler", slug: "calendar-scheduler", description: "Meeting and appointment booking" }
      ]
    },
    {
      title: "Financial Management",
      description: "Comprehensive financial planning and accounting solutions",
      icon: DollarSign,
      color: "bg-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      apps: [
        { name: "Finance Suite", slug: "finance", description: "Accounting and financial planning" },
        { name: "Billing & Invoicing", slug: "billing", description: "Automated billing systems" },
        { name: "Expense Management", slug: "expenses", description: "Cost control and reporting" }
      ]
    },
    {
      title: "Marketing & Automation",
      description: "Data-driven marketing campaigns and customer engagement",
      icon: Zap,
      color: "bg-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      apps: [
        { name: "Marketing Automation", slug: "marketing-automation", description: "Campaign management and lead nurturing" },
        { name: "Social Media Manager", slug: "social-media-manager", description: "Multi-platform social media management" },
        { name: "Email Marketing", slug: "email-marketing", description: "Targeted email campaigns" }
      ]
    },
    {
      title: "Operations & Management",
      description: "Streamline business operations and project management",
      icon: Cog,
      color: "bg-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      apps: [
        { name: "Project Management", slug: "project-management", description: "Task and resource management" },
        { name: "Inventory Control", slug: "inventory", description: "Stock and warehouse management" },
        { name: "Analytics Dashboard", slug: "analytics", description: "Business intelligence and reporting" }
      ]
    },
    {
      title: "Enterprise Solutions",
      description: "Advanced enterprise-grade business applications",
      icon: Building,
      color: "bg-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      apps: [
        { name: "ERP Business Suite", slug: "erpnext-business-suite", description: "Complete enterprise resource planning" },
        { name: "Supply Chain", slug: "supply-chain", description: "End-to-end supply chain management" },
        { name: "Business Intelligence", slug: "business-intelligence", description: "Advanced analytics and insights" }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white" id="applications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Oracle-Style Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Business Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Designed for change. Built for you. Our complete suite of cloud applications connects every function 
            across your enterprise with embedded artificial intelligence.
          </p>
        </div>

        {/* Oracle-Style Application Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {applicationCategories.map((category, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-2 ${category.borderColor} ${category.bgColor} overflow-hidden`}>
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 ${category.color} rounded-lg text-white`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <Badge className="bg-white text-gray-700 border border-gray-300">
                    {category.apps.length} Applications
                  </Badge>
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </CardTitle>
                
                <p className="text-gray-600 text-base">
                  {category.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Featured Applications */}
                <div className="space-y-3 mb-6">
                  {category.apps.map((app, appIndex) => (
                    <Link 
                      key={appIndex}
                      href={`/app/${app.slug}`}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group/app"
                    >
                      <div>
                        <div className="font-medium text-gray-900 group-hover/app:text-red-600 transition-colors">
                          {app.name}
                        </div>
                        <div className="text-sm text-gray-500">
                  {app.description}
                        </div>
                    </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover/app:text-red-600 transition-colors" />
                    </Link>
                  ))}
                </div>

                {/* Oracle-Style CTA Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium"
                  >
                    Request a Demo
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                  >
                    Chat with Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Oracle-Style CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-12 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Cloud Applications Suite
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect every business function with our integrated applications. Start your digital transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-red-600 hover:bg-red-700 text-white font-medium">
              Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
              Explore All Applications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
