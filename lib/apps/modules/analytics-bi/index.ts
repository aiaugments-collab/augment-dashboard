import { AppModule } from '../../types';
import { analyticsBiMetadata } from './metadata';
import { launchAnalyticsBI } from './launch-handler';
import { AnalyticsBILandingPage } from './landing-page';

export const analyticsBiModule: AppModule = {
  metadata: analyticsBiMetadata,
  accessRequirements: {
    requiresPlan: true,
    minimumPlanLevel: 1
  },
  landingPage: AnalyticsBILandingPage,
  launchHandler: launchAnalyticsBI
};

export default analyticsBiModule;
