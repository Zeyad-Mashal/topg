import './App.css';
import Classic from './components/Classic/Classic';
import Footer from './components/Footer/Footer';
import HardTo from './components/HardTo/HardTo';
import Hero from './components/Hero/Hero';
import Influence from './components/Influence/Influence';
import News from './components/News/News';
import Poison from './components/Poison/Poison';
import Section from './components/Section/Section';
import Universe from './components/UNIVERSE/Universe';

function App() {
  return (
    <div className="App">
      <Hero />
      <HardTo />
      <Universe />
      <Classic />
      <Poison />
      <Influence />
      <Section />
      <News />
      <Footer />
    </div>
  );
}

export default App;
