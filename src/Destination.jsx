import React from 'react';
import jammu from '../public/img/jammu.jpg';
import jaipur from '../public/img/jaipur.jpg';
import mysore from '../public/img/mysore.jpg';
import waterfall from '../public/img/waterfall.jpg';

const destinations = [
  { img: jammu, title: 'Mountains' },
  { img: jaipur, title: 'Forts' },
  { img: mysore, title: 'Beautiful Palaces' },
  { img: waterfall, title: 'Waterfalls' },
];

export default function Destination() {
  return (
    <div className="lg:p-10 z-50 md:p-10 bg-gradient-to-b from-teal-900 to-teal-900 text-white destination">
      {/* ///////HEADING/////////// */}
      <section className="text-center z-50 lg:text-4xl md:text-3xl sm:text-4xl font-light">
        <h1>Destination Recommendations</h1>

        <div className="lg:my-10 md:my-10 text-white grid lg:grid-cols-2 md:grid-cols-2 text-center destination-box">
          {/* Split array into two groups for two columns */}
          {[0, 1].map((colIndex) => (
            <div key={colIndex} className="img-group grid lg:grid-cols-2 md:grid-cols-2">
              {destinations.slice(colIndex * 2, colIndex * 2 + 2).map((dest, index) => (
                <div
                  key={index}
                  className="transition-all duration-300 lg:w-3xs lg:ml-8 fav-places md:ml-3 md:w-[160px] lg:h-3xs"
                >
                  <img src={dest.img} alt={dest.title} className="rounded-3xl shadow-lg shadow-white/30" />
                  <h5 className="lg:text-4xl md:text-3xl">{dest.title}</h5>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
 