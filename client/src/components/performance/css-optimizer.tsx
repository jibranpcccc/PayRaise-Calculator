// Critical CSS optimization to prevent render blocking
import { useEffect } from "react";

// Inline only the most critical CSS needed for above-the-fold content
export const criticalCSS = `
/* Critical path CSS - inlined to prevent render blocking */
.hero-section {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  min-height: 60vh;
  padding: 3rem 1rem;
}

.calculator-container {
  max-width: 1024px;
  margin: 0 auto;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  min-height: 44px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background: #2563eb;
}

.input-field {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  width: 100%;
  min-height: 44px;
  font-size: 1rem;
}

.input-field:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Layout optimization */
.reduce-layout-shift {
  contain: layout style paint;
  content-visibility: auto;
}

/* Loading states */
.loading-skeleton {
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 0.5rem;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Performance grid */
.performance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  contain: layout style paint;
}
`;

// Component to inject critical CSS - Fixed for production
export function CriticalCSSInjector() {
  useEffect(() => {
    // Only inject critical CSS, don't interfere with main CSS
    if (!document.querySelector('#critical-css')) {
      const style = document.createElement('style');
      style.id = 'critical-css';
      style.textContent = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);
    }
  }, []);

  return null;
}

// Preload non-critical CSS - Fixed for production
export function PreloadNonCriticalCSS() {
  useEffect(() => {
    // Only run in production build
    if (import.meta.env.VITE_STATIC_BUILD) {
      // Find the actual CSS file in production
      const existingStylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      if (existingStylesheets.length === 0) {
        // If no stylesheets found, ensure main CSS loads
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/assets/index.css';
        document.head.appendChild(link);
      }
    }
  }, []);

  return null;
}