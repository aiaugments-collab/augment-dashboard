import { AppModule } from '../../types';
import { databaseSolutionsMetadata } from './metadata';
import { launchDatabaseSolutions } from './launch-handler';
import { DatabaseSolutionsLandingPage } from './landing-page';

export const databaseSolutionsModule: AppModule = {
  metadata: databaseSolutionsMetadata,
  accessRequirements: {
    requiresPlan: true, // Database management requires technical plans
    minimumPlanLevel: 1 // Starter level minimum for database tools
  },
  landingPage: DatabaseSolutionsLandingPage,
  launchHandler: launchDatabaseSolutions
};

export default databaseSolutionsModule;
