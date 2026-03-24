'use client';

import { UserSkeleton } from '@/components/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

import { useMe } from '../profile/hooks/use-me-profile';
import { useUpdateProfileForms } from './hooks/use-update-profile-forms';

const UpdateProfile = () => {
  const { register } = useUpdateProfileForms();
  const { ProfileUser, isLoading: isLoadingProfileUser, isError } = useMe();

  if (isLoadingProfileUser || !ProfileUser) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div className='mt-10 flex w-full flex-col gap-6'>
      {/* Title */}
      <div className='flex items-center gap-3'>
        <ArrowLeft />
        <div className='text-display-xs font-bold'>Edit Profile</div>
      </div>
      {/* Form */}
      <form>
        {/* Profile */}
        <div>
          <UserSkeleton
            name={ProfileUser?.data?.profile?.name ?? 'Guest'}
            userName={ProfileUser?.data?.profile?.username ?? 'Guest'}
            avatarUrl={ProfileUser?.data?.profile?.avatarUrl}
            className='size-16'
          />
          <Button>Change Photo</Button>
          <input type='file' {...register('avatar')} />
        </div>
        {/* Data */}
        <div></div>
      </form>
    </div>
  );
};

export default UpdateProfile;
