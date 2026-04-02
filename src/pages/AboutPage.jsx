import React, { useEffect } from 'react';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'About Balochistan | Government of Balochistan';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <PageBanner 
        title="About Balochistan" 
        urduTitle="بلوچستان کے بارے میں"
        backgroundImage="/images/balochistan-landscape.jpg" 
      />
      <Breadcrumb items={["Home", "About"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold text-gov-green-dark mb-4 border-l-4 border-gov-gold pl-3">Overview</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>Balochistan is the largest province of Pakistan in terms of land area, constituting approximately 43.6% (347,190 sq. km) of the country's total mass. Despite its vast size, it is the least populated province, home to around 15.1 million resilient people.</p>
                <p>The province holds extreme geopolitical and economic significance due to its expansive coastline along the Arabian Sea. The deep-sea port of Gwadar is the crown jewel of the China-Pakistan Economic Corridor (CPEC), transforming Balochistan into a regional hub for trade and connectivity.</p>
                <p>Balochistan's unique topography features vast deserts, rugged mountain ranges, and a pristine coastline, offering unparalleled potential for tourism, mining, and maritime industries.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gov-green-dark mb-4 border-l-4 border-gov-gold pl-3">History & Heritage</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>The history of Balochistan traces back to ancient civilizations such as Mehrgarh, which is considered one of the earliest sites of agriculture and farming in South Asia.</p>
                <p>Following the partition of the subcontinent in 1947, the princely states of Kalat, Makran, Lasbela, and Kharan acceded to Pakistan. Eventually, Balochistan was granted the status of a full-fledged province in 1970.</p>
                <p>The province is a melting pot of vibrant cultures. The majority of the population comprises Baloch, Pashtun, and Brahui ethnicities, each bringing their rich traditions, poetry, martial arts, and distinct hospitality to the cultural fabric of the region.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gov-green-dark mb-4 border-l-4 border-gov-gold pl-3">Geography & Climate</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>Geographically, the province is divided into four distinct zones: upper highlands, lower highlands, plains, and deserts. The Sulaiman and Brahui ranges dominate the eastern and central parts of the province.</p>
                <p>To the south lies the Makran coast, stretching for hundreds of kilometers along the Arabian Sea. The climate is characterized by extremes; the mountainous regions like Ziarat and Quetta experience harsh winters with temperatures dropping to -15°C, while the lowland plains and deserts can endure scorching summer highs of up to 45°C.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gov-green-dark mb-4 border-l-4 border-gov-gold pl-3">Natural Resources</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>Balochistan is the mineral powerhouse of Pakistan. The discovery of natural gas in Sui in the 1950s catalyzed the industrialization of the entire country. Today, the province provides a significant portion of the national gas supply.</p>
                <p>Furthermore, Balochistan possesses vast untapped non-renewable resources. It holds over 185 million tonnes of coal reserves and houses the Reko Diq project in the Chagai district, which is reputed to be one of the world's largest unexploited copper and gold deposits.</p>
                <p>Other vital minerals extracted in the province include marble, chromite, barytes, and limestone. Additionally, the Makran coast provides highly lucrative fishing grounds, supporting the livelihoods of thousands of coastal families.</p>
              </div>
            </section>

          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Facts Card */}
            <div className="bg-gov-green-dark rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gov-gold mr-3"></span>
                Key Facts
              </h3>
              
              <dl className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <dt className="text-sm text-gray-400 font-medium">Area</dt>
                  <dd className="text-lg text-gov-gold font-bold">347,190 km² <span className="text-sm font-normal text-gray-300">(43.6% of Pakistan)</span></dd>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <dt className="text-sm text-gray-400 font-medium">Population</dt>
                  <dd className="text-lg text-gov-gold font-bold">~15.1 Million <span className="text-sm font-normal text-gray-300">(2023 Census)</span></dd>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <dt className="text-sm text-gray-400 font-medium">Capital City</dt>
                  <dd className="text-lg text-white font-semibold">Quetta</dd>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <dt className="text-sm text-gray-400 font-medium">Total Districts</dt>
                  <dd className="text-lg text-white font-semibold">34</dd>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <dt className="text-sm text-gray-400 font-medium">Provincial Assembly</dt>
                  <dd className="text-lg text-white font-semibold flex flex-col mt-1">
                    <span>65 Total Seats</span>
                    <span className="text-sm text-gray-300 font-normal mt-1">51 General</span>
                    <span className="text-sm text-gray-300 font-normal">11 Women</span>
                    <span className="text-sm text-gray-300 font-normal">3 Minority</span>
                  </dd>
                </div>
                <div className="pt-2">
                  <dt className="text-sm text-gray-400 font-medium">National Representation</dt>
                  <dd className="text-base text-gray-200 mt-1">National Assembly: <span className="text-white font-semibold">16 Seats</span></dd>
                  <dd className="text-base text-gray-200">Senate: <span className="text-white font-semibold">23 Seats</span></dd>
                </div>
              </dl>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Quick Information</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gov-green hover:underline">Governor of Balochistan</a></li>
                <li><a href="#" className="text-gov-green hover:underline">Chief Minister of Balochistan</a></li>
                <li><a href="#" className="text-gov-green hover:underline">Balochistan Public Service Commission</a></li>
                <li><a href="#" className="text-gov-green hover:underline">Board of Investment & Trade (BBoIT)</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
