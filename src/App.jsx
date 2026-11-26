import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Project.jsx'
import Skills from './sections/Skills.jsx'
import Certificates from './sections/Certificates.jsx'
import JourneySection from './sections/JourneySection';
import { journey } from './data/journey';
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import BackgroundFX from './components/BackgroundFX.jsx'


const App = () => {
  return (
    <main className='max-w-7xl mx-auto c-space'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <JourneySection journey={journey} />
      <Contact />
      <Footer />
      <BackgroundFX />
    </main>
  )
}

export default App
