import Footer from '@/app/(layout)/footer';
import Header from '@/app/(layout)/header';
import UpdateProfile from '@/features/profile-update-post/page';

const UpdatePage = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <Header />
      <div className='min-h-screen w-full max-w-203 text-6xl font-bold'>
        {/* <UpdateProfile /> */}
      </div>
      <Footer />
    </div>
  );
};

export default UpdatePage;
