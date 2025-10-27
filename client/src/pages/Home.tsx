import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ship, Users, Award, Clock } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
// import Testimonials from '../components/Testimonials';
import SocialMedia from '../components/SocialMedia';
// import { pageBackgrounds } from '../assets/videos';
const Home: React.FC = () => {
  const stats = [
    {
      icon: Ship,
      label: '75 Years of Excellence',
      description: 'Serving in maritime industry since 1951',
      iconClass: 'text-teal-500/90' // Teal with slight transparency
    },
    {
      icon: Users,
      label: 'Satisfied Clients',
      description: 'Trusted by leading companies worldwide',
      iconClass: 'text-amber-500/90' // Amber with slight transparency
    },
    {
      icon: Award,
      label: '4 Offices in Major Cities',
      description: 'Across Pakistan for better service',
      iconClass: 'text-indigo-400/90' // Soft indigo with slight transparency
    },
    {
      icon: Clock,
      label: '24/7 Customer Support',
      description: 'Round-the-clock assistance and monitoring',
      iconClass: 'text-emerald-500/90' // Emerald with slight transparency
    }
  ];

  const quickServices = [
    { id: '1', title: 'Liner Agency' },
    { id: '2', title: 'Freight Forwarding' },
    { id: '3', title: 'Transportation' },
    { id: '4', title: 'Deport Service' },
    { id: '5', title: 'Vessel Handling' },
    { id: '6', title: 'Chartering and Stevedoring' },
    { id: '7', title: 'Project Cargo Handling' },
    // { id: '8', title: 'NVOCC' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Company Stats */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Trusted Maritime Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven decades of excellence in maritime services, connecting Pakistan to global trade routes
            </p>
          </motion.div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <stat.icon className={`h-10 w-10 mb-4 ${stat.iconClass}`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <Link 
                key={service.id}
                to={`/services/${service.id}`}
                className="block h-48"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-full rounded-2xl overflow-hidden relative group cursor-pointer"
                >
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(/images/service-${service.id}.jpg), 
                                      url(/images/service-${service.id}.jpeg), 
                                      url(/images/service-${service.id}.png)`
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
                      <h3 className="text-xl font-bold text-white text-center">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

            {/* Contact CTA - Clean Split Layout */}
            <section className="relative py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left side - Content */}
                    <div className="p-8 md:p-10 lg:p-12">
                      <div className="max-w-md mx-auto lg:mx-0">
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                          Get in Touch
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                          Let's work <span className="text-blue-600">together</span> on your destination
                        </h2>
                        <p className="text-gray-700">
                          Guiding you through the challenges of global shipping and logistics with expertise and reliability. Our team of experts is ready to provide personalized solutions for your destination
                        </p>
                      </div>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="h-64 md:h-80 lg:h-auto lg:min-h-[300px]">
                      <div 
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: 'url(/images/blala.jpg)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
      {/* Social Media */}
      <div className="pt-8 pb-12">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Home;
