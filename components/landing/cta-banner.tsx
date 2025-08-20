"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title: string;
  primaryButton: {
    text: string;
    onClick?: () => void;
  };
  secondaryButton: {
    text: string;
    onClick?: () => void;
  };
}

const CTABanner: React.FC<CTABannerProps> = ({
  title,
  primaryButton,
  secondaryButton
}) => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg text-gray-900 font-medium max-w-2xl">
            {title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 text-sm font-medium"
              onClick={primaryButton.onClick}
            >
              {primaryButton.text}
            </Button>
            <Button
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 text-sm font-medium"
              onClick={secondaryButton.onClick}
            >
              {secondaryButton.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
