import React from 'react'

export function OrderProp() {

  const Product = () => {
    return (
      <>
        <div className='p-4 ml-72 w-8/12 text-xs'>

          <div className='p-4 flex gap-8'>
            {/* 
    add redirection to product page */}
            <div className='w-[180px] h-[219px] bg-blue-gray-500'>
              <img src="" alt="" />
            </div>
            <div className='ml-12 w-[268px] h-[133px]'>
              <div className='text-xl mt-[76px]'>
                <p className='w-[270px]'>Kalighat Painting With Mount - The Couple (25" x 17")</p>
                <p className='mt-8 text-xs text-gray-500'>Quantity : 1</p>
              </div>
            </div>

            <div className='ml-64 w-[68px] h-[33px]'>
              <div className='text-xl mt-[76px]'>
                <p className='mt-8 text-gray-800'>2000/-</p>
              </div>
            </div>

          </div>

        </div>
      </>
    );
  };

  return (
    <>
      <div className='p-4 ml-72 w-8/12 text-xs'>

        <div className="mt-2 w-12/12 h-[1px] bg-black"></div>
        <div className='p-4 text-gray-500 font-light'>
          <ul className='flex justify-between gap-4'>
            <li>Order Date</li>
            <li>Order No.</li>
            <li>Payment Mode</li>
            <li>Shipping Address</li>
          </ul>
        </div>
        <div className='p-4 text-gray-900 font-regular'>
          <ul className='flex justify-between gap-4'>
            <li>Order Date</li>
            <li>Order No.</li>
            <li>Payment Mode</li>
            <li>Shipping Address</li>
          </ul>
          
        </div>
        <div className="w-12/12 h-[1px] bg-black"></div>

        {/* 
PRODUCT  */}
      </div>

      <Product />
      <Product />

    </>

  );
}

export default OrderProp