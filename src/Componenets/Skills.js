import React from 'react'

const Skills = () => {

  const skills = [
   {
    name: 'Html',
    
    description: 'React is a JavaScript '
   },
   {
    name: 'Css',
    
    description: 'React is a JavaScript '
   }, 
   {
    name: 'Tailwind',
  
    description: 'React is a JavaScript '
   }, 
   {
    name: 'JavaScript',
   
    description: 'React is a JavaScript '
   },
   {
    name: 'React',
   
    description: 'React is a JavaScript '
   },
    {
    name: 'C',

    description: 'React is a JavaScript'
   }, 
   {
    name: 'C++',
    description: 'React is a JavaScript '
   },
   

  ]
  return (
    <div className=''>
     <h1 className=' bg-black text-white font-serif text-2xl text-center py-6 p-6'>Skills</h1>
      <div className='bg-black flex justify-evenly w-full text-white font-serif p-6 text-xl'>  
          {
            skills.map((skill, index) => {
              return (
                <div className='' key={index}>
                  <img src={skill.image} alt=''/> {skill.image}
                  <h2>{skill.name}</h2>
                </div>
              )
            })
          }
  
      </div>
    </div>
  )
}

export default Skills;