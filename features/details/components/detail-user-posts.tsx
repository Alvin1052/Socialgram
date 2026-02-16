import React from 'react';

import { GalleryCard } from '@/components/gallery-card';
import { TPost } from '@/types/general-types';

interface UserPostsProps {
  Post: TPost[];
}

const UserPostsComponents: React.FC<UserPostsProps> = ({ Post }) => {
  return Post.length > 0 ? (
    <div className='grid grid-cols-3 items-center justify-center gap-1'>
      {Post.map((item) => (
        <GalleryCard post={item} key={item.id} />
      ))}
    </div>
  ) : (
    <div>No Post</div>
  );
};

export default UserPostsComponents;
