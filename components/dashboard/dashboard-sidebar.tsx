'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useStackAuth } from '@/hooks/use-stack-auth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { 
  Home, 
  TrendingUp, 
  CreditCard, 
  Users, 
  Mail,
  Calendar,
  FileText,
  BarChart3,
  Settings,
  MessageSquare,
  Building2,
  ShoppingCart,
  Phone,
  Code2,
  Database,
  Briefcase,
  Globe,
  Shield,
  Bot,
  ChevronDown,
  ChevronRight,
  Star,
  Plus,
  CircleIcon,
  LogOut,
  Bell,
  HelpCircle,
  FileSignature,
  Zap,
  Share2
} from 'lucide-react';
import { SubscriptionWidget } from './subscription-widget';
import { Card } from '@/components/ui/card';

export function DashboardSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['favorites', 'ai-agents']);
  const [apps, setApps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, dbUser } = useStackAuth();
  const pathname = usePathname();

  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    try {
      const response = await fetch('/api/apps/registry');
      if (response.ok) {
        const data = await response.json();
        setApps(data.apps || []);
      }
    } catch (error) {
      console.error('Error fetching apps:', error);
    }
    setLoading(false);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Map app icons to lucide icons
  const getAppIcon = (iconName?: string) => {
    const iconMap: { [key: string]: any } = {
      'TrendingUp': TrendingUp,
      'Users': Users,
      'FileSignature': FileSignature,
      'Zap': Zap,
      'MessageSquare': MessageSquare,
      'Share2': Share2,
      'Calendar': Calendar,
      'Building2': Building2,
      'CreditCard': CreditCard,
      'Mail': Mail,
      'Phone': Phone,
      'FileText': FileText,
      'BarChart3': BarChart3,
      'ShoppingCart': ShoppingCart,
      'Database': Database,
      'Code2': Code2,
      'Shield': Shield,
      'Globe': Globe,
      'Briefcase': Briefcase
    };
    return iconMap[iconName || 'Building2'] || Building2;
  };

  type NavigationItem = {
    name: string;
    icon: any;
    href: string;
    badge?: string;
    status?: string;
  };

  type NavigationSection = {
    id: string;
    title: string;
    expandable?: boolean;
    items: NavigationItem[];
  };

  // Get featured/popular apps for favorites section
  const featuredApps = apps
    .filter(app => app.isFeatured || app.isPopular)
    .slice(0, 6)
    .map(app => ({
      name: app.name,
      icon: getAppIcon(app.icon),
      href: `/app/${app.slug}`,
      badge: app.hasAccess ? undefined : 'Pro',
      status: app.hasAccess ? 'active' : 'locked'
    }));

  // Get all accessible apps for quick access
  const accessibleApps = apps
    .filter(app => app.hasAccess && app.status === 'active')
    .slice(0, 8)
    .map(app => ({
      name: app.name,
      icon: getAppIcon(app.icon),
      href: `/app/${app.slug}`,
      status: 'active'
    }));

  const navigationSections: NavigationSection[] = [
    {
      id: 'main',
      title: 'Main',
      items: [
        { name: 'Dashboard', icon: Home, href: '/dashboard' },
        { name: 'App Discovery', icon: Star, href: '/apps/discover' },
        { name: 'Business Platform', icon: Building2, href: '/dashboard/erpnext-credentials' },
        { name: 'Manage Plans', icon: CreditCard, href: '/pricing' },
        { name: 'Settings', icon: Settings, href: '/dashboard/settings' }
      ]
    },
    ...(featuredApps.length > 0 ? [{
      id: 'favorites',
      title: 'Featured Apps',
      expandable: true,
      items: featuredApps
    }] : []),
    {
      id: 'ai-agents',
      title: 'AI Agents',
      expandable: true,
      items: [
        { name: 'Executive AI', icon: Bot, href: '/ai/executive', status: 'active' },
        { name: 'Marketing AI', icon: Bot, href: '/ai/marketing', status: 'active' },
        { name: 'Sales AI', icon: Bot, href: '/ai/sales', status: 'active' },
        { name: 'Support AI', icon: Bot, href: '/ai/support', status: 'active' },
        { name: 'Finance AI', icon: Bot, href: '/ai/finance', status: 'active' },
        { name: 'HR AI', icon: Bot, href: '/ai/hr', status: 'paused' }
      ]
    },
    ...(accessibleApps.length > 0 ? [{
      id: 'quick-access',
      title: 'Quick Access',
      expandable: true,
      items: accessibleApps
    }] : [])
  ];

  return (
    <div className="w-64 bg-background border-r border-border h-screen flex flex-col flex-shrink-0">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <CircleIcon className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-semibold text-foreground">AI AUGMENTS</span>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1">
                <Avatar className="h-7 w-7">
                  <AvatarImage 
                    src={(user?.profileImageUrl && user.profileImageUrl.trim()) || 
                         (dbUser?.picture && dbUser.picture.trim()) || 
                         undefined} 
                    alt={user?.displayName || dbUser?.name || 'User'} 
                  />
                  <AvatarFallback className="text-xs bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                    {user?.displayName?.charAt(0)?.toUpperCase() || 
                     user?.primaryEmail?.charAt(0)?.toUpperCase() || 
                     dbUser?.name?.charAt(0)?.toUpperCase() || 
                     'U'}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a href="/dashboard/account-settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="/auth/logout">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {loading ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="space-y-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-full bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="space-y-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-full bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {navigationSections.map((section) => (
          <div key={section.id}>
            {section.expandable ? (
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between p-2 h-auto text-xs font-medium text-muted-foreground uppercase tracking-wider"
                  onClick={() => toggleSection(section.id)}
                >
                  {section.title}
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="h-3 w-3" />
                  ) : (
                    <ChevronRight className="h-3 w-3" />
                  )}
                </Button>
                
                {expandedSections.includes(section.id) && (
                  <div className="ml-2 mt-1 space-y-1">
                    {section.items.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Button
                          key={item.name}
                          variant={isActive ? "default" : "ghost"}
                          className="w-full justify-start text-sm h-8 px-2"
                          asChild
                        >
                          <a href={item.href}>
                            <IconComponent className="mr-2 h-4 w-4" />
                            <span className="truncate flex-1 text-left">{item.name}</span>
                            {'badge' in item && item.badge && (
                              <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                                item.badge === 'AI' 
                                  ? 'bg-primary/10 text-primary'
                                  : 'bg-muted text-muted-foreground'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                            {'status' in item && item.status && (
                              <div className={`w-2 h-2 rounded-full ${
                                item.status === 'active' 
                                  ? 'bg-green-500 animate-pulse' 
                                  : 'bg-yellow-500'
                              }`}></div>
                            )}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider p-2">
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Button
                        key={item.name}
                        variant={isActive ? 'default' : 'ghost'}
                        className="w-full justify-start text-sm h-8 px-2"
                        asChild
                      >
                        <a href={item.href}>
                          <IconComponent className="mr-2 h-4 w-4" />
                          <span className="truncate">{item.name}</span>
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
            ))}
          </>
        )}
      </div>
        
      {/* Subscription Widget */}
      <div className="p-4 border-t mt-auto">
        <SubscriptionWidget />
      </div>
    </div>
  );
}