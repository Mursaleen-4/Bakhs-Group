import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Ship, Anchor, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      title: "Baksh Investment Limited",
      subtitle: "Strategic Investment Solutions",
      description: "Driving growth and innovation in the maritime sector through strategic investments and partnerships.",
      image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?q=80&w=2065",
      cta: "About Baksh",
      ctaLink: "/baksh-investment",
      icon: Anchor,
      stats: [
        { value: "Strategic", label: "Approach" },
        { value: "Growth", label: "Focused" },
        { value: "Innovation", label: "Driven" }
      ]
    },
    {
      id: 2,
      title: "Yaaseen Shipping Lines",
      subtitle: "Global Maritime Solutions",
      description: "Leading maritime services provider with a commitment to excellence in global shipping and logistics.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
      cta: "About Yaaseen",
      ctaLink: "/about",
      icon: Ship,
      stats: [
        { value: "Global", label: "Network" },
        { value: "24/7", label: "Support" },
        { value: "Premium", label: "Service" }
      ]
    },
    {
      id: 3,
      title: "UOSL Shipping & Logistics",
      subtitle: "Your Trusted Maritime Partner",
      description: "70+ years of excellence in maritime services, connecting Pakistan to global markets with reliability and efficiency.",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070",
      cta: "About UOSL",
      ctaLink: "/uosl",
      icon: Truck,
      stats: [
        { value: "70+", label: "Years" },
        { value: "Global", label: "Reach" },
        { value: "Trusted", label: "Partner" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setSlideDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  if (!slides || slides.length === 0)
    return <div className="h-screen flex items-center justify-center">No slides available</div>;

  const safeCurrentSlideIndex = Math.min(Math.max(0, currentSlide), slides.length - 1);
  const currentSlideData: Slide = slides[safeCurrentSlideIndex]!;

  return (
    <div className="relative w-screen h-screen -mt-16 overflow-hidden left-1/2 -translate-x-1/2">
      <div className="absolute inset-0 w-screen h-full">
        <AnimatePresence initial={false} custom={slideDirection}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-screen h-full"
            style={{
              backgroundImage: `url('${currentSlideData.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
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
                transition: { duration: 0.8, ease: "easeInOut" }
              },
              exit: (direction: number) => ({
                x: direction > 0 ? '-100%' : '100%',
                opacity: 0.5,
                transition: { duration: 0.8, ease: "easeInOut" }
              })
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 via-primary-800/50 to-blue-900/40" />
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <motion.div
                    className="text-left text-white px-4 sm:px-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8, delay: 0.2 }
                    }}
                  >
                    <div className="flex flex-wrap items-center mb-4">
                      {React.createElement(currentSlideData.icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mr-3 sm:mr-4" })}
                      <span className="text-yellow-400 font-semibold text-base sm:text-lg">
                        {currentSlideData.subtitle}
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                      {currentSlideData.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 leading-relaxed max-w-2xl">
                      {currentSlideData.description}
                    </p>
                    <div className="mb-12">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5, delay: 0.4 }
                        }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <Link
                          to={currentSlideData.ctaLink}
                          className="btn btn-primary btn-lg px-8 md:px-12 py-3 md:py-4 text-base md:text-lg inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
                        >
                          {currentSlideData.cta}
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="lg:text-right"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8, delay: 0.4 }
                    }}
                  >
                    {currentSlideData.stats && (
                      <div className="grid grid-cols-3 gap-4 lg:gap-6 w-full">
                        {currentSlideData.stats.map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            className="text-center lg:text-right p-2 sm:p-3 bg-white/5 rounded-lg backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.6,
                                delay: 0.6 + index * 0.1
                              }
                            }}
                          >
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1 leading-none">
                              {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm font-medium text-blue-100 uppercase tracking-wider">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === safeCurrentSlideIndex
                ? 'bg-yellow-400 scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div className="absolute bottom-8 right-8 z-20 text-white" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div className="w-1 h-3 bg-white rounded-full mt-2" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroCarousel;
