"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  appName: string;
  ctaText?: string;
  onBrowseTours?: () => void;
  onReadDatasheet?: () => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  appName,
  ctaText,
  onBrowseTours,
  onReadDatasheet
}) => {
  return (
    <section className="bg-yellow-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {ctaText || `See how AI Augments ${appName} puts you in control.`}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2"
                onClick={onBrowseTours}
              >
                Browse product tours
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-2"
                onClick={onReadDatasheet}
              >
                Read the datasheet (PDF)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
