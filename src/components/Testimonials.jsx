import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Ishita",
      testimonial: "The practice tests and speaking sessions were immensely helpful. I went from 6.5 to 8.0!"
    },
    {
      id: 2,
      name: "Vansh",
      testimonial: "The AI Band Score predictor was spot on! The study materials were top-notch."
    },
    {
      id: 3,
      name: "Sujal",
      testimonial: "Amazing experience! The mock tests prepared me perfectly for the real exam. Achieved my target score of 7.5!"
    },
    {
      id: 4,
      name: "Nikita",
      testimonial: "The writing feedback was incredibly detailed. Improved my writing band from 6.0 to 7.5 in just 2 months!"
    },
    {
      id: 5,
      name: "Shashikant",
      testimonial: "Excellent platform with personalized guidance. The speaking practice sessions boosted my confidence tremendously."
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); // Change every 3 seconds

      return () => clearInterval(timer);
    }
  }, [isHovered, testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
          >
            Student Testimonials
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Testimonials Sliding Carousel */}
        <div 
          className="relative overflow-hidden max-w-5xl mx-auto px-4 sm:px-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
              width: `${testimonials.length * 100}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / testimonials.length}%` }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-orange-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-600 mb-8"
          >
            Join thousands of successful IELTS candidates
          </motion.p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-brand-700 hover:to-brand-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-200"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
