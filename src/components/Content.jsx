import { Routes,Route } from "react-router-dom";
import Work from "../pages/Work";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Content = () =>{
    return(
        <Routes>
            <Route path="/" element={<Work/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/resume" element={<About/>}/>
        </Routes>
    );
}

export default Content;