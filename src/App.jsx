import Hero from './components/Hero'
import WhyWirebet from './components/WhyWirebet'
import StrategicFit from './components/StrategicFit'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-[#030303] min-h-screen selection:bg-white selection:text-black">
      <div className="grain-overlay" />
      <Hero />
      <WhyWirebet />
      <StrategicFit />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
