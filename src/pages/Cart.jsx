import { motion } from 'framer-motion'

export default function Cart({ items = [], onUpdateQty, onCheckout }) {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0)

  return (
    <div className="px-6 sm:px-10 py-12 sm:py-16 max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Your Cart</h1>
      {items.length === 0 ? (
        <p className="mt-6 text-slate-600">Your cart is empty.</p>
      ) : (
        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it) => (
              <motion.div key={it.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4 rounded-xl p-3 bg-white/80 backdrop-blur border">
                <img src={it.img} alt={it.title} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{it.title}</p>
                  <p className="text-sm text-slate-600">${it.price.toFixed(2)}</p>
                  <div className="mt-2 inline-flex items-center gap-2 bg-white border rounded-full p-1">
                    <button onClick={() => onUpdateQty(it.id, Math.max(1, it.qty - 1))} className="px-3 py-1 rounded-full hover:bg-slate-100">-</button>
                    <span className="px-2 text-sm">{it.qty}</span>
                    <button onClick={() => onUpdateQty(it.id, it.qty + 1)} className="px-3 py-1 rounded-full hover:bg-slate-100">+</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl p-6 bg-white/80 backdrop-blur border h-fit">
            <h3 className="font-semibold text-slate-900">Summary</h3>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-semibold text-slate-900">${total.toFixed(2)}</span>
            </div>
            <button onClick={onCheckout} className="mt-6 w-full px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
