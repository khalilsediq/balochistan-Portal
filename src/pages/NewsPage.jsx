import React, { useState, useEffect, useMemo } from 'react';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import NewsCard from '../components/ui/NewsCard';
import { NEWS_ARTICLES, NOTICES } from '../data/news';

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.title = 'News & Press Releases | Government of Balochistan';
    window.scrollTo(0, 0);
  }, []);

  const filters = ['All', 'Press Release', 'Development', 'Health', 'Education', 'Security', 'Governance'];

  const filteredNews = useMemo(() => {
    if (activeFilter === 'All') return NEWS_ARTICLES;
    return NEWS_ARTICLES.filter(article => article.tag === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageBanner title="News & Press Releases" urduTitle="خبریں اور پریس ریلیز" />
      <Breadcrumb items={["Home", "News"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-200 pb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-gov-green text-white shadow-md'
                  ? 'bg-white border text-white shadow-md' // actually we need proper toggle
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gov-green hover:text-gov-green'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gov-green hover:text-gov-green'
              } ${activeFilter === filter ? 'bg-gov-green text-white shadow-md' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredNews.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
          {filteredNews.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-500">
              No articles found for "{activeFilter}".
            </div>
          )}
        </div>

        {/* Notices Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gov-green-dark px-6 py-4 border-b border-gov-green">
            <h2 className="text-xl font-bold text-white">Latest Notices & Notifications</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Department</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {NOTICES.map((notice) => (
                  <tr key={notice.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize
                        ${notice.type === 'job' ? 'bg-blue-100 text-blue-800' : 
                          notice.type === 'tender' ? 'bg-purple-100 text-purple-800' : 
                          notice.type === 'notification' ? 'bg-green-100 text-green-800' : 
                          'bg-yellow-100 text-yellow-800'}`}
                      >
                        {notice.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {notice.date}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {notice.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                      {notice.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-gov-green hover:text-gov-green-light underline">Download PDF</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
