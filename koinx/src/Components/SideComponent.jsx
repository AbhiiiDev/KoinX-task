import React from 'react';
import TrendingCoins from './TrendingCoins';

const SideComponent = () => {
  return (
    <div className="ml-4 mr-4 mt-3 ">
      <div className=" bg-blue-700 text-white rounded-md md:h-[515px] h-[384px] sm:h-96 md:w-[406px] w-full flex flex-col items-center gap-8 overflow-hidden">
        <h4 className="text-center font-bold mt-4 text-2xl p-2 px-3">
          Get started with KoinX for FREE
        </h4>
        <p className='w-[328px] h-[68px] mb-6 p-2'>
        With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.
        </p>
        <button className='bg-white w-[237px] h-[48px] text-black font-semibold text-lg rounded-lg mt-6  '>Get Started for FREE</button>
      </div>
      <div className="sm:col-span-2 ">
        <TrendingCoins />
      </div>
    </div>
  );
};

export default SideComponent;
