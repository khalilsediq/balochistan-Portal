import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import Lightbox from '../ui/Lightbox';
import { GALLERY_ITEMS } from '../../data/gallery';
import { useLanguage } from '../../context/LanguageContext';
import { Eye } from 'lucide-react';

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  // Show only 6 items
  const gallerySlice = GALLERY_ITEMS.slice(0, 6);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const navigateLightbox = (dir) => {
    if (dir === 'next') setLightboxIndex((prev) => (prev + 1) % gallerySlice.length);
    if (dir === 'prev') setLightboxIndex((prev) => (prev - 1 + gallerySlice.length) % gallerySlice.length);
  };

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="In Pictures" 
          urduTitle="تصاویر میں"
          subtitle="Glimpses of development, heritage, and the natural beauty of Balochistan."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-12">
          {gallerySlice.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative aspect-video overflow-hidden rounded cursor-pointer bg-gray-200"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={item.image} 
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #1B4F2A, #2d7a47)';
                }}
              />
              <div className="absolute inset-0 bg-gov-green-dark/0 group-hover:bg-gov-green-dark/60 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center flex-grow text-center px-4">
                  <div className="w-10 h-10 bg-gov-gold text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base leading-tight">
                    {item.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/gallery" className="text-gov-green font-semibold hover:text-gov-green-light underline underline-offset-4">
            View Full Gallery
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox 
          image={gallerySlice[lightboxIndex]}
          images={gallerySlice}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </section>
  );
}
