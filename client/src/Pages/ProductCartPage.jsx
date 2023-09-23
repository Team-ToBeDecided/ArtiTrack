import React from 'react'
import OrderProp from '../components/Order/OrderProp'

export function ProductCartPage(){
  return (
      <>
    <div className='p-16 w-8/12 text-xs'>
      <p className='font-semibold text-5xl'>Bag</p>
      <div className="mt-4 w-3/12 h-[2px] bg-black"></div>
    </div>
    <OrderProp/>
    </>
  )
}

export default ProductCartPage