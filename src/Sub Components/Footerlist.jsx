import React from 'react'

const Footerlist = ({ text }) => {
  return (
    <p className='group cursor-pointer flex items-center'><p className='size-[8px] bg-orange rounded-full invisible group-hover:visible'></p> <p className='text-lg text-primary group-hover:translate-x-1.5 transform transition-transform duration-300 ease-out'>{text}</p></p>
  )
}

export default Footerlist