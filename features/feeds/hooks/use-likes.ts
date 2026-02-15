'use client';
import { getUsersLikes } from '@/services/likes-services';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const useLikes = (PostId: string) => {
  const [commentShow, setCommentShow] = useState(false);

  const handlecomment = () => {
    setCommentShow(!commentShow);
  };

  const {
    data: LikesUser,
    isLoading: isLoadingLikesUser,
    error: errorLikesUser,
  } = useQuery({
    queryKey: ['Posts', PostId],
    initialData: [],
    queryFn: async () =>
      await getUsersLikes(PostId).then((res) => res?.data.users),
  });

  return {
    handlecomment,
    commentShow,
    LikesUser,
    isLoadingLikesUser,
    errorLikesUser,
  };
};
