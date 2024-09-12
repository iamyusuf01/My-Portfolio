import React from 'react'
const Home = () => {
  return (
    <div className='flex w-full h-[499px] justify-between bg-black overflow-hidden scroll-smooth'>
      <div className='p-28 text-white '>
        <p className='text-sm font-serif text-yellow-200 '>Hello!</p>
        <div className='flex gap-2 text-[30px] font-serif'> I'm
          <h1 className='font-serif text-yellow-500 text-[28px]'> Md Yusuf</h1>
          <h2 className='font-serif text-yellow-500 text-[28px]'>Ansari</h2>
        </div>
        <h3 className='text-[40px] font-serif text-yellow-100'>Front-End Developer </h3>
        <div className='text-sm font-serif text-yellow-100'>
          <p className='py-1'> Highly motivated and results-driven professional seeking an opportunity with a reputable company to leverage my skills and background studies.</p> 
          <p className='py-1'> With a solid foundation of principles, I am eager to contribute to the success.</p>
          <p className='py-1'> my strong interest in the Front End Developer position.</p>
          <p className='py-1'> As a recent graduate with a  Bachelor of Technology and a strong foundation in front-end technologies, </p>
          <p className='py-1'> I am excited about the opportunity to contribute to your team and help create exceptional user experiences.</p>
          </div>
        <div />
      </div>
      <img className='w-[499px] h-[499px]' src="./img/pic.png" alt='' />
    </div>
  )
}

export default Home