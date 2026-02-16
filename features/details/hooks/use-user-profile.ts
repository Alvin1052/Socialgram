import {
  getPostUserLikes,
  getPublicProfile,
  getUserPost,
} from '@/services/user-services';
import { useQuery } from '@tanstack/react-query';

export const useProfile = (userName: string) => {
  const {
    data: ProfileUser,
    isLoading: isLoadingProfileUser,
    error: errorProfileUser,
  } = useQuery({
    queryKey: ['Profile', userName],
    queryFn: async () =>
      await getPublicProfile(userName).then((res) => res?.data),
  });

  const {
    data: UserPosts,
    isLoading: isLoadingUserPosts,
    error: errorUserPosts,
  } = useQuery({
    queryKey: ['Profile', 'posts', userName],
    queryFn: async () =>
      await getUserPost(userName).then((res) => res?.data?.posts),
    initialData: [],
  });

  const {
    data: UserLikedPost,
    isLoading: isLoadingProfileLikes,
    error: errorProfileLikes,
  } = useQuery({
    queryKey: ['Profile', 'likes', userName],
    queryFn: async () =>
      await getPostUserLikes(userName).then((res) => res?.data?.posts),
    initialData: [],
  });

  return {
    ProfileUser,
    UserPosts,
    UserLikedPost,
    isLoading:
      isLoadingProfileUser || isLoadingProfileLikes || isLoadingUserPosts,
    errorProfileUser,
    errorProfileLikes,
    errorUserPosts,
  };
};
