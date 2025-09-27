import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, BookOpen, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Test Prep', href: '#features' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer id="contact" className="bg-white/50 border-t border-orange-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-0 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 py-12 sm:py-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center"
              >
                <BookOpen className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800">IELTS Academy </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Empowering students worldwide to achieve their IELTS goals with comprehensive preparation courses and personalized guidance.
            </p>
            
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.div
                  key={social}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-500 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#f97316' }}
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-orange-400 transition-colors duration-200" />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-gray-800">Contact Us</h4>
            
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-600 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-500 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="group-hover:text-orange-500 transition-colors duration-200">
                  contact@ieltsacademy.com
                </span>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-600 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-500 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="group-hover:text-orange-400 transition-colors duration-200">
                  +1234 567 9901
                </span>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-600 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-500 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="group-hover:text-orange-400 transition-colors duration-200">
                  Global Online Platform
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-black text-center md:text-left">
              © 2024 IELTS Academy. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  whileHover={{ y: -2, color: '#f97316' }}
                  className="text-black hover:text-orange-400 transition-all duration-200"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
