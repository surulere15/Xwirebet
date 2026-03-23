import Hero from './components/Hero'
import WhyWirebet from './components/WhyWirebet'
import WhyThisAsset from './components/WhyThisAsset'
import StrategicFit from './components/StrategicFit'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-background flex flex-col font-sans">
      <Hero />
      <WhyWirebet />
      <WhyThisAsset />
      <StrategicFit />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
