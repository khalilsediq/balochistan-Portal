import React, { useEffect } from 'react';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import ServiceCard from '../components/ui/ServiceCard';
import SectionHeader from '../components/ui/SectionHeader';
import { SERVICES } from '../data/services';
import { Laptop } from 'lucide-react';

export default function EServicesPage() {
  useEffect(() => {
    document.title = 'E-Services | Government of Balochistan';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageBanner title="E-Services & Citizen Portal" urduTitle="ای سروسز اور سٹیزن پورٹل" />
      <Breadcrumb items={["Home", "E-Services"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-16 text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-gov-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Laptop className="w-10 h-10 text-gov-green" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Digital Governance Initiative</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Government of Balochistan is committed to digital transformation. This portal provides centralized, hassle-free access to essential government services and documentation, saving citizens valuable time and ensuring transparency across all departments.
          </p>
        </div>

        {SERVICES.map((category, idx) => (
          <div key={idx} className="mb-20">
            <SectionHeader title={category.category} centered={false} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {category.items.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
