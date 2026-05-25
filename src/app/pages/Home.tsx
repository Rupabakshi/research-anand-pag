import { SophisticatedHero } from '../components/SophisticatedHero';
import { CoreCapabilities } from '../components/CoreCapabilities';
import { ProcessFactoryShowcase } from '../components/ProcessFactoryShowcase';
import { CaseStudies } from '../components/CaseStudies';
import { ClientTestimonials } from '../components/ClientTestimonials';
import { FinalCTA } from '../components/FinalCTA';

export default function Home() {
  return (
    <main className="space-y-0">
      <SophisticatedHero />
      <CoreCapabilities />
      <ProcessFactoryShowcase />
      <CaseStudies />
      <ClientTestimonials />
      <FinalCTA />
    </main>
  );
}