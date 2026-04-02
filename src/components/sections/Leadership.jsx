import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import LeaderCard from '../ui/LeaderCard';
import { LEADERS } from '../../data/leadership';
import { useLanguage } from '../../context/LanguageContext';

export default function Leadership() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white relative">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gov-cream/50 rounded-l-[100px] -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={t('home.leadership')}
          urduTitle="صوبائی قیادت"
          subtitle="Governing with a vision for a prosperous and advanced Balochistan."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {LEADERS.map((leader) => (
            <div key={leader.id} className={leader.isPrimary ? "md:-mt-6" : "mt-0"}>
              <LeaderCard leader={leader} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
