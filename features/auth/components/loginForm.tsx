'use client';
import { Button } from '@/components/ui/button';
import Textbox from '@/components/ui/textbox';

import Link from 'next/link';
import { useLoginForms } from '../hooks/use-login';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formstate: { errors, isSubmitting },
    onSubmit,
    errorMessage,
    reset,
    isFailed,
    isSuccess,
  } = useLoginForms();
  return (
    <form
      className='flex w-full flex-col gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Username */}
      <div className='flex flex-col gap-0.5'>
        <p className='text-sm font-bold'>Email</p>
        <Textbox
          {...register('email')}
          id='email'
          placeholder='Enter your email'
          type='text'
        />
        {errors.email && (
          <p className='text-sm font-medium text-[#ee1d52]'>
            {errors.email.message}
          </p>
        )}
      </div>
      {/* Password */}
      <div className='flex flex-col gap-0.5'>
        <p className='text-sm font-bold'>Password</p>
        <Textbox
          {...register('password')}
          id='password'
          placeholder='Enter your password'
          type='password'
        />
        {errors.password && (
          <p className='text-sm font-medium text-[#ee1d52]'>
            {errors.password.message}
          </p>
        )}
      </div>
      {/* Button */}
      <div>
        {isSuccess && (
          <p className='text-sm font-medium text-green-300'>Login Success</p>
        )}
        {isFailed && (
          <p className='text-sm font-medium text-[#ee1d52]'>{errorMessage}</p>
        )}
        <Button
          type='submit'
          disabled={isSubmitting}
          className='text-md w-full font-bold'
        >
          Sign In
        </Button>
      </div>
      <div className='flex justify-center'>
        <p className='text-md font-semibold'>
          Don't have an account?{' '}
          <Link href='/register' className='text-md text-primary-300 font-bold'>
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
