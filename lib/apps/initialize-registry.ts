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
  
  // TODO: Add all-in-one business suite when ready
  // appRegistry.registerApp('erpnext-business-suite', erpnextModule);

  console.log('✅ App registry initialized with', Object.keys(appRegistry.getAllApps()).length, 'apps');
}

// Call this during app startup
if (typeof window === 'undefined') {
  // Only initialize on server side
  initializeAppRegistry();
}
