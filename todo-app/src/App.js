import { useState } from 'react';
import './App.css';
import ItemList from './component/itemList';
let firstId = 1;

function App() {
  //input state
  const [items, setItems] = useState("");
  //list state
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState(false)

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

  function handleUpdate(id){
    const editItem = todoList.find(item => item.id === id)
    setItems({...editItem});
    setEdit(!edit);

  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input type="text" value={items} onChange={handleChange}/>
        <button id="add_item" onClick={handleItem}>+</button>
      </div>
      <ItemList 
        todoList={todoList} 
        edit={edit}
        handleDelete={handleDelete} 
        handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
