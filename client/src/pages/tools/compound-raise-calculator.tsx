import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import { PayRaiseCalculator } from "@/lib/calculator";
import { TrendingUp, Calculator, BarChart3 } from "lucide-react";

export default function CompoundRaiseCalculator() {
  const [currentSalary, setCurrentSalary] = useState(60000);
  const [annualRaise, setAnnualRaise] = useState(5);
  const [years, setYears] = useState(5);
  const [projections, setProjections] = useState<any[]>([]);

  useEffect(() => {
    calculateProjections();
  }, [currentSalary, annualRaise, years]);

  const calculateProjections = () => {
    const results = [];
    let salary = currentSalary;
    
    for (let year = 1; year <= years; year++) {
      const newSalary = salary * (1 + annualRaise / 100);
      const yearlyIncrease = newSalary - salary;
      const totalIncrease = newSalary - currentSalary;
      
      results.push({
        year,
        salary: newSalary,
        yearlyIncrease,
        totalIncrease,
        cumulativePercent: ((newSalary - currentSalary) / currentSalary) * 100
      });
      
      salary = newSalary;
    }
    
    setProjections(results);
  };

  const totalGrowth = projections.length > 0 
    ? projections[projections.length - 1].totalIncrease 
    : 0;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Compound Raise Calculator",
    "description": "Calculate compound salary growth over multiple years. See how annual raises compound over time.",
    "url": "https://payraisepercentagecalculator.com/tools/compound-raise-calculator",
    "applicationCategory": "FinanceApplication"
  };

  return (
    <>
      <SEOHead
        title="Compound Raise Calculator - Multi-Year Salary Growth Projections"
        description="Calculate how annual raises compound over time. Project your salary growth over 5-10 years with our compound raise calculator. Free and accurate."
        canonical="/tools/compound-raise-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Multi-Year Salary Projections
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                Compound Raise Calculator
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the powerful impact of consistent annual raises over time. Calculate how compound 
                salary increases can dramatically boost your long-term earning potential and career growth.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use Guide */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Use This Calculator: Step-by-Step Guide
              </h2>
              <p className="text-lg text-gray-600">
                Follow these simple steps to project your multi-year salary growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Enter Current Salary</h3>
                <p className="text-gray-600 text-sm">
                  Input your current annual salary in the first field. This serves as your starting point 
                  for all projections. Include only base salary, not bonuses or benefits.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Set Annual Raise %</h3>
                <p className="text-gray-600 text-sm">
                  Enter your expected annual raise percentage. Use industry averages (3-5%) or your 
                  company's historical data. This rate compounds each year.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Choose Time Period</h3>
                <p className="text-gray-600 text-sm">
                  Select how many years to project (1-10 years recommended). The calculator shows 
                  year-by-year growth and cumulative increases.
                </p>
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
                    Calculation Inputs
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
                    <Label htmlFor="annualRaise">Annual Raise Percentage</Label>
                    <div className="relative mt-2">
                      <Input
                        id="annualRaise"
                        type="number"
                        step="0.1"
                        className="pr-8"
                        value={annualRaise}
                        onChange={(e) => setAnnualRaise(parseFloat(e.target.value) || 0)}
                      />
                      <span className="absolute right-3 top-3 text-gray-500">%</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="years">Number of Years</Label>
                    <Input
                      id="years"
                      type="number"
                      min="1"
                      max="20"
                      className="mt-2"
                      value={years}
                      onChange={(e) => setYears(parseInt(e.target.value) || 5)}
                    />
                  </div>

                  {/* Summary Card */}
                  <Card className="bg-primary text-white">
                    <CardContent className="p-4 text-center">
                      <div className="text-sm opacity-90">Total Growth After {years} Years</div>
                      <div className="text-2xl font-bold">
                        {PayRaiseCalculator.formatCurrency(totalGrowth)}
                      </div>
                      <div className="text-sm opacity-90">
                        {projections.length > 0 && 
                          `Final Salary: ${PayRaiseCalculator.formatCurrency(projections[projections.length - 1].salary)}`
                        }
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-success" />
                    Year-by-Year Projections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {projections.map((projection) => (
                      <div 
                        key={projection.year}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <div className="font-semibold text-gray-900">Year {projection.year}</div>
                          <div className="text-sm text-gray-600">
                            +{PayRaiseCalculator.formatCurrency(projection.yearlyIncrease)} this year
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">
                            {PayRaiseCalculator.formatCurrency(projection.salary)}
                          </div>
                          <div className="text-sm text-success">
                            +{PayRaiseCalculator.formatPercentage(projection.cumulativePercent)} total
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Analysis Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Compound Growth
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                    The Power of Compounding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Compound raises mean each year's increase is calculated on the new, higher salary. 
                    This creates exponential growth over time.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Simple raises ({annualRaise}% of original):</span>
                      <span className="font-medium">
                        {PayRaiseCalculator.formatCurrency(currentSalary * (annualRaise / 100) * years)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Compound raises:</span>
                      <span className="font-medium text-success">
                        {PayRaiseCalculator.formatCurrency(totalGrowth)}
                      </span>
                    </div>
                    <div className="flex justify-between font-semibold text-primary">
                      <span>Difference:</span>
                      <span>
                        {PayRaiseCalculator.formatCurrency(totalGrowth - (currentSalary * (annualRaise / 100) * years))}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-success mr-2">•</span>
                      Even small annual raises compound significantly over time
                    </li>
                    <li className="flex items-start">
                      <span className="text-success mr-2">•</span>
                      A {annualRaise}% annual raise doubles your increase impact over {years} years
                    </li>
                    <li className="flex items-start">
                      <span className="text-success mr-2">•</span>
                      Consistent raises are more valuable than sporadic large increases
                    </li>
                    <li className="flex items-start">
                      <span className="text-success mr-2">•</span>
                      Early career raises have the biggest long-term impact
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
