"use client";
import Card from '@/app/components/StyleComponents/Card'
import React from 'react'
import PasswordInput from '@/app/components/input/PasswordInput'
// import { IoClose } from "react-icons/io5";
// import { toast } from "sonner";
function page() {
  const passwordData = [
    {label:"Password",placeholder:"Enter your current password"},
    {label:"New password",placeholder:"Enter your new password"},
    {label:"Confirm new password",placeholder:"Confirm your new password"}
  ]

  // const showToast = () => {
  //   console.log("show toast");

  //   toast.custom(
  //     (t) => (
  //       <div className="text-white w-full  flex justify-between px-4 py-2  text-[14px]">
  //         Your password was changed successfully!
  //         <span
  //           className="bg-[#1D1D1D] border-[#242424] w-[25px] h-[25px] rounded-[5px]  flex items-center justify-center cursor-pointer"
  //           onClick={() => toast.dismiss(t)}
  //         >
  //           <IoClose className="text-white cursor-pointer" />
  //         </span>
  //       </div>
  //     ),
  //     {
  //       position: "bottom-center",
  //     }
  //   );
  // };

  return (
  <div className='flex flex-col gap-3'>
     <Card>
        <div className='flex flex-col gap-5'>
          <h1 className='text-[36px]'>Change Password</h1>
          <div className='flex flex-col gap-3'>
            {passwordData.map((item,i)=>(
              <PasswordInput  key={i} {...item} />
            ))}
          </div>
          <div className='flex gap-3'>
            <button  className='px-2 py-3 bg-[#AF0341] rounded-lg' >Save Changes</button>
            <button className='px-2 py-3 border-2 border-[#1A1A1A]  rounded-lg '>Cancle Changes</button>
          </div>
        </div>
     </Card>
     <Card>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-between'>
          <h1 className='text-[30px] sm:text-[36px] '>TWO-FACTOR AUTHENTICATION</h1>
          <div className='flex gap-2 items-center '>
            <span  className='hidden sm:block' >Enable 2FA</span>
            <span className=' p-2 rounded-full bg-white'></span>
          </div>
        </div>
        <p className='text-[15px] text-[#A0A0A0]'>Two-factor authentication will be done via E-mail to the email address you specified when registering your account.</p>
        <div className='flex flex-col gap-2 border-t border-[#242424] pt-2 '>
        <h1 className='text-[30px] sm:text-[36px] '>2FA BACKUP CODES</h1>
        <p className='text-[15px]  text-[#A0A0A0] '>The backup codes will help you to enter the website without access to your mobile phone or when you are in roaming.</p>
        <button className='bg-[#AF0341] mt-2 px-2 py-3 rounded-lg outline-none max-w-64 '>Generate new backup codes</button>
        </div>
      </div>
    </Card>
  </div>

  )
}

export default page