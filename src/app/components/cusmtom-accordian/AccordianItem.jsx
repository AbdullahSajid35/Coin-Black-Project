"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import PInfo from '@/../public/profile-page/PInfo'
import Security from '@/../public/profile-page/Security'
import Wallet from '@/../public/profile-page/Wallet'
import Emblem from '@/../public/profile-page/Emblem'
import Referral from '@/../public/profile-page/Referral'

function AccordianItem({children,...props}) {
   
  return (
     <li>
        {children}
     </li>
  )
}

export default AccordianItem