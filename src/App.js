import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";
import AboutUs from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import OrderOnline from "./pages/OrderOnline";

function App() {
  return (
    <ScrollToTop>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/order-online' element={<OrderOnline />} />
          <Route path='/menu'  element={<OrderOnline />} />
        </Routes>
      </Layout>
    </ScrollToTop>
  );
}

export default App;
