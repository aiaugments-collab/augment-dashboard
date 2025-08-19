import { AppMetadata } from '../../types';

export const aiHrMetadata: AppMetadata = {
  name: 'AI HR Manager',
  slug: 'ai-hr',
  description: 'Complete AI-powered HR management system with candidate tracking and document management',
  shortDescription: 'AI-powered HR management with candidate tracking, resume parsing, and AI assistant',
  longDescription: `Transform your HR operations with our comprehensive AI-powered HR management platform. Built for modern HR teams, our platform helps you track candidates, manage documents, and streamline recruitment with intelligent automation.

**Key Capabilities:**
• **Candidate Management** - Resume parsing, scoring, and comprehensive candidate tracking
• **Document Management** - Upload, search, and organize HR documents with AI-powered insights
• **AI Assistant** - Chat with AI about candidates, HR processes, and get intelligent recommendations
• **Analytics Dashboard** - Team performance metrics, hiring stats, and recruitment analytics
• **Resume Parsing** - Automatically extract and structure candidate information from resumes
• **Candidate Scoring** - AI-powered candidate evaluation and ranking system
• **Team Settings** - User management, team configuration, and workflow customization
• **Mobile Access** - Full-featured mobile interface for HR on the go

Perfect for HR teams and recruiters looking to streamline their hiring process and make data-driven decisions. Get started in minutes with our intuitive interface and powerful AI features.`,
  
  icon: 'Users',
  color: 'bg-emerald-500',
  category: 'hr',
  
  screenshots: [
    '/images/apps/ai-hr/dashboard.png',
    '/images/apps/ai-hr/candidates.png',
    '/images/apps/ai-hr/documents.png',
    '/images/apps/ai-hr/assistant.png'
  ],
  
  features: [
    'AI-Powered Candidate Management',
    'Automated Resume Parsing',
    'Intelligent Candidate Scoring',
    'Document Management System',
    'AI HR Assistant',
    'Analytics & Reporting Dashboard',
    'Team Collaboration Tools',
    'Mobile-Responsive Interface',
    'Custom Workflow Automation',
    'Integration with Popular HR Tools'
  ],
  
  tags: [
    'AI',
    'HR',
    'Recruiting',
    'Candidates',
    'Resume Parsing',
    'Document Management',
    'Analytics',
    'Automation'
  ],
  
  website: process.env.AI_HR_APP_URL || 'http://localhost:3001',
  supportUrl: `${process.env.AI_HR_APP_URL || 'http://localhost:3001'}/support`,
  integrationStatus: 'ready',
  popularity: 92,
  rating: 4.8,
  isPopular: true,
  isFeatured: true,
  launchInNewTab: true,
  status: 'active'
};
