import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-300">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl'>   
                I am Swapnil Chakraborty.        
           </p>
            <br />
            <p className='text-xl'>
                I am a Full Stack Web Developer. I love to create beautiful and interactive websites.
            </p>
        </div>
    </div>
  )
}

export default About