import React from 'react'

const NewWaySubCom = ({icon , heading ,des}) => {
  return (
    <div className='flex flex-col gap-y-2'>
        <div className='flex items-center gap-x-1.5 text-lg '><span className='text-xl text-primary'>{icon}</span> <h3 className='text-medium text-primary'>{heading}</h3></div>
        <p className='text-secondary text-md font-normal max-w-[60%]'>{des}</p>
    </div>
  )
}

export default NewWaySubCom