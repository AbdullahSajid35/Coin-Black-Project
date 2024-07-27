 "use client";
import Image from 'next/image'
import React from 'react'
import ProfilePic from '@/../public/profile-pic.webp'
import PInfo from '../../../../public/profile-page/PInfo'
import Security from '../../../../public/profile-page/Security'
import Wallet from '../../../../public/profile-page/Wallet'
import Emblem from '../../../../public/profile-page/Emblem'
import Referral from '../../../../public/profile-page/Referral'
import Link from 'next/link'
import logout from '@/../public/profile-page/logout.svg'
import X from '@/../public/profile-page/x.svg'
import  Baloo from '@/../public/profile-page/baloo.svg'
import Batukh from '@/../public/profile-page/btukh.svg'
import { usePathname } from 'next/navigation';
function ProfileSidebar() {
    const pathname=usePathname();
    console.log(pathname)
const sideLinks=[
    {name:'Personal Information',href:'/profile/personal-info',icon :PInfo },
    {name:'Emblems',href:'/profile/emblem',icon :Emblem },
    {name:'Securtiy Settings',href:'/profile/security-settings',icon :Security },
    {name:'Connected Wallets',href:'/profile/connected-wallets',icon :Wallet },
    {name:'Referrals',href:'/profile/referrals',icon :Referral },
]

  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-6 p-3 border border-[#242424] bg-[#111111] rounded-lg'>
            <div className='flex gap-3'>
                <Image width={48} src={ProfilePic} alt='Profile' />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[16px]'>Takeshi Kuroda</h1>
                    <p className='text-[#787A83] text-[14px]'>takeshi@gmail.com</p>
                </div>
            </div>
            <div className='flex flex-col gap-0 px-3'>
                {sideLinks.map((item,i)=>(
                <Link className={` px-5 py-2 rounded-lg  ${pathname===item.href && 'bg-[#1D1D1D]  border border-[#242424]'}`}  href={item.href} key={i} >
                    <div className='flex gap-2'>
                        <span  ><item.icon  color={`${pathname===item.href ? '#ffffff' : "#A0A0A0"  }`} /></span>
                        <span className={`${pathname===item.href ? 'text-[#ffffff]' : 'text-[#A0A0A0]' }`}>{item.name}</span>
                    </div>
                </Link>
                ))}
                <Link  href={'/'}>
                <div className='flex gap-2 px-5 mt-4  border-t border-[#242424]  py-1'>
                    <Image src={logout} alt='Logout' />
                    <span  >Logout</span>
                </div>
                </Link>
                
            </div>
            
        </div>
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
    </div>
  )
}

export default ProfileSidebar