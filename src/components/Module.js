import { useParams } from "react-router-dom";
import {getModule} from '../api'


export default function Module() {
    const { moduleId, dipId } = useParams()
    const module = getModule(dipId, moduleId)
    // console.log(module)
    
    return (
    <>
      <h2>Module</h2>
      <h2>{module.name}</h2>
      <p>{module.description}</p>
    </>
  );
}
