import React from 'react'

const Categories = () => {
    return (
        <div className='mt-[168px] grid justify-items-center'>
            <h3 className='font-poppins font-bold text-[32px]'>Categories</h3>
            <p className='font-poppins font-medium text-lg mt-3 text-[#1E1E1E] text-opacity-50 '>Find what you are looking for</p>
            <div className='flex relative w-[1440px] h-[841px] bg-primary mt-24'>
                <img src="/img/category1.png" className='w-[352px] h-[512px] absolute top-[-48px] left-24' />
                <img src="/img/category2.png" className='w-[352px] h-[512px] absolute top-12 left-[544px]' />
                <img src="/img/category3.png" className='w-[352px] h-[512px] absolute top-[-48px] left-[992px]' />
                <div>
                    <h3 className='font-poppins font-bold text-lg mt-[476px] ml-[205.5px]'>Natural Plants</h3>
                    <h3 className='font-poppins font-bold text-lg ml-[1100px]'>Artificial Plants</h3>
                    <h3 className='font-poppins font-bold text-lg mt-12 ml-[630px]'>Plant Accessories</h3>
                    <p className='font-poppins font-medium text-lg text-[#1E1E1E] opacity-50 mt-1 ml-[580px]'>Horem ipsum dolor sit amet, </p>
                    <p className='font-poppins font-medium text-lg text-[#1E1E1E] opacity-50 mt-1 ml-[590px]'>consectetur adipiscing elit.</p>
                    <button className='flex justify-center items-center bg-white w-[147px] h-[51px] ml-[646.5px] mt-6 mr-40 font-poppins font-medium text-lg rounded-lg'>Explore
                        <img src="/img/arrow.svg" className='w-[21px] h-[11.25px] ml-[11.25px]' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories