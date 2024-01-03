import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Categories from './pages/Categories';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App
