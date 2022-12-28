import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router';
import About from './components/About'
import Products from './components/Products'
import Home from './components/Home'
import Cart from './components/CartInfo';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
