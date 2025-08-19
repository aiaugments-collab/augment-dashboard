import { AppMetadata } from '../../types';

export const healthcareEhrMetadata: AppMetadata = {
  name: 'Healthcare & EHR Systems',
  slug: 'healthcare-ehr',
  description: 'Electronic health records and clinical solutions for care delivery organizations',
  shortDescription: 'Electronic health records and clinical solutions',
  longDescription: 'Comprehensive healthcare technology solutions providing clinical, revenue cycle, and population health management for care delivery organizations. Built on industry-standard FHIR R4 protocols.',
  icon: 'Heart',
  color: '#10B981', // Green for healthcare
  category: 'healthcare',
  features: [
    'FHIR R4 compliant patient records',
    'Clinical decision support systems',
    'Revenue cycle management',
    'Population health analytics',
    'HL7 integration standards',
    'SMART on FHIR applications',
    'Patient scheduling and management',
    'Provider workflow optimization'
  ],
  tags: ['healthcare', 'ehr', 'clinical', 'fhir', 'medical'],
  integrationStatus: 'ready',
  popularity: 85,
  isPopular: true,
  status: 'active'
};
