import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { PayRaiseCalculator } from "@/lib/calculator";
import { CompoundGrowthChart } from "@/components/calculator-svgs/compound-growth-chart";
import { Link } from "wouter";
import { TrendingUp, Calculator, BarChart3, ExternalLink, ArrowRight, DollarSign, Target, PiggyBank, Clock } from "lucide-react";

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
    "@type": ["WebApplication", "Calculator"],
    "name": "Compound Raise Calculator 2025 - Multi-Year Salary Growth",
    "description": "Calculate compound salary growth over multiple years. See how annual percentage raises compound over time with detailed year-by-year projections.",
    "url": "https://payraisepercentagecalculator.com/tools/compound-raise-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Multi-year salary projections",
      "Compound growth calculations",
      "Year-by-year breakdowns",
      "Total career growth analysis"
    ]
  };

  return (
    <>
      <SEOHead
        title="Compound Raise Calculator 2025 - Multi-Year Salary Growth Projections"
        description="Calculate compound salary growth over multiple years. See how annual percentage raises compound over time with detailed year-by-year projections and career growth analysis."
        canonical="/tools/compound-raise-calculator"
        keywords="compound raise calculator, multi year salary growth, annual raise projections, salary compound interest, career growth calculator"
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
                    Growth Visualization & Projections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {projections.length > 0 && (
                    <div className="space-y-6">
                      {/* Interactive Growth Chart */}
                      <CompoundGrowthChart 
                        projections={projections}
                        currentSalary={currentSalary}
                      />
                      
                      {/* Year-by-Year Breakdown */}
                      <div className="space-y-3 max-h-80 overflow-y-auto">
                        {projections.map((projection) => (
                          <div 
                            key={projection.year}
                            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
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
                    </div>
                  )}
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

        {/* Related Tools Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Calculators & Resources</h2>
              <p className="text-lg text-gray-600">Explore these tools to get a complete picture of your salary growth</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/tools/inflation-adjusted-raise-calculator">
                <Card className="cursor-pointer card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
                      <h3 className="font-semibold text-gray-900">Inflation-Adjusted Calculator</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      See how inflation affects your real purchasing power over time with compound raises.
                    </p>
                    <Badge variant="secondary" className="text-xs">Real Value Analysis</Badge>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/tools/pay-raise-tax-impact-calculator">
                <Card className="cursor-pointer card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Calculator className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="font-semibold text-gray-900">Tax Impact Calculator</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Calculate after-tax value of your compound raises and understand net take-home growth.
                    </p>
                    <Badge variant="secondary" className="text-xs">Net Income Focus</Badge>
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
                      See how compound raises boost your 401(k) contributions and retirement savings.
                    </p>
                    <Badge variant="secondary" className="text-xs">Long-term Planning</Badge>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link href="/tools">
                <Button className="btn-primary-gradient">
                  View All Calculators
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Compound Raise Strategy Guide
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="mr-2 h-5 w-5 text-primary" />
                  Maximizing Your Compound Growth
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <strong>Negotiate Early:</strong> Small raises compound over decades - fight for every percentage point early in your career
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <strong>Annual Reviews:</strong> Don't skip yearly performance reviews - they're your compound growth opportunities
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <strong>Industry Research:</strong> Know your market rate to ensure raises keep pace with industry standards
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <Link href="/guides/negotiating-salary-increase-strategies">
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Read Negotiation Strategies Guide
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-success" />
                  When to Use This Calculator
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-success mr-2">•</span>
                    <div>
                      <strong>Career Planning:</strong> Project long-term earning potential when choosing between jobs or career paths
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">•</span>
                    <div>
                      <strong>Retirement Planning:</strong> Understand how consistent raises impact your lifetime earnings
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">•</span>
                    <div>
                      <strong>Goal Setting:</strong> Visualize the impact of maintaining regular salary growth
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <a 
                    href="https://www.bls.gov/news.release/realer.nr0.htm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      View BLS Earnings Data
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
