import dynamic from 'next/dynamic';
import CredibilitySections from '@/components/CredibilitySections';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

const ScrollyCanvas = dynamic(() => import('@/components/ScrollyCanvas'), {
  ssr: false,
});

const Overlay = dynamic(() => import('@/components/Overlay'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <section id="about" className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>
      <Projects />
      <CredibilitySections />
      <Contact />
      <Footer />
    </main>
  );
}
