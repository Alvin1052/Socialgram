import { Initials } from '@/helper/convert-ui-text';
import { cn } from '@/lib/utils';
import { TUser } from '@/types/auth-types';
import { TAuthor } from '@/types/general-types';
import Image from 'next/image';

interface UserSkeletonProps {
  User: TAuthor | TUser;
  className?: string;
}
export const UserSkeleton: React.FC<UserSkeletonProps> = ({
  User,
  className,
}) => {
  return (
    <>
      {User?.avatarUrl && User?.avatarUrl ? (
        <Image
          src={User?.avatarUrl}
          width={64}
          height={64}
          alt={User?.name}
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
          {Initials(
            User.name !== ''
              ? User.name
              : User.username !== ''
                ? User.username
                : 'Guest'
          )}
        </div>
      )}
    </>
  );
};
