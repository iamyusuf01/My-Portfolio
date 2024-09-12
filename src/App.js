import Header from "./Componenets/Header";
import Footer from "./Componenets/Footer";
import Home from "./Componenets/Home";
import About from "./Componenets/About";
import Skills from "./Componenets/Skills";
import Projects from "./Componenets/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Componenets/Contact";



function App() {
  return (
     
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="about" element= {<About/>}/>
        <Route path="contact" element= {<Contact/>}/>
   {/*      <Route path="skills" element= {<Skills/>}/> */}
        <Route path="projects" element= {<Projects/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
};

export default App;
