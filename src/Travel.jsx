import React, { useEffect, useState } from 'react';

export default function Travel() {
  ////////////////TEXT ANIMATION/////////////////
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  //////ANIMATION AND DYNAMIC WORK/////////

  const places = [
    {
      
      title: "🏔️ Mountains & Hill Stations",
      items: [
        "Manali & Rohtang Pass (Himachal Pradesh) – Snow, adventure sports.",
        "Leh–Ladakh (Jammu & Kashmir) – Pangong Lake, Nubra Valley, monasteries.",
        "Darjeeling (West Bengal) – Tea gardens, toy train, Kanchenjunga views.",
        "Munnar (Kerala) – Tea plantations, greenery, misty hills.",
      ],
    },
    {
      
      title: "🏖️ Beaches & Islands",
      items: [
        "Goa – Nightlife, beaches, forts.",
        "Andaman & Nicobar – Scuba diving, Radhanagar beach.",
        "Lakshadweep – Coral reefs, clear waters.",
        "Pondicherry – French architecture, serene beaches.",
      ],
    },
    {
      
      title: "🏰 Heritage & Forts",
      items: [
        "Jaipur – Amer Fort, Hawa Mahal.",
        "Jodhpur – Mehrangarh Fort, blue houses.",
        "Agra – Taj Mahal, Agra Fort.",
        "Mysore – Mysore Palace, Chamundi Hills.",
      ],
    },
    {
      title: "🌿 Nature & Adventure",
      items: [
        "Rishikesh (Uttarakhand) – Yoga, rafting, Ganga aarti.",
        "Jim Corbett National Park (Uttarakhand) – Tiger safari.",
        "Valley of Flowers (Uttarakhand) – Trekking, rare flowers.",
        "Meghalaya (Cherrapunji & Mawlynnong) – Living root bridges, waterfalls."
      ]
    },
    {
      title: "🛕 Spiritual Places",
      items: [
        "Varanasi (Uttar Pradesh) – Ganga ghats, aarti, spirituality.",

        "Golden Temple (Amritsar, Punjab) – Sacred Sikh shrine.",

        "Tirupati Balaji (Andhra Pradesh) – Most visited Hindu temple.",

        "Jagannath Puri (Odisha) – Rath Yatra, spiritual hub.",
      ]
    }
  ];


  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      places.forEach((_, index) => {
        const element = document.getElementById(`place-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[url(/img/tajdeskbg.png)] bg-cover bg-center bg-fixed taj-bg min-h-screen py-20">
      <section className="max-w-screen-2xl m-auto text-white lg:p-5 md:p-5">
        <h3
          className={`lg:text-8xl text-center md:text-7xl travel-heading transition-transform duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-30 opacity-0'
            }`}
        >
          Best Places to Visit
        </h3>


        <div className="my-10 flex flex-col gap-10">
          {places.map((place, index) => {
            const isVisible = visibleIndexes.includes(index);
            const alignment =
              index % 2 === 0 ? "lg:ml-0 lg:mr-auto" : "lg:mr-0 lg:ml-auto";

            return (
              <div
                id={`place-${index}`}
                key={index}
                className={`border  p-6 mx-auto rounded-xl shadow-2xl shadow-white/50 bg-gray-500/30 text-white 
              max-w-[500px] w-full transition-all duration-700 ease-out
              ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-30"
                  }
              ${alignment}`}
              >
                <h6 className="text-2xl">{place.category}</h6>
                <h5 className="text-xl my-3">{place.title}</h5>
                <ul className="list-disc ml-6 my-5 space-y-2">
                  {place.items.map((item, i) => (
                    <li key={i} className="text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
