import { cn } from '@/lib/utils';

export const Devider: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={cn(`h-px w-full rounded-full`, className)}></div>;
};
