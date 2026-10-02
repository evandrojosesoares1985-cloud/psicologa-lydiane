import About from './sections/About'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'
import Help from './sections/Help'
import Hero from './sections/Hero'
import Psychoanalysis from './sections/Psychoanalysis'
import Services from './sections/Services'
import Header from './components/Header'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Help />
        <About />
        <Psychoanalysis />
        <Services />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
