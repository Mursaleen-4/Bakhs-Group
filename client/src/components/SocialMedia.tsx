import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin,Instagram } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/yaaseenshippinglines',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Follow us for daily updates and company news'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/yaaseen-shipping-lines',
      color: 'bg-blue-700 hover:bg-blue-800',
      description: 'Connect with us professionally'
    },
        {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/yaaseenshippinglines',
      color: 'bg-blue-700 hover:bg-blue-800',
      description: 'Enteract with us on Instagram'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-8 relative bg-blue-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-2">
            GET SOCIAL WITH US
          </h2>
          
          <p className="text-blue-600 max-w-2xl mx-auto text-sm">
            Stay connected for the latest updates and insights
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white rounded-xl px-6 py-3 transition-all duration-300 hover:shadow-md border border-blue-100"
                  title={platform.description}
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full ${platform.color} mr-3 shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-800 font-medium">{platform.name}</span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
