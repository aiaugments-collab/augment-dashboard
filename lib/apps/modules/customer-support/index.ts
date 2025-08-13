import React from 'react';
import { AppModule } from '../../types';
import { CustomerSupportLandingPage } from './landing-page';
import { customerSupportMetadata } from './metadata';

async function launchCustomerSupport(context: any) {
  try {
    const response = await fetch('/api/sso/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetApp: 'customer-support' })
    });

    const data = await response.json();
    
    if (data.success && data.redirectUrl) {
      return {
        success: true,
        redirectUrl: data.redirectUrl,
        message: 'Launching Customer Support Center...'
      };
    } else {
      return {
        success: false,
        error: data.error || 'Failed to launch Customer Support Center'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to launch Customer Support application'
    };
  }
}

export const customerSupportModule: AppModule = {
  metadata: customerSupportMetadata,
  accessRequirements: {
    requiresPlan: true,
    minimumPlanLevel: 1 // Starter plan required
  },
  landingPage: CustomerSupportLandingPage,
  launchHandler: launchCustomerSupport
};

export default customerSupportModule;
