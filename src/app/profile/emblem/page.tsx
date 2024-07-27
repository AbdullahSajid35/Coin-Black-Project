"use client"
import Card from '@/app/components/StyleComponents/Card'
import React, { useEffect, useState } from 'react'
import  EmblemPic from '@/../public/profile-page/emblem-pic.webp'
import Image from 'next/image'
import  Star from '@/../public/profile-page/star.webp'
import  CircleStar from '@/../public/profile-page/circle-star.svg'
import  FillStar from '@/../public/profile-page/fill-star.svg'
import  Order from '@/../public/profile-page/order.webp'
import  Grand from '@/../public/profile-page/grand.webp'
import  Legend from '@/../public/profile-page/legend.webp'
import ModelPic1 from '@/../public/profile-page/modal-pic-1.webp'
import ModelPic2 from '@/../public/profile-page/modal-pic-2.webp'
import Empty from '@/../public/profile-page/empty.webp'
import Coin1 from '@/../public/profile-page/coin1.webp'
import Coin3 from '@/../public/profile-page/coin3.webp'
import Coin4 from '@/../public/profile-page/coin4.webp'
import Coin5 from '@/../public/profile-page/coin5.webp'
import Coin6 from '@/../public/profile-page/coin6.webp'
import Coin7 from '@/../public/profile-page/coin7.webp'
import Coin8 from '@/../public/profile-page/coin8.webp'
import Coin9 from '@/../public/profile-page/coin9.webp'
import Coin10 from '@/../public/profile-page/coin10.webp'
function page() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [showRed, setShowRed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileDrawer, setShowMobileDrawer] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const coinsData =  [
    {
      id: 1,
      img: Coin4,
    },
    {
      id: 2,
      img: Coin5,
    },
    {
      id: 3,
      img: Coin6,
    },
    {
      id: 4,
      img: Empty,
    },
    {
      id: 5,
      img: Coin7,
    },
    {
      id: 6,
      img: Empty,
    },
    {
      id: 7,
      img: Coin8,
    },
    {
      id: 8,
      img: Empty,
    },
    {
      id: 9,
      img: Coin9,
    },
    {
      id: 10,
      img: Empty,
    },
    {
      id: 11,
      img: Empty,
    },
    {
      id: 12,
      img: Coin10,
    },
    {
      id: 13,
      img: Empty,
    },
    {
      id: 14,
      img: Coin8,
    },
   
    {
      id: 15,
      img: Empty,
    },
    {
      id: 16,
      img: Empty,
    },
    {
      id: 17,
      img: Empty,
    },
    {
      id: 18,
      img: Empty,
    },
  ];

  const startData = [
    {nstart:[1,2,3,4,5],value:700},
    {nstart:[1,2,3,4],value:400},
    {nstart:[1,2,3],value:200},
    {nstart:[1,2],value:100},
    {nstart:[1],value:1},
  ]

  const toggleDrawer=()=>{
    setIsDrawerOpen(!isDrawerOpen)
    setShowRed(false)
  }

  const toggleRed=()=>{
    setShowRed(!showRed)

  }

  const toggleMobileDrawer=()=>{
    setShowMobileDrawer(!showMobileDrawer)

  }

  const toggleShowAll=()=>{
    setShowAll(!showAll)

  }


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the max width as per your mobile screen breakpoint
    };

    handleResize(); // Call it once to set the initial value
    window.addEventListener("resize", handleResize); // Listen for window resize events
 
    return () => window.removeEventListener("resize", handleResize); // Cleanup the event listener
  }, [showMobileDrawer]);
  
  return (
    <Card>
      <div  className='flex flex-col gap-4'>
        <div onClick={isMobile ? ()=>{setShowMobileDrawer(true)} : undefined } className='flex justify-between p-3 border border-[#242424] rounded-lg '>
          <div className='flex gap-2'>
            <Image src={EmblemPic} alt='emblem-pic' />
            <div className='flex flex-col gap-2'>
              <p className='text-[13px] text-[#A0A0A0] '> COLLECTOR STATUS</p>
              <h1 className='text-2xl'>LEGEND</h1>
            </div>
        </div>
        <div  className='flex self-end gap-2'>
              <Image src={Star} alt='star' />
              <Image src={Star} alt='star' />
              <Image src={Star} alt='star' />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <h1 className='text-[36px]'> Primary Emblems</h1>
            <p  className=' text-[#A0A0A0] '>The 3 emblems which you set as primary</p>
            <div className='flex gap-3 border-b border-[#242424] pb-3 '>
              <Image src={Coin1} alt='coin-1' />
              <Image src={Coin3} alt='coin-3' />
              <Image src={Coin1} alt='coin-1' />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-[36px]'>Emblems</h1>
            <p className=' text-[#A0A0A0] '>Obtained by owning individual tokens</p>
            <div className='flex flex-wrap gap-1 '>
              { isMobile && !showAll ? 

              (
                coinsData.slice(0,9).map(item => (
                  <Image width={54}  src={item.img} key={item.id} alt={item.id.toString()} />
                )) )

             
              :
              (coinsData.map(item => (
                <Image width={54} onClick={item.id===9 ? toggleDrawer : undefined} src={item.img} key={item.id} alt={item.id.toString()} />
              )))
            
            }

            {
              coinsData.length>10 && isMobile && !showAll  &&              
                <div onClick={toggleShowAll} className='w-[60px] h-[60px] flex justify-center items-center  bg-blue-600 rounded-full '>+{coinsData.length-9}</div>
            }


            {
              coinsData.length>10 && isMobile && showAll  &&              
                <div onClick={toggleShowAll} className='w-[60px] h-[60px] flex justify-center items-center  bg-blue-600 rounded-full '>-{coinsData.length-9}</div>
            }
            </div>
          </div>
      </div>


    {
      !isMobile && isDrawerOpen &&
      <div  className={` fixed top-0 right-0 w-[650px] h-[95%] bg-[#111111] z-[100] overflow-y-auto   mt-[15px]    border border-[#242424]  rounded-lg transition-transform  ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}  `}>
        <div className='flex w-full '>
          <div className='w-1/2  '>


           <div  className='flex flex-col gap-2  p-6 '>
        <div onClick={toggleRed} className='flex justify-between p-3 border border-[#242424] rounded-lg '>
          <div className='flex gap-0'>
            <Image width={45}  className='self-stretch' src={EmblemPic} alt='emblem-pic' />
            <div className='flex flex-col gap-2'>
              <p className='text-[10px] text-[#A0A0A0] '> COLLECTOR STATUS</p>
              <h1 className='text-lg'>LEGEND</h1>
            </div>
        </div>
        <div  className='flex self-end gap-2'>
              <Image src={Star} alt='star' />
              <Image src={Star} alt='star' />
              <Image src={Star} alt='star' />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <h1 className='text-[30px]'> Primary Emblems</h1>
            <p  className=' text-[#A0A0A0] text-[13px] '>The 3 emblems which you set as primary</p>
            <div className='flex gap-3 border-b border-[#242424] pb-3 '>
              <Image src={Coin1} className='w-[50px] h-[50px] ' alt='coin-1' />
              <Image src={Coin3} className='w-[50px] h-[50px] ' alt='coin-3' />
              <Image src={Coin1} className='w-[50px] h-[50px] ' alt='coin-1' />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-[36px]'>Emblems</h1>
            <p className=' text-[#A0A0A0] text-[13px] '>Obtained by owning individual tokens</p>
            <div className='flex flex-wrap gap-1 '>
              {coinsData.map(item => (
                <Image className='w-[40px] h-[40px] ' onClick={item.id===9 && showAll ? toggleDrawer : undefined} src={item.img} key={item.id} alt={item.id.toString()} />
              ))}
            </div>
          </div>
      </div>
          

          </div>

        {
          !showRed ? (
            <div className='w-1/2 flex flex-col items-center  gap-3 border-l border-[#242424] px-5 text-center'>
            <Image className='w-[250px] h-[250px]' src={ModelPic1} alt='model-pic-1' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-[36px]'>SPIRITS EMBLEM</h1>
              <p className='text-[13px] text-center text-[#A0A0A0] '>Summon eight ethereal entities in one match. Show your mastery of the arcane arts in Kanoi to unlock this prestigious achievement.</p>
              <p>+20 points</p>
              <button className='p-3 border border-[#242424] w-[200px] mx-auto rounded-lg '>Set emblem as primary</button>
            </div>
        </div> 

          ) :

          (


            <div className='w-1/2 flex flex-col items-center  gap-3 border-l border-[#242424] px-5 text-center'>
              <Image className='w-[250px] h-[250px]' src={ModelPic2} alt='model-pic-2' />
              <div className='flex flex-col gap-2'>
                <h1 className='text-[36px]'>LEGEND</h1>
                <div className='flex justify-center gap-2'>
                  <Image src={Star} alt='star' />
                  <Image src={Star} alt='star' />
                  <Image src={Star} alt='star' />
                </div>
                <button className='p-3 border border-[#242424] w-[130px] text-[#A0A0A0] mx-auto rounded-3xl '>SCORE-20</button>
                <div className='flex  items-center w-full justify-between border border-[#242424] rounded-lg '>
                  <div className='flex items-center'>
                    <Image src={CircleStar} alt='circle-star' />
                    <div className='w-[110px] h-[8px] rounded-r-2xl bg-red-600 '></div>
                  </div>
                  <Image className='w-[15px]  h-[15px] ' src={Star} alt='star' />
                  <Image className='w-[15px]  h-[15px] ' src={Star} alt='star' />
                  <Image className='w-[15px]  h-[15px] ' src={FillStar} alt='fill-star' />
                </div>

                <div className=' flex flex-col gap-3 border border-[#242424] rounded-lg p-3 '>
                  <div className='flex items-center  gap-3'>
                  <Image src={Order} className='w-[40px] h-[40px]' alt='Order' />
                  <h1 className='text-[#A0A0A0]  text-[22px] '>THE ORDER</h1>
                  </div>
                  <div className=' flex flex-col gap-3 border border-[#242424] rounded-lg p-3 '>
                    <div className='flex items-center  gap-3'>
                    <Image src={Legend} className='w-[40px] h-[40px]' alt='legend' />
                    <h1 className='text-[#A0A0A0]  text-[22px] '>LEGEND</h1>
                    </div>
                    <div className='flex flex-col gap-2  border-t border-[#242424] pt-2 '>
                    {
                      startData.map(item=>(
                        <div className='flex justify-between'>
                          <div key={item.value} className='flex  gap-2'>
                          {
                            item.nstart.map((sitem,j)=>(
                              <Image className='w-[15px] h-[15px]' key={j} src={Star} alt='star' />
                            ))
                          }
                        </div >
                        <span className={`text-[#A0A0A0] ${item.value===200  && 'text-white' } `}>{item.value}</span>
                        </div>
                      ))
                    }
                    </div>
                  </div>
                </div>
                
                <p className='text-[13px] text-[#A0A0A0] '>Last update of score was 2 hours ago</p>
                
              </div>
          </div>

          )
        }

        </div>
        <div onClick={toggleDrawer} className='absolute top-5 right-3 rounded-lg cursor-pointer p-2 border border-[#242424]'>close</div>
      </div>
    }


    {
      isMobile && isDrawerOpen  &&
      <div className={` fixed bottom-0  right-0 w-screen h-[90%] bg-[#111111] z-[100]  transition-transform  overflow-y-auto    border border-[#242424] rounded-lg ${isDrawerOpen ? 'translate-y-0' : '-translate-y-full'}  `}>
        <div onClick={toggleDrawer} className='absolute top-5 right-3 rounded-lg cursor-pointer p-2 border border-[#242424]'>close</div>
        <div className=' flex flex-col items-center  gap-3 border-l border-[#242424] px-5 text-center'>
            <Image className='w-[250px] h-[250px]' src={ModelPic1} alt='model-pic-1' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-[36px]'>SPIRITS EMBLEM</h1>
              <p className='text-[13px]  text-center text-[#A0A0A0] '>Summon eight ethereal entities in one match. Show your mastery of the arcane arts in Kanoi to unlock this prestigious achievement.</p>
              <p>+20 points</p>
              <button className='p-3 border border-[#242424] w-[200px] mx-auto rounded-lg '>Set emblem as primary</button>
            </div>
        </div> 
      </div>
    } 



{
      isMobile && showMobileDrawer  &&
      <div className={` fixed bottom-0  right-0 w-screen h-[90%] bg-[#111111] z-[100]  transition-transform  overflow-y-auto py-3    border border-[#242424] rounded-lg ${showMobileDrawer ? 'translate-y-0' : '-translate-y-full'}  `}>
        <div onClick={toggleMobileDrawer} className='absolute top-5 right-3 rounded-lg cursor-pointer p-2 border border-[#242424]'>close</div>
        <div className=' flex flex-col  px-8   w-full text-center'>
              <Image className='w-[250px] mx-auto h-[250px]' src={ModelPic2} alt='model-pic-2' />
              <div className='flex flex-col gap-2'>
                <h1 className='text-[36px]'>LEGEND</h1>
                <div className='flex justify-center gap-2'>
                  <Image src={Star} alt='star' />
                  <Image src={Star} alt='star' />
                  <Image src={Star} alt='star' />
                </div>
                <button className='p-3 border border-[#242424] w-[130px] text-[#A0A0A0] mx-auto rounded-3xl '>SCORE-20</button>
                <div className='flex  items-center w-full justify-between border border-[#242424] rounded-lg '>
                  <div className='flex items-center'>
                    <Image src={CircleStar} alt='circle-star' />
                    <div className='w-[110px] h-[8px] rounded-r-2xl bg-red-600 '></div>
                  </div>
                  <Image className='w-[15px]  h-[15px] ' src={Star} alt='star' />
                  <Image className='w-[15px]  h-[15px] ' src={Star} alt='star' />
                  <Image className='w-[15px]  h-[15px] ' src={FillStar} alt='fill-star' />
                </div>

                <div className=' flex flex-col gap-3 border border-[#242424] rounded-lg p-3 '>
                  <div className='flex items-center  gap-3'>
                  <Image src={Order} className='w-[40px] h-[40px]' alt='Order' />
                  <h1 className='text-[#A0A0A0]  text-[22px] '>THE ORDER</h1>
                  </div>
                  <div className=' flex flex-col gap-3 border border-[#242424] rounded-lg p-3 '>
                    <div className='flex items-center  gap-3'>
                    <Image src={Legend} className='w-[40px] h-[40px]' alt='legend' />
                    <h1 className='text-[#A0A0A0]  text-[22px] '>LEGEND</h1>
                    </div>
                    <div className='flex flex-col gap-2  border-t border-[#242424] pt-2 '>
                    {
                      startData.map(item=>(
                        <div className='flex justify-between'>
                          <div key={item.value} className='flex  gap-2'>
                          {
                            item.nstart.map((sitem,j)=>(
                              <Image key={j} src={Star} alt='star' />
                            ))
                          }
                        </div >
                        <span className={`text-[#A0A0A0] ${item.value===200  && 'text-white' } `}>{item.value}</span>
                        </div>
                      ))
                    }
                    </div>
                  </div>
                </div>
                
                <p className='text-[13px] text-[#A0A0A0] '>Last update of score was 2 hours ago</p>
                
              </div>
          </div>
      </div>
    } 
    </Card>
  )
}

export default page