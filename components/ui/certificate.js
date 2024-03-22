import { CERTIFICATES } from '@/app/utils/constant/certificates';
import Link from 'next/link';
import React from 'react';

const Certificate = () => {
    return (
        <div>
            <div className="my-4">
              <h1 className="font-RubikBold text-2xl text-neutral-200">Certificates</h1>
              <div className='flex flex-row gap-x-2 flex-wrap justify-start items-center'>
              {
                CERTIFICATES.map((item, index) => {
                  return (
                    <div key={index} className="mt-3 flex items-center border rounded-md border-neutral-600">
                        <Link href={item.link} target={item.target}>
                            <p className="p-2 text-[12px] font-RubikRegular text-neutral-400">{item.title}</p>
                        </Link>
                    </div>
                  )
                })
              }
              </div>
            </div>
        </div>
    );
}

export default Certificate;
