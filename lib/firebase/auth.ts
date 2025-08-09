import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  updateProfile,
  User
} from 'firebase/auth';
import { auth } from './config';

// Sign in with email and password
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

// Create user with email and password
export const createUserWithEmail = async (email: string, password: string, name?: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update the user's display name if provided
    if (name && userCredential.user) {
      await updateProfile(userCredential.user, { displayName: name });
    }
    
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

// Send password reset email
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

// Update user password
export const changePassword = async (newPassword: string) => {
  try {
    if (auth.currentUser) {
      await updatePassword(auth.currentUser, newPassword);
      return { error: null };
    }
    return { error: 'No authenticated user found' };
  } catch (error: any) {
    return { error: error.message };
  }
};

// Update user profile
export const updateUserProfile = async (updates: { displayName?: string; photoURL?: string }) => {
  try {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, updates);
      return { error: null };
    }
    return { error: 'No authenticated user found' };
  } catch (error: any) {
    return { error: error.message };
  }
};
