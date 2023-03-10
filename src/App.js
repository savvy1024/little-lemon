import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";
import AboutUs from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import OrderOnline from "./pages/OrderOnline";
import Booking from './pages/Booking';
import Menu from "./pages/Menu";
import Confirmation from './pages/ConfirmedBooking';

function App() {
  return (
    <ScrollToTop>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/order-online' element={<OrderOnline />} />
          <Route path='/menu'  element={<Menu />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/confirmation' element={<Confirmation />} />
        </Routes>
      </Layout>
    </ScrollToTop>
  );
}

export default App;
