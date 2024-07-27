import React, { ReactNode } from 'react';
import logo from '@/../public/profile-logo.webp';
import Image from 'next/image';
import ProfileSidebar from '../components/profile-page/ProfileSidebar';
import MobileSidebar from '@/app/components/profile-page/MobileSidebar'
import BottomBar from '@/app/components/profile-page/BottomBar'
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col w-full gap-4 px-3 py-5 sm:px-24 sm:py-6'>
      <nav className='flex justify-center'><Image src={logo} alt='Logo' width={42} /></nav>
      <div className='flex max-w-[1400px] flex-col    w-full mx-auto  gap-4  sm:flex-row  '>
        <div className='  sm:w-1/3  hidden sm:block '>
            <ProfileSidebar/>
        </div>
        <div className=' w-full sm:w-1/3 sm:hidden'>
            <MobileSidebar/>
        </div>
        <div className= ' w-full sm:w-2/3'>{children}</div>
        <div className='w-full sm:hidden ' >
          <BottomBar  />
        </div>
      </div>
    </div>
  );
};

export default Layout;
