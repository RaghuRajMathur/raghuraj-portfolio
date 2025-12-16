import Hero from '../components/Hero';
import SkillsSphereSection from '../components/SkillsSphereSection';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import ContactForm from '../components/Contactform';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SkillsSphereSection />
        <Education />
        <Experience />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
