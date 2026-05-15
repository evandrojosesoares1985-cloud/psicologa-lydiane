import About from './sections/About'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'
import Help from './sections/Help'
import Hero from './sections/Hero'
import Psychoanalysis from './sections/Psychoanalysis'
import Services from './sections/Services'

function App() {
  return (
    <main className="overflow-hidden bg-stone-50 text-stone-800">
      <Hero />
      <Help />
      <About />
      <Psychoanalysis />
      <Services />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

export default App
