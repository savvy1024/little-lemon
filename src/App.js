import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home';
import AboutUs from './pages/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        

      </Layout>
    </ScrollToTop>
  );
}

export default App;
