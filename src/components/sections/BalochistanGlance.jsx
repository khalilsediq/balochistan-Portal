/* eslint-disable no-unused-vars */
import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function BalochistanGlance() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden bg-gov-green-dark text-white">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{ backgroundImage: 'url("/images/balochistan-landscape.jpg")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gov-green-dark to-gov-green-dark/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gov-gold mb-4 drop-shadow">
                {t('home.glance')}
              </h2>
              <div className="h-1 bg-gov-gold w-24 rounded-full"></div>
            </div>
            
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Balochistan is the largest province of Pakistan, constituting approximately 44% of the total land mass. It is remarkably rich in mineral resources including natural gas, coal, and copper.
            </p>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 font-light">
              With its strategic geographic location and the development of the Gwadar Port under CPEC, it stands as the economic gateway for the region.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { label: "Capital", value: "Quetta" },
                { label: "Total Area", value: "347,190 km²" },
                { label: "Districts", value: "34" },
                { label: "Languages", value: "Balochi, Brahui, Pashto, Urdu" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gov-gold/20 flex items-center justify-center mr-4 text-gov-gold shrink-0">✓</div>
                  <span className="font-semibold w-24 text-gray-300">{item.label}:</span>
                  <span className="text-white font-medium break-words max-w-[200px] sm:max-w-none">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Map/Graphic Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative pt-[100%] sm:pt-[75%] lg:pt-[100%] max-w-lg mx-auto w-full group"
          >
            <div className="absolute inset-0 bg-white/5 rounded-3xl border border-white/20 backdrop-blur-sm p-4 flex items-center justify-center overflow-hidden hover:bg-white/10 transition-colors duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gov-green/40 to-transparent"></div>
              
              <img 
                src="/images/balochistan_map.png" 
                alt="Map of Balochistan" 
                className="w-full h-full object-contain relative z-10 p-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-transform duration-700" 
              />
              
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur text-white/80 text-[10px] px-3 py-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                Map of Balochistan
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
