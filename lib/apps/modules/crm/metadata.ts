import { AppMetadata } from '../../types';

export const crmMetadata: AppMetadata = {
  name: 'CRM & Sales',
  slug: 'crm',
  description: 'Manage customer relationships and sales pipeline',
  shortDescription: 'Complete customer relationship management with sales pipeline tracking',
  longDescription: `Transform your sales process with our comprehensive CRM platform. Built for modern sales teams, our CRM helps you track leads, manage opportunities, and close more deals.

**Key Capabilities:**
• **Lead Management** - Capture and nurture leads from multiple channels
• **Sales Pipeline** - Visual pipeline management with customizable stages  
• **Contact Management** - Centralized customer database with interaction history
• **Deal Tracking** - Track opportunities from initial contact to close
• **Sales Analytics** - Performance dashboards and sales forecasting
• **Email Integration** - Connect your email for seamless communication
• **Mobile Access** - Full-featured mobile app for sales on the go
• **Automation** - Automated follow-ups and lead scoring

Perfect for businesses of all sizes looking to streamline their sales process and increase revenue. Get started in minutes with our intuitive interface and powerful automation features.`,
  
  icon: 'TrendingUp',
  color: 'bg-blue-500',
  category: 'sales',
  
  screenshots: [
    '/images/apps/crm/dashboard.png',
    '/images/apps/crm/pipeline.png',
    '/images/apps/crm/contacts.png',
    '/images/apps/crm/analytics.png'
  ],
  
  features: [
    'Lead & Contact Management',
    'Sales Pipeline Tracking',
    'Deal & Opportunity Management',
    'Email Integration & Templates',
    'Sales Analytics & Reporting',
    'Mobile App Access',
    'Automated Follow-ups',
    'Custom Fields & Views',
    'Team Collaboration',
    'Integration with Popular Tools'
  ],
  
  tags: [
    'CRM',
    'Sales',
    'Leads',
    'Pipeline',
    'Customer Management',
    'Analytics',
    'Mobile'
  ],
  
  website: 'https://example.com/crm',
  supportUrl: 'https://help.example.com/crm',
  integrationStatus: 'ready',
  popularity: 85,
  rating: 4.6,
  isPopular: true,
  isFeatured: false,
  launchInNewTab: true,
  status: 'active'
};
