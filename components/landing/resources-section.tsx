"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface ResourceItem {
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

interface ResourcesSectionProps {
  appName: string;
  resources?: ResourceItem[];
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  appName,
  resources = []
}) => {
  const defaultResources: ResourceItem[] = [
    {
      title: "Learn what's new in the latest release",
      description: `Review Cloud update readiness material to learn what's new in your AI Augments ${appName} service and plan for quarterly updates.`,
      actionText: "Get the latest innovations",
      onAction: () => console.log("Get latest innovations")
    },
    {
      title: "Access our documentation library",
      description: `AI Augments Help Center provides detailed information about our products and services with targeted solutions, getting started guides, and content for advanced use cases.`,
      actionText: `Learn more ${appName}`,
      onAction: () => console.log("Learn more")
    }
  ];

  const displayResources = resources.length > 0 ? resources : defaultResources;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner */}
        <div className="bg-gray-100 rounded-lg p-6 mb-16 text-center">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              5 questions AI Augments can answer for COOs in your industry.
            </h3>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">
              Read the brief (PDF)
            </Button>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-12">Resources</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Sidebar */}
          <div>
            <div className="space-y-4">
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <h3 className="font-semibold">Cloud update readiness</h3>
              </div>
              <div className="p-4 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <h3 className="font-medium">Documentation</h3>
              </div>
              <div className="p-4 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <h3 className="font-medium">Customer community</h3>
              </div>
              <div className="p-4 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <h3 className="font-medium">Cloud learning</h3>
              </div>
              <div className="p-4 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <h3 className="font-medium">Support and services</h3>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-12">
            {displayResources.map((resource, index) => (
              <div key={index} className="flex gap-6">
                {/* Image placeholder */}
                <div className="w-48 h-32 bg-gradient-to-br from-green-200 to-teal-300 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <div className="text-white font-semibold text-sm text-center">Resource Image</div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  {resource.actionText && (
                    <Button 
                      variant="link" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium"
                      onClick={resource.onAction}
                    >
                      {resource.actionText}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
