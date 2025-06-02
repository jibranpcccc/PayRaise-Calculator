import { memo } from "react";
import { PayRaiseCalculator } from "@/components/calculator/pay-raise-calculator";

// Simplified homepage that reduces DOM elements
export const OptimizedHome = memo(() => {
  return (
    <div className="reduce-dom">
      {/* Hero Section - Minimal DOM */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Pay Raise Calculator
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your new salary after any raise with our comprehensive calculator
            </p>
          </div>
          
          {/* Calculator - Main Content */}
          <div className="max-w-4xl mx-auto">
            <PayRaiseCalculator />
          </div>
        </div>
      </section>

      {/* Quick Links - Reduced */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/salary-negotiation-complete-guide" className="link-accessible p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Salary Negotiation Guide</h3>
              <p className="text-gray-600 text-sm">Complete guide to negotiating raises</p>
            </a>
            <a href="/industry-raise-benchmarks-2025" className="link-accessible p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Industry Benchmarks</h3>
              <p className="text-gray-600 text-sm">2025 raise data by industry</p>
            </a>
            <a href="/tools" className="link-accessible p-6 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Calculator Tools</h3>
              <p className="text-gray-600 text-sm">Additional salary calculators</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
});

OptimizedHome.displayName = "OptimizedHome";