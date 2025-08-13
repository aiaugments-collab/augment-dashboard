"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppModuleProps } from '../../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileSignature, Shield, Clock, CheckCircle, Star, ArrowLeft,
  ExternalLink, ArrowUpCircle, Globe, Smartphone, Lock,
  Users, Building, Scale, Zap, FileCheck, Download
} from 'lucide-react';

export function DigitalSignatureLandingPage(props: AppModuleProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push('/app/digital-signature/launch');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
                Sign Documents
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-2xl">
                <FileSignature className="h-8 w-8 text-white" />
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
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Signature <span className="text-blue-600">Studio</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sign documents digitally with legally binding e-signatures. Secure, fast, and compliant 
              with international standards including eIDAS and ESIGN Act.
            </p>

            <div className="flex items-center justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">4.7/5 from 3,245 users worldwide</span>
            </div>

            {/* Access Status */}
            {!props.hasAccess ? (
              <Card className="max-w-md mx-auto border-orange-200 bg-orange-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <ArrowUpCircle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-orange-900 mb-2">Starter Plan Required</h3>
                    <p className="text-sm text-orange-700 mb-4">
                      This app requires a Starter plan or higher for digital signature features.
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
                <Button onClick={handleLaunch} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <FileSignature className="h-5 w-5 mr-2" />
                  Start Signing
                </Button>
                <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3">
                  <Download className="h-5 w-5 mr-2" />
                  Try Demo Document
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">256-bit</div>
              <div className="text-gray-600">SSL Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50M+</div>
              <div className="text-gray-600">Documents Signed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">190+</div>
              <div className="text-gray-600">Countries Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secure & <span className="text-blue-600">Legally Binding</span> E-Signatures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, send, and manage digital signatures with enterprise-grade security and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileSignature,
                title: "Electronic Signatures",
                description: "Legally binding e-signatures with full audit trail and tamper-evident technology for document integrity.",
                color: "blue"
              },
              {
                icon: Users,
                title: "Multi-Party Workflows",
                description: "Support for multiple signers with sequential or parallel signing workflows and automated reminders.",
                color: "green"
              },
              {
                icon: FileCheck,
                title: "Document Templates",
                description: "Create reusable templates for contracts, agreements, and forms with drag-and-drop field placement.",
                color: "purple"
              },
              {
                icon: Smartphone,
                title: "Mobile Signing",
                description: "Sign documents on any device with responsive design and touch-optimized signature capture.",
                color: "orange"
              },
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "256-bit SSL encryption, secure storage, and compliance with eIDAS, ESIGN Act, and UETA standards.",
                color: "red"
              },
              {
                icon: Scale,
                title: "Legal Compliance",
                description: "Meets international legal standards with comprehensive audit trails and identity verification options.",
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

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Every Industry</h2>
            <p className="text-xl text-gray-600">Trusted by professionals across all sectors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building, title: "Real Estate", desc: "Contracts, leases, property agreements" },
              { icon: Scale, title: "Legal", desc: "Client agreements, court documents, NDAs" },
              { icon: Users, title: "HR", desc: "Employment contracts, policy acknowledgments" },
              { icon: Globe, title: "Sales", desc: "Sales contracts, vendor agreements, proposals" },
              { icon: Shield, title: "Finance", desc: "Loan documents, investment agreements" },
              { icon: Zap, title: "Healthcare", desc: "Patient forms, consent documents, HIPAA forms" }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <useCase.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-gray-300">Your documents are protected with the highest security standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">End-to-End Encryption</h3>
              <p className="text-gray-300">All documents encrypted in transit and at rest with AES-256 encryption</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-green-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Compliance Ready</h3>
              <p className="text-gray-300">SOC 2 Type II certified with GDPR, HIPAA, and SOX compliance</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Audit Trail</h3>
              <p className="text-gray-300">Complete signing history with timestamps, IP tracking, and certificate of completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Paperless?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join millions of users who trust our platform for secure digital signatures.
          </p>
          
          {props.hasAccess ? (
            <div className="flex justify-center space-x-4">
              <Button onClick={handleLaunch} size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <FileSignature className="h-5 w-5 mr-2" />
                Start Signing Now
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                  Get Started with Starter Plan
                </Button>
              </Link>
              <p className="text-blue-100 text-sm">
                3 free signatures • No credit card required • Upgrade anytime
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
              <p>&copy; 2025 Digital Signature Studio. Part of Augment Dashboard.</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" asChild>
                <a href="https://github.com/backink/Digital-signature-app" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
