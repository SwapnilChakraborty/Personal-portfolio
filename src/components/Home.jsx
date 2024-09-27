import React from 'react';
import { TiArrowRightOutline } from 'react-icons/ti';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4">
        <div>
          <h2 className="text-4xl sm:text-7xl font-bold">Hi, I'm a MERN Stack Developer</h2>
          <p className="text-gray-400 py-4 max-w-md">
            I design and develop real-life projects, specializing in creating
            stylish, modern websites, web services, and online stores. I am
            passionate about creating user-friendly experiences, and I love what
            I do.
          </p>
        </div>
        <Link to='Portfolio' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300">
          Portfolio
          <span className="group-hover:-rotate-180 duration-300 ml-2">
            <TiArrowRightOutline size={25} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
