import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  FileText,
  PieChart,
  Shield,
  AlertTriangle
} from "lucide-react";

export default function TaxImpactSalaryIncreases() {
  const [currentSalary, setCurrentSalary] = useState<string>("");
  const [raiseAmount, setRaiseAmount] = useState<string>("");
  const [filingStatus, setFilingStatus] = useState<string>("single");
  const [state, setState] = useState<string>("federal");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tax Impact of Salary Increases - Complete Guide for 2025",
    "description": "Understanding how pay raises affect your taxes. Federal and state tax implications, bracket changes, and strategies to maximize take-home pay.",
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

  const federalBrackets2025 = [
    { min: 0, max: 11000, rate: 10, status: "single" },
    { min: 11001, max: 44725, rate: 12, status: "single" },
    { min: 44726, max: 95375, rate: 22, status: "single" },
    { min: 95376, max: 182050, rate: 24, status: "single" },
    { min: 182051, max: 231250, rate: 32, status: "single" },
    { min: 231251, max: 578125, rate: 35, status: "single" },
    { min: 578126, max: Infinity, rate: 37, status: "single" }
  ];

  const taxConcepts = [
    {
      concept: "Marginal Tax Rate",
      description: "The tax rate applied to your last dollar of income",
      importance: "Critical for understanding raise impact",
      example: "If you're in the 22% bracket, your raise is taxed at 22%",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      concept: "Effective Tax Rate",
      description: "Your overall tax rate across all income",
      importance: "Shows your total tax burden",
      example: "Total taxes ÷ total income = effective rate",
      icon: <Target className="h-6 w-6" />
    },
    {
      concept: "Tax Bracket Bump",
      description: "When a raise pushes you into a higher tax bracket",
      importance: "Only affects income above the threshold",
      example: "Only the excess is taxed at the higher rate",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      concept: "FICA Taxes",
      description: "Social Security and Medicare taxes (7.65%)",
      importance: "Applied to all earned income",
      example: "Flat rate on raises up to Social Security cap",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const taxStrategies = [
    {
      strategy: "Maximize 401(k) Contributions",
      description: "Reduce taxable income through retirement savings",
      benefit: "Lower current tax burden, future retirement security",
      limit2025: "$23,500 ($31,000 if 50+)",
      impact: "Each $1,000 contributed saves $220-370 in taxes"
    },
    {
      strategy: "Health Savings Account (HSA)",
      description: "Triple tax advantage for medical expenses",
      benefit: "Deductible, grows tax-free, withdraws tax-free for medical",
      limit2025: "$4,300 individual, $8,550 family",
      impact: "Each $1,000 contributed saves $220-370 in taxes"
    },
    {
      strategy: "Flexible Spending Account (FSA)",
      description: "Pre-tax dollars for medical and dependent care",
      benefit: "Immediate tax savings on predictable expenses",
      limit2025: "$3,200 medical, $5,000 dependent care",
      impact: "Each $1,000 used saves $220-370 in taxes"
    },
    {
      strategy: "Timing Considerations",
      description: "Strategic timing of bonuses and stock options",
      benefit: "Spread income across tax years",
      limit2025: "No limit, strategy-dependent",
      impact: "Can help avoid bracket bumps"
    }
  ];

  const stateConsiderations = [
    {
      state: "No State Income Tax",
      states: ["Texas", "Florida", "Nevada", "Tennessee", "Washington", "Wyoming", "South Dakota", "Alaska", "New Hampshire"],
      impact: "Only federal taxes apply to raises",
      advantage: "Higher take-home pay from raises"
    },
    {
      state: "Low Tax States",
      states: ["North Carolina", "Utah", "Indiana", "Pennsylvania"],
      impact: "Flat or low progressive rates (3-5%)",
      advantage: "Minimal additional state tax burden"
    },
    {
      state: "High Tax States", 
      states: ["California", "New York", "New Jersey", "Hawaii"],
      impact: "Progressive rates up to 13%+",
      advantage: "Consider timing and deduction strategies"
    },
    {
      state: "Local Income Taxes",
      states: ["Ohio", "Pennsylvania", "Maryland", "Indiana"],
      impact: "Additional 1-4% local taxes may apply",
      advantage: "Research specific municipality rates"
    }
  ];

  const calculateTaxImpact = () => {
    const current = parseFloat(currentSalary) || 0;
    const raise = parseFloat(raiseAmount) || 0;
    const newSalary = current + raise;

    // Simplified federal tax calculation (marginal approach)
    const calculateFederalTax = (income: number) => {
      let tax = 0;
      let remainingIncome = income;
      
      for (const bracket of federalBrackets2025) {
        if (bracket.status !== filingStatus && filingStatus !== "single") continue;
        
        const taxableInThisBracket = Math.min(
          remainingIncome,
          bracket.max - bracket.min + 1
        );
        
        if (taxableInThisBracket <= 0) break;
        
        tax += taxableInThisBracket * (bracket.rate / 100);
        remainingIncome -= taxableInThisBracket;
        
        if (remainingIncome <= 0) break;
      }
      
      return tax;
    };

    const currentFederalTax = calculateFederalTax(current);
    const newFederalTax = calculateFederalTax(newSalary);
    const federalTaxIncrease = newFederalTax - currentFederalTax;
    
    // FICA taxes (7.65% on all income up to Social Security wage base)
    const ficaRate = 0.0765;
    const ficaIncrease = raise * ficaRate;
    
    const totalTaxIncrease = federalTaxIncrease + ficaIncrease;
    const netRaiseAmount = raise - totalTaxIncrease;
    const effectiveTaxRateOnRaise = (totalTaxIncrease / raise) * 100;

    return {
      raise,
      federalTaxIncrease,
      ficaIncrease,
      totalTaxIncrease,
      netRaiseAmount,
      effectiveTaxRateOnRaise
    };
  };

  const results = calculateTaxImpact();

  return (
    <>
      <SEOHead
        title="Tax Impact of Salary Increases - Complete Guide for 2025"
        description="Understanding how pay raises affect your taxes. Federal and state tax implications, bracket changes, and strategies to maximize take-home pay."
        canonical="/tax-impact-salary-increases"
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
                Tax Impact of Salary Increases
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Complete Guide for 2025 Tax Planning
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">2025 Tax Brackets</Badge>
                <Badge variant="outline">18 min read</Badge>
                <Badge variant="outline">Tax Planning</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Understanding how pay raises affect your taxes, strategies to maximize take-home pay, 
                and federal and state tax implications of salary increases.
              </p>
            </div>
          </div>
        </section>

        {/* Tax Impact Calculator */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">
                  Quick Tax Impact Calculator
                </CardTitle>
                <p className="text-center text-gray-600">
                  Calculate the tax impact of your salary increase
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentSalary">Current Annual Salary</Label>
                      <Input
                        id="currentSalary"
                        type="number"
                        placeholder="e.g. 50000"
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="raiseAmount">Salary Increase Amount</Label>
                      <Input
                        id="raiseAmount"
                        type="number"
                        placeholder="e.g. 5000"
                        value={raiseAmount}
                        onChange={(e) => setRaiseAmount(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="filingStatus">Filing Status</Label>
                      <Select value={filingStatus} onValueChange={setFilingStatus}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="marriedJoint">Married Filing Jointly</SelectItem>
                          <SelectItem value="marriedSeparate">Married Filing Separately</SelectItem>
                          <SelectItem value="headOfHousehold">Head of Household</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {results.raise > 0 && (
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">Tax Impact Results</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Gross Raise:</span>
                          <span className="font-semibold">${results.raise.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Federal Tax:</span>
                          <span className="text-red-600">-${results.federalTaxIncrease.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">FICA Tax:</span>
                          <span className="text-red-600">-${results.ficaIncrease.toFixed(0)}</span>
                        </div>
                        <div className="border-t border-gray-300 pt-2">
                          <div className="flex justify-between">
                            <span className="font-semibold">Net Increase:</span>
                            <span className="font-semibold text-green-600">${results.netRaiseAmount.toFixed(0)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Effective Tax Rate:</span>
                            <span>{results.effectiveTaxRateOnRaise.toFixed(1)}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tax Concepts */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Essential Tax Concepts for Salary Increases
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {taxConcepts.map((concept, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      {concept.icon}
                      <span className="ml-2">{concept.concept}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-gray-600">{concept.description}</p>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <div className="text-sm text-blue-800">
                          <strong>Why it matters:</strong> {concept.importance}
                        </div>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-400 p-3">
                        <div className="text-sm text-green-800">
                          <strong>Example:</strong> {concept.example}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 2025 Federal Tax Brackets */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              2025 Federal Tax Brackets (Single Filers)
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Tax Rate</th>
                        <th className="text-left py-2">Income Range</th>
                        <th className="text-left py-2">Tax on Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {federalBrackets2025.map((bracket, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2 font-semibold">{bracket.rate}%</td>
                          <td className="py-2">
                            ${bracket.min.toLocaleString()} - {bracket.max === Infinity ? "∞" : `$${bracket.max.toLocaleString()}`}
                          </td>
                          <td className="py-2 text-gray-600">
                            {bracket.rate}% of income in this range
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> These are marginal tax rates. Only income above each threshold is taxed at the higher rate.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tax Optimization Strategies */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Tax Optimization Strategies for Salary Increases
            </h2>
            
            <div className="space-y-6">
              {taxStrategies.map((strategy, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{strategy.strategy}</h3>
                        <p className="text-gray-600 mb-3">{strategy.description}</p>
                        <div className="bg-green-50 border-l-4 border-green-400 p-3 mb-3">
                          <p className="text-sm text-green-800"><strong>Benefit:</strong> {strategy.benefit}</p>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                          <p className="text-sm text-blue-800"><strong>Potential Impact:</strong> {strategy.impact}</p>
                        </div>
                      </div>
                      <div className="lg:col-span-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">2025 Contribution Limit</div>
                          <div className="text-2xl font-bold text-primary">{strategy.limit2025}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* State Tax Considerations */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              State Tax Considerations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {stateConsiderations.map((category, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{category.state}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">States:</div>
                        <div className="text-sm text-gray-600">
                          {Array.isArray(category.states) ? category.states.join(", ") : category.states}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Tax Impact:</div>
                        <div className="text-sm text-gray-600">{category.impact}</div>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <div className="text-sm text-blue-800">
                          <strong>Advantage:</strong> {category.advantage}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Tax Planning Takeaways
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                      Do This
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Maximize pre-tax contributions (401k, HSA)</li>
                      <li>• Understand your marginal tax rate</li>
                      <li>• Consider timing of bonuses/stock options</li>
                      <li>• Research state and local tax implications</li>
                      <li>• Plan for quarterly estimated payments if needed</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />
                      Avoid This
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Assuming you'll lose money from bracket bumps</li>
                      <li>• Forgetting about FICA taxes on raises</li>
                      <li>• Ignoring state tax planning opportunities</li>
                      <li>• Not adjusting withholdings after raises</li>
                      <li>• Making decisions based only on gross amounts</li>
                    </ul>
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