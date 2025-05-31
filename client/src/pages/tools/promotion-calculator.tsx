import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo/head";
import { 
  TrendingUp, 
  Calculator, 
  DollarSign,
  Target,
  BarChart3,
  Users,
  Award,
  Calendar
} from "lucide-react";

export default function PromotionCalculator() {
  const [currentSalary, setCurrentSalary] = useState<string>("");
  const [currentLevel, setCurrentLevel] = useState<string>("");
  const [targetLevel, setTargetLevel] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [companySize, setCompanySize] = useState<string>("");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Promotion Salary Calculator",
    "description": "Calculate expected salary increases for job promotions across different industries and company sizes. Plan your career advancement with data-driven insights.",
    "url": "https://payraisepercentagecalculator.com/tools/promotion-calculator",
    "applicationCategory": "FinanceApplication"
  };

  const promotionLevels = {
    "entry": { name: "Entry Level", multiplier: 1.0 },
    "junior": { name: "Junior", multiplier: 1.15 },
    "mid": { name: "Mid Level", multiplier: 1.35 },
    "senior": { name: "Senior", multiplier: 1.65 },
    "lead": { name: "Lead/Principal", multiplier: 2.0 },
    "manager": { name: "Manager", multiplier: 2.2 },
    "director": { name: "Director", multiplier: 2.8 },
    "vp": { name: "VP/Executive", multiplier: 3.5 }
  };

  const industryMultipliers = {
    "Technology": 1.2,
    "Finance": 1.15,
    "Healthcare": 1.0,
    "Manufacturing": 0.95,
    "Retail": 0.85,
    "Education": 0.8,
    "Non-Profit": 0.75,
    "Government": 0.9
  };

  const companySizeMultipliers = {
    "startup": { name: "Startup (1-50)", multiplier: 0.9 },
    "small": { name: "Small (51-250)", multiplier: 0.95 },
    "medium": { name: "Medium (251-1000)", multiplier: 1.0 },
    "large": { name: "Large (1001-5000)", multiplier: 1.1 },
    "enterprise": { name: "Enterprise (5000+)", multiplier: 1.15 }
  };

  const calculatePromotion = () => {
    const salary = parseFloat(currentSalary) || 0;
    
    if (salary === 0 || !currentLevel || !targetLevel) return null;

    const currentMultiplier = promotionLevels[currentLevel as keyof typeof promotionLevels]?.multiplier || 1;
    const targetMultiplier = promotionLevels[targetLevel as keyof typeof promotionLevels]?.multiplier || 1;
    
    if (targetMultiplier <= currentMultiplier) return null;

    const baseIncrease = (targetMultiplier / currentMultiplier) - 1;
    const industryAdjustment = industry ? industryMultipliers[industry as keyof typeof industryMultipliers] || 1 : 1;
    const sizeAdjustment = companySize ? companySizeMultipliers[companySize as keyof typeof companySizeMultipliers]?.multiplier || 1 : 1;
    
    const adjustedIncrease = baseIncrease * industryAdjustment * sizeAdjustment;
    const newSalary = salary * (1 + adjustedIncrease);
    const salaryIncrease = newSalary - salary;
    const percentageIncrease = (adjustedIncrease) * 100;

    return {
      newSalary,
      salaryIncrease,
      percentageIncrease,
      monthlyIncrease: salaryIncrease / 12,
      careerGrowth: ((targetMultiplier / currentMultiplier) - 1) * 100,
      adjustments: {
        industry: (industryAdjustment - 1) * 100,
        companySize: (sizeAdjustment - 1) * 100
      }
    };
  };

  const results = calculatePromotion();

  const promotionPaths = [
    {
      path: "Individual Contributor Track",
      levels: [
        { from: "Entry Level", to: "Junior", increase: "15-25%" },
        { from: "Junior", to: "Mid Level", increase: "20-30%" },
        { from: "Mid Level", to: "Senior", increase: "25-35%" },
        { from: "Senior", to: "Lead/Principal", increase: "20-30%" }
      ]
    },
    {
      path: "Management Track",
      levels: [
        { from: "Senior IC", to: "Team Lead", increase: "15-25%" },
        { from: "Team Lead", to: "Manager", increase: "20-30%" },
        { from: "Manager", to: "Senior Manager", increase: "25-35%" },
        { from: "Senior Manager", to: "Director", increase: "30-40%" }
      ]
    }
  ];

  const industryBenchmarks = [
    { industry: "Technology", avgIncrease: "25-35%", timeToPromo: "18-24 months", notes: "High competition, merit-based" },
    { industry: "Finance", avgIncrease: "20-30%", timeToPromo: "24-36 months", notes: "Structured progression, bonus-heavy" },
    { industry: "Healthcare", avgIncrease: "15-25%", timeToPromo: "24-48 months", notes: "Certification-dependent" },
    { industry: "Consulting", avgIncrease: "30-50%", timeToPromo: "12-24 months", notes: "Up-or-out culture" }
  ];

  return (
    <>
      <SEOHead
        title="Promotion Salary Calculator - Calculate Career Advancement Pay"
        description="Calculate expected salary increases for job promotions across different industries and company sizes. Plan your career advancement with data-driven insights."
        canonical="/tools/promotion-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Promotion Salary Calculator
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Calculate Expected Career Advancement Pay Increases
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Career Planning</Badge>
                <Badge variant="outline">Industry Data</Badge>
                <Badge variant="outline">Promotion Analysis</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Plan your career advancement with data-driven salary projections 
                across different industries, company sizes, and promotion levels.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">
                  Promotion Salary Calculator
                </CardTitle>
                <p className="text-center text-gray-600">
                  Calculate your expected salary after promotion
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentSalary">Current Salary ($)</Label>
                      <Input
                        id="currentSalary"
                        type="number"
                        placeholder="e.g. 75000"
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentLevel">Current Level</Label>
                      <Select value={currentLevel} onValueChange={setCurrentLevel}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select current level" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(promotionLevels).map(([key, level]) => (
                            <SelectItem key={key} value={key}>
                              {level.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="targetLevel">Target Level</Label>
                      <Select value={targetLevel} onValueChange={setTargetLevel}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select target level" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(promotionLevels).map(([key, level]) => (
                            <SelectItem key={key} value={key}>
                              {level.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry (Optional)</Label>
                      <Select value={industry} onValueChange={setIndustry}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(industryMultipliers).map((ind) => (
                            <SelectItem key={ind} value={ind}>
                              {ind}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="companySize">Company Size (Optional)</Label>
                      <Select value={companySize} onValueChange={setCompanySize}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(companySizeMultipliers).map(([key, size]) => (
                            <SelectItem key={key} value={key}>
                              {size.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {results && (
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Award className="mr-2 h-5 w-5 text-green-600" />
                        Promotion Salary Projection
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Current Salary:</span>
                          <span className="font-semibold">${parseFloat(currentSalary).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">New Salary:</span>
                          <span className="font-bold text-green-600">${results.newSalary.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Salary Increase:</span>
                          <span className="font-semibold text-primary">${results.salaryIncrease.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Percentage Increase:</span>
                          <span className="font-bold text-green-600">{results.percentageIncrease.toFixed(1)}%</span>
                        </div>
                        <div className="border-t border-gray-300 pt-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Monthly Increase:</span>
                            <span className="font-semibold">${results.monthlyIncrease.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Career Growth:</span>
                            <span className="font-semibold">{results.careerGrowth.toFixed(1)}%</span>
                          </div>
                        </div>
                        {(results.adjustments.industry !== 0 || results.adjustments.companySize !== 0) && (
                          <div className="border-t border-gray-300 pt-2">
                            <div className="text-sm text-gray-600 mb-1">Adjustments:</div>
                            {results.adjustments.industry !== 0 && (
                              <div className="text-xs text-gray-500">
                                Industry: {results.adjustments.industry > 0 ? '+' : ''}{results.adjustments.industry.toFixed(1)}%
                              </div>
                            )}
                            {results.adjustments.companySize !== 0 && (
                              <div className="text-xs text-gray-500">
                                Company Size: {results.adjustments.companySize > 0 ? '+' : ''}{results.adjustments.companySize.toFixed(1)}%
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Promotion Paths */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Promotion Paths
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {promotionPaths.map((path, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      {path.path}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {path.levels.map((level, levelIndex) => (
                        <div key={levelIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{level.from}</div>
                            <div className="text-xs text-gray-600">to {level.to}</div>
                          </div>
                          <div className="text-sm font-bold text-green-600">{level.increase}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Benchmarks */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Industry Promotion Benchmarks
            </h2>
            
            <div className="space-y-4">
              {industryBenchmarks.map((benchmark, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{benchmark.industry}</h3>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Avg Increase</div>
                        <div className="font-bold text-green-600">{benchmark.avgIncrease}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Time to Promotion</div>
                        <div className="font-semibold">{benchmark.timeToPromo}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">{benchmark.notes}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Planning Tips */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Promotion Planning Strategy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Set Clear Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Define target role and timeline</li>
                    <li>• Identify required skills and experience</li>
                    <li>• Create measurable performance metrics</li>
                    <li>• Align with company objectives</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Build Your Case
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Document achievements and impact</li>
                    <li>• Gather feedback from stakeholders</li>
                    <li>• Demonstrate leadership abilities</li>
                    <li>• Show readiness for next level</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Time It Right
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Align with performance review cycles</li>
                    <li>• Consider budget planning periods</li>
                    <li>• Leverage major accomplishments</li>
                    <li>• Account for business conditions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan Your Career Advancement</h2>
                <p className="text-gray-600 mb-6">
                  Use these insights to negotiate your promotion effectively and maximize 
                  your career growth potential. Strategic planning leads to better outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                    Download Career Plan Template
                  </button>
                  <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-blue-50">
                    View Salary Negotiation Guide
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}