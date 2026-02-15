'use client';
import { UserSkeleton } from '@/components/skeleton';
import { TAuthor } from '@/types/general-types';
import { Search } from 'lucide-react';
import React from 'react';
import { useSearchbar } from '../hooks/use-searchbar';
import { TUser } from '@/types/auth-types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

// const User: TAuthor = {
//   name: 'John Doe',
//   username: 'johndoe',
//   id: 1,
//   avatarUrl: '',
// };

const HeaderSearchbar = () => {
  const { listUser, isShowSearchResult, searchText, setSearchText } =
    useSearchbar();

  return (
    <div className='relative flex h-12 w-full max-w-125 items-center rounded-full border border-neutral-900'>
      <div className='relative flex w-full items-center gap-1.5 px-4 py-2'>
        <Search className='h-5 w-5 text-neutral-600' />
        <input
          type='text'
          placeholder='Search'
          className='w-full outline-none'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {isShowSearchResult && (
        <div className='absolute top-15 z-100 w-full rounded-2xl border border-neutral-900 bg-neutral-950 p-2'>
          <ScrollArea className='no-scrollbar h-fit max-h-75 overflow-y-scroll'>
            <div className='flex flex-col gap-4'>
              {listUser.map((User, i) => (
                <ListProfileName
                  key={i}
                  User={User}
                  className='hover:bg-neutral-800'
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default HeaderSearchbar;
interface ListProfileNameProps {
  User: TAuthor | TUser;
  className?: string;
}

const ListProfileName: React.FC<ListProfileNameProps> = ({
  User,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-lg p-1',
        className
      )}
    >
      <UserSkeleton User={User} className='size-12' />
      <div className='text-md flex flex-col'>
        <div className='font-bold'>{User.name}</div>
        <div>{User.username}</div>
      </div>
    </div>
  );
};
