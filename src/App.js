import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Device from './components/Device/Device';
import Informations from './components/Informations/Informations';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="Iphone" price="1200000"></Device>
      <Watch></Watch>
      <Cosmetics></Cosmetics>
      <Informations></Informations>
    </div>
  );
}

export default App;
