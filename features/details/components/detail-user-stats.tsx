import { Devider } from '@/components/devider';
import { UserSkeleton } from '@/components/skeleton';
import { Button } from '@/components/ui/button';
import { TPublicProfile } from '@/types/user-types';
import Image from 'next/image';

interface ProfileProps {
  profile: TPublicProfile | undefined;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  if (!profile) return <div>Loading...</div>;

  return (
    <div className='flex w-full flex-col gap-4'>
      {/* Profile */}
      <div>
        <div className='flex items-center justify-between'>
          {/* Profile */}
          <div className='flex items-center gap-3'>
            <UserSkeleton User={profile} className='size-16' />

            <div className='flex flex-col'>
              <div className='text-md font-bold'>{profile?.name}</div>
              <div className='text-md font-regular'>{profile?.username}</div>
            </div>
          </div>
          {/* Menu */}
          <div className='flex gap-3'>
            <Button variant={'ghost'}>Edit Profile</Button>
            <Button variant={'ghost'}>
              <Image src='/icons/share.svg' alt='logo' width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
      {/* Bio */}

      <div className='text-md font-regular'>{profile?.bio}</div>

      {/* Stats */}
      <div className='flex h-16.5 w-full items-center justify-between gap-6'>
        <div className='flex w-full flex-col items-center gap-0.5'>
          <div className='text-xl font-bold'>{profile?.counts.post}</div>
          <p className='text-md font-regular text-neutral-400'>Post</p>
        </div>
        <Devider />
        <div className='flex w-full flex-col items-center gap-0.5'>
          <div className='text-xl font-bold'>{profile?.counts.followers}</div>
          <p className='text-md font-regular text-neutral-400'>Follower</p>
        </div>
        <Devider />

        <div className='flex w-full flex-col items-center gap-0.5'>
          <div className='text-xl font-bold'>{profile?.counts.following}</div>
          <p className='text-md font-regular text-neutral-400'>Following</p>
        </div>
        <Devider />

        <div className='flex w-full flex-col items-center gap-0.5'>
          <div className='text-xl font-bold'>{profile?.counts.likes}</div>
          <p className='text-md font-regular text-neutral-400'>Likes</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
