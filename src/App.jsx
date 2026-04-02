import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LeadershipPage from './pages/LeadershipPage'
import LeaderProfilePage from './pages/LeaderProfilePage'
import DepartmentsPage from './pages/DepartmentsPage'
import DepartmentDetailPage from './pages/DepartmentDetailPage'
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'
import EServicesPage from './pages/EServicesPage'
import TendersPage from './pages/TendersPage'
import JobsPage from './pages/JobsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import UtilityBar from './components/layout/UtilityBar'
import BackToTop from './components/ui/BackToTop'

function AppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <UtilityBar />
      <Navbar />
      <main className="flex-grow" id="main-content">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/leadership/:id" element={<LeaderProfilePage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/departments/:slug" element={<DepartmentDetailPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/e-services" element={<EServicesPage />} />
            <Route path="/tenders" element={<TendersPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppLayout>
      </HashRouter>
    </LanguageProvider>
  )
}

export default App
