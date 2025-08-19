'use client';

import { useUser } from "@stackframe/stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserProfile() {
  const user = useUser();
  const loading = false; // Stack Auth handles loading internally

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <Avatar className="w-20 h-20 mx-auto mb-4">
          <AvatarImage src={user.profileImageUrl || ''} alt={user.displayName || 'User'} />
          <AvatarFallback>
            {user.displayName?.charAt(0) || user.primaryEmail?.charAt(0) || 'U'}
          </AvatarFallback>
        </Avatar>
        <CardTitle>{user.displayName}</CardTitle>
        <CardDescription>{user.primaryEmail}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <strong>User ID:</strong> {user.id}
          </div>
          <div>
            <strong>Email Verified:</strong> {user.primaryEmailVerified ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>User Since:</strong> Stack Auth
          </div>
        </div>
      </CardContent>
    </Card>
  );
}