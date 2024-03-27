import { useState } from 'react';
import './App.css';
import Item from './component/item';


function App() {
  const [items, setItems] = useState("");

  function handleChange(e) {
    setItems(e.target.value);
  }

  function handleItem() {
    const newItems = {...items}
    setItems(newItems);
  }

  console.log(items);

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input type="text" target={items} onChange={handleChange}/>
        <button id="add_item" onClick={handleItem}>+</button>
      </div>
      <Item items={items}/>
    </div>
  );
}

export default App;
