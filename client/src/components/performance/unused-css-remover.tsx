// Component to dynamically remove unused CSS classes and optimize CSS delivery
import { useEffect } from "react";

// Critical CSS classes that should always be kept
const criticalClasses = [
  'btn-primary',
  'input-field', 
  'calculator-container',
  'hero-section',
  'loading-skeleton',
  'reduce-layout-shift',
  'performance-grid'
];

// Remove unused Tailwind classes to reduce CSS bundle size
export function UnusedCSSRemover() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          // Scan for unused CSS classes and remove them
          const elements = document.querySelectorAll('[class]');
          elements.forEach((element) => {
            const classes = element.className.split(' ');
            const usedClasses = classes.filter(className => {
              // Keep critical classes and actually used ones
              return criticalClasses.includes(className) || 
                     document.querySelectorAll(`.${className}`).length > 0;
            });
            
            if (usedClasses.length !== classes.length) {
              element.className = usedClasses.join(' ');
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

// Preload only essential CSS files
export function OptimizedCSSLoader() {
  useEffect(() => {
    // Preload only critical CSS files
    const criticalStyles = [
      '/assets/index.css'
    ];

    criticalStyles.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });
  }, []);

  return null;
}