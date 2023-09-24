import React from 'react'
import GSTIN from '../assets/random/GSTIN.png'
import ThreePin from '../assets/random/ThreePin.png'
import Verify from '../assets/random/Verify.png'
import QR from '../assets/random/QR.png'
import PreserveDetails from '../assets/random/PreserveDetails.png'
import Addre from '../assets/random/Addre.png'
import GItag from '../assets/random/GItag.png'
import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


export function DialogDefault() {
    const [open, setOpen] = React.useState(false);
   
    const handleOpen = () => setOpen(!open);
   
    return (
      <>
        <Button onClick={handleOpen} variant="gradient">
          Open Dialog
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            The key to more success is to have a lot of pillows. Put it this way,
            it took me twenty five years to get these plants, twenty five years of
            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
            getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }









export const InfoPan = () => {

    return (
        <>
            <div className='bg-white'>
                <div className='p-16 w-8/12 text-xs'>
                    <p className='font-semibold text-5xl'>Information Panel</p>
                    <div className="mt-4 w-3/12 h-[2px] bg-black"></div>
                </div>
                <div className='p-16 flex gap-[290px]'>
                    <div>
                        <p className='text-5xl w-[450px]'>Creating your <span className='font-bold'>GSTIN</span> as an Artisan</p>
                        <p className='text-md font-body w-[527px]'>A GSTIN (Goods and Services Tax Identification Number) is essential for businesses in GST-regulated countries like India. It serves as a unique identifier for tax compliance, enabling accurate reporting, input tax credit claims, and transparent transactions. GSTIN ensures legal compliance, prevents double taxation, and supports efficient tax administration, making it a vital component of the GST system.</p>
                    </div>
                    <div className='flex gap-[140px]'>
                        <div className=''>
                            <img className='w-[63px] h-[42px] mt-10' src={ThreePin} alt="" srcset="" />
                            <p className='w-[162px] pt-3 font-body text-2xl'>Click to Learn the Steps</p>
                        </div>
                        <img className='w-[350px] h-[262px]' src={GSTIN} alt="gstin" srcset="" />
                    </div>
                </div>
            </div>


            <div className='bg-[#BFAEA4] text-white'>

                <div className='p-16 flex gap-[290px]'>
                    <div>
                        <p className='text-5xl w-[450px]'>Creating your Pehchaan as an Artisan</p>
                        <p className='text-md font-body w-[527px]'>Creating your Pehchaan as an artisan is a canvas of self-expression. Craft a card with your name, contact details, and a glimpse of your artistic world. Let it reflect your passion, skills, and unique style, a tangible representation of your artisan identity. With each creation, your Pehchaan card becomes a brushstroke in the masterpiece of your artistic journey.</p>
                    </div>
                    <div className='flex gap-[140px]'>
                        <div className=''>
                            <img className='w-[63px] h-[42px] mt-10' src={ThreePin} alt="" srcset="" />
                            <p className='w-[162px] pt-3 font-body text-2xl'>Click to Learn the Steps</p>
                        </div>
                        <div>
                            <div class="grid grid-cols-2 gap-4">
                                <div><img src={Addre} alt="" srcset="" /></div>
                                <div><img src={Verify} alt="" srcset="" /></div>
                                <div><img src={QR} alt="" srcset="" /></div>
                                <div><img src={PreserveDetails} alt="" srcset="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white'>
                <div className='p-16 flex gap-[270px]'>
                    <div>
                        <p className='text-5xl w-[550px]'>Learn About Geographical Indication (GI) tag</p>
                        <p className='text-md font-body w-[527px]'>A Geographical Indication (GI) tag is a certification that identifies a product as originating from a specific geographical location. It protects the product's unique qualities, reputation, and traditional production methods associated with that region. GI tags help consumers make informed choices and promote economic benefits for local communities. They are often awarded to agricultural, handicraft, or industrial products closely tied to the geographical area of production. GI tags can be a powerful tool in preserving cultural heritage, promoting local industries, and preventing the misuse of regional names for products.</p>
                    </div>
                    <div className='flex gap-[140px]'>
                        <div className=''>
                            <img className='w-[63px] h-[42px] mt-10' src={ThreePin} alt="" srcset="" />
                            <p className='w-[162px] pt-3 font-body text-2xl'>Click to Learn the Steps</p>
                        </div>
                        <img className='h-4/6' src={GItag} alt="gstin" srcset="" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default InfoPan
