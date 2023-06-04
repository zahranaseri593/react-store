import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import MainPage from './components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainPage />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
