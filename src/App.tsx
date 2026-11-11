// src/App.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LanguageSwitch from './components/LanguageSwitch';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experiences />
        <Projects />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <LanguageSwitch /> 
    </>
  );
}

export default App;