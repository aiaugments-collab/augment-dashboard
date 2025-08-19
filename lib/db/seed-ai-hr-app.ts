import { connectDB } from './connection';
import { App } from './schemas/app';

export async function seedAIHRApp() {
  await connectDB();

  // Check if AI HR app already exists
  const existingApp = await App.findOne({ slug: 'ai-hr' });
  if (existingApp) {
    console.log('✅ AI HR Manager app already exists');
    return existingApp;
  }

  // Create AI HR Manager app
  const aiHrApp = {
    name: 'AI HR Manager',
    slug: 'ai-hr',
    ssoUrl: 'http://localhost:3001/api/auth/sso',
    description: 'Complete AI-powered HR management system with candidate tracking, document management, and AI assistant',
    status: 'active' as const,
    icon: 'Users',
    color: 'bg-emerald-500',
    
    // Plan-related fields
    requiresPlan: true,
    minimumPlanLevel: 1, // Starter plan required for AI features
    category: 'hr',
    
    // Enhanced catalog fields
    shortDescription: 'AI-powered HR management with candidate tracking, resume parsing, and AI assistant',
    longDescription: `Transform your HR operations with our comprehensive AI-powered HR management platform. Built for modern HR teams, our platform helps you track candidates, manage documents, and streamline recruitment with intelligent automation.

**Key Capabilities:**
• **AI-Powered Candidate Scoring** - Automatically evaluate and rank candidates using advanced AI algorithms
• **Intelligent Resume Parsing** - Extract and structure candidate information from resumes with 95% accuracy
• **Comprehensive Candidate Management** - Track candidates through your entire hiring pipeline
• **Smart Document Management** - Upload, search, and organize HR documents with AI-powered categorization
• **AI HR Assistant** - Chat with AI about candidates, HR processes, and get intelligent recommendations
• **Advanced Analytics Dashboard** - Team performance metrics, hiring stats, and recruitment analytics
• **Automated Workflows** - Set up intelligent automation for candidate screening and interview scheduling
• **Team Collaboration** - Enable seamless collaboration between HR team members

Perfect for HR teams and recruiters looking to streamline their hiring process and make data-driven decisions. Get started in minutes with our intuitive interface and powerful AI features.

**Note:** This app runs on localhost:3001 and includes comprehensive SSO integration following the simple SSO guide.`,
    
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
    
    website: 'http://localhost:3001',
    supportUrl: 'http://localhost:3001/support',
    integrationStatus: 'ready' as const,
    popularity: 92,
    rating: 4.8,
    isPopular: true,
    isFeatured: true,
    launchInNewTab: true
  };

  const createdApp = await App.create(aiHrApp);
  console.log('✅ Created AI HR Manager app:', createdApp.name);
  
  return createdApp;
}
