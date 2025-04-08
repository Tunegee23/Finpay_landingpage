import React from 'react';
import png from "../assets/graph.jpeg";

function Header() {
  return (
    <div className=' md:flex mt-[3rem] md:gap-[8rem] '> 

      <div className='text-center md:text-left p-4 md:w-[50%]'>
        <h1 className='text-[50px] w-[88%] sm:text-[50px] md:text-[70px] md:leading-[5rem] leading-[3rem]  font-sans text-[#002839]'><span className='font-[600]'>Get paid early</span> save automatically all your pay.</h1>
        <p className='text-[12px] text-[#6e7a8d] font-[400] md:text-[18px] mt-[1.2rem]'>Our goal is to empower individuals through knowledge sharing. We are dedicated to helping individuals develop the skills, knowledge and mindset necessary to thrive in today’s dynamic and ever-changing world.</p>
        <div className='mt-[1.2rem] relative'> 
          <input type="text" name="myInput" placeholder="Your business email"
            className="shadow appearance-none border rounded-[10px] w-full h-[50px] text-[12px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"  
          />
        </div>
        <div className='md:space-x-10 space-x-3 text-[23px] font-bold text-[#003551] mt-[1.2rem] flex flex-wrap justify-center md:justify-start'> 
          <strong>Klarna.</strong>
          <strong>Coinbase</strong>
          <strong>Instacart.</strong> 
        </div>
      </div>

      <div className=' flex  mt-[2rem] md:mt-0 justify-center '> 
        <img src={png} alt='' className=' w-[500px] h-[50vh]' /> 
      </div>
    </div>
  )
}

export default Header;