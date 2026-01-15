import '../ui/styles/diplomas.css'
import {getDiplomas} from '../api'
import { Outlet, NavLink, useOutlet } from 'react-router-dom'

export default function Diplomas() {
    const outlet = useOutlet();
    const getClass = ({ isActive }) => (isActive ? "diploma-active" : null);
    

    const diplomas = getDiplomas()
    return (
        <div>
            <h1>Schools</h1>
            <ul className="diplomas">
                {diplomas.map(dip => (
                    <li key={dip.id}>
                        <NavLink to={dip.id} className={getClass}>{dip.name}</NavLink>
                    </li>
                ))}
            </ul>
            {outlet ? (<Outlet/>) : (<h3>Select a diploma from above</h3>)}
        </div>
    )
}