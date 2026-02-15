import React from 'react';
import { useProfile } from '../hooks/use-profile';

import { GalleryCard } from '@/components/gallery-card';

interface UserLikesPostsProps {
  username: string;
}

const UserLikesPosts: React.FC<UserLikesPostsProps> = ({ username }) => {
  const { UserLikedPost, isLoading } = useProfile(username);
  if (isLoading) return <div>loading...</div>;

  return (
    <div className='grid grid-cols-3 items-center justify-center gap-1'>
      {UserLikedPost.map((item) => (
        <GalleryCard post={item} key={item.id} />
      ))}
    </div>
  );
};

export default UserLikesPosts;
