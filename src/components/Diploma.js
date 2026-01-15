import { NavLink, Outlet, useParams } from "react-router-dom";
import {getDiploma} from '../api'
import '../ui/styles/diplomas.css'

export default function Diploma() {
    const { dipId } = useParams()
    const diploma = getDiploma(dipId)
    const getClass = ({ isActive }) => (isActive ? "module-active" : null);


    return (
    <>
        <h2>{diploma.name} Diploma</h2>
        <ul className="diploma">
            {diploma?.modules.map(module=> (
                <li key={module.id}>
                    <NavLink to={module.id} className={getClass}>{module.name}</NavLink>
                </li>
            ))}
        </ul>
        <Outlet/>
    </>
  );
}
