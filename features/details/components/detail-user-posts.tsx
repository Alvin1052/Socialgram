import React from 'react';
import { useProfile } from '../hooks/use-profile';

import { GalleryCard } from '@/components/gallery-card';

interface UserPostsProps {
  username: string;
}

const UserPosts: React.FC<UserPostsProps> = ({ username }) => {
  const { UserPosts } = useProfile(username);

  return (
    <div className='grid grid-cols-3 items-center justify-center gap-1'>
      {UserPosts.map((item) => (
        <GalleryCard post={item} key={item.id} />
      ))}
    </div>
  );
};

export default UserPosts;
