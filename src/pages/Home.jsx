import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesCarousel from '../components/FeaturesCarousel';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesCarousel />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
