import Feeds from '@/features/feeds/page';
import Header from './(layout)/header';
import Footer from './(layout)/footer';

export default function Home() {
  // checkCookie('token');

  return (
    <div className='relative flex flex-col items-center justify-center'>
      <Header />
      <div className='custom-container min-h-screen text-6xl font-bold'>
        <Feeds />
      </div>
      <Footer />
    </div>
  );
}
