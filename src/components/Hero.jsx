import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images data
  const carouselImages = [
    {
      src: "/image/back.png",
      alt: "IELTS Success Story 1"
    },
    {
      src: "/image/bg1.png",
      alt: "IELTS Success Story 2"
    },
    {
      src: "/image/bg2.png",
      alt: "IELTS Success Story 3"
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-transparent relative overflow-hidden pt-16 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      {/* Diagonal Red Strips - Full Screen Coverage */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Strip 1 - Top strip */}
        <div
          className="absolute bg-red-900"
          style={{
            width: '150vw',
            height: '60px',
            top: '10%',
            right: '-39vw',
            transform: 'rotate(-45deg)',
            transformOrigin: 'center'
          }}
        />

        {/* Strip 2 - Middle strip */}
        <div
          className="absolute bg-red-900"
          style={{
            width: '150vw',
            height: '60px',
            top: '50%',
            right: '-38vw',
            transform: 'rotate(-45deg)',
            transformOrigin: 'center'
          }}
        />

        {/* Strip 3 - Bottom strip */}
        <div
          className="absolute bg-red-900"
          style={{
            width: '150vw',
            height: '60px',
            bottom: '10%',
            right: '-43vw',
            transform: 'rotate(-45deg)',
            transformOrigin: 'center'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-screen py-6 sm:py-8 md:py-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight text-center lg:text-left"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Crack IELTS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block"
              >
                with Confidence
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-lg text-center lg:text-left mx-auto lg:mx-0"
            >
              Join thousands of students who improved their scores with us.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-brand-700 hover:to-brand-800 text-white text-base sm:text-lg font-semibold px-8 sm:px-10 py-4 sm:py-4 rounded-xl shadow-lg transition-all duration-200 w-full max-w-xs sm:max-w-none sm:w-auto"
              >
                Book Now
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Responsive Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full order-1 lg:order-2 mb-6 lg:mb-0"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Carousel Container */}
              <div className="relative w-full h-full">
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 w-full h-full ${
                      index === currentSlide ? 'z-10' : 'z-0'
                    }`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      scale: index === currentSlide ? 1 : 1.1
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-black/20"></div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Arrows - Hidden on mobile, visible on tablet and up */}
              <button
                onClick={goToPrevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hidden sm:block"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hidden sm:block"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator - Always visible */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Text overlay on images */}
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 text-white">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
                >
                  Success Stories
                </motion.h3>
               
              </div>

              {/* Mobile swipe indicators */}
              <div className="absolute bottom-4 right-4 z-20 sm:hidden flex items-center space-x-2">
                <span className="text-white text-sm">Swipe →</span>
              </div>
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;