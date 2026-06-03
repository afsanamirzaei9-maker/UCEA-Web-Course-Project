import { NavLink } from 'react-router-dom';
import './navbar.css';
import NavLinks from './NavLinks';
import { navbarData } from './navbarData';
import { useState} from 'react'
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <>
            <nav className="navbar-container w-full  px-10 py-3 bg-purple-500">

                <div className="flex justify-between">
                    <div className="navLogo font-lalezar text-3xl"><span>پروژه</span></div>

                    {/* Desktop Menue */}
                    <div className="desktopMenu flex justify-between">
                        <ul className="hidden md:flex">
                            {navbarData.map((navLink)=>(
                                <NavLinks 
                                key={navLink.path}
                                {...navLink}/>
                            ))}
                        </ul>
                        
                        {/* menu button */}
                        <button className="text-success md:hidden"
                            onClick ={()=> setIsOpen(!isOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#00000">
                                 <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                            </svg>
                        </button>
                    </div>
                </div>


                {/* Mobile Menue */}
                { 
                    isOpen && (
                        <ul className="mobilMenu md:hidden flex flex-col items-center space-y-3 my-4">
                            {navbarData.map((navLink)=>(
                                <NavLinks 
                                key={navLink.path}
                                {...navLink}
                                className=""
                                />
                            ))}
                        </ul>
                    )
                }

                
            </nav>    
        </>
    );
}