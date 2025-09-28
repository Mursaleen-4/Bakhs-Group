import React from 'react';
import { motion } from 'framer-motion';
import { FileText, DollarSign } from 'lucide-react';
import { pageBackgrounds } from '../assets/videos';

const Tariffs: React.FC = () => {
  return (
    <div 
      className="min-h-screen relative bg-cover bg-center bg-fixed bg-no-repeat py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${pageBackgrounds.tariffs})`
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10"
        >
          <div className="flex items-start md:items-center md:justify-between flex-col md:flex-row gap-4">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-xl mr-3">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Tariffs</h1>
                <p className="text-gray-600">Our standard rates and downloadable tariff sheets.</p>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              Download PDF
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Liner Shipping', desc: 'Base ocean freight and surcharges.' },
              { title: 'Freight Forwarding', desc: 'Air, sea and inland rates overview.' },
              { title: 'Container Services', desc: 'FCL/LCL, storage and handling fees.' },
              { title: 'Ship Husbandry', desc: 'Agency fees and port charges guidance.' },
              { title: 'Warehousing', desc: 'Storage, palletizing and value-add services.' },
              { title: 'Customs Clearance', desc: 'Documentation and brokerage charges.' }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Note: Final quotations may vary based on route, seasonality and cargo specifics. Please use the Get Quote form for exact pricing.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Tariffs;


