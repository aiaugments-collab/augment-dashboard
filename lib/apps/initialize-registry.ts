import { appRegistry } from './registry';

// Import all app modules (based on actual GitHub repositories)
import { crmModule } from './modules/crm';
import { humanResourcesModule } from './modules/human-resources';
import { digitalSignatureModule } from './modules/digital-signature';
import { marketingAutomationModule } from './modules/marketing-automation';
import { customerSupportModule } from './modules/customer-support';
import { socialMediaManagerModule } from './modules/social-media-manager';
import { calendarSchedulerModule } from './modules/calendar-scheduler';
import { aiHrModule } from './modules/ai-hr';

// Import Enterprise Solution Areas modules
import { healthcareEhrModule } from './modules/healthcare-ehr';
import { erpHcmModule } from './modules/erp-hcm';
import { databaseSolutionsModule } from './modules/database-solutions';
import { cloudInfrastructureModule } from './modules/cloud-infrastructure';
import { analyticsBiModule } from './modules/analytics-bi';
import { securityIdentityModule } from './modules/security-identity';
import { aiMlPlatformsModule } from './modules/ai-ml-platforms';
import { communicationsModule } from './modules/communications';

// Initialize the app registry with all modules
export function initializeAppRegistry() {
  // Register all modules based on actual GitHub repos
  appRegistry.registerApp('crm', crmModule);
  appRegistry.registerApp('human-resources', humanResourcesModule);
  appRegistry.registerApp('digital-signature', digitalSignatureModule);
  appRegistry.registerApp('marketing-automation', marketingAutomationModule);
  appRegistry.registerApp('customer-support', customerSupportModule);
  appRegistry.registerApp('social-media-manager', socialMediaManagerModule);
  appRegistry.registerApp('calendar-scheduler', calendarSchedulerModule);
  appRegistry.registerApp('ai-hr', aiHrModule);
  
  // Register Enterprise Solution Areas
  appRegistry.registerApp('healthcare-ehr', healthcareEhrModule);
  appRegistry.registerApp('erp-hcm', erpHcmModule);
  appRegistry.registerApp('database-solutions', databaseSolutionsModule);
  appRegistry.registerApp('cloud-infrastructure', cloudInfrastructureModule);
  appRegistry.registerApp('analytics-bi', analyticsBiModule);
  appRegistry.registerApp('security-identity', securityIdentityModule);
  appRegistry.registerApp('ai-ml-platforms', aiMlPlatformsModule);
  appRegistry.registerApp('communications', communicationsModule);
  
  // TODO: Add all-in-one business suite when ready
  // appRegistry.registerApp('erpnext-business-suite', erpnextModule);

  console.log('✅ App registry initialized with', Object.keys(appRegistry.getAllApps()).length, 'apps');
}

// Call this during app startup
if (typeof window === 'undefined') {
  // Only initialize on server side
  initializeAppRegistry();
}
