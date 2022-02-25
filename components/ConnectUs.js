import React from "react";

const ConnectUs = () => {
  return (
    <div>
      <div className="h-11 bg-gradient-to-r from-purple-300 to-purple-800 flex justify-center items-center">
        Connect Us
      </div>

      <div>
        {[0, 1, 2, 3, 4].map((e, idx) => (
          <div key={idx} className="grid grid-cols-2 gap-3 p-3 ">
            <div className="grid grid-cols-4 gap-2 border border-gray-200 border-solid">
              <div className="col-span-1 bg-purple-500"></div>
              <div className="col-span-3 flex flex-col">
                <p className="text-purple-500 text-sm">+234 45203642</p>
                <p className="text-gray-600 text-xs">FANS</p>
              </div>
            </div>
            <div>
              <button className="bg-gray-200 px-3 py-2 border text-xs border-gray-200 border-solid">
                Like Page
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectUs;
{
  /* <div className='grid grid-cols-2 gap-3 p-3 '>
<div className='grid grid-cols-4 gap-2 border border-gray-200 border-solid'>
    <div className='col-span-1 bg-purple-500'>
        
    </div>
    <div className='col-span-3 flex flex-col'>
        <p className='text-purple-500 text-sm'>203642+</p>
        <p className='text-gray-600 text-xs'>FANS</p>
    </div>
</div>
<div>
    <button className='bg-gray-200 px-14 py-3 border border-gray-200 border-solid'>Like Page</button>
</div>
</div> */
}
