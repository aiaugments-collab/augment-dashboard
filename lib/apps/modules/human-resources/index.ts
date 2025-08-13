import React from 'react';
import { AppModule } from '../../types';
import { HumanResourcesLandingPage } from './landing-page';
import { humanResourcesMetadata } from './metadata';

async function launchHumanResources(context: any) {
  try {
    const response = await fetch('/api/sso/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetApp: 'human-resources' })
    });

    const data = await response.json();
    
    if (data.success && data.redirectUrl) {
      return {
        success: true,
        redirectUrl: data.redirectUrl,
        message: 'Launching HR Management...'
      };
    } else {
      return {
        success: false,
        error: data.error || 'Failed to launch HR Management'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to launch HR Management application'
    };
  }
}

export const humanResourcesModule: AppModule = {
  metadata: humanResourcesMetadata,
  accessRequirements: {
    requiresPlan: true,
    minimumPlanLevel: 1 // Starter plan required
  },
  landingPage: HumanResourcesLandingPage,
  launchHandler: launchHumanResources
};

export default humanResourcesModule;
