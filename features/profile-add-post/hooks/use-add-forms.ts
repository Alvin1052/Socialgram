import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import {
  PostSchema,
  TPostSchema,
} from '@/features/profile-add-post/validation/add-Post-scheme';
import { postPost } from '@/services/post-services';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const useAddPostForms = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TPostSchema>({ resolver: zodResolver(PostSchema) });

  const post = useMutation({
    mutationFn: async (payload: TPostSchema) => postPost(payload),
    onSuccess: () => router.push('/'),
  });

  const onSubmit = async (data: TPostSchema) => {
    console.log('aaa', data);
    post.mutate(data);
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errorMessage: post.error?.message,
    formstate: { errors, isSubmitting },
    errors,

    reset,
    isSuccess: post.isSuccess,
    isFailed: post.isError,
  };
};
