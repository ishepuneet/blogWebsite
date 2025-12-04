import React from 'react'

export default function Incredible() {
  return (

    <div className="bg-[url(img/incredible.jpg)] incredible-main relative bg-center bg-gradient-to-b from-teal-900/70 to-teal-900/90 z-50 bg-cover lg:p-20 md:p-20">


      {/* Content */}
      <section className='lg:my-20 md:my-20 text-white'>

        <div className=" lg:text-8xl lg:w-[500px] md:w-[500px] tracking-tighter font-medium incredible-heading md:text-6xl sm:text-4xl ">
          <h1>Travel and Enjoy Your Holiday...</h1>

        </div>

        <div className="my-20 grid grid-cols-2 under-line ">
          <hr className='lg:w-[400px] lg:ml-30 md:w-[300px] md:ml-3 '/><hr className='lg:w-[400px] lg:ml-30 md:w-[300px] md:ml-10 '/>
        </div>
      </section>

    </div>
  )
}
