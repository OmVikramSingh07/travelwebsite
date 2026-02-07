import React, { useEffect } from 'react'
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import service4 from '../assets/service4.webp'
import service5 from '../assets/service5.webp'
import service6 from '../assets/service6.webp'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlay } from 'react-icons/fa'

function Services() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id='services'
      className='w-full bg-gray-200 lg:px-22 px-5 lg:py-22 py-20 flex flex-col items-center gap-5'
    >
      <h1 className='lg:text-5xl text-3xl font-fakhwang font-semibold'>
        Discover your next dream destination
      </h1>

      <p className='text-gray-500 lg:w-[60%] text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, at.
      </p>

      <hr className='lg:w-[7%] w-[20%] border-2 border-orange-600' />

      {/* ================= FIRST ROW ================= */}
      <div className='w-full flex lg:flex-row flex-col gap-5 mt-5'>

        {/* LEFT */}
        <div className='lg:w-[50%] w-full flex flex-col gap-5'>

          {/* service 1 */}
          <div
            style={{ backgroundImage: `url(${service1})` }}
            className='relative bg-cover bg-center h-[350px] rounded-md p-8 flex items-end'
          >
            <div className='absolute inset-0 rounded-md bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
            <div className='relative z-10 w-full flex justify-between'>
              <div>
                <h1 className='text-white text-2xl font-semibold'>Padar Island</h1>
                <p className='text-white'>Indonesia</p>
              </div>
              <div className='bg-white rounded-full p-3'>
                <FaPlay />
              </div>
            </div>
          </div>

          {/* service 2 */}
          <div
            style={{ backgroundImage: `url(${service2})` }}
            className='relative bg-cover bg-center h-[350px] rounded-md p-8 flex items-end'
          >
            <div className='absolute inset-0 rounded-md bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
            <div className='relative z-10 w-full flex justify-between'>
              <div>
                <h1 className='text-white text-2xl font-semibold'>Bromo Mountain</h1>
                <p className='text-white'>Indonesia</p>
              </div>
              <div className='bg-white rounded-full p-3'>
                <FaPlay />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BIG */}
        <div className='lg:w-[50%] w-full'>
          <div
            style={{ backgroundImage: `url(${service3})` }}
            className='relative bg-cover bg-center h-[725px] rounded-md p-8 flex items-end'
          >
            <div className='absolute inset-0 rounded-md bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
            <div className='relative z-10 w-full flex justify-between'>
              <div>
                <h1 className='text-white text-2xl font-semibold'>Raja Ampat</h1>
                <p className='text-white'>Indonesia</p>
              </div>
              <div className='lg:w-[10%] lg-[20%] bg-white rounded-full p-3'>
                <FaPlay />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= SECOND ROW ================= */}
      <div className='w-full grid md:grid-cols-3 grid-cols-1 gap-5 mt-5'>

        {/* service 4 */}
        <div
          style={{ backgroundImage: `url(${service4})` }}
          className='relative bg-cover bg-center h-[300px] rounded-md p-8 flex items-end'
        >
          <div className='absolute inset-0 rounded-md bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
          <div className='relative z-10 w-full flex justify-between'>
            <div>
              <h1 className='text-white text-xl font-semibold'>Maldives</h1>
              <p className='text-white'>Indian Ocean</p>
            </div>
            <div className='bg-white rounded-full p-3'>
              <FaPlay />
            </div>
          </div>
        </div>

        {/* service 5 */}
        <div
          style={{ backgroundImage: `url(${service5})` }}
          className='relative bg-cover bg-center h-[300px] rounded-md p-8 flex items-end'
        >
          <div className='absolute inset-0 rounded-md bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
          <div className='relative z-10 w-full flex justify-between'>
            <div>
              <h1 className='text-white text-xl font-semibold'>Santorini</h1>
              <p className='text-white'>Greece</p>
            </div>
            <div className='bg-white rounded-full p-3'>
              <FaPlay />
            </div>
          </div>
        </div>

        {/* service 6 */}
        <div
          style={{ backgroundImage: `url(${service6})` }}
          className='relative bg-cover bg-center h-[300px] rounded-md p-8 flex items-end'
        >
          <div className='absolute inset-0 rounded-md bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
          <div className='relative z-10 w-full flex justify-between'>
            <div>
              <h1 className='text-white text-xl font-semibold'>Swiss Alps</h1>
              <p className='text-white'>Switzerland</p>
            </div>
            <div className='bg-white rounded-full p-3'>
              <FaPlay />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
