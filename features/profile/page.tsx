'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bookmark } from 'lucide-react';
import { useMe } from './hooks/use-me-profile';
import UserLikesPostsComponents from '../details/components/detail-user-likes';
import UserPostsComponents from '../details/components/detail-user-posts';
import Profile from '../details/components/detail-user-stats';
import { useProfile } from '../details/hooks/use-user-profile';
import { useAuthContext } from '@/context/useAuthContext';

const MyProfile = () => {
  const { UserPosts, UserLikedPost, ProfileUser, isLoading } = useMe();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className='flex w-full flex-col gap-4'>
      {/* Profile Content */}
      <Profile profile={ProfileUser} />
      {/* Gallery */}
      <Tabs defaultValue={'Gallery'}>
        <TabsList className='flex-center'>
          <TabsTrigger value='Gallery' className='data'>
            <img
              src='/icons/gallery.svg'
              alt='logo'
              className='h-[24px] w-[24px]'
            />
            <div>Gallery</div>
          </TabsTrigger>
          <TabsTrigger value='Liked' className='data-active:fill-white'>
            <Bookmark className='h-[24px] w-[24px]' />
            <div>Liked</div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value='Gallery' className='min-h-screen'>
          <UserPostsComponents Post={UserPosts} />
        </TabsContent>
        <TabsContent value='Liked' className='min-h-screen'>
          <UserLikesPostsComponents Post={UserLikedPost} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyProfile;
