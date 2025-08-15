"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Star, CheckCircle, ArrowLeft, ExternalLink, ArrowUpCircle,
  TrendingUp, Users, Zap, Shield, Globe, MessageSquare,
  Calendar, Clock, DollarSign, Target, BarChart3
} from 'lucide-react';

interface LandingHeaderProps {
  title: string;
  backUrl?: string;
  hasAccess: boolean;
  onLaunch: () => void;
  launchText: string;
  accentColor?: string;
}

export function LandingHeader({ 
  title, 
  backUrl = "/dashboard", 
  hasAccess, 
  onLaunch, 
  launchText,
  accentColor = "blue"
}: LandingHeaderProps) {
  return (
    <header className={`bg-white/80 backdrop-blur-sm border-b border-${accentColor}-100 shadow-sm sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={backUrl}>
            <Button variant="ghost" size="sm" className={`text-${accentColor}-600 hover:text-${accentColor}-700`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          
          {hasAccess && (
            <Button onClick={onLaunch} className={`bg-${accentColor}-600 hover:bg-${accentColor}-700 text-white`}>
              <ExternalLink className="h-4 w-4 mr-2" />
              {launchText}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

interface HeroSectionProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  badges?: Array<{ text: string; icon: React.ElementType; color: string }>;
  rating?: { stars: number; reviews: number };
  hasAccess: boolean;
  onLaunch: () => void;
  launchText: string;
  accentColor?: string;
  upgradeUrl?: string;
  upgradeReason?: string;
}

export function HeroSection({
  icon: Icon,
  title,
  subtitle,
  description,
  badges = [
    { text: "Popular", icon: Star, color: "blue" },
    { text: "Ready", icon: CheckCircle, color: "green" }
  ],
  rating = { stars: 5, reviews: 2847 },
  hasAccess,
  onLaunch,
  launchText,
  accentColor = "blue",
  upgradeUrl = "/pricing",
  upgradeReason = "This app requires a paid subscription to access all features."
}: HeroSectionProps) {
  return (
    <section className={`relative overflow-hidden py-20 bg-gradient-to-br from-${accentColor}-50 via-white to-${accentColor}-50`}>
      <div className={`absolute inset-0 bg-gradient-to-r from-${accentColor}-600/5 to-${accentColor}-800/5`}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className={`p-3 bg-${accentColor}-600 rounded-2xl`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div className="flex space-x-2">
              {badges.map((badge, index) => (
                <Badge key={index} className={`bg-${badge.color}-100 text-${badge.color}-700 border-${badge.color}-200`}>
                  <badge.icon className="w-3 h-3 mr-1" />
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {title} <span className={`text-${accentColor}-600`}>{subtitle}</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {description}
          </p>

          {rating && (
            <div className="flex items-center justify-center space-x-1 mb-8">
              {[...Array(rating.stars)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">
                {rating.stars}/5 from {rating.reviews.toLocaleString()} reviews
              </span>
            </div>
          )}

          {/* Access Status */}
          {!hasAccess ? (
            <Card className="max-w-md mx-auto border-orange-200 bg-orange-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <ArrowUpCircle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-orange-900 mb-2">Upgrade Required</h3>
                  <p className="text-sm text-orange-700 mb-4">
                    {upgradeReason}
                  </p>
                  <Link href={upgradeUrl}>
                    <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                      View Pricing Plans
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="flex justify-center space-x-4">
              <Button onClick={onLaunch} size="lg" className={`bg-${accentColor}-600 hover:bg-${accentColor}-700 text-white px-8 py-3`}>
                <ExternalLink className="h-5 w-5 mr-2" />
                {launchText}
              </Button>
              <Button variant="outline" size="lg" className={`border-${accentColor}-200 text-${accentColor}-700 hover:bg-${accentColor}-50 px-8 py-3`}>
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface StatsSectionProps {
  stats: Array<{
    value: string;
    label: string;
    color?: string;
  }>;
}

export function StatsSection({ stats }: StatsSectionProps) {
  const colors = ['blue', 'green', 'purple', 'orange'];
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-${Math.min(stats.length, 4)} gap-8`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold text-${stat.color || colors[index % colors.length]}-600 mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
  accentColor?: string;
}

export function FeaturesSection({ 
  title, 
  subtitle, 
  features, 
  accentColor = "blue" 
}: FeaturesSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title.split('{{accent}}').map((part, index) => 
              index === 1 ? (
                <span key={index} className={`text-${accentColor}-600`}>{part}</span>
              ) : part
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(features.length, 3)} gap-8`}>
          {features.map((feature, index) => (
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
  );
}

interface SocialProofSectionProps {
  title: string;
  companies: string[];
  accentColor?: string;
}

export function SocialProofSection({ 
  title, 
  companies, 
  accentColor = "blue" 
}: SocialProofSectionProps) {
  return (
    <section className={`py-16 bg-${accentColor}-600`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-8">
          {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-80">
          {companies.map((company, index) => (
            <div key={index} className="text-white/70 font-medium text-lg">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialsSectionProps {
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  }>;
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - see what real users have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CTASectionProps {
  title: string;
  subtitle: string;
  hasAccess: boolean;
  onLaunch: () => void;
  launchText: string;
  accentColor?: string;
  upgradeUrl?: string;
}

export function CTASection({
  title,
  subtitle,
  hasAccess,
  onLaunch,
  launchText,
  accentColor = "blue",
  upgradeUrl = "/pricing"
}: CTASectionProps) {
  return (
    <section className={`py-20 bg-gradient-to-r from-${accentColor}-600 to-${accentColor}-800`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className={`text-xl text-${accentColor}-100 mb-8`}>
          {subtitle}
        </p>
        
        {hasAccess ? (
          <div className="flex justify-center space-x-4">
            <Button onClick={onLaunch} size="lg" className={`bg-white text-${accentColor}-600 hover:bg-gray-100 px-8 py-3`}>
              <ExternalLink className="h-5 w-5 mr-2" />
              {launchText}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Link href={upgradeUrl}>
              <Button size="lg" className={`bg-white text-${accentColor}-600 hover:bg-gray-100 px-8 py-3`}>
                Start Your Free Trial
              </Button>
            </Link>
            <p className={`text-${accentColor}-100 text-sm`}>
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

interface LandingFooterProps {
  appName: string;
  githubUrl?: string;
  supportUrl?: string;
}

export function LandingFooter({ 
  appName, 
  githubUrl, 
  supportUrl = "/support" 
}: LandingFooterProps) {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-400">
            <p>&copy; 2025 {appName}. Part of Augment Dashboard.</p>
          </div>
          <div className="flex space-x-6">
            {githubUrl && (
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" asChild>
              <Link href={supportUrl}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
