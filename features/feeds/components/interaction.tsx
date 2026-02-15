import { cn } from '@/lib/utils';
import { Bookmark, Heart, MessageSquareMore } from 'lucide-react';
import Image from 'next/image';
import LikesDialog from './likes-dialog';
import PostDialog from './post-dialog';

interface InteractionProps {
  PostId: string;
  likeCount: number;
  likedByMe: boolean;
  commentCount: number;
  canOpen: boolean;
}

const Interaction: React.FC<InteractionProps> = ({
  PostId,
  likeCount,
  likedByMe,
  commentCount,
  canOpen,
}) => {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-4'>
        {/* Likes */}
        <div className='flex-center gap-1.5'>
          <div className='flex-center'>
            <Heart
              className={cn(likedByMe && 'fill-accent-red text-accent-red')}
            />
          </div>
          <LikesDialog display={likeCount.toString()} PostId={PostId} />
        </div>
        {/* Comments */}
        {canOpen ? (
          <PostDialog id={Number(PostId)} />
        ) : (
          <div className='flex-center gap-1.5'>
            <div className='flex-center'>
              <MessageSquareMore width={24} height={24} />
            </div>
            <div className='text-md w-fit'>{commentCount}</div>
          </div>
        )}
        {/* Share */}
        <div className='flex-center gap-1.5'>
          <Image
            src='/icons/share.svg'
            alt='share'
            className='w-full'
            width={24}
            height={24}
          />

          <div className='text-md w-fit'>20</div>
        </div>
      </div>
      {/* Save */}
      <div className='flex-center'>
        <Bookmark />
      </div>
    </div>
  );
};

export default Interaction;
