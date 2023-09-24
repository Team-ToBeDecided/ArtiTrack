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
  IconButton,
} from "@material-tailwind/react";


export function DialogGSTIN() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
     
      <img onClick ={handleOpen} className='w-[63px] h-[42px] mt-10 cursor-pointer' src={ThreePin} alt="" srcset="" />

      <Dialog size='xl' open={open} handler={handleOpen}>
        <DialogHeader style={{fontSize: '1rem'}}>Steps to register a GSTIN details</DialogHeader>
        <DialogBody divider style={{fontSize: '0.85rem',color: 'black'}} >
          <ol>
            <li>1. Visit the Official GST Portal: </li>
            <li>You can access the official GST portal for India by visiting https://www.gst.gov.in.</li>
            <br />
            <li>2. GST Registration Information: </li>
            <li>On the homepage of the GST portal, you'll find various options and links. Look for a section related to GST registration. It may be labeled as "New Registration" or something similar.</li>
            <br />
            <li>3. Click on "New Registration": </li>
            <li>Click on the "New Registration" link to start the GST registration process.</li>
            <br />
            <li>4. GST Registration Process: </li>
            <li>Follow the instructions provided on the GST portal to complete the registration process. This may include filling out an online application form, providing the required documents and information, and making any necessary payments.</li>
            <br />
            <li>5. Document Upload: </li>
            <li>You will likely be required to upload certain documents, such as business registration certificates, PAN (Permanent Account Number), address proof, bank account details, and more. Ensure that you have these documents ready in digital format for uploading.</li>
            <br />
            <li>6. Payment of Fees: </li>
            <li>Pay any applicable registration fees as per the guidelines provided on the portal. The payment process should also be explained on the portal.</li>
            <br />
            <li>7. Tracking Application Status: </li>
            <li>After submitting your application, you can track its status on the GST portal. This will help you stay informed about the progress of your registration.</li>
            <br />
            <li>8. Receiving GSTIN: </li>
            <li>Once your application is approved, you will receive your Goods and Services Tax Identification Number (GSTIN) through the portal. This is your unique tax registration number for GST transactions.</li>
            <br />
            <li>9. Compliance: </li>
            <li>After obtaining your GSTIN, ensure that you comply with all GST regulations, including filing periodic GST returns and maintaining proper records.</li>
            <br />
            <li>10. Additional Assistance: </li>
            <li>If you encounter any issues or have questions during the registration process, the GST portal provides contact information and helpdesk support.</li>
            <br />
          </ol>
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


export function DialogPehchaan() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
     
      <img onClick ={handleOpen} className='w-[63px] h-[42px] mt-10 cursor-pointer' src={ThreePin} alt="" srcset="" />

      <Dialog size='xl' open={open} handler={handleOpen}>
        <DialogHeader style={{fontSize: '1rem'}}>Steps to register a PEHCHAAN details</DialogHeader>
        <DialogBody divider style={{fontSize: '0.85rem',color: 'black'}} >
          <ol>
            <li>1. Visit the official website of the Ministry of Textiles or the specific government portal dedicated to the Pehchan Card scheme for artisans.</li>
            <br />
            <li>2. Look for the registration or enrollment section on the website. It may be labeled as "Register," "Enroll," or "Apply for Pehchan Card."</li>
            <br />
            <li>3. Fill in the required information in the registration form. This may include details such as name, address, Aadhaar Card number, mobile number, and the craft practiced by the artisan."</li>
            <br />
            <li>4. Submit the registration form and wait for verification. The field functionaries of the Textile Ministry will verify the provided information and authenticate the registration."</li>
            <br />
            <li>5. Once the registration is approved, you will receive an Aadhaar-linked Pehchan Card. This card serves as a universal identity for handicraft artisans and enables them to avail the benefits of various government schemes."</li>
            <br />
            <li>6. The Pehchan Card also facilitates financial assistance and benefits for registered artisans. These benefits may include easy access to loans, life insurance coverage, and financial support for children's education."</li>
            <br />
          </ol>
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



export function DialogGItracking() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
     
      <img onClick ={handleOpen} className='w-[63px] h-[42px] mt-10 cursor-pointer' src={ThreePin} alt="" srcset="" />

      <Dialog size='xl' open={open} handler={handleOpen}>
        <DialogHeader style={{fontSize: '1rem'}}>Learning About Geographical Indication (GI) tag</DialogHeader>
        <DialogBody divider style={{fontSize: '0.85rem',color: 'black'}} >
          <ol>
            <li>1. Determine Eligibility: </li>
            <li>Confirm that your product possesses unique qualities or characteristics linked to its geographical origin, meeting the criteria for a GI tag.</li>
            <br />
            <li>2. Identify the Appropriate Authority: </li>
            <li>Research and identify the government authority or organization responsible for GI tag registrations in your country or region.</li>
            <br />
            <li>3. Gather Necessary Documentation: </li>
            <li>Collect required documents and information, including: </li>
            <li> - Detailed product description highlighting its unique attributes.</li>
            <li> - Evidence of the product's association with a specific geographical region.</li>
            <li> - Maps or geographic coordinates defining the region's boundaries.</li>
            <li> - Information about producers or the relevant association.</li>
            <li> - Any applicable production or processing regulations.</li>

            <br />
            <li>4. Submit the Application: </li>
            <li>Prepare a comprehensive application that includes all essential documentation as per the authority's guidelines.</li>
            <br />
            <li>5. Examination and Verification: </li>
            <li>The authority will review the application, ensuring compliance with relevant laws and regulations. Site visits or inspections may be conducted to validate the claims.</li>
            <br />
            <li>6. Publication and Opposition Period: </li>
            <li>The completed application may be publicly published or gazetted for a specified duration. During this period, interested parties or the public can raise objections or opposition to the registration.</li>
            <br />
            <li>7. Registration and GI Tag Issuance: </li>
            <li>If there are no valid objections or oppositions, the authority will approve the application and officially issue the GI tag for the product. This recognition provides legal protection under GI laws.</li>
            <br />
          </ol>
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
          <div>
            < DialogGSTIN />
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
              <DialogPehchaan />
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
              <DialogGItracking />
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
