
"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ProfilePic from '@/../public/profile-pic.webp'
import PInfo from '@/../public/profile-page/PInfo'
import Security from '../../../../public/profile-page/Security'
import Wallet from '../../../../public/profile-page/Wallet'
import Emblem from '../../../../public/profile-page/Emblem'
import Referral from '../../../../public/profile-page/Referral'
import Link from 'next/link'
import logout from '@/../public/profile-page/logout.svg'
import Accordian from  '@/app/components/cusmtom-accordian/Accordian'
import AccordianItem from  '@/app/components/cusmtom-accordian/AccordianItem'
function MobileSidebar() {
    const [selectedItem,setSelectedItem]=useState('/profile/personal-info')
    const pathname = usePathname()
    const sideLinks=[
        {name:'Personal Information',href:'/profile/personal-info',icon :PInfo },
        {name:'Emblems',href:'/profile/emblem',icon :Emblem },
        {name:'Securtiy Settings',href:'/profile/security-settings',icon :Security },
        {name:'Connected Wallets',href:'/profile/connected-wallets',icon :Wallet },
        {name:'Referrals',href:'/profile/referrals',icon :Referral },
    ]

    useEffect(()=>{
        setSelectedItem(pathname)
    },[pathname])

  return (
    <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-center gap-3'>
            <Image src={ProfilePic} alt='profile-pic' />
            <div className='flex flex-col'>
                <span className='text-[16px]' >   Takeshi Kuroda</span>
                <span  className='text-[13px]  text-[#A0A0A0] ' >takeshi@gmail.com</span>
            </div>
        </div>
        <Accordian   target={
          sideLinks.filter((item)=>item.href===selectedItem).map((item,i)=>(
                <Link className='flex gap-3 items-center  text-[24px] ' href={item.href}>
                    <item.icon  width={'24px'} height={'24px'} color={`${pathname===item.href ? 'white' : '#A0A0A0' } `} />
                    <span  className={`${pathname===item.href ? 'text-white' : 'text-[#A0A0A0]' }`} >{item.name}</span>
                </Link>

          
        ))
    } >
        {
            sideLinks.filter((item)=>item.href!==selectedItem).map((item,i)=>(
               <AccordianItem>
                    <Link className='flex gap-3' href={item.href}>
                        <item.icon  color={`${pathname===item.href ? 'white' : '#A0A0A0' } `} />
                        <span  className={`${pathname===item.href ? 'text-white' : 'text-[#A0A0A0]' }`} >{item.name}</span>
                    </Link>

               </AccordianItem>
            ))
        }
            <AccordianItem>
                <Link  className='flex gap-3 border-t border-[#242424] ' href={'/'}>
                    <Image src={logout} alt='Logout' />
                    <span  >Logout</span>
                </Link>
            </AccordianItem>
    </Accordian>
    </div>
  )
}

export default MobileSidebar