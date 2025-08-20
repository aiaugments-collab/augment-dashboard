"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const AiAugmentsHero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 items-start py-12">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                AI Augments Cloud Applications
              </h1>
              <div className="w-16 h-1 bg-yellow-400 mt-4"></div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-gray-900">
                Designed for change. Built for you.
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  Our complete cloud suite of <span className="text-blue-600 font-medium">AI-powered</span> applications 
                  with embedded <span className="text-blue-600 font-medium">artificial intelligence</span> bring 
                  consistent processes and a single source of truth across the most important business 
                  functions—from enterprise resource planning, supply chain management, and human capital 
                  management to customer experience.
                </p>
                
                <p>
                  The applications help you improve your customer engagements, increase your business's 
                  agility, and react to change faster than ever before.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-5 py-2 text-sm font-medium"
              >
               chat with a chatbot
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 px-5 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Request a free demo
              </Button>
            </div>
          </div>

          {/* Right Content - Video/Image Area */}
          <div className="lg:col-span-2 relative">
            {/* Video Thumbnail */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
              {/* Placeholder for video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50">
                {/* Simulated dashboard interface */}
                <div className="absolute top-8 left-8 right-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    {/* Top bar with charts */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-green-100 rounded p-3">
                        <div className="w-full h-8 bg-green-400 rounded"></div>
                      </div>
                      <div className="bg-blue-100 rounded p-3">
                        <div className="w-full h-8 bg-blue-400 rounded"></div>
                      </div>
                      <div className="bg-purple-100 rounded p-3">
                        <div className="w-full h-8 bg-purple-400 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central figure */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-32 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full relative">
                    {/* Simple person silhouette */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full"></div>
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-white rounded-t-full"></div>
                  </div>
                </div>

                {/* Side charts */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <div className="bg-white rounded-lg shadow-lg p-4 w-32">
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-blue-300 rounded"></div>
                      <div className="w-3/4 h-2 bg-green-300 rounded"></div>
                      <div className="w-1/2 h-2 bg-purple-300 rounded"></div>
                      <div className="w-full h-12 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  className="bg-black/80 hover:bg-black text-white rounded-full w-16 h-16 p-0"
                  size="icon"
                >
                  <Play className="h-8 w-8 ml-1" fill="white" />
                </Button>
              </div>
            </div>

            {/* Video Caption */}
            <div className="mt-6 text-right">
              <p className="text-blue-600 font-medium">
                What is the AI Augments Fusion Cloud Applications Suite?
              </p>
              <p className="text-gray-600">
                (2:32)
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AiAugmentsHero;
