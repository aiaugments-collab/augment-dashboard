'use client';

import Link from 'next/link';
import { useStackAuth } from '@/hooks/use-stack-auth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleIcon, Menu, X, LayoutDashboard, LogOut, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';


export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useStackAuth();

  const navigation = [
    { 
      name: 'Applications', 
      href: '#applications',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Customer Experience', href: '#cx-apps', description: 'CRM, Sales, Customer Support' },
        { name: 'Human Capital Management', href: '#hcm-apps', description: 'HR, Recruitment, Payroll' },
        { name: 'Financial Management', href: '#finance-apps', description: 'Accounting, Billing, Finance' },
        { name: 'Marketing & Automation', href: '#marketing-apps', description: 'Campaigns, Social Media, Analytics' },
        { name: 'Operations', href: '#operations-apps', description: 'Project Management, Inventory' }
      ]
    },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Oracle Style */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">Business Suite</span>
            </Link>
          </div>

          {/* Desktop Navigation - Oracle Style */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 p-4">
                    <div className="grid gap-3">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex flex-col space-y-1 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="text-sm font-medium text-gray-900">
                            {dropdownItem.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {dropdownItem.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA Buttons - Oracle Style */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" className="text-sm text-gray-700 hover:text-red-600">
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage 
                          src={user.profileImageUrl || undefined} 
                          alt={user.displayName || 'User'} 
                        />
                        <AvatarFallback className="bg-red-600 text-white">
                          {user.displayName?.charAt(0)?.toUpperCase() || 
                           user.primaryEmail?.charAt(0)?.toUpperCase() || 
                           'U'}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        {user.displayName && (
                          <p className="font-medium">{user.displayName}</p>
                        )}
                        {user.primaryEmail && (
                          <p className="w-[200px] truncate text-sm text-gray-500">
                            {user.primaryEmail}
                          </p>
                        )}
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="text-sm text-gray-700 hover:text-red-600">
                    Sign In
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="text-sm bg-red-600 hover:bg-red-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-background">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                {user ? (
                  <>
                    <Link href="/dashboard" className="block">
                      <Button variant="ghost" className="w-full justify-start">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button onClick={signOut} className="w-full justify-start" variant="outline">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block">
                      <Button variant="ghost" className="w-full justify-start">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/login" className="block">
                      <Button className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}