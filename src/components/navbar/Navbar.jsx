import { NavLink } from 'react-router-dom';
import './navbar.css';
export const Navbar = () => {
    return ( 
        <>
            <div className="navbar-container border border-white w-screen bg-red-800">
                <div className="navLogo"><span>پروژه</span></div>
                <ul className="navbar-ul">
                    <li className="border border-blue-200 bg-green-800"><NavLink to="/" className='border border-pink-400' >Home</NavLink></li>
                    <li className="border border-blue-200"><NavLink to="/about" className='border border-pink-400' >About</NavLink></li>
                    <li className="border border-blue-200"><NavLink to="/blog" className='border border-pink-400' >Blog</NavLink></li>
                    <li className="border border-blue-200"><NavLink to="/panel" className='border border-pink-400' >Panel</NavLink></li>
                    <li className="border border-blue-200"><NavLink to="/login" className='border border-pink-400' >Login</NavLink></li>
                </ul>
            </div>    
        </>
    );
}