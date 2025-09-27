import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      whileHover={{ 
        y: -10, 
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Gradient Border Wrapper */}
      <div className="p-[2px] rounded-3xl bg-[linear-gradient(135deg,#60a5fa,#a78bfa,#f59e0b)] transition-shadow duration-300 group-hover:shadow-[0_10px_30px_rgba(99,102,241,0.25)]">
        {/* 3D Card Effect */}
        <div className="relative bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 rounded-[calc(1.5rem-2px)] shadow-xl border border-white/40 transform-gpu transition-all duration-300 group-hover:shadow-2xl">
          {/* Icon Container */}
          <motion.div
            whileHover={{ 
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-slate-900 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-600 transition-all duration-300"
          >
            <div className="text-white text-lg sm:text-2xl">
              {icon}
            </div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-900 transition-colors duration-300"
            >
              {title}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 }}
              className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300"
            >
              {description}
            </motion.p>
          </div>

          {/* 3D Shadow */}
          <div className="absolute inset-0 bg-slate-900/5 rounded-[calc(1.5rem-2px)] transform translate-y-2 translate-x-1 -z-10 group-hover:translate-y-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
