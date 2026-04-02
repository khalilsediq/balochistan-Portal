import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { FaFacebook as Facebook, FaTwitter as Twitter, FaYoutube as Youtube, FaInstagram as Instagram } from 'react-icons/fa';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="w-full mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* PART 1 — Main footer content */}
      <div className="bg-gov-green-dark text-white py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1 Brand */}
          <div className="col-span-1 border-b md:border-b-0 border-white/10 pb-8 md:pb-0">
            <div className="flex items-center mb-4">
              <div className="bg-white/10 p-2 rounded-full mr-3">
                <img src="/logo.png" alt="Balochistan Logo" className="h-16 w-16 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white">Govt of<br/>Balochistan</h3>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Official portal for government services, news, and information for the citizens of Balochistan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gov-gold transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-gov-gold transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-gov-gold transition-colors" aria-label="Youtube"><Youtube className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-gov-gold transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Col 2 Sitemap */}
          <div className="col-span-1">
            <h3 className={`text-lg font-semibold text-gov-gold mb-6 uppercase tracking-wider ${language === 'ur' ? 'font-urdu' : ''}`}>
              {t('footer.sitemap')}
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/departments" className="text-gray-300 hover:text-white transition-colors">{t('nav.departments')}</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">{t('nav.news')}</Link></li>
              <li><Link to="/tenders" className="text-gray-300 hover:text-white transition-colors">{t('nav.tenders')}</Link></li>
              <li><Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">{t('nav.jobs')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Col 3 Contact */}
          <div className="col-span-1">
            <h3 className={`text-lg font-semibold text-gov-gold mb-6 uppercase tracking-wider ${language === 'ur' ? 'font-urdu' : ''}`}>
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1 shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">Civil Secretariat, Zarghoon Road,<br/>Quetta, Balochistan, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                <span className="text-gray-300 text-sm" dir="ltr">+92-81-9201601</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                <span className="text-gray-300 text-sm text-wrap break-all">info@balochistan.gov.pk</span>
              </li>
            </ul>
          </div>

          {/* Col 4 Quick Actions map */}
          <div className="col-span-1 hidden lg:block border-l border-white/10 pl-8">
            <h3 className="text-lg font-semibold text-gov-gold mb-6 uppercase tracking-wider">Help & Support</h3>
            <p className="text-gray-300 text-sm mb-4">Are you facing any issues or need to register a grievance?</p>
            <Link to="/contact" className="inline-flex w-full justify-center items-center px-4 py-2 bg-gov-gold hover:bg-gov-gold-light text-black font-semibold rounded-md transition-colors">
              Submit Complaint
            </Link>
          </div>
        </div>
      </div>

      {/* PART 2 — Important links row */}
      <div className="bg-gov-green text-white py-4 px-4 sm:px-6 lg:px-16 overflow-x-auto border-t border-t-white/10">
        <div className="max-w-7xl mx-auto flex sm:flex-wrap flex-nowrap shrink-0 whitespace-nowrap items-center text-sm font-medium">
          {[
            { n: 'Pakistan Govt', l: 'http://pakistan.gov.pk/' },
            { n: 'Balochistan Assembly', l: 'http://pabalochistan.gov.pk/' },
            { n: 'BPSC', l: 'http://bpsc.gob.pk/' },
            { n: 'Finance Dept', l: '#' },
            { n: 'CM Office', l: '#' },
            { n: 'Governor Office', l: '#' },
          ].map((item, idx) => (
            <React.Fragment key={idx}>
              <a href={item.l} className="group flex items-center hover:text-gov-gold px-3 transition-colors shrink-0">
                {item.n} <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
              {idx < 5 && <span className="text-white/20">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* PART 3 — Copyright block */}
      <div className="bg-gray-950 text-white/50 text-xs py-4 px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-3 md:space-y-0">
        <div>
          <span>{t('footer.copyright')}</span> <Link to="#" className="hover:text-white transition-colors">{t('footer.disclaimer')}</Link> | <Link to="#" className="hover:text-white transition-colors">{t('footer.accessibility')}</Link>
        </div>
        <div className="font-medium text-white/40">
          {t('footer.designed')}
        </div>
        <div className="bg-white/5 rounded px-3 py-1 flex items-center shadow-inner">
          <span className="mr-2 uppercase tracking-wide">{t('footer.visitors')}</span>
          <span className="font-mono text-gov-gold tracking-widest text-sm">1,248,932</span>
        </div>
      </div>
    </footer>
  );
}
