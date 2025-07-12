import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-[1440px] h-[400px] bg-primary pt-12 px-24'>
      <div className='grid grid-cols-2'>
        <div className=''>
          <img src="/img/logo.svg" className='w-[107px] h-[29px]' />
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-6'>We help you find</p>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50'>your dream plant</p>
          <div className='flex mt-6'>
            <div className='flex justify-center items-center w-12 h-12 rounded-full border border-slate-700 mr-6'>
              <img src="/img/fb.svg" className='w-[8.66px] h-[15.83px]' />
            </div>
            <div className='flex justify-center items-center w-12 h-12 rounded-full border border-slate-700 mr-6'>
              <img src="/img/insta.svg" className='w-[16.67px] h-[16.67px]' />
            </div>
            <div className='flex justify-center items-center w-12 h-12 rounded-full border border-slate-700 mr-6'>
              <img src="/img/twitter.svg" className='w-5 h-[16.25px]' />
            </div>
          </div>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-24'>2023 all Right Reserved Term of use GREENMIND</p>
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div className='mr-12'>
          <h3 className='font-poppins font-bold text-[18px]'>Company</h3>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-6 cursor-pointer'>Community</p>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-6 cursor-pointer'>Career</p>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-6 cursor-pointer'>Our Story</p>
        </div>
        <div className='mr-12'>
          <h3 className='font-poppins font-bold text-[18px]'>Contact</h3>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-6 cursor-pointer'>Getting Started</p>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-6 cursor-pointer'>Pricing</p>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-6 cursor-pointer'>Resources</p>
        </div>
        <div className='mr-12'>
          <h3 className='font-poppins font-bold text-[18px]'>Information</h3>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-6 cursor-pointer'>About</p>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-6 cursor-pointer'>Product</p>
          <p className='font-poppins font-medium text-[18px] text-[#131313] opacity-50 mt-6 cursor-pointer'>Blog</p>
        </div>
      </div>
    </div>
  )
}

export default Footer