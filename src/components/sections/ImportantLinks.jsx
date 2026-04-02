import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export default function ImportantLinks() {
  const links = [
    { name: "Federal Portal of Pakistan", url: "http://pakistan.gov.pk/" },
    { name: "Balochistan Provincial Assembly", url: "http://pabalochistan.gov.pk/" },
    { name: "Balochistan Public Service Commission", url: "http://bpsc.gob.pk/" },
    { name: "High Court of Balochistan", url: "#" },
    { name: "Chief Minister Secretariat", url: "#" },
    { name: "Governor Secretariat", url: "#" },
    { name: "Finance Department", url: "#" },
    { name: "Planning & Development", url: "#" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Important Links" 
          urduTitle="اہم لنکس"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {links.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gov-green-light/10 border border-gray-100 hover:border-gov-green text-gray-700 hover:text-gov-green rounded-lg transition-all group"
            >
              <span className="font-medium text-sm">{link.name}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gov-green" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
