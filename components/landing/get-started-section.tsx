"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Video, Phone, ArrowRight, Clock, Users, Shield, Zap } from "lucide-react";

interface GetStartedSectionProps {
  appName: string;
  onContactSales?: () => void;
  onRequestDemo?: () => void;
  onTakeTour?: () => void;
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  appName,
  onContactSales,
  onRequestDemo,
  onTakeTour
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getStartedOptions = [
    {
      id: 'contact-sales',
      title: 'Contact sales',
      subtitle: 'Speak with an expert',
      description: `Talk to a member of our team about AI Augments ${appName}. Get personalized recommendations and pricing tailored to your business needs.`,
      icon: Phone,
      action: onContactSales,
      buttonText: 'Get in touch',
      features: ['Personalized consultation', 'Custom pricing', 'Implementation planning'],
      gradient: 'from-blue-500 to-blue-600',
      delay: '0ms'
    },
    {
      id: 'request-demo',
      title: 'Request a live demo',
      subtitle: 'See it in action',
      description: `Get a live demo with an AI Augments ${appName} expert. Experience the full power of our platform with real-world scenarios and use cases.`,
      icon: Video,
      action: onRequestDemo,
      buttonText: 'Schedule demo',
      features: ['Live walkthrough', 'Q&A session', 'Use case examples'],
      gradient: 'from-green-500 to-green-600',
      delay: '100ms'
    },
    {
      id: 'take-tour',
      title: 'Take a guided tour',
      subtitle: 'Explore at your pace',
      description: `Explore our AI Augments ${appName} products through interactive tours. Learn key features and capabilities on your own schedule.`,
      icon: MessageCircle,
      action: onTakeTour,
      buttonText: 'Start tour',
      features: ['Interactive tutorials', 'Self-paced learning', 'Feature highlights'],
      gradient: 'from-purple-500 to-purple-600',
      delay: '200ms'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-6">
            <Zap className="w-4 h-4 text-yellow-600 mr-2" />
            <span className="text-sm font-medium text-yellow-800">Ready to get started?</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose your path to success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you want to speak with an expert, see a live demonstration, or explore on your own, 
            we have the perfect way to get you started with AI Augments {appName}.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {getStartedOptions.map((option, index) => (
            <div
              key={option.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group`}
              style={{ animationDelay: option.delay }}
              onMouseEnter={() => setHoveredCard(option.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Option {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 mb-3">
                    {option.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {option.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${option.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${option.gradient} hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white font-medium py-3 group/btn`}
                  onClick={option.action}
                >
                  <span className="flex items-center justify-center">
                    {option.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${option.gradient.replace('from-', 'border-').replace('to-', '')} rounded-2xl transition-all duration-300 pointer-events-none`}></div>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 bg-gradient-to-r ${option.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Clock className="w-8 h-8 text-blue-500" />
            <div>
              <div className="text-2xl font-bold text-gray-900">15 min</div>
              <div className="text-sm text-gray-600">Average demo time</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Users className="w-8 h-8 text-green-500" />
            <div>
              <div className="text-2xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600">Companies trust us</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Shield className="w-8 h-8 text-purple-500" />
            <div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Expert support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
