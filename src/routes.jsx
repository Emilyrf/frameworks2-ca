import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './pages/Home'
import ContactPage from './pages/Contact'
import CartPage from './pages/Cart'
import ProductPage from './pages/Product'
import NotFound from './pages/NotFound'
import CheckoutPage from './pages/Checkout'
import { CartProvider } from './context/cart'

function AppRoutes() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='product/:id' element={<ProductPage />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='checkout' element={<CheckoutPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
export default AppRoutes
