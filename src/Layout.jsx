import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingCart, PawPrint, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children, cartCount = 0 }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/impressum', label: 'Impressum' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/terms', label: 'Terms' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-900">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 border-b border-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
              <PawPrint className="w-6 h-6 text-sky-600" />
              <span>Leovora</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) => classNames(
                    'text-sm transition-colors hover:text-sky-700',
                    isActive ? 'text-sky-700' : 'text-slate-700'
                  )}
                >
                  {n.label}
                </NavLink>
              ))}
              <Link to="/cart" className="relative inline-flex items-center">
                <ShoppingCart className="w-5 h-5 text-slate-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-sky-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </nav>
            <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t bg-white/80 backdrop-blur">
            <div className="px-4 py-3 grid gap-2">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} className="py-2 text-slate-800">
                  {n.label}
                </NavLink>
              ))}
              <Link to="/cart" className="flex items-center gap-2 py-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart {cartCount > 0 ? `(${cartCount})` : ''}</span>
              </Link>
            </div>
          </div>
        )}
      </header>
      <main className="pt-16 min-h-[80vh]">{children}</main>
      <footer className="border-t bg-white/70 backdrop-blur py-10 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Leovora. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="hover:text-slate-900">Impressum</Link>
            <Link to="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-900">Terms & Withdrawal</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
