// import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar';
import { Product } from './Product';
import { Slider } from './Slider.js';

function App() {
  return (
    <div>
      <NavBar />
      <Slider />
      <Product/>
      {/* product component
      footer */}
    </div>

  );
}

export default App;
