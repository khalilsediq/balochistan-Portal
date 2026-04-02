import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft, Building2, Laptop, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = 'Page Not Found | Government of Balochistan';
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        
        <div className="inline-block relative">
          <h1 className="text-9xl font-black text-gov-gold drop-shadow-sm tracking-tighter">404</h1>
          <FileQuestion className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-gov-green/10" />
        </div>
        
        <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page Not Found
        </h2>
        <h3 className="mt-2 text-2xl font-bold text-gray-600 font-urdu">
          صفحہ نہیں ملا
        </h3>
        
        <p className="mt-4 text-base text-gray-500 max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or doesn't exist.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gov-green hover:bg-gov-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gov-green transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Home
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-6">Quick Links</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/departments" className="flex flex-col items-center p-4 rounded-xl bg-white border border-gray-200 hover:border-gov-green hover:shadow-sm transition-all group">
              <Building2 className="w-6 h-6 text-gray-400 group-hover:text-gov-green mb-2" />
              <span className="font-medium text-gray-900 text-sm">Departments</span>
            </Link>
            <Link to="/e-services" className="flex flex-col items-center p-4 rounded-xl bg-white border border-gray-200 hover:border-gov-green hover:shadow-sm transition-all group">
              <Laptop className="w-6 h-6 text-gray-400 group-hover:text-gov-green mb-2" />
              <span className="font-medium text-gray-900 text-sm">E-Services</span>
            </Link>
            <Link to="/contact" className="flex flex-col items-center p-4 rounded-xl bg-white border border-gray-200 hover:border-gov-green hover:shadow-sm transition-all group">
              <Phone className="w-6 h-6 text-gray-400 group-hover:text-gov-green mb-2" />
              <span className="font-medium text-gray-900 text-sm">Contact Us</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
