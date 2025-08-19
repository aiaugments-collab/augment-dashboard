import { LaunchContext, LaunchResult } from '../../types';

export async function launchCommunications(context: LaunchContext): Promise<LaunchResult> {
  const { user } = context;
  const baseUrl = process.env.COMMUNICATIONS_URL || 'https://demo.communications.com';
  
  const params = new URLSearchParams({
    user_id: user.id,
    email: user.email,
    name: user.name || '',
    plan_level: user.planLevel.toString(),
    role: 'user',
    timestamp: Date.now().toString()
  });
  
  return {
    success: true,
    redirectUrl: `${baseUrl}/app/dashboard?${params.toString()}`
  };
}
