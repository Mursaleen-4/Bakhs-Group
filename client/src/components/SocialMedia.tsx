import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, ExternalLink } from 'lucide-react';

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
    <section className="py-12 bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <ExternalLink className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            GET SOCIAL WITH US
          </h2>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Stay connected and get the latest updates on our maritime services, industry insights, 
            and company developments across all our social media platforms.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialPlatforms.slice(0,2).map((platform, idx) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -4, rotate: idx % 2 ? 0.5 : -0.5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/20 border border-white/20 hover:border-white/40 h-full"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${platform.color} mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                    {platform.name}
                  </h3>
                  
                  <p className="text-blue-100 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {platform.description}
                  </p>
                  
                  <div className="mt-4 inline-flex items-center text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                    <span className="mr-2">Follow Us</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Media Stats */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <motion.div
                className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
              >
                10K+
              </motion.div>
              <div className="text-blue-100 font-medium">Followers</div>
            </div>
            
            <div>
              <motion.div
                className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
              >
                500+
              </motion.div>
              <div className="text-blue-100 font-medium">Posts Shared</div>
            </div>
            
            <div>
              <motion.div
                className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
              >
                24/7
              </motion.div>
              <div className="text-blue-100 font-medium">Active Support</div>
            </div>
            
            <div>
              <motion.div
                className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
              >
                70+
              </motion.div>
              <div className="text-blue-100 font-medium">Years Online</div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter section removed */}
      </div>
    </section>
  );
};

export default SocialMedia;
