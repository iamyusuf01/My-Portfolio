import React from 'react'

const About = () => {

  const details = [
    {
      title:'Name :',
      content:'Md Yusuf Ansari'
    },
    {
      title:'Address :',
      content:'Darbhanga, Bihar'
    },
    {
      title:'Zip Code :',
      content:'846006'
    },
    {
      title:'Email :',
      content:'mdyusuf1202@gmail.com'
    },
    {
      title:'Phone :',
      content:'8207727736'
    },
 ];
  return (
    <div className='flex w-full h-[360px] bg-black shadow-xl-white '>
      <div>
        <img className='w-full h-[370px]' src='./img/pic.png' alt=''/>
      </div>
      <div className='p-16 ml-10 text-white '>
      <div className='h-16 font-serif ml-1 mb-4 '>
       <h1 className='text-2xl'>About Me</h1>
       <p className='mt-4  text-gray-400'> Even if I don't reach all my goals, I've gone higher than I would have if I hadn't set any</p>
       </div>
        {
          details.map((detail, index) => {
            return (
              <div className='flex p-1 font-serif text-xl justify-between mr-20' key={index} >
                <h2>{detail.title}</h2>
                <p className='  text-gray-400'>{detail.content}</p>
              </div>
            )
          })
        }
      
      </div>
    </div>
  )
}

export default About