import './App.css';
import Contents from './contents';

function App() {
  return (
    <div className="App">
      <header>
        <div className='header-contents'>
          <a href='https://www.29cm.co.kr' className='header-logo'>29CM</a>
          <ul className='header-menu'>
            <li>
              MY PAGE
            </li>
            <li>
              MY LIKE
            </li>
            <li>
              SHOPPING BAG
            </li>
            <li>
              LOGIN
            </li>
          </ul>
        </div>
        <div className='header-banner'>
          <h1>
            SPRING SALE
          </h1>
        </div>
      </header>
      <main>
        <ul className='main-header'>
          <li>혜택&이벤트</li>
          <li>패션</li>
          <li>잡화</li>
          <li>라이프</li>
        </ul>
      </main>
      <Contents />
    </div>
  );
}

export default App;
