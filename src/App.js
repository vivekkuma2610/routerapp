import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom"
import All from './components/All';
import Fsd from './components/Fsd';
import Datascience from './components/Datascience';
import CyberSecurity from './components/Cybersecurity';
import Career from './components/Career';

function App() {
  return (
    <div className="App"> 
    <NavBar/> 
    <hr></hr>
      <Routes>
        <Route path="/all" element={<All/>} />
        <Route path="/fsd" element={<Fsd/>} />
        <Route path="/datascience" element={<Datascience/>} />
        <Route path="/cybersecurity" element={<CyberSecurity/>} />
        <Route path="/career" element={<Career/>} />
      </Routes>
    </div>
  );
}

export default App;