'use client';
import { cn } from '@/lib/utils';

import { UserSkeleton } from '@/components/skeleton';
import { CapitalizeFirstLetter, ConvertDate } from '@/helper/convert-ui-text';
import { TPost } from '@/types/general-types';
import Link from 'next/link';
import { useLikes } from '../hooks/use-likes';
import Interaction from './interaction';

export const Post = ({ Post }: { Post: TPost }) => {
  const { commentShow, handlecomment } = useLikes(Post.id.toString());
  return (
    <div className='flex w-full max-w-150 flex-col gap-3'>
      {/* Profile */}
      <Link href={`/${Post?.author?.username}`}>
        <div className='flex items-center gap-3'>
          <UserSkeleton User={Post?.author} />
          <div className='flex flex-col'>
            <div className='text-lg font-semibold'>
              {CapitalizeFirstLetter(Post?.author?.username)} {Post?.id}
            </div>
            <div className='text-lg font-semibold'>
              {ConvertDate(Post?.createdAt)}
            </div>
          </div>
        </div>
      </Link>
      {/* Picture */}
      <img
        src={Post.imageUrl}
        alt={Post.author.name}
        className='h-150 w-150 object-cover'
      />
      {/* Interactions */}
      <Interaction
        PostId={Post.id.toString()}
        commentCount={Post.commentCount}
        likeCount={Post.likeCount}
        likedByMe={Post.likedByMe}
        canOpen={true}
      />
      {/* Caption */}
      <div className='flex flex-col gap-1'>
        <div
          className={cn(
            'font-regular text-md text-justify',
            commentShow ? '' : 'line-clamp-2'
          )}
        >
          <span className='text-md font-bold'>{Post.author.username}</span>{' '}
          {Post.caption}
        </div>

        <div
          onClick={handlecomment}
          className={cn(
            'text-md',
            commentShow ? 'text-neutral-500' : 'text-neutral-300'
          )}
        >
          {commentShow ? 'Show less' : 'Show more'}
        </div>
      </div>
    </div>
  );
};
