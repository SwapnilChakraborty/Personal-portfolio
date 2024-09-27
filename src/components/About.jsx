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
                I am a Btech Computer science student (2024). I am passionate about creating user-friendly experiences, and I love what I do. Here is 
                my portfolio.
               
            </p>
        </div>
    </div>
  )
}

export default About