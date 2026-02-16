'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, UploadCloud } from 'lucide-react';
import { useAddPostForms } from './hooks/use-add-forms';

const AddPost: React.FC = () => {
  const {
    register,
    onSubmit,
    handleSubmit,
    formstate: { errors, isSubmitting },
  } = useAddPostForms();
  return (
    <div className='mt-10 flex w-full flex-col gap-6'>
      {/* Title */}
      <div className='flex items-center gap-3'>
        <ArrowLeft />
        <div className='text-display-xs font-bold'>Add Post</div>
      </div>

      {/* Body */}
      <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
        {/* Photo */}
        <div className='flex flex-col gap-0.5'>
          <div className='text-md font-bold'>Photo</div>
          {/* Upload */}

          <div className='flex-center h-36 w-full flex-col gap-3 rounded-2xl border border-dotted border-neutral-900 px-6 py-4'>
            <Button className='size-10 rounded-xl border border-neutral-900 bg-transparent'>
              <UploadCloud />
            </Button>
            <div className='text-md flex cursor-pointer flex-col items-center gap-1 text-neutral-600'>
              <label htmlFor='photo' className='cursor-pointer'>
                <span className='text-primary-300 hover:text-primary-200 hover:underline hover:underline-offset-1'>
                  Click to upload
                </span>{' '}
                or drag and drop
              </label>
              <div> PNG or JPG (max. 5mb)</div>
            </div>
          </div>
          <input
            type='file'
            id='photo'
            accept='image/png, image/jpeg'
            {...register('photo')}
          />

          {errors.photo && (
            <p className='text-sm font-medium text-[#ee1d52]'>
              {errors?.photo?.message?.toString()}
            </p>
          )}
        </div>
        {/* Caption */}
        <div className='flex flex-col gap-0.5'>
          <div className='text-md font-bold'>Caption</div>
          <div className='text-md h-36 w-full rounded-2xl border border-neutral-900 px-4 py-2'>
            <textarea
              {...register('caption')}
              className='text-md no-scrollbar h-full w-full text-wrap outline-none placeholder:text-neutral-600'
              placeholder='Create your caption'
            />
          </div>
          {errors.caption && (
            <p className='text-sm font-medium text-[#ee1d52]'>
              {errors.caption.message}
            </p>
          )}
        </div>
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Posting...' : 'Share'}
        </Button>
      </form>
    </div>
  );
};

export default AddPost;
