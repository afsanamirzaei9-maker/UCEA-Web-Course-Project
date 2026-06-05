
import { NavLink } from 'react-router-dom'

export default function NavLinks({title, path}) {
  return (
    <>
        <li className="px-3 py-1"><NavLink to={path}className='text-decoration-none text-white'>{title}</NavLink></li>
    </>
  )
}
