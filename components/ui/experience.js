import React from 'react';

const Experience = (data) => {
    const { name, skill } = data
    const dataSkill = [...skill]
    return (
        <div>
            <div className="drop-shadow-2xl mt-4 flex flex-col rounded-md p-4 transition ease-in-out duration-500 bg-[#161311] hover:bg-gradient-to-tr hover:from-[#121212] hover:to-[#1f1e1e]">
                <div className="font-bold font-deca text-xl text-neutral-400">
                    {name}
                </div>
                <div className="flex flex-wrap gap-x-1 gap-y-2 justify-start text-[12px] font-RubikRegular my-4">
                    {
                        dataSkill.map((item, index) => {
                            return (
                                <p key={index} className="text-neutral-400 border border-neutral-600 rounded-md text-center p-2 text-[12px]">
                                    {item}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Experience;
