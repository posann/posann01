import WORK_HISTORY from '@/app/utils/constant/workhistory';
import React from 'react';
import { PiArrowFatLineRightDuotone, PiArrowRightBold } from 'react-icons/pi';

const Work = () => {
    return (
        <div>
            <div className="my-4">
              <h1 className="font-RubikBold text-2xl text-neutral-200">Work History</h1>
              <div>
              {
                WORK_HISTORY.map((item, index) => {
                  return (
                    <div key={index} className="mt-3 cursor-pointer flex items-center justify-between">
                      <div className="flex gap-x-3 items-center">
                      <PiArrowFatLineRightDuotone className="text-sm text-neutral-200 mr-2"/>
                      <div className="flex">
                        <div className="-mt-1">
                          <h3 className="text-[16px] hover:text-neutral-300 text-neutral-400 font-RubikMedium">{item.position}</h3>
                          <p className="text-[14px] font-RubikRegular text-neutral-500 " >{item.company}</p>
                        </div>
                      </div>
                      </div>
                      <p className="text-[12px] font-RubikMedium text-end text-neutral-300">
                        {item.duration}
                      </p>
                    </div>
                  )
                }).reverse()
              }
              </div>
            </div>
        </div>
    );
}

export default Work;
