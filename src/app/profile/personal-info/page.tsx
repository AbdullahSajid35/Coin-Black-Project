import Card from '@/app/components/StyleComponents/Card'
import Image from 'next/image'
import React from 'react'
import ProfileBigger from '@/../public/profile-page/profile-bigger.webp'
import ProfileEdit from '@/../public/profile-page/profile-edit.svg'
function page() {
  return (
    <>
      <Card>
        <div className='flex flex-col gap-5'>
          <h1 className='  text-[30px] text-white  font-bold'>PERSONAL INFORMATION</h1>
          <div className='flex gap-3'>
            <div className='relative'>
              <Image src={ProfileBigger} alt='profile-bigger' />
              <span  className='absolute right-0 bottom-0 p-1 bg-red-500 border-2 border-white rounded-full ' ><Image src={ProfileEdit} alt='profile-edit' /></span>
            </div>
            <div className='flex flex-col  gap-0 sm:gap-2'>
              <p>Change profile image <span className='text-[#A0A0A0]' >(optional)</span></p>
              <p className='text-[#A0A0A0]'>Acceptable PNG or JPEG file.</p>
              <p className='text-[#A0A0A0]'>File size limit is up to 4MB</p>
            </div>
          </div>
          <div className='flex justify-evenly gap-4 w-full  flex-col sm:flex-row '>
            <div className='flex flex-col gap-2  w-full sm:w-1/2'>
              <label >Username</label>
              <input type="text" value='Takeshi Kuroda' className='bg-[#1D1D1D] rounded-lg outline-none p-2 h-12  ' />
            </div>
            <div className='flex flex-col gap-2  w-full sm:w-1/2'>
              <label >Email address</label>
              <input type="text" value='takeshi@gmail.com' className='bg-[#1D1D1D] rounded-lg outline-none p-2  h-12 ' />
            </div>
          </div>
          <div className='flex gap-3'>
            <button  className='px-2 py-3 bg-[#AF0341] rounded-lg' >Save Changes</button>
            <button className='px-2 py-3 border-2 border-[#1A1A1A]  rounded-lg '>Cancle Changes</button>
          </div>
        </div>
      </Card>
    </>
  )
}

export default page