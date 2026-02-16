import { useProfile } from '@/features/details/hooks/use-user-profile';
import { getMyProfile } from '@/services/profile-services';
import { useQuery } from '@tanstack/react-query';

export const useMe = () => {
  const MyProfile = useQuery({
    queryKey: ['profile'],
    queryFn: () => getMyProfile().then((res) => res?.data.profile),
  });

  const MyFullProfile = useProfile(MyProfile.data?.username || '');

  return MyFullProfile;
};
