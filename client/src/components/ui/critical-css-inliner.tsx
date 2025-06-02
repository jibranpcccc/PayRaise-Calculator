// Critical CSS that must be inlined to prevent render blocking
export const inlineCriticalCSS = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      /* Critical above-the-fold styles */
      body { margin: 0; font-family: system-ui, sans-serif; }
      .hero-section { min-height: 60vh; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); }
      .calculator-container { max-width: 1024px; margin: 0 auto; padding: 1rem; }
      .btn-primary { 
        background: #3b82f6; 
        color: white; 
        padding: 0.75rem 1.5rem; 
        border-radius: 0.5rem; 
        border: none;
        min-height: 44px;
        cursor: pointer;
      }
      .btn-primary:hover { background: #2563eb; }
      .input-field { 
        padding: 0.75rem; 
        border: 1px solid #d1d5db; 
        border-radius: 0.5rem; 
        width: 100%;
        min-height: 44px;
      }
      .loading-skeleton { 
        background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      @keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
      .reduce-layout-shift { contain: layout style paint; }
    `;
    document.head.appendChild(style);
  }
};

// Call immediately to prevent FOUC
if (typeof document !== 'undefined') {
  inlineCriticalCSS();
}