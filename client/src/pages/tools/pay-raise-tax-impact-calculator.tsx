import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { PayRaiseCalculator } from "@/lib/calculator";
import { TaxImpactChart } from "@/components/calculator-svgs/tax-impact-chart";
import { Link } from "wouter";
import { FileText, Calculator, DollarSign, AlertCircle, TrendingUp, ExternalLink, ArrowRight, Target, PiggyBank, Shield, CheckCircle2, BookOpen } from "lucide-react";

import { BreadcrumbNavigation } from "@/components/seo/breadcrumb-navigation";
import { TaxBracketChart } from "@/components/infographics/tax-bracket-chart";

export default function PayRaiseTaxImpactCalculator() {
  const [currentSalary, setCurrentSalary] = useState(75000);
  const [raisePercentage, setRaisePercentage] = useState(5);
  const [filingStatus, setFilingStatus] = useState("single");
  const [state, setState] = useState("no-state-tax");
  const [includeStateLocal, setIncludeStateLocal] = useState(true);
  const [results, setResults] = useState<any>(null);

  // Federal tax brackets for 2025 (simplified)
  const federalTaxBrackets: Record<string, Array<{ min: number, max: number, rate: number }>> = {
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

  const stateTaxRates: Record<string, { name: string, rate: number }> = {
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
        <BreadcrumbNavigation
          items={[
            { name: "Tools", url: "/tools" },
            { name: "Tax Impact Calculator", url: "/tools/pay-raise-tax-impact-calculator" }
          ]}
        />
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

              <div className="mt-10 relative">
                <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-20 transform rotate-3 rounded-full"></div>
                <img
                  src="/images/calculators/tax-impact-hero.png"
                  alt="Tax forms and calculator showing gross vs net salary comparison"
                  className="relative rounded-xl shadow-2xl border-4 border-white mx-auto w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              How to Calculate Your Net Pay Increase
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Input Salary Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Enter your current annual salary and the percentage increase of your raise or promotion.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Select Tax Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Choose your filing status and state to apply the correct 2025 tax brackets and rates.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">View Net Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">See exactly how much of your raise you keep after Federal, State, and FICA taxes are deducted.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-8 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-50 rounded-lg p-6 flex flex-col md:flex-row items-start gap-4">
              <BookOpen className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Tax Calculation Methodology</h3>
                <p className="text-yellow-800 text-sm leading-relaxed">
                  We calculate tax liability based on the <strong>2025 Federal Tax Brackets</strong> and current state income tax rates.
                  FICA taxes are calculated at 6.2% for Social Security (up to the wage base limit of $160,200) and 1.45% for Medicare (with no limit).
                  Calculations assume the standard deduction for the selected filing status.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <TaxBracketChart />
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
                      onCheckedChange={(checked) => setIncludeStateLocal(checked === true)}
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
                      {/* Interactive Tax Visualization */}
                      <TaxImpactChart
                        grossRaise={results.raiseAmount}
                        netRaise={results.netRaiseAmount}
                        taxAmount={results.totalTaxIncrease}
                        effectiveTaxRate={results.effectiveTaxRate}
                      />

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
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Tools Section */}
        <section className="py-12 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Tax & Financial Calculators</h2>
              <p className="text-lg text-gray-600">Maximize your financial planning with these essential tools</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/tools/raise-after-deductions-calculator">
                <Card className="cursor-pointer card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="font-semibold text-gray-900">After Deductions Calculator</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      See your net raise after taxes, 401(k), health insurance, and other deductions.
                    </p>
                    <Badge variant="secondary" className="text-xs">Complete Take-Home</Badge>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/tools/raise-impact-retirement-savings-calculator">
                <Card className="cursor-pointer card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <PiggyBank className="w-8 h-8 text-purple-600 mr-3" />
                      <h3 className="font-semibold text-gray-900">Retirement Impact Calculator</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Calculate how your raise affects 401(k) contributions and long-term retirement savings.
                    </p>
                    <Badge variant="secondary" className="text-xs">Future Planning</Badge>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/tools/state-wise-raise-calculator">
                <Card className="cursor-pointer card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Target className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="font-semibold text-gray-900">State-Wise Calculator</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Compare take-home pay across different states considering local tax variations.
                    </p>
                    <Badge variant="secondary" className="text-xs">Location Analysis</Badge>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link href="/tools">
                <Button className="btn-primary-gradient">
                  View All Financial Calculators
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}