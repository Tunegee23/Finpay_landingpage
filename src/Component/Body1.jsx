import React from 'react'
import Steps from './Steps'

function Body1() {
  return (
    <div className='mt-[3rem] '>
        <div className='bg-[#013950] py-[2rem] md:p-[5rem] justify-items-center rounded-[20px] '>
            <p className='text-[#3d879a] text-[12px] md:text-[14px] text-center'>STEPS</p>
            <h1 className='md:text-[25px]  w-full text-center  leading-[1.5rem]  text-white '>Maximize your returns with a Reserve account that generates.</h1>

            <div className='mt-[1rem] md:flex md:space-y-0 md:space-x-3 space-y-4'>

                <Steps
                subtitle='1.'
                title="Open your account"
                paragraph="Sign up to finpay and set up your account from the dashboard."
                />

                <Steps
                subtitle='2.'
                title="Transfer your money"
                paragraph="Move money from one acccount to another and start to earn"
                />
                
                <Steps
                subtitle='3.'
                title="Watch your balance grow"
                paragraph="Accessed instantly and remain insulated from market volatility"
                />
                
            </div>
           

        </div>
    </div>
  )
}

export default Body1