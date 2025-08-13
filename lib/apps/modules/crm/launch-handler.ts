import { LaunchContext, LaunchResult } from '../../types';

export async function launchCRM(context: LaunchContext): Promise<LaunchResult> {
  try {
    // For CRM, we'll use the existing SSO token generation system
    const response = await fetch('/api/sso/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ targetApp: 'crm' })
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Failed to generate SSO token for CRM'
      };
    }

    if (data.success && data.redirectUrl) {
      return {
        success: true,
        redirectUrl: data.redirectUrl,
        message: 'Launching CRM...'
      };
    } else {
      return {
        success: false,
        error: data.error || 'Invalid response from SSO service'
      };
    }

  } catch (error) {
    console.error('CRM launch error:', error);
    return {
      success: false,
      error: 'Failed to launch CRM application'
    };
  }
}
