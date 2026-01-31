import React, { useEffect } from 'react'
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import service4 from '../assets/service4.webp'
import service5 from '../assets/service5.webp'
import service6 from '../assets/service6.webp'
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {

  useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      });
    }, []);
  return (
    <div id='services' className='w-full bg-gray-200 lg:px-22 px-5 lg:py-22 py-20 flex flex-col justify-between lg:items-center items-left gap-5'>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-5xl text-3xl font-fakhwang font-semibold'>Discover your next dream destination</h1>
      <p data-aos="zoom-in" data-aos-delay="200" className='text-gray-500 lg:w-[60%] w-full lg:text-center text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, at.</p>
      <hr data-aos="zoom-in" data-aos-delay="300" className='lg:w-[7%] w-[20%] border-2 border-orange-600'/>

      {/*services grids here */}
      
      {/*services roe starts here */}

      <div data-aos="zoom-in" data-aos-delay="400" id='first-row' className='w-full flex lg:flex-row flex-col justify-between items-center gap-5 mt-5'>
        
      </div>
    </div>
  )
}

export default Services