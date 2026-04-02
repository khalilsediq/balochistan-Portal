import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { X, ChevronRight } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose, getNavLinkClass }) {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Slide-in Menu */}
      <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl animate-[slide-in-right_0.3s_ease-out]">
        <div className="absolute top-0 right-0 -mr-12 pt-4">
          <button
            type="button"
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-gov-dark"
            onClick={onClose}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>

        <div className="flex bg-gov-green px-4 py-5 items-center">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mr-3 overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" onError={(e) => e.target.style.display = 'none'} />
          </div>
          <span className="text-white font-bold text-lg leading-tight uppercase">Govt of Balochistan</span>
        </div>

        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 px-4 space-y-1">
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
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) => `flex items-center justify-between px-3 py-3 rounded-md text-base font-medium ${isActive ? 'bg-gov-green/10 text-gov-green' : 'text-gray-900 hover:bg-gray-50'}`}
              >
                <span className={language === 'ur' ? 'font-urdu' : ''}>{t(item.label)}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </NavLink>
            ))}
          </nav>
        </div>
        
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <button className="flex-shrink-0 w-full group block text-center rounded-md border-2 border-gov-gold py-2 text-sm font-medium text-gov-gold hover:bg-gov-gold hover:text-white transition-colors">
            {language === 'en' ? 'Citizen Portal Login' : 'سٹیزن پورٹل لاگ ان'}
          </button>
        </div>
      </div>
    </div>
  );
}
