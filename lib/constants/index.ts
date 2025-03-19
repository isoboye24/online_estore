export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Online eStore';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A modern ecommerce store built with Next.js, Typescript and React';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: '',
  password: '',
};

export const signUpDefaultValues = {
  name: 'Dan-Obu Isoboye Vincent',
  email: 'isoboyedanobu@gmail.com',
  password: '123',
  confirmPassword: '123',
};
