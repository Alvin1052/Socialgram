import { UserSkeleton } from '@/components/skeleton';
import { MoreHorizontal, SmileIcon } from 'lucide-react';

import Interaction from './interaction';
import { usePost } from '../hooks/use-post';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ConvertDate } from '@/helper/convert-ui-text';

interface PostDialogProps {
  id: number;
}

export const PostDetail: React.FC<PostDialogProps> = ({ id }) => {
  const {
    DetailPost,
    errorGetComments,
    errorGetPostDetail,
    isLoadingDetailPost,
    isLoadingGetComment,
    listComment,
  } = usePost(id);

  if (!DetailPost || isLoadingDetailPost) return <div>loading...</div>;
  if (errorGetPostDetail) return <div>error</div>;

  return (
    <div className='flex w-full'>
      <div className='size-180 overflow-hidden object-cover object-center'>
        <Image
          width={720}
          height={720}
          src={DetailPost?.imageUrl}
          alt={DetailPost?.caption || 'image'}
        />
      </div>

      {/* right side */}
      <div className='flex w-full max-w-120 flex-col justify-between p-5'>
        {/* Uppper Side */}
        <div className='flex flex-col gap-4'>
          {/* username & Caption */}
          <div className='flex flex-col gap-2'>
            {/* Profile */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <UserSkeleton User={DetailPost?.author} className='size-10' />

                <div className='flex flex-col'>
                  <div className='text-sm font-bold'>
                    {DetailPost?.author?.name}
                  </div>
                  <div className='font-regular text-xs'>
                    {ConvertDate(DetailPost?.createdAt)}
                  </div>
                </div>
              </div>
              <MoreHorizontal />
            </div>
            {/* Caption */}
            <div className='font-regular text-sm'>{DetailPost.caption}</div>
          </div>
          {/* Devider */}
          <div className='w-full border border-neutral-900' />
          {/* Comments */}

          {errorGetComments ? (
            <div>error</div>
          ) : (
            <div className='flex flex-col gap-4'>
              <div className='text-md font-bold'>Comments</div>
              <ScrollArea className='max-h-90'>
                <div className='flex flex-col gap-4'>
                  {listComment.map((comment, index: number) => (
                    <div key={index} className='flex flex-col gap-2.5'>
                      {/* Profile */}
                      <div className='flex items-center gap-2'>
                        <UserSkeleton
                          User={comment.author}
                          className='size-10'
                        />

                        <div className='flex flex-col'>
                          <div className='text-sm font-bold'>
                            {comment.author.name}
                          </div>
                          <div className='font-regular text-xs'>
                            {ConvertDate(DetailPost?.createdAt)}
                          </div>
                        </div>
                      </div>
                      <div className='font-regular text-sm'>{comment.text}</div>

                      {index !== listComment.length - 1 && (
                        <div className='w-full border border-neutral-900' />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
        {/* Down Side */}
        <div className='flex w-full flex-col gap-4'>
          {/* <Interaction item={item} withDetail={false} /> */}
          <Interaction
            PostId={DetailPost.id.toString()}
            {...DetailPost}
            canOpen={false}
          />
          {/* Add Comment */}
          <div className='flex w-full items-center gap-2'>
            <div className='flex-center hover:text-primary-200 h-12 w-12 rounded-md border border-neutral-900 p-3'>
              <SmileIcon width={24} height={24} />
            </div>

            <div className='text-md flex w-full items-center rounded-2xl border border-neutral-900 px-4 py-2 text-neutral-600'>
              <input
                placeholder='Add a comment'
                className='w-full font-medium focus:ring-0 focus:outline-none'
              />
              <button className='hover:text-primary-200 cursor-pointer font-bold'>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
