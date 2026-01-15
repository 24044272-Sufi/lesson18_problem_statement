import { NavLink, Link } from 'react-router-dom'
import '../styles/navbar.css'

export function Navbar(){
    const getClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
    return (
        <nav className='navbar'>
            <Link to="/">
                <img src='/rplogo.png' alt='Logo' height={50}/>
            </Link>

            <div className='nav-container'>
                <NavLink to="/" className={getClass}>
                Home
                </NavLink>
                <NavLink to="/diplomas" className={getClass}>
                Diplomas
                </NavLink>
                <NavLink to="/register" className={getClass}>
                Register
                </NavLink>
            </div>
        </nav>
    )
}


