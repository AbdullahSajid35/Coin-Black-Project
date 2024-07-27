import React from 'react'
import Image from 'next/image'
import X from '@/../public/profile-page/x.svg'
import  Baloo from '@/../public/profile-page/baloo.svg'
import Batukh from '@/../public/profile-page/btukh.svg'
function BottomBar() {
  return (
    <div className='  flex flex-col p-3 gap-5 border  border-[#242424] bg-[#111111] rounded-lg'>
            <div className='flex justify-between'>
                <h1 className=' text-[20px]  '>SUPPORT:</h1>
                <p>support@gmail.com</p>
            </div>
            <div className='flex justify-between pt-2  border-t  border-t-[#242424] '>
                <h1 className=' text-[20px]  '>JOIN OUR COMMUNITY:</h1>
                <ul className='flex gap-2'>
                    <li><Image src={Baloo} alt="Baloo" /></li>
                    <li><Image src={X} alt="X" /></li>
                    <li><Image src={Batukh} alt="Batukh" /></li>
                </ul>
            </div>
        </div>
  )
}

export default BottomBar