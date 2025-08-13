import { AppModule } from '../../types';
import { crmMetadata } from './metadata';
import { launchCRM } from './launch-handler';
import { CRMLandingPage } from './landing-page';

export const crmModule: AppModule = {
  metadata: crmMetadata,
  accessRequirements: {
    requiresPlan: false, // Free app
    minimumPlanLevel: 0
  },
  landingPage: CRMLandingPage,
  launchHandler: launchCRM
};

export default crmModule;
