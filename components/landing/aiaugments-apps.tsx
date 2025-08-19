"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, Users, DollarSign, Zap, MessageSquare, Share2, Calendar,
  ArrowRight, Building, Cog, FileSignature, BarChart3, Package, Briefcase,
  Star, ExternalLink
} from 'lucide-react';
import { getEnabledApps } from '@/lib/apps/registry';
import { initializeAppRegistry } from '@/lib/apps/initialize-registry';

// Icon mapping
const iconMap: Record<string, any> = {
  TrendingUp,
  Users,
  MessageSquare,
  FileSignature,
  Zap,
  Share2,
  Calendar,
  Building,
  DollarSign,
  Cog,
  Package,
  Briefcase,
  BarChart3
};

const AiAugmentsApps = () => {
  const [apps, setApps] = useState<any[]>([]);

  useEffect(() => {
    // Initialize registry if not done already
    if (typeof window !== 'undefined') {
      initializeAppRegistry();
    }
    
    // Get all enabled apps from registry
    const enabledApps = getEnabledApps();
    const appList = Object.entries(enabledApps).map(([slug, entry]) => ({
     
      ...entry.module.metadata,
      IconComponent: iconMap[entry.module.metadata.icon as keyof typeof iconMap] || TrendingUp
    }));
    
    setApps(appList);
  }, []);

  return (
    <section className="bg-gray-50 py-16" id="applications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            AI Augments Business Applications
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our complete suite of <span className="text-blue-600 font-medium">AI-powered applications</span> with 
            embedded artificial intelligence brings consistent processes across all your business functions.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {apps.map((app) => (
            <Card key={app.slug} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${app.color || 'bg-blue-500'} rounded-lg text-white`}>
                    <app.IconComponent className="h-6 w-6" />
                  </div>
                  {app.isPopular && (
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                
                <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {app.name}
                </CardTitle>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {app.shortDescription || app.description}
                </p>
                
                {app.rating && (
                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(app.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      {app.rating}/5
                    </span>
                  </div>
                )}
              </CardHeader>

              <CardContent className="pt-0 flex flex-col justify-between">
                {/* Tags */}
                {app.tags && app.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {app.tags.slice(0, 3).map((tag: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-2 mt-auto">
                  <Link href={`/app/${app.slug}`} className="block">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white font-medium text-sm group-hover:scale-105 transition-transform">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Application
                    </Button>
                  </Link>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-xs"
                    >
                      Chat with Chatbot
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-xs"
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white rounded-lg shadow-lg p-12 border">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Complete AI Augments Applications Suite
          </h3>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Transform your business with our integrated <span className="text-blue-600 font-medium">AI-powered applications</span>. 
            Start your intelligent automation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 font-medium">
              Chat with Chatbot
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 font-medium">
              Explore All Applications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAugmentsApps;
