import React from 'react';


export default function HomeShimmer() {

  const arr = new Array(6).fill(10)
  console.log(arr)
  return (
    <div className='my-10'>

      <div className="mb-14 flex justify-center ">
        <div className="flex items-center">
          <div className=' bg-gray-400 h-[20px] p-5 px-24 mx-4 animate-pulse rounded-sm	'></div>
          <button
            type="submit"
            className="bg-gray-400 animate-pulse rounded-sm px-14 py-5"
          >
          </button>
        </div>
      </div>

      <div className="container flex flex-wrap justify-between mx-auto">

        {arr.map(() => (
          // <ShowProduct 
          <div className="max-w-sm w-sm w-[325px] rounded overflow-hidden shadow-lg mb-5 mx-3 border border-gray-200 hover:scale-105 duration-150 hover:shadow-2xl ">

              <div className="w-full flex justify-center">
                <img
                  className="w-full h-60 object-cover bg-gray-400 animate-pulse "
                  
                />
              </div>
            <div className="px-2 py-2 ">
              <div className="font-bold text-xl bg-gray-400 animate-pulse w-3/4 px-1 py-3"></div>
              <div className="font-bold text-xl bg-gray-400 animate-pulse w-1/2 px-1 py-2 my-1"></div>
              <div className="font-bold text-xl bg-gray-400 animate-pulse w-1/3 px-1 py-2"></div>
            </div>
            <div className="px-6 py-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 px-10 py-3 animate-pulse"></span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 px-10 py-3 animate-pulse"></span>

            </div>
          </div>
        ))}
      </div>

    </div >
  )
}
