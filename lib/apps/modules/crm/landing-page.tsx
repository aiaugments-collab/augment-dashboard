"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppModuleProps } from '../../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, Users, Target, BarChart3, Zap, MessageSquare, 
  ExternalLink, ArrowUpCircle, CheckCircle, Star, ArrowLeft,
  Phone, Mail, Calendar, Globe, DollarSign, Clock
} from 'lucide-react';

export function CRMLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/crm/launch');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            
            {props.hasAccess && (
              <Button onClick={handleLaunch} className="bg-blue-600 hover:bg-blue-700 text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                Launch CRM
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-2xl">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="flex space-x-2">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Ready
                </Badge>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              CRM & <span className="text-blue-600">Sales</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your sales process with our comprehensive CRM platform. 
              Track leads, manage opportunities, and close more deals with intelligent automation.
            </p>

            <div className="flex items-center justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">4.6/5 from 2,847 reviews</span>
            </div>

            {/* Access Status */}
            {!props.hasAccess ? (
              <Card className="max-w-md mx-auto border-orange-200 bg-orange-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <ArrowUpCircle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-orange-900 mb-2">Upgrade Required</h3>
                    <p className="text-sm text-orange-700 mb-4">
                      This app requires a paid subscription to access all features.
                    </p>
                    <Link href="/pricing">
                      <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                        View Pricing Plans
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex justify-center space-x-4">
                <Button onClick={handleLaunch} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Launch CRM Now
                </Button>
                <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Demo
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ROI Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-gray-600">Increase in Sales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
              <div className="text-gray-600">Faster Lead Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-600">Time Saved on Admin</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
              <div className="text-gray-600">Higher Conversion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to <span className="text-blue-600">Close More Deals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lead capture to deal closure, our CRM provides all the tools your sales team needs to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
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

      {/* Social Proof */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Trusted by over 10,000+ businesses worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-80">
            {['TechCorp', 'SalesForce Pro', 'Growth Co', 'Scale Inc', 'Revenue Labs'].map((company, index) => (
              <div key={index} className="text-white/70 font-medium text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of sales teams who've increased their revenue with our CRM platform.
          </p>
          
          {props.hasAccess ? (
            <div className="flex justify-center space-x-4">
              <Button onClick={handleLaunch} size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <ExternalLink className="h-5 w-5 mr-2" />
                Launch CRM Now
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                  Start Your Free Trial
                </Button>
              </Link>
              <p className="text-blue-100 text-sm">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-400">
              <p>&copy; 2025 CRM & Sales. Part of Augment Dashboard.</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" asChild>
                <a href="https://github.com/backink/crm-app" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <MessageSquare className="h-4 w-4 mr-2" />
                Support
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
