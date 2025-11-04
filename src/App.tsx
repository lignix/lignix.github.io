import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experiences';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;