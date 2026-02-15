'use Client';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';
import HeaderProfile from './components/header-profile';
import HeaderSearchbar from './components/header-searchbar';

import logo from '@/public/icons/logo.svg';

const HeaderClient = () => {
  return (
    <header
      className={cn(
        'flex-between bg-base-black sticky top-0 h-[80px] w-full px-30 py-4 shadow-lg'
      )}
    >
      <div className='flex w-full items-center justify-between'>
        <Link href='/' className='flex items-center gap-3.75'>
          <Image src={logo} alt='logo' width={30} height={30} />

          <div className='text-display-xs font-bold'>Sociality</div>
        </Link>
        {/* Search Bar */}
        <HeaderSearchbar />

        {/* Right */}
        <HeaderProfile />
      </div>
    </header>
  );
};

export default HeaderClient;
