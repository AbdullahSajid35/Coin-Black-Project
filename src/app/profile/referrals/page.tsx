"use client"
import Card from '@/app/components/StyleComponents/Card'
import React, { useState } from 'react'
import TextInput from '@/app/components/input/TextInput'
function page() {
  const [showCancleButton,setShowCancleButton] = useState(true)
  return (
    <Card>
      <div className='flex flex-col gap-5'>
        <h1 className='text-[36px] '>REFERAL CODE</h1>
        <div className='flex flex-col gap-3'>
          <p className=' text-[15px] text-[#A0A0A0]'>Here you can apply a referral code if you have one!</p>
          <TextInput  label='Referral Code' placeholder='Enter referral code' />
          {showCancleButton ? <button onClick={()=>setShowCancleButton(!showCancleButton)} className='self-start border border-[#242424] p-3 rounded-lg '>Apply Code</button> : <p className='italic text-[13px] text-[#A0A0A0] '>Referral Code was applied</p>}
        </div>
      </div>
    </Card>
  )
}

export default page