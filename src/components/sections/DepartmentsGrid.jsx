import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import DepartmentCard from '../ui/DepartmentCard';
import { DEPARTMENTS } from '../../data/departments';
import { useLanguage } from '../../context/LanguageContext';

export default function DepartmentsGrid() {
  const { t } = useLanguage();
  
  // Show 8 departments for homepage
  const displayedDepartments = DEPARTMENTS.slice(0, 8);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={t('home.departments')} 
          urduTitle="سرکاری محکمہ جات"
          subtitle="Explore the administrative branches working to serve the people of Balochistan."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {displayedDepartments.map((dept) => (
            <DepartmentCard key={dept.id} dept={dept} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/departments"
            className="inline-flex items-center px-6 py-3 border-2 border-gov-green text-base font-medium rounded-md text-gov-green hover:bg-gov-green hover:text-white transition-colors"
          >
            Explore All 26 Departments
          </Link>
        </div>
      </div>
    </section>
  );
}
