import { getPostMeLikes } from '@/services/likes-services';
import { getMyPost, getMyProfile } from '@/services/profile-services';
import { useQuery } from '@tanstack/react-query';

export const useMe = () => {
  const MyPosts = useQuery({
    queryKey: ['posts-profile'],
    queryFn: () => getMyPost().then((res) => res?.data),
  });

  const MyLikesPosts = useQuery({
    queryKey: ['likes-profile'],
    queryFn: () => getPostMeLikes().then((res) => res?.data),
  });

  const ProfileUser = useQuery({
    queryKey: ['my-Profile'],
    queryFn: async () => await getMyProfile().then((res) => res?.data),
  });

  return {
    MyPosts,
    MyLikesPosts,
    ProfileUser,
    isLoading:
      MyPosts.isLoading || MyLikesPosts.isLoading || ProfileUser.isLoading,
    error: MyPosts.error || MyLikesPosts.error || ProfileUser.error,
    isError: MyPosts.isError || MyLikesPosts.isError || ProfileUser.isError,
  };
};
