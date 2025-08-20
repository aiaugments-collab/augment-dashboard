"use client";

import React from 'react';

interface CustomerLogo {
  name: string;
  logo: string;
  link?: string;
  alt: string;
}

interface CustomerLogosProps {
  title: string;
  description: string;
  logos: CustomerLogo[];
}

const CustomerLogos: React.FC<CustomerLogosProps> = ({
  title,
  description,
  logos
}) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </header>
        
        <p className="text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          {description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              {logo.link ? (
                <a 
                  href={logo.link}
                  className="block hover:opacity-75 transition-opacity"
                  title={logo.alt}
                >
                  <div className="h-12 flex items-center justify-center">
                    {logo.logo ? (
                      <img 
                        src={logo.logo} 
                        alt={logo.alt}
                        className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="bg-gray-200 rounded px-3 py-2 text-sm font-medium text-gray-600">
                        {logo.name}
                      </div>
                    )}
                  </div>
                </a>
              ) : (
                <div className="h-12 flex items-center justify-center">
                  {logo.logo ? (
                    <img 
                      src={logo.logo} 
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain filter grayscale"
                    />
                  ) : (
                    <div className="bg-gray-200 rounded px-3 py-2 text-sm font-medium text-gray-600">
                      {logo.name}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
