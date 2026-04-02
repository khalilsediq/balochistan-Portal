import React from 'react';
import { Link } from 'react-router-dom';
import { DEPARTMENTS } from '../../data/departments';
import { useLanguage } from '../../context/LanguageContext';

export default function MegaMenu({ closeMenu }) {
  const { language } = useLanguage();
  
  // Show a selection of 8 important departments
  const prominentDeps = DEPARTMENTS.slice(0, 8);

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white border border-gray-200 shadow-2xl rounded-b-lg overflow-hidden animate-fade-in-up z-50">
      <div className="bg-gov-green text-white px-6 py-4 flex justify-between items-center">
        <h3 className={`text-lg font-semibold ${language==='ur'?'font-urdu':''}`}>
          {language === 'en' ? 'Government Departments' : 'سرکاری محکمہ جات'}
        </h3>
        <Link 
          to="/departments" 
          onClick={closeMenu}
          className="text-sm font-medium hover:text-gov-gold text-white/80 transition-colors"
        >
          {language === 'en' ? 'View All Departments →' : 'سب دیکھیں ←'}
        </Link>
      </div>
      
      <div className="grid grid-cols-2 p-6 gap-x-8 gap-y-4">
        {prominentDeps.map((dep) => (
          <Link
            key={dep.id}
            to={`/departments/${dep.slug}`}
            onClick={closeMenu}
            className="group flex gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gov-green focus:outline-none"
          >
            <div className="h-10 w-10 flex items-center justify-center bg-green-50 rounded-lg text-xl group-hover:bg-gov-green group-hover:text-white transition-colors">
              {dep.icon}
            </div>
            <div>
              <p className={`font-medium text-gray-900 group-hover:text-gov-green transition-colors ${language==='ur'?'font-urdu text-lg pb-1':'text-sm'}`}>
                {language === 'en' ? dep.name : dep.urduName}
              </p>
              <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                {dep.overview}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Total 26 officially recognized departments
        </span>
        <Link 
          to="/departments" 
          onClick={closeMenu}
          className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gov-green hover:bg-gov-green-light shadow-sm"
        >
          Explore Registry
        </Link>
      </div>
    </div>
  );
}
