'use client';
import { House, Plus, User2Icon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const FooterClient = () => {
  const pathname = usePathname();

  const isHome: boolean = pathname === '/';
  const isProfile: boolean = pathname === '/profile';
  return (
    <footer className='sticky bottom-4 flex h-[80px] w-90 items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4.5 py-3'>
      <button
        className={cn(
          'flex w-23.5 flex-col items-center justify-center gap-1',
          isHome && 'text-primary-300'
        )}
        onClick={() => {
          window.location.href = '/';
        }}
      >
        {/* <img src='/icons/home.svg' alt='logo' width={24} height={24} /> */}
        <House width={24} height={24} />
        <p className='text-md font-bold'>Home</p>
      </button>
      <Button className='flex-center bg-primary-300 h-12 w-12 rounded-full'>
        <Plus width={24} height={24} />
      </Button>
      <button
        className={cn(
          'flex w-23.5 flex-col items-center justify-center gap-1',
          isProfile && 'text-primary-300'
        )}
        onClick={() => {
          window.location.href = '/profile';
        }}
      >
        <User2Icon className='rounded-full' width={24} height={24} />
        <p className='text-md font-regular'>Profile</p>
      </button>
    </footer>
  );
};

export default FooterClient;
