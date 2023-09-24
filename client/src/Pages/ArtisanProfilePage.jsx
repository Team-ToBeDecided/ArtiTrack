import React, { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { ProductCard } from '../components/ProductCard/ProductCard';
import axios from 'axios';
import { useEffect } from 'react';
import { BASE_URL } from '../constants/basUrl';

export function ArtisanProfilePage() {
  const [products, setProducts] = React.useState([]);
  const getProducts = async () => {
    const response = await axios.get(BASE_URL + "/products/product/")
    console.log(response.data)
    setProducts(response.data)
  }
  useEffect(() => {
    getProducts()
  }, [])

  const [isEditable, setIsEditable] = useState(false);
  const [username, setUsername] = useState('Username_of_Artisan');
  const [email, setEmail] = useState('meetgoswami@gmail.com');
  const [phone, setPhone] = useState('+91 93216 42059');
  const [fullName, setFullName] = useState('Full Name_of_Artisan');
  const [bio, setBio] = useState('Products are all hand made by my hands');

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
      <div className='w-8/12 p-16 text-xs'>
        <p className='text-5xl font-semibold'>Artisan Profile</p>
        <div className="mt-4 w-3/12 h-[2px] bg-black"></div>
      </div>
      <div className='flex pl-16'>
        <div className='w-64 h-64 bg-gray-800'>
          <img src="" alt="" srcSet="" />
        </div>
        <div>
          <div className='flex gap-48 pt-4 pl-28 justify-items-end'>
            <p className='text-2xl font-semibold'>
              {isEditable ? (
                <input
                  style={{ width: '210px', padding: '0' }}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='w-48 p-1 border border-gray-300'
                />
              ) : (
                username
              )}
            </p>
            <button className='bg-[#D9D9D9] text-md h-8 w-48'>Contact Me
            </button>
            <button className='bg-[#D9D9D9] text-md h-8 w-48'>
              <div className='flex gap-5 pt-1 pl-8'>
                <p>Add A Product</p>
                <FiEdit2 />
              </div>
            </button>
          </div>
          <div className='flex gap-56 pt-2 pl-28'>
            <p className='text-2xl font-semibold'>13 Products</p>
            <p className='text-2xl font-semibold'>
              {isEditable ? (
                <input
                  style={{ width: '250px', padding: '0' }}

                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-48 p-1 border border-gray-300'
                />
              ) : (
                email
              )}
            </p>
            <p className='text-2xl font-body'>
              {isEditable ? (
                <input
                  style={{ width: '175px', padding: '0' }}

                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='w-48 p-1 border border-gray-300'
                />
              ) : (
                phone
              )}
            </p>
          </div>
          <div className='flex pt-2 pl-28 gap-44 '>
            <p className='text-2xl font-semibold'>
              {isEditable ? (
                <input
                  style={{ width: '250px', padding: '0' }}

                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className='w-48 p-1 border border-gray-300'
                />
              ) : (
                fullName
              )}
            </p>
          </div>
          <div className='flex pt-2 pl-28 gap-96 '>
            <p className='text-xl text-gray-600 font-body'>
              {isEditable ? (
                <textarea
                  style={{ width: '380px', padding: '0' }}

                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className='w-48 p-1 border border-gray-300'
                />
              ) : (
                bio
              )}
            </p>
            <button className='bg-[#D9D9D9] ml-20 text-md h-8 w-32' onClick={handleEditClick}>
              {isEditable ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
      <div className='p-16'>
        <div className='w-12/12 h-[1px] bg-black'></div>
      </div>
      <div class="pl-16 pr-16 pb-16 grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
}

export default ArtisanProfilePage;
