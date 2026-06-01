import { NavLink } from 'react-router-dom';
import './navbar.css';
export const Navbar = () => {
    return ( 
        <>
            <div className="navbar-container border border-white w-full flex justify-between px-10 py-5 bg-purple-500">
                <div className="navLogo"><span>پروژه</span></div>
                <ul className="navbar-ul flex">
                    <li className="border border-blue-200 bg-green-800 p-3"><NavLink to="/" className='border border-pink-400 decoration-none' >Home</NavLink></li>
                    <li className="border border-blue-200"><NavLink to="/about" className='border border-pink-400' >About</NavLink></li>
                    <li className="border border-blue-200"><NavLink to="/blog" className='border border-pink-400' >Blog</NavLink></li>
                    <li className="border border-blue-200"><NavLink to="/panel" className='border border-pink-400' >Panel</NavLink></li>
                    <li className="border border-blue-200"><NavLink to="/login" className='border border-pink-400' >Login</NavLink></li>
                </ul>
                {/* <button className="text-success"> read more</button> */}
            </div>    
        </>
    );
}