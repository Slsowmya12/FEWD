import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react'
import Home1 from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <span> </span>
            <Link to="/contact">Contact</Link>
            <span> </span>
            <Link to="/about">About</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/about" element={<About></About>}></Route>
        </Routes>
    </Router>

  )
}

export default App