import React, { useState, useEffect } from 'react';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import Lightbox from '../components/ui/Lightbox';
import { GALLERY_ITEMS } from '../data/gallery';
import { Eye } from 'lucide-react';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = 'Photo Gallery | Government of Balochistan';
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Leadership', 'Development', 'Events', 'Landscapes'];

  const filteredImages = activeTab === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(img => img.category === activeTab);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const navigateLightbox = (dir) => {
    if (dir === 'next') setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
    if (dir === 'prev') setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageBanner title="Photo Gallery" urduTitle="تصویری گیلری" />
      <Breadcrumb items={["Home", "Gallery"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-colors shadow-sm
                ${activeTab === cat 
                  ? 'bg-gov-green text-white ring-2 ring-gov-green ring-offset-2' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation (Using CSS Columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl bg-gray-200 cursor-pointer break-inside-avoid transform transition-transform hover:-translate-y-1 hover:shadow-xl"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={item.image} 
                alt={item.caption}
                loading="lazy"
                className="w-full object-cover rounded-xl"
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #1B4F2A, #2d7a47)';
                  e.target.parentElement.style.height = '200px';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col justify-end p-4">
                <div className="self-end mb-auto w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Eye className="w-5 h-5" />
                </div>
                <p className="text-white font-medium text-sm md:text-base leading-tight">
                  {item.caption}
                </p>
                <span className="text-gov-gold text-xs mt-1 font-semibold uppercase tracking-wider">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200 mt-8">
            <p className="text-gray-500">No images found for this category.</p>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox 
          image={filteredImages[lightboxIndex]}
          images={filteredImages}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </div>
  );
}
