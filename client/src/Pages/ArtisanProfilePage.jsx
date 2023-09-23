import React, { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

export function ArtisanProfilePage() {
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
      <div className='p-16 w-8/12 text-xs'>
        <p className='font-semibold text-5xl'>Artisan(Name) Profile</p>
        <div className="mt-4 w-3/12 h-[2px] bg-black"></div>
      </div>
      <div className='pl-16 flex'>
        <div className='w-64 h-64 bg-gray-800'>
          <img src="" alt="" srcSet="" />
        </div>
        <div>
          <div className='pl-28 pt-4 flex gap-48 justify-items-end'>
            <p className='font-semibold text-2xl'>
              {isEditable ? (
                <input
                  style={{ width: '210px', padding: '0' }}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='w-48 border border-gray-300 p-1'
                />
              ) : (
                username
              )}
            </p>
            <button className='bg-[#D9D9D9] text-md h-8 w-48'>Contact Me
            </button>
            <button className='bg-[#D9D9D9] text-md h-8 w-48'>
              <div className='pl-8 pt-1 flex gap-5'>
                <p>Add A Product</p>
                <FiEdit2 />
              </div>
            </button>
          </div>
          <div className='pl-28 pt-2 flex gap-28'>
            <p className='font-semibold text-2xl'>13 Products</p>
            <p className='font-semibold text-2xl'>
              {isEditable ? (
                <input
                  style={{ width: '250px', padding: '0' }}

                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-48 border border-gray-300 p-1'
                />
              ) : (
                email
              )}
            </p>
            <p className='font-body text-2xl'>
              {isEditable ? (
                <input
                  style={{ width: '210px', padding: '0' }}

                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='w-48 border border-gray-300 p-1'
                />
              ) : (
                phone
              )}
            </p>
          </div>
          <div className='pl-28 pt-2 flex gap-44 '>
            <p className='font-semibold text-2xl'>
              {isEditable ? (
                <input
                  style={{ width: '250px', padding: '0' }}

                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className='w-48 border border-gray-300 p-1'
                />
              ) : (
                fullName
              )}
            </p>
          </div>
          <div className='pl-28 pt-2 flex gap-96 '>
            <p className='font-body text-gray-600 text-xl'>
              {isEditable ? (
                <textarea
                  style={{ width: '380px', padding: '0' }}

                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className='w-48 border border-gray-300 p-1'
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
      <div class="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>09</div>
      </div>
    </>
  );
}

export default ArtisanProfilePage;
