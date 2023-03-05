import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
        
      </Layout>
    </ScrollToTop>
  );
}

export default App;
