import React, { useState } from 'react';
import OrderProp from '../components/Order/OrderProp';

export function ConsumerProfilePage() {
  const [isEditable, setIsEditable] = useState(false);
  const [fname, setFname] = useState('John');
  const [lname, setLname] = useState('Doe');
  const [email, setEmail] = useState('john@example.com');
  const [phone, setPhone] = useState('+91 xxx xxxx xxx');
  const [bio, setBio] = useState('This is my bio');

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleFNameChange = (e) => {
    setFname(e.target.value);
  };

  const handleLNameChange = (e) => {
    setLname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  return (
    <>
    <div className="flex items-center justify-end h-screen">
      {/* Left Side (Photo) */}
      <div className="mr-6">
        <div className="w-56 h-56 mr-44 bg-gray-300 rounded-full"></div>
        <div className="m-4 mb-44 text-gray-900">
          <p>{fname}</p>
          <p>{lname}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{bio}</p>
        </div>
      </div>

      {/* Right Side (Input Fields and Display Data) */}
      <div className="w-1/2">
        <div className="mb-4">
          <label htmlFor="fname" className="block text-gray-600 font-light">First Name</label>
          <input
            type="text"
            id="fname"
            value={fname}
            placeholder="Enter your name"
            className={`w-2/3 px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 ${isEditable ? 'bg-white' : 'bg-gray-200'}`}
            onChange={handleFNameChange}
            readOnly={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lname" className="block text-gray-600 font-light">Last Name</label>
          <input
            type="text"
            id="lname"
            value={lname}
            placeholder="Enter your name"
            className={`w-2/3 px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 ${isEditable ? 'bg-white' : 'bg-gray-200'}`}
            onChange={handleLNameChange}
            readOnly={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-light">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            className={`w-2/3 px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 ${isEditable ? 'bg-white' : 'bg-gray-200'}`}
            onChange={handleEmailChange}
            readOnly={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-600 font-light">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            placeholder="Enter your Phone Number"
            className={`w-2/3 px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 ${isEditable ? 'bg-white' : 'bg-gray-200'}`}
            onChange={handlePhoneChange}
            readOnly={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-600 font-light">Bio</label>
          <textarea
            id="bio"
            value={bio}
            placeholder="Enter your bio"
            className={`w-2/3 px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 ${isEditable ? 'bg-white' : 'bg-gray-200'}`}
            rows="4"
            onChange={handleBioChange}
            readOnly={!isEditable}
          ></textarea>
        </div>

        <button
          className="border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2"
          onClick={toggleEdit}
        >
          {isEditable ? 'Save' : 'Edit'}
        </button>

        {/* Display Data Below Photo */}
        
      </div>
    </div>
    <div className='pt-4 pl-4 pr-4 ml-72 w-8/12 text-xs'>
    <p className='font-semibold text-5xl' >Your Past Orders</p>
    </div>
    <OrderProp/>
    
    </>
  );
}

export default ConsumerProfilePage;
