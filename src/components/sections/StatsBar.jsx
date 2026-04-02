import React from 'react';
import StatCounter from '../ui/StatCounter';
import { useLanguage } from '../../context/LanguageContext';

export default function StatsBar() {
  const { t } = useLanguage();

  return (
    <section className="bg-gov-green-dark border-y-4 border-gov-gold text-white relative z-20 -mt-10 sm:-mt-16 mx-4 sm:mx-8 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto bg-gov-green/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          <StatCounter 
            target={15} 
            title={t('home.stats.population')} 
            suffix="M+" 
          />
          <StatCounter 
            target={347190} 
            title={t('home.stats.area')} 
            suffix=" km²" 
          />
          <StatCounter 
            target={34} 
            title={t('home.stats.districts')} 
          />
          <StatCounter 
            target={955} 
            title={t('home.stats.budget')} 
            prefix="Rs "
            suffix="B" 
          />
        </div>
      </div>
    </section>
  );
}
