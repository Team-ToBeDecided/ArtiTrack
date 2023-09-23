import React from 'react'
import { FiEdit2 } from 'react-icons/fi'

export function ArtisanProfilePage() {
  return (
    <>
       <div className='p-16 w-8/12 text-xs'>
      <p className='font-semibold text-5xl'>Artisan(Name) Profile</p>
      <div className="mt-4 w-3/12 h-[2px] bg-black"></div>
    </div>
    <div className='pl-16 flex'>
        <div className='w-72 h-72 bg-gray-800'></div>
        <div className='pl-28 pt-4 flex gap-16 justify-between'>
            <p className='font-semibold text-2xl'>Username_of _Artisan</p>
            <button className='bg-[#D9D9D9] text-md h-8 w-32'>Contact Me</button>
            <button className='bg-[#D9D9D9] text-md h-8 w-52'>Add A Product<FiEdit2 /></button>

        </div>

    </div>
    </>
  )
}

export default ArtisanProfilePage