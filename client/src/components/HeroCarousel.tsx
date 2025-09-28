import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Ship, Anchor, Truck, Check, Globe, Clock, Shield, Award, Users, BarChart2 } from 'lucide-react';
import SimpleVideoBackground from './SimpleVideoBackground';
import { carouselVideos } from '../assets/videos';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
  icon: React.ComponentType<any>;
  stats?: { value: string; label: string }[];
}

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Global Maritime Excellence',
      subtitle: 'Your Trusted Shipping Partner',
      description:
        'Connecting continents with reliable and efficient maritime solutions. Experience seamless global trade with our comprehensive services.',
      image: '',
      cta: 'Explore Services',
      ctaLink: '/services',
      icon: Globe,
      stats: [
        { value: '24/7', label: 'Support' },
        { value: 'Global', label: 'Network' },
        { value: '99.9%', label: 'Reliability' }
      ]
    },
    {
      id: 2,
      title: 'Innovative Logistics Solutions',
      subtitle: 'Beyond Boundaries',
      description:
        'Cutting-edge logistics services designed to meet the demands of modern global trade. Fast, secure, and efficient delivery solutions.',
      image: '',
      cta: 'Get a Quote',
      ctaLink: '/quote',
      icon: Truck,
      stats: [
        { value: 'Fast', label: 'Delivery' },
        { value: 'Secure', label: 'Handling' },
        { value: 'Eco', label: 'Friendly' }
      ]
    },
    {
      id: 3,
      title: 'Decades of Excellence',
      subtitle: 'Proven Track Record',
      description:
        'With years of experience in the industry, we deliver exceptional maritime services with a commitment to quality and customer satisfaction.',
      image: '',
      cta: 'Our Story',
      ctaLink: '/about',
      icon: Award,
      stats: [
        { value: '70+', label: 'Years' },
        { value: '500+', label: 'Partners' },
        { value: '100%', label: 'Commitment' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection(1);
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setSlideDirection(1);
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideDirection(-1);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  if (!slides || slides.length === 0)
    return (
      <div className="h-screen flex items-center justify-center">
        No slides available
      </div>
    );

  const safeCurrentSlideIndex = Math.min(
    Math.max(0, currentSlide),
    slides.length - 1
  );
  const currentSlideData: Slide = slides[safeCurrentSlideIndex]!;

  // Animated popup component
  type ColorVariant = 'dark' | 'mixed' | 'light';
  
  const AnimatedPopup = ({ 
    delay, 
    children, 
    variant 
  }: { 
    delay: number; 
    children: React.ReactNode;
    variant?: ColorVariant;
  }) => {
    // Determine colors based on variant or current slide
    const colors: ColorVariant = variant || 
      (currentSlide === 0 ? 'dark' : currentSlide === 1 ? 'mixed' : 'light');
    
    const colorSchemes = {
      dark: {
        bg: 'from-blue-900/90 to-blue-800/90',
        border: 'border-blue-400/30 hover:border-blue-300/60',
        text: 'text-white',
        textMuted: 'text-blue-100',
        iconBg: 'bg-blue-500/90',
        hoverBg: 'hover:bg-blue-700/90'
      },
      mixed: {
        bg: 'from-teal-50/90 to-white/90',
        border: 'border-teal-400/50 hover:border-teal-500/60',
        text: 'text-teal-900',
        textMuted: 'text-teal-700',
        iconBg: 'bg-teal-500/90',
        hoverBg: 'hover:bg-teal-100/90'
      },
      light: {
        bg: 'from-red-50/95 to-red-100/95',
        border: 'border-red-400/60 hover:border-red-500/70',
        text: 'text-red-900',
        textMuted: 'text-red-700',
        iconBg: 'bg-red-600/90',
        hoverBg: 'hover:bg-red-100/90'
      }
    };

    const scheme = colorSchemes[colors];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            duration: 0.6, 
            delay: delay,
            type: 'spring',
            stiffness: 120,
            damping: 12,
            mass: 0.5
          }
        }}
        whileHover={{ 
          y: -8,
          scale: 1.05,
          rotate: 0.5,
          transition: { 
            duration: 0.3,
            ease: 'easeOut'
          }
        }}
        className={`bg-gradient-to-br ${scheme.bg} p-4 rounded-xl shadow-xl border-2 ${scheme.border} transition-all duration-300 backdrop-blur-sm transform-gpu ${scheme.hoverBg} ${
      currentSlide === 2 ? 'bg-opacity-100' : ''  // Ensure full opacity for red theme
    }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { 
              delay: delay + 0.2,
              duration: 0.4
            }
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  };

  // Floating elements animation
  const FloatingElement = ({ delay, children, className = '' }: { delay: number; children: React.ReactNode; className?: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20, x: (Math.random() - 0.5) * 100 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [20, 0, 0, -20],
        x: [0, (Math.random() - 0.5) * 20, 0, (Math.random() - 0.5) * 40],
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        delay: delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
      className={`absolute ${className} pointer-events-none`}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="relative w-screen h-screen -mt-16 overflow-hidden left-1/2 -translate-x-1/2">
      {/* Floating elements */}
      <FloatingElement delay={0} className="top-1/4 left-1/4">
        <Ship className="w-12 h-12 text-yellow-400/30" />
      </FloatingElement>
      <FloatingElement delay={2} className="top-1/3 right-1/4">
        <Globe className="w-10 h-10 text-white/20" />
      </FloatingElement>
      <FloatingElement delay={4} className="bottom-1/4 left-1/3">
        <Anchor className="w-8 h-8 text-yellow-400/20" />
      </FloatingElement>
      <FloatingElement delay={6} className="top-1/2 right-1/3">
        <Truck className="w-16 h-16 text-white/15" />
      </FloatingElement>

      <div className="absolute inset-0 w-screen h-full">
        <AnimatePresence initial={false} custom={slideDirection}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-screen h-full"
            custom={slideDirection}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? '100%' : '-100%',
                opacity: 0.5
              }),
              center: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: 'easeInOut' }
              },
              exit: (direction: number) => ({
                x: direction > 0 ? '-100%' : '100%',
                opacity: 0.5,
                transition: { duration: 0.8, ease: 'easeInOut' }
              })
            }}
          >
            {/* Video Background */}
            <div className="absolute inset-0 z-0"></div>
            <SimpleVideoBackground
              videoSrc={
                carouselVideos[safeCurrentSlideIndex]?.video ??
                carouselVideos[0]?.video ??
                ''
              }
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <motion.div
                    className={`px-4 sm:px-0 relative z-10 ${
                      currentSlide === 0 ? 'text-video-dark' : 
                      currentSlide === 1 ? 'text-video-mixed' : 'text-video-light'
                    }`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8, delay: 0.2 }
                    }}
                  >
                    <motion.div 
                      className={`inline-flex items-center mb-6 px-6 py-2 rounded-full font-medium text-sm md:text-base ${
                        currentSlide === 0 ? 'bg-black/20 text-blue-200 border border-blue-300/30' :
                        currentSlide === 1 ? 'bg-white/80 text-blue-900' :
                        'bg-white/90 text-blue-950'
                      }`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      {currentSlideData.subtitle}
                    </motion.div>
                    
                    <motion.h1 
                      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight ${
                        currentSlide === 0 ? 'text-white' :
                        currentSlide === 1 ? 'text-blue-900' :
                        'text-blue-950'
                      }`}
                      style={{
                        textShadow: currentSlide === 0 ? '0 2px 10px rgba(0,0,0,0.5)' : 'none'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                    >
                      {currentSlideData.title}
                    </motion.h1>
                    
                    <motion.p 
                      className={`text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl ${
                        currentSlide === 0 ? 'text-gray-200' :
                        currentSlide === 1 ? 'text-gray-800' :
                        'text-gray-800'
                      }`}
                      style={{
                        textShadow: currentSlide === 0 ? '0 1px 3px rgba(0,0,0,0.8)' : 'none'
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                    >
                      {currentSlideData.description}
                    </motion.p>
                    
                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
                    >
                      <a
                        href={currentSlideData.ctaLink}
                        className={`px-8 py-4 font-bold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                          currentSlide === 0 ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                          currentSlide === 1 ? 'bg-teal-600 hover:bg-teal-700 text-white' :
                          'bg-red-600 hover:bg-red-700 text-white'
                        }`}
                      >
                        {currentSlideData.cta}
                        <ChevronRight className="w-5 h-5" />
                      </a>
                      <a
                        href="/contact"
                        className={`px-6 py-3.5 bg-transparent border-2 font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                          currentSlide === 0 ? 'border-blue-300 hover:border-blue-200 text-blue-100 hover:bg-blue-900/20' :
                          currentSlide === 1 ? 'border-teal-400 hover:border-teal-300 text-teal-800 hover:bg-teal-100/50' :
                          'border-red-400 hover:border-red-300 text-red-800 hover:bg-red-100/50'
                        }`}
                      >
                        Contact Us
                      </a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="lg:text-right relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8, delay: 0.4 }
                    }}
                  >
                    <AnimatePresence>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        <AnimatedPopup delay={0.5} variant={currentSlide === 0 ? 'dark' : currentSlide === 1 ? 'mixed' : 'light'}>
                          <div className="flex items-center">
                            <motion.div 
                              className={`p-2 rounded-lg mr-3 ${
                                currentSlide === 0 ? 'bg-blue-500/90' :
                                currentSlide === 1 ? 'bg-teal-500/90' :
                                'bg-red-500/90'
                              }`}
                              whileHover={{ 
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.4 }
                              }}
                            >
                              <Clock className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <div className={`text-2xl font-bold ${
                                currentSlide === 0 ? 'text-white' :
                                currentSlide === 1 ? 'text-teal-900' :
                                'text-red-900'
                              }`}>24/7</div>
                              <div className={`text-xs font-medium ${
                                currentSlide === 0 ? 'text-blue-100' :
                                currentSlide === 1 ? 'text-teal-700' :
                                'text-red-700'
                              }`}>Support</div>
                            </div>
                          </div>
                        </AnimatedPopup>
                        
                        <AnimatedPopup delay={0.7} variant={currentSlide === 0 ? 'dark' : currentSlide === 1 ? 'mixed' : 'light'}>
                          <div className="flex items-center">
                            <motion.div 
                              className={`p-2 rounded-lg mr-3 ${
                                currentSlide === 0 ? 'bg-blue-500/90' :
                                currentSlide === 1 ? 'bg-teal-500/90' :
                                'bg-red-500/90'
                              }`}
                              whileHover={{ 
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.4 }
                              }}
                            >
                              <Globe className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <div className={`text-2xl font-bold ${
                                currentSlide === 0 ? 'text-white' :
                                currentSlide === 1 ? 'text-teal-900' :
                                'text-red-900'
                              }`}>Global</div>
                              <div className={`text-xs font-medium ${
                                currentSlide === 0 ? 'text-blue-100' :
                                currentSlide === 1 ? 'text-teal-700' :
                                'text-red-700'
                              }`}>Network</div>
                            </div>
                          </div>
                        </AnimatedPopup>
                        
                        <AnimatedPopup delay={0.9} variant={currentSlide === 0 ? 'dark' : currentSlide === 1 ? 'mixed' : 'light'}>
                          <div className="flex items-center">
                            <motion.div 
                              className={`p-2 rounded-lg mr-3 ${
                                currentSlide === 0 ? 'bg-blue-500/90' :
                                currentSlide === 1 ? 'bg-teal-500/90' :
                                'bg-red-500/90'
                              }`}
                              whileHover={{ 
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.4 }
                              }}
                            >
                              <Shield className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <div className={`text-2xl font-bold ${
                                currentSlide === 0 ? 'text-white' :
                                currentSlide === 1 ? 'text-teal-900' :
                                'text-red-900'
                              }`}>Secure</div>
                              <div className={`text-xs font-medium ${
                                currentSlide === 0 ? 'text-blue-100' :
                                currentSlide === 1 ? 'text-teal-700' :
                                'text-red-700'
                              }`}>Operations</div>
                            </div>
                          </div>
                        </AnimatedPopup>
                        
                        {currentSlideData.stats?.map((stat, index) => (
                          <AnimatedPopup 
                            key={index} 
                            delay={1.1 + (index * 0.2)}
                            variant={currentSlide === 0 ? 'dark' : currentSlide === 1 ? 'mixed' : 'light'}
                          >
                            <div className="flex items-center">
                              <motion.div 
                                className={`p-2 rounded-lg mr-3 ${
                                  currentSlide === 0 ? 'bg-blue-500/90' :
                                  currentSlide === 1 ? 'bg-teal-500/90' :
                                  'bg-red-500/90'
                                }`}
                                whileHover={{ 
                                  rotate: [0, -5, 5, 0],
                                  transition: { duration: 0.4 }
                                }}
                              >
                                {index % 3 === 0 ? (
                                  <Users className="w-6 h-6 text-white" />
                                ) : index % 3 === 1 ? (
                                  <BarChart2 className="w-6 h-6 text-white" />
                                ) : (
                                  <Award className="w-6 h-6 text-white" />
                                )}
                              </motion.div>
                              <div>
                                <div className={`text-2xl font-bold ${
                                  currentSlide === 0 ? 'text-white' :
                                  currentSlide === 1 ? 'text-teal-900' :
                                  'text-red-900'
                                }`}>
                                  {stat.value}
                                </div>
                                <div className={`text-xs font-medium ${
                                  currentSlide === 0 ? 'text-blue-100' :
                                  currentSlide === 1 ? 'text-teal-700' :
                                  'text-red-700'
                                }`}>
                                  {stat.label}
                                </div>
                              </div>
                            </div>
                          </AnimatedPopup>
                        ))}
                      </div>
                    </AnimatePresence>
                    
                    <motion.div 
                      className={`mt-8 p-6 backdrop-blur-sm rounded-2xl border-2 shadow-xl ${
                        currentSlide === 0 ? 'bg-gradient-to-br from-blue-900/90 to-blue-800/90 border-blue-400/30' :
                        currentSlide === 1 ? 'bg-gradient-to-br from-teal-50/90 to-white/90 border-teal-400/50' :
                        'bg-gradient-to-br from-red-50/95 to-red-100/95 border-red-400/60'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        transition: { 
                          delay: 1.5,
                          type: 'spring',
                          stiffness: 100,
                          damping: 12
                        } 
                      }}
                    >
                      <motion.h3 
                        className={`text-lg font-semibold mb-4 ${
                          currentSlide === 0 ? 'text-blue-200' :
                          currentSlide === 1 ? 'text-teal-800' :
                          'text-gray-800'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { 
                            delay: 1.7,
                            duration: 0.4
                          }
                        }}
                      >
                        Why Choose Us
                      </motion.h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: '70+', label: 'Years Experience' },
                          { value: '500+', label: 'Global Partners' },
                          { value: '24/7', label: 'Customer Support' },
                          { value: '99.9%', label: 'Satisfaction' }
                        ].map((item, i) => (
                          <motion.div 
                            key={i}
                            className={`text-center p-3 rounded-lg transition-colors duration-200 ${
                              currentSlide === 0 ? 'bg-blue-500/10 hover:bg-blue-500/20' :
                              currentSlide === 1 ? 'bg-teal-100/80 hover:bg-teal-200/60' :
                              'bg-red-100/90 hover:bg-red-200/80'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            <motion.div 
                              className={`text-2xl font-bold ${
                                currentSlide === 0 ? 'text-white' :
                                currentSlide === 1 ? 'text-teal-900' :
                                'text-red-700'
                              }`}
                              whileHover={{ scale: 1.1 }}
                            >
                              {item.value}
                            </motion.div>
                            <div className={`text-xs font-medium ${
                              currentSlide === 0 ? 'text-blue-200' :
                              currentSlide === 1 ? 'text-teal-700' :
                              'text-red-600'
                            }`}>
                              {item.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group border ${
          currentSlide === 0 ? 'bg-blue-800/80 hover:bg-blue-700/90 text-blue-100 border-blue-600/50 hover:border-blue-400/80' :
          currentSlide === 1 ? 'bg-teal-600/80 hover:bg-teal-700/90 text-teal-100 border-teal-500/50 hover:border-teal-400/80' :
          'bg-red-700/80 hover:bg-red-800/90 text-red-100 border-red-600/50 hover:border-red-400/80'
        }`}
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group border shadow-lg ${
          currentSlide === 0 ? 'bg-blue-800/90 hover:bg-blue-700/95 text-blue-50 border-blue-500/60 hover:border-blue-300/80' :
          currentSlide === 1 ? 'bg-teal-600/90 hover:bg-teal-700/95 text-teal-50 border-teal-500/60 hover:border-teal-300/80' :
          'bg-red-700/90 hover:bg-red-800/95 text-red-50 border-red-500/60 hover:border-red-300/80'
        }`}
        aria-label="Next slide"
        whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === safeCurrentSlideIndex
                ? 'bg-yellow-400 scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1 }
        }}
      >
        <motion.div
          className="flex flex-col items-center group cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm mb-2 text-white/80 group-hover:text-yellow-400 transition-colors">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-white/50 group-hover:border-yellow-400 rounded-full flex justify-center transition-all duration-300">
            <motion.div
              className="w-1 h-3 bg-yellow-400 rounded-full mt-2 group-hover:bg-white"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroCarousel;
