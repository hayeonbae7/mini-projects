import './App.css';
import Contents from './contents';

function App() {
  return (
    <div className="App">
      <header>
        <div className='header-contents'>
          <div className='header-logo'>29CM</div>
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
          <img 
            src='https://img.29cm.co.kr/next-edition/2023/03/09/461b29e9a962427899fadfe95f604e2d_20230309151719.gif?width=3000&q=90'
            alt='봄 이벤트 이미지' />
        </div>
      </header>
      <Contents />
    </div>
  );
}

export default App;
