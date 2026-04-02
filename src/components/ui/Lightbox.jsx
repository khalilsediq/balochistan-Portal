import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ image, images, onClose, onNavigate }) {
  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && images) onNavigate('prev');
      if (e.key === 'ArrowRight' && images) onNavigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate, images]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-none"
        aria-label="Close lightbox"
      >
        <X className="w-10 h-10" />
      </button>

      {/* Navigation - Prev */}
      {images && (
        <button 
          onClick={() => onNavigate('prev')}
          className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
      )}

      {/* Main Image */}
      <div className="relative max-w-5xl max-h-[85vh]">
        <img 
          src={image.image} 
          alt={image.caption}
          className="max-w-full max-h-[80vh] object-contain shadow-2xl animate-fade-in"
          onError={(e) => { e.target.src = ''; e.target.className = 'hidden'; }}
        />
        {image.caption && (
          <div className="absolute -bottom-12 left-0 right-0 text-center text-white/90 text-sm md:text-base p-2">
            {image.caption}
          </div>
        )}
      </div>

      {/* Navigation - Next */}
      {images && (
        <button 
          onClick={() => onNavigate('next')}
          className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      )}
    </div>
  );
}
