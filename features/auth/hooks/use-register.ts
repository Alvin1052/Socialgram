import { PostRegister } from '@/services/auth-services';
import { TRegisterResponse } from '@/types/auth-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { registerScheme, TregisterScheme } from '../validations/auth';
import { useRouter } from 'next/navigation';

export const useRegisterForms = () => {
  // npm i react-hook-form
  // npm i zod
  //npm i @hookform/resolvers
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TregisterScheme>({ resolver: zodResolver(registerScheme) });

  const post = useMutation({
    mutationFn: async (payload: TregisterScheme): Promise<TRegisterResponse> =>
      PostRegister(payload),
    onSuccess: () => {
      router.push('/login');
    },
  });

  const onSubmit = async (data: TregisterScheme) => {
    post.mutate(data);
  };

  return {
    register,
    onSubmit,
    isSuccess: post.isSuccess,
    isFailed: post.isError,
    serverError: (post.error as any) ?? 'Something Went Wrong',
    handleSubmit,
    formstate: { errors, isSubmitting },
    errors,
    reset,
  };
};
