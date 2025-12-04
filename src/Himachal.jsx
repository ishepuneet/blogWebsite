import React, { useEffect, useState } from "react";

export default function Himachal() {
  const [showMore, setShowMore] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  const steps = [
    {
      id: 1,
      img: "/img/manikaran.mp4",
      text: "Manikaran, nestled in the Parvati Valley of Himachal Pradesh, is a sacred destination for both Hindus and Sikhs. It is famous for its natural hot springs, believed to have healing properties. The area is home to the revered Manikaran Sahib Gurudwara and several temples surrounded by mountains and the Parvati River.",
      isVideo: true,
    },
    {
      id: 2,
      img: "/img/jibhi.jpg",
      text: "Jibhi, a hidden gem in the Tirthan Valley, is known for its peaceful pine forests, wooden cottages, and crystal-clear rivers. Perfect for travelers seeking a quiet retreat, Jibhi offers scenic treks like Jalori Pass and a fairy-tale atmosphere.",
      isVideo: false,
    },
    {
      id: 3,
      img: "/img/dharamshala.mp4",
      text: "Dharamshala, surrounded by the Dhauladhar mountains, blends Indian and Tibetan culture. Known as the home of the Dalai Lama, it features monasteries, tea gardens, peaceful cafes, and adventure trails.",
      isVideo: true,
    },
    {
      id: 4,
      img: "/img/jogini.jpg",
      text: "Jogini Waterfalls near Vashisht Village is a beautiful trekking destination surrounded by green meadows and apple orchards. The trek leads to a peaceful waterfall with stunning Himalayan views.",
      isVideo: false,
    },
  ];

  return (
    <section
      className={`relative max-w-3xl mx-auto p-4 text-white transition-all my-10 duration-1000 ease-out 
      ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Background Video */}
      {/* <video
        src="/img/himachal.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 rounded-2xl -z-10"
      ></video> */}

      <h2 className="text-[goldenrod] text-5xl md:text-6xl font-serif mt-10 text-center">
        Himachal
      </h2>

      <div className="space-y-16 my-16 relative">
        {/* Vertical line */}
        <div className="absolute hidden lg:block md:block sm:hidden top-0 left-1/2 -translate-x-1/2 h-[90%] w-1 bg-gray-300"></div>

        {showMore &&
          steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image/Video */}
              <div className="flex-1 flex justify-center">
                {step.isVideo ? (
                  <video
                    src={step.img}
                    className="w-56 h-56 object-cover rounded-full shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={step.img}
                    alt={`Step ${step.id}`}
                    className="w-56 h-56 object-cover rounded-full shadow-lg"
                  />
                )}
              </div>

              {/* Number */}
              <div className="relative w-10 flex justify-center my-4 md:my-0">
                <div className="w-6 h-6 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center font-bold text-gray-700">
                  {step.id}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 flex justify-center">
                <p className="max-w-sm text-sm text-center p-3 border-2 bg-teal-700/80 rounded-4xl font-serif">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Read More Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-5 px-5 py-2 text-white hover:bg-teal-700 border cursor-pointer font-semibold rounded-full transition"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}
