import { PostDetail } from '@/features/feeds/components/post-detail-dialog';
import { TPost } from '@/types/general-types';

import { DialogTrigger, DialogContent, Dialog } from './ui/dialog';
import Image from 'next/image';

interface DetailPostsCardProps {
  post: TPost;
}
export const GalleryCard: React.FC<DetailPostsCardProps> = ({ post }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src={post.imageUrl}
          alt='image'
          width={268}
          height={268}
          className='h-67 w-67 object-cover'
        />
      </DialogTrigger>
      <DialogContent className='max-h-180 max-w-300'>
        <PostDetail id={post.id} />
      </DialogContent>
    </Dialog>
  );
};
