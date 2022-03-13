import React, { useEffect, useState } from 'react';
import './App.css';
import { Loader } from './components/Loader'
import { SpinnerDH } from './components/SpinnersDH';



function App() {
  // 1. react-loader-spinner
  const [isLoading, setIsLoading] = useState(true);

  // 2. react-spinners
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setLoading(false)
    }, 2500)
  })

  return (
    <div className="App">
      {isLoading == true ? <Loader /> : <div>Hello World 1</div>}
      {loading == true ? <SpinnerDH /> : <div>Hello World 2</div>}
    </div>
  );
}

export default App;
