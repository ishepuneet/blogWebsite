import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function Header() {
  const [isopen, setIsopen] = useState(false);

  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Travel", path: "/Travel" },
  ];

  return (
    <header className="z-50">

      {/* /////////////DESKTOP MENU BAR////////////////// */}
      <nav className="p-5 fixed top-0 lg:w-full md:w-3xl desktop-nav z-50">
        <ul className="grid grid-cols-4 text-center font-light text-xl text-white">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* /////////////MOBILE TOGGLE BUTTON//////////////// */}
      <button
        className="lg:hidden text-2xl fixed z-50 top-5 right-5 text-white md:hidden"
        onClick={() => setIsopen(!isopen)}
      >
        {isopen ? <RxCross2 /> : <FaBars />}
      </button>

      {/* /////////////MOBILE MENU///////////////// */}
      {isopen && (
        <nav className="responsive-nav max-w-60 pt-10 lg:hidden fixed top-0 -left-10 w-full md:hidden z-50">
          <ul className="grid grid-cols-1 text-center font-medium text-lg gap-y-4 text-white">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="border p-2 bg-black/20 rounded-r-4xl"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
