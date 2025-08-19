import { AppModule } from '../../types';
import { erpHcmMetadata } from './metadata';
import { launchERPHCM } from './launch-handler';
import { ERPHCMLandingPage } from './landing-page';

export const erpHcmModule: AppModule = {
  metadata: erpHcmMetadata,
  accessRequirements: {
    requiresPlan: true, // Enterprise ERP requires paid plans
    minimumPlanLevel: 2 // Pro level minimum for ERP access
  },
  landingPage: ERPHCMLandingPage,
  launchHandler: launchERPHCM
};

export default erpHcmModule;
