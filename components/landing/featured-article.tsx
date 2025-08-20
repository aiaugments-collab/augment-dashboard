"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface FeaturedArticleProps {
  title: string;
  quote: string;
  source: string;
  image?: string;
  imageAlt?: string;
  actionText: string;
  actionLink: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  quote,
  source,
  image,
  imageAlt,
  actionText,
  actionLink
}) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {title}
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Quote Content */}
          <div className="space-y-6">
            <blockquote className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                "{quote}"
              </p>
              <footer>
                <h4 className="text-xl font-bold text-gray-900">
                  {source}
                </h4>
              </footer>
            </blockquote>
            
            <div className="pt-4">
              <Button
                asChild
                className="bg-gray-800 hover:bg-gray-700 text-white"
              >
                <a 
                  href={actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {actionText}
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            {image ? (
              <img 
                src={image} 
                alt={imageAlt || "Featured article"}
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            ) : (
              <div className="w-full max-w-md h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-400 rounded"></div>
                  </div>
                  <p className="text-sm">Featured Article Image</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
