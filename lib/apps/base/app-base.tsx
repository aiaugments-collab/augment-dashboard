"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ExternalLink, ArrowUpCircle, Clock, CheckCircle, Star, Globe, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AppModuleProps } from '../types';
import { AppLayout } from './app-layout';

interface BaseAppLandingProps extends AppModuleProps {
  metadata: {
    name: string;
    slug: string;
    description?: string;
    longDescription?: string;
    screenshots?: string[];
    features?: string[];
    website?: string;
    supportUrl?: string;
    integrationStatus: 'ready' | 'beta' | 'coming_soon';
    rating?: number;
    isPopular?: boolean;
    isFeatured?: boolean;
  };
  customContent?: React.ReactNode;
  customActions?: React.ReactNode;
}

export function BaseAppLanding({
  metadata,
  user,
  hasAccess,
  accessReason,
  upgradeUrl,
  requiredPlanLevel,
  userPlanLevel,
  customContent,
  customActions
}: BaseAppLandingProps) {
  const router = useRouter();

  const handleLaunch = () => {
    router.push(`/app/${metadata.slug}/launch`);
  };
  
  const getIntegrationStatusBadge = () => {
    switch (metadata.integrationStatus) {
      case 'ready':
        return (
          <Badge variant="secondary" className="bg-green-50 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Ready
          </Badge>
        );
      case 'beta':
        return (
          <Badge variant="secondary" className="bg-yellow-50 text-yellow-700">
            <Clock className="w-3 h-3 mr-1" />
            Beta
          </Badge>
        );
      case 'coming_soon':
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700">
            <Clock className="w-3 h-3 mr-1" />
            Coming Soon
          </Badge>
        );
      default:
        return null;
    }
  };

  const getAccessContent = () => {
    if (!hasAccess) {
      return (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <ArrowUpCircle className="h-5 w-5 text-orange-600" />
              <div>
                <p className="font-medium text-orange-900">Upgrade Required</p>
                <p className="text-sm text-orange-700">
                  {accessReason === 'upgrade_required' && requiredPlanLevel
                    ? `This app requires a ${getPlanName(requiredPlanLevel)} plan or higher.`
                    : 'This app requires a paid subscription to access.'
                  }
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link href={upgradeUrl || '/pricing'}>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Upgrade Now
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-900">Access Granted</p>
                <p className="text-sm text-green-700">
                  You have access to this application
                </p>
              </div>
            </div>
            {hasAccess && (
              <Button onClick={handleLaunch} className="bg-green-600 hover:bg-green-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Launch App
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  const getPlanName = (level: number) => {
    switch (level) {
      case 1: return 'Starter';
      case 2: return 'Professional';
      case 3: return 'Enterprise';
      default: return 'Paid';
    }
  };

  return (
    <AppLayout 
      title={metadata.name}
      description={metadata.description}
      customActions={customActions}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <h1 className="text-4xl font-bold text-gray-900">{metadata.name}</h1>
            {getIntegrationStatusBadge()}
            {metadata.isPopular && (
              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                <Star className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
            {metadata.isFeatured && (
              <Badge variant="secondary" className="bg-purple-50 text-purple-700">
                Featured
              </Badge>
            )}
          </div>
          
          {metadata.description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {metadata.description}
            </p>
          )}

          {metadata.rating && (
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(metadata.rating!)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {metadata.rating}/5
              </span>
            </div>
          )}
        </div>

        {/* Access Status */}
        {getAccessContent()}

        {/* Custom Content */}
        {customContent}

        {/* Description */}
        {metadata.longDescription && (
          <Card>
            <CardHeader>
              <CardTitle>About This App</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {metadata.longDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Features */}
        {metadata.features && metadata.features.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {metadata.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Screenshots */}
        {metadata.screenshots && metadata.screenshots.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Screenshots</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {metadata.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border">
                    <img
                      src={screenshot}
                      alt={`${metadata.name} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* External Links */}
        <div className="flex justify-center space-x-4">
          {metadata.website && (
            <Button variant="outline" asChild>
              <a href={metadata.website} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-2" />
                Official Website
              </a>
            </Button>
          )}
          {metadata.supportUrl && (
            <Button variant="outline" asChild>
              <a href={metadata.supportUrl} target="_blank" rel="noopener noreferrer">
                <HelpCircle className="h-4 w-4 mr-2" />
                Support & Help
              </a>
            </Button>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
