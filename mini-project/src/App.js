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
      <Contents />
    </div>
  );
}

export default App;
