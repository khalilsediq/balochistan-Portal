import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, User } from 'lucide-react';

const DepartmentCard = React.memo(({ dept }) => {
  const { language } = useLanguage();
  
  return (
    <Link to={`/departments/${dept.slug}`} className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col hover:border-gov-green hover:shadow-lg transition-all group overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-gov-green/5 rounded-full transform group-hover:scale-150 transition-transform duration-500 z-0"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center text-2xl group-hover:bg-gov-green group-hover:text-white transition-colors duration-300">
            {dept.icon}
          </div>
        </div>
        
        <h3 className={`text-lg font-bold text-gray-900 mb-2 group-hover:text-gov-green transition-colors ${language==='ur'?'font-urdu text-xl':''}`}>
          {language === 'en' ? dept.name : dept.urduName}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {dept.overview}
        </p>

        <div className="mt-auto space-y-2 pb-4">
          <div className="flex items-center text-xs text-gray-600">
            <User className="w-3.5 h-3.5 mr-2 text-gov-gold shrink-0" />
            <span className="truncate">Minister: <span className="font-semibold text-gray-900">{dept.minister}</span></span>
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <User className="w-3.5 h-3.5 mr-2 text-gray-400 shrink-0" />
            <span className="truncate">Secretary: <span className="font-semibold text-gray-900">{dept.secretary}</span></span>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-3 mt-auto flex items-center text-sm font-semibold text-gov-green group-hover:text-gov-green-light">
          {language === 'en' ? 'View Details' : 'تفصیلات دیکھیں'}
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
});

export default DepartmentCard;
