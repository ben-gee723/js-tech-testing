import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import { Loader } from './components/loaders/Loader'
// import { SpinnerDH } from './components/loaders/SpinnersDH';
import FetchComponent from './components/basics/FetchComponent'


function App() {

  // if (isLoading == true) return <Loader />;

  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello {name} </h1>
        <FetchComponent />
      </header>
    </div>
  );
}

export default App;
