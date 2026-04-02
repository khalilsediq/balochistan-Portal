import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronRight } from 'lucide-react';

const ServiceCard = React.memo(({ service }) => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-lg bg-gov-green/10 text-gov-green flex items-center justify-center text-2xl">
          {service.icon || '📄'}
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${service.isOnline ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
          {service.isOnline ? (language === 'en' ? 'Online' : 'آن لائن') : (language === 'en' ? 'In Person' : 'بذات خود')}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-sm text-gray-600 mb-6 flex-grow">{service.desc}</p>
      
      <a 
        href={service.link || "#"} 
        className="inline-flex items-center text-sm font-semibold text-gov-green hover:text-gov-green-light mt-auto group"
      >
        {language === 'en' ? 'Access Service' : 'سروس تک رسائی'}
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
});

export default ServiceCard;
