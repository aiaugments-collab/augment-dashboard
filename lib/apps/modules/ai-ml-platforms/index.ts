import { AppModule } from '../../types';
import { aiMlPlatformsMetadata } from './metadata';
import { launchAIMLPlatforms } from './launch-handler';
import { AIMLPlatformsLandingPage } from './landing-page';

export const aiMlPlatformsModule: AppModule = {
  metadata: aiMlPlatformsMetadata,
  accessRequirements: {
    requiresPlan: true,
    minimumPlanLevel: 2
  },
  landingPage: AIMLPlatformsLandingPage,
  launchHandler: launchAIMLPlatforms
};

export default aiMlPlatformsModule;
