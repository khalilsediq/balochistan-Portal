import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function SectionHeader({ title, urduTitle, subtitle, centered = true }) {
  const { language } = useLanguage();
  
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gov-green-dark mb-4">
        {language === 'en' ? title : 
         <span className="font-urdu leading-normal block">{urduTitle || title}</span>}
      </h2>
      <div className={`h-1 bg-gov-gold w-24 ${centered ? 'mx-auto' : ''} mb-4 rounded-full`}></div>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
