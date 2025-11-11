import Spline from '@splinetool/react-spline'

export default function AnimatedBackground() {
  // Using a public lightweight Spline pet scene for subtle 3D motion
  // Fallback gradient layer ensures readability
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(125,211,252,0.15),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(186,230,253,0.15),transparent_40%)]" />
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/6d5t6Y0q7sQ3Qe5z/scene.splinecode" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70" />
    </div>
  )
}
