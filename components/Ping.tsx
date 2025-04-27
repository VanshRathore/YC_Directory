import React from 'react'

const Ping = () => {
  return (
    <div className='relative'>
        <div className='absolute -left-4 -top-1'>
            <span className='flex size-[11px]'>
                <span className='absolute inline-flex w-full h-full rounded-full bg-primary animate-ping'>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Ping