import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  FileText,
  PieChart,
  Percent
} from "lucide-react";

export default function PayRaiseFormulasGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pay Raise Formulas Guide - Complete Mathematical Reference",
    "description": "Comprehensive guide to all pay raise calculation formulas. Step-by-step examples for percentage increases, dollar amounts, and complex scenarios.",
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

  const basicFormulas = [
    {
      name: "Percentage Raise Calculation",
      formula: "New Salary = Current Salary × (1 + Raise %)",
      description: "Calculate new salary when you know the percentage increase",
      example: {
        current: 50000,
        raise: 5,
        calculation: "$50,000 × (1 + 0.05) = $50,000 × 1.05 = $52,500",
        result: "$52,500 new salary"
      },
      usage: "Most common scenario for annual raises"
    },
    {
      name: "Dollar Amount Raise",
      formula: "New Salary = Current Salary + Raise Amount",
      description: "Calculate new salary when you know the exact dollar increase",
      example: {
        current: 50000,
        raise: 3000,
        calculation: "$50,000 + $3,000 = $53,000",
        result: "$53,000 new salary"
      },
      usage: "When given a specific dollar amount increase"
    },
    {
      name: "Percentage from Dollar Amount",
      formula: "Raise % = (Raise Amount ÷ Current Salary) × 100",
      description: "Find the percentage when you know the dollar increase",
      example: {
        current: 50000,
        raise: 2500,
        calculation: "($2,500 ÷ $50,000) × 100 = 0.05 × 100 = 5%",
        result: "5% raise percentage"
      },
      usage: "Converting dollar amounts to percentages"
    },
    {
      name: "Target Salary Calculation",
      formula: "Required Raise % = ((Target - Current) ÷ Current) × 100",
      description: "Calculate percentage needed to reach target salary",
      example: {
        current: 50000,
        target: 55000,
        calculation: "(($55,000 - $50,000) ÷ $50,000) × 100 = ($5,000 ÷ $50,000) × 100 = 10%",
        result: "10% raise needed"
      },
      usage: "When you have a specific salary goal"
    }
  ];

  const timeConversions = [
    {
      name: "Annual to Monthly",
      formula: "Monthly Salary = Annual Salary ÷ 12",
      example: "$60,000 ÷ 12 = $5,000 per month"
    },
    {
      name: "Annual to Weekly",
      formula: "Weekly Salary = Annual Salary ÷ 52",
      example: "$60,000 ÷ 52 = $1,154 per week"
    },
    {
      name: "Annual to Hourly",
      formula: "Hourly Rate = Annual Salary ÷ (Hours/Week × 52)",
      example: "$60,000 ÷ (40 × 52) = $60,000 ÷ 2,080 = $28.85/hour"
    },
    {
      name: "Hourly to Annual",
      formula: "Annual Salary = Hourly Rate × Hours/Week × 52",
      example: "$25/hour × 40 hours × 52 weeks = $52,000 annually"
    }
  ];

  const advancedFormulas = [
    {
      name: "Compound Annual Growth",
      formula: "Future Salary = Current × (1 + Rate)^Years",
      description: "Calculate salary growth over multiple years with consistent raises",
      example: {
        current: 50000,
        rate: 4,
        years: 5,
        calculation: "$50,000 × (1 + 0.04)^5 = $50,000 × 1.217 = $60,833",
        result: "$60,833 after 5 years"
      }
    },
    {
      name: "Inflation-Adjusted Raise",
      formula: "Real Raise = Nominal Raise - Inflation Rate",
      description: "Calculate the real purchasing power increase",
      example: {
        nominal: 5,
        inflation: 3.1,
        calculation: "5% - 3.1% = 1.9%",
        result: "1.9% real increase"
      }
    },
    {
      name: "Net Raise After Taxes",
      formula: "Net Increase = Gross Increase × (1 - Tax Rate)",
      description: "Calculate take-home pay increase after taxes",
      example: {
        gross: 5000,
        taxRate: 25,
        calculation: "$5,000 × (1 - 0.25) = $5,000 × 0.75 = $3,750",
        result: "$3,750 net increase"
      }
    },
    {
      name: "Effective Hourly Increase",
      formula: "Hourly Increase = Annual Increase ÷ (Hours/Week × 52)",
      description: "Break down annual raise to hourly impact",
      example: {
        annual: 2600,
        hours: 40,
        calculation: "$2,600 ÷ (40 × 52) = $2,600 ÷ 2,080 = $1.25/hour",
        result: "$1.25/hour increase"
      }
    }
  ];

  const practicalExamples = [
    {
      scenario: "Standard Annual Review",
      details: "Current: $65,000, Proposed: 4% raise",
      steps: [
        "Convert percentage to decimal: 4% = 0.04",
        "Calculate: $65,000 × (1 + 0.04) = $65,000 × 1.04",
        "Result: $67,600 new annual salary",
        "Monthly increase: ($67,600 - $65,000) ÷ 12 = $216.67"
      ]
    },
    {
      scenario: "Promotion with Target Salary",
      details: "Current: $55,000, Target: $70,000",
      steps: [
        "Calculate difference: $70,000 - $55,000 = $15,000",
        "Find percentage: ($15,000 ÷ $55,000) × 100",
        "Result: 27.27% increase needed",
        "Verify: $55,000 × 1.2727 = $70,000"
      ]
    },
    {
      scenario: "Hourly to Salary Conversion",
      details: "Current: $28/hour, 40 hours/week, Target: $65,000 salary",
      steps: [
        "Current annual: $28 × 40 × 52 = $58,240",
        "Increase needed: $65,000 - $58,240 = $6,760",
        "Percentage: ($6,760 ÷ $58,240) × 100 = 11.6%",
        "New hourly equivalent: $65,000 ÷ 2,080 = $31.25/hour"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Pay Raise Formulas Guide - Complete Mathematical Reference"
        description="Comprehensive guide to all pay raise calculation formulas. Step-by-step examples for percentage increases, dollar amounts, and complex scenarios."
        canonical="/pay-raise-formulas-guide"
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
                Pay Raise Formulas Guide
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Complete Mathematical Reference for Salary Calculations
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Mathematical Reference</Badge>
                <Badge variant="outline">12 min read</Badge>
                <Badge variant="outline">All Levels</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Master every formula you need for calculating pay raises, salary conversions, 
                and compensation analysis with step-by-step examples.
              </p>
            </div>
          </div>
        </section>

        {/* Basic Formulas */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Essential Pay Raise Formulas
            </h2>
            
            <div className="space-y-8">
              {basicFormulas.map((formula, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Percent className="mr-2 h-5 w-5" />
                      {formula.name}
                    </CardTitle>
                    <p className="text-gray-600">{formula.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Formula</h4>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                          <code className="text-lg font-mono text-blue-800">{formula.formula}</code>
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Usage:</strong> {formula.usage}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Example Calculation</h4>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                          <div className="text-sm">
                            <strong>Given:</strong> Current ${formula.example.current.toLocaleString()}
                            {formula.example.raise && `, ${typeof formula.example.raise === 'number' && formula.example.raise > 100 ? '$' + formula.example.raise.toLocaleString() : formula.example.raise + '%'}`}
                            {formula.example.target && `, Target $${formula.example.target.toLocaleString()}`}
                          </div>
                          <div className="text-sm font-mono bg-white p-2 rounded border">
                            {formula.example.calculation}
                          </div>
                          <div className="text-sm font-semibold text-green-700">
                            {formula.example.result}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Time Period Conversions */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Time Period Conversion Formulas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {timeConversions.map((conversion, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{conversion.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                        {conversion.formula}
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Example:</strong> {conversion.example}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Formulas */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Advanced Calculation Formulas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {advancedFormulas.map((formula, index) => (
                <Card key={index} className="calculator-shadow h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      {formula.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{formula.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <code className="text-sm font-mono text-blue-800">{formula.formula}</code>
                      </div>
                      {formula.example && (
                        <div className="bg-gray-50 p-3 rounded">
                          <div className="text-xs text-gray-600 mb-2">Example:</div>
                          <div className="text-sm font-mono">{formula.example.calculation}</div>
                          <div className="text-sm font-semibold text-green-700 mt-2">
                            Result: {formula.example.result}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Step-by-Step Practical Examples
            </h2>
            
            <div className="space-y-8">
              {practicalExamples.map((example, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      {example.scenario}
                    </CardTitle>
                    <p className="text-gray-600">{example.details}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {example.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <div className="text-sm text-gray-700">{step}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Reference Cheat Sheet
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Common Conversions</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Annual to Monthly: ÷ 12</li>
                      <li>• Annual to Weekly: ÷ 52</li>
                      <li>• Annual to Hourly: ÷ 2,080 (40h/week)</li>
                      <li>• Percentage to decimal: % ÷ 100</li>
                      <li>• Decimal to percentage: × 100</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Key Formulas</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• New Salary = Current × (1 + Raise%)</li>
                      <li>• Raise% = (New - Current) ÷ Current</li>
                      <li>• Real Raise = Nominal - Inflation</li>
                      <li>• Net Raise = Gross × (1 - Tax Rate)</li>
                      <li>• Compound: Current × (1 + Rate)^Years</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <Link href="/">
                      <Button className="bg-primary hover:bg-blue-700">
                        Try Our Calculator
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}