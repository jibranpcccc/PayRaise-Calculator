import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Settings,
  PieChart
} from "lucide-react";

export default function HowPayRaiseCalculatorWorks() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Pay Raise Calculator Works - Complete Technical Guide",
    "description": "Understanding the mechanics behind pay raise calculations. Learn formulas, methodologies, and factors that determine accurate salary increase calculations.",
    "author": {
      "@type": "Organization",
      "name": "PayRaise Calculator"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "PayRaise Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://payraisepercentagecalculator.com/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const calculationSteps = [
    {
      step: 1,
      title: "Input Processing",
      description: "Calculator validates and processes your current salary and desired raise information",
      icon: <Settings className="h-6 w-6" />,
      details: [
        "Salary amount validation and formatting",
        "Pay period standardization (annual, monthly, weekly, hourly)",
        "Raise type detection (percentage, dollar amount, target salary)",
        "Additional parameter processing (tax rates, inflation, location)"
      ]
    },
    {
      step: 2,
      title: "Core Calculations",
      description: "Mathematical formulas determine your new salary and increase amounts",
      icon: <Calculator className="h-6 w-6" />,
      details: [
        "New salary calculation based on raise type",
        "Percentage increase computation",
        "Pay period conversions (annual to monthly/weekly/hourly)",
        "Absolute dollar amount increases"
      ]
    },
    {
      step: 3,
      title: "Advanced Analytics",
      description: "Complex calculations for tax impact, inflation adjustment, and projections",
      icon: <BarChart3 className="h-6 w-6" />,
      details: [
        "Tax bracket analysis and net increase calculation",
        "Inflation adjustment using current CPI data",
        "Compound growth projections over multiple years",
        "Real purchasing power analysis"
      ]
    },
    {
      step: 4,
      title: "Results Presentation",
      description: "Formatted output with comprehensive breakdown and insights",
      icon: <PieChart className="h-6 w-6" />,
      details: [
        "Multiple time period breakdowns",
        "Visual charts and comparisons",
        "Industry benchmark comparisons",
        "PDF export generation"
      ]
    }
  ];

  const formulas = [
    {
      name: "Percentage Raise Calculation",
      formula: "New Salary = Current Salary × (1 + Raise Percentage)",
      example: "$50,000 × (1 + 0.05) = $52,500",
      use: "When you know the percentage increase"
    },
    {
      name: "Dollar Amount Raise",
      formula: "New Salary = Current Salary + Raise Amount",
      example: "$50,000 + $3,000 = $53,000",
      use: "When you know the exact dollar increase"
    },
    {
      name: "Target Salary Calculation",
      formula: "Raise Percentage = (Target Salary - Current Salary) / Current Salary",
      example: "($55,000 - $50,000) / $50,000 = 10%",
      use: "When you have a target salary in mind"
    },
    {
      name: "Inflation Adjustment",
      formula: "Real Raise = Nominal Raise - Inflation Rate",
      example: "5% raise - 3.1% inflation = 1.9% real increase",
      use: "To understand purchasing power impact"
    }
  ];

  const factors = [
    {
      factor: "Current Salary",
      impact: "Base for all calculations",
      accuracy: "Critical - affects all results",
      notes: "Should include base salary only, not total compensation"
    },
    {
      factor: "Raise Type",
      impact: "Determines calculation method",
      accuracy: "High - changes formula approach",
      notes: "Percentage, dollar amount, or target salary"
    },
    {
      factor: "Pay Period",
      impact: "Conversion factor for displays",
      accuracy: "Medium - affects time-based breakdowns",
      notes: "Annual, monthly, weekly, or hourly"
    },
    {
      factor: "Tax Rate",
      impact: "Net increase calculation",
      accuracy: "High - significant on take-home pay",
      notes: "Can use estimated rates or precise brackets"
    },
    {
      factor: "Inflation Rate",
      impact: "Real purchasing power",
      accuracy: "Medium - economic context",
      notes: "Uses current Consumer Price Index data"
    },
    {
      factor: "Industry Benchmarks",
      impact: "Comparative analysis",
      accuracy: "Medium - market context",
      notes: "Based on current market research data"
    }
  ];

  return (
    <>
      <SEOHead
        title="How Pay Raise Calculator Works - Complete Technical Guide"
        description="Understanding the mechanics behind pay raise calculations. Learn formulas, methodologies, and factors that determine accurate salary increase calculations."
        canonical="/how-pay-raise-calculator-works"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                How Pay Raise Calculator Works
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Complete Technical Guide to Salary Calculation Mechanics
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Technical Deep Dive</Badge>
                <Badge variant="outline">15 min read</Badge>
                <Badge variant="outline">Advanced</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Understanding the formulas, methodologies, and factors that power accurate 
                salary increase calculations and analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Calculation Process */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Calculation Process
            </h2>
            
            <div className="space-y-8">
              {calculationSteps.map((step, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl flex items-center">
                          {step.icon}
                          <span className="ml-2">{step.title}</span>
                        </CardTitle>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mathematical Formulas */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Core Mathematical Formulas
            </h2>
            
            <div className="space-y-6">
              {formulas.map((formula, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{formula.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-4 rounded-lg font-mono text-center">
                        <code className="text-lg">{formula.formula}</code>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Example:</span>
                          <p className="text-gray-600">{formula.example}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Use Case:</span>
                          <p className="text-gray-600">{formula.use}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accuracy Factors */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Factors Affecting Calculation Accuracy
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {factors.map((factor, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{factor.factor}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Impact:</span>
                      <p className="text-sm text-gray-600">{factor.impact}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Accuracy Level:</span>
                      <Badge 
                        variant="outline" 
                        className={`ml-2 ${
                          factor.accuracy.includes('Critical') ? 'text-red-700 border-red-300' :
                          factor.accuracy.includes('High') ? 'text-orange-700 border-orange-300' :
                          'text-blue-700 border-blue-300'
                        }`}
                      >
                        {factor.accuracy}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Notes:</span>
                      <p className="text-sm text-gray-600">{factor.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Advanced Technical Features
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    Real-Time Calculations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Instant results as you type
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Input validation and error handling
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Multiple currency format support
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Responsive design optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Data Accuracy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Current inflation rate integration
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Industry benchmark data
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Tax bracket considerations
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Geographic cost adjustments
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Technical FAQ
            </h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How accurate are the calculations?</h3>
                  <p className="text-gray-600">
                    The core mathematical calculations are 100% accurate based on the formulas used. 
                    Accuracy of real-world applicability depends on the quality of input data and 
                    current market conditions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">What data sources are used for benchmarks?</h3>
                  <p className="text-gray-600">
                    Industry benchmarks come from current market research, salary surveys, and 
                    government labor statistics. Inflation data uses official Consumer Price Index figures.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How often is the calculator updated?</h3>
                  <p className="text-gray-600">
                    Core calculation logic is stable, but data inputs like inflation rates and 
                    industry benchmarks are updated monthly to ensure current market relevance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}