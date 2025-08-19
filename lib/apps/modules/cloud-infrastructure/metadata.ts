import { AppMetadata } from '../../types';

export const cloudInfrastructureMetadata: AppMetadata = {
  name: 'Cloud Infrastructure',
  slug: 'cloud-infrastructure',
  description: 'Complete cloud platform and infrastructure services for scalable enterprise solutions',
  shortDescription: 'Cloud platform and infrastructure services',
  longDescription: 'Comprehensive cloud infrastructure platform providing compute, storage, networking, and managed services across multiple cloud providers with enterprise-grade security and automation.',
  icon: 'Cloud',
  color: '#F59E0B', // Amber for cloud
  category: 'infrastructure',
  features: [
    'Multi-cloud deployment and management',
    'Auto-scaling compute resources',
    'Managed Kubernetes services',
    'Cloud storage and CDN',
    'Network security and VPC',
    'Serverless computing platform',
    'Infrastructure as Code (IaC)',
    'Cloud monitoring and logging'
  ],
  tags: ['cloud', 'infrastructure', 'kubernetes', 'serverless', 'devops'],
  integrationStatus: 'ready',
  popularity: 88,
  isPopular: true,
  status: 'active'
};
