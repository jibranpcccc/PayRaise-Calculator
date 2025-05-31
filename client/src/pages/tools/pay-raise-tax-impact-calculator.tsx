import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SEOHead } from "@/components/seo/head";
import { PayRaiseCalculator } from "@/lib/calculator";
import { FileText, Calculator, DollarSign, AlertCircle } from "lucide-react";

export default function PayRaiseTaxImpactCalculator() {
  const [currentSalary, setCurrentSalary] = useState(75000);
  const [raisePercentage, setRaisePercentage] = useState(5);
  const [filingStatus, setFilingStatus] = useState("single");
  const [state, setState] = useState("no-state-tax");
  const [includeStateLocal, setIncludeStateLocal] = useState(true);
  const [results, setResults] = useState<any>(null);

  // Federal tax brackets for 2025 (simplified)
  const federalTaxBrackets = {
    single: [
      { min: 0, max: 11000, rate: 10 },
      { min: 11001, max: 44725, rate: 12 },
      { min: 44726, max: 95375, rate: 22 },
      { min: 95376, max: 182050, rate: 24 },
      { min: 182051, max: 231250, rate: 32 },
      { min: 231251, max: 578125, rate: 35 },
      { min: 578126, max: Infinity, rate: 37 }
    ],
    marriedJoint: [
      { min: 0, max: 22000, rate: 10 },
      { min: 22001, max: 89450, rate: 12 },
      { min: 89451, max: 190750, rate: 22 },
      { min: 190751, max: 364200, rate: 24 },
      { min: 364201, max: 462500, rate: 32 },
      { min: 462501, max: 693750, rate: 35 },
      { min: 693751, max: Infinity, rate: 37 }
    ]
  };

  const stateTaxRates = {
    "no-state-tax": { name: "No State Tax", rate: 0 },
    "california": { name: "California", rate: 9.3 },
    "new-york": { name: "New York", rate: 6.85 },
    "texas": { name: "Texas", rate: 0 },
    "florida": { name: "Florida", rate: 0 },
    "illinois": { name: "Illinois", rate: 4.95 },
    "pennsylvania": { name: "Pennsylvania", rate: 3.07 },
    "ohio": { name: "Ohio", rate: 3.99 },
    "georgia": { name: "Georgia", rate: 5.75 },
    "north-carolina": { name: "North Carolina", rate: 4.99 }
  };

  useEffect(() => {
    calculateTaxImpact();
  }, [currentSalary, raisePercentage, filingStatus, state, includeStateLocal]);

  const calculateFederalTax = (income: number, status: string) => {
    const brackets = federalTaxBrackets[status] || federalTaxBrackets.single;
    let tax = 0;
    
    for (const bracket of brackets) {
      if (income > bracket.min) {
        const taxableInThisBracket = Math.min(income, bracket.max) - bracket.min + 1;
        tax += taxableInThisBracket * (bracket.rate / 100);
      }
    }
    
    return tax;
  };

  const calculateTaxImpact = () => {
    const newSalary = currentSalary * (1 + raisePercentage / 100);
    const raiseAmount = newSalary - currentSalary;

    // Federal taxes
    const currentFederalTax = calculateFederalTax(currentSalary, filingStatus);
    const newFederalTax = calculateFederalTax(newSalary, filingStatus);
    const federalTaxIncrease = newFederalTax - currentFederalTax;

    // State taxes
    const stateRate = includeStateLocal ? (stateTaxRates[state]?.rate || 0) : 0;
    const stateTaxIncrease = raiseAmount * (stateRate / 100);

    // FICA taxes (Social Security + Medicare)
    const socialSecurityRate = 6.2;
    const medicareRate = 1.45;
    const ficaRate = socialSecurityRate + medicareRate;
    
    // Social Security tax caps at $160,200 in 2025
    const ssWageBase = 160200;
    const currentSSTax = Math.min(currentSalary, ssWageBase) * (socialSecurityRate / 100);
    const newSSTax = Math.min(newSalary, ssWageBase) * (socialSecurityRate / 100);
    const ssTaxIncrease = newSSTax - currentSSTax;
    
    const medicareTaxIncrease = raiseAmount * (medicareRate / 100);
    const ficaTaxIncrease = ssTaxIncrease + medicareTaxIncrease;

    const totalTaxIncrease = federalTaxIncrease + stateTaxIncrease + ficaTaxIncrease;
    const netRaiseAmount = raiseAmount - totalTaxIncrease;
    const effectiveTaxRate = (totalTaxIncrease / raiseAmount) * 100;

    // Monthly breakdown
    const monthlyGrossIncrease = raiseAmount / 12;
    const monthlyTaxIncrease = totalTaxIncrease / 12;
    const monthlyNetIncrease = netRaiseAmount / 12;

    setResults({
      currentSalary,
      newSalary,
      raiseAmount,
      federalTaxIncrease,
      stateTaxIncrease,
      ficaTaxIncrease,
      totalTaxIncrease,
      netRaiseAmount,
      effectiveTaxRate,
      monthlyGrossIncrease,
      monthlyTaxIncrease,
      monthlyNetIncrease,
      stateInfo: stateTaxRates[state],
      takeHomePercentage: (netRaiseAmount / raiseAmount) * 100
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Pay Raise Tax Impact Calculator",
    "description": "Calculate how federal and state taxes affect your net salary increase. See your real take-home pay after a raise.",
    "url": "https://payraisepercentagecalculator.com/tools/pay-raise-tax-impact-calculator",
    "applicationCategory": "FinanceApplication"
  };

  return (
    <>
      <SEOHead
        title="Pay Raise Tax Impact Calculator - Net Take-Home Pay Analysis"
        description="Calculate how federal and state taxes affect your salary increase. See your real take-home pay after taxes on your raise."
        canonical="/tools/pay-raise-tax-impact-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Pay Raise Tax Impact Calculator
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                See how federal and state taxes affect your net salary increase
              </p>
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-100 rounded-lg">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 text-sm">
                  Based on 2025 tax brackets and rates
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="mr-2 h-5 w-5 text-primary" />
                    Tax Calculation Inputs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="currentSalary">Current Annual Salary</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <Input
                        id="currentSalary"
                        type="text"
                        className="pl-8"
                        value={currentSalary.toLocaleString()}
                        onChange={(e) => setCurrentSalary(parseFloat(e.target.value.replace(/[^\d.]/g, '')) || 0)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="raisePercentage">Raise Percentage</Label>
                    <div className="relative mt-2">
                      <Input
                        id="raisePercentage"
                        type="number"
                        step="0.1"
                        className="pr-8"
                        value={raisePercentage}
                        onChange={(e) => setRaisePercentage(parseFloat(e.target.value) || 0)}
                      />
                      <span className="absolute right-3 top-3 text-gray-500">%</span>
                    </div>
                  </div>

                  <div>
                    <Label>Filing Status</Label>
                    <Select value={filingStatus} onValueChange={setFilingStatus}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="marriedJoint">Married Filing Jointly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>State</Label>
                    <Select value={state} onValueChange={setState}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(stateTaxRates).map(([key, data]) => (
                          <SelectItem key={key} value={key}>
                            {data.name} ({data.rate}%)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="includeStateLocal"
                      checked={includeStateLocal}
                      onCheckedChange={setIncludeStateLocal}
                    />
                    <Label htmlFor="includeStateLocal" className="text-sm">
                      Include state and local taxes
                    </Label>
                  </div>

                  {/* Tax Information */}
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-yellow-900 mb-2">Tax Components</h4>
                      <div className="text-sm text-yellow-800 space-y-1">
                        <p>• Federal income tax (progressive brackets)</p>
                        <p>• Social Security tax (6.2% up to $160,200)</p>
                        <p>• Medicare tax (1.45% on all income)</p>
                        {includeStateLocal && (
                          <p>• State income tax ({stateTaxRates[state]?.rate || 0}%)</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-success" />
                    Tax Impact Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {results && (
                    <div className="space-y-6">
                      {/* Main Result */}
                      <Card className="gradient-secondary text-white result-glow">
                        <CardContent className="p-6 text-center">
                          <div className="text-sm opacity-90 mb-1">Net Take-Home Increase</div>
                          <div className="text-4xl font-bold">
                            {PayRaiseCalculator.formatCurrency(results.netRaiseAmount)}
                          </div>
                          <div className="text-sm opacity-90 mt-2">
                            {PayRaiseCalculator.formatPercentage(results.takeHomePercentage)} of gross increase
                          </div>
                        </CardContent>
                      </Card>

                      {/* Tax Breakdown */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          Tax Breakdown
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-gray-900">Gross Raise</span>
                              <span className="font-bold text-green-600">
                                {PayRaiseCalculator.formatCurrency(results.raiseAmount)}
                              </span>
                            </div>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Federal income tax:</span>
                                <span className="text-red-600">
                                  -{PayRaiseCalculator.formatCurrency(results.federalTaxIncrease)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">FICA taxes (SS + Medicare):</span>
                                <span className="text-red-600">
                                  -{PayRaiseCalculator.formatCurrency(results.ficaTaxIncrease)}
                                </span>
                              </div>
                              {results.stateTaxIncrease > 0 && (
                                <div className="flex justify-between">
                                  <span className="text-gray-600">State income tax:</span>
                                  <span className="text-red-600">
                                    -{PayRaiseCalculator.formatCurrency(results.stateTaxIncrease)}
                                  </span>
                                </div>
                              )}
                              <hr className="border-gray-300" />
                              <div className="flex justify-between font-semibold">
                                <span>Total taxes:</span>
                                <span className="text-red-600">
                                  -{PayRaiseCalculator.formatCurrency(results.totalTaxIncrease)}
                                </span>
                              </div>
                              <div className="flex justify-between font-bold text-lg">
                                <span>Net increase:</span>
                                <span className="text-green-600">
                                  {PayRaiseCalculator.formatCurrency(results.netRaiseAmount)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Monthly Impact */}
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium text-blue-900 mb-2">Monthly Impact</h5>
                          <div className="space-y-1 text-sm text-blue-800">
                            <div className="flex justify-between">
                              <span>Gross monthly increase:</span>
                              <span className="font-medium">
                                {PayRaiseCalculator.formatCurrency(results.monthlyGrossIncrease)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Monthly taxes:</span>
                              <span className="font-medium text-red-600">
                                -{PayRaiseCalculator.formatCurrency(results.monthlyTaxIncrease)}
                              </span>
                            </div>
                            <div className="flex justify-between font-semibold">
                              <span>Net monthly increase:</span>
                              <span className="text-green-600">
                                {PayRaiseCalculator.formatCurrency(results.monthlyNetIncrease)}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Effective Tax Rate */}
                      <Card className="bg-yellow-50 border-yellow-200">
                        <CardContent className="p-4 text-center">
                          <h5 className="font-medium text-yellow-900 mb-2">Effective Tax Rate on Raise</h5>
                          <div className="text-3xl font-bold text-yellow-800">
                            {PayRaiseCalculator.formatPercentage(results.effectiveTaxRate)}
                          </div>
                          <p className="text-sm text-yellow-700 mt-1">
                            This is the percentage of your raise that goes to taxes
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Tax Impact on Raises
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Why Taxes Matter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-gray-600 text-sm">
                    <p>
                      When you receive a raise, you don't keep 100% of the increase. 
                      Various taxes are deducted from your additional income.
                    </p>
                    <p>
                      <strong>Marginal Tax Rate:</strong> Your raise is taxed at your highest tax bracket, 
                      not your average rate. This is why the tax impact can seem high.
                    </p>
                    <p>
                      <strong>FICA Taxes:</strong> Social Security and Medicare taxes are flat rates 
                      applied to your additional income (with Social Security capping at $160,200).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Planning Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <DollarSign className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Factor tax impact when negotiating salary increases</span>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Consider maximizing 401(k) contributions to reduce taxable income</span>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Explore other pre-tax benefits like health savings accounts</span>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>State taxes vary significantly - consider this for remote work</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-red-50 border-red-200">
              <CardContent className="p-4">
                <h4 className="font-medium text-red-900 mb-2 flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Important Disclaimer
                </h4>
                <p className="text-sm text-red-800">
                  This calculator provides estimates based on 2025 tax brackets and standard deductions. 
                  Actual tax liability may vary based on deductions, credits, and other factors. 
                  Consult a tax professional for personalized advice.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
