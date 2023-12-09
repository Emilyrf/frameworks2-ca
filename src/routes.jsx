import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";
import Homepage from "./pages/Home";
import ContactPage from "./pages/Contact";
import CartPage from "./pages/Cart";
import ProductPage from "./pages/Product";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/product/:id" element={<ProductPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
  
}

export default AppRoutes
