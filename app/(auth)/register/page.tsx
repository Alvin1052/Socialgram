import { Button } from '@/components/ui/button';
import Textbox from '@/components/ui/textbox';
import RegisterForm from '@/features/auth/components/registerform';
import { register } from 'module';
import React from 'react';

const Register = () => {
  return (
    <div className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
      <div className='bg-base-black relative z-20 flex w-133 flex-col gap-5 rounded-2xl border border-neutral-900 px-6 py-10'>
        {/* Logo   */}
        <div className='flex items-center justify-center gap-4'>
          <img src='/icons/logo.svg' alt='logo' className='h-8.25 w-8.25' />
          <p className='text-display-xs font-bold'>Sociality</p>
        </div>
        {/* Title */}
        <div className='text-display-xs text-center font-bold'>Register</div>

        <RegisterForm />
      </div>
      <img
        src='/gradient/gradient.svg'
        alt='gradient'
        className='absolute z-10 h-screen w-screen scale-130'
      />
    </div>
  );
};

export default Register;
