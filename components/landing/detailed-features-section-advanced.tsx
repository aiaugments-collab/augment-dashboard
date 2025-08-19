"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface FeatureTab {
  id: string;
  title: string;
  isActive?: boolean;
}

interface FeatureDetail {
  title: string;
  subtitle?: string;
  description: string;
  subsections: {
    title: string;
    description: string;
  }[];
  actions?: {
    text: string;
    type: 'primary' | 'secondary' | 'link';
    onAction?: () => void;
  }[];
  mockupContent?: {
    type: 'dashboard' | 'table' | 'chart' | 'form';
    data?: any;
  };
}

interface AdvancedDetailedFeaturesSectionProps {
  appName: string;
  sectionTitle: string;
  sectionDescription: string;
  featureTabs: FeatureTab[];
  featureDetails: { [key: string]: FeatureDetail };
}

const AdvancedDetailedFeaturesSection: React.FC<AdvancedDetailedFeaturesSectionProps> = ({
  appName,
  sectionTitle,
  sectionDescription,
  featureTabs,
  featureDetails
}) => {
  const [activeTab, setActiveTab] = useState(featureTabs[0]?.id || '');
  const activeFeature = featureDetails[activeTab];

  const renderMockup = (mockupContent?: FeatureDetail['mockupContent']) => {
    if (!mockupContent) return null;

    switch (mockupContent.type) {
      case 'dashboard':
        return (
          <div className="bg-white rounded-lg shadow-xl p-6 h-full">
            {/* Dashboard Header */}
            <div className="bg-gray-800 text-white p-3 rounded-t-lg mb-4 flex items-center justify-between">
              <h4 className="font-semibold text-sm">AI Augments {appName}</h4>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-4">
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">$2.56M</div>
                  <div className="text-sm text-gray-600">Revenue</div>
                  <div className="w-full h-2 bg-blue-200 rounded mt-2">
                    <div className="w-3/4 h-2 bg-blue-500 rounded"></div>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">89%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                  <div className="w-full h-2 bg-green-200 rounded mt-2">
                    <div className="w-5/6 h-2 bg-green-500 rounded"></div>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">342</div>
                  <div className="text-sm text-gray-600">Active Projects</div>
                  <div className="w-full h-2 bg-purple-200 rounded mt-2">
                    <div className="w-2/3 h-2 bg-purple-500 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-gray-50 p-4 rounded-lg h-32">
                <div className="flex items-end space-x-2 h-full">
                  {[40, 65, 45, 80, 60, 90, 75, 85].map((height, i) => (
                    <div
                      key={i}
                      className="bg-blue-500 rounded-t"
                      style={{ height: `${height}%`, width: '12%' }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'table':
        return (
          <div className="bg-white rounded-lg shadow-xl p-6 h-full">
            <div className="bg-gray-800 text-white p-3 rounded-t-lg mb-4">
              <h4 className="font-semibold text-sm">Project Management</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "Website Redesign", status: "In Progress", progress: 75 },
                { name: "Mobile App", status: "Planning", progress: 25 },
                { name: "API Integration", status: "Completed", progress: 100 },
                { name: "Security Audit", status: "In Progress", progress: 60 }
              ].map((project, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{project.name}</div>
                    <div className="text-xs text-gray-600">{project.status}</div>
                  </div>
                  <div className="w-20">
                    <div className="w-full h-2 bg-gray-200 rounded">
                      <div 
                        className="h-2 bg-blue-500 rounded" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg shadow-xl p-6 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4"></div>
              <div className="text-gray-600">Feature Mockup</div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed max-w-4xl text-lg">
            {sectionDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Feature Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-2 sticky top-8">
              {featureTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gray-800 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <h3 className="font-medium">{tab.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Details */}
          <div className="lg:col-span-3">
            {activeFeature && (
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Feature Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {activeFeature.title}
                    </h3>
                    {activeFeature.subtitle && (
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        {activeFeature.subtitle}
                      </h4>
                    )}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {activeFeature.description}
                    </p>
                  </div>

                  {/* Subsections */}
                  <div className="space-y-6">
                    {activeFeature.subsections.map((subsection, index) => (
                      <div key={index}>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {subsection.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {subsection.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  {activeFeature.actions && (
                    <div className="flex flex-wrap gap-3 pt-4">
                      {activeFeature.actions.map((action, actionIndex) => (
                        <Button
                          key={actionIndex}
                          variant={
                            action.type === 'primary' ? 'default' :
                            action.type === 'secondary' ? 'outline' : 'link'
                          }
                          className={
                            action.type === 'primary' 
                              ? 'bg-gray-800 hover:bg-gray-700 text-white'
                              : action.type === 'secondary'
                              ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                              : 'text-blue-600 hover:text-blue-800 p-0 h-auto'
                          }
                          onClick={action.onAction}
                        >
                          {action.text}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Feature Mockup */}
                <div className="lg:order-last">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    {renderMockup(activeFeature.mockupContent)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedDetailedFeaturesSection;
