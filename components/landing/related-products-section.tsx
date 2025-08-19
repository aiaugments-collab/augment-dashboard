"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface RelatedProduct {
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
  onAction?: () => void;
}

interface RelatedProductsSectionProps {
  relatedProducts: RelatedProduct[];
}

const RelatedProductsSection: React.FC<RelatedProductsSectionProps> = ({
  relatedProducts
}) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Related products</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product, index) => (
            <Card key={index} className="bg-gray-100 border-0 overflow-hidden">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {product.subtitle}
                  </h4>
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <Button 
                  className="bg-gray-800 hover:bg-gray-700 text-white w-full"
                  onClick={product.onAction}
                >
                  {product.actionText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;
