import { PostLogin } from '@/services/auth-services';
import { TLoginSuccessResponse } from '@/types/auth-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { TloginScheme, loginScheme } from '../validations/auth';

export const useLoginForms = () => {
  // const [tokenToSet, setTokenToSet] = useState<string | null>(null);
  // npm i react-hook-form
  // npm i zod
  //npm i @hookform/resolvers

  const router = useRouter();
  // const [errorMessage, setErrorMessage] = useState<string | undefined>(
  //   undefined
  // );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TloginScheme>({ resolver: zodResolver(loginScheme) });

  const post = useMutation({
    mutationFn: async (payload: TloginScheme): Promise<TLoginSuccessResponse> =>
      PostLogin(payload),

    onSuccess: (res: TLoginSuccessResponse) => {
      localStorage.setItem('token', res?.data?.token || '');
      cookieStore.set('token', res?.data?.token || '');
      router.push('/');
    },
  });

  const onSubmit = async (data: TloginScheme) => {
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
