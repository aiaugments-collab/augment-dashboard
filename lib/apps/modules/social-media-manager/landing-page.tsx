"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppModuleProps } from '../../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Share2, Calendar, BarChart3, Users, 
  ExternalLink, ArrowUpCircle, CheckCircle, Star, ArrowLeft,
  Smartphone, Globe, Zap, TrendingUp, Target, MessageSquare
} from 'lucide-react';

export function SocialMediaManagerLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/social-media-manager/launch');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-indigo-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            {props.hasAccess && (
              <Button onClick={handleLaunch} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                Launch Social Manager
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 bg-indigo-600 rounded-2xl">
              <Share2 className="h-8 w-8 text-white" />
            </div>
            <div className="flex space-x-2">
              <Badge className="bg-indigo-100 text-indigo-700">
                <Star className="w-3 h-3 mr-1" />
                Popular
              </Badge>
              <Badge className="bg-green-100 text-green-700">
                <CheckCircle className="w-3 h-3 mr-1" />
                Ready
              </Badge>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Social Media <span className="text-indigo-600">Manager</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Automate your social media presence across all platforms. Schedule posts, 
            engage with audiences, and analyze performance from one central dashboard.
          </p>

          {/* Access Status */}
          {!props.hasAccess ? (
            <Card className="max-w-md mx-auto border-orange-200 bg-orange-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <ArrowUpCircle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-orange-900 mb-2">Starter Plan Required</h3>
                  <Link href="/pricing">
                    <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                      Upgrade to Starter Plan
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Button onClick={handleLaunch} size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
              <Share2 className="h-5 w-5 mr-2" />
              Launch Social Manager
            </Button>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description: "Schedule posts across all platforms with optimal timing recommendations.",
                color: "indigo"
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Track engagement, reach, and ROI with comprehensive social media analytics.",
                color: "purple"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Manage multiple team members with role-based access and approval workflows.",
                color: "pink"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`p-3 bg-${feature.color}-100 rounded-lg w-fit mb-4`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Social Media?
          </h2>
          {props.hasAccess ? (
            <Button onClick={handleLaunch} size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
              <Share2 className="h-5 w-5 mr-2" />
              Launch Social Manager
            </Button>
          ) : (
            <Link href="/pricing">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
                Get Started with Starter Plan
              </Button>
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-400">
              <p>&copy; 2025 Social Media Manager. Part of Augment Dashboard.</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" asChild>
                <a href="https://github.com/backink/socialautopost" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
