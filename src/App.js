import { Route, Routes} from "react-router-dom";
import Home from "./components/Home.js";
import Diplomas from "./components/Diplomas.js";
import Diploma from "./components/Diploma.js";
import { Navbar } from "./ui/components/Navbar";
import Module from "./components/Module.js";
import Register from "./components/Register.js";
import Confirmation from "./components/Confirmation.js";

function App() {
  return (
    <div className="container">
        <Navbar/>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="diplomas" element={<Diplomas/>}>
            <Route path=":dipId" element={<Diploma/>}>
              <Route path=":moduleId" element={<Module/>} />
            </Route>
          </Route>
          <Route path="register" element={<Register/>}/>
          <Route path="confirmation" element={<Confirmation/>} />
        </Routes>


    </div>
  );
}

export default App;
