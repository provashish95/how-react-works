import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="Iphone" price="1200000"></Device>
      <Watch></Watch>
      <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;
