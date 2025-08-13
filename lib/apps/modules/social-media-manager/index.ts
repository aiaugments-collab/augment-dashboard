import React from 'react';
import { AppModule } from '../../types';
import { SocialMediaManagerLandingPage } from './landing-page';
import { socialMediaManagerMetadata } from './metadata';

async function launchSocialMediaManager(context: any) {
  try {
    const response = await fetch('/api/sso/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetApp: 'social-media-manager' })
    });

    const data = await response.json();
    
    if (data.success && data.redirectUrl) {
      return {
        success: true,
        redirectUrl: data.redirectUrl,
        message: 'Launching Social Media Manager...'
      };
    } else {
      return {
        success: false,
        error: data.error || 'Failed to launch Social Media Manager'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to launch Social Media Manager application'
    };
  }
}

export const socialMediaManagerModule: AppModule = {
  metadata: socialMediaManagerMetadata,
  accessRequirements: {
    requiresPlan: true,
    minimumPlanLevel: 1 // Starter plan required
  },
  landingPage: SocialMediaManagerLandingPage,
  launchHandler: launchSocialMediaManager
};

export default socialMediaManagerModule;
