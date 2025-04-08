import React from 'react'
import Content from './Content';
import trans from "../assets/transfer.png"
import bank from "../assets/balance.png"
import sheild from "../assets/sheild.png"
import Bank from  "../assets/bank.png"
import cash from "../assets/cash.png"
import graph from "../assets/graph.gif"
import Body1 from './Body1';
import Body2 from './Body2';


function Body() {
  return (
    <div className='w-full relative p-10 bg-[#fefefe] '>
        <div className='w-full  p-5 shadow-md  px-5 rounded-[10px] bg-[#f9f9f9]'>
            <p className='font-Sans-italic text-[14px] text-[#3099a8] '>FUTURE PAYMENT</p>
            <div className=' md:flex  '>
                <h1 className='text-[50px] md:w-1/2  mt-[1rem] xl:text-[70px] font-sans text-[#212121] md:leading-[4rem] leading-[3.7rem] '>Experience that growth with your scale.</h1>
                <p className='mt-[1rem] md:w-1/2 text-[16px] font-Serif-Bold text-[#959dab] md:mt-[2rem]'>Design a financial operating system that works for your business and streamlined flow management,Design a financial operating system that works for your business and streamlined flow management
                </p>
            </div>

            <div className='mt-[4rem] md:space-x-4 space-y-4 md:space-y-0 md:flex'>
                <div>
                <Content
                image={trans}
                subtitle="Free transfers"
                title="Create a financial experience and automate repeat purchases by scheduling recurrung payments."
                />
                </div>
               

                <div className=''>
                    <Content
                    image={bank}
                    subtitle="Multiple account"
                    title="Run your operations with cash from your account and generate yield on funds stored in your account."
                    />
                </div>
    
                <div className=''>
                    <Content
                    image={sheild}
                    subtitle="Unmatched security"
                    title="Sercuely manage your finances with organization-wide MFA, card-locking, and account-level controls."
                    />
                </div>
            </div>
        </div>
        <div className='mt-[3rem]'>
            <h1 className='text-center font-sans font-[500] text-[#212121] text-[30px]'>Why they prefer Finpay</h1>

            <div className='md:flex md:justify-center md:space-y-0 space-y-5 mt-[3rem]  md:gap-[1rem] '>

                <div className=' p-8  text-center  rounded-[20px]  h-[40vh] bg-[#f6faf9] '>
                    <h1 className=' font-[700] md:mt-[2rem] text-[#3099a8] font-sans text-[60px]'>3K+</h1>
                    <p className='text-[20px] font-Serif-Bold mt-[1rem]'>Businesses already running on Finpay</p>
                </div>

                <div className=' p-8    text-center  rounded-[20px]  h-[40vh] bg-[#f6faf9] '>
                    <h1 className=' font-[700] md:mt-[2rem] text-[#3099a8] font-sans text-[60px]'>3K+</h1>
                    <p className='text-[20px] font-Serif-Bold mt-[1rem]'>Businesses already running on Finpay</p>
                </div>
            </div>
            <div className=' p-6 px-6  xl:justify-between xl:flex  justify-items-center items-center rounded-[10px] drop-shadow-md bg-[#f6faf9] mt-[2rem]' >
                <div className=' xl:w-1/2 py-10   '>
                    <h1 className=' md:text-[70px]   md:leading-[5rem] text-[30px] justify-center font-sans'>No asset Volatility</h1>
                    <p className='font-Serif-Regular mt-[1rem] md:text-[20px] text-[#929ba7] text-[14px]'>Generate return on your cash reserves without making any investments.</p>
                </div>
                <img src={graph} className=' w-[500px] h-[30vh]' alt=''></img>
            </div>
        </div>
        <Body1/>
        <Body2/>
    </div>
  )
}

export default Body;