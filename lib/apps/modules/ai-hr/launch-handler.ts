import { LaunchContext, LaunchResult } from '../../types';
import { generateSecureAppToken } from '@/lib/sso/token-generator';

export async function launchAIHR(context: LaunchContext): Promise<LaunchResult> {
  try {
    // Get app URL from environment
    const appUrl = process.env.AI_HR_APP_URL;
    if (!appUrl) {
      return {
        success: false,
        error: 'AI HR Manager app URL not configured. Please set AI_HR_APP_URL in environment variables.'
      };
    }

    // Generate JWT token
    const tokenData = generateSecureAppToken({
      userId: context.user.id,
      email: context.user.email,
      name: context.user.name || context.user.email,
      role: 'member',
      targetApp: 'ai-hr',
      permissions: [],
      expirationMinutes: 5
    });

    // Simple redirect to app with token
    const redirectUrl = `${appUrl}?token=${encodeURIComponent(tokenData.token)}`;

    return {
      success: true,
      redirectUrl,
      message: 'Launching AI HR Manager...'
    };

  } catch (error) {
    console.error('AI HR Manager launch error:', error);
    return {
      success: false,
      error: 'Failed to launch AI HR Manager application'
    };
  }
}
