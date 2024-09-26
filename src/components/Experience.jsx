import React from 'react';
import { FaHtml5, FaNodeJs } from 'react-icons/fa';
import { SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiReact, SiRedux } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';

const Experience = () => {
  const skills = [
    {
      id: 1,
      icon: <FaHtml5 className="text-orange-500" />,
      name: 'HTML5',
    },
    {
      id: 2,
      icon: <SiCss3 className="text-blue-500" />,
      name: 'CSS3',
    },
    {
      id: 3,
      icon: <SiJavascript className="text-yellow-500" />,
      name: 'JavaScript',
    },
    {
      id: 4,
      icon: <SiReact className="text-cyan-500" />,
      name: 'React',
    },
    {
      id: 5,
      icon: <SiRedux className="text-purple-500" />,
      name: 'Redux',
    },
    {
      id: 6,
      icon: <SiTailwindcss className="text-teal-500" />,
      name: 'Tailwind CSS',
    },
    {
      id: 7,
      icon: <SiBootstrap className="text-indigo-500" />,
      name: 'Bootstrap',
    },
    {
      id: 8,
      icon: <FaNodeJs className="text-green-500" />,
      name: 'Node.js',
    },
    {
      id: 9,
      icon: <DiMongodb className="text-green-600" />,
      name: 'MongoDB',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
          <p className="py-6">Technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, icon, name }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-gray-700"
            >
              <div className="text-6xl mx-auto">{icon}</div>
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

