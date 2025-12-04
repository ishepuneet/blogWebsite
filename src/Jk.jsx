import React, { useEffect, useState } from "react";

export default function Jk() {
  const [showMore, setShowMore] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  const steps = [
    {
      id: 1,
      img: "/img/dalake.mp4",
      text: "Dal Lake, known as the 'Jewel of Srinagar,' is one of the most famous attractions of Kashmir...",
      isVideo: true,
    },
    {
      id: 2,
      img: "/img/gulmarg.jpg",
      text: "Gulmarg, known as the “Meadow of Flowers”, is one of Kashmir’s most popular hill stations...",
      isVideo: false,
    },
    {
      id: 3,
      img: "/img/sonmarg.mp4",
      text: "Sonmarg, meaning “Meadow of Gold”, is a breathtaking hill station surrounded by glaciers...",
      isVideo: true,
    },
    {
      id: 4,
      img: "/img/betab.jpg",
      text: "Betaab Valley is one of the most scenic valleys in Kashmir, surrounded by snow-clad mountains...",
      isVideo: false,
    },
  ];

  return (
    <section
      className={`relative max-w-3xl mx-auto p-4 text-white transition-all my-10 duration-1000 ease-out 
      ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >

      {/* Background Video
      <video
        src="/img/jk.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 rounded-2xl -z-10"
      ></video> */}

      {/* Heading */}
      <h2 className="text-[goldenrod] text-5xl md:text-6xl font-serif text-center mt-10 drop-shadow-md">
        Jammu & Kashmir
      </h2>

      <div className="space-y-20 my-16 relative">

        {/* Vertical Center Line (Hidden on small screens) */}
        <div className="absolute hidden md:block top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

        {steps.map(
          (step, index) =>
            showMore && (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center 
                ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image / Video */}
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
                      alt="img"
                      className="w-56 h-56 object-cover rounded-full shadow-lg"
                    />
                  )}
                </div>

                {/* Number Circle */}
                <div className="relative w-16 flex justify-center items-center my-5 md:my-0">
                  <div className="w-8 h-8 bg-white text-gray-700 font-bold rounded-full flex items-center justify-center border">
                    {step.id}
                  </div>
                </div>

                {/* Text Box */}
                <div className="flex-1 bg-teal-800/70 p-4 rounded-xl text-center shadow-lg">
                  <p className="text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            )
        )}
      </div>

      {/* Read Button */}
      <div className="flex justify-center pb-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-5 px-6 py-2 bg-white/20 border text-white rounded-full hover:bg-blue-600 transition cursor-pointer"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}
