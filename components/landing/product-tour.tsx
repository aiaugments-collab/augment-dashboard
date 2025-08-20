"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TourSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface ProductTourProps {
  appName: string;
  slides: TourSlide[];
  onRequestDemo?: () => void;
}

const ProductTour: React.FC<ProductTourProps> = ({
  appName,
  slides,
  onRequestDemo
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!slides.length) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Product Tour—{appName}
          </h2>
        </header>

        <div className="relative">
          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Visual Mockup */}
            <div className="lg:col-span-2">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                {/* CSS-based mockup based on slide content */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                  {currentSlide === 0 && (
                    // Dashboard mockup
                    <div className="h-full flex flex-col">
                      <div className="bg-gray-800 text-white p-3 rounded-t-lg mb-4 flex items-center justify-between">
                        <h4 className="font-semibold text-sm">{appName} Dashboard</h4>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1 grid grid-cols-3 gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <div className="w-full h-6 bg-blue-400 rounded mb-2"></div>
                          <div className="text-xs text-gray-600">Performance</div>
                        </div>
                        <div className="bg-green-100 p-3 rounded-lg">
                          <div className="w-full h-6 bg-green-400 rounded mb-2"></div>
                          <div className="text-xs text-gray-600">Analytics</div>
                        </div>
                        <div className="bg-purple-100 p-3 rounded-lg">
                          <div className="w-full h-6 bg-purple-400 rounded mb-2"></div>
                          <div className="text-xs text-gray-600">Reports</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {currentSlide === 1 && (
                    // Management interface mockup
                    <div className="h-full flex flex-col">
                      <div className="bg-gray-800 text-white p-3 rounded-t-lg mb-4">
                        <h4 className="font-semibold text-sm">Management Interface</h4>
                      </div>
                      <div className="flex-1 space-y-3">
                        {[1, 2, 3, 4].map((item) => (
                          <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded border-l-4 border-blue-400">
                            <div className="flex-1">
                              <div className="w-32 h-3 bg-gray-300 rounded mb-1"></div>
                              <div className="w-24 h-2 bg-gray-200 rounded"></div>
                            </div>
                            <div className="w-16 h-6 bg-green-400 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {currentSlide >= 2 && (
                    // Analytics/matching mockup
                    <div className="h-full flex flex-col">
                      <div className="bg-gray-800 text-white p-3 rounded-t-lg mb-4">
                        <h4 className="font-semibold text-sm">Smart Analytics</h4>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white p-3 rounded shadow-sm border">
                              <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                                <div>
                                  <div className="w-20 h-2 bg-gray-300 rounded mb-1"></div>
                                  <div className="w-16 h-2 bg-gray-200 rounded"></div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                          <div className="w-full h-32 bg-gradient-to-t from-blue-200 to-blue-100 rounded flex items-end justify-center">
                            <div className="text-xs text-gray-600 mb-2">Chart View</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="absolute top-4 right-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/90 hover:bg-white text-gray-700 text-xs"
                  >
                    Enlarge +
                  </Button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-1">
              {/* Navigation */}
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="p-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous slide</span>
                </Button>
                
                <div className="text-sm text-gray-600">
                  {currentSlide + 1}<span className="text-gray-400">/</span>{slides.length}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className="p-2"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next slide</span>
                </Button>
              </div>

              {/* Slide Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {currentSlideData.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {currentSlideData.description}
                </p>

                {/* Demo Button - Only on last slide */}
                {currentSlide === slides.length - 1 && onRequestDemo && (
                  <div className="pt-4">
                    <Button
                      onClick={onRequestDemo}
                      className="bg-gray-800 hover:bg-gray-700 text-white"
                    >
                      Request a demo
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="text-gray-600 hover:text-gray-900"
            >
              Previous
            </Button>
            
            <div className="flex space-x-2 px-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                    index === currentSlide
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="text-gray-600 hover:text-gray-900"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTour;
