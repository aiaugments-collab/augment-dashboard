import { AppMetadata } from '../../types';

export const calendarSchedulerMetadata: AppMetadata = {
  name: 'Calendar & Scheduling Pro',
  slug: 'calendar-scheduler',
  description: 'Advanced calendar management and appointment scheduling system',
  shortDescription: 'Streamline appointments, meetings, and events with intelligent scheduling automation',
  longDescription: `Take control of your time with our comprehensive calendar and scheduling platform. Automate appointment bookings, manage team schedules, and integrate with all your favorite calendar applications.

**Scheduling Features:**
• **Appointment Booking** - Let clients book appointments directly from your website
• **Team Scheduling** - Coordinate schedules across team members and resources
• **Meeting Room Management** - Book and manage conference rooms and equipment
• **Recurring Appointments** - Set up recurring meetings and regular appointments
• **Buffer Time Management** - Automatic buffer time between appointments
• **Time Zone Intelligence** - Handle scheduling across different time zones
• **Waitlist Management** - Automatic rebooking when cancellations occur
• **Custom Booking Forms** - Collect information during the booking process

**Advanced Calendar Tools:**
• **Multi-Calendar Sync** - Integrate with Google, Outlook, Apple Calendar, and more
• **Availability Windows** - Set complex availability rules and blackout dates
• **Automated Reminders** - Email and SMS reminders for upcoming appointments
• **Payment Integration** - Collect payments during booking process
• **Analytics Dashboard** - Track booking patterns and optimization opportunities
• **White-label Options** - Custom branding for client-facing booking pages

Perfect for service providers, consultants, healthcare professionals, and any business that relies on appointments and scheduling.`,
  
  icon: 'Calendar',
  color: 'bg-green-600',
  category: 'productivity',
  
  screenshots: [
    '/images/apps/calendar/dashboard.png',
    '/images/apps/calendar/booking.png',
    '/images/apps/calendar/schedule.png',
    '/images/apps/calendar/analytics.png'
  ],
  
  features: [
    'Online Appointment Booking',
    'Team Schedule Coordination',
    'Multi-Calendar Integration',
    'Automated Reminders & Notifications',
    'Time Zone Management',
    'Recurring Event Scheduling',
    'Meeting Room Booking',
    'Payment Processing Integration',
    'Custom Booking Forms',
    'Scheduling Analytics'
  ],
  
  tags: [
    'Calendar',
    'Scheduling',
    'Appointments',
    'Booking',
    'Time Management',
    'Automation',
    'Reminders',
    'Integration'
  ],
  
  website: 'https://github.com/backink/calendar-app',
  supportUrl: 'https://help.example.com/calendar',
  integrationStatus: 'ready',
  popularity: 77,
  rating: 4.3,
  isPopular: false,
  isFeatured: false,
  launchInNewTab: true,
  status: 'active'
};
