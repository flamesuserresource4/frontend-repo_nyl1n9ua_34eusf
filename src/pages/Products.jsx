import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PRODUCTS = [
  { id: 1, title: 'Safe nail clipper for pets', price: 19.99, category: 'grooming', img: 'https://images.unsplash.com/photo-1558944351-c6ae4001820d?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Plush pet bed for home', price: 59.0, category: 'beds', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Warm bed for cats', price: 49.0, category: 'beds', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Mushroom-shaped cat scratching post', price: 39.0, category: 'scratchers', img: 'https://images.unsplash.com/photo-1583082886669-c8e1243d6ce8?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Self-adhesive carpet for cats', price: 24.0, category: 'scratchers', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Coconut tree cat scratching post', price: 44.0, category: 'scratchers', img: 'https://images.unsplash.com/photo-1518887578451-8157c4255d87?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, title: 'Cat scratching post / cat tower', price: 129.0, category: 'towers', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop' },
]

const categories = [
  { key: 'all', label: 'All' },
  { key: 'beds', label: 'Beds' },
  { key: 'grooming', label: 'Grooming' },
  { key: 'scratchers', label: 'Scratchers' },
  { key: 'towers', label: 'Towers' },
]

export default function Products({ onAdd }) {
  const [active, setActive] = useState('all')

  const items = useMemo(() => {
    if (active === 'all') return PRODUCTS
    return PRODUCTS.filter((p) => p.category === active)
  }, [active])

  return (
    <div className="px-6 sm:px-10 py-12 sm:py-16 max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Products</h1>
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur p-1 rounded-full border">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-3 py-1.5 rounded-full text-sm transition ${
                active === c.key ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <AnimatePresence>
          {items.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur border hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="text-slate-600 mt-1 text-sm">Premium quality designed for comfort and durability.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-slate-900">${p.price.toFixed(2)}</span>
                  <button onClick={() => onAdd && onAdd(p)} className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
