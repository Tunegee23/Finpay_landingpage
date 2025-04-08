import React from 'react'

function Steps( {subtitle, title, paragraph}) {
  return (
    <div>
        <div className=' bg-[#0a4358] rounded-[15px]'>
            <div className=' p-[2.5rem] w-full justify-items-center justify-center '>
              <div className='flex gap-[12px] '>
                <h1 className='font-[500]  font-Serif-Bold   shadow-[#4c7180] text-center text-[30px] text-[#adbdc3]'><strong>{subtitle}</strong></h1>
                <p className=' text-[#e6eaec] mt-[11px] font-Serif-Bold text-[15px]'>{title}</p>
              </div>
              <p className='text-[12px] text-center md:text-[18px] font-Serif-Bold text-[#809eab]'>{paragraph}</p>
            </div>
        </div>
    </div>
  )
}

export default Steps