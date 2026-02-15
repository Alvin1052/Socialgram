import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquareMore, MoreHorizontal, SmileIcon } from 'lucide-react';

import { UserSkeleton } from '@/components/skeleton';
import Image from 'next/image';
import { usePost } from '../hooks/use-post';
import Interaction from './interaction';
import { PostDetail } from './post-detail-dialog';

interface PostDialogProps {
  id: number;
}

const PostDialog: React.FC<PostDialogProps> = ({ id }) => {
  const { DetailPost, isLoadingDetailPost, listComment } = usePost(id);

  if (!DetailPost || isLoadingDetailPost) return <div>loading...</div>;
  return (
    <Dialog>
      <DialogTrigger className='flex-center gap-1.5'>
        <div className='flex-center'>
          <MessageSquareMore width={24} height={24} />
        </div>
        <div className='text-md w-fit'>{listComment.length}</div>
      </DialogTrigger>
      <DialogContent className='max-h-180 max-w-300'>
        <PostDetail id={id} />
      </DialogContent>
    </Dialog>
  );
};

export default PostDialog;
