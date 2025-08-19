import { AppModule } from '../../types';
import { cloudInfrastructureMetadata } from './metadata';
import { launchCloudInfrastructure } from './launch-handler';
import { CloudInfrastructureLandingPage } from './landing-page';

export const cloudInfrastructureModule: AppModule = {
  metadata: cloudInfrastructureMetadata,
  accessRequirements: {
    requiresPlan: true, // Cloud infrastructure requires technical plans
    minimumPlanLevel: 2 // Pro level minimum for cloud access
  },
  landingPage: CloudInfrastructureLandingPage,
  launchHandler: launchCloudInfrastructure
};

export default cloudInfrastructureModule;
