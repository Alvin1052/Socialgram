'use client';

import { Devider } from '@/components/devider';
import { useFeeds } from './hooks/use-feeds';
import { Post } from './components/post-card';
import { Button } from '@/components/ui/button';

const Feeds = () => {
  const {
    postData,
    error,
    isLoading,
    bottomBoundaryRef,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useFeeds();
  return (
    <div className='mt-10 mb-10 flex flex-col gap-6'>
      {postData?.pages.map((page) =>
        page.posts.map((post) => (
          <div key={post.id} className='flex flex-col gap-6'>
            <Post Post={post} />
            <Devider className='border border-neutral-900' />
          </div>
        ))
      )}
      {hasNextPage && (
        <Button ref={bottomBoundaryRef} onClick={() => fetchNextPage()}>
          {isFetchingNextPage
            ? 'Loading...'
            : hasNextPage
              ? 'Load More'
              : 'No More'}
        </Button>
      )}
    </div>
  );
};

export default Feeds;
