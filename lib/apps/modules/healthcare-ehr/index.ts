import { AppModule } from '../../types';
import { healthcareEhrMetadata } from './metadata';
import { launchHealthcareEHR } from './launch-handler';
import { HealthcareEHRLandingPage } from './landing-page';

export const healthcareEhrModule: AppModule = {
  metadata: healthcareEhrMetadata,
  accessRequirements: {
    requiresPlan: true, // Healthcare systems require enterprise plans
    minimumPlanLevel: 2 // Pro level minimum for healthcare compliance
  },
  landingPage: HealthcareEHRLandingPage,
  launchHandler: launchHealthcareEHR
};

export default healthcareEhrModule;
