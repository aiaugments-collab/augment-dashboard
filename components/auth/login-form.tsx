'use client';

import { useState } from 'react';
import { useAuth } from './auth-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert } from '@/components/ui/alert';

interface LoginFormProps {
  mode?: 'signin' | 'signup';
  onSuccess?: () => void;
  onModeChange?: (mode: 'signin' | 'signup') => void;
}

export function LoginForm({ mode = 'signin', onSuccess, onModeChange }: LoginFormProps) {
  const { signIn, signUp, resetPassword, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === 'signin') {
        const result = await signIn(formData.email, formData.password);
        if (result.user && !result.error) {
          onSuccess?.();
        }
      } else {
        const result = await signUp(formData.email, formData.password, formData.name);
        if (result.user && !result.error) {
          onSuccess?.();
        }
      }
    } catch (err) {
      console.error('Auth error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!formData.email) {
      setResetMessage('Please enter your email address first');
      return;
    }

    try {
      await resetPassword(formData.email);
      setResetMessage('Password reset email sent! Check your inbox.');
      setShowResetPassword(false);
    } catch (err) {
      setResetMessage('Failed to send reset email. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {mode === 'signin' ? 'Welcome back' : 'Create account'}
        </CardTitle>
        <CardDescription className="text-center">
          {mode === 'signin' 
            ? 'Enter your credentials to access your account'
            : 'Enter your information to create a new account'
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {(error || resetMessage) && (
          <Alert className={resetMessage && !error ? 'border-green-500 text-green-700' : ''}>
            {error || resetMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required={mode === 'signup'}
                disabled={isLoading || loading}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading || loading}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {mode === 'signin' && (
                <button
                  type="button"
                  onClick={() => setShowResetPassword(!showResetPassword)}
                  className="text-sm text-blue-600 hover:text-blue-800"
                  disabled={isLoading || loading}
                >
                  Forgot password?
                </button>
              )}
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading || loading}
              minLength={mode === 'signup' ? 6 : undefined}
            />
          </div>

          {showResetPassword && (
            <div className="space-y-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleResetPassword}
                disabled={isLoading || loading}
                className="w-full"
              >
                Send Reset Email
              </Button>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading || loading}
            className="w-full"
          >
            {isLoading || loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{mode === 'signin' ? 'Signing in...' : 'Creating account...'}</span>
              </div>
            ) : (
              mode === 'signin' ? 'Sign In' : 'Create Account'
            )}
          </Button>
        </form>

        {onModeChange && (
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              {mode === 'signin' 
                ? "Don't have an account?" 
                : 'Already have an account?'
              }
            </p>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onModeChange(mode === 'signin' ? 'signup' : 'signin')}
              disabled={isLoading || loading}
              className="text-blue-600 hover:text-blue-800"
            >
              {mode === 'signin' ? 'Create account' : 'Sign in'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
