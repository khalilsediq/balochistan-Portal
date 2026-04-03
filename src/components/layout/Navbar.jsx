/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const { scrollY } = useScrollPosition();
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const isScrolled = scrollY > 40;

  const getNavLinkClass = ({ isActive }) =>
    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
      isActive
        ? 'border-gov-gold text-gov-green font-semibold'
        : 'border-transparent text-gray-700 hover:text-gov-green hover:border-gray-300'
    } ${language === 'ur' ? 'font-urdu lg:text-lg' : ''}`;

  return (
    <>
      <nav
        className={`sticky top-0 z-40 bg-white border-b border-gray-200 transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex flex-shrink min-w-0 items-center">
              <Link to="/" className="flex items-center group focus:ring-2 focus:ring-gov-gold rounded min-w-0">
                <div className="relative h-10 w-10 sm:h-14 sm:w-14 mr-2 sm:mr-3 flex items-center justify-center bg-gov-gold rounded-full shrink-0 overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Government of Balochistan"
                    className="h-full w-full object-contain z-10 p-0.5 sm:p-0"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 items-center justify-center text-white font-bold text-xl tracking-wider">
                    BL
                  </div>
                </div>
                <div className="flex flex-col justify-center min-w-0 max-w-[160px] sm:max-w-none">
                  <span className="text-gov-green-dark font-bold text-[13px] xs:text-sm sm:text-xl leading-tight uppercase tracking-tight sm:tracking-wide group-hover:text-gov-green transition-colors truncate sm:whitespace-normal">
                    Government of Balochistan
                  </span>
                  <span className={`text-gov-gold font-medium text-[10px] mt-0.5 sm:text-sm truncate sm:whitespace-normal ${language==='ur'?'font-urdu':''}`}>
                    حکومت بلوچستان
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              <NavLink to="/" className={getNavLinkClass}>{t('nav.home')}</NavLink>
              <NavLink to="/about" className={getNavLinkClass}>{t('nav.about')}</NavLink>
              <div 
                className="relative flex"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <NavLink to="/departments" className={`${getNavLinkClass({isActive: false})} cursor-pointer`}>
                  {t('nav.departments')} <ChevronDown className="ml-1 w-4 h-4" />
                </NavLink>
                {megaMenuOpen && <MegaMenu closeMenu={() => setMegaMenuOpen(false)} />}
              </div>
              <NavLink to="/leadership" className={getNavLinkClass}>{t('nav.leadership')}</NavLink>
              <NavLink to="/e-services" className={getNavLinkClass}>{t('nav.services')}</NavLink>
              <NavLink to="/news" className={getNavLinkClass}>{t('nav.news')}</NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center flex-shrink-0 lg:hidden ml-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gov-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gov-gold"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <motion.div
                  initial={false}
                  animate={mobileMenuOpen ? "open" : "closed"}
                  className="relative flex flex-col justify-center items-center w-6 h-6"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-0.5 bg-current block absolute top-1"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-0.5 bg-current block absolute top-3"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-0.5 bg-current block absolute top-5"
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
