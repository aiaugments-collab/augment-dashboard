import React from 'react';
import { AppModule } from '../../types';
import { MarketingAutomationLandingPage } from './landing-page';
import { marketingAutomationMetadata } from './metadata';

async function launchMarketingAutomation(context: any) {
  try {
    const response = await fetch('/api/sso/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetApp: 'marketing-automation' })
    });

    const data = await response.json();
    
    if (data.success && data.redirectUrl) {
      return {
        success: true,
        redirectUrl: data.redirectUrl,
        message: 'Launching Marketing Automation Hub...'
      };
    } else {
      return {
        success: false,
        error: data.error || 'Failed to launch Marketing Automation Hub'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to launch Marketing Automation application'
    };
  }
}

export const marketingAutomationModule: AppModule = {
  metadata: marketingAutomationMetadata,
  accessRequirements: {
    requiresPlan: true,
    minimumPlanLevel: 2 // Professional plan required
  },
  landingPage: MarketingAutomationLandingPage,
  launchHandler: launchMarketingAutomation
};

export default marketingAutomationModule;
