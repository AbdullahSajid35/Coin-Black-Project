import React from 'react'
import EyePasswordShow from '@/../public/profile-page/eye.svg'
import Image from 'next/image'
function PasswordInput({label='Password', placeholder='Enter password' }) {
  return (
    <div className='flex flex-col gap-1'>
              <label >{label}</label>
              <div className='relative w-full sm:w-[300px]'>
                <input placeholder={placeholder} type="password" className='bg-[#1D1D1D] p-2 rounded-lg w-full ' />
                <div className='absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer'>
                  <Image  src={EyePasswordShow} alt='show-password' />
                </div>
              </div>
    </div>
  )
}

export default PasswordInput