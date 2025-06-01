import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { BreadcrumbNavigation, BreadcrumbPatterns } from "@/components/seo/breadcrumb-navigation";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { 
  Calculator, 
  TrendingUp, 
  PiggyBank, 
  Target,
  Clock,
  DollarSign,
  ArrowRight,
  Info,
  AlertTriangle
} from "lucide-react";

interface RetirementCalculationInput {
  currentSalary: number;
  raisePercentage: number;
  investmentPercentage: number;
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  expectedReturn: number;
}

interface RetirementResults {
  raiseAmount: number;
  annualInvestment: number;
  yearsToRetirement: number;
  additionalSavings: number;
  totalProjectedSavings: number;
  monthlyInvestment: number;
}

export default function RaiseImpactRetirementSavingsCalculator() {
  const [inputs, setInputs] = useState<RetirementCalculationInput>({
    currentSalary: 75000,
    raisePercentage: 5,
    investmentPercentage: 50,
    currentAge: 30,
    retirementAge: 65,
    currentSavings: 25000,
    expectedReturn: 7
  });

  const calculateRetirementImpact = (): RetirementResults => {
    const raiseAmount = inputs.currentSalary * (inputs.raisePercentage / 100);
    const annualInvestment = raiseAmount * (inputs.investmentPercentage / 100);
    const yearsToRetirement = inputs.retirementAge - inputs.currentAge;
    const monthlyInvestment = annualInvestment / 12;
    
    // Calculate future value of additional investments
    const monthlyRate = inputs.expectedReturn / 100 / 12;
    const totalPayments = yearsToRetirement * 12;
    
    // Future value of annuity formula
    const additionalSavings = monthlyInvestment * 
      ((Math.pow(1 + monthlyRate, totalPayments) - 1) / monthlyRate);
    
    // Future value of current savings
    const currentSavingsFuture = inputs.currentSavings * 
      Math.pow(1 + inputs.expectedReturn / 100, yearsToRetirement);
    
    const totalProjectedSavings = currentSavingsFuture + additionalSavings;

    return {
      raiseAmount,
      annualInvestment,
      yearsToRetirement,
      additionalSavings,
      totalProjectedSavings,
      monthlyInvestment
    };
  };

  const results = calculateRetirementImpact();

  const updateInput = (field: keyof RetirementCalculationInput, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: Number(value) || 0
    }));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Retirement Boost Calculator",
    "description": "Calculate how your pay raise impacts your future retirement savings. See the long-term financial benefits of investing salary increases with compound growth projections.",
    "url": "https://payraisepercentagecalculator.com/tools/raise-impact-retirement-savings-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Compound growth calculations",
      "Visual retirement projections",
      "Multiple investment scenarios",
      "Annual contribution planning",
      "Long-term wealth building analysis"
    ]
  };

  return (
    <>
      <SEOHead
        title="Retirement Boost: See How Your Raise Impacts Your Future Savings"
        description="Calculate how your pay raise impacts your future retirement savings. See the long-term financial benefits of investing salary increases with compound growth projections."
        canonical="/tools/raise-impact-retirement-savings-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <BreadcrumbNavigation 
            items={BreadcrumbPatterns.tool("Retirement Impact Calculator")}
            className="mb-6"
          />

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <PiggyBank className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">
                Retirement Boost Calculator
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl">
              See how your pay raise impacts your future savings. Discover the long-term power of investing 
              even a portion of your salary increase with compound growth over time.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Input Section */}
            <div className="lg:col-span-1">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                    Input Your Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentSalary">Current Annual Salary</Label>
                    <Input
                      id="currentSalary"
                      type="number"
                      value={inputs.currentSalary}
                      onChange={(e) => updateInput('currentSalary', e.target.value)}
                      placeholder="75000"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="raisePercentage">Pay Raise Percentage</Label>
                    <Input
                      id="raisePercentage"
                      type="number"
                      value={inputs.raisePercentage}
                      onChange={(e) => updateInput('raisePercentage', e.target.value)}
                      placeholder="5"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="investmentPercentage">% of Raise to Invest</Label>
                    <Input
                      id="investmentPercentage"
                      type="number"
                      value={inputs.investmentPercentage}
                      onChange={(e) => updateInput('investmentPercentage', e.target.value)}
                      placeholder="50"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="currentAge">Current Age</Label>
                      <Input
                        id="currentAge"
                        type="number"
                        value={inputs.currentAge}
                        onChange={(e) => updateInput('currentAge', e.target.value)}
                        placeholder="30"
                      />
                    </div>
                    <div>
                      <Label htmlFor="retirementAge">Retirement Age</Label>
                      <Input
                        id="retirementAge"
                        type="number"
                        value={inputs.retirementAge}
                        onChange={(e) => updateInput('retirementAge', e.target.value)}
                        placeholder="65"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="currentSavings">Current Retirement Savings</Label>
                    <Input
                      id="currentSavings"
                      type="number"
                      value={inputs.currentSavings}
                      onChange={(e) => updateInput('currentSavings', e.target.value)}
                      placeholder="25000"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
                    <Input
                      id="expectedReturn"
                      type="number"
                      step="0.1"
                      value={inputs.expectedReturn}
                      onChange={(e) => updateInput('expectedReturn', e.target.value)}
                      placeholder="7"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2">
              <Card className="calculator-shadow border-2 border-primary">
                <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-white">
                  <CardTitle className="text-2xl flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2" />
                    Your Retirement Boost Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Key Metrics */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        ${results.raiseAmount.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Annual Raise</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        ${results.monthlyInvestment.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Monthly Investment</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {results.yearsToRetirement}
                      </div>
                      <div className="text-sm text-gray-600">Years to Retirement</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {inputs.expectedReturn}%
                      </div>
                      <div className="text-sm text-gray-600">Expected Return</div>
                    </div>
                  </div>

                  {/* Main Results */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Projected Retirement Impact</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Additional savings from raise investment:</span>
                        <span className="text-2xl font-bold text-green-600">
                          ${results.additionalSavings.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Total projected retirement savings:</span>
                        <span className="text-3xl font-bold text-blue-600">
                          ${results.totalProjectedSavings.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-l-green-500">
                        <p className="text-sm text-green-800">
                          <strong>Impact:</strong> By investing {inputs.investmentPercentage}% of your 
                          ${results.raiseAmount.toLocaleString()} raise, you could add 
                          <strong> ${results.additionalSavings.toLocaleString()}</strong> to your retirement 
                          over {results.yearsToRetirement} years.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Investment Breakdown */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Monthly Investment</h4>
                      <div className="text-2xl font-bold text-blue-600">
                        ${results.monthlyInvestment.toLocaleString()}
                      </div>
                      <p className="text-sm text-blue-700 mt-1">
                        From {inputs.investmentPercentage}% of your raise
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Annual Investment</h4>
                      <div className="text-2xl font-bold text-green-600">
                        ${results.annualInvestment.toLocaleString()}
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        Total yearly contribution
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Educational Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 text-blue-600 mr-2" />
                  Understanding the Assumptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Rate of Return</h4>
                    <p className="text-sm text-gray-600">
                      The 7% default assumes a diversified portfolio with historical market averages. 
                      Actual returns will vary yearly and may be higher or lower.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Compound Growth Power</h4>
                    <p className="text-sm text-gray-600">
                      Time and consistency are key. Starting earlier and investing regularly, 
                      even small amounts, can lead to significant long-term growth.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Inflation Impact</h4>
                    <p className="text-sm text-gray-600">
                      These calculations don't account for inflation. In real purchasing power, 
                      your future dollars will be worth less than today's dollars.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-green-600 mr-2" />
                  Maximizing Your Retirement Contributions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Employer Match Priority</h4>
                    <p className="text-sm text-gray-600">
                      Always contribute enough to get full employer 401(k) matching. 
                      It's free money with an immediate 100% return.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Catch-Up Contributions</h4>
                    <p className="text-sm text-gray-600">
                      If you're 50 or older, you can contribute additional amounts to 401(k)s and IRAs 
                      beyond standard limits.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Account Types</h4>
                    <p className="text-sm text-gray-600">
                      Consider tax-advantaged accounts like 401(k), Traditional IRA, Roth IRA, 
                      and HSA for different tax benefits and withdrawal rules.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm text-yellow-800">
                          <strong>2025 Contribution Limits:</strong> 401(k) limit is $23,000 
                          ($30,500 if 50+). IRA limit is $7,000 ($8,000 if 50+).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Resources */}
          <section className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Calculators</h4>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/" className="block text-blue-600 hover:text-blue-700">
                    Calculate your raise amount
                  </InternalLink>
                  <InternalLink href="/tools/compound-raise-calculator" className="block text-blue-600 hover:text-blue-700">
                    Multi-year raise projections
                  </InternalLink>
                  <InternalLink href="/tools/pay-raise-tax-impact-calculator" className="block text-blue-600 hover:text-blue-700">
                    Tax impact on raises
                  </InternalLink>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Financial Planning</h4>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/guides/budgeting-your-money-after-a-pay-raise" className="block text-blue-600 hover:text-blue-700">
                    Budgeting after a raise
                  </InternalLink>
                  <InternalLink href="/blog/3-vs-5-percent-raise-long-term-impact" className="block text-blue-600 hover:text-blue-700">
                    Long-term impact analysis
                  </InternalLink>
                  <InternalLink href="/blog/why-your-raise-feels-smaller-this-year" className="block text-blue-600 hover:text-blue-700">
                    Understanding real raise value
                  </InternalLink>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Authority Sources</h4>
                <div className="space-y-2 text-sm">
                  <a 
                    href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    IRS 401(k) contribution limits →
                  </a>
                  <a 
                    href="https://www.dol.gov/general/topic/retirement" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    Department of Labor retirement →
                  </a>
                  <a 
                    href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    SEC investment basics →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}