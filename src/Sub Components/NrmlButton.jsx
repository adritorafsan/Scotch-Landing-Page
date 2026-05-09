import React from 'react'

const NrmlButton = ({Text}) => {
  return (
    <button className={`text-xl font-semibold text-white text-center py-2 px-4 rounded-2xl bg-transparent group hover:bg-black/40 hover:border border-secondary  relative overflow-hidden cursor-pointer `}>
        <span className={`absolute inset-0 bg-black/40 transform scale-x-0 origin-left  rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0 `}></span>
        <span className='text-white z-10'>{Text}</span>
    </button>
  )
}

export default NrmlButton