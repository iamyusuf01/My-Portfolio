import React from 'react'

const cardData = [
   
    {
        title: 'Swiggy Clone',
        description: '',
        imgUrl: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        
    },
    {
        title: 'Spotify Clone',
        description: '',
        imgUrl: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        
    },
    {
        title: 'Netflix Clone',
        description: '',
        imgUrl: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        
    },
    {
        title: 'YouTube Clone',
        description: '',
        imgUrl: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        
    },
    {
        title: 'Instagram Clone',
        description: '',
        imgUrl: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        
    },
    {
        title: 'Facbook Clone',
        description: '',
        imgUrl: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        
    },
    
]
const Projects = () => {
    return (
        <div className=' flex-wrap w-full h-[360px] bg-black overflow-hidden scroll-smooth text-white'>
            <div className='flex flex-wrap justify-evenly h-[100px] gap-4'>
            {
                cardData.map((card ,i ) => {
                    return(
                        <div key={i} className='p-4'>
                            <div className='relative'>
                            <img className='border h-[145px] w-[290px]' src={card.imgUrl} alt='' />
                            <h3 className='absolute bottom-3 left-2 font-serif text-[16px] text-center border rounded-md h-6 w-32'>{card.title}</h3>
                            </div>
                            <p>{card.description}</p>
                        </div>
                    )
                })
            }
            </div>

        </div>
    )
}

export default Projects