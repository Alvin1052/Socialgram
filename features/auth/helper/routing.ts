'use client';
import { useRouter } from 'next/navigation';

export const RouteToHome = () => {
  const router = useRouter();
  router.push('/');
};
