"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface AppHeroProps {
  title: string;
  subtitle?: string;
  description: string[];
  videoTitle: string;
  videoDuration: string;
  dashboardColor: {
    primary: string;
    secondary: string;
    accent: string;
  };
  dashboardMetrics: {
    metric1: { label: string; color: string };
    metric2: { label: string; color: string };
    metric3: { label: string; color: string };
  };
  centralFigureColor: string;
  bottomGradient: string;
  featureShowcases: {
    feature1: { label: string; color: string };
    feature2: { label: string; color: string };
    feature3: { label: string; color: string };
    feature4: { label: string; color: string };
  };
  onChatWithBot?: () => void;
  onRequestDemo?: () => void;
}

const AiAugmentsAppHero: React.FC<AppHeroProps> = ({
  title,
  subtitle = "Designed for change. Built for you.",
  description,
  videoTitle,
  videoDuration,
  dashboardColor,
  dashboardMetrics,
  centralFigureColor,
  bottomGradient,
  featureShowcases,
  onChatWithBot,
  onRequestDemo
}) => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 items-start py-12">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {title}
              </h1>
              <div className="w-16 h-1 bg-yellow-400 mt-4"></div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-gray-900">
                {subtitle}
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                {description.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-5 py-2 text-sm font-medium"
                onClick={onChatWithBot}
              >
                Chat with a chatbot
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 px-5 py-2 text-sm font-medium hover:bg-gray-50"
                onClick={onRequestDemo}
              >
                Request a free demo
              </Button>
            </div>
          </div>

          {/* Right Content - Video/Image Area */}
          <div className="lg:col-span-2 relative">
            {/* Video Thumbnail */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
              {/* Placeholder dashboard */}
              <div className={`absolute inset-0 ${dashboardColor.primary}`}>
                {/* Simulated dashboard interface */}
                <div className="absolute top-8 left-8 right-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className={`${dashboardMetrics.metric1.color} rounded p-3`}>
                        <div className={`w-full h-8 ${dashboardMetrics.metric1.color.replace('bg-', 'bg-').replace('-100', '-400')} rounded`}></div>
                        <div className={`text-xs ${dashboardMetrics.metric1.color.replace('bg-', 'text-').replace('-100', '-600')} mt-1`}>
                          {dashboardMetrics.metric1.label}
                        </div>
                      </div>
                      <div className={`${dashboardMetrics.metric2.color} rounded p-3`}>
                        <div className={`w-full h-8 ${dashboardMetrics.metric2.color.replace('bg-', 'bg-').replace('-100', '-400')} rounded`}></div>
                        <div className={`text-xs ${dashboardMetrics.metric2.color.replace('bg-', 'text-').replace('-100', '-600')} mt-1`}>
                          {dashboardMetrics.metric2.label}
                        </div>
                      </div>
                      <div className={`${dashboardMetrics.metric3.color} rounded p-3`}>
                        <div className={`w-full h-8 ${dashboardMetrics.metric3.color.replace('bg-', 'bg-').replace('-100', '-400')} rounded`}></div>
                        <div className={`text-xs ${dashboardMetrics.metric3.color.replace('bg-', 'text-').replace('-100', '-600')} mt-1`}>
                          {dashboardMetrics.metric3.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central figure */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className={`w-24 h-32 ${centralFigureColor} rounded-full relative`}>
                    {/* Person silhouette */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full"></div>
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-white rounded-t-full"></div>
                  </div>
                </div>

                {/* Side workflow */}
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
                {videoTitle}
              </p>
              <p className="text-gray-600">
                ({videoDuration})
              </p>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default AiAugmentsAppHero;
