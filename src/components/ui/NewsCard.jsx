import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Calendar, ChevronRight } from 'lucide-react';

const NewsCard = React.memo(({ article }) => {
  const { language } = useLanguage();
  
  // Minimal image fallback matching specifications
  const fallbackBg = 'linear-gradient(135deg, #1B4F2A, #2d7a47)';

  const tagColors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    red: 'bg-red-100 text-red-800',
    gray: 'bg-gray-100 text-gray-800'
  };

  const tagClass = tagColors[article.tagColor] || tagColors.gray;

  return (
    <Link to={`/news/${article.id}`} className="group flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 w-full relative overflow-hidden bg-gray-100 flex-shrink-0">
        <div className="absolute top-4 left-4 z-10">
          <span className={`${tagClass} text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm`}>
            {article.tag}
          </span>
        </div>
        <div 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ background: fallbackBg }}
        >
          {article.image && (
            <img 
              src={article.image} 
              alt={article.headline}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <Calendar className="w-3.5 h-3.5 mr-1" />
          <time>{article.date}</time>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-gov-green transition-colors line-clamp-2">
          {article.headline}
        </h3>
        
        <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
          {article.excerpt}
        </p>
        
        <div className="mt-auto flex items-center text-sm font-semibold text-gov-gold group-hover:text-gov-green transition-colors">
          {language === 'en' ? 'Read More' : 'مزید پڑھیں'}
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
});

export default NewsCard;
