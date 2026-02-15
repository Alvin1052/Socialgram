import { getPosts } from '@/services/post-services';
import { getUserSearch } from '@/services/user-services';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useSearchbar = () => {
  const [isShowSearchResult, setisShowSearchResult] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText !== '') {
      setisShowSearchResult(true);
    } else {
      setisShowSearchResult(false);
    }
  }, [searchText]);

  const {
    data: listUser,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['Search', searchText],
    queryFn: async () =>
      await getUserSearch(searchText).then((res) => res?.data?.users),
    initialData: [],
    enabled: searchText.length > 0,
  });

  return {
    listUser,
    isLoading,
    error,
    isShowSearchResult,
    setSearchText,
    searchText,
  };
};
