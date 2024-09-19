import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import BarcodeScanner from './components/BarcodeScanner';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/barcode-scanner' element={<BarcodeScanner />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
