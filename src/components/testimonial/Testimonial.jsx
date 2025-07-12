import React from 'react'

const Testimonial = () => {
    return (
        <div className='ml-24 mt-24 mb-[230px] font-poppins font-bold text-[32px]'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3>What customers say about</h3>
                    <h3>GREEMIND?</h3>
                </div>
                <div>
                    <img src="/img/slider.svg" className='mr-24' />
                </div>
            </div>
            <div className='flex overflow-hidden'>
                <div>
                    <div className='bg-primary w-[800px] h-[330px] rounded-xl mt-12 px-12 pt-12 mr-12'>
                        <p className='font-medium text-[18px] text-[#1E1E1E] opacity-75'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        <div className='flex'>
                            <img src="/img/testimonial1.png" alt="" />
                            <div className='flex justify-between mt-[54px]'>
                                <div className='font-poppins font-bold text-[18px] ml-4'>
                                    <h4>John Doe</h4>
                                    <h5 className='font-medium text-[14px] text-[#131313] opacity-50'>Youtuber</h5>
                                </div>
                                <div className='flex ml-[435px]'>
                                    <img src="/img/star.svg" className='w-5 h-[18.75px]' />
                                    <h4 className='font-poppins font-bold text-[18px]'>4.5</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-primary w-[800px] h-[330px] rounded-xl mt-12 px-12 pt-12'>
                        <p className='font-medium text-[18px] text-[#1E1E1E] opacity-75'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        <div className='flex'>
                            <img src="/img/testimonial2.png" alt="" />
                            <div className='flex justify-between mt-[54px]'>
                                <div className='font-poppins font-bold text-[18px] ml-4'>
                                    <h4>John Doe</h4>
                                    <h5 className='font-medium text-[14px] text-[#131313] opacity-50'>Youtuber</h5>
                                </div>
                                <div className='flex ml-[435px]'>
                                    <img src="/img/star.svg" className='w-5 h-[18.75px]' />
                                    <h4 className='font-poppins font-bold text-[18px]'>4.5</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial