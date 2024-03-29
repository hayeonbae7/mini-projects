import { useState } from 'react';
import './App.css';
import ItemList from './component/itemList';


function App() {
  //input state
  const [items, setItems] = useState('');
  //list state
  const [todoList, setTodoList] = useState([]);

  function handleChange(e) {
    setItems(e.target.value);
  }

  function handleItem() {
    setTodoList([...todoList, items])
  }

  console.log(items);

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input type="text" value={items} onChange={handleChange}/>
        <button id="add_item" onClick={handleItem}>+</button>
      </div>
      <ItemList todoList={todoList} />
    </div>
  );
}

export default App;
