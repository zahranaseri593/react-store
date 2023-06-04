import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        app
      </Layout>
    </BrowserRouter>
  );
}

export default App;
