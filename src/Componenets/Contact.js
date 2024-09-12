const Contact = () => {
    const handleClick = () => {
        
    }
  return (
    <div className=' flex justify-center w-full h-[360px] p-6 font-serif bg-black'>
        <div className=' h-[300px] w-[360px]'>
            <h1 className='text-center font-serif text-3xl text-white mb-2'>Contact</h1>
            <form>
                    <input className='w-full p-1 rounded-md border-2 border-gray-400 ' type='text' placeholder='Your Name'/>
                    <input className='w-full p-1 my-2  rounded-md border-2 border-gray-400 ' type='text' placeholder='Your Email'/>
                    <textarea className='w-full p-1 mt-2 rounded-md border-2 border-gray-400 ' placeholder='Your Message'></textarea>
                    <button onClick={handleClick()} className='w-full p-1 mt-2 rounded-md bg-blue-500 text-white font-serif'>Submit</button>
            </form>
        
        </div>
    </div>
  )
}

export default Contact