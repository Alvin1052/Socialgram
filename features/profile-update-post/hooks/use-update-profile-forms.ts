import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { useMe } from '@/features/profile/hooks/use-me-profile';
import { patchProfile } from '@/services/profile-services';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import {
  TupdatePostValidation,
  updatePostValidation,
} from '../validation/update-post-validation';

export const useUpdateProfileForms = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TupdatePostValidation>({
    resolver: zodResolver(updatePostValidation),
  });

  const post = useMutation({
    mutationFn: async (payload: TupdatePostValidation) => patchProfile(payload),
    onSuccess: () => router.push('/'),
  });

  const onSubmit = async (data: TupdatePostValidation) => {
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
