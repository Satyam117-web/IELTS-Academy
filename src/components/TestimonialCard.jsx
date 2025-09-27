import { motion } from 'framer-motion';
import { User, Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, testimonial, delay = 0 }) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 80,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative w-full"
    >
      {/* Horizontal Card Layout */}
      <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 sm:p-6 rounded-2xl shadow-xl overflow-hidden transform-gpu transition-all duration-300 group-hover:shadow-2xl border border-orange-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Left Side - Profile Image */}
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1">
            {/* Quote Icon */}
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mb-2 sm:mb-3" />
            
            {/* Testimonial Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.2 }}
              className="text-slate-700 font-medium leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base"
            >
              {testimonial}
            </motion.p>

            {/* Name */}
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 }}
              className="text-slate-800 font-bold text-base sm:text-lg mb-2"
            >
              {name}
            </motion.h3>

            {/* Star Rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.4 }}
              className="flex items-center space-x-1"
            >
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index}
                  className="w-4 h-4 text-amber-400 fill-current" 
                />
              ))}
            </motion.div>
          </div>
          
          {/* Large Quote Mark */}
          <div className="absolute top-4 right-4 opacity-10">
            <Quote className="w-12 h-12 text-orange-400 transform rotate-180" />
          </div>
        </div>

        {/* Subtle Overlay Pattern */}
        <div className="absolute inset-0 bg-orange-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
