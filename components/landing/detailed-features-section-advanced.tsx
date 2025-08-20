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
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-full">
            {/* Dashboard Header */}
            <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
              <h4 className="font-semibold text-sm">AI Augments {appName}</h4>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 space-y-4">
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                  <div className="text-xl font-bold text-blue-600">$2.56M</div>
                  <div className="text-xs text-gray-600">Revenue</div>
                  <div className="w-full h-2 bg-blue-200 rounded mt-2">
                    <div className="w-3/4 h-2 bg-blue-500 rounded"></div>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <div className="text-xl font-bold text-green-600">89%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                  <div className="w-full h-2 bg-green-200 rounded mt-2">
                    <div className="w-5/6 h-2 bg-green-500 rounded"></div>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded border border-purple-200">
                  <div className="text-xl font-bold text-purple-600">342</div>
                  <div className="text-xs text-gray-600">Active Projects</div>
                  <div className="w-full h-2 bg-purple-200 rounded mt-2">
                    <div className="w-2/3 h-2 bg-purple-500 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-gray-50 p-3 rounded border border-gray-200 h-24">
                <div className="flex items-end justify-center space-x-1 h-full">
                  {[40, 65, 45, 80, 60, 90, 75, 85].map((height, i) => (
                    <div
                      key={i}
                      className="bg-blue-500 rounded-t"
                      style={{ height: `${height}%`, width: '10%' }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'table':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-full">
            <div className="bg-gray-800 text-white px-4 py-3">
              <h4 className="font-semibold text-sm">Project Management</h4>
            </div>
            <div className="p-4 space-y-3">
              {[
                { name: "Website Redesign", status: "In Progress", progress: 75, color: "blue" },
                { name: "Mobile App", status: "Planning", progress: 25, color: "yellow" },
                { name: "API Integration", status: "Completed", progress: 100, color: "green" },
                { name: "Security Audit", status: "In Progress", progress: 60, color: "purple" }
              ].map((project, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="flex-1">
                    <div className="font-medium text-sm text-gray-800">{project.name}</div>
                    <div className={`text-xs mt-1 ${
                      project.status === 'Completed' ? 'text-green-600' :
                      project.status === 'In Progress' ? 'text-blue-600' :
                      'text-yellow-600'
                    }`}>{project.status}</div>
                  </div>
                  <div className="w-20">
                    <div className="w-full h-2 bg-gray-200 rounded">
                      <div 
                        className={`h-2 rounded ${
                          project.color === 'green' ? 'bg-green-500' :
                          project.color === 'blue' ? 'bg-blue-500' :
                          project.color === 'yellow' ? 'bg-yellow-500' :
                          'bg-purple-500'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1 text-right">{project.progress}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-6 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
              <div className="text-gray-600">Feature Mockup</div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Oracle Style */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl text-lg">
            {sectionDescription}
          </p>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mb-8">
          <select 
            value={activeTab} 
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full p-4 text-sm font-medium bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {featureTabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.title}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-4 gap-0">
            {/* Left Sidebar - Oracle Style Navigation */}
            <div className="lg:col-span-1 bg-gray-50 border-r border-gray-200 hidden lg:block">
              <div className="p-6">
                <div className="space-y-2">
                  {featureTabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`w-full text-left px-4 py-3 rounded transition-all duration-200 text-sm font-medium ${
                        activeTab === tab.id
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Oracle Style Layout */}
            <div className="lg:col-span-3 bg-gray-50">
              {activeFeature && (
                <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                  {/* Feature Content */}
                  <div className="p-8 bg-white">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {activeFeature.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {activeFeature.description}
                        </p>
                      </div>

                      {/* Actions */}
                      {activeFeature.actions && (
                        <div className="flex flex-wrap gap-3 mb-6">
                          {activeFeature.actions.map((action, actionIndex) => (
                            <Button
                              key={actionIndex}
                              variant={action.type === 'primary' ? 'default' : 'outline'}
                              className={
                                action.type === 'primary' 
                                  ? 'bg-gray-800 hover:bg-gray-700 text-white px-6 py-2'
                                  : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-2'
                              }
                              onClick={action.onAction}
                            >
                              {action.text}
                            </Button>
                          ))}
                        </div>
                      )}

                      {/* Features List */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Features</h4>
                        <ul className="space-y-2">
                          {activeFeature.subsections.map((subsection, index) => (
                            <li key={index} className="text-gray-700">
                              {subsection.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Feature Mockup */}
                  <div className="bg-gray-50 flex items-center justify-center p-8">
                    <div className="w-full max-w-md">
                      {renderMockup(activeFeature.mockupContent)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedDetailedFeaturesSection;
