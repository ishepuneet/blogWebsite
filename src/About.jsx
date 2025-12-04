import React, { useState, useEffect } from "react";

export default function About() {
  const [animate, setAnimate] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Animation effect
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);

  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0 bg-[url('/img/bgaboutdesk.jpg')] bg-center bg-cover bg-fixed"></div>

      {/* Mobile Video Background */}
      <video
        className="absolute inset-0 block md:hidden w-full h-full object-cover"
        src="/img/bgaboutres.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <section className="relative z-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 p-8 lg:pt-32 md:pt-32 sm:pt-16">

        {/* IMAGE PART */}
        <div
          className={`border p-6 rounded-lg bg-white/10 lg:w-[320px] lg:h-[480px] md:w-[320px] md:h-[480px] backdrop-blur-sm transform transition-all duration-1000 ease-out
          ${animate ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
        >
          <img src="/img/pro.jpg" width={350} alt="profile" />
        </div>

        {/* TEXT PART */}
        <div
          className={`border p-6 rounded-lg bg-white/10 backdrop-blur-sm transform transition-all duration-1000 ease-out delay-300
          ${animate ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
        >
          <h4 className="text-2xl">
            <span className="text-7xl text-green-600">Hi</span>, I’m Puneet — welcome to my travel world!
          </h4>

          <p className="mt-4 lg:block md:block ">
            I’m a travel enthusiast who loves exploring new destinations, capturing hidden gems, and sharing travel tips with others.
            Throughout my journey, I’ve discovered many beautiful places—
            {showMore && (
              <>
                {" "}whether it’s majestic palaces or spiritual destinations—but India
                still has countless spots waiting to be explored. This country is full of adventures:
                you can go on a cruise, try bungee jumping, or even experience skydiving, all without leaving India. That’s why I always
                encourage people to explore their own state and country first—whether by train, bus, bike, or even cycle—because once you
                witness India’s beauty, you might just forget about Switzerland. And if you’re planning a trip with family or friends, don’t
                forget to subscribe to my YouTube channel (link below). See you on the next trip!✈️🌍

                <p className="mt-4">
                  My goal is simple — help you plan unforgettable trips and make traveling easier & more fun.
                </p>
              </>
            )}
          </p>



          <div className="flex items-center gap-2 mt-6">
            <img src="img/you.png" width={50} alt="youtube logo" />
            <a
              href="https://www.youtube.com/@Puneetkohli1102"
              className="flex items-center gap-2 hover:text-red-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe My YouTube channel
            </a>
          </div>

           {/* Read More Button - Only on Mobile */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-5 px-5 py-2 hover:text-white z-50 hover:bg-blue-600 border cursor-pointer rounded-full transition"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>
        </div>

       
      </section>
    </div>
  );
}
