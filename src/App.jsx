import ParallaxScene from './components/ParallaxScene'
import { Hero, About, Skills, Projects, Gallery, Contact, Footer } from './components/Sections'

function App() {
  return (
    <div className="relative min-h-screen font-[\"Manrope\",\"Inter\",system-ui] text-[#4b4c7b] bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(255,255,255,0.9),transparent)]">
      {/* Parallax decorative scene */}
      <ParallaxScene />

      {/* Content overlay */}
      <div className="relative pointer-events-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
