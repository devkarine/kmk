import { Valores } from '../../components/Valores';
import { Filosofia } from '../../components/Filosofia';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Footer } from '../../components/Footer';

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Filosofia />
      <Valores />
      <Footer />
    </div>
  );
};