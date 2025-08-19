"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  CheckCircle, 
  Star,
  BarChart3,
  Target,
  Zap,
  FileText,
  Play,
  ExternalLink
} from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  actionText: string;
  actionType: 'pdf' | 'tour' | 'link';
  onAction?: () => void;
}

interface BenefitsSectionProps {
  appName: string;
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  appName,
  benefits
}) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation on scroll
  useEffect(() => {
    const observers = benefitRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [benefits]);

  const getActionIcon = (actionType: string) => {
    switch (actionType) {
      case 'pdf': return FileText;
      case 'tour': return Play;
      case 'link': return ExternalLink;
      default: return ArrowRight;
    }
  };

  const getActionColor = (actionType: string) => {
    switch (actionType) {
      case 'pdf': return 'text-red-600 hover:text-red-800';
      case 'tour': return 'text-green-600 hover:text-green-800';
      case 'link': return 'text-blue-600 hover:text-blue-800';
      default: return 'text-blue-600 hover:text-blue-800';
    }
  };

  const benefitIcons = [TrendingUp, BarChart3, Target, Zap, Clock, DollarSign];

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">Key advantages</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Augments {appName} benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered solution transforms your business operations 
            and delivers measurable results that drive growth and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefitIcons[index % benefitIcons.length];
            const ActionIcon = getActionIcon(benefit.actionType);
            const isVisible = visibleItems[index];
            
            return (
              <div
                key={index}
                ref={el => { benefitRefs.current[index] = el; }}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Icon Header */}
                <div className="relative flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Proven ROI
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <div className="border-l-4 border-gradient-to-b from-yellow-400 to-orange-400 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <Button 
                      variant="link" 
                      className={`${getActionColor(benefit.actionType)} p-0 h-auto font-medium group/btn transition-all duration-200`}
                      onClick={benefit.onAction}
                    >
                      <span className="flex items-center">
                        <ActionIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                        {benefit.actionText}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to experience these benefits?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of companies that have transformed their operations with AI Augments {appName}. 
              Start your journey today and see measurable results in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3">
                Get Started Now
              </Button>
              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Calculate ROI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
