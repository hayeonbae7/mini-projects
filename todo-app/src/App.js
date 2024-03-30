import { useState } from 'react';
import './App.css';
import ItemList from './component/itemList';
let firstId = 1;

function App() {
  //input state
  const [items, setItems] = useState("");
  //list state
  const [todoList, setTodoList] = useState([]);

  //type 변경
  function handleChange(e) {
    setItems(e.target.value);
    ;
  }

  function handleItem() {
    const newItem = {
      id: firstId,
      text: items
    }
    setTodoList([...todoList, newItem])
    firstId++
  }

  function handleDelete(id) {
    const newLists = todoList.filter((item) => item.id !== id)
    setTodoList(newLists);
  }

  function handleUpdate(){

  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input type="text" value={items} onChange={handleChange}/>
        <button id="add_item" onClick={handleItem}>+</button>
      </div>
      <ItemList todoList={todoList} handleDelete={handleDelete} handleUpdate = {handleUpdate} />
    </div>
  );
}

export default App;
