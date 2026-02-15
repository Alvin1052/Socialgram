import { getPosts } from '@/services/post-services';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

export const useFeeds = () => {
  const bottomBoundaryRef = useRef(null);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['Feeds'],
    queryFn: ({ pageParam }) =>
      getPosts({ page: pageParam }).then((res) => res?.data),
    initialPageParam: 1,
    // select: (data) => ({
    //   pages: [...data.pages].reverse(),
    //   pageParams: [...data.pageParams].reverse(),
    // }),
    getNextPageParam: (page) => {
      if (page.pagination.page === page.pagination.totalPages) return undefined;
      return page.pagination.page + 1;
    },
  });

  useEffect(() => {
    if (!bottomBoundaryRef.current || !hasNextPage || isFetchingNextPage)
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    observer.observe(bottomBoundaryRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    postData: data,
    isLoading,
    error,
    fetchNextPage,
    bottomBoundaryRef,
    isFetchingNextPage,
    hasNextPage,
  };
};
