import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  
  // Don't show WhatsApp button on dashboard, login, or admin pages
  const showWhatsAppButton = !path.includes('/dashboard') && !path.includes('/login') && !path.includes('/admin');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      
      {/* WhatsApp Button */}
      {showWhatsAppButton && <WhatsAppButton phoneNumber="+923333333333" />}

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 Your Shipping Co. All rights reserved.</p>
            <p className="mt-2">
              Professional shipping line management system built with modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
