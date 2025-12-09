import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo/head";
import {
  Gift,
  TrendingUp,
  Calculator,
  DollarSign,
  Target,
  BarChart3,
  PieChart,
  Calendar
} from "lucide-react";

export default function BonusImpactCalculator() {
  const [currentSalary, setCurrentSalary] = useState<string>("");
  const [bonusAmount, setBonusAmount] = useState<string>("");
  const [bonusType, setBonusType] = useState<string>("annual");
  const [taxRate, setTaxRate] = useState<string>("25");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Bonus Impact Calculator",
    "description": "Calculate the impact of bonuses on your total compensation. Analyze annual bonus effects, tax implications, and equivalent salary increases.",
    "url": "https://payraisepercentagecalculator.com/tools/bonus-impact-calculator",
    "applicationCategory": "FinanceApplication"
  };

  const calculateBonusImpact = () => {
    const salary = parseFloat(currentSalary) || 0;
    const bonus = parseFloat(bonusAmount) || 0;
    const tax = parseFloat(taxRate) || 0;

    if (salary === 0 || bonus === 0) return null;

    const grossBonus = bonusType === "quarterly" ? bonus * 4 :
      bonusType === "monthly" ? bonus * 12 : bonus;

    const bonusTax = grossBonus * (tax / 100);
    const netBonus = grossBonus - bonusTax;
    const totalCompensation = salary + grossBonus;
    const netTotalCompensation = salary + netBonus;
    const compensationIncrease = ((totalCompensation - salary) / salary) * 100;
    const netCompensationIncrease = ((netTotalCompensation - salary) / salary) * 100;
    const equivalentRaise = (grossBonus / salary) * 100;

    return {
      grossBonus,
      netBonus,
      bonusTax,
      totalCompensation,
      netTotalCompensation,
      compensationIncrease,
      netCompensationIncrease,
      equivalentRaise
    };
  };

  const results = calculateBonusImpact();

  const bonusScenarios = [
    {
      scenario: "Performance Bonus",
      typical: "5-15% of salary",
      frequency: "Annual",
      description: "Merit-based bonus tied to individual or company performance"
    },
    {
      scenario: "Sign-On Bonus",
      typical: "$5,000-$50,000",
      frequency: "One-time",
      description: "Recruitment incentive for new hires"
    },
    {
      scenario: "Retention Bonus",
      typical: "10-25% of salary",
      frequency: "Annual or milestone",
      description: "Incentive to retain key employees"
    },
    {
      scenario: "Sales Commission",
      typical: "2-20% of sales",
      frequency: "Quarterly/Annual",
      description: "Performance-based compensation for sales roles"
    }
  ];

  return (
    <>
      <SEOHead
        title="Bonus Impact Calculator 2025: Total Compensation Analysis | Free Tool"
        description="Calculate the impact of bonuses on your total compensation. Analyze annual bonus effects, tax implications, and equivalent salary increases with detailed projections."
        canonical="/tools/bonus-impact-calculator"
        keywords="bonus impact calculator, total compensation, bonus tax calculator, performance bonus, annual bonus analysis, salary vs bonus"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                  <Gift className="w-4 h-4 mr-2" />
                  Total Compensation Analysis
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                Bonus Impact Calculator
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Analyze how bonuses affect your total compensation. Calculate tax implications,
                equivalent salary increases, and long-term value of performance bonuses.
              </p>

              <div className="mt-10 relative">
                <div className="absolute inset-0 bg-green-200 blur-3xl opacity-20 transform -rotate-3 rounded-full"></div>
                <img
                  src="/images/calculators/bonus-impact-hero.png"
                  alt="Bonus check and golden coins representing financial rewards"
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

        {/* How to Use Guide */}
        <section className="py-12 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Calculate Bonus Impact: Step-by-Step Guide
              </h2>
              <p className="text-lg text-gray-600">
                Understand the true value of your bonus compensation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Enter Base Salary</h3>
                <p className="text-gray-600 text-sm">
                  Input your current annual base salary excluding any bonuses
                  or additional compensation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Bonus Details</h3>
                <p className="text-gray-600 text-sm">
                  Enter your bonus amount and select frequency (annual,
                  quarterly, monthly).
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Tax Rate</h3>
                <p className="text-gray-600 text-sm">
                  Set your tax rate. Bonuses are often taxed at higher rates
                  than regular salary.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Analyze Results</h3>
                <p className="text-gray-600 text-sm">
                  View total compensation impact and equivalent salary
                  increase analysis.
                </p>
              </div>
            </div>

            {/* Bonus Types Guide */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Understanding Different Bonus Types</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Performance-Based Bonuses</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Annual Performance:</strong> 5-15% of salary based on individual performance</li>
                    <li>• <strong>Company Performance:</strong> 3-10% based on company financial results</li>
                    <li>• <strong>Sales Commission:</strong> 2-20% of sales revenue (sales roles)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Special Bonuses</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Sign-On Bonus:</strong> $5K-$50K one-time recruitment incentive</li>
                    <li>• <strong>Retention Bonus:</strong> 10-25% of salary to retain key employees</li>
                    <li>• <strong>Referral Bonus:</strong> $1K-$10K for successful employee referrals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">
                  Bonus Impact Calculator
                </CardTitle>
                <p className="text-center text-gray-600">
                  Analyze the impact of bonuses on your total compensation
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
                        placeholder="e.g. 75000"
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="bonusAmount">Bonus Amount</Label>
                      <Input
                        id="bonusAmount"
                        type="number"
                        placeholder="e.g. 10000"
                        value={bonusAmount}
                        onChange={(e) => setBonusAmount(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="bonusType">Bonus Frequency</Label>
                      <Select value={bonusType} onValueChange={setBonusType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="annual">Annual</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="taxRate">Tax Rate (%)</Label>
                      <Input
                        id="taxRate"
                        type="number"
                        placeholder="e.g. 25"
                        value={taxRate}
                        onChange={(e) => setTaxRate(e.target.value)}
                      />
                    </div>
                  </div>

                  {results && (
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                        Bonus Impact Analysis
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Annual Bonus (Gross):</span>
                          <span className="font-semibold">${results.grossBonus.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Bonus Tax:</span>
                          <span className="text-red-600">-${results.bonusTax.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Net Bonus:</span>
                          <span className="font-semibold text-green-600">${results.netBonus.toLocaleString()}</span>
                        </div>
                        <div className="border-t border-gray-300 pt-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Total Compensation:</span>
                            <span className="font-semibold">${results.totalCompensation.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Compensation Increase:</span>
                            <span className="font-semibold text-primary">{results.compensationIncrease.toFixed(1)}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Equivalent Salary Raise:</span>
                            <span className="font-semibold text-secondary">{results.equivalentRaise.toFixed(1)}%</span>
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

        {/* Bonus Scenarios */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Bonus Scenarios
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {bonusScenarios.map((scenario, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Target className="mr-2 h-5 w-5" />
                      {scenario.scenario}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Typical Amount:</span>
                        <span className="font-medium">{scenario.typical}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Frequency:</span>
                        <Badge variant="outline">{scenario.frequency}</Badge>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Description:</span>
                        <p className="text-sm text-gray-700 mt-1">{scenario.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis Features */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comprehensive Bonus Analysis
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="calculator-shadow text-center">
                <CardContent className="p-6">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Tax Impact</h3>
                  <p className="text-sm text-gray-600">
                    Calculate federal and state tax implications of bonus payments
                  </p>
                </CardContent>
              </Card>

              <Card className="calculator-shadow text-center">
                <CardContent className="p-6">
                  <PieChart className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Total Compensation</h3>
                  <p className="text-sm text-gray-600">
                    Understand how bonuses affect your overall compensation package
                  </p>
                </CardContent>
              </Card>

              <Card className="calculator-shadow text-center">
                <CardContent className="p-6">
                  <Calendar className="h-12 w-12 text-success mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Frequency Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Compare annual, quarterly, and monthly bonus structures
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bonus vs Raise Comparison */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Bonus vs Salary Raise: Key Differences
            </h2>

            <Card className="calculator-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Gift className="mr-2 h-5 w-5 text-primary" />
                      Bonus Benefits
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Immediate lump sum payment</li>
                      <li>• Performance-based incentive</li>
                      <li>• Flexible for company budgeting</li>
                      <li>• Can be larger than typical raises</li>
                      <li>• Tied to specific achievements</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                      Salary Raise Benefits
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Permanent increase to base pay</li>
                      <li>• Compounds over time</li>
                      <li>• Affects benefits calculations</li>
                      <li>• More predictable income</li>
                      <li>• Builds long-term wealth</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategic Considerations */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Bonus Planning</h2>
                <p className="text-gray-600 mb-6">
                  Understanding bonus structures helps in negotiating total compensation packages
                  and making informed career decisions about base salary versus variable pay.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold text-primary">Tax Planning</div>
                    <div className="text-gray-600">Consider timing for tax optimization</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Risk Assessment</div>
                    <div className="text-gray-600">Evaluate performance requirements</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Long-term Impact</div>
                    <div className="text-gray-600">Compare with permanent raises</div>
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