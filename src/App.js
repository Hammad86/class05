
import './App.css';
import contextCreator from './context/Context';
import Parent from './components/Parent';
import { useState } from 'react';

function App() {
  let stateVar = useState(1)
  // let [counter , setCounter] = useState(5)
  return (
    <contextCreator.Provider value={stateVar}>
    <div className="App">
      <Parent/>
    </div>
    </contextCreator.Provider>
  );
}

export default App;
