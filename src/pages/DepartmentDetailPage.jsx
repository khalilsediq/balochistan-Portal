import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import { DEPARTMENTS } from '../data/departments';
import { NEWS_ARTICLES } from '../data/news';
import { CheckCircle2, User, MapPin, Phone, Mail, ExternalLink, Globe } from 'lucide-react';
import NewsCard from '../components/ui/NewsCard';

export default function DepartmentDetailPage() {
  const { slug } = useParams();
  
  const department = DEPARTMENTS.find(d => d.slug === slug);

  useEffect(() => {
    if (department) {
      document.title = `${department.name} | Government of Balochistan`;
      window.scrollTo(0, 0);
    }
  }, [department]);

  if (!department) {
    return <Navigate to="/404" replace />;
  }

  // Find related news to this department. Fallback to generic news if none found.
  const relatedNews = NEWS_ARTICLES.slice(0, 3); // placeholder logic

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageBanner 
        title={department.name} 
        urduTitle={department.urduName} 
      />
      <Breadcrumb items={["Home", "Departments", department.name]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Main Content) - 2/3 width */}
          <div className="lg:col-span-2 space-y-10">
            
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gov-green/10 text-gov-green flex items-center justify-center text-3xl rounded-xl mr-5 shrink-0 border border-gov-green/20">
                  {department.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-transparent">Department Overview</h2>
                  <div className="h-1 bg-gov-gold w-16 mt-2 rounded"></div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {department.overview}
              </p>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-gov-green w-2 h-6 md:h-8 mr-3 rounded-full block"></span>
                Key Functions & Mandate
              </h2>
              <ul className="space-y-4">
                {department.keyFunctions.map((func, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-gov-gold mr-3 shrink-0 flex-none" />
                    <span className="text-gray-700 text-lg pt-0.5">{func}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-gov-green w-2 h-6 md:h-8 mr-3 rounded-full block"></span>
                Minister & Secretary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex bg-gray-50 rounded-lg p-5 border border-gray-100">
                  <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center border shadow-sm mr-4 shrink-0">
                    <User className="w-6 h-6 text-gov-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Minister</h4>
                    <p className="text-lg font-bold text-gray-900">{department.minister}</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 rounded-lg p-5 border border-gray-100">
                  <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center border shadow-sm mr-4 shrink-0">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Secretary</h4>
                    <p className="text-lg font-bold text-gray-900">{department.secretary}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-gov-green w-2 h-6 md:h-8 mr-3 rounded-full block"></span>
                Recent Announcements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedNews.slice(0, 2).map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </section>

          </div>

          {/* Right Column (Sidebar) - 1/3 width */}
          <div className="lg:col-span-1 space-y-6">

            <a 
              href={department.website}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center p-4 bg-gov-green hover:bg-gov-green-light text-white rounded-xl shadow-md transition-colors group text-lg font-semibold"
            >
              <Globe className="w-5 h-5 mr-2" />
              Visit Official Website
              <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0" />
                  <div>
                    <span className="block font-medium text-gray-900">Secretariat Address</span>
                    <span className="text-gray-600 block mt-1">{department.contact?.address || "Civil Secretariat, Quetta"}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0" />
                  <div>
                    <span className="block font-medium text-gray-900">Phone</span>
                    <span className="text-gray-600 block mt-1" dir="ltr">{department.contact?.phone || "+92-81-9200000"}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0" />
                  <div>
                    <span className="block font-medium text-gray-900">Email</span>
                    <span className="text-gov-green hover:underline block mt-1 break-all">{department.contact?.email || `info@${department.slug}.gob.pk`}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gov-cream rounded-xl border border-gov-gold/20 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Departments</h3>
              <ul className="space-y-2">
                {DEPARTMENTS.filter(d => d.id !== department.id).slice(0, 5).map(related => (
                  <li key={related.id}>
                    <Link to={`/departments/${related.slug}`} className="flex items-center p-2 rounded-md hover:bg-white text-gray-700 hover:text-gov-green transition-colors border-l-2 border-transparent hover:border-gov-gold">
                      <span className="w-6 h-6 rounded flex items-center justify-center bg-white shadow-sm mr-2 text-sm">{related.icon}</span>
                      <span className="text-sm font-medium line-clamp-1">{related.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
