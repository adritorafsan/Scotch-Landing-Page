import React from 'react'

const FilledButton = ({Text, bgColor ,textColor}) => {
  return (
    <button className={`${bgColor} ${textColor} py-2 px-4 rounded-2xl font-medium text-lg text-center relative overflow-hidden cursor-pointer group transition-transform duration-300`}>
        <span className={`absolute  inset-0 ${bgColor}/10 transform scale-x-0 origin-left  rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0 `}></span>
      <span>{Text}</span>
    </button>
  )
}

export default FilledButton