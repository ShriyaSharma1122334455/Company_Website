import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import About_us from './Component/About Us/About_us';
import Applications from './Component/Applications/Applications';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About_us/>
      <Applications/>
    </div>
  );
}

export default App;