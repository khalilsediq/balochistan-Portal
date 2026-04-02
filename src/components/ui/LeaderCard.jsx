import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const LeaderCard = React.memo(({ leader }) => {
  const { language } = useLanguage();
  
  return (
    <div className={`flex flex-col items-center bg-white rounded-2xl shadow-md border ${leader.isPrimary ? 'border-gov-gold/50' : 'border-gray-100'} overflow-hidden hover:shadow-xl transition-shadow`}>
      <div className="w-full relative pt-[120%] bg-gov-green/10">
        {leader.photo ? (
          <img 
            src={leader.photo} 
            alt={leader.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className={`${leader.photo ? 'hidden' : 'flex'} absolute inset-0 bg-gradient-to-br from-gov-green to-gov-green-light items-center justify-center text-white text-4xl font-bold`}>
          {leader.initials}
        </div>
      </div>
      
      <div className="p-6 text-center w-full flex flex-col flex-grow">
        <h3 className={`font-bold text-gray-900 mb-1 ${language === 'ur' ? 'font-urdu text-2xl' : 'text-xl'}`}>
          {language === 'en' ? leader.name : leader.urduName}
        </h3>
        <p className={`text-gov-green font-medium mb-4 ${language === 'ur' ? 'font-urdu text-lg' : 'text-sm'}`}>
          {language === 'en' ? leader.title : leader.urduTitle}
        </p>
        
        <Link 
          to={`/leadership/${leader.id}`}
          className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-gov-green text-sm font-medium rounded-md text-gov-green hover:bg-gov-green hover:text-white transition-colors"
        >
          {language === 'en' ? 'View Profile' : 'پروفائل دیکھیں'}
        </Link>
      </div>
    </div>
  );
});

export default LeaderCard;
