import Title from './Title'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
     <div className=" flex text-center justify-between bg-black overflow-hidden scroll-m-4 text-white p-6 "> 
        <Title />
       <div className="" >
          <ul className='flex gap-6 font-serif text-[18px]'>
          <Link to="/">
            <li className=' hover:text-blue-300' >Home</li>
            </Link>
            <Link to="/about">
            <li className=' hover:text-blue-300'>About</li>
            </Link>
            <Link to="/contact">
            <li className=' hover:text-blue-300'>Contact</li>
            </Link>
            <Link to="/skills">
            {/* <li className=' hover:text-blue-300'>Skills</li> */}
            </Link>
            <Link to="/projects">
            <li className=' hover:text-blue-300'> Projects</li>
            </Link>
          </ul>
       </div>    
    </div>
    )
}

export default Header