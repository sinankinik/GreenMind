import React from 'react'

const Header = () => {

    const menuItems = ["Home", "Products", "Contacts"]

    return (
        <div className='flex mx-24 my-11'>
            <div>
                <img src="/img/logo.svg" className='w-[142px] h-[39px]' alt="aaa" />
            </div>
            <div className='flex ml-24 font-poppins font-medium text-lg text-[#1E1E1E] opacity-50'>
                {
                    menuItems.map((item, index) => (
                        <p key={item} className="mr-12 text-[#1E1E1E] opacity-50 hover:opacity-100 cursor-pointer">
                            {item}
                        </p>
                    ))
                }
            </div>
            <div className='flex ml-[479px] items-center'>
                <img src="/img/cart.svg" className='mr-[49.5px] w-[22.5px] h-[22.5px]' alt="" />
                <img src="/img/login.svg" className='mr-[49.5px] w-[18px] h-[18px]' alt="" />
                <img src="/img/line.svg" className='mr-[49.5px] w-6' alt="" />
                <img src="/img/menu.svg" className='mr-[49.5px] w-[21.6px] h-[10.5px]' alt="" />
            </div>
        </div>
    )
}

export default Header