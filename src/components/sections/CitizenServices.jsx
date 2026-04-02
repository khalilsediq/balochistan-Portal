import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';
import { SERVICES } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

export default function CitizenServices() {
  const { t, language } = useLanguage();
  
  // Flatten top 8 services for the homepage grid
  const standoutServices = SERVICES.flatMap(category => category.items).slice(0, 8);

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={t('home.services')} 
          urduTitle="شہری خدمات"
          subtitle="Access essential government services, certificates, and portals efficiently online."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {standoutServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/e-services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gov-green hover:bg-gov-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gov-green transition-colors"
          >
            {t('common.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
