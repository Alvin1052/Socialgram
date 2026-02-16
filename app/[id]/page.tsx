import Footer from '@/app/(layout)/footer';
import Header from '@/app/(layout)/header';
import Details from '@/features/details/page';

interface DetailPostProps {
  params: Promise<{ id: string }>;
}
const DetailPage: React.FC<DetailPostProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <div className='relative flex flex-col items-center justify-center'>
      <Header />
      <div className='min-h-screen w-full max-w-203 text-6xl font-bold'>
        <Details username={id} />
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
