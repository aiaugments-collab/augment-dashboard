"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface ContentCard {
  title: string;
  description: string;
  actionText: string;
  actionType: 'primary' | 'secondary';
  onAction?: () => void;
  image?: string;
}

interface AppContentCardsProps {
  appName: string;
  cards: ContentCard[];
}

const AppContentCards: React.FC<AppContentCardsProps> = ({
  appName,
  cards
}) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white">
              {/* Card Image */}
              <div className="mb-6">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  {card.image ? (
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                      <div className="text-white text-2xl font-bold">
                        {appName.charAt(0)}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  {card.description}
                </p>

                <div>
                  <Button
                    variant="outline"
                    className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 text-sm font-medium rounded"
                    onClick={card.onAction}
                  >
                    {card.actionText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppContentCards;
