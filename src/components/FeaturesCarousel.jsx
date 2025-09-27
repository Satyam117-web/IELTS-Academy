import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { MessageSquare, FileText, Brain } from 'lucide-react';

const FeaturesCarousel = () => {
  const features = [
    {
      id: 1,
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Speaking Practice",
      description: "Join thousands of students who improved their scores."
    },
    {
      id: 2,
      icon: <FileText className="w-8 h-8" />,
      title: "Mock Tests",
      description: "Join thousands of practice tests worth testing."
    },
    {
      id: 3,
      icon: <Brain className="w-8 h-8" />,
      title: "AI Band Score",
      description: "The AI Band Score predictor that spots on."
    }
  ];

  return (
    <section id="features" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
          >
            Special Features
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
