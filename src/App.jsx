import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Transaction from './components/Transaction'
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path="/" element={<Navigate to="/products"/>} />
              <Route path='/products' element={<MainPage />}/>
              <Route path='/products/:id' element={<ProductPage />}/>
              <Route path='/cart/:id?' element={<Cart/>}/>
              <Route path='/transaction' element={<Transaction />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/login' element={<Login />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
