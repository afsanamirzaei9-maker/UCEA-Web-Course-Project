import { NavLink } from 'react-router-dom';
import './navbar.css';
import NavLinks from './NavLinks';
import { navbarData } from './navbarData';
export const Navbar = () => {
    return ( 
        <>
            <div className="navbar-container w-full flex justify-between px-10 py-3 bg-purple-500">
                <div className="navLogo"><span>پروژه</span></div>
                <ul className="navbar-ul flex">
                    {navbarData.map((navLink)=>(
                        <NavLinks 
                        key={navLink.id}
                        {...navLink}/>
                    ))}
                </ul>
                {/* <button className="text-success"> read more</button> */}
            </div>    
        </>
    );
}