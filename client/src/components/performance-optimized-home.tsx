import { memo } from "react";
import { PayRaiseCalculator } from "@/components/calculator/pay-raise-calculator";
import { DOMReducer, FlattenedContainer } from "@/components/performance/dom-reducer";

// Heavily optimized homepage to reduce DOM elements from 954 to under 300
export const OptimizedHome = memo(() => {
  return (
    <DOMReducer className="min-h-screen">
      {/* Hero Section - Ultra minimal DOM structure */}
      <section className="hero-section">
        <FlattenedContainer>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pay Raise Calculator
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Instantly calculate your new salary after any raise with our comprehensive calculator
            </p>
            
            {/* Calculator - Direct integration without extra containers */}
            <PayRaiseCalculator />
          </div>
        </FlattenedContainer>
      </section>

      {/* Quick Links - Flattened structure */}
      <section className="py-8 bg-white">
        <FlattenedContainer>
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="/salary-negotiation-complete-guide" className="link-accessible block p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Negotiation Guide</h3>
                <p className="text-gray-600 text-sm">Complete raise negotiation strategies</p>
              </a>
              <a href="/industry-raise-benchmarks-2025" className="link-accessible block p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Industry Data</h3>
                <p className="text-gray-600 text-sm">2025 salary benchmarks</p>
              </a>
              <a href="/tools" className="link-accessible block p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">More Tools</h3>
                <p className="text-gray-600 text-sm">Additional calculators</p>
              </a>
            </div>
          </div>
        </FlattenedContainer>
      </section>
    </DOMReducer>
  );
});

OptimizedHome.displayName = "OptimizedHome";