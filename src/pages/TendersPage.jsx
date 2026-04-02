import React, { useState, useEffect } from 'react';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import { Filter, Eye, Download } from 'lucide-react';

export default function TendersPage() {
  const [statusFilter, setStatusFilter] = useState('All');
  
  useEffect(() => {
    document.title = 'Tenders & Procurement | Govt of Balochistan';
    window.scrollTo(0, 0);
  }, []);

  const rawTenders = [
    { nit: "NIT-2026-01", title: "Construction of Loralai-Duki Road (Phase II)", department: "Works & Services", issue: "March 15, 2026", deadline: "April 30, 2026", status: "Open" },
    { nit: "NIT-2026-02", title: "Supply of Medicines to DHQ Hospitals", department: "Health Department", issue: "March 20, 2026", deadline: "April 15, 2026", status: "Open" },
    { nit: "NIT-2026-03", title: "Procurement of IT Equipment", department: "IT Department", issue: "March 10, 2026", deadline: "March 30, 2026", status: "Closed" },
    { nit: "NIT-2026-04", title: "Solarization of 100 Primary Schools", department: "Energy Department", issue: "February 25, 2026", deadline: "March 15, 2026", status: "Awarded" },
    { nit: "NIT-2026-05", title: "Maintenance of Quetta Secretariat Building", department: "S&GAD", issue: "April 01, 2026", deadline: "April 20, 2026", status: "Open" },
    { nit: "NIT-2026-06", title: "Supply of Drought-Resistant Seeds", department: "Agriculture", issue: "March 05, 2026", deadline: "March 25, 2026", status: "Awarded" },
    { nit: "NIT-2026-07", title: "Establishment of Smart Classrooms", department: "Education", issue: "January 10, 2026", deadline: "February 10, 2026", status: "Awarded" },
    { nit: "NIT-2026-08", title: "Procurement of Uniforms for Police", department: "Police", issue: "April 02, 2026", deadline: "May 05, 2026", status: "Open" },
    { nit: "NIT-2026-09", title: "Vehicles for Field Officers", department: "Revenue", issue: "March 01, 2026", deadline: "March 20, 2026", status: "Closed" },
    { nit: "NIT-2026-10", title: "Consultancy Services for Master Plan", department: "Housing & Town Planning", issue: "March 25, 2026", deadline: "May 15, 2026", status: "Open" },
  ];

  const tenders = statusFilter === 'All' 
    ? rawTenders 
    : rawTenders.filter(t => t.status === statusFilter);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Open': return 'bg-green-100 text-green-800 border-green-200';
      case 'Closed': return 'bg-red-100 text-red-800 border-red-200';
      case 'Awarded': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageBanner title="Procurement & Tenders" urduTitle="ٹینڈرز اور پروکیورمنٹ" />
      <Breadcrumb items={["Home", "Tenders"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-gray-700 font-medium w-full sm:w-auto">
            <Filter className="w-5 h-5 mr-2 text-gov-green" /> Filters:
          </div>
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <select className="border border-gray-300 rounded-md text-sm py-2 px-3 focus:outline-none focus:border-gov-green focus:ring-1 focus:ring-gov-green bg-white shadow-sm">
              <option>All Departments</option>
              <option>Works & Services</option>
              <option>Health Department</option>
              <option>Education</option>
            </select>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-md text-sm py-2 px-3 focus:outline-none focus:border-gov-green focus:ring-1 focus:ring-gov-green bg-white shadow-sm"
            >
              <option value="All">All Statuses</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="Awarded">Awarded</option>
            </select>
            <input 
              type="date"
              className="border border-gray-300 rounded-md text-sm py-2 px-3 focus:outline-none focus:border-gov-green focus:ring-1 focus:ring-gov-green bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">NIT #</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title & Department</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Dates</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tenders.map((tender, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {tender.nit}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <p className="font-semibold text-gray-900 mb-1">{tender.title}</p>
                      <p className="text-gov-green">{tender.department}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <p><span className="font-medium text-gray-700">Issue:</span> {tender.issue}</p>
                      <p className="mt-1"><span className="font-medium text-gray-700">Deadline:</span> {tender.deadline}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${getStatusBadge(tender.status)}`}>
                        {tender.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-3">
                        <button className="text-gray-400 hover:text-gov-green transition-colors" title="View Details">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-blue-600 transition-colors" title="Download Document">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {tenders.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No tenders found matching the selected filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
