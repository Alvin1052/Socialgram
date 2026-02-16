'use client';

import { UserSkeleton } from '@/components/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

import { useMe } from '../profile/hooks/use-me-profile';
import { useUpdateProfileForms } from './hooks/use-update-profile-forms';

const UpdateProfile = () => {
  const { register } = useUpdateProfileForms();
  const { ProfileUser, isLoading: isLoadingProfileUser } = useMe();

  if (isLoadingProfileUser || !ProfileUser) return <div>Loading...</div>;

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
          <UserSkeleton User={ProfileUser} className='size-16' />
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
