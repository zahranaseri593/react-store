import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Navigate to="/products"/>} />
            <Route path='/products' element={<MainPage />}/>
            <Route path='/products/:id' element={<ProductPage />}/>
            <Route path='/cart/:id?' element={<p>cart</p>}/>
            <Route path='/register' element={<p>register</p>}/>
            <Route path='/login' element={<p>login</p>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
