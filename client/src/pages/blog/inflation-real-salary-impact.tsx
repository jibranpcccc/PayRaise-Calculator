import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  TrendingUp, 
  TrendingDown, 
  Calculator, 
  BarChart3, 
  DollarSign, 
  ShoppingCart, 
  Home, 
  Car,
  Briefcase,
  AlertTriangle,
  CheckCircle,
  Target
} from "lucide-react";

export default function InflationRealSalaryImpact() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const inflationData = [
    {
      year: "2025",
      cpiRate: 3.1,
      description: "Current rate based on latest CPI data",
      majorFactors: ["Housing costs", "Energy prices", "Service sector wages", "Supply chain normalization"],
      impact: "Moderate pressure on real wages"
    },
    {
      year: "2024", 
      cpiRate: 3.4,
      description: "Continued elevated inflation",
      majorFactors: ["Persistent housing costs", "Labor market tightness", "Service inflation", "Geopolitical tensions"],
      impact: "Significant erosion of purchasing power"
    },
    {
      year: "2023",
      cpiRate: 4.1,
      description: "High inflation year",
      majorFactors: ["Supply chain issues", "Energy price volatility", "Pent-up demand", "Labor shortages"],
      impact: "Major real wage decline without raises"
    },
    {
      year: "2022",
      cpiRate: 8.0,
      description: "40-year inflation high",
      majorFactors: ["Pandemic recovery", "Supply chain disruptions", "Energy crisis", "Fiscal stimulus"],
      impact: "Severe purchasing power erosion"
    },
    {
      year: "2021",
      cpiRate: 4.7,
      description: "Inflation acceleration begins",
      majorFactors: ["Economic reopening", "Supply shortages", "Stimulative policies", "Base effects"],
      impact: "Beginning of real wage pressure"
    }
  ];

  const categoryInflation = [
    {
      category: "Housing",
      current: 5.8,
      trend: "rising",
      impact: "Largest component of CPI, affecting 35% of index",
      strategies: ["Negotiate housing allowances", "Consider remote work options", "Evaluate relocation"],
      icon: <Home className="h-6 w-6" />
    },
    {
      category: "Transportation",
      current: 2.8,
      trend: "stable",
      impact: "Fuel and vehicle costs, affecting commuting budgets",
      strategies: ["Negotiate transportation benefits", "Explore flexible work arrangements", "Consider transit subsidies"],
      icon: <Car className="h-6 w-6" />
    },
    {
      category: "Food",
      current: 4.2,
      trend: "rising",
      impact: "Essential spending category with limited substitution",
      strategies: ["Request meal allowances", "Negotiate cost of living adjustments", "Seek performance bonuses"],
      icon: <ShoppingCart className="h-6 w-6" />
    },
    {
      category: "Healthcare",
      current: 3.7,
      trend: "rising",
      impact: "Insurance premiums and medical costs",
      strategies: ["Maximize employer health benefits", "Negotiate premium sharing", "Use HSA/FSA accounts"],
      icon: <Briefcase className="h-6 w-6" />
    }
  ];

  const realWageCalculations = [
    {
      scenario: "Scenario 1: No Raise",
      currentSalary: 75000,
      nominalRaise: 0,
      inflationRate: 3.1,
      realRaise: -3.1,
      realSalary: 72675,
      annualLoss: 2325,
      description: "Staying at the same salary during inflation",
      verdict: "significant"
    },
    {
      scenario: "Scenario 2: Below-Inflation Raise",
      currentSalary: 75000,
      nominalRaise: 2.0,
      inflationRate: 3.1,
      realRaise: -1.1,
      realSalary: 74175,
      annualLoss: 825,
      description: "Small raise that doesn't keep up with inflation",
      verdict: "moderate"
    },
    {
      scenario: "Scenario 3: Inflation-Matching Raise",
      currentSalary: 75000,
      nominalRaise: 3.1,
      inflationRate: 3.1,
      realRaise: 0.0,
      realSalary: 75000,
      annualLoss: 0,
      description: "Raise that exactly matches inflation",
      verdict: "neutral"
    },
    {
      scenario: "Scenario 4: Above-Inflation Raise",
      currentSalary: 75000,
      nominalRaise: 5.5,
      inflationRate: 3.1,
      realRaise: 2.4,
      realSalary: 76800,
      annualLoss: -1800,
      description: "Raise that exceeds inflation, building real wealth",
      verdict: "positive"
    }
  ];

  const historicalComparison = [
    {
      period: "1970s (High Inflation Era)",
      avgInflation: 7.4,
      avgRaise: 8.2,
      realGrowth: 0.8,
      context: "Oil crisis and economic stagflation"
    },
    {
      period: "1980s (Volcker Era)",
      avgInflation: 5.1,
      avgRaise: 6.8,
      realGrowth: 1.7,
      context: "Federal Reserve inflation fighting"
    },
    {
      period: "1990s (Economic Expansion)",
      avgInflation: 2.9,
      avgRaise: 4.2,
      realGrowth: 1.3,
      context: "Technology boom and productivity gains"
    },
    {
      period: "2000s (Mixed Decade)",
      avgInflation: 2.6,
      avgRaise: 3.8,
      realGrowth: 1.2,
      context: "Dot-com bust and recovery"
    },
    {
      period: "2010s (Low Inflation)",
      avgInflation: 1.8,
      avgRaise: 2.9,
      realGrowth: 1.1,
      context: "Post-financial crisis recovery"
    },
    {
      period: "2020s (Return of Inflation)",
      avgInflation: 4.7,
      avgRaise: 4.2,
      realGrowth: -0.5,
      context: "Pandemic and supply chain disruptions"
    }
  ];

  const protectionStrategies = [
    {
      strategy: "Inflation-Plus Negotiation",
      description: "Negotiate raises that exceed inflation by a meaningful margin",
      tactics: [
        "Research current and projected inflation rates",
        "Present data showing inflation impact on purchasing power",
        "Request raises of inflation + 2-3% for real growth",
        "Tie increases to cost of living indices"
      ],
      successRate: "65-80% with strong performance record"
    },
    {
      strategy: "Frequent Review Cycles",
      description: "Push for more frequent salary reviews during high inflation periods",
      tactics: [
        "Propose semi-annual instead of annual reviews",
        "Request inflation adjustment clauses in contracts",
        "Monitor CPI changes and trigger discussions",
        "Document rapidly changing market conditions"
      ],
      successRate: "50-70% depending on company flexibility"
    },
    {
      strategy: "Total Compensation Focus",
      description: "Expand negotiations beyond base salary to inflation-resistant benefits",
      tactics: [
        "Negotiate equity or stock options",
        "Request flexible work arrangements to reduce costs",
        "Seek additional PTO to offset lifestyle costs",
        "Push for enhanced healthcare coverage"
      ],
      successRate: "70-85% as alternative to cash increases"
    },
    {
      strategy: "Skills-Based Premium",
      description: "Develop inflation-resistant skills that command premium compensation",
      tactics: [
        "Focus on high-demand, low-supply skills",
        "Obtain certifications in growing fields",
        "Build expertise in recession-resistant areas",
        "Position yourself as essential talent"
      ],
      successRate: "80-95% for truly scarce skills"
    }
  ];

  const currentYear = inflationData.find(year => year.year === selectedYear) || inflationData[0];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Inflation's Real Impact on Salary: How to Protect Your Purchasing Power",
    "description": "Complete analysis of how inflation erodes real wages and strategies to protect purchasing power through strategic salary negotiations and raises.",
    "author": {
      "@type": "Organization",
      "name": "PayRaise Calculator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PayRaise Calculator",
      "url": "https://payraisepercentagecalculator.com"
    },
    "datePublished": "2025-01-31",
    "dateModified": "2025-01-31",
    "url": "https://payraisepercentagecalculator.com/blog/inflation-real-salary-impact"
  };

  return (
    <>
      <SEOHead
        title="Inflation's Real Impact on Salary: How to Protect Your Purchasing Power"
        description="Complete analysis of how inflation erodes real wages and strategies to protect purchasing power through strategic salary negotiations and raises."
        canonical="/blog/inflation-real-salary-impact"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Inflation's Real Impact on Salary: How to Protect Your Purchasing Power
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understanding how inflation erodes real wages and implementing proven strategies 
              to protect and grow your purchasing power through strategic salary negotiations.
            </p>
          </div>

          {/* Current Inflation Overview */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Current Inflation Impact</CardTitle>
                <p className="text-center text-lg opacity-90">
                  Real-time analysis of inflation's effect on your salary
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">{currentYear.cpiRate}%</div>
                    <div className="text-lg opacity-90">Current CPI Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">$2,325</div>
                    <div className="text-lg opacity-90">Annual Loss on $75k Salary</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">{(currentYear.cpiRate + 2).toFixed(1)}%</div>
                    <div className="text-lg opacity-90">Recommended Raise Target</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Year-by-Year Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Inflation Timeline: 2021-2025
            </h2>
            <div className="grid lg:grid-cols-5 gap-4">
              {inflationData.map((year) => (
                <Card 
                  key={year.year}
                  className={`cursor-pointer transition-all ${
                    selectedYear === year.year ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedYear(year.year)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">{year.year}</div>
                    <div className={`text-3xl font-bold mb-3 ${
                      year.cpiRate > 5 ? 'text-red-600' : 
                      year.cpiRate > 3 ? 'text-orange-600' : 'text-green-600'
                    }`}>
                      {year.cpiRate}%
                    </div>
                    <p className="text-sm text-gray-600">{year.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Selected Year Details */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>{currentYear.year} Inflation Analysis</CardTitle>
                <Badge variant={currentYear.cpiRate > 5 ? "destructive" : currentYear.cpiRate > 3 ? "secondary" : "default"}>
                  {currentYear.impact}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Major Contributing Factors</h4>
                    <ul className="space-y-2">
                      {currentYear.majorFactors.map((factor, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-red-500" />
                          <span className="text-gray-700">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Salary Impact</h4>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-800">{currentYear.impact}</p>
                      <p className="text-sm text-red-600 mt-2">
                        A $75,000 salary loses ${(75000 * currentYear.cpiRate / 100).toLocaleString()} 
                        in purchasing power without a raise.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Category Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Inflation by Spending Category
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {categoryInflation.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          category.trend === 'rising' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                        }`}>
                          {category.icon}
                        </div>
                        {category.category}
                      </CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">{category.current}%</div>
                        <div className="flex items-center gap-1">
                          {category.trend === 'rising' ? (
                            <TrendingUp className="h-4 w-4 text-red-500" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-green-500" />
                          )}
                          <span className="text-xs text-gray-500 capitalize">{category.trend}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{category.impact}</p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Protection Strategies:</h4>
                      <ul className="space-y-1">
                        {category.strategies.map((strategy, sIndex) => (
                          <li key={sIndex} className="flex items-start gap-2">
                            <Target className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Real Wage Calculations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Real vs. Nominal Salary Scenarios
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {realWageCalculations.map((scenario, index) => (
                <Card key={index} className={`${
                  scenario.verdict === 'significant' ? 'border-red-200 bg-red-50' :
                  scenario.verdict === 'moderate' ? 'border-orange-200 bg-orange-50' :
                  scenario.verdict === 'neutral' ? 'border-gray-200 bg-gray-50' :
                  'border-green-200 bg-green-50'
                }`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{scenario.scenario}</CardTitle>
                    <p className="text-gray-600">{scenario.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Current Salary:</span>
                          <div className="font-medium">${scenario.currentSalary.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Nominal Raise:</span>
                          <div className="font-medium">{scenario.nominalRaise}%</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Inflation Rate:</span>
                          <div className="font-medium">{scenario.inflationRate}%</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Real Raise:</span>
                          <div className={`font-bold text-lg ${
                            scenario.realRaise < 0 ? 'text-red-600' : 
                            scenario.realRaise === 0 ? 'text-gray-600' : 'text-green-600'
                          }`}>
                            {scenario.realRaise > 0 ? '+' : ''}{scenario.realRaise}%
                          </div>
                        </div>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Real Purchasing Power:</span>
                          <div className="text-right">
                            <div className="font-bold text-lg">${scenario.realSalary.toLocaleString()}</div>
                            <div className={`text-sm ${
                              scenario.annualLoss > 0 ? 'text-red-600' : 
                              scenario.annualLoss === 0 ? 'text-gray-600' : 'text-green-600'
                            }`}>
                              {scenario.annualLoss > 0 ? '-' : scenario.annualLoss < 0 ? '+' : ''}
                              ${Math.abs(scenario.annualLoss).toLocaleString()} annually
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Historical Context */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Historical Inflation vs. Wage Growth</CardTitle>
                <p className="text-gray-600">How current conditions compare to past decades</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {historicalComparison.map((period, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="grid md:grid-cols-5 gap-4 items-center">
                        <div>
                          <h3 className="font-semibold text-gray-900">{period.period}</h3>
                          <p className="text-sm text-gray-600">{period.context}</p>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-600">{period.avgInflation}%</div>
                          <div className="text-xs text-gray-500">Avg Inflation</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{period.avgRaise}%</div>
                          <div className="text-xs text-gray-500">Avg Raise</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-lg font-bold ${
                            period.realGrowth > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {period.realGrowth > 0 ? '+' : ''}{period.realGrowth}%
                          </div>
                          <div className="text-xs text-gray-500">Real Growth</div>
                        </div>
                        <div className="text-center">
                          {period.realGrowth > 0 ? (
                            <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <AlertTriangle className="h-6 w-6 text-red-500 mx-auto" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Protection Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Proven Strategies to Protect Against Inflation
            </h2>
            <div className="space-y-6">
              {protectionStrategies.map((strategy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{strategy.strategy}</CardTitle>
                      <Badge variant="secondary">{strategy.successRate}</Badge>
                    </div>
                    <p className="text-gray-600">{strategy.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {strategy.tactics.map((tactic, tIndex) => (
                        <div key={tIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                            {tIndex + 1}
                          </div>
                          <span className="text-gray-700">{tactic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Action Tools */}
          <section>
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Calculate Your Inflation-Adjusted Raise</h2>
                <p className="text-lg mb-6">
                  Use our tools to determine the raise you need to maintain and grow purchasing power
                </p>
                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Link href="/tools/inflation-adjusted-raise-calculator">
                    <Button variant="secondary" className="w-full">
                      Inflation Calculator
                    </Button>
                  </Link>
                  <Link href="/raise-vs-inflation-analysis">
                    <Button variant="secondary" className="w-full">
                      Detailed Analysis
                    </Button>
                  </Link>
                  <Link href="/tools/salary-negotiation-calculator">
                    <Button variant="secondary" className="w-full">
                      Negotiation Strategy
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}