import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { HeroShapes } from '@/components/layout/HeroShapes';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="bg-white relative min-h-screen flex flex-col">
    <Navbar />
    <HeroShapes />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Pricing />
      <CallToAction />
    </MainLayout>
  );
}
