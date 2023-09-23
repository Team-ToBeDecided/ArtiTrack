import React from 'react'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import pinterest from '../../assets/icons/pinterest.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'

import { BsFacebook } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
const SocialMediaBox = () => {
    return (
        <div className='flex items-center justify-between w-full'>
            <div className='flex items-center justify-center gap-6'>
                <BsFacebook size={30} color='gray' />
                <FaInstagram size={30} color='gray' />
                <AiOutlineTwitter size={30} color='gray' />
                <FaPinterest size={30} color='gray' />
                <FaWhatsapp size={30} color='gray' />
            </div>
            <div>
                <BsHeart size={30} color='gray' />
            </div>
        </div>
    )
}

export default SocialMediaBox