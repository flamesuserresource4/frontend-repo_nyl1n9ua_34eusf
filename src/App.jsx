import { useMemo, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { Impressum, Privacy, Terms } from './pages/Legal'

export default function App() {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

  const addToCart = (p) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === p.id)
      if (found) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { ...p, qty: 1 }]
    })
  }
  const updateQty = (id, qty) => setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))

  const goCheckout = () => navigate('/checkout')

  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart])

  return (
    <Layout cartCount={cartCount}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products onAdd={addToCart} />} />
        <Route path="/cart" element={<Cart items={cart} onUpdateQty={updateQty} onCheckout={goCheckout} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Layout>
  )
}
