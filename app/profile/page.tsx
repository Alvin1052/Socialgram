import MyProfilePage from '@/features/profile/page';
import Footer from '../(layout)/footer';
import Header from '../(layout)/header';

const ProfilePage = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <Header />
      <div className='min-h-screen w-full max-w-203 text-6xl font-bold'>
        <MyProfilePage />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
