import React from 'react'

function Card({children}) {
  return (
    <div className='px-5 py-8 border border-[#242424] bg-[#111111] rounded-lg'>
        {children}
    </div>
  )
}

export default Card