import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';

import Cart from './components/Cart';
import { Product,Products } from './components';
// import Products from './components/Products';
// import Product from './components/Product';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
