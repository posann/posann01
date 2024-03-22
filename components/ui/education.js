import EDUCATIONS from '@/app/utils/constant/educations';
import React from 'react';

const Education = () => {
    return (
        <div>
            <ul className="list">
            {
              EDUCATIONS.map((item, index) => {
                return (
                  <li key={index} >
                    <div className="mt-3 flex justify-between items-center">
                      <div className="flex gap-x-3">
                        <div className="gap-y-5">
                          <h3 className="text-[16px] text-neutral-400 font-RubikMedium">{item.name}</h3>
                          <p className="text-[14px] font-RubikRegular text-neutral-500 " >{item.prodi}</p>
                          <p className="text-[14px] font-RubikMedium text-neutral-500">
                          {item.location}
                        </p>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })
            }
            </ul>
        </div>
    );
}

export default Education;
