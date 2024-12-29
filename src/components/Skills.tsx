import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
        <h2 className='text-4xl md:text-5xl' style={{ color: '#990011' }} data-aos="zoom-in"><b>Tech Stack I Use</b></h2>
        
            <p className='text-[#6c1620] pt-2'  data-aos="zoom-in">I am a skilled web developer specializing in HTML, CSS, JavaScript, and TypeScript, creating responsive and interactive websites. With Next.js, I build fast, server-side rendered applications that perform seamlessly. My expertise in Python enables me to develop robust back-end systems and APIs. Additionally, I leverage C++ for performance optimization and problem-solving. I combine these technologies to craft dynamic, user-friendly solutions. Whether front-end or back-end, I’m dedicated to delivering high-quality, scalable web applications. I focus on clean code, optimal performance, and a great user experience. Let’s build something amazing together!
            </p>
        </div>
        <div>
            <div className='grid grid-cols-3 text-[#990011] text-3xl sm:text-4x1'>
                <div className='space-y-2' data-aos="zoom-in-down">
                    <h1>Typescript</h1>
                    <h1>React.js</h1>
                    <h1>next.js</h1>
                    <h1>Html</h1>
                </div>
                <div className='space-y-2'data-aos="zoom-in-down">
                    <h1>Tailwind</h1>
                    <h1>CSS</h1>
                    <h1>next.js</h1>
                    <h1>Javascript</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
