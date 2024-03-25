import { PROJECTS } from '@/app/utils/constant/projects';
import Link from 'next/link';
import React from 'react';
import { PiDeviceMobile, PiGlobe } from 'react-icons/pi';

const Project = () => {
    return (
        <div>
            <div className="bg-[#14110F] min-w-min rounded-md p-4 border border-neutral-800 my-4 ">
            <div className="text-neutral-400">
                <h1 className="font-RubikBold text-2xl text-neutral-200">Projects</h1>
                    <div className="flex flex-wrap gap-x-1 gap-y-2 justify-start text-[12px] font-RubikRegular my-4">
                        {
                            PROJECTS.map((item, index) => {
                                return (
                                    <Link key={index} href={item.link}>
                                        <div className='cursor-pointer flex flex-row justify-center items-center text-neutral-400 border border-neutral-600 hover:bg-neutral-600  rounded-md text-center p-2 text-[12px] gap-x-2'>
                                            {
                                                item.base == "Website" ? <PiGlobe /> : <PiDeviceMobile/>
                                            }
                                            <p>
                                            {item.title}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                <div className="border border-neutral-700 mt-5" />
            </div>
        </div>
        </div>
    );
}

export default Project;
