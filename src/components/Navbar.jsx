// Navbar.jsx
import React, { useState } from 'react';
import { TfiAlignJustify } from 'react-icons/tfi';
import { Link } from 'react-scroll'; // Importing Link for smooth scroll functionality

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, name: 'home' },
    { id: 2, name: ' experience' },
    { id: 3, name: 'about' },
    { id: 4, name: 'Portfolio' }, // Correct name for the Projects section
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-slate-900 px-4 fixed">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-signature ml-2 shadow-slate-900">
          Swapnil Chakraborty
        </h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex">
        {links.map(({ id, name }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            <Link onClick={() => setNav(!nav)}
            to={name} smooth duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-2xl md:hidden"
      >
        <TfiAlignJustify />
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-900 text-white">
          {links.map(({ id, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              
            >
              <Link
              onClick={() => setNav(!nav)}
              to={name} 
              
              smooth={true} duration={500}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;


