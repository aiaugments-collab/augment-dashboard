import { connectDB } from '@/lib/db/mongodb';
import { User } from '@/lib/db/schemas';

export async function getUserById(userId: string) {
  await connectDB();
  return await User.findById(userId);
}
