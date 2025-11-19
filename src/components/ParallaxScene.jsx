import { useEffect, useMemo } from 'react'

// Simple SVG components for reuse
const Bird = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M2 16c8-10 22-10 30 0 8-10 22-10 30 0" stroke="#7aa6ff" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

const Cloud = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <g fill="#ffffff" opacity="0.9">
      <circle cx="40" cy="45" r="22"/>
      <circle cx="70" cy="35" r="30"/>
      <circle cx="105" cy="48" r="26"/>
      <circle cx="140" cy="38" r="20"/>
      <rect x="35" y="45" width="110" height="20" rx="10"/>
    </g>
  </svg>
)

const Petal = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2c4 3 8 8 8 12a8 8 0 0 1-16 0c0-4 4-9 8-12Z" fill="#ff9bb8"/>
  </svg>
)

function useParallax() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 640px)').matches
    const factor = isMobile ? 0.3 : 1

    const onScroll = () => {
      const scrolled = window.scrollY
      document.querySelectorAll('[data-speed]').forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0')
        const y = -(scrolled * speed * 0.1 * factor)
        el.style.transform = `translate3d(0, ${y}px, 0)`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

export default function ParallaxScene() {
  useParallax()

  // Generate memoized positions for petals to avoid layout jank
  const petals = useMemo(() => Array.from({ length: 18 }).map((_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 10,
    size: 10 + Math.random() * 18,
    duration: 10 + Math.random() * 12,
  })), [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6f2ff] via-[#f7ecff] to-[#fff4f7]" aria-hidden/>

      {/* Sparkles */}
      <div className="absolute inset-0 animate-sparkle opacity-60 mix-blend-screen" aria-hidden/>

      {/* Clouds - far back */}
      <div className="absolute inset-x-0 top-10" data-speed="0.2">
        <Cloud className="w-48 h-20 cloud-float ml-8" />
        <Cloud className="w-64 h-24 cloud-float absolute left-1/3 top-6" />
        <Cloud className="w-40 h-18 cloud-float absolute right-8 top-12 opacity-80" />
      </div>

      {/* Mountains layer */}
      <div className="absolute bottom-20 inset-x-0" data-speed="0.35">
        <svg viewBox="0 0 1200 240" className="w-[140%] -ml-[20%]" aria-hidden>
          <path d="M0 200 L200 100 L360 180 L500 80 L700 200 L900 120 L1100 200 L1200 180 L1200 240 L0 240 Z" fill="#c7d8ff"/>
          <path d="M0 220 L160 140 L300 210 L420 120 L650 210 L880 150 L1060 210 L1200 200 L1200 240 L0 240 Z" fill="#d8e4ff"/>
        </svg>
      </div>

      {/* City/buildings layer */}
      <div className="absolute bottom-10 inset-x-0" data-speed="0.5">
        <svg viewBox="0 0 1200 200" className="w-[140%] -ml-[20%]" aria-hidden>
          <g fill="#e9dfff">
            <rect x="50" y="90" width="60" height="110" rx="6" />
            <rect x="140" y="70" width="80" height="130" rx="8" />
            <rect x="250" y="110" width="70" height="90" rx="6" />
            <rect x="350" y="85" width="90" height="115" rx="8" />
            <rect x="470" y="100" width="70" height="100" rx="6" />
            <rect x="560" y="80" width="80" height="120" rx="8" />
            <rect x="660" y="120" width="70" height="80" rx="6" />
            <rect x="750" y="90" width="95" height="110" rx="8" />
            <rect x="870" y="110" width="70" height="90" rx="6" />
            <rect x="960" y="80" width="80" height="120" rx="8" />
          </g>
        </svg>
      </div>

      {/* Foreground hills */}
      <div className="absolute bottom-0 inset-x-0" data-speed="0.7">
        <svg viewBox="0 0 1200 220" className="w-[150%] -ml-[25%]" aria-hidden>
          <path d="M0 160 C200 60, 400 260, 600 160 S1000 60, 1200 160 L1200 220 L0 220 Z" fill="#d6ffef"/>
          <path d="M0 200 C250 120, 450 240, 700 180 S1000 120, 1200 200 L1200 220 L0 220 Z" fill="#eafff6"/>
        </svg>
      </div>

      {/* Birds - continuous */}
      <div className="absolute inset-x-0 top-24" aria-hidden>
        <Bird className="bird flight-path-1" />
        <Bird className="bird flight-path-2" />
        <Bird className="bird flight-path-3" />
      </div>

      {/* Sakura petals drifting */}
      {petals.map((p, idx) => (
        <Petal
          key={idx}
          className="absolute petal-drift"
          style={{ left: `${p.left}%`, top: '-24px', width: p.size, height: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }}
        />
      ))}
    </div>
  )
}
