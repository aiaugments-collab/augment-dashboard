import React from 'react';
import { AppModule } from '../../types';
import { CalendarSchedulerLandingPage } from './landing-page';
import { calendarSchedulerMetadata } from './metadata';

async function launchCalendarScheduler(context: any) {
  try {
    const response = await fetch('/api/sso/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetApp: 'calendar-scheduler' })
    });

    const data = await response.json();
    
    if (data.success && data.redirectUrl) {
      return {
        success: true,
        redirectUrl: data.redirectUrl,
        message: 'Launching Calendar & Scheduling Pro...'
      };
    } else {
      return {
        success: false,
        error: data.error || 'Failed to launch Calendar & Scheduling Pro'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to launch Calendar & Scheduling application'
    };
  }
}

export const calendarSchedulerModule: AppModule = {
  metadata: calendarSchedulerMetadata,
  accessRequirements: {
    requiresPlan: false, // Free app
    minimumPlanLevel: 0
  },
  landingPage: CalendarSchedulerLandingPage,
  launchHandler: launchCalendarScheduler
};

export default calendarSchedulerModule;
