import { UserSkeleton } from '@/components/skeleton';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

import { CheckCircle2Icon } from 'lucide-react';
import { useLikes } from '../hooks/use-likes';
import { TGetUserLike } from '@/types/like-types';

interface LikesDialogProps {
  PostId: string;
  display: string;
}
const LikesDialog: React.FC<LikesDialogProps> = ({ display, PostId }) => {
  const { LikesUser, isLoadingLikesUser, errorLikesUser } = useLikes(PostId);

  return (
    <Dialog>
      <DialogTrigger className='text-md font-semibold'>{display}</DialogTrigger>
      <DialogContent className='w-full max-w-137'>
        <div className='flex w-full flex-col gap-5'>
          <DialogTitle className='text-xl font-bold'>Likes</DialogTitle>
          <ScrollArea className='max-h-150 w-full'>
            <div className='flex flex-col gap-5'>
              {LikesUser.map((item, i) => (
                <ListLikesCard key={i} User={item} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LikesDialog;

interface ListLikesCardProps {
  User: TGetUserLike;
}

const ListLikesCard: React.FC<ListLikesCardProps> = ({ User }) => {
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex items-center gap-2'>
        <UserSkeleton User={User} />
        <div className='flex flex-col'>
          <div className='text-sm font-bold'>{User.name}</div>
          <div className='font-regular text-sm text-neutral-400'>
            {User.username}
          </div>
        </div>
      </div>
      <div>
        {User.isMe ? (
          <div>Me</div>
        ) : User.isFollowedByMe ? (
          <Button
            variant={'ghost'}
            className='flex h-10 items-center gap-2 border border-neutral-900 px-4 py-1.5'
          >
            <CheckCircle2Icon width={20} height={20} />
            <div className='text-sm font-bold'>Following</div>
          </Button>
        ) : (
          <Button className='h-10 px-6'>Follow</Button>
        )}
      </div>
    </div>
  );
};
