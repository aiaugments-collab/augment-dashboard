import { AppMetadata } from '../../types';

export const securityIdentityMetadata: AppMetadata = {
  name: 'Security & Identity Management',
  slug: 'security-identity',
  description: 'Identity management and security solutions for enterprise access control and compliance',
  shortDescription: 'Identity management and security solutions',
  longDescription: 'Comprehensive security and identity management platform with SSO, multi-factor authentication, access governance, and compliance management for enterprise-grade security.',
  icon: 'Shield',
  color: '#EF4444', // Red for security
  category: 'security',
  features: [
    'Single Sign-On (SSO)',
    'Multi-factor authentication',
    'Identity governance',
    'Access management',
    'Compliance reporting',
    'Privileged access management',
    'Security analytics',
    'Zero-trust architecture'
  ],
  tags: ['security', 'identity', 'sso', 'compliance', 'access'],
  integrationStatus: 'ready',
  popularity: 82,
  isPopular: true,
  status: 'active'
};
