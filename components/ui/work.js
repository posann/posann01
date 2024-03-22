import WORK_HISTORY from '@/app/utils/constant/workhistory';
import React from 'react';

const Work = () => {
    return (
        <div>
            <div className="my-4">
              <h1 className="font-RubikBold text-2xl text-neutral-200">Work History</h1>
              <div>
              {
                WORK_HISTORY.map((item, index) => {
                  return (
                    <div key={index} className="mt-3 flex justify-between items-center">
                      <div className="flex gap-x-3">
                        <div className="-mt-1">
                          <h3 className="text-[16px] text-neutral-400 font-RubikMedium">{item.position}</h3>
                          <p className="text-[14px] font-RubikRegular text-neutral-500 " >{item.company}</p>
                        </div>
                      </div>
                      <small className="text-[12px] font-RubikMedium text-neutral-300">
                        {item.duration}
                      </small>
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
