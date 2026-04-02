import React, { useEffect } from 'react';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import LeaderCard from '../components/ui/LeaderCard';
import SectionHeader from '../components/ui/SectionHeader';
import { LEADERS } from '../data/leadership';
import { User } from 'lucide-react';

export default function LeadershipPage() {
  useEffect(() => {
    document.title = 'Leadership | Government of Balochistan';
    window.scrollTo(0, 0);
  }, []);

  // Use a placeholder cabinet array for the grid
  const cabinet = [
    { role: "Minister for Home & Tribal Affairs", name: "Mir Zia Ullah Langau" },
    { role: "Minister for Finance", name: "Shoaib Nosherwani" },
    { role: "Minister for Education", name: "Raheela Hameed Khan Durrani" },
    { role: "Minister for Health", name: "Sardarzada Faisal Jamali" },
    { role: "Minister for Agriculture", name: "Mir Asadullah Baloch" },
    { role: "Minister for Law & Parliamentary Affairs", name: "Sardar Abdul Rehman Khetran" },
    { role: "Minister for Planning & Development", name: "Mir Zahoor Buledi" },
    { role: "Minister for Information", name: "Jan Achakzai" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageBanner title="Provincial Leadership" urduTitle="صوبائی قیادت" />
      <Breadcrumb items={["Home", "Leadership"]} />

      {/* Top Leadership */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {LEADERS.map((leader) => (
            <div key={leader.id} className={leader.isPrimary ? "md:-mt-4" : ""}>
              <LeaderCard leader={leader} />
            </div>
          ))}
        </div>
      </div>

      {/* Cabinet Ministers section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <SectionHeader title="Cabinet Ministers" centered={true} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cabinet.map((minister, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-full bg-gov-green/10 flex items-center justify-center mb-4 border-2 border-gov-gold/30">
                <User className="w-10 h-10 text-gov-green" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{minister.name}</h3>
              <p className="text-sm text-gov-green font-medium">{minister.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
