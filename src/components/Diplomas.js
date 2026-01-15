import '../ui/styles/diplomas.css'
import {getDiplomas} from '../api'
import { Outlet, Link } from 'react-router-dom'

export default function Diplomas() {
    const diplomas = getDiplomas()
    return (
        <div>
            <h1>Schools</h1>
            <ul className="diplomas">
                {diplomas.map(dip => (
                    <li key={dip.id}>
                        <Link to={dip.id}>{dip.name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </div>
    )
}