"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppModuleProps } from '../../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, UserCheck, Clock, Calculator, FileText, Shield, 
  ExternalLink, ArrowUpCircle, CheckCircle, Star, ArrowLeft,
  TrendingUp, Award, Calendar, Building, Target, Zap
} from 'lucide-react';

export function HumanResourcesLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/human-resources/launch');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            
            {props.hasAccess && (
              <Button onClick={handleLaunch} className="bg-pink-600 hover:bg-pink-700 text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                Launch HR System
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 to-rose-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-pink-600 rounded-2xl">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="flex space-x-2">
                <Badge className="bg-pink-100 text-pink-700 border-pink-200">
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
              Human Resources <span className="text-pink-600">Management</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your HR operations with our comprehensive platform. 
              Manage employees, payroll, performance, and compliance all in one place.
            </p>

            <div className="flex items-center justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">4.4/5 from 1,523 HR professionals</span>
            </div>

            {/* Access Status */}
            {!props.hasAccess ? (
              <Card className="max-w-md mx-auto border-orange-200 bg-orange-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <ArrowUpCircle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-orange-900 mb-2">Starter Plan Required</h3>
                    <p className="text-sm text-orange-700 mb-4">
                      This app requires a Starter plan or higher to access HR management features.
                    </p>
                    <Link href="/pricing">
                      <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                        Upgrade to Starter Plan
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex justify-center space-x-4">
                <Button onClick={handleLaunch} size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Launch HR System
                </Button>
                <Button variant="outline" size="lg" className="border-pink-200 text-pink-700 hover:bg-pink-50 px-8 py-3">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Demo
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">70%</div>
              <div className="text-gray-600">Reduction in HR Admin Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Faster Payroll Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Improved Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Compliance Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete <span className="text-pink-600">HR Operations</span> Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From recruitment to retirement, manage every aspect of your employee lifecycle with powerful automation and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Employee Management",
                description: "Complete employee profiles, organizational charts, and role management with automated onboarding workflows.",
                color: "pink"
              },
              {
                icon: Calculator,
                title: "Payroll Processing",
                description: "Automated payroll calculations, tax compliance, direct deposits, and comprehensive pay stub generation.",
                color: "blue"
              },
              {
                icon: Clock,
                title: "Time & Attendance",
                description: "Digital time tracking, shift scheduling, overtime management, and leave request automation.",
                color: "green"
              },
              {
                icon: TrendingUp,
                title: "Performance Management",
                description: "Goal setting, performance reviews, 360-degree feedback, and career development planning tools.",
                color: "purple"
              },
              {
                icon: Award,
                title: "Benefits Administration",
                description: "Health insurance management, retirement plans, PTO tracking, and employee benefit enrollment.",
                color: "orange"
              },
              {
                icon: Shield,
                title: "Compliance & Reporting",
                description: "Labor law compliance, audit trails, government reporting, and HR analytics dashboards.",
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

      {/* Employee Self-Service */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Employee Self-Service Portal</h2>
            <p className="text-xl text-gray-600">Empower your employees with 24/7 access to their HR information</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Pay Stubs", desc: "View and download" },
              { icon: Calendar, title: "Time Off", desc: "Request and track" },
              { icon: UserCheck, title: "Profile", desc: "Update information" },
              { icon: Building, title: "Benefits", desc: "Enroll and manage" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <item.icon className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <blockquote className="text-2xl font-light mb-6">
              "This HR platform transformed our operations. We've cut administrative time by 70% and our employees love the self-service features."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-pink-200">HR Director, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join hundreds of companies who've modernized their HR with our platform.
          </p>
          
          {props.hasAccess ? (
            <div className="flex justify-center space-x-4">
              <Button onClick={handleLaunch} size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3">
                <ExternalLink className="h-5 w-5 mr-2" />
                Launch HR System
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3">
                  Get Started with Starter Plan
                </Button>
              </Link>
              <p className="text-pink-100 text-sm">
                30-day free trial • Full HR features • Cancel anytime
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
              <p>&copy; 2025 Human Resources Management. Part of Augment Dashboard.</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" asChild>
                <a href="https://github.com/backink/HR-processes" target="_blank" rel="noopener noreferrer">
                  <Target className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Users className="h-4 w-4 mr-2" />
                Support
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
