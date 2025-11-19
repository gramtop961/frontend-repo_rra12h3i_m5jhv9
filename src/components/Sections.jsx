import { motion } from 'framer-motion'

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-28 sm:py-36">
    <div className="relative max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#4b4c7b] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="mt-3 text-[#6c6da5] max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-8">
        {children}
      </div>
    </div>
  </section>
)

export const Hero = () => (
  <header className="relative min-h-[85vh] sm:min-h-[95vh] flex items-center">
    <div className="relative max-w-6xl mx-auto px-6">
      <div className="rounded-3xl bg-white/50 backdrop-blur-md border border-white/60 p-6 sm:p-10 shadow-[0_10px_50px_rgba(173,146,255,0.25)]">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#4b4c7b] tracking-tight">
          RHISHIKESH AK
        </h1>
        <p className="mt-2 text-lg sm:text-2xl text-[#6c6da5] font-semibold">
          PLUS TWO, HOLYFAMILY HIGHER SECONDARY SCHOOL RAJAPURAM
        </p>
        <p className="mt-6 text-[#6c6da5] max-w-2xl">
          Introduction — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus quis sapien ut magna interdum bibendum non id arcu.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {['About','Skills','Projects','Gallery','Contact'].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="pointer-events-auto inline-block rounded-full bg-[#ffdff1] text-[#7c5a84] px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition will-change-transform hover:-translate-y-0.5">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </header>
)

export const About = () => (
  <Section id="about" title="About" subtitle="Short Bio — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu non nunc tincidunt pharetra.">
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="rounded-2xl bg-white/70 p-6 border border-white shadow-sm">
        <h3 className="font-bold text-[#5b5ca0] mb-2">Education</h3>
        <p className="text-[#6c6da5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit, nibh a accumsan luctus, odio erat posuere mi.</p>
        <p className="mt-3 text-[#4b4c7b] font-semibold">Studying: PLUS TWO — HOLYFAMILY HIGHER SECONDARY SCHOOL RAJAPURAM</p>
      </div>
      <div className="rounded-2xl bg-white/70 p-6 border border-white shadow-sm">
        <h3 className="font-bold text-[#5b5ca0] mb-2">More</h3>
        <p className="text-[#6c6da5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut pulvinar justo. Cras auctor, diam ut placerat porta, nunc sapien volutpat ligula.</p>
      </div>
    </div>
  </Section>
)

export const Skills = () => (
  <Section id="skills" title="Skills" subtitle="Skills Summary — Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {['HTML','CSS','JavaScript','React','Tailwind','GSAP','Git','Design'].map((s, i) => (
        <div key={i} className="rounded-xl bg-[#e8fff7] text-[#4b7b71] px-4 py-3 font-semibold shadow hover:shadow-lg transition will-change-transform hover:-translate-y-0.5">
          {s}
        </div>
      ))}
    </div>
  </Section>
)

export const Projects = () => (
  <Section id="projects" title="Projects" subtitle="Projects Summary — Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1,2,3,4,5,6].map((i) => (
        <div key={i} className="group relative overflow-hidden rounded-2xl bg-white border border-white/80 shadow transition">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffdff1] via-transparent to-[#e6f2ff] opacity-70"/>
          <div className="relative p-6">
            <div className="h-32 rounded-xl bg-[#f8fbff] border border-white/70 mb-4"/>
            <h4 className="font-bold text-[#5b5ca0]">Project {i}</h4>
            <p className="text-sm text-[#6c6da5] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.6),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] duration-700"/>
          </div>
        </div>
      ))}
    </div>
  </Section>
)

export const Gallery = () => (
  <Section id="gallery" title="Gallery" subtitle="Gallery Description — Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]"></div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="aspect-square rounded-2xl bg-white border border-white/80 shadow relative overflow-hidden">
          <div className="absolute inset-0 scale-105 opacity-80 mix-blend-multiply" style={{background: `radial-gradient(circle at ${20 + i*7}% 30%, #ffdff1, transparent 40%), radial-gradient(circle at ${60 + i*4}% 70%, #e6f2ff, transparent 40%)`}} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-3 py-1 bg-[#fff3b8] text-[#7b6b39] rounded-full text-xs font-bold border border-white/80">sticker</span>
          </div>
        </div>
      ))}
    </div>
  </Section>
)

export const Contact = () => (
  <Section id="contact" title="Contact" subtitle="Get In Touch — Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <form className="grid sm:grid-cols-2 gap-4 max-w-3xl">
      <input aria-label="Name" placeholder="Name" className="rounded-xl bg-white/70 border border-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#b9c7ff]" />
      <input aria-label="Email" type="email" placeholder="Email" className="rounded-xl bg-white/70 border border-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#b9c7ff]" />
      <textarea aria-label="Message" placeholder="Message" rows={4} className="sm:col-span-2 rounded-xl bg-white/70 border border-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#b9c7ff]"></textarea>
      <button type="button" className="relative inline-flex items-center gap-2 w-fit rounded-full bg-[#c7d8ff] text-[#4b4c7b] px-5 py-3 font-bold shadow hover:shadow-lg transition group send-btn">
        <span>Send</span>
        <span className="paper-plane" aria-hidden>✈️</span>
      </button>
    </form>
  </Section>
)

export const Footer = () => (
  <footer className="relative py-10">
    <div className="max-w-6xl mx-auto px-6 text-center text-[#6c6da5]">
      <p>Credits — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="mt-4 flex items-center justify-center gap-6 opacity-80">
        <div className="w-10 h-6 bg-no-repeat bg-center" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 64 32\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M2 16c8-10 22-10 30 0 8-10 22-10 30 0\' stroke=\'%237aa6ff\' stroke-width=\'3\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")'}} />
        <div className="w-10 h-6 bg-no-repeat bg-center" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 64 32\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M2 16c8-10 22-10 30 0 8-10 22-10 30 0\' stroke=\'%237aa6ff\' stroke-width=\'3\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")'}} />
      </div>
    </div>
  </footer>
)
