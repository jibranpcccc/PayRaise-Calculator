// Critical CSS that loads immediately to prevent layout shift
export const criticalStyles = `
  .btn-accessible {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 16px;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s ease;
    outline: none;
    border: 2px solid transparent;
  }

  .btn-accessible:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  .link-accessible {
    min-height: 44px;
    padding: 8px 12px;
    display: inline-flex;
    align-items: center;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }

  .contrast-fix {
    color: #1f2937 !important;
    background-color: #ffffff !important;
  }

  .contrast-fix-muted {
    color: #374151 !important;
    background-color: #f9fafb !important;
  }

  .performance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    contain: layout style paint;
  }

  .reduce-dom {
    contain: layout style paint;
    content-visibility: auto;
    contain-intrinsic-size: 0 400px;
  }
`;