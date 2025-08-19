import { AppModule } from '../../types';
import { securityIdentityMetadata } from './metadata';
import { launchSecurityIdentity } from './launch-handler';
import { SecurityIdentityLandingPage } from './landing-page';

export const securityIdentityModule: AppModule = {
  metadata: securityIdentityMetadata,
  accessRequirements: {
    requiresPlan: true,
    minimumPlanLevel: 2
  },
  landingPage: SecurityIdentityLandingPage,
  launchHandler: launchSecurityIdentity
};

export default securityIdentityModule;
