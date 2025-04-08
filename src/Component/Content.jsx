import React from 'react'


function Content({ subtitle, title, image}) {
  return (
    <div>
        <div className=' '>
            <img src={image} className='w-[40px]'></img>
            <h2 className='font-[500] text-[18px]  text-[#090815] font-sans '> {subtitle}</h2>
            <p className='text-[14px] font-Serif-Bold leading-2 text-[#969da6]'>{title}</p>

        </div>
    </div>
  )
}

export default Content