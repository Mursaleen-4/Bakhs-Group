import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Ship, 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  Truck, 
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCompaniesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="group flex items-center py-2">
            <div className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-white/20 transition-colors">
              <Ship className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-white">Baksh Investment Limited</div>
              <div className="text-xs text-blue-100/80 leading-tight">
                <div>Yaaseen Shipping Lines (Pvt) Ltd</div>
                <div>UOSL Shipping and Logistics</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md font-medium">HOME</Link>

            {/* Companies Dropdown */}
            <div 
              className="relative group"
              ref={dropdownRef}
              onMouseEnter={() => setIsCompaniesOpen(true)}
              onMouseLeave={() => setIsCompaniesOpen(false)}
            >
              <button
                onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
                className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md font-medium flex items-center"
              >
                Group Of Companies
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isCompaniesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isCompaniesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 w-72 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                  >
                    <div className="py-1">
                      <Link
                        to="/baksh-investment"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsCompaniesOpen(false)}
                      >
                        <Building2 className="h-4 w-4 mr-3 text-primary-600" />
                        <div>
                          <div className="font-medium">Baksh Investment Limited</div>
                          <div className="text-xs text-gray-500">Investment and financial services</div>
                        </div>
                      </Link>
                      <Link
                        to="/about"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group"
                        onClick={() => setIsCompaniesOpen(false)}
                      >
                        <div className="p-1.5 bg-blue-100 rounded-md mr-3 group-hover:bg-blue-200 transition-colors">
                          <Ship className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Yaaseen Shipping Lines</div>
                          <div className="text-xs text-gray-500">Global shipping solutions</div>
                        </div>
                        <ChevronRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </Link>
                      <Link
                        to="/uosl"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group rounded-b-lg"
                        onClick={() => setIsCompaniesOpen(false)}
                      >
                        <div className="p-1.5 bg-blue-100 rounded-md mr-3 group-hover:bg-blue-200 transition-colors">
                          <Truck className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">UOSL Shipping</div>
                          <div className="text-xs text-gray-500">Logistics & Operations</div>
                        </div>
                        <ChevronRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            <Link to="/eservices" className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md font-medium">Services</Link>
            <Link to="/contact" className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md font-medium">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-4 py-3">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">About</Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Services</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
