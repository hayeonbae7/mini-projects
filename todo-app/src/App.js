import { useState } from 'react';
import './App.css';
import Item from './component/item';


function App() {
  // const [item, setItem] = useState("");

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input type="text" />
        <button id="add_item">+</button>
      </div>
      <Item />
    </div>
  );
}

export default App;
