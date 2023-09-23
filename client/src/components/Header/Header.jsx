import React from 'react'

const Header = ({ text }) => {
    return (
        <div className='flex flex-col items-center justify-start w-full gap-5 m-0 lg:items-start lg:ml-6'>
            <div className='text-5xl font-bold'>
                {text}
            </div>
            <div className='w-24 h-[1px] bg-black' />
        </div>
    )
}

export default Header