import React, { useState, useEffect } from 'react';
import PageBanner from '../components/ui/PageBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import { DEPARTMENTS } from '../data/departments';
import { MapPin, Phone, Mail, Map, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', department: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = 'Contact Us | Government of Balochistan';
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim() || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', department: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageBanner title="Contact Us" urduTitle="رابطہ کریں" />
      <Breadcrumb items={["Home", "Contact"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column - Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">Have a query, grievance, or feedback? Fill out the form below and the relevant department will get back to you.</p>

              {success && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-start animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-3 shrink-0" />
                  <p className="text-green-800 font-medium">Your message has been submitted successfully. A representative will respond within 3-5 working days.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      className={`block w-full rounded-md border py-3 px-4 shadow-sm focus:ring-2 focus:ring-gov-green focus:outline-none ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-gov-green'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email} 
                      onChange={handleChange} 
                      className={`block w-full rounded-md border py-3 px-4 shadow-sm focus:ring-2 focus:ring-gov-green focus:outline-none ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-gov-green'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-gov-green focus:ring-2 focus:ring-gov-green focus:outline-none"
                      placeholder="03xx-xxxxxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Select Department</label>
                    <select 
                      id="department" 
                      name="department"
                      value={formData.department} 
                      onChange={handleChange} 
                      className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-gov-green focus:ring-2 focus:ring-gov-green focus:outline-none bg-white"
                    >
                      <option value="">General Inquiry</option>
                      {DEPARTMENTS.map(dept => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject} 
                    onChange={handleChange} 
                    className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-gov-green focus:ring-2 focus:ring-gov-green focus:outline-none"
                    placeholder="Brief subject of your query"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message} 
                    onChange={handleChange} 
                    className={`block w-full rounded-md border py-3 px-4 shadow-sm focus:ring-2 focus:ring-gov-green focus:outline-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-gov-green'}`}
                    placeholder="Please describe your query in detail..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-gov-green hover:bg-gov-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gov-green transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="w-full lg:w-5/12 space-y-6">
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Main Office</h3>
              <ul className="space-y-4 text-gray-600 pl-1">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-gov-gold mr-3 mt-0.5 shrink-0" />
                  <span>Civil Secretariat, Zarghoon Road,<br/>Quetta, Balochistan, Pakistan</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-gov-gold mr-3 shrink-0" />
                  <span dir="ltr">+923708911924</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-gov-gold mr-3 shrink-0" />
                  <span>info@balochistan.gov.pk</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-gov-gold mr-3 shrink-0" />
                  <span>Mon-Fri, 8:00 AM – 4:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 border-l-4 border-l-gov-green">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Chief Minister's Office</h3>
              <p className="text-sm text-gray-500 mb-4 border-b border-gray-100 pb-3">For direct grievances directed to the CM Secretariat.</p>
              <ul className="space-y-3 text-sm text-gray-600 pl-1">
                <li className="flex items-center"><MapPin className="w-4 h-4 text-gray-400 mr-2 shrink-0" /> Chief Minister Secretariat, Quetta</li>
                <li className="flex items-center"><Phone className="w-4 h-4 text-gray-400 mr-2 shrink-0" /> +92-81-9202300</li>
                <li className="flex items-center"><Mail className="w-4 h-4 text-gray-400 mr-2 shrink-0" /> cmoffice@balochistan.gov.pk</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Media Inquiries</h3>
              <ul className="space-y-3 text-sm text-gray-600 pl-1">
                <li className="flex items-center"><MapPin className="w-4 h-4 text-gray-400 mr-2 shrink-0" /> Information & PR Department</li>
                <li className="flex items-center"><Phone className="w-4 h-4 text-gray-400 mr-2 shrink-0" /> +92-81-9201234</li>
                <li className="flex items-center"><Mail className="w-4 h-4 text-gray-400 mr-2 shrink-0" /> media@balochistan.gov.pk</li>
              </ul>
            </div>

            {/* Static Map Placeholder */}
            <div className="bg-gray-100 rounded-xl border border-gray-200 h-48 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1b4f2a 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              <div className="relative text-center">
                <Map className="w-8 h-8 text-gov-green mx-auto mb-2" />
                <a href="https://maps.google.com/?q=Civil+Secretariat+Quetta" target="_blank" rel="noreferrer" className="inline-flex px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-semibold text-gray-700 hover:text-gov-green transition-colors hover:border-gov-green">
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
