/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import DepartmentCard from '../ui/DepartmentCard';
import { DEPARTMENTS } from '../../data/departments';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

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
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayedDepartments.map((dept) => (
            <motion.div key={dept.id} variants={itemVariants}>
              <DepartmentCard dept={dept} />
            </motion.div>
          ))}
        </motion.div>

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
