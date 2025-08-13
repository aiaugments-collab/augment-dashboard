import React from 'react';
import { AppModule } from '../../types';
import { DigitalSignatureLandingPage } from './landing-page';
import { digitalSignatureMetadata } from './metadata';

async function launchDigitalSignature(context: any) {
  try {
    const response = await fetch('/api/sso/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetApp: 'digital-signature' })
    });

    const data = await response.json();
    
    if (data.success && data.redirectUrl) {
      return {
        success: true,
        redirectUrl: data.redirectUrl,
        message: 'Launching Digital Signature Studio...'
      };
    } else {
      return {
        success: false,
        error: data.error || 'Failed to launch Digital Signature Studio'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to launch Digital Signature application'
    };
  }
}

export const digitalSignatureModule: AppModule = {
  metadata: digitalSignatureMetadata,
  accessRequirements: {
    requiresPlan: true,
    minimumPlanLevel: 1 // Starter plan required
  },
  landingPage: DigitalSignatureLandingPage,
  launchHandler: launchDigitalSignature
};

export default digitalSignatureModule;
