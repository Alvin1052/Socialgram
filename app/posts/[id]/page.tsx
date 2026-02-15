import Footer from '@/app/(layout)/footer';
import Header from '@/app/(layout)/header';
import Details from '@/features/details/page';

interface DetailPostProps {
  params: Promise<{ id: string }>;
}
const DetailPost: React.FC<DetailPostProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <div className='relative flex flex-col items-center justify-center'>
      <Header />
      <div className='custom-container min-h-screen text-6xl font-bold'>
        <Details username={id} />
      </div>
      <Footer />
    </div>
  );
};

export default DetailPost;
