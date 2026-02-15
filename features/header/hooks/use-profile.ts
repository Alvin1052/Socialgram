import { getProfile } from '@/services/profile-services';
import { useQuery } from '@tanstack/react-query';

const useProfile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['Profile'],
    queryFn: async () => await getProfile().then((res) => res?.data),
  });

  return { ProfileUser: data, isLoading, error };
};

export default useProfile;
