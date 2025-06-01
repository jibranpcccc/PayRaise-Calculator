import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  return null;
}

// Event tracking functions for calculator usage
export const trackCalculatorEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Calculator',
      ...parameters
    });
  }
};

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: title,
      page_location: url,
    });
  }
};

// Common calculator events
export const CalculatorEvents = {
  calculate: (calculatorType: string, values: Record<string, any>) => {
    trackCalculatorEvent('calculate_raise', {
      calculator_type: calculatorType,
      current_salary: values.currentSalary,
      raise_type: values.raiseType,
      raise_value: values.raiseValue
    });
  },
  
  exportPDF: (calculatorType: string) => {
    trackCalculatorEvent('export_pdf', {
      calculator_type: calculatorType
    });
  },
  
  viewBenchmarks: (industry: string) => {
    trackCalculatorEvent('view_benchmarks', {
      industry: industry
    });
  },
  
  startNegotiation: () => {
    trackCalculatorEvent('start_negotiation_guide');
  }
};