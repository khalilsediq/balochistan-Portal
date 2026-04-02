import React, { useState, useEffect } from 'react';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import { Search, Briefcase, Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    document.title = 'Jobs & Vacancies | Government of Balochistan';
    window.scrollTo(0, 0);
  }, []);

  const vacancies = [
    { id: 1, title: 'Assistant Commissioner', bps: 'BPS-17', dept: 'S&GAD', date: 'May 10, 2026', seats: 15 },
    { id: 2, title: 'Medical Officer', bps: 'BPS-17', dept: 'Health Department', date: 'April 30, 2026', seats: 50 },
    { id: 3, title: 'Lecturer (Various Subjects)', bps: 'BPS-17', dept: 'Higher Education', date: 'April 25, 2026', seats: 120 },
    { id: 4, title: 'Sub-Inspector Police', bps: 'BPS-14', dept: 'Police Department', date: 'May 05, 2026', seats: 80 },
    { id: 5, title: 'Data Entry Operator', bps: 'BPS-14', dept: 'IT Department', date: 'April 20, 2026', seats: 25 },
    { id: 6, title: 'Agriculture Extension Worker', bps: 'BPS-11', dept: 'Agriculture', date: 'May 15, 2026', seats: 40 },
    { id: 7, title: 'Primary School Teacher', bps: 'BPS-11', dept: 'Education', date: 'June 01, 2026', seats: 300 },
    { id: 8, title: 'Junior Clerk', bps: 'BPS-11', dept: 'Various Departments', date: 'April 28, 2026', seats: 150 },
  ];

  const filteredJobs = vacancies.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.dept.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageBanner title="Government Jobs & Vacancies" urduTitle="سرکاری نوکریاں اور آسامیاں" />
      <Breadcrumb items={["Home", "Jobs"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex items-start">
          <Briefcase className="w-6 h-6 text-blue-600 mt-0.5 mr-3 shrink-0" />
          <div>
            <h3 className="text-blue-800 font-bold mb-1">Important Notice regarding recruitment</h3>
            <p className="text-blue-700 text-sm">
              For BPS-16 and above positions advertised by the Balochistan Public Service Commission, please visit the official <a href="http://bpsc.gob.pk" target="_blank" rel="noreferrer" className="underline font-semibold hover:text-blue-900">BPSC Portal</a> to apply online.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-gov-green focus:border-gov-green focus:outline-none"
                placeholder="Search by job title or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-gov-green focus:border-gov-green focus:outline-none bg-white md:w-64">
              <option>All Departments</option>
              <option>Health Department</option>
              <option>Education Department</option>
              <option>Police Department</option>
            </select>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-gov-green hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gov-green transition-colors">{job.title}</h3>
                  <span className="inline-flex items-center text-sm font-semibold px-2.5 py-0.5 rounded text-gov-green-dark bg-gov-green/10">
                    {job.bps}
                  </span>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded px-3 py-2 text-center shrink-0">
                  <span className="block text-xl font-black text-gray-900">{job.seats}</span>
                  <span className="block text-xs text-gray-500 font-medium uppercase tracking-wider">Posts</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600 text-sm">
                  <Building2 className="w-4 h-4 mr-2" />
                  {job.dept}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Balochistan (Provincial)
                </div>
                <div className="flex items-center text-red-600 font-medium text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Last Date: {job.date}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500 font-medium">Status: Actively accepting applications</span>
                <button className="flex items-center text-sm font-bold text-gov-green hover:text-gov-green-light">
                  Apply / Details <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No vacancies found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
