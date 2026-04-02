import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import NewsCard from '../ui/NewsCard';
import { NEWS_ARTICLES } from '../../data/news';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function NewsAndNotices() {
  const { t, language } = useLanguage();
  const latestNews = NEWS_ARTICLES.slice(0, 3);

  return (
    <section className="py-20 bg-gov-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader 
            title={t('home.news')} 
            urduTitle="تازہ ترین خبریں اور اپڈیٹس"
            centered={false} 
          />
          <Link 
            to="/news"
            className="inline-flex items-center text-gov-green font-semibold hover:text-gov-green-light mb-10 md:mb-5 group transition-colors"
          >
            {t('common.viewAll')} 
            <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
