import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Breadcrumb({ items = [] }) {
  const { language } = useLanguage();
  const location = useLocation();

  if (location.pathname === '/' || items.length === 0) return null;

  return (
    <nav className="bg-gov-cream border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <div key={index} className="flex items-center space-x-2">
              {item === 'Home' ? (
                <Link to="/" className="text-gray-500 hover:text-gov-green transition-colors flex items-center">
                  <Home className="w-4 h-4" />
                </Link>
              ) : (
                <span className={isLast ? 'text-gov-green font-medium' : 'text-gray-500 font-medium'}>
                  {item}
                </span>
              )}
              
              {!isLast && (
                <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
