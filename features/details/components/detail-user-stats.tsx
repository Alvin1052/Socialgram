import { Devider } from '@/components/devider';
import { Button } from '@/components/ui/button';
import { useProfile } from '../hooks/use-profile';

interface ProfileProps {
  username: string;
}

const Profile: React.FC<ProfileProps> = ({ username }) => {
  const { ProfileUser, isLoading } = useProfile(username);

  if (isLoading) return <div>loading...</div>;

  if (!ProfileUser) return <div>not found</div>;
  return (
    <div className='flex w-full flex-col gap-4'>
      {/* Profile */}
      <div>
        <div className='flex items-center justify-between'>
          {/* Profile */}
          <div className='flex items-center gap-3'>
            <img
              src={ProfileUser?.avatarUrl}
              alt={ProfileUser?.name}
              className='h-16 w-16 rounded-full bg-neutral-500'
            />

            <div className='flex flex-col'>
              <div className='text-md font-bold'>{ProfileUser?.name}</div>
              <div className='text-md font-regular'>
                {ProfileUser?.username}
              </div>
            </div>
          </div>
          {/* Menu */}
          <div className='flex gap-3'>
            <Button variant={'ghost'}>Edit Profile</Button>
            <Button variant={'ghost'}>
              <img src='/icons/share.svg' alt='logo' width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
      {/* Bio */}

      <div className='text-md font-regular'>{ProfileUser?.bio}</div>

      {/* Stats */}
      <div className='flex h-16.5 w-full items-center justify-between gap-6'>
        <div className='flex w-full flex-col items-center gap-0.5'>
          <div className='text-xl font-bold'>{ProfileUser?.counts.post}</div>
          <p className='text-md font-regular text-neutral-400'>Post</p>
        </div>
        <Devider />
        <div className='flex w-full flex-col items-center gap-0.5'>
          <div className='text-xl font-bold'>
            {ProfileUser?.counts.followers}
          </div>
          <p className='text-md font-regular text-neutral-400'>Follower</p>
        </div>
        <Devider />

        <div className='flex w-full flex-col items-center gap-0.5'>
          <div className='text-xl font-bold'>
            {ProfileUser?.counts.following}
          </div>
          <p className='text-md font-regular text-neutral-400'>Following</p>
        </div>
        <Devider />

        <div className='flex w-full flex-col items-center gap-0.5'>
          <div className='text-xl font-bold'>{ProfileUser?.counts.likes}</div>
          <p className='text-md font-regular text-neutral-400'>Likes</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
