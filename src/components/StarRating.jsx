import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const StarRating = ({ rating = 5, maxRating = 5, size = 'w-5 h-5', color = 'text-yellow-400' }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxRating)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          whileHover={{ 
            scale: 1.2,
            rotate: 15,
            transition: { duration: 0.2 }
          }}
        >
          <Star 
            className={`${size} ${index < rating ? color : 'text-gray-300'} ${
              index < rating ? 'fill-current' : ''
            } transition-colors duration-200`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StarRating;
