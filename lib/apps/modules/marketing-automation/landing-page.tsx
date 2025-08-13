"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppModuleProps } from '../../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, Target, Mail, BarChart3, Users, Globe,
  ExternalLink, ArrowUpCircle, CheckCircle, Star, ArrowLeft,
  TrendingUp, MessageSquare, Calendar, Brain, Rocket, Crown
} from 'lucide-react';

export function MarketingAutomationLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/marketing-automation/launch');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            
            {props.hasAccess && (
              <Button onClick={handleLaunch} className="bg-orange-600 hover:bg-orange-700 text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                Launch Automation
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-amber-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-orange-600 rounded-2xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="flex space-x-2">
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  <Crown className="w-3 h-3 mr-1" />
                  Professional
                </Badge>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Ready
                </Badge>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Marketing Automation <span className="text-orange-600">Hub</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Automate your marketing with intelligent campaigns, lead nurturing, and customer journey mapping. 
              Scale your marketing efforts while improving conversion rates.
            </p>

            <div className="flex items-center justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">4.5/5 from 1,847 marketers</span>
            </div>

            {/* Access Status */}
            {!props.hasAccess ? (
              <Card className="max-w-md mx-auto border-orange-200 bg-orange-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Crown className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-orange-900 mb-2">Professional Plan Required</h3>
                    <p className="text-sm text-orange-700 mb-4">
                      This advanced marketing automation requires a Professional plan for AI-powered features.
                    </p>
                    <Link href="/pricing">
                      <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                        Upgrade to Professional
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex justify-center space-x-4">
                <Button onClick={handleLaunch} size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  <Rocket className="h-5 w-5 mr-2" />
                  Launch Automation Hub
                </Button>
                <Button variant="outline" size="lg" className="border-orange-200 text-orange-700 hover:bg-orange-50 px-8 py-3">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Demo
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Proven Marketing Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">127%</div>
              <div className="text-gray-600">Increase in Qualified Leads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">68%</div>
              <div className="text-gray-600">Higher Email Open Rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">35%</div>
              <div className="text-gray-600">Faster Sales Cycle</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5x</div>
              <div className="text-gray-600">Marketing ROI Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent <span className="text-orange-600">Marketing Automation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create sophisticated marketing campaigns with AI-powered automation that adapts to customer behavior and maximizes conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Campaign Management",
                description: "Design and execute multi-channel marketing campaigns with advanced targeting and personalization capabilities.",
                color: "orange"
              },
              {
                icon: Brain,
                title: "AI Lead Scoring",
                description: "Machine learning algorithms automatically score and prioritize leads based on behavior and engagement patterns.",
                color: "purple"
              },
              {
                icon: Mail,
                title: "Email Automation",
                description: "Sophisticated drip campaigns with behavioral triggers, dynamic content, and A/B testing optimization.",
                color: "blue"
              },
              {
                icon: Users,
                title: "Customer Journeys",
                description: "Visual workflow builder for complex customer paths with conditional logic and real-time personalization.",
                color: "green"
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Real-time campaign performance tracking with attribution modeling and ROI analysis across all channels.",
                color: "indigo"
              },
              {
                icon: MessageSquare,
                title: "Social Media Automation",
                description: "Schedule posts, monitor engagement, and automate social media responses across multiple platforms.",
                color: "pink"
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

      {/* AI Features */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powered by Artificial Intelligence</h2>
            <p className="text-xl text-orange-100">Let AI optimize your marketing campaigns automatically</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="p-4 bg-white/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-orange-100">AI predicts customer behavior and optimizes campaign timing for maximum impact</p>
            </div>
            <div className="text-center text-white">
              <div className="p-4 bg-white/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Segmentation</h3>
              <p className="text-orange-100">Automatically segment audiences based on behavior, preferences, and engagement</p>
            </div>
            <div className="text-center text-white">
              <div className="p-4 bg-white/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance Optimization</h3>
              <p className="text-orange-100">Continuous optimization of campaigns for better conversion rates and ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Integrates with Your Favorite Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 opacity-60">
            {['Salesforce', 'HubSpot', 'Mailchimp', 'Slack', 'Zapier', 'Google Ads'].map((tool, index) => (
              <div key={index} className="text-gray-500 font-medium text-lg">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Marketing?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join leading companies who've transformed their marketing with intelligent automation.
          </p>
          
          {props.hasAccess ? (
            <div className="flex justify-center space-x-4">
              <Button onClick={handleLaunch} size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
                <Rocket className="h-5 w-5 mr-2" />
                Launch Automation Hub
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
                  Get Professional Plan
                </Button>
              </Link>
              <p className="text-orange-100 text-sm">
                14-day free trial • AI-powered features • Cancel anytime
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
              <p>&copy; 2025 Marketing Automation Hub. Part of Augment Dashboard.</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" asChild>
                <a href="https://github.com/backink/Marketing-automation" target="_blank" rel="noopener noreferrer">
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
