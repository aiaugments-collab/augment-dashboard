"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useUser } from "@stackframe/stack";
import { 
  ChevronDown, 
  Search, 
  User,
  Phone,
  Menu,
  X,
  TrendingUp,
  Users,
  MessageSquare,
  FileSignature,
  Zap,
  Share2,
  Calendar,
  Building,
  DollarSign,
  Cog,
  Package,
  Briefcase,
  BarChart3
} from "lucide-react";
import { getEnabledApps } from '@/lib/apps/registry';
import { initializeAppRegistry } from '@/lib/apps/initialize-registry';

// Icon mapping
const iconMap: Record<string, any> = {
  TrendingUp,
  Users,
  MessageSquare,
  FileSignature,
  Zap,
  Share2,
  Calendar,
  Building,
  DollarSign,
  Cog,
  Package,
  Briefcase,
  BarChart3
};

const AiAugmentsHeader = () => {
  const user = useUser();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [apps, setApps] = useState<any[]>([]);
  const [categorizedApps, setCategorizedApps] = useState<Record<string, any[]>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  // Initialize apps from registry
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initializeAppRegistry();
    }
    
    const enabledApps = getEnabledApps();
    const appList = Object.entries(enabledApps).map(([appSlug, entry]) => {
      const metadata = entry.module.metadata || {};
      return {
        ...metadata,
        slug: appSlug, // Override with the actual slug
        IconComponent: iconMap[metadata.icon as keyof typeof iconMap] || TrendingUp
      };
    });
    
    // Group apps by category
    const grouped = appList.reduce((acc, app) => {
      const category = app.category || 'other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(app);
      return acc;
    }, {} as Record<string, any[]>);
    
    setApps(appList);
    setCategorizedApps(grouped);
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsApplicationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Category display names mapping
  const categoryDisplayNames: Record<string, string> = {
    'sales': 'Sales & CRM',
    'hr': 'Human Resources',
    'communication': 'Communications',
    'automation': 'Marketing & Automation',
    'support': 'Customer Support',
    'productivity': 'Productivity & Scheduling',
    'healthcare': 'Healthcare & EHR',
    'enterprise': 'Enterprise Solutions',
    'database': 'Database & Storage',
    'infrastructure': 'Cloud Infrastructure',
    'analytics': 'Analytics & BI',
    'security': 'Security & Identity',
    'ai': 'AI & Machine Learning',
    'other': 'Other Applications'
  };

  const productCategories = [
    {
      title: "AI Infrastructure",
      items: [
        "AI Overview",
        "Machine Learning & Analytics", 
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Billing and Cost Management"
      ]
    },
    {
      title: "Compute & Processing",
      items: [
        "Database Services",
        "Developer Services", 
        "Distributed Cloud and MultiCloud",
        "Integration",
        "Migration and Disaster Recovery Services"
      ]
    },
    {
      title: "Governance and Administration", 
      items: [
        "Identity and Security",
        "Integration",
        "Migration and Disaster Recovery Services"
      ]
    },
    {
      title: "Networking and Connectivity",
      items: [
        "Observability and Management",
        "Storage"
      ]
    }
  ];

  const applicationCategories = [
    {
      title: "AI Business Applications",
      items: [
        "Applications Overview",
        "Enterprise Resource Planning (AI-ERP)",
        "– Financial Management",
        "– Procurement", 
        "– Project Management",
        "– Risk Management and Compliance",
        "– Enterprise Performance Management"
      ]
    },
    {
      title: "Supply Chain & Manufacturing (AI-SCM)",
      items: [
        "– Supply Chain Planning",
        "– Inventory Management",
        "– Manufacturing",
        "– Maintenance",
        "– Product Lifecycle Management",
        "– More SCM applications"
      ]
    },
    {
      title: "Human Capital Management (AI-HCM)",
      items: [
        "– Human Resources",
        "– Talent Management", 
        "– Workforce Management",
        "– Payroll",
        "Fusion Data Intelligence Platform",
        "NetSuite"
      ]
    },
    {
      title: "Customer Experience (AI-CX)",
      items: [
        "– Marketing",
        "– Sales",
        "– Service",
        "AI Marketplace"
      ]
    }
  ];

  return (
    <header className="bg-[#3a3632] text-white sticky top-0 z-50">
      {/* Top Navigation */}
      <nav className="border-b-4 border-[#3a3632]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[50px]">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center text-white no-underline">
                <div className="text-2xl font-bold text-orange-400">
                  AIAUGMENTS
                </div>
              </a>
            </div>

                        {/* Desktop Navigation - Hidden as Oracle shows minimal nav */}
            <div className="hidden lg:flex items-center space-x-0">
              {/* Navigation items would go here but Oracle keeps it minimal */}
            </div>

            {/* Right Side Actions - Oracle Style */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="hidden lg:flex items-center justify-center w-6 h-6 text-white hover:text-gray-300" aria-label="Open Search Field">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15,15l6,6M17,10a7,7,0,1,1-7-7A7,7,0,0,1,17,10Z"></path>
                </svg>
              </button>

              {/* Country Flag */}
              <div className="hidden lg:flex items-center">
                <a className="flex items-center" href="#" aria-label="Country">
                  <img className="w-6 h-4" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE4IiBmaWxsPSIjQjIyMjM0Ii8+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSI2IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB5PSIxMiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjYiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="United States selected" />
                </a>
              </div>

              {/* Conditional Authentication Links */}
              {user ? (
                /* Dashboard - Show when user is logged in */
                <Link href="/dashboard" className="hidden lg:flex items-center space-x-1 text-white hover:text-gray-300" aria-label="Go to Dashboard">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  <span className="text-sm">Dashboard</span>
                </Link>
              ) : (
                /* Sign In - Show when user is not logged in */
                <div className="hidden lg:flex">
                  <Link href="/sign-in" className="text-white hover:text-gray-300 text-sm">Sign In</Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex items-center justify-center w-6 h-6 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16,4 L2,4" className="p1"></path>
                  <path d="M2,12 L22,12" className="p2"></path>
                  <path d="M2,20 L16,20" className="p3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Tabs - Oracle Style */}
      <nav className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 overflow-x-auto">
            <div className="flex items-center py-3 border-b-2 border-gray-900">
              <a href="#" className="text-sm font-medium text-gray-900">Overview</a>
            </div>
            <div className="flex items-center py-3 group relative" ref={productsDropdownRef}>
              <button 
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Products Dropdown */}
              {isProductsOpen && (
                <div className="fixed top-[98px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-3 gap-8">
                      {Object.entries(categorizedApps).map(([category, categoryApps]) => (
                        <div key={category} className="space-y-3">
                          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                            {categoryDisplayNames[category] || category}
                          </h3>
                          <ul className="space-y-2">
                            {categoryApps.map((app) => (
                              <li key={app.slug}>
                                <Link
                                  href={`/app/${app.slug}`}
                                  className="flex items-center space-x-3 text-sm text-gray-600 hover:text-gray-900 py-1 group"
                                  onClick={() => setIsProductsOpen(false)}
                                >
                                  <app.IconComponent className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                                  <span>{app.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    {/* View All Products Link */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Link
                        href="/dashboard"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        View all products
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center py-3 group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                <span>Industries</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center py-3 group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                <span>Compare</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center py-3 group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                <span>Migrate to Cloud</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center py-3 group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                <span>What's New</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center py-3">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Business Insights</a>
            </div>
          </div>
        </div>
      </nav>

      

             {/* Mobile Menu Side Drawer */}
       {isMobileMenuOpen && (
         <div className="lg:hidden fixed inset-0 z-50">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
             onClick={() => setIsMobileMenuOpen(false)}
           ></div>
           
           {/* Side Drawer */}
           <div className={`absolute top-0 right-0 h-full w-80 bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
             isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
           }`}>
             <div className="p-6">
               {/* Header */}
               <div className="flex items-center justify-between mb-8">
                 <div className="text-xl font-bold text-orange-400">AIAUGMENTS</div>
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="text-white hover:bg-gray-700 transition-colors duration-150"
                 >
                   <X className="h-6 w-6" />
                 </Button>
               </div>
               
               {/* Navigation */}
               <nav className="space-y-4">
                 <a 
                   href="#applications" 
                   className="block text-lg font-medium text-white hover:text-orange-400 transition-colors duration-150 py-3 border-b border-gray-700"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   Applications
                 </a>
                 <a 
                   href="#solutions" 
                   className="block text-lg font-medium text-white hover:text-orange-400 transition-colors duration-150 py-3 border-b border-gray-700"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   Solutions
                 </a>
                 <a 
                   href="#pricing" 
                   className="block text-lg font-medium text-white hover:text-orange-400 transition-colors duration-150 py-3 border-b border-gray-700"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   Pricing
                 </a>
                 <a 
                   href="#resources" 
                   className="block text-lg font-medium text-white hover:text-orange-400 transition-colors duration-150 py-3 border-b border-gray-700"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   Resources
                 </a>
               </nav>
               
               {/* Action Buttons */}
               <div className="mt-8 space-y-3">
                 {user ? (
                   /* Dashboard Button - Show when user is logged in */
                   <Link href="/dashboard" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                     <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-150">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                         <rect x="3" y="3" width="7" height="7"></rect>
                         <rect x="14" y="3" width="7" height="7"></rect>
                         <rect x="14" y="14" width="7" height="7"></rect>
                         <rect x="3" y="14" width="7" height="7"></rect>
                       </svg>
                       Dashboard
                     </Button>
                   </Link>
                 ) : (
                   /* Sign In Button - Show when user is not logged in */
                   <Link href="/sign-in" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                     <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-150">
                       Sign In
                     </Button>
                   </Link>
                 )}
               </div>
             </div>
           </div>
         </div>
       )}
    </header>
  );
};

export default AiAugmentsHeader;
