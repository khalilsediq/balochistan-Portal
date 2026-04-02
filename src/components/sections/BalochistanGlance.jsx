import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export default function BalochistanGlance() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden bg-gov-green-dark text-white">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{ backgroundImage: 'url("/images/balochistan-landscape.jpg")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gov-green-dark to-gov-green-dark/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gov-gold mb-4 drop-shadow">
                {t('home.glance')}
              </h2>
              <div className="h-1 bg-gov-gold w-24 rounded-full"></div>
            </div>
            
            <p className="text-gray-200 text-lg leading-relaxed mb-6 font-light">
              Balochistan is the largest province of Pakistan, constituting approximately 44% of the total land mass. It is remarkably rich in mineral resources including natural gas, coal, and copper.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">
              With its strategic geographic location and the development of the Gwadar Port under CPEC, it stands as the economic gateway for the region.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { label: "Capital", value: "Quetta" },
                { label: "Total Area", value: "347,190 km²" },
                { label: "Districts", value: "34" },
                { label: "Languages", value: "Balochi, Brahui, Pashto, Urdu" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gov-gold/20 flex items-center justify-center mr-4 text-gov-gold">✓</div>
                  <span className="font-semibold w-24 text-gray-300">{item.label}:</span>
                  <span className="text-white font-medium">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map/Graphic Placeholder */}
          <div className="relative pt-[100%] sm:pt-[75%] lg:pt-[100%] max-w-lg mx-auto w-full">
            <div className="absolute inset-0 bg-white/5 rounded-2xl border border-white/20 backdrop-blur-sm p-4 flex items-center justify-center">
              <div className="text-center text-white/50">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-gov-gold/30 border-dashed animate-[spin_60s_linear_infinite] flex items-center justify-center mb-4">
                  <img src="/logo.png" alt="Seal" className="w-20 h-20 opacity-40 animate-none" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <p className="font-medium tracking-widest uppercase text-sm">Provincial Map Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
