import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function PageBanner({ title, urduTitle, backgroundImage }) {
  const { language } = useLanguage();
  
  return (
    <div className="relative h-48 md:h-64 w-full bg-gov-green flex items-center overflow-hidden">
      {backgroundImage && (
        <>
          <img 
            src={backgroundImage} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gov-green/80 flex"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gov-green-dark/90 to-transparent"></div>
        </>
      )}
      
      {/* Decorative pattern overlay */}
      {!backgroundImage && (
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      )}

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
          {title}
        </h1>
        {urduTitle && language === 'en' && (
          <p className="font-urdu text-xl md:text-2xl text-gov-gold drop-shadow opacity-90">
            {urduTitle}
          </p>
        )}
        <div className="w-24 h-1 bg-gov-gold mx-auto mt-6 rounded-full shadow-sm"></div>
      </div>
    </div>
  );
}
