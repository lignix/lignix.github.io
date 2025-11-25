// src/App.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LanguageSwitch from './components/LanguageSwitch';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experiences />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
      
      <LanguageSwitch /> 
    </>
  );
}

export default App;