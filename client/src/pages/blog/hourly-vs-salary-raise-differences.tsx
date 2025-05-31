import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  Clock, 
  DollarSign, 
  Calculator, 
  TrendingUp, 
  Users, 
  Building2, 
  CheckCircle, 
  AlertCircle,
  BarChart3,
  Target
} from "lucide-react";

export default function HourlyVsSalaryRaiseDifferences() {
  const hourlyVsSalaryComparison = [
    {
      aspect: "Calculation Method",
      hourly: "New Rate = Current Rate × (1 + Raise %)",
      salary: "New Salary = Current Salary × (1 + Raise %)",
      impact: "Hourly workers see immediate per-hour impact",
      advantage: "hourly"
    },
    {
      aspect: "Overtime Implications",
      hourly: "Raise affects overtime rate (1.5x new base rate)",
      salary: "No direct overtime compensation typically",
      impact: "Hourly raises compound with overtime earnings",
      advantage: "hourly"
    },
    {
      aspect: "Annual Income Predictability",
      hourly: "Varies based on hours worked per year",
      salary: "Fixed annual amount regardless of hours",
      impact: "Salaried raises provide income certainty",
      advantage: "salary"
    },
    {
      aspect: "Raise Frequency",
      hourly: "Often tied to union contracts or annual reviews",
      salary: "Typically annual or promotion-based",
      impact: "Both follow similar review cycles",
      advantage: "equal"
    },
    {
      aspect: "Percentage vs. Dollar Impact",
      hourly: "Small percentage = immediate per-hour visibility",
      salary: "Large dollar amounts but spread over year",
      impact: "Hourly workers feel raises more immediately",
      advantage: "hourly"
    }
  ];

  const calculationExamples = [
    {
      type: "Hourly Worker",
      scenario: "$25/hour working 40 hours/week, 52 weeks/year",
      currentPay: "$25.00/hour",
      currentAnnual: "$52,000",
      raisePercentage: "5%",
      newPay: "$26.25/hour",
      newAnnual: "$54,600",
      monthlyIncrease: "$216.67",
      overtimeRate: "$39.38/hour (was $37.50)",
      considerations: [
        "Overtime rate increases proportionally",
        "Part-time or variable hours affect total impact",
        "Holiday and weekend premiums also increase"
      ]
    },
    {
      type: "Salaried Employee",
      scenario: "$52,000 annual salary, standard full-time",
      currentPay: "$52,000/year",
      currentAnnual: "$52,000",
      raisePercentage: "5%",
      newPay: "$54,600/year",
      newAnnual: "$54,600",
      monthlyIncrease: "$216.67",
      overtimeRate: "Not applicable",
      considerations: [
        "No overtime compensation typically",
        "Fixed income regardless of hours worked",
        "May include bonus or equity components"
      ]
    }
  ];

  const industryPatterns = [
    {
      industry: "Retail & Hospitality",
      typicalStructure: "Hourly",
      averageRaise: "3-6%",
      frequency: "Annual",
      specialConsiderations: [
        "Minimum wage increases often drive raises",
        "Tips and commissions complicate calculations",
        "Seasonal variations in hours worked"
      ]
    },
    {
      industry: "Manufacturing",
      typicalStructure: "Hourly with union contracts",
      averageRaise: "2-4%",
      frequency: "Contract-based (2-3 years)",
      specialConsiderations: [
        "Union negotiations determine raises",
        "Shift differentials increase with base rate",
        "Safety and performance bonuses may apply"
      ]
    },
    {
      industry: "Technology",
      typicalStructure: "Salary with equity",
      averageRaise: "5-12%",
      frequency: "Annual or promotion-based",
      specialConsiderations: [
        "Stock options and RSUs complicate total comp",
        "Performance bonuses common",
        "Remote work affects geographic adjustments"
      ]
    },
    {
      industry: "Healthcare",
      typicalStructure: "Mixed (hourly for staff, salary for management)",
      averageRaise: "3-7%",
      frequency: "Annual",
      specialConsiderations: [
        "Certification premiums",
        "On-call and emergency pay rates",
        "Night and weekend shift differentials"
      ]
    }
  ];

  const negotiationStrategies = {
    hourly: [
      {
        strategy: "Emphasize Overtime Impact",
        description: "Show how base rate increases compound with overtime earnings",
        example: "A $1/hour raise becomes $1.50/hour for all overtime work"
      },
      {
        strategy: "Highlight Shift Differentials",
        description: "Demonstrate how raises affect premium pay for nights/weekends",
        example: "Base rate increase of 5% also increases night differential by 5%"
      },
      {
        strategy: "Document Hours Consistency",
        description: "Show stable work hours to justify annual income projections",
        example: "Consistent 40+ hours/week for past 12 months"
      }
    ],
    salary: [
      {
        strategy: "Focus on Total Compensation",
        description: "Include benefits, bonus potential, and equity in discussions",
        example: "Base salary + 15% bonus target + $10k equity annually"
      },
      {
        strategy: "Emphasize Fixed Cost Savings",
        description: "Highlight predictable compensation for employer budgeting",
        example: "No overtime costs despite fluctuating project demands"
      },
      {
        strategy: "Performance-Based Increases",
        description: "Tie raises to measurable outcomes and value delivered",
        example: "Delivered $200k in cost savings, requesting 8% increase"
      }
    ]
  };

  const taxImplications = [
    {
      category: "Hourly Workers",
      considerations: [
        "Variable income may affect tax bracket predictions",
        "Overtime pushes workers into higher brackets temporarily",
        "Quarterly estimated taxes may be needed for high earners",
        "Benefits deductions calculated per pay period"
      ]
    },
    {
      category: "Salaried Employees",
      considerations: [
        "Predictable tax withholdings throughout year",
        "Bonus payments often taxed at higher supplemental rate",
        "Stock option exercises create additional tax events",
        "Benefits typically deducted consistently"
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hourly vs Salary Raise Differences: Complete Comparison Guide",
    "description": "Comprehensive analysis of how pay raises differ between hourly and salaried positions. Calculation methods, negotiation strategies, and real-world examples.",
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
    "url": "https://payraisepercentagecalculator.com/blog/hourly-vs-salary-raise-differences"
  };

  return (
    <>
      <SEOHead
        title="Hourly vs Salary Raise Differences: Complete Comparison Guide"
        description="Comprehensive analysis of how pay raises differ between hourly and salaried positions. Calculation methods, negotiation strategies, and real-world examples."
        canonical="/blog/hourly-vs-salary-raise-differences"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hourly vs Salary Raise Differences: Complete Comparison Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understanding how pay raises work differently for hourly and salaried employees. 
              Calculation methods, negotiation strategies, and optimization techniques for each compensation structure.
            </p>
          </div>

          {/* Key Differences Comparison */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Key Differences in Raise Structures</CardTitle>
                <p className="text-center text-gray-600">
                  How hourly and salary raises differ in calculation and impact
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hourlyVsSalaryComparison.map((comparison, index) => (
                    <Card key={index} className="border-l-4 border-primary">
                      <CardContent className="p-6">
                        <div className="grid lg:grid-cols-4 gap-4">
                          <div className="lg:col-span-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{comparison.aspect}</h3>
                            <Badge 
                              variant={comparison.advantage === 'hourly' ? 'default' : 
                                     comparison.advantage === 'salary' ? 'secondary' : 'outline'}
                            >
                              {comparison.advantage === 'hourly' ? 'Hourly Advantage' :
                               comparison.advantage === 'salary' ? 'Salary Advantage' : 'Equal Impact'}
                            </Badge>
                          </div>
                          <div className="lg:col-span-1">
                            <h4 className="text-sm font-medium text-blue-700 mb-1">Hourly Workers</h4>
                            <p className="text-sm text-gray-600">{comparison.hourly}</p>
                          </div>
                          <div className="lg:col-span-1">
                            <h4 className="text-sm font-medium text-green-700 mb-1">Salaried Employees</h4>
                            <p className="text-sm text-gray-600">{comparison.salary}</p>
                          </div>
                          <div className="lg:col-span-1">
                            <h4 className="text-sm font-medium text-purple-700 mb-1">Impact</h4>
                            <p className="text-sm text-gray-600">{comparison.impact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Calculation Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Real-World Calculation Examples
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {calculationExamples.map((example, index) => (
                <Card key={index} className={`${index === 0 ? 'border-blue-200 bg-blue-50' : 'border-green-200 bg-green-50'}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {index === 0 ? <Clock className="h-6 w-6 text-blue-600" /> : <DollarSign className="h-6 w-6 text-green-600" />}
                      {example.type}
                    </CardTitle>
                    <p className="text-gray-600">{example.scenario}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Before Raise</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Rate/Salary:</span>
                              <span className="font-medium">{example.currentPay}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Annual:</span>
                              <span className="font-medium">{example.currentAnnual}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">After {example.raisePercentage} Raise</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>New Rate/Salary:</span>
                              <span className="font-medium text-green-600">{example.newPay}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>New Annual:</span>
                              <span className="font-medium text-green-600">{example.newAnnual}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Monthly Increase:</span>
                            <span className="text-sm font-medium text-primary">{example.monthlyIncrease}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Overtime Rate:</span>
                            <span className="text-sm font-medium">{example.overtimeRate}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Special Considerations:</h5>
                          <ul className="space-y-1">
                            {example.considerations.map((consideration, cIndex) => (
                              <li key={cIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                {consideration}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Industry Patterns */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Industry-Specific Raise Patterns</CardTitle>
                <p className="text-gray-600">
                  How different industries approach hourly vs. salary compensation
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {industryPatterns.map((pattern, index) => (
                    <Card key={index} className="border border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">{pattern.industry}</h3>
                          <Badge variant="outline">{pattern.averageRaise} avg</Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Structure:</span>
                            <span className="font-medium">{pattern.typicalStructure}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Frequency:</span>
                            <span className="font-medium">{pattern.frequency}</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Special Considerations:</h4>
                            <ul className="space-y-1">
                              {pattern.specialConsiderations.map((consideration, cIndex) => (
                                <li key={cIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                  <AlertCircle className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
                                  {consideration}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Negotiation Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Tailored Negotiation Strategies
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Clock className="h-6 w-6" />
                    Hourly Worker Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {negotiationStrategies.hourly.map((strategy, index) => (
                      <div key={index} className="border-l-4 border-blue-400 pl-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{strategy.strategy}</h3>
                        <p className="text-gray-600 text-sm mb-2">{strategy.description}</p>
                        <div className="bg-blue-50 p-3 rounded text-sm">
                          <strong>Example:</strong> {strategy.example}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <DollarSign className="h-6 w-6" />
                    Salaried Employee Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {negotiationStrategies.salary.map((strategy, index) => (
                      <div key={index} className="border-l-4 border-green-400 pl-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{strategy.strategy}</h3>
                        <p className="text-gray-600 text-sm mb-2">{strategy.description}</p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Example:</strong> {strategy.example}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tax Implications */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tax and Benefits Implications</CardTitle>
                <p className="text-gray-600">
                  How compensation structure affects tax planning and benefits
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  {taxImplications.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                      <ul className="space-y-3">
                        {category.considerations.map((consideration, cIndex) => (
                          <li key={cIndex} className="flex items-start gap-3">
                            <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{consideration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Calculator Tools */}
          <section>
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Calculate Your Raise Impact</h2>
                <p className="text-lg mb-6">
                  Use our specialized calculators for your compensation structure
                </p>
                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Link href="/">
                    <Button variant="secondary" className="w-full">
                      Universal Calculator
                    </Button>
                  </Link>
                  <Link href="/tools/hourly-to-salary-converter">
                    <Button variant="secondary" className="w-full">
                      Hourly ↔ Salary Converter
                    </Button>
                  </Link>
                  <Link href="/tools/overtime-pay-calculator">
                    <Button variant="secondary" className="w-full">
                      Overtime Impact
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