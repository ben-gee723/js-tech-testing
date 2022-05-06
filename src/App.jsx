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

  if (isLoading == true) return <Loader />;

  return (
    <div className="App">
      <header className="App-header">
        <div>Hello World 1</div>
        {/* {loading == true ? <SpinnerDH /> : <div>Hello World 2</div>} */}
      </header>
    </div>
  );
}

export default App;
