import { useQuery } from '@tanstack/react-query';
import { get } from 'http';

const useProfileOverview = (id: string) => {
  const {} = useQuery({
    queryKey: ['Profile', 'overview', id],
    queryFn: async () => get,
  });
};
