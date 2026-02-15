'use client';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import useProfile from '../hooks/use-profile';
import Image from 'next/image';
import { CapitalizeFirstLetter, Initials } from '@/helper/convert-ui-text';
import { UserSkeleton } from '@/components/skeleton';

const HeaderProfile = () => {
  // const isToken = localStorage.getItem('token');
  const isToken =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const { ProfileUser } = useProfile();

  if (ProfileUser === undefined || !ProfileUser) return null;
  return (
    <div className='flex items-center justify-between gap-6'>
      {/* Profile */}
      {isToken ? (
        <div className='flex items-center gap-3'>
          <UserSkeleton
            User={ProfileUser.profile}
            className='flex-center size-12 object-fill text-3xl'
          />

          <div className='flex flex-col'>
            <div className='text-lg font-semibold'>
              {CapitalizeFirstLetter(
                ProfileUser.profile.name !== ''
                  ? ProfileUser.profile.name
                  : ProfileUser.profile.username !== ''
                    ? ProfileUser.profile.username
                    : 'Guest'
              )}
            </div>
          </div>
        </div>
      ) : (
        // Register and Login
        <div className='flex items-center gap-4'>
          <Link href={'/login'}>
            <Button variant={'ghost'} className='text-md w-40.75 font-bold'>
              Login
            </Button>
          </Link>
          <Link href={'/register'}>
            <Button
              variant={'ghost'}
              className='text-md bg-primary-300 w-40.75 font-bold text-white'
            >
              Register
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
