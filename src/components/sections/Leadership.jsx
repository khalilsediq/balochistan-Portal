import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import LeaderCard from '../ui/LeaderCard';
/* eslint-disable no-unused-vars */
import { LEADERS } from '../../data/leadership';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Leadership() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white relative">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gov-cream/50 rounded-l-[100px] -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={t('home.leadership')}
          urduTitle="صوبائی قیادت"
          subtitle="Governing with a vision for a prosperous and advanced Balochistan."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {LEADERS.map((leader) => (
            <motion.div key={leader.id} className={leader.isPrimary ? "md:-mt-6" : "mt-0"} variants={itemVariants}>
              <LeaderCard leader={leader} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
