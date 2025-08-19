"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Quote, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  ChevronLeft,
  ChevronRight,
  Building,
  MapPin,
  Calendar
} from "lucide-react";

interface CustomerSuccessSectionProps {
  appName: string;
  customerStory?: {
    title: string;
    description: string;
    actionText: string;
    onAction?: () => void;
  };
  customerLogos?: string[];
}

const CustomerSuccessSection: React.FC<CustomerSuccessSectionProps> = ({
  appName,
  customerStory,
  customerLogos = []
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Sample testimonials for enhanced experience
  const testimonials = [
    {
      quote: "AI Augments transformed our operations completely. We've seen a 40% increase in efficiency and our team couldn't be happier with the results.",
      author: "Sarah Johnson",
      title: "CTO",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      stats: { efficiency: "+40%", savings: "$2.1M", time: "6 months" }
    },
    {
      quote: "The implementation was seamless and the ROI was evident within the first quarter. This platform has become essential to our daily operations.",
      author: "Michael Chen",
      title: "VP of Operations", 
      company: "GlobalSoft Inc",
      location: "New York, NY",
      stats: { growth: "+65%", revenue: "$5.2M", team: "200+ users" }
    },
    {
      quote: "Outstanding support and incredible features. AI Augments has helped us scale our business faster than we ever thought possible.",
      author: "Emily Rodriguez",
      title: "CEO",
      company: "InnovateLtd",
      location: "Austin, TX", 
      stats: { scale: "+120%", customers: "10K+", rating: "4.9/5" }
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const defaultLogos = [
    "TechFlow", "GlobalSoft", "InnovateLtd", "DataStream", "CloudTech", "SmartSys",
    "NextGen", "ProBusiness", "TechLeader", "ScaleUp", "GrowthCorp", "FutureTech"
  ];

  const displayLogos = customerLogos.length > 0 ? customerLogos : defaultLogos;

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Customer Success Story */}
        {customerStory && (
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Enhanced Visual */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Award className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-2xl font-bold mb-2">Customer Success</div>
                      <div className="text-lg opacity-90">Real Results</div>
                    </div>
                  </div>
                  {/* Floating Stats */}
                  <div className="absolute top-6 left-6 bg-white bg-opacity-95 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                      <div>
                        <div className="font-bold text-gray-900">+40%</div>
                        <div className="text-xs text-gray-600">Efficiency</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white bg-opacity-95 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="w-6 h-6 text-blue-500" />
                      <div>
                        <div className="font-bold text-gray-900">10K+</div>
                        <div className="text-xs text-gray-600">Users</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
                  <Star className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-800">Success Story</span>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  {customerStory.title}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <Quote className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-gray-700 leading-relaxed text-lg italic">
                    {customerStory.description}
                  </p>
                </div>

                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group px-8 py-3"
                  onClick={customerStory.onAction}
                >
                  <span className="flex items-center">
                    {customerStory.actionText}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What our customers say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from real customers who have transformed their businesses with AI Augments {appName}.
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="hover:bg-gray-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="hover:bg-gray-100"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="text-center">
              <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6" />
              <blockquote className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].title}</div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Building className="w-4 h-4 mr-1" />
                    {testimonials[currentTestimonial].company}
                    <MapPin className="w-4 h-4 ml-3 mr-1" />
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                {Object.entries(testimonials[currentTestimonial].stats).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-3">
                    <div className="font-bold text-lg text-blue-600">{value}</div>
                    <div className="text-xs text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Customer Logos */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by industry leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Companies in diverse industries leverage AI Augments {appName} to drive operational excellence and achieve measurable results.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {displayLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="group flex items-center justify-center p-4 hover:scale-110 transition-transform duration-200"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm group-hover:shadow-md p-4 w-full h-16 flex items-center justify-center border border-gray-200 group-hover:border-blue-300 transition-all duration-200">
                    <span className="text-gray-700 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                      {logo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccessSection;
