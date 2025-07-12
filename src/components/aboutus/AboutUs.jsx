import React from 'react'

const AboutUs = () => {
    return (
        <div className='grid place-content-center mt-28 mx-24'>
            <div className='grid place-content-center'>
                <h1 className='font-poppins font-bold text-[32px] text-[#1E1E1E]'>About us</h1>
            </div>
            <div className='grid place-content-center'>
                <p className='font-poppins font-medium text-[18px] text-[#1E1E1E] opacity-50 mt-6'>Order now and appreciate the beauty of nature</p>
            </div>
            <div className='grid grid-cols-3 place-content-center mt-12'>
                <div className='grid justify-items-center content-center mr-6'>
                    <div className='bg-primary w-24 h-24 rounded-full flex justify-center items-center'>
                        <img src="/img/large.svg" className='w-10 h-10' />
                    </div>
                    <h3 className='font-poppins font-bold text-lg mt-6'>Large Assortment</h3>
                    <p className='font-poppins font-medium text-lg text-[#1E1E1E] opacity-50 mt-3 text-center'>we offer many different types of products with fewer variations in each category.</p>
                </div>
                <div className='grid justify-items-center content-center mr-6'>
                    <div className='bg-primary w-24 h-24 rounded-full flex justify-center items-center'>
                        <img src="/img/shipping.svg" className='w-10 h-10' />
                    </div>
                    <h3 className='font-poppins font-bold text-lg mt-6'>Fast & Free Shipping</h3>
                    <p className='font-poppins font-medium text-lg text-[#1E1E1E] opacity-50 mt-3 text-center'>4-day or less delivery time, free shipping and an expedited delivery option.</p>
                </div>
                <div className='grid justify-items-center content-center'>
                    <div className='bg-primary w-24 h-24 rounded-full flex justify-center items-center'>
                        <img src="/img/large.svg" className='w-10 h-10' />
                    </div>
                    <h3 className='font-poppins font-bold text-lg mt-6'>24/7 Support</h3>
                    <p className='font-poppins font-medium text-lg text-[#1E1E1E] opacity-50 mt-3 text-center'>Answers to any business related inquiry 24/7 and in real-time.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs