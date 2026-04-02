---
# AGENT.md — Government of Balochistan Web Portal
## Project Tracker & Developer Handoff Document

### 1. PROJECT OVERVIEW
  - **Project Name:** Government of Balochistan Web Portal
  - **Purpose:** Official provincial government multi-page web portal mirroring features and content architecture from Sindh.gov.pk, branded natively and robustly for Balochistan. (SMIT internship project)
  - **Tech Stack:** 
    - React 18
    - React Router DOM v6
    - Tailwind CSS (via CDN config)
    - lucide-react
  - **Color Palette & Hex Codes:**
    - `gov-green`: #1B4F2A
    - `gov-green-light`: #2d7a47
    - `gov-green-dark`: #122f1a
    - `gov-gold`: #C9A84C
    - `gov-gold-light`: #e8c97a
    - `gov-cream`: #F8F6F0
    - `gov-dark`: #1a1a1a
    - `gov-muted`: #6b7280
  - **Font Families:**
    - "Inter" (English)
    - "Noto Nastaliq Urdu" (Urdu)
  - **Total Pages Count:** 13 pages (including 404)

### 2. FILE STRUCTURE TREE
  - `AGENT.md`: The project tracker and developer handoff document.
  - `public/`: Static assets folder including user-provided imagery, logo, and icons.
  - `src/main.jsx`: React entry point, also handles Tailwind CDN configuration.
  - `src/App.jsx`: Main App component encapsulating Router and Routes.
  - `src/index.css`: Global custom styles, font imports.
  - `src/data/*`: Verified static data representing the real info for Balochistan.
  - `src/context/LanguageContext.jsx`: Bilingual state management (En/Urdu).
  - `src/hooks/*`: Project utility hooks (`useScrollPosition`, `useCounterAnimation`, `useIntersectionObserver`).
  - `src/components/layout/*`: Core shared layout containers (Navbar, Footer, UtilityBar, etc.).
  - `src/components/ui/*`: Reusable styled UI elements (Cards, Lightbox, StatCounter, Banners).
  - `src/components/sections/*`: Modular page sections for clean homepage construct.
  - `src/pages/*`: Dedicated route-level view components.

### 3. PAGE MANIFEST
  | Page | Route | File | Status | Notes |
  | --- | --- | --- | --- | --- |
  | HomePage | `/` | `src/pages/HomePage.jsx` | 🔄 In Progress | Root portal |
  | AboutPage | `/about` | `src/pages/AboutPage.jsx` | 🔄 In Progress | Province facts & history |
  | LeadershipPage | `/leadership` | `src/pages/LeadershipPage.jsx` | 🔄 In Progress | Leadership overviews |
  | LeaderProfilePage | `/leadership/:id` | `src/pages/LeaderProfilePage.jsx` | 🔄 In Progress | Dynamic parameter |
  | DepartmentsPage | `/departments` | `src/pages/DepartmentsPage.jsx` | 🔄 In Progress | All 26 departments |
  | DepartmentDetailPage | `/departments/:slug` | `src/pages/DepartmentDetailPage.jsx` | 🔄 In Progress | Dynamic department data |
  | NewsPage | `/news` | `src/pages/NewsPage.jsx` | 🔄 In Progress | News listing & filters |
  | NewsDetailPage | `/news/:id` | `src/pages/NewsDetailPage.jsx` | 🔄 In Progress | Single dynamic news |
  | EServicesPage | `/e-services` | `src/pages/EServicesPage.jsx` | 🔄 In Progress | Citizen services directory |
  | TendersPage | `/tenders` | `src/pages/TendersPage.jsx` | 🔄 In Progress | Procurements |
  | JobsPage | `/jobs` | `src/pages/JobsPage.jsx` | 🔄 In Progress | Vacancies |
  | GalleryPage | `/gallery` | `src/pages/GalleryPage.jsx` | 🔄 In Progress | Image gallery layout |
  | ContactPage | `/contact` | `src/pages/ContactPage.jsx` | 🔄 In Progress | Forms & directory |
  | NotFoundPage | `*` | `src/pages/NotFoundPage.jsx` | 🔄 In Progress | 404 Fallback |

### 4. DATA FILES GUIDE
  - `src/data/content.js`: Exports `{ en, ur }`. Used strictly by LanguageContext `t()`. Update dictionary maps here.
  - `src/data/departments.js`: Exports `DEPARTMENTS` array. Used by DepartmentsPage, DepartmentDetailPage, ContactPage.
  - `src/data/news.js`: Exports `NEWS_ARTICLES`, `NOTICES`. Used by Home, NewsPage, NoticeTickerBand.
  - `src/data/leadership.js`: Exports `LEADERS` array. Used by Home, LeadershipPage, LeaderProfilePage.
  - `src/data/services.js`: Exports `SERVICES` object arrays. Used by EServicesPage.
  - `src/data/gallery.js`: Exports `GALLERY_ITEMS`. Used by GalleryPage, HomePage.

### 5. COMPONENT REGISTRY
  | Component | Location | Props | Used By |
  | --- | --- | --- | --- |
  | Layout components | `src/components/layout/` | Various | `App.jsx`, Pages |
  | UI components | `src/components/ui/` | Specific | Sections, Pages |
  | Section components | `src/components/sections/` | None/Specific | `HomePage.jsx` |

### 6. ROUTING TABLE
  | Route | Page Component | Dynamic Param | Auth Required |
  | --- | --- | --- | --- |
  | `/` | `HomePage` | No | No |
  | `/about` | `AboutPage` | No | No |
  | `/leadership` | `LeadershipPage` | No | No |
  | `/leadership/:id` | `LeaderProfilePage` | `:id` | No |
  | `/departments` | `DepartmentsPage` | No | No |
  | `/departments/:slug` | `DepartmentDetailPage` | `:slug` | No |
  | `/news` | `NewsPage` | No | No |
  | `/news/:id` | `NewsDetailPage` | `:id` | No |
  | `/e-services` | `EServicesPage` | No | No |
  | `/tenders` | `TendersPage` | No | No |
  | `/jobs` | `JobsPage` | No | No |
  | `/gallery` | `GalleryPage` | No | No |
  | `/contact` | `ContactPage` | No | No |
  | `*` | `NotFoundPage` | No | No |

### 7. ASSETS GUIDE — IMAGES & LOGO
  | File | Used In | Dimensions | Fallback |
  | --- | --- | --- | --- |
  | `/logo.png` | Navbar, Footer, Tab title | Official | Gold circle "BL" initials |
  | `/images/leadership/governor.png` | LeaderCard, LeaderProfilePage | Official | Gradient avatar |
  | `/images/leadership/cm.png` | LeaderCard, LeaderProfilePage | Official | Gradient avatar |
  | `/images/landscape/princess_of_hope.jpg` | HeroSlider, Gallery | Official | linear-gradient(#1B4F2A, #2d7a47) |
  | `/images/landscape/kund_malir.jpg` | HeroSlider, Gallery | Official | linear-gradient(#1B4F2A, #2d7a47) |
  | `/images/landscape/desert_dunes.jpg` | HeroSlider, Gallery | Official | linear-gradient(#1B4F2A, #2d7a47) |
  | `/images/landscape/turquoise_waters.jpg` | Gallery | Official | linear-gradient(#1B4F2A, #2d7a47) |

### 8. LANGUAGE / BILINGUAL SYSTEM
  - Uses Context API (`LanguageContext.jsx`) to expose `t(key)` helper.
  - Toggles between `en` and `ur`.
  - Sets corresponding metadata direction: `dir=rtl/ltr` and `lang=ur/en`.

### 9. KNOWN LIMITATIONS & TODO
  - Placeholder data needs continuous refinement.
  - Backend integration missing for form submissions, real-time tender parsing, and CMS.
  - Image fallback logic strictly implemented; real visual assets greatly augment design depth.

### 10. DEPLOYMENT NOTES
  - Install dependencies: `npm install`
  - Start development server: `npm run dev`
  - Build production: `npm run build`
  - Recommended free hosting: **Vercel, Netlify, GitHub Pages**.
  - We utilize HashRouter out of the box ensuring zero-config static hosting path compatibility.

### 11. CHANGELOG
  - **v1.0.0 — [2026-04-02]** — Initial build by AI agent. All pages scaffolded, all components created.
  - **v1.1.0 — [2026-04-02]** — Integrated official Balochistan government assets (logo, leadership, and landscape images) for a robust and authentic UI experience.
---
