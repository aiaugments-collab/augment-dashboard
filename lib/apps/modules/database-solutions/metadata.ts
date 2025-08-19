import { AppMetadata } from '../../types';

export const databaseSolutionsMetadata: AppMetadata = {
  name: 'Database Management',
  slug: 'database-solutions',
  description: 'Comprehensive database administration and management tools for enterprise data infrastructure',
  shortDescription: 'Database administration and management tools',
  longDescription: 'Enterprise-grade database management platform supporting multiple database engines including relational databases, NoSQL systems, and cloud-native solutions with advanced monitoring, backup, and optimization capabilities.',
  icon: 'Database',
  color: '#8B5CF6', // Purple for databases
  category: 'infrastructure',
  features: [
    'Multi-database engine support',
    'Automated backup and recovery',
    'Performance monitoring and tuning',
    'Database security and encryption',
    'Query optimization and analysis',
    'Schema migration tools',
    'Real-time replication',
    'Cloud database integration'
  ],
  tags: ['database', 'sql', 'nosql', 'administration', 'infrastructure'],
  integrationStatus: 'ready',
  popularity: 78,
  isPopular: true,
  status: 'active'
};
