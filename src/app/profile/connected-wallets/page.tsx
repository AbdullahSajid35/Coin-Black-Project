import Card from '@/app/components/StyleComponents/Card'
import React from 'react'

function page() {
  return (
    <Card>
      <div className='flex flex-col gap-5'>
        <h1 className='text-[36px] '>CONNECTED WALLET</h1>
        <div className='flex flex-col gap-3'>
          <p className='text-[15px] text-[#A0A0A0] '>Here you can see and manage your Primary Wallet for in-game earnings, public leaderboards and in-game stats.</p>
          <div className='flex gap-3  flex-col  sm:flex-row '>
            <div className='flex justify-between items-center gap-3 p-3 border  border-[#242424] rounded-lg  '>
              <span className='text-[#A0A0A0]'>0x7a9F...17A9</span>
              <span  className='text-[#2FA306] border border-[#2FA306] rounded-2xl py-1  px-2'>Connected</span>
            </div>
            <button className='p-3 border border-[#242424] rounded-lg ' >Disconnect Wallet</button>
          </div>
        </div>
      </div>
      
    </Card>
  )
}

export default page