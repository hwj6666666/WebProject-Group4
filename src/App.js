import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 className='text-center'>
          交大哪个食堂最好吃
        </h1>

        <button className='float-right'>
          上传评价对象
        </button>

        <div className='justify-center items-center flex h-200px w-150px'>
          <div className='h-50px w-100px'>
            <img src="../pictures/3000.png" alt="image" width="40" height="40" className='float-left'></img>
            <h2>一餐：5.0</h2>
            <h3>user: comment1</h3>
          </div>

          <div className='h-50px w-100px'>
            <img src="../pictures/3003.png" alt="image" width="40" height="40" className='float-left'></img>
            <h2>二餐：5.0</h2>
            <h3>user: comment2</h3>
          </div>
        </div>

        <div className='border-1'>
          <h2>
            热门话题
          </h2>
          <a href=''>
            <img src="../pictures/3000.png" alt="image" width="40" height={40} className='float-left'></img>
          </a>
        </div>

      </header>
    </div>
  );
}

export default App;
