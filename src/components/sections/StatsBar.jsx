/* eslint-disable no-unused-vars */
import React from 'react';
import StatCounter from '../ui/StatCounter';
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

export default function StatsBar() {
  const { t } = useLanguage();

  return (
    <section className="bg-gov-green-dark border-y-4 border-gov-gold text-white relative z-20 -mt-10 sm:-mt-16 mx-4 sm:mx-8 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto bg-gov-green/60">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div variants={itemVariants} className="w-full">
            <StatCounter 
              target={15} 
              title={t('home.stats.population')} 
              suffix="M+" 
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full">
            <StatCounter 
              target={347190} 
              title={t('home.stats.area')} 
              suffix=" km²" 
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full">
            <StatCounter 
              target={34} 
              title={t('home.stats.districts')} 
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full">
            <StatCounter 
              target={955} 
              title={t('home.stats.budget')} 
              prefix="Rs "
              suffix="B" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
