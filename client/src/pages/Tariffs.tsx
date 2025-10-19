import React from 'react';
import { motion } from 'framer-motion';

const Tariffs: React.FC = () => {
  // Get today's date in a readable format
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      {/* Exchange Rate Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <svg 
                className="w-6 h-6 text-yellow-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <span className="font-medium">{today}</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-700 px-4 py-2 rounded-lg shadow-inner">
              <span className="font-medium">Exchange Rate:</span>
              <span className="font-bold text-yellow-300">1 USD = 282.50 PKR</span>
              {/* <svg 
                className="w-5 h-5 text-green-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7h7m0 0v7m0-7l-8 8-4-4-6 6" 
                />
              </svg> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tariffs
          </motion.h1>
          <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>





          {/* <p className="text-gray-600">Effective rates for our shipping services</p> */}
        

        <div className="space-y-12">
          {/* Shanghai Jinjiang Group Company Limited */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Shanghai Jinjiang Group Company Limited</h2>
            
            {/* Charges Table */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3">
                <h3 className="text-lg font-bold text-white">CHARGES</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">20' (USD)</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">40' (USD)</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">20' (PKR)</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">40' (PKR)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DTHC</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">130</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">195</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">D.THC(TK/OT/FR/DG)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ISPS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">D/O</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per B\L</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GATEPASS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">LOLO</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">3500</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">4500</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Import Detention Table */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 px-6 py-3">
                <h3 className="text-lg font-bold text-white">IMPORT DETENTION</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TYPE</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">FREE-DAYS</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">1ST-DAYS</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">COST</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">2ND-DAYS</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">COST</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">3RD-DAYS</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">COST</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">20GP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">7 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">8-14 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">30</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">15-21 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">22 DAYS UP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">80</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40GP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">7 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">8-14 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">60</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">15-21 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">95</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">22 DAYS UP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">120</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40HC</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">7 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">8-14 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">60</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">15-21 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">90</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">22 DAYS UP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">120</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">20SP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">7 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">6-10 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">11-15 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">75</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">16 DAYS UP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">100</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40SP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">5 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">6-10 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">100</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">11-15 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">150</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">16 DAYS UP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">200</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">20RF</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">5 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">6-10 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">11-15 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">75</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">16 DAYS UP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">100</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40RF</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">5 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">6-10 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">100</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">11-15 DAYS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">150</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">16 DAYS UP</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* W Container Lines */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">W Container Lines</h2>
            
            {/* Charges Table */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3">
                <h3 className="text-lg font-bold text-white">CHARGES</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">20 (USD)</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">40 (USD)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DTHC (General Cargo)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">143</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">181</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DOCS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Bill of Lading</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">D/O</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                    <tr className="bg-gray-50"> 
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GATEPASS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">5</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">5</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                    <tr className="bg-white"> 
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ADMIN CHARGES</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                    <tr className="bg-gray-50"> 
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">HANDLING</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per B/L</td>
                    </tr>
                    <tr className="bg-white"> 
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ISPS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                    <tr className="bg-gray-50"> 
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">LOLO</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">25</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">25</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per Container</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Import Detention Table */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 px-6 py-3">
                <h3 className="text-lg font-bold text-white">IMPORT DETENTION</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">7 DAYS</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">20(USD)</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">40(USD)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">14DAYS</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">20(USD)</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">40(USD)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">21DAYS</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">20(USD)</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">40(USD)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1-7</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">FREE</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">FREE</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1-14</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">FREE</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">FREE</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1-21</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">FREE</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">FREE</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8-12</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">30</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">15-19</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">70</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">22-ONWARDS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">70</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">130</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">13-17</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">70</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">20-ONWARDS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">70</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">130</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                    </tr>
                    <tr className="bg-gray-50"> 
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">18-ONWARDS</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">70</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">130</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
