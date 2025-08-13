import { AppMetadata } from '../../types';

export const socialMediaManagerMetadata: AppMetadata = {
  name: 'Social Media Manager',
  slug: 'social-media-manager',
  description: 'Automated social media posting and content management across all platforms',
  shortDescription: 'Schedule, automate, and manage your social media presence across all major platforms',
  longDescription: `Streamline your social media strategy with our comprehensive automation and management platform. Schedule posts, engage with audiences, and analyze performance across all your social media channels from one central dashboard.

**Social Media Features:**
• **Multi-Platform Publishing** - Post to Facebook, Twitter, Instagram, LinkedIn, and more
• **Content Scheduling** - Plan and schedule posts weeks or months in advance
• **Auto-Posting** - Automated posting based on optimal engagement times
• **Content Calendar** - Visual calendar for planning your social media strategy
• **Hashtag Research** - Find trending hashtags and optimize your reach
• **Social Listening** - Monitor mentions, keywords, and brand sentiment
• **Engagement Management** - Respond to comments and messages from one inbox
• **Team Collaboration** - Multiple users with role-based access controls

**Analytics & Optimization:**
• **Performance Analytics** - Detailed insights on reach, engagement, and growth
• **Best Time Posting** - AI-powered optimal posting time recommendations
• **Competitor Analysis** - Track and compare competitor social media performance
• **ROI Tracking** - Measure social media impact on business goals
• **Custom Reports** - White-label reports for clients and stakeholders

Perfect for businesses, agencies, and social media managers who want to maximize their social media presence and automate repetitive tasks.`,
  
  icon: 'Share2',
  color: 'bg-indigo-500',
  category: 'marketing',
  
  screenshots: [
    '/images/apps/social/dashboard.png',
    '/images/apps/social/scheduler.png',
    '/images/apps/social/analytics.png',
    '/images/apps/social/content.png'
  ],
  
  features: [
    'Multi-Platform Publishing',
    'Advanced Post Scheduling',
    'Automated Content Distribution',
    'Social Media Calendar',
    'Hashtag Research & Optimization',
    'Social Listening & Monitoring',
    'Unified Inbox Management',
    'Team Collaboration Tools',
    'Performance Analytics',
    'Competitor Analysis'
  ],
  
  tags: [
    'Social Media',
    'Automation',
    'Scheduling',
    'Content Management',
    'Analytics',
    'Marketing',
    'Engagement',
    'Publishing'
  ],
  
  website: 'https://github.com/backink/socialautopost',
  supportUrl: 'https://help.example.com/social',
  integrationStatus: 'ready',
  popularity: 91,
  rating: 4.6,
  isPopular: true,
  isFeatured: true,
  launchInNewTab: true,
  status: 'active'
};
