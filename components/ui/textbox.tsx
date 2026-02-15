'use client';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const Textbox = ({
  classname,
  placeholder,
  type = 'text',
  id,
  ...props
}: {
  classname?: string;
  placeholder: string;
  type: string;
  id: string;
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className='flex h-14 w-full justify-between rounded-[12px] border border-neutral-900 bg-neutral-950 p-3 px-3 py-3.25'>
      <input
        {...props}
        id={id}
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        className={cn(
          'text-md font-regular w-full text-neutral-600 focus:outline-none',
          classname
        )}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <button onClick={handleShow} type='button' className='text-neutral-600'>
          {show ? <EyeOff /> : <Eye />}
        </button>
      )}
    </div>
  );
};

export default Textbox;
