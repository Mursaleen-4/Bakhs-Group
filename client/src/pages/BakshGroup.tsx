import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Target,
  Globe,
  Shield,
  Briefcase,
  Truck,
  Anchor,
  Ship,
  Award,
  Network,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
import { pageBackgrounds } from '../assets/videos';

const BakshGroup: React.FC = () => {
  const groupOverview = {
    title: "Baksh Group - A Legacy of Excellence",
    description: "Baksh Group is a diversified business conglomerate with a rich history spanning over seven decades. With our headquarters in Pakistan, we have established ourselves as a trusted name in shipping, logistics, and investment sectors, delivering excellence through innovation, integrity, and customer-centric solutions.",
    foundingYear: "1951",
    employees: "500+",
    globalPresence: "20+ Countries"
  };

  const coreValues = [
    { icon: Shield, title: 'Integrity', description: 'Upholding the highest standards of business ethics and transparency across all our operations' },
    { icon: Target, title: 'Excellence', description: 'Consistently delivering superior service and operational efficiency in every business vertical' },
    { icon: Network, title: 'Synergy', description: 'Leveraging the collective strength of our group companies to create value' },
    { icon: Globe, title: 'Global Perspective', description: 'Maintaining a worldwide outlook while staying rooted in local expertise' },
    { icon: HeartHandshake, title: 'Customer Focus', description: 'Building lasting relationships through exceptional service and support' },
    { icon: TrendingUp, title: 'Sustainable Growth', description: 'Balancing business success with social responsibility and environmental stewardship' },
  ];

  const groupCompanies = [
    {
      name: "Baksh Investment Limited",
      description: "The flagship company of Baksh Group, specializing in shipping agency services and maritime solutions with a legacy of excellence.",
      icon: Briefcase,
      year: "1967",
      services: ["Shipping Agencies", "Container Trading", "Freight Forwarding"]
    },
    {
      name: "Yaaseen Shipping Lines",
      description: "A leading name in global shipping services, connecting international markets with reliable and efficient maritime solutions.",
      icon: Ship,
      year: "2005",
      services: ["Liner Services", "Chartering", "Vessel Operations"]
    },
    {
      name: "Yaaseen Shipping Lines (PVT) Ltd",
      description: "Specialized in project cargo and heavy-lift operations, offering comprehensive logistics solutions worldwide.",
      icon: Anchor,
      year: "2010",
      services: ["Project Cargo", "Heavy Lift", "Oversized Cargo"]
    },
    {
      name: "UOSL Shipping & Logistics",
      description: "Providing end-to-end logistics solutions with a focus on efficiency, reliability, and customer satisfaction.",
      icon: Truck,
      year: "2007",
      services: ["Land Transport", "Warehousing", "Customs Clearance"]
    }
  ];

  const milestones = [
    {
      year: '1951',
      title: 'Humble Beginnings',
      event: 'Founding of our first venture in maritime trade',
      icon: Ship
    },
    {
      year: '1967',
      title: 'Formal Incorporation',
      event: 'Establishment of Baksh Investment Limited',
      icon: Building2
    },
    {
      year: '2005',
      title: 'New Horizons',
      event: 'Launch of Yaaseen Shipping Lines',
      icon: Globe
    },
    {
      year: '2007',
      title: 'Logistics Expansion',
      event: 'Inception of UOSL Shipping & Logistics',
      icon: Truck
    },
    {
      year: '2010',
      title: 'Specialized Services',
      event: 'Formation of Yaaseen Shipping Lines (PVT) Ltd',
      icon: Anchor
    },
    {
      year: '2024',
      title: 'Global Recognition',
      event: 'Expansion to 20+ countries with comprehensive logistics solutions',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pageBackgrounds.bakshGroup || '/images/group-bg.jpg'}
            alt="Baksh Group"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Baksh Group
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Seven Decades of Excellence in Shipping, Logistics, and Investment
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Legacy</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {groupOverview.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{groupOverview.foundingYear}+</div>
              <h3 className="text-lg font-semibold text-gray-800">Years of Excellence</h3>
              <p className="text-gray-600">Since our founding</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{groupOverview.employees}</div>
              <h3 className="text-lg font-semibold text-gray-800">Dedicated Professionals</h3>
              <p className="text-gray-600">Across our group companies</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{groupOverview.globalPresence}</div>
              <h3 className="text-lg font-semibold text-gray-800">Global Network</h3>
              <p className="text-gray-600">And expanding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Companies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Companies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {groupCompanies.map((company, index) => {
              const Icon = company.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{company.name}</h3>
                        <p className="text-blue-600 text-sm">Est. {company.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{company.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {company.services.map((service, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 w-1 h-full bg-blue-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className="relative">
                    {/* For mobile */}
                    <div className="md:hidden">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <span className="text-sm text-blue-600 font-medium">{milestone.year}</span>
                            <h3 className="text-lg font-semibold text-gray-800">{milestone.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600">{milestone.event}</p>
                      </div>
                    </div>
                    
                    {/* For desktop */}
                    <div className="hidden md:flex items-center justify-between">
                      {isEven ? (
                        <>
                          <div className="w-5/12 px-4 py-6 bg-white rounded-lg shadow-md">
                            <div className="flex items-center mb-2">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <Icon className="h-5 w-5 text-blue-600" />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-800">{milestone.title}</h3>
                            </div>
                            <p className="text-gray-600 pl-13">{milestone.event}</p>
                          </div>
                          <div className="w-1/6 flex justify-center">
                            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                              {milestone.year}
                            </div>
                          </div>
                          <div className="w-5/12"></div>
                        </>
                      ) : (
                        <>
                          <div className="w-5/12"></div>
                          <div className="w-1/6 flex justify-center">
                            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                              {milestone.year}
                            </div>
                          </div>
                          <div className="w-5/12 px-4 py-6 bg-white rounded-lg shadow-md">
                            <div className="flex items-center mb-2">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <Icon className="h-5 w-5 text-blue-600" />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-800">{milestone.title}</h3>
                            </div>
                            <p className="text-gray-600 pl-13">{milestone.event}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Shaping the Future</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how Baksh Group can be your trusted partner in global trade and logistics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BakshGroup;
