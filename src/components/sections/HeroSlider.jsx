import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroSlider() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/landscape/princess_of_hope.jpg',
      title: 'Welcome to Balochistan',
      subtitle: 'Land of Beauty, Resources and Peace',
      urduTitle: 'بلوچستان میں خوش آمدید',
      urduSubtitle: 'خوبصورتی، وسائل اور امن کی سرزمین',
      link: '/about'
    },
    {
      image: '/images/landscape/kund_malir.jpg',
      title: 'Digital Governance',
      subtitle: 'Bringing services to your doorstep',
      urduTitle: 'ڈیجیٹل گورننس',
      urduSubtitle: 'خدمات آپ کی دہلیز تک',
      link: '/e-services'
    },
    {
      image: '/images/landscape/desert_dunes.jpg',
      title: 'Economic Prosperity',
      subtitle: 'Investing in the future of Pakistan',
      urduTitle: 'معاشی خوشحالی',
      urduSubtitle: 'پاکستان کے مستقبل میں سرمایہ کاری',
      link: '/departments/planning'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden bg-gov-green">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Fallback */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'linear-gradient(135deg, #1B4F2A, #2d7a47)' 
            }}
          >
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto drop-shadow-2xl animate-fade-in-up">
              <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight ${language === 'ur' ? 'font-urdu' : ''}`}>
                {language === 'en' ? slide.title : slide.urduTitle}
              </h1>
              <p className={`text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 font-medium ${language === 'ur' ? 'font-urdu' : ''}`}>
                {language === 'en' ? slide.subtitle : slide.urduSubtitle}
              </p>
              <Link 
                to={slide.link}
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-gov-gold bg-gov-gold/90 text-[#1a1a1a] text-sm sm:text-lg font-bold rounded hover:bg-gov-gold hover:scale-105 transition-all shadow-lg"
              >
                {language === 'en' ? 'Explore More' : 'مزید دریافت کریں'}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/20 hover:bg-black/50 text-white transition-colors focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/20 hover:bg-black/50 text-white transition-colors focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${
              index === currentSlide ? 'bg-gov-gold scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
