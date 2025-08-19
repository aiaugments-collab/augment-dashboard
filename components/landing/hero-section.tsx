import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-b from-gray-50 to-white" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="sm:text-center md:max-w-4xl md:mx-auto lg:col-span-7 lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 border border-red-200">
                Complete Business Applications Suite
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Oracle Cloud Applications
              <span className="block text-red-600">for Modern Business</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 sm:mt-8 lg:text-xl leading-relaxed">
              Designed for change. Built for you. Our complete cloud suite of business applications 
              connects every function across your enterprise, providing the intelligence you need 
              to grow and adapt in today's economy.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:max-w-none">
              <Button
                size="lg"
                className="text-base bg-red-600 hover:bg-red-700 text-white px-8 py-4 h-auto font-medium"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 h-auto font-medium"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with Sales
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                99.5% Uptime SLA
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                500,000+ Users
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                ISO 27001 Certified
              </div>
            </div>
          </div>
          <div className="mt-16 relative sm:max-w-2xl sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
            <div className="relative w-full">
              {/* Oracle-Style Dashboard Preview */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-900">Business Applications Dashboard</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-500">Live</span>
                    </div>
                  </div>
                </div>
                
                {/* Oracle-Style Application Grid */}
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-white font-bold text-sm">CX</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900">Customer Experience</div>
                      <div className="text-xs text-gray-500">Sales, CRM, Support</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-white font-bold text-sm">HCM</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900">Human Capital</div>
                      <div className="text-xs text-gray-500">HR, Payroll, Talent</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium text-gray-900">Application Performance</div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">CRM Processing</span>
                        <span className="text-green-600 font-medium">✓ Active</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Finance Automation</span>
                        <span className="text-green-600 font-medium">✓ Running</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">HR Workflows</span>
                        <span className="text-blue-600 font-medium">⚡ Optimized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Oracle-Style Floating Badges */}
              <div className="absolute -top-3 -right-3 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg">
                Cloud Native
              </div>
              <div className="absolute -bottom-3 -left-3 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg">
                Enterprise Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}