import './App.css';
import PhoneList from './components/phoneList';

function App() {
  return (
    <div className="App">
      <h1>전화번호부</h1>
      <div>
        <input type='text' />
        <button className="input-submit">확인</button>
      </div>
      <PhoneList />
      

    </div>
  );
}

export default App;
