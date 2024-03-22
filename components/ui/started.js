'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Animation from '../../public/animation.json';
import Lottie from 'lottie-react';

const Started = () => {
    const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/dashboard'); // Ganti '/home' dengan URL tujuan Anda
    }, 2000); // 3000 milidetik = 3 detik

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className='flex flex-col absolute top-[50%] bottom-[50%] right-[50%] left-[50%] items-center justify-center'>
      <div className='h-[120px] w-[120px]'>
        <Lottie animationData={Animation} loop={true} autoplay />
      </div>
    </div>
  );
}

export default Started;
