import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Target, 
  Globe, 
  Users, 
  BarChart2, 
  Clock, 
  Shield, 
  Briefcase, 
  Warehouse, 
  Truck, 
  Anchor, 
  Ship, 
  Container, 
  FileText, 
  Cpu, 
  HardDrive, 
  Database,
  Link2,
  Handshake
} from 'lucide-react';

const BakshInvestment: React.FC = () => {
  const coreValues = [
    { icon: Shield, title: 'Integrity', description: 'Upholding the highest standards of business ethics and transparency' },
    { icon: Target, title: 'Excellence', description: 'Consistently delivering superior service and operational efficiency' },
    { icon: Link2, title: 'Partnership', description: 'Building long-term relationships based on trust and mutual success' },
    { icon: Globe, title: 'Global Reach', description: 'Connecting markets through comprehensive logistics solutions' },
    { icon: Users, title: 'Customer Focus', description: 'Prioritizing client needs with dedicated 24/7 support' },
    { icon: BarChart2, title: 'Innovation', description: 'Implementing cutting-edge solutions for modern logistics challenges' },
  ];

  const milestones = [
    { 
      year: '1951',
      title: 'The Beginning',
      event: 'Founded as United Oriental Steamship Co., pioneering maritime trade between East and West Pakistan',
      icon: Ship
    },
    { 
      year: '1967',
      title: 'New Horizons',
      event: 'Baksh Investment Limited incorporated, marking our official entry into diversified business operations',
      icon: Briefcase
    },
    { 
      year: '1974',
      title: 'Overcoming Challenges',
      event: 'Successfully navigated nationalization, adapting our business model to new market realities',
      icon: Shield
    },
    { 
      year: '1984',
      title: 'Strategic Partnership',
      event: 'Forged key partnership as agents for Orient Overseas Container Lines (OOCL)',
      icon: Handshake
    },
    { 
      year: '2007',
      title: 'Expansion Era',
      event: 'Launched UOSL Shipping and Logistics, expanding our service portfolio',
      icon: BarChart2
    },
    { 
      year: '2024',
      title: 'New Frontiers',
      event: 'Became agents for Shanghai JinJiang Shipping, strengthening our global network',
      icon: Globe
    }
  ];

  const services = [
    { icon: Briefcase, title: 'Shipping Agencies', description: 'Comprehensive agency services for global shipping lines' },
    { icon: Container, title: 'Container Trading', description: 'Buying, selling, and leasing of shipping containers' },
    { icon: Truck, title: 'Freight Forwarding', description: 'End-to-end logistics and supply chain solutions' },
    { icon: Warehouse, title: 'Empty Container Park', description: 'Secure storage and management of empty containers' },
    { icon: Anchor, title: 'Chartering & Stevedoring', description: 'Vessel operations and cargo handling services' },
    { icon: Ship, title: 'Project Cargo', description: 'Specialized handling for oversized and heavy-lift cargo' },
  ];

  const keyStrengths = [
    { icon: Clock, title: '73+ Years Experience', description: 'Deep industry knowledge since 1951' },
    { icon: Users, title: 'Dedicated Team', description: 'Experienced and qualified professionals' },
    { icon: FileText, title: 'Regulatory Expertise', description: 'Strong relationships with government bodies' },
    { icon: Cpu, title: 'Advanced Technology', description: 'In-house shipping software with EDI capabilities' },
    { icon: HardDrive, title: 'Nationwide Presence', description: 'Offices in Karachi, Lahore, Faisalabad, and Multan' },
    { icon: Database, title: 'Comprehensive Services', description: 'End-to-end logistics solutions under one roof' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Baksh Investment Limited</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">
              Pioneering Pakistan's Maritime and Logistics Landscape Since 1967
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Baksh Investment Limited stands as a testament to Pakistan's maritime heritage, tracing its roots back to 1951. 
                  As one of the country's most established shipping and logistics companies, we have been at the forefront of 
                  transforming Pakistan's maritime industry through innovation, integrity, and excellence.
                </p>
                <p className="mt-4">
                  From our early days as one of Pakistan's largest ship owners to our current position as a diversified logistics 
                  powerhouse, our journey reflects our commitment to growth, adaptation, and customer satisfaction in an 
                  ever-evolving industry.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">At a Glance</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building2 className="h-6 w-6 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Established</h4>
                    <p className="text-gray-600">1967 (Roots since 1951)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Presence</h4>
                    <p className="text-gray-600">Nationwide network with offices in major cities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Team</h4>
                    <p className="text-gray-600">Dedicated professionals with deep industry expertise</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that define our approach to business and service excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-primary-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-3">
              Our Legacy
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Milestones That Shaped Us</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 -mt-2"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 -mb-2"></div>
            </div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  >
                    {/* Year */}
                    <div className={`w-1/2 px-6 ${isEven ? 'text-right' : 'text-left'}`}>
                      <div className="inline-block">
                        <div className="text-6xl font-bold text-gray-200 opacity-70">{milestone.year}</div>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-primary-600 border-4 border-white shadow-lg flex items-center justify-center">
                        <Icon className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`w-1/2 px-6 ${isEven ? 'pl-12' : 'pr-12'}`}>
                      <div className={`p-6 bg-white rounded-xl shadow-md border-l-4 border-primary-600 transform transition-all duration-300 hover:scale-105 ${isEven ? 'hover:-translate-x-2' : 'hover:translate-x-2'}`}>
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-primary-100 rounded-lg mr-4">
                            <Icon className="w-6 h-6 text-primary-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-600 pl-12">{milestone.event}</p>
                        <div className="mt-4 flex items-center text-sm text-gray-500">
                          <span className="inline-block w-8 h-0.5 bg-gray-300 mr-2"></span>
                          Milestone {index + 1} of {milestones.length}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-primary-100 opacity-20 -mb-12"></div>
            <div className="absolute top-1/3 right-0 w-16 h-16 rounded-full bg-blue-100 opacity-30 -mr-8"></div>
            <div className="absolute bottom-1/4 left-0 w-20 h-20 rounded-full bg-indigo-100 opacity-20 -ml-10"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-primary-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              Delivering excellence through experience, expertise, and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 bg-gray-50 rounded-lg"
                >
                  <div className="bg-primary-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{strength.title}</h3>
                    <p className="text-gray-600 text-sm">{strength.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white bg-opacity-10 text-white mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              Let's Work Together
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Logistics?</h2>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join hands with Baksh Investment Limited and experience a partnership built on <span className="text-yellow-300 font-medium">seven decades</span> of excellence in maritime and logistics solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
              <a
                href="/contact"
                className="flex-1 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Get in Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="/services"
                className="flex-1 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-primary-100">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-8 h-8 rounded-full bg-white bg-opacity-20 border-2 border-white"></div>
                  ))}
                </div>
                <span>Trusted by 500+ clients worldwide</span>
              </div>
              <div className="h-6 w-px bg-white bg-opacity-20"></div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 from 120+ reviews</span>
              </div>
            </div>
          </motion.div>
          
          {/* Animated elements */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-yellow-400 bg-opacity-20 filter blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-400 bg-opacity-20 filter blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default BakshInvestment;
