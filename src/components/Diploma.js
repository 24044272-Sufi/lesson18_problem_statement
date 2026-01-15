import { Link, Outlet, useParams } from "react-router-dom";
import {getDiploma} from '../api'
import '../ui/styles/diplomas.css'

export default function Diploma() {
    const { dipId } = useParams()
    const diploma = getDiploma(dipId)
    
    return (
    <>
        <h2>{diploma.name} Diploma</h2>
        <ul className="diploma">
            {diploma?.modules.map(module=> (
                <li key={module.id}>
                    <Link to={module.id}>{module.name}</Link>
                </li>
            ))}
        </ul>
        <Outlet/>
    </>
  );
}
