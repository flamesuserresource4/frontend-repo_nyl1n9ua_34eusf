import { useState } from 'react'

export default function Checkout() {
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Processing payment...')
    setTimeout(() => setStatus('Payment successful! Thank you for your order.'), 1200)
  }

  return (
    <div className="px-6 sm:px-10 py-12 sm:py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Checkout</h1>
      <form onSubmit={handleSubmit} className="mt-8 grid gap-4 bg-white/80 backdrop-blur border rounded-xl p-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <input required placeholder="First name" className="px-4 py-2 rounded-lg border bg-white" />
          <input required placeholder="Last name" className="px-4 py-2 rounded-lg border bg-white" />
        </div>
        <input required type="email" placeholder="Email" className="px-4 py-2 rounded-lg border bg-white" />
        <input required placeholder="Address" className="px-4 py-2 rounded-lg border bg-white" />
        <div className="grid sm:grid-cols-2 gap-4">
          <input required placeholder="City" className="px-4 py-2 rounded-lg border bg-white" />
          <input required placeholder="Postal code" className="px-4 py-2 rounded-lg border bg-white" />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <input required placeholder="Card number" className="px-4 py-2 rounded-lg border bg-white" />
          <input required placeholder="MM/YY" className="px-4 py-2 rounded-lg border bg-white" />
          <input required placeholder="CVC" className="px-4 py-2 rounded-lg border bg-white" />
        </div>
        <button className="mt-2 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 w-fit">Pay now</button>
        {status && <p className="text-sm text-slate-700">{status}</p>}
      </form>
    </div>
  )
}
