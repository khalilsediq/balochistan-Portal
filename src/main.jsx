import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Tailwind config via CDN
if (window.tailwind) {
  window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          'gov-green': '#1B4F2A',
          'gov-green-light': '#2d7a47',
          'gov-green-dark': '#122f1a',
          'gov-gold': '#C9A84C',
          'gov-gold-light': '#e8c97a',
          'gov-cream': '#F8F6F0',
          'gov-dark': '#1a1a1a',
          'gov-muted': '#6b7280'
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          urdu: ['Noto Nastaliq Urdu', 'serif'],
        }
      }
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
