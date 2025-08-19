import { AppModule } from '../../types';
import { communicationsMetadata } from './metadata';
import { launchCommunications } from './launch-handler';
import { CommunicationsLandingPage } from './landing-page';

export const communicationsModule: AppModule = {
  metadata: communicationsMetadata,
  accessRequirements: {
    requiresPlan: false,
    minimumPlanLevel: 0
  },
  landingPage: CommunicationsLandingPage,
  launchHandler: launchCommunications
};

export default communicationsModule;
