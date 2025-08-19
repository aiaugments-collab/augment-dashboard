"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
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
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [apps, setApps] = useState<any[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    
    setApps(appList);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    <header className="bg-gray-900 text-white">
      {/* Top Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-orange-400">
                AIAUGMENTS
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
                             {/* Applications Dropdown */}
               <div className="relative" ref={dropdownRef}>
                 <button
                   onClick={() => setIsProductsOpen(!isProductsOpen)}
                   className="flex items-center space-x-1 px-3 py-2 text-sm font-medium hover:text-gray-300 transition-colors"
                 >
                   <span>Applications</span>
                   <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                 </button>
                 
                 {isProductsOpen && (
                   <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 shadow-2xl z-50 rounded-lg transform transition-all duration-200 scale-100 opacity-100">
                     <div className="p-4">
                       <div className="space-y-2 max-h-96 overflow-y-auto">
                         {apps.map((app) => (
                           <Link 
                             key={app.slug}
                             href={`/app/${app.slug}`}
                             className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors duration-150 group"
                             onClick={() => setIsProductsOpen(false)}
                           >
                             <div className={`p-2 ${app.color || 'bg-blue-500'} rounded mr-3 flex-shrink-0`}>
                               <app.IconComponent className="h-4 w-4 text-white" />
                             </div>
                             <div className="flex-1 min-w-0">
                               <div className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors">
                                 {app.name}
                               </div>
                               <div className="text-xs text-gray-400 truncate">
                                 {app.shortDescription || app.description}
                               </div>
                             </div>
                           </Link>
                         ))}
                         
                         {apps.length === 0 && (
                           <div className="text-center text-gray-400 py-4">
                             Loading applications...
                           </div>
                         )}
                         
                         <div className="border-t border-gray-700 pt-2 mt-2">
                           <a 
                             href="#applications" 
                             className="block p-3 rounded-lg hover:bg-gray-800 transition-colors duration-150 text-center"
                             onClick={() => setIsProductsOpen(false)}
                           >
                             <div className="text-sm font-medium text-orange-400">
                               View All Applications
                             </div>
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 )}
               </div>

              {/* Solutions */}
              <a href="#solutions" className="px-3 py-2 text-sm font-medium hover:text-gray-300 transition-colors">
                Solutions
              </a>

              {/* Pricing */}
              <a href="#pricing" className="px-3 py-2 text-sm font-medium hover:text-gray-300 transition-colors">
                Pricing
              </a>

              {/* Resources */}
              <a href="#resources" className="px-3 py-2 text-sm font-medium hover:text-gray-300 transition-colors">
                Resources
              </a>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <Button variant="ghost" size="icon" className="hidden lg:flex">
                <Search className="h-5 w-5" />
              </Button>

              {/* Country Flag */}
              <div className="hidden lg:flex items-center">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE4IiBmaWxsPSIjQjIyMjM0Ii8+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSI2IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB5PSIxMiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjYiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="US Flag" className="w-6 h-4" />
              </div>

              {/* Account */}
              <Button variant="ghost" className="hidden lg:flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="text-sm">View Accounts</span>
              </Button>

              {/* Contact Sales */}
              <Button className="hidden lg:flex bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Contact Sales
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost" 
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
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
               
               {/* CTA Button */}
               <div className="mt-8">
                 <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-150">
                   <Phone className="h-4 w-4 mr-2" />
                   Contact Sales
                 </Button>
               </div>
             </div>
           </div>
         </div>
       )}
    </header>
  );
};

export default AiAugmentsHeader;
