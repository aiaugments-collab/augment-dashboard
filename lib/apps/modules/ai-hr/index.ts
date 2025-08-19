import { AppModule } from '../../types';
import { aiHrMetadata } from './metadata';
import { launchAIHR } from './launch-handler';
import { AIHRLandingPage } from './landing-page';

export const aiHrModule: AppModule = {
  metadata: aiHrMetadata,
  accessRequirements: {
    requiresPlan: true, // Requires a paid plan for AI features
    minimumPlanLevel: 1
  },
  landingPage: AIHRLandingPage,
  launchHandler: launchAIHR
};

export default aiHrModule;
