import { useParams } from "react-router-dom";
import { getModule } from '../api'
import '../ui/styles/module.css'


export default function Module() {
    const { moduleId, dipId } = useParams()
    const module = getModule(dipId, moduleId)

    return (
        <>
            <h2 className="module-h2">Module</h2>
            <ul className="module-ul">
                <h3>{module.name}</h3>
                <p>{module.description}</p>

                <h4>Lecturer</h4>
                <span>{module.lecturer}</span>
            </ul>
        </>
    );
}
