import React from 'react'

const BestSellings = () => {
    return (
        <div className='grid grid-cols-4 gap-12 mt-24 mx-24'>
            <div className=''>
                <h1 className='font-poppins font-bold text-[32px] text-[#1E1E1E]'>Best Selling Plants</h1>
                <p className='font-poppins font-medium text-lg text-[#1E1E1E] opacity-50 mr-[80px] mt-4'>Easiest way to healthy life by buying your favorite plants </p>
                <button className='flex items-center bg-primary w-[168px] h-[51px] rounded-lg mt-6 pl-6'>
                    <h3 className='font-poppins font-medium text-lg text-[#1E1E1E]'>See more</h3>
                    <img src="/img/arrow.svg" className='w-[21px] h-[11.25px] ml-[11.25px]' alt="" />
                </button>
            </div>
            <div className=''>
                <img src="/img/product2.png" alt="product1" className='w-[299.33px] h-[363px]' />
                <h2 className='font-poppins font-medium text-lg text-[#1E1E1E] mt-3 mb-2'>Artificial Plants</h2>
                <h3 className='font-poppins font-medium text-lg text-[#1E1E1E] opacity-50'>₱ 900.00</h3>
            </div>
            <div className=''>
                <img src="/img/product3.png" alt="product1" className='w-[299.33px] h-[363px]' />
                <h2 className='font-poppins font-medium text-lg text-[#1E1E1E] mt-3 mb-2'>Artificial Plants</h2>
                <h3 className='font-poppins font-medium text-lg text-[#1E1E1E] opacity-50'>₱ 3,500.00</h3>
            </div>
            <div className=''>
                <img src="/img/product1.png" alt="product1" className='w-[299.33px] h-[363px]' />
                <h2 className='font-poppins font-medium text-lg text-[#1E1E1E] mt-3 mb-2'>Natural Plants</h2>
                <h3 className='font-poppins font-medium text-lg text-[#1E1E1E] opacity-50'>₱ 1,400.00</h3>
            </div>
        </div>
    )
}

export default BestSellings