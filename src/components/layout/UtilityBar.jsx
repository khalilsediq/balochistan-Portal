import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function UtilityBar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="bg-gov-green-dark text-white/90 text-xs sm:text-sm py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center z-50 relative">
      <div className="flex items-center space-x-6 mb-2 sm:mb-0" dir="ltr">
        <span className="flex items-center">
          <Phone className="w-3 h-3 mr-2 text-gov-gold" />
          +923708911924
        </span>
        <span className="hidden md:flex items-center">
          <Mail className="w-3 h-3 mr-2 text-gov-gold" />
          info@balochistan.gov.pk
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleLanguage}
          className="font-semibold hover:text-gov-gold transition-colors focus:ring-2 focus:ring-gov-gold focus:outline-none rounded px-1"
        >
          {language === 'en' ? 'اردو' : 'English'}
        </button>
      </div>
    </div>
  );
}
