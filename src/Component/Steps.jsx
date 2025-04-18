import React from 'react'

function Steps( {subtitle, title, paragraph}) {
  return (
    <div>
        <div className=' bg-[#0a4358] p-3 flex-wrap  rounded-[15px]'>
            <div className=' px-[1rem]  justify-items-center justify-center '>
              <div className='flex gap-[12px]  '>
                <h1 className='font-[400]   font-Serif-Bold   shadow-[#4c7180]   text-[#adbdc3]'><strong>{subtitle}</strong></h1>
                <p className=' text-[#e6eaec]   font-Serif-Bold text-[15px]'>{title}</p>
              </div>
              <p className='text-[12px] text-center md:text-[18px] font-Serif-Bold text-[#809eab]'>{paragraph}</p>
            </div>
        </div>
    </div>
  )
}

export default Steps