'use client';
import { Button } from '@/components/ui/button';
import Textbox from '@/components/ui/textbox';

import Link from 'next/link';
import { useRegisterForms } from '../hooks/use-register';

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    onSubmit,
    reset,
    isFailed,
    isSuccess,
    serverError,
    formstate: { errors, isSubmitting },
  } = useRegisterForms();
  return (
    <form
      className='flex w-full flex-col gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-0.5'>
        <p className='text-sm font-bold'>Name</p>
        <Textbox
          {...register('name')}
          id='name'
          placeholder='Enter your email'
          type='text'
        />
        {errors.name && (
          <p className='font-medium text-[#ee1d52]'>{errors.name.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-0.5'>
        <p className='text-sm font-bold'>Username</p>
        <Textbox
          {...register('username')}
          id='username'
          placeholder='Enter your username'
          type='text'
        />
        {errors.username && (
          <p className='font-medium text-[#ee1d52]'>
            {errors.username.message}
          </p>
        )}
      </div>

      <div className='flex flex-col gap-0.5'>
        <p className='text-sm font-bold'>Email</p>
        <Textbox
          {...register('email')}
          id='email'
          placeholder='Enter your email'
          type='email'
        />
        {errors.email && (
          <p className='font-medium text-[#ee1d52]'>{errors.email.message}</p>
        )}
      </div>

      <div className='flex flex-col gap-0.5'>
        <p className='text-sm font-bold'>Number Phone</p>
        <Textbox
          {...register('phone')}
          id='phone'
          placeholder='Enter your number phone'
          type='number'
        />
        {errors.phone && (
          <p className='font-medium text-[#ee1d52]'>{errors.phone.message}</p>
        )}
      </div>

      <div className='flex flex-col gap-0.5'>
        <p className='text-sm font-bold'>Password</p>
        <Textbox
          {...register('password')}
          id='password'
          placeholder='Enter your password'
          type='password'
        />
        {errors.password && (
          <p className='font-medium text-[#ee1d52]'>
            {errors.password.message}
          </p>
        )}
      </div>

      <div className='flex flex-col gap-0.5'>
        <p className='text-sm font-bold'>Confirm Password</p>
        <Textbox
          {...register('confirmPassword')}
          id='confirmpassword'
          placeholder='Enter your confirm password'
          type='password'
        />{' '}
        {errors.confirmPassword && (
          <p className='font-medium text-[#ee1d52]'>
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div>
        {isSuccess && (
          <p className='font-medium text-green-300'>Login Success</p>
        )}
        {isFailed && serverError && (
          <p className='font-medium text-[#ee1d52]'>{serverError}</p>
        )}
        <Button
          type='submit'
          variant={'default'}
          disabled={isSubmitting}
          className='text-md w-full font-bold'
        >
          Submit
        </Button>
      </div>
      <div className='flex justify-center'>
        <p className='text-md font-semibold'>
          Already have an account?{' '}
          <Link href='/login' className='text-md text-primary-300 font-bold'>
            Log In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
