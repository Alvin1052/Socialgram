import Footer from '@/app/(layout)/footer';
import Header from '@/app/(layout)/header';
import AddPost from '@/features/profile-add-post/page';

const AddPostPage = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <Header />
      <div className='min-h-screen w-full max-w-203 text-6xl font-bold'>
        <AddPost />
      </div>
      <Footer />
    </div>
  );
};

export default AddPostPage;
