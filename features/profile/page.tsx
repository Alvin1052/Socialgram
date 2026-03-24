'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bookmark } from 'lucide-react';

import MyProfileCard from './components/my-profile';
import { useMe } from './hooks/use-me-profile';
import UserPostsComponents from './components/profile-posts';
import UserLikesPostsComponents from './components/profile-likes';

const MyProfile = () => {
  const { MyLikesPosts, MyPosts, ProfileUser, isError, isLoading, error } =
    useMe();

  if (
    isLoading ||
    isError ||
    !MyPosts.data?.items ||
    !MyLikesPosts.data?.posts ||
    !ProfileUser?.data
  )
    return <div>Loading...</div>;

  return (
    <div className='flex w-full flex-col gap-4'>
      {/* Profile Content */}
      <MyProfileCard
        profile={ProfileUser.data.profile}
        stats={ProfileUser.data.stats}
      />
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
          <UserPostsComponents Post={MyPosts?.data?.items} />
        </TabsContent>
        <TabsContent value='Liked' className='min-h-screen'>
          <UserLikesPostsComponents Post={MyLikesPosts?.data?.posts} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyProfile;
