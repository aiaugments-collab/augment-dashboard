import { AppMetadata } from '../../types';

export const digitalSignatureMetadata: AppMetadata = {
  name: 'Digital Signature Studio',
  slug: 'digital-signature',
  description: 'Secure digital document signing and contract management platform',
  shortDescription: 'Sign documents digitally with legally binding e-signatures and contract workflows',
  longDescription: `Streamline your document signing process with our comprehensive digital signature platform. Create, send, and manage legally binding electronic signatures with enterprise-grade security.

**Document Signing Features:**
• **Electronic Signatures** - Legally binding e-signatures with full audit trail
• **Document Templates** - Create reusable templates for common documents
• **Multi-party Signing** - Support for multiple signers and approval workflows
• **Contract Management** - Organize and track all your signed documents
• **Real-time Notifications** - Get notified when documents are viewed or signed
• **Mobile Signing** - Sign documents on any device, anywhere
• **Bulk Sending** - Send multiple documents for signature at once
• **Integration Ready** - Connect with your existing business applications

**Security & Compliance:**
• **Bank-level Security** - 256-bit SSL encryption and secure storage
• **Legal Compliance** - Meets eIDAS, ESIGN Act, and UETA standards
• **Audit Trail** - Complete signing history with timestamps and IP tracking
• **Identity Verification** - Multiple authentication methods available
• **Document Integrity** - Tamper-evident technology protects signed documents

Perfect for businesses, legal teams, HR departments, and anyone who needs to sign documents securely and efficiently.`,
  
  icon: 'FileSignature',
  color: 'bg-blue-600',
  category: 'productivity',
  
  screenshots: [
    '/images/apps/signature/dashboard.png',
    '/images/apps/signature/signing.png',
    '/images/apps/signature/templates.png',
    '/images/apps/signature/audit.png'
  ],
  
  features: [
    'Electronic Document Signing',
    'Multi-party Signature Workflows',
    'Document Templates & Forms',
    'Contract Management System',
    'Mobile & Desktop Signing',
    'Bulk Document Processing',
    'Advanced Security & Encryption',
    'Legal Compliance (eIDAS, ESIGN)',
    'Complete Audit Trail',
    'API Integrations'
  ],
  
  tags: [
    'Digital Signature',
    'E-signature',
    'Document Management',
    'Contracts',
    'Legal',
    'Security',
    'Workflow',
    'Compliance'
  ],
  
  website: 'https://github.com/backink/Digital-signature-app',
  supportUrl: 'https://help.example.com/signature',
  integrationStatus: 'ready',
  popularity: 88,
  rating: 4.7,
  isPopular: true,
  isFeatured: true,
  launchInNewTab: true,
  status: 'active'
};
