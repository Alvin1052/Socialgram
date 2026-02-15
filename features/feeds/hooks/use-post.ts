import { getComments } from '@/services/comment-services';
import { getPostDetail } from '@/services/post-services';
import { useQuery } from '@tanstack/react-query';

export const usePost = (id: number) => {
  const {
    data: DetailPost,
    isLoading: isLoadingDetailPost,
    error: errorGetPostDetail,
  } = useQuery({
    queryKey: ['Post', id],
    queryFn: async () => getPostDetail(id.toString()).then((res) => res?.data),
  });

  const {
    data: listComment,
    isLoading: isLoadingGetComment,
    error: errorGetComments,
  } = useQuery({
    queryKey: ['Posts', 'comments', id],
    queryFn: async () =>
      getComments(id.toString()).then((res) => res?.data?.comments),
    initialData: [],
  });

  return {
    DetailPost,
    listComment,
    isLoadingDetailPost,
    isLoadingGetComment,
    errorGetPostDetail,
    errorGetComments,
  };
};
