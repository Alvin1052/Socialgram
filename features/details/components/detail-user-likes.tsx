import React from 'react';

import { GalleryCard } from '@/components/gallery-card';
import { TPost } from '@/types/general-types';

interface UserLikesPostsProps {
  Post: TPost[];
}

const UserLikesPostsComponents: React.FC<UserLikesPostsProps> = ({ Post }) => {
  return (
    <div className='grid grid-cols-3 items-center justify-center gap-1'>
      {Post.map((item) => (
        <GalleryCard post={item} key={item.id} />
      ))}
    </div>
  );
};

export default UserLikesPostsComponents;
