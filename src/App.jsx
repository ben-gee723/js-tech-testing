import React, { useEffect, useState, useContext } from 'react';
import './App.css';

// Router
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


// Komponenten
import { Loader } from './components/loaders/Loader'
// import { SpinnerDH } from './components/loaders/SpinnersDH';
import FetchComponent from './components/basics/FetchComponent'

import Home from './seiten/Home';
import About from './seiten/About';
import Contact from './seiten/Contact';

import BilderNav from './seiten/bilder/BilderNav'
import Mer from './seiten/bilder/Mer'
import Waelde from './seiten/bilder/Waelde'
import Himmel from './seiten/bilder/Himmel'


function App() {

  // if (isLoading == true) return <Loader />;

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
            <NavLink to="/bilder" >Bilder</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bilder" element={<BilderNav />}>
              <Route path="/bilder/mer" element={<Mer />} />
              <Route path="/bilder/waelde" element={<Waelde />} />
              <Route path="/bilder/himmel" element={<Himmel />} />
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
