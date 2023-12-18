import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Home";
import ContactPage from "./pages/Contact";
import CartPage from "./pages/Cart";
import ProductPage from "./pages/Product";
import NotFound from "./pages/NotFound";
import CheckoutPage from "./pages/Checkout";
import { CartProvider } from "./context/cart";

function AppRoutes() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/product/:id" element={<Layout><ProductPage /></Layout>} />
          <Route path="/cart" element={<Layout><CartPage /></Layout>} />
          <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )

}

export default AppRoutes
