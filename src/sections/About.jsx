import React, { useEffect } from 'react'
import aboutimg1 from '../assets/about1.webp'
import aboutimg2 from '../assets/about2.webp'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoIosPricetag } from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css'


function About() {

  useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      })
    },[]);
  return (
    <div id='about' className='flex lg:flex-row flex-col justify-between items-center
    gap-15 lg:px-22 px-5 lg:py-22 p-20'>
      <div className='flex flex-col justify-center items-start'>
        <img data-aos="zoom-in" data-aos-delay="100" src={aboutimg1} className='rounded-md' alt="" />
        <img data-aos="zoom-in" data-aos-delay="200" src={aboutimg2} className='rounded-md w-[40%] border-10 border-white -mt-[150px] -ml-[30px]-rotate-2' alt="" />
      </div>
      <div className='flex flex-col gap-5'>
        <h1 data-aos="zoom-in" data-aos-delay="300" className='text-md text-grey-600'>About us</h1>
        <h1 data-aos="zoom-in" data-aos-delay="400" className='lg:text-5xl text-3xl font-fakhwang font-semibold text-black'>Embark on a hilarious journey with our travel experts</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste sapiente deserunt incidunt! Aspernatur id odit eum culpa laudantium possimus.</p>
      </div>
    </div>
  )
}

export default About