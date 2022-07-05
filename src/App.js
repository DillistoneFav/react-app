
import { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <Counter/>
      <br></br>
      <br></br>
      <br></br>
      <input onChange={event => setValue(event.target.value)} value={value}></input>
      <h1>{value}</h1>
    </div>
  );
}

export default App;
