import React from 'react'
function PasswordInput({label='Password', placeholder='Enter password' }) {
  return (
    <div className='flex flex-col gap-1'>
              <label >{label}</label>
              <div className='relative  w-full sm:w-[300px]'>
                <input placeholder={placeholder} type="text" className='bg-[#1D1D1D] p-2 rounded-lg w-full ' />
              </div>
    </div>
  )
}

export default PasswordInput