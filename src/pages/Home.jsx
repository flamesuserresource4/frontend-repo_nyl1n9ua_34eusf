import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    const t1 = setTimeout(() => setShowOverlay(false), 1600)
    return () => clearTimeout(t1)
  }, [])

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <AnimatedBackground />

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 bg-black z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <section className="px-6 sm:px-10 py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600"
            >
              Leovora
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-6 text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto"
            >
              Modern essentials for happy pets. Minimal design, premium comfort, and playful details.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <a href="/products" className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                Shop Products
              </a>
              <a href="#about" className="px-6 py-3 rounded-full bg-white/70 backdrop-blur border border-white text-slate-900 hover:bg-white transition-colors">
                Learn More
              </a>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6 sm:px-10 py-16 sm:py-24 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Designed with vets. Loved by pets.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 text-slate-700 max-w-2xl"
          >
            We obsess over materials, durability, and comfort. Every product balances form and function, with sustainable fabrics and pet-safe finishes.
          </motion.p>
        </section>
      </div>
    </div>
  )
}
