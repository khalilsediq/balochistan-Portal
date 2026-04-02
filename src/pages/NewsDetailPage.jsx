import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import NewsCard from '../components/ui/NewsCard';
import { NEWS_ARTICLES } from '../data/news';
import { Calendar, Tag, Share2, Printer } from 'lucide-react';
import { FaTwitter as Twitter, FaFacebook as Facebook } from 'react-icons/fa';

export default function NewsDetailPage() {
  const { id } = useParams();
  const article = NEWS_ARTICLES.find(a => a.id === id);

  useEffect(() => {
    if (article) {
      document.title = `${article.headline} | Government of Balochistan`;
      window.scrollTo(0, 0);
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const relatedNews = NEWS_ARTICLES.filter(a => a.id !== article.id).slice(0, 3);
  const fallbackBg = 'linear-gradient(135deg, #1B4F2A, #2d7a47)';

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* We won't use PageBanner here because we want the headline integrated */}
      <div className="bg-gov-green py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-gov-gold">
        <div className="max-w-7xl mx-auto pt-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-gov-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {article.tag}
            </span>
            <div className="flex items-center text-white/80 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {article.date}
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md">
            {article.headline}
          </h1>
        </div>
      </div>

      <Breadcrumb items={["Home", "News", article.headline]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column - Article Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              
              {/* Featured Image */}
              <div 
                className="w-full h-[400px] relative bg-cover bg-center"
                style={{ background: article.image ? '#eee' : fallbackBg }}
              >
                {article.image && (
                  <img 
                    src={article.image} 
                    alt={article.headline}
                    className="w-full h-full object-cover"
                    onError={(e) => { 
                      e.target.style.display = 'none'; 
                      e.target.parentElement.style.background = fallbackBg;
                    }}
                  />
                )}
              </div>

              {/* Action Bar */}
              <div className="flex justify-between items-center px-8 py-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center text-sm font-medium text-gray-500">
                  <Tag className="w-4 h-4 mr-2 text-gov-gold" />
                  Press Information Department
                </div>
                <div className="flex space-x-3">
                  <button className="p-2 text-gray-400 hover:text-gov-green hover:bg-white rounded-full transition-colors tooltip-trigger" title="Print Article">
                    <Printer className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-white rounded-full transition-colors" title="Share on Facebook">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-400 hover:bg-white rounded-full transition-colors" title="Share on Twitter">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 md:p-12 prose prose-lg text-gray-700 max-w-none">
                <p className="lead text-xl text-gray-900 font-medium mb-8">
                  {article.excerpt}
                </p>
                {article.body.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Related News */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gov-cream px-6 py-4 border-b border-gov-gold/30">
                <h3 className="text-lg font-bold text-gray-900">Related News</h3>
              </div>
              <div className="p-6 space-y-6">
                {relatedNews.map((news) => (
                  <div key={news.id} className="group">
                    <div className="text-xs text-gray-500 mb-1 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {news.date}
                    </div>
                    <Link to={`/news/${news.id}`} className="font-semibold text-gray-900 group-hover:text-gov-green transition-colors line-clamp-2 leading-tight">
                      {news.headline}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gov-cream px-6 py-4 border-b border-gov-gold/30">
                <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                <li><Link to="/departments" className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-gov-green transition-colors">Provincial Departments</Link></li>
                <li><Link to="/e-services" className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-gov-green transition-colors">Citizen E-Services</Link></li>
                <li><Link to="/tenders" className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-gov-green transition-colors">Tenders & Procurements</Link></li>
                <li><Link to="/jobs" className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-gov-green transition-colors">Government Jobs</Link></li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
