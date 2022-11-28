import Container from './components/Container'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Wavesbg from './components/Wavesbg'
import Section from './components/Section'
import Cards from './components/Cards'
import Footer from './components/Footer'

export default function Home() {
  
  return (
    <div className="font-['Nunito_Sans']" id='background'>
      <Navbar />
      <Header />
      <Wavesbg />
      <Cards />
      <Section />
      <Footer />
    </div>
  )
}
