import React, { useState, useEffect, useMemo } from 'react';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import DepartmentCard from '../components/ui/DepartmentCard';
import { DEPARTMENTS } from '../data/departments';
import { Search } from 'lucide-react';

export default function DepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = 'Departments | Government of Balochistan';
    window.scrollTo(0, 0);
  }, []);

  const filteredDepartments = useMemo(() => {
    return DEPARTMENTS.filter(dept => 
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.urduName.includes(searchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageBanner 
        title="Government Departments" 
        urduTitle="سرکاری محکمہ جات" 
      />
      <Breadcrumb items={["Home", "Departments"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 mb-8">
            The Government of Balochistan operates through {DEPARTMENTS.length} primary departments, ensuring efficient administration and service delivery across the province.
          </p>

          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="search"
              className="block w-full rounded-xl border-0 py-4 pl-12 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gov-green sm:text-lg focus:outline-none"
              placeholder="Search by department name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filteredDepartments.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No departments found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDepartments.map((dept) => (
              <DepartmentCard key={dept.id} dept={dept} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
