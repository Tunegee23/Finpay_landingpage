import React from 'react'
import logo from "../assets/wallet.png"
import Headers from './Header'


function Navbar() {
  return (
        <div className='bg-[#f6faf9] w-full p-10 '>
            <nav className=' flex justify-between '>
                <div className=' flex gap-[3rem]'>
                    <div className='flex'>
                        <img src={logo} className='w-[40px] h-[40px]' alt=''></img>
                        <h1 className='p-[6px] text-[#04394ccb] font-Serif-Bold text-[20px] font-[700]'> FinPay</h1>
                    </div>
                    <div className='md:flex hidden list-none tracking-[1px] text-center items-center font-Serif-Bold text-[#4d606a] font-[580]  text-[12px] space-x-4 '>
                        <li>Products</li>
                        <li>Customers</li>
                        <li>Pricing</li>
                        <li>Learn</li>
                    </div>
                </div>
                <div className='flex space-x-3 font-Serif-Bold text-[10px] font-[500] text-center'>
                    <button type='summit' className='w-[70px] h-[40px] border-[1px] border-[#d6dcdc] text-[#0a252e] rounded-[10px]  bg-none b' >Login</button>
                    <button type='summit' className='w-[70px] bg-[#3099a8] rounded-[10px]  text-[white] h-[40px]'>SignUp</button>
                </div>
            </nav>
            <Headers/>
        </div>
  )
}

export default Navbar