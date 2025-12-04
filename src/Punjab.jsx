import React, { useEffect, useState } from "react";

export default function Punjab() {
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
      img: "/img/goldentemple.jpg",
      text: "The Golden Temple, also known as Shri Harmandir Sahib, is located in Amritsar. This iconic temple is the first in the world made entirely of gold. Built in the middle of a sacred pond, the reflection of the temple creates a mesmerizing view day and night. It receives nearly 100,000–150,000 visitors daily. The temple also hosts the world’s largest langar, serving free meals to more than 100,000 people every day.",
      isVideo: false,
    },
    {
      id: 2,
      img: "/img/jaliyan.mp4",
      text: "Jallianwala Bagh is a historical memorial that reminds visitors of the tragic massacre that took place here. The walls still bear the bullet marks, making this place an emotional and deeply impactful experience.",
      isVideo: true,
    },
    {
      id: 3,
      img: "/img/market.jpg",
      text: "After visiting the temple, you can explore the local market where handcrafted traditional items are sold. For women who love suits, bangles, jhumkas, and ethnic accessories, this market is a paradise.",
      isVideo: false,
    },
    {
      id: 4,
      img: "/img/border.mp4",
      text: "Around 5 PM, you can visit the Wagah Border, the boundary line between India and Pakistan. The energy, enthusiasm, and patriotic zeal during the ceremony will fill your heart with pride.",
      isVideo: true,
    },
  ];

  return (
    <section
      className={`relative max-w-3xl mx-auto p-4 text-white transition-all font-serif my-10 duration-1000 ease-out ${
        show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Background Video
      <video
        src="/img/golden.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 rounded-4xl -z-10"
      ></video> */}

      <h1 className="text-[goldenrod] text-5xl md:text-6xl mt-10 text-center punjab-heading">
        Punjab
      </h1>

      <div className="space-y-16 my-10 relative">
        {/* Vertical line */}
        <div className="absolute lg:block md:block sm:hidden top-0 left-1/2 -translate-x-1/2 h-[90%] w-1 bg-gray-300"></div>

        {showMore &&
          steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image or Video */}
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

              {/* Text Bubble */}
              <div className="flex-1 flex justify-center">
                <p className="max-w-sm text-sm text-center p-3 bg-teal-700/80 text-[gold] border-2 rounded-4xl">
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
          className="mt-5 px-5 py-2 text-white hover:bg-[#bc8a0b] border rounded-full transition cursor-pointer"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}
