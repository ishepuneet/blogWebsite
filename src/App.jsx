import React, { useEffect, useState } from 'react'
import Destination from './Destination';
import Incredible from './Incredible';
import { GiCommercialAirplane } from "react-icons/gi";
export default function App() {

  /////////////////TEXT ANIMATION/////////////////

  const [isvisible, setIsvisible] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      const section = document.querySelector('.visit-heading');

      if (section) {
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
          setIsvisible(true);
        }
        else {
          setIsvisible(false);
        }
      }
    };
    

    window.addEventListener('scroll', handlescroll);
    return () => window.removeEventListener('scroll', handlescroll);


  }, []);
  ////////////////////////////////////////////////




  return (

    <div className="">

      <div className='bg-cover bg-no-repeat bg-[url("/img/bg2.jpg")] md:bg-center h-screen lg:py-50 md:py-40'>

        {/* /////////////HEADER TEXT////////////////// */}

        <div className="text-white max-w-5xl m-auto heading ">
          <h1 className='lg:text-9xl lg:-ml-80 md:text-9xl font-medium lg:flex md:flex md:justify-center'>T <span className='font-light'>ravel</span>
            <span className='plane-wrapper'>
              <GiCommercialAirplane className='plane' />
              <span className="fog"></span>
              <span className="fog delay-1"></span>
              <span className="fog delay-2"></span>
            </span>
            W <span className='font-light'>ith</span></h1>

          <h5 className='lg:text-8xl md:text-8xl md:text-center lg:ml-[70%] '>PUNEET</h5>
        </div>

      </div>

      {/* ////////////////////////////////////////////////////// */}

      <div className="bg-[url(/img/bharat.png)] bg-cover bg-center h-screen visitindia">

        <section className='max-w-screen-2xl m-auto'>



          <div className="text-left text-white p-20 py-20 pb-0 visit-heading ">

            <h1 className={`lg:text-9xl md:text-9xl 
            ${isvisible ? "slide-up" : ""}`}> VISIT</h1>

            <h1 className={`lg:text-[300px] -mt-15   md:text-[200px]  
            ${isvisible ? "slide-up" : ""}`}>INDIA

              <span className='text-orange-400'>.</span>.
              <span className='text-green-500'>.</span>

            </h1>

          </div>

          <Destination />

          <Incredible />
        </section>

      </div>

    </div>
  )
}
