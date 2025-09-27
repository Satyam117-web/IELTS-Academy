import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Special Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false); // Close menu on mobile
    // Restore body styles immediately
    document.body.style.overflow = 'unset';
    document.body.style.position = 'unset';
    document.body.style.width = 'unset';
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to ensure styles are reset
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    // Restore body styles
    document.body.style.overflow = 'unset';
    document.body.style.position = 'unset';
    document.body.style.width = 'unset';
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg"
            >
              <BookOpen className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              IELTS Academy
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-orange-50 font-semibold"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Overlay - Fixed positioning */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 z-[9999] bg-white/95 backdrop-blur-md"
            style={{ 
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: '100vh', // Ensure full viewport height
              width: '100vw', // Ensure full viewport width
            }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-6 pt-8">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleCloseMenu}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </motion.button>
            </div>

            {/* Menu Items Container - Centered properly */}
            <div 
              className="flex flex-col items-center justify-start h-full pt-8 pb-16 px-4 overflow-y-auto"
              style={{ height: 'calc(100vh - 120px)' }} // Adjust for header and padding
            >
              <div className="w-full max-w-md space-y-4 sm:space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.1, 
                      type: 'spring', 
                      stiffness: 100 
                    }}
                    className="text-2xl sm:text-3xl font-bold text-gray-800 hover:text-orange-500 transition-colors duration-300 py-4 px-6 rounded-xl hover:bg-orange-50 w-full text-center border-b border-gray-100 last:border-b-0"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255, 247, 237, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* CTA Button in Mobile Menu */}
                <motion.button
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg w-full"
                  onClick={() => {
                    handleNavClick('#home');
                  }}
                >
                  Start Learning
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;