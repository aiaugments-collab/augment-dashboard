import { AppMetadata } from '../../types';

export const humanResourcesMetadata: AppMetadata = {
  name: 'Human Resources Management',
  slug: 'human-resources',
  description: 'Complete HR management system for employee lifecycle and processes',
  shortDescription: 'Streamline HR operations with employee management, payroll, and workflow automation',
  longDescription: `Transform your HR operations with our comprehensive human resources management platform. Built for modern HR teams to handle the complete employee lifecycle efficiently.

**Core HR Features:**
• **Employee Management** - Complete employee profiles, records, and documentation
• **Payroll Processing** - Automated payroll calculations and payment processing
• **Leave Management** - Request, approve, and track employee time off
• **Performance Reviews** - Regular performance evaluations and goal tracking
• **Recruitment & Onboarding** - Streamlined hiring process and new employee setup
• **Time & Attendance** - Clock in/out tracking and timesheet management
• **Benefits Administration** - Manage employee benefits and enrollment
• **Document Management** - Store and organize HR documents securely

**Advanced Capabilities:**
• **Workflow Automation** - Automate HR processes and approvals
• **Compliance Tracking** - Stay compliant with labor laws and regulations
• **Analytics & Reporting** - HR metrics, turnover analysis, and custom reports
• **Self-Service Portal** - Employee portal for personal information and requests

Perfect for companies looking to modernize their HR operations and improve employee experience.`,
  
  icon: 'Users',
  color: 'bg-pink-500',
  category: 'hr',
  
  screenshots: [
    '/images/apps/hr/dashboard.png',
    '/images/apps/hr/employees.png',
    '/images/apps/hr/payroll.png',
    '/images/apps/hr/performance.png'
  ],
  
  features: [
    'Employee Information Management',
    'Payroll Processing & Tax Calculations',
    'Leave & Attendance Tracking',
    'Performance Management System',
    'Recruitment & Onboarding',
    'Benefits Administration',
    'Document Management',
    'HR Analytics & Reporting',
    'Employee Self-Service Portal',
    'Compliance Management'
  ],
  
  tags: [
    'HR',
    'Human Resources',
    'Payroll',
    'Employee Management',
    'Performance',
    'Recruitment',
    'Benefits',
    'Compliance'
  ],
  
  website: 'https://github.com/backink/HR-processes',
  supportUrl: 'https://help.example.com/hr',
  integrationStatus: 'ready',
  popularity: 82,
  rating: 4.4,
  isPopular: true,
  isFeatured: false,
  launchInNewTab: true,
  status: 'active'
};
