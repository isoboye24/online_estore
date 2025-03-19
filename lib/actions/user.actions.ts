'use server';

import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { signIn, signOut as authSignOut } from '@/auth';
import { signInFormSchema } from '../validator';

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    const user = signInFormSchema.parse({ email, password });

    await signIn('credentials', user);

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    console.error('Sign-in error:', error);

    return { success: false, message: 'Invalid email or password' };
  }
}

export async function SignOutUser() {
  await authSignOut();
}
