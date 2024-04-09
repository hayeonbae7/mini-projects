import { useState } from 'react';
import './App.css';
import PhoneList from './components/phoneList';
import AddPhone from './components/addPhone';

let firstId = 1;

function App() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const [info, setInfo] = useState([])

  const [open, setOpen] = useState(false)
  

  function handleCreate() {
    const newInfo = {
      id: firstId,
      name: name,
      number: number
    }
    setInfo([...info, newInfo])
    firstId++;
    setOpen(!open);
    setName("");
    setNumber("");
  }

  function handleClick(){
    setOpen(!open);
  }

  return (
    <div className="App">
      
      {(open)? 
        <AddPhone 
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          handleCreate={handleCreate} /> : 
        <div>
          <h1>전화번호부</h1>
          <div>
            <input type='text' className='search-input' />
            <button className="search">검색</button>
          </div>
          <PhoneList info={info} />
          <button 
            className='create-btn'
            onClick={handleClick}>
            추가
          </button>
        </div>
      }
    </div>
  );
}

export default App;
