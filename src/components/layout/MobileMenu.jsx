/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu({ isOpen, onClose }) {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          ></motion.div>

          {/* Slide-in Menu */}
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative flex-1 flex flex-col max-w-[85vw] sm:max-w-xs w-full bg-white shadow-2xl z-10"
          >
            <div className="absolute top-0 right-0 -mr-12 sm:-mr-14 pt-4">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-gov-dark border-2 border-white/20 shadow-lg"
                onClick={onClose}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6 text-white" aria-hidden="true" />
              </motion.button>
            </div>

            <div className="flex bg-gradient-to-r from-gov-green to-gov-green-light px-4 py-6 items-center shadow-md">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-4 overflow-hidden border border-gray-100 shadow-sm shrink-0">
                <img src="/logo.png" alt="Logo" className="w-9 h-9 object-contain" onError={(e) => e.target.style.display = 'none'} />
              </div>
              <span className="text-white font-bold text-lg sm:text-xl leading-tight uppercase relative truncate">
                Govt of Balochistan
              </span>
            </div>

            <div className="flex-1 h-0 pt-3 pb-4 overflow-y-auto w-full custom-scrollbar">
              <nav className="mt-2 px-3 space-y-1">
                {[
                  { path: "/", label: "nav.home" },
                  { path: "/about", label: "nav.about" },
                  { path: "/departments", label: "nav.departments" },
                  { path: "/leadership", label: "nav.leadership" },
                  { path: "/e-services", label: "nav.services" },
                  { path: "/news", label: "nav.news" },
                  { path: "/tenders", label: "nav.tenders" },
                  { path: "/jobs", label: "nav.jobs" },
                  { path: "/gallery", label: "nav.gallery" },
                  { path: "/contact", label: "nav.contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) => `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive ? 'bg-gov-green/10 text-gov-green shadow-sm' : 'text-gray-700 hover:bg-gray-100/80 hover:text-gov-green'} w-full`}
                    >
                      <span className={language === 'ur' ? 'font-urdu' : ''}>{t(item.label)}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 opacity-70" />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </div>
            
            <div className="flex-shrink-0 flex border-t border-gray-100 p-5 bg-white">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0 w-full group block text-center rounded-xl bg-gov-green py-3 px-4 text-base font-bold text-white shadow-md hover:bg-gov-green-light transition-colors"
                onClick={onClose}
              >
                {language === 'en' ? 'Citizen Portal Login' : 'سٹیزن پورٹل لاگ ان'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
