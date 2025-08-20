"use client";

import React from 'react';

interface UseCase {
  title: string;
  description: string;
  actionText: string;
  actionLink?: string;
  onAction?: () => void;
}

interface UseCasesProps {
  title: string;
  useCases: UseCase[];
}

const UseCases: React.FC<UseCasesProps> = ({
  title,
  useCases
}) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                {useCase.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {useCase.description}
              </p>
              
              <div className="pt-2">
                {useCase.actionLink ? (
                  <a 
                    href={useCase.actionLink}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {useCase.actionText}
                  </a>
                ) : (
                  <button 
                    onClick={useCase.onAction}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline"
                  >
                    {useCase.actionText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
