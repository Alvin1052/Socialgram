import { Initials } from '@/helper/convert-ui-text';
import { cn } from '@/lib/utils';

import Image from 'next/image';

interface UserSkeletonProps {
  name: string;
  userName: string;
  avatarUrl?: string;
  className?: string;
}
export const UserSkeleton: React.FC<UserSkeletonProps> = ({
  name,
  userName,
  avatarUrl,
  className,
}) => {
  return (
    <>
      {avatarUrl && avatarUrl ? (
        <Image
          src={avatarUrl}
          width={64}
          height={64}
          alt={name}
          className={cn(
            'flex-center size-16 rounded-full object-cover object-center',
            className
          )}
        />
      ) : (
        <div
          className={cn(
            `flex size-16 items-center justify-center rounded-full bg-neutral-500 text-2xl`,
            className
          )}
        >
          {Initials(name !== '' ? name : userName !== '' ? userName : 'Guest')}
        </div>
      )}
    </>
  );
};
