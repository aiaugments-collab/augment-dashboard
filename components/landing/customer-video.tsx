"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface CustomerVideoProps {
  title: string;
  videoId: string;
  thumbnail: string;
  duration: string;
  onPlayVideo?: (videoId: string) => void;
}

const CustomerVideo: React.FC<CustomerVideoProps> = ({
  title,
  videoId,
  thumbnail,
  duration,
  onPlayVideo
}) => {
  const handlePlayClick = () => {
    if (onPlayVideo) {
      onPlayVideo(videoId);
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Mockup */}
          <div className="relative">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              {/* CSS-based video thumbnail mockup */}
              <div className="w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {/* Simulated video content */}
                <div className="absolute inset-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg border border-white/10">
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <div className="w-24 h-2 bg-white/60 rounded mb-1"></div>
                      <div className="w-16 h-1 bg-white/40 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Simulated charts/data */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-8 bg-green-400/80 rounded"></div>
                      <div className="h-6 bg-blue-400/80 rounded"></div>
                      <div className="h-10 bg-purple-400/80 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayClick}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-lg"
                  aria-label={`Play ${title} video`}
                >
                  <Play className="h-8 w-8 text-gray-800 ml-1" fill="currentColor" />
                </button>
              </div>
              
              {/* Duration Badge */}
              {duration && (
                <div className="absolute bottom-4 right-4 bg-black/75 text-white px-2 py-1 rounded text-sm">
                  {duration}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              {title}
            </h3>
            
            <div className="space-y-4">
              <Button
                onClick={handlePlayClick}
                variant="outline"
                className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white inline-flex items-center gap-2"
              >
                <Play className="h-4 w-4" fill="currentColor" />
                Watch the video ({duration})
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerVideo;
