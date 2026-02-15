import LoginForm from '@/features/auth/components/loginForm';

const Login = () => {
  return (
    <div className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
      <div className='bg-base-black relative z-20 flex w-[446px] flex-col items-center gap-5 rounded-2xl border border-neutral-900 px-6 py-10'>
        {/* Logo   */}
        <div className='flex items-center gap-4'>
          <img src='/icons/logo.svg' alt='logo' className='h-[33px] w-[33px]' />
          <p className='text-display-xs font-bold'>Sociality</p>
        </div>
        {/* Title */}
        <div className='text-display-md text-center font-bold'>
          Welcome Back!
        </div>
        {/* Form */}
        <LoginForm />
      </div>
      <img
        src='/gradient/gradient.svg'
        alt='gradient'
        className='absolute z-10 h-screen w-screen scale-130'
      />
    </div>
  );
};

export default Login;
