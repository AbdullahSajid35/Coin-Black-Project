"use client"
import React, { useRef } from 'react'
import { useState } from 'react'
function Accordian({children,target}) {
    const [open, setOpen] = useState(false)
    const ref=useRef(null)
  return (
    <div className='flex flex-col gap-3'>
        <div onClick={()=>setOpen(!open)} className='flex justify-between px-5 bg-[#111111] p-3 border border-[#242424] rounded-lg'>
            {target}
            <span  className={`transition-transform ${open ? "rotate-180" : "" } text-[24px] `} >{`${open ? "-" : "+"}   `}</span>
        </div>
        <div  style={{  height :open ? "190px": "0px"   }} className='transition-all' >
        <ul ref={ref} className={`flex flex-col gap-3 bg-[#111111] p-3 border border-[#242424] transition-all rounded-lg ${open ? 'block' : 'hidden'} `}>
            {children}
        </ul>
        </div>
    </div>
    
  )
}

export default Accordian