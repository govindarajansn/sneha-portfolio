import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
// import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';
import Index from './pages/Index';
import About from './pages/About';
import Skills from './pages/Skills';
import CareerPath from './pages/CareerPath';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/careerPath" element={<CareerPath />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />}/>
      {/* </Route> */}
    </Routes>
   
  );
}

export default App;
