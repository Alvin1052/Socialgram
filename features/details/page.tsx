'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bookmark } from 'lucide-react';
import React from 'react';
import UserPosts from './components/detail-user-posts';
import Profile from './components/detail-user-stats';
import UserLikesPosts from './components/detail-user-likes';

interface ProfileDetailsProps {
  username: string;
}

const Details: React.FC<ProfileDetailsProps> = ({ username }) => {
  return (
    <main className='custom-container-2 flex flex-col gap-4'>
      {/* Profile Content */}
      <Profile username={username} />
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
          <UserPosts username={username} />
        </TabsContent>
        <TabsContent value='Liked' className='min-h-screen'>
          <UserLikesPosts username={username} />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Details;
