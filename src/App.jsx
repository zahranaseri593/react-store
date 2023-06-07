import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import { CartContextProvider } from './utils/CartContextProvider';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path="/" element={<Navigate to="/products"/>} />
              <Route path='/products' element={<MainPage />}/>
              <Route path='/products/:id' element={<ProductPage />}/>
              <Route path='/cart/:id?' element={<Cart/>}/>
              <Route path='/register' element={<p>register</p>}/>
              <Route path='/login' element={<p>login</p>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
