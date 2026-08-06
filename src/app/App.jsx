import { useState } from 'react'
import Preloader from '../components/sections/Preloader'
import Hero from '../components/sections/Hero'
import Ticker from '../components/sections/Ticker'
import About from '../components/sections/About'
import Expertise from '../components/sections/Expertise'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Process from '../components/sections/Process'
import Contact from '../components/sections/Contact'
import Footer from '../components/layout/Footer'

const App = () => {
  const [loading, setLoading] = useState(() => !new URLSearchParams(window.location.search).has('preview'))

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <main>
        <Hero />
        <Ticker />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
