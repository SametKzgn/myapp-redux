import React from 'react'

function Filter() {
  return (
    <div className='flex flex-row   justify-center mt-3'>
        <p className='text-gray-400 mt-[4px] '>Filter by region</p>
        <button className='text-[1rem] rounded-[3px] w-12 dark:text-white text-black '>All</button>
        <button className='bg-[#e53e3e] hover:bg-[#a31d1d] m-[5px] rounded-[3px] w-12 text-white transition-colors delay-50'>filter</button>
        <button className='bg-[#d53f8c] hover:bg-[#94215c] m-[5px] rounded-[3px] w-12 text-white transition-colors delay-50'>filter</button>
        <button className='bg-[#7e58d4] hover:bg-[#513297] m-[5px] rounded-[3px] w-12 text-white transition-colors delay-50'>filter</button>
        <button className='bg-[#3182ce] hover:bg-[#1d588f] m-[5px] rounded-[3px] w-12 text-white transition-colors delay-50'>filter</button>
        <button className='bg-[#319795] hover:bg-[#195e5c] m-[5px] rounded-[3px] w-12 text-white transition-colors delay-50'>filter</button>
        <button className='bg-[#38a169] hover:bg-[#1b613b] m-[5px] rounded-[3px] w-12 text-white transition-colors delay-50'>filter</button>

        </div>
  )
}

export default Filter
