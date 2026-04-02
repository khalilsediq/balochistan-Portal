import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { LEADERS } from '../data/leadership';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, Mail, Phone, MapPin, Download } from 'lucide-react';
import Breadcrumb from '../components/ui/Breadcrumb';

export default function LeaderProfilePage() {
  const { id } = useParams();
  const { language } = useLanguage();

  const leader = LEADERS.find((l) => l.id === id);

  useEffect(() => {
    if (leader) {
      document.title = `${leader.name} - ${leader.title} | Govt of Balochistan`;
      window.scrollTo(0, 0);
    }
  }, [leader]);

  if (!leader) {
    return <Navigate to="/404" replace />;
  }

  const bgGradient = 'linear-gradient(to right, #122f1a, #1B4F2A)';

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Dynamic Header */}
      <div className="relative pt-24 pb-32 overflow-hidden bg-gov-green-dark">
        {leader.photo && (
          <>
            <img 
              src={leader.photo} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover object-top opacity-20 filter blur-sm scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gov-green-dark via-gov-green-dark/80 to-transparent"></div>
          </>
        )}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <Link to="/leadership" className="inline-flex items-center text-gov-gold hover:text-white transition-colors mb-6 text-sm font-medium">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Leadership
          </Link>
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 ${language === 'ur' ? 'font-urdu' : ''}`}>
             {language === 'en' ? leader.name : leader.urduName}
          </h1>
          <p className={`text-xl md:text-2xl text-gov-gold font-medium mb-10 ${language === 'ur' ? 'font-urdu' : ''}`}>
             {language === 'en' ? leader.title : leader.urduTitle}
          </p>

          {leader.quote && (
            <blockquote className="max-w-4xl mx-auto mt-8 relative">
              <span className="text-6xl text-white/20 absolute -top-4 -left-6">"</span>
              <p className="text-xl md:text-2xl italic text-gray-200 font-light leading-relaxed">
                {leader.quote}
              </p>
              <span className="text-6xl text-white/20 absolute -bottom-10 -right-4">"</span>
            </blockquote>
          )}
        </div>
      </div>

      <Breadcrumb items={["Home", "Leadership", leader.name]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column - Profile Card */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden -mt-32 relative z-20">
              <div className="aspect-[4/5] relative bg-gov-cream border-b-4 border-gov-gold">
                {leader.photo ? (
                  <img 
                    src={leader.photo} 
                    alt={leader.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className={`${leader.photo ? 'hidden' : 'flex'} absolute inset-0 bg-gradient-to-br from-gov-green to-gov-green-light items-center justify-center text-white text-5xl font-bold`}>
                  {leader.initials}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Official Contact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-gov-green mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Office Address</p>
                      <p className="text-sm text-gray-600 mt-1">Civil Secretariat, Zarghoon Road, Quetta.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 text-gov-green mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Telephone</p>
                      <p className="text-sm text-gray-600 mt-1" dir="ltr">+92-81-9200000</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 text-gov-green mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Email</p>
                      <p className="text-sm text-gray-600 mt-1 break-all">office@{leader.id}.gob.pk</p>
                    </div>
                  </li>
                </ul>
                
                <button className="w-full mt-8 flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gov-green transition-colors">
                  <Download className="w-4 h-4 mr-2 text-gray-400" />
                  Download High-Res Photo
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Biogrpahy */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gov-green-dark flex items-center mb-6">
                <span className="w-1.5 h-6 bg-gov-gold mr-3 rounded-full"></span>
                Official Biography
              </h2>
              
              <div className="prose prose-lg text-gray-600 max-w-none mb-10">
                {leader.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {leader.responsibilities && (
                <>
                  <h2 className="text-2xl font-bold text-gov-green-dark flex items-center mb-6 border-t pt-8">
                    <span className="w-1.5 h-6 bg-gov-gold mr-3 rounded-full"></span>
                    Key Responsibilities
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {leader.responsibilities.map((req, index) => (
                      <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="w-6 h-6 rounded bg-gov-green/10 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <div className="w-2 h-2 bg-gov-green rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {leader.keyInitiatives && (
                <>
                  <h2 className="text-2xl font-bold text-gov-green-dark flex items-center mb-6 border-t pt-8">
                    <span className="w-1.5 h-6 bg-gov-gold mr-3 rounded-full"></span>
                    Key Initiatives & Vision
                  </h2>
                  <ul className="grid grid-cols-1 gap-4">
                    {leader.keyInitiatives.map((init, index) => (
                      <li key={index} className="flex items-center bg-gov-cream p-4 rounded border-l-4 border-gov-gold">
                        <span className="text-gray-800 font-medium">{init}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
