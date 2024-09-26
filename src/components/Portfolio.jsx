import React from 'react';
import krypto from '../assets/6553a37af7fc8bf600f53441_61800cf16e58221b1e98adb3_CryptoArt_Article_Thumb_v2.webp';
import portfolio from '../assets/cartoon-style-character-traveling_23-2151129736.webp';
import keywords from '../assets/drop-down-animations.webp';
import FoodDelivery from '../assets/360_F_714314602_Q2uJCplzDEEE0bVKlIO7mOujgE50OCP9.webp';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: krypto,
      title: 'Krypto ',
      description: 'A crypto-art marketplace built using React and Blockchain technologies.',
      link: 'https://github.com/SwapnilChakraborty/Krypto.git', 
    },
    {
      id: 2,
      src: portfolio,
      title: ' Portfolio',
      description: 'A personal portfolio showcasing my skills and projects.',
      link: '#', 
    },
    {
      id: 3,
      src: keywords,
      title: 'Keyword Animation',
      description: 'A project use for prediction of keyword based on user input.',
      link: 'https://github.com/SwapnilChakraborty/KEYBOARD-AUTO-SUGGESTION-APPLICATION.git', 
    },
    {
      id: 4,
      src: FoodDelivery,
      title: 'Food Delivery App',
      description: 'A full stack food delivery application with modern UI and advanced order tracking features.',
      link: 'https://github.com/SwapnilChakraborty/Food-Delivery-Website.git', 
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full p-4 md:p-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, src, title, description, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105 object-cover w-full h-48"
              />
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-400">{description}</p>
              </div>
              <div className="flex items-center justify-center mt-4">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 rounded-md text-white"
                >
                  View Project Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
