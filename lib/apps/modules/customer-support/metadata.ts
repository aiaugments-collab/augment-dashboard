import { AppMetadata } from '../../types';

export const customerSupportMetadata: AppMetadata = {
  name: 'Customer Support Center',
  slug: 'customer-support',
  description: 'Complete customer support platform with ticketing, live chat, and knowledge base',
  shortDescription: 'Deliver exceptional customer service with ticketing system, live chat, and self-service tools',
  longDescription: `Elevate your customer service with our comprehensive support platform. Manage customer inquiries efficiently, provide instant support through multiple channels, and empower customers with self-service resources.

**Support Channel Features:**
• **Ticketing System** - Organize and track customer inquiries with priority management
• **Live Chat Support** - Real-time chat widget for instant customer assistance
• **Email Integration** - Convert emails to tickets automatically
• **Knowledge Base** - Create and maintain searchable help articles
• **Community Forums** - Customer-to-customer support community
• **Video Support** - Screen sharing and video calls for complex issues
• **Mobile Support** - Handle support requests on mobile devices
• **Multi-language Support** - Provide support in multiple languages

**Advanced Support Tools:**
• **Automated Routing** - Smart ticket assignment based on skills and availability
• **SLA Management** - Set and track service level agreements
• **Customer Satisfaction** - CSAT surveys and feedback collection
• **Performance Analytics** - Support team metrics and customer insights
• **Integration Hub** - Connect with CRM, billing, and other business tools

Perfect for companies that want to provide world-class customer support and build strong customer relationships.`,
  
  icon: 'MessageSquare',
  color: 'bg-teal-500',
  category: 'support',
  
  screenshots: [
    '/images/apps/support/dashboard.png',
    '/images/apps/support/tickets.png',
    '/images/apps/support/chat.png',
    '/images/apps/support/knowledge.png'
  ],
  
  features: [
    'Advanced Ticketing System',
    'Live Chat & Messaging',
    'Knowledge Base Management',
    'Email-to-Ticket Conversion',
    'Community Forum Platform',
    'SLA & Priority Management',
    'Customer Satisfaction Surveys',
    'Multi-channel Support',
    'Team Performance Analytics',
    'Third-party Integrations'
  ],
  
  tags: [
    'Customer Support',
    'Help Desk',
    'Ticketing',
    'Live Chat',
    'Knowledge Base',
    'Customer Service',
    'SLA',
    'Analytics'
  ],
  
  website: 'https://github.com/backink/customer-support',
  supportUrl: 'https://help.example.com/support',
  integrationStatus: 'ready',
  popularity: 79,
  rating: 4.4,
  isPopular: true,
  isFeatured: false,
  launchInNewTab: true,
  status: 'active'
};
