import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { PayRaiseCalculator } from "@/lib/calculator";
import { Target, TrendingUp, Award, Building2 } from "lucide-react";

export default function PromotionSalaryCalculator() {
  const [currentSalary, setCurrentSalary] = useState(75000);
  const [currentLevel, setCurrentLevel] = useState("individual-contributor");
  const [targetLevel, setTargetLevel] = useState("senior-individual-contributor");
  const [industry, setIndustry] = useState("Technology");
  const [companySize, setCompanySize] = useState("medium");
  const [results, setResults] = useState<any>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "Calculator"],
    "name": "Promotion Salary Calculator 2025 - Career Advancement Pay",
    "description": "Calculate expected salary increases for job promotions and role changes. Get industry-specific promotion pay data and multi-level career advancement projections.",
    "url": "https://payraisepercentagecalculator.com/tools/promotion-salary-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Multi-level promotion calculations",
      "Industry-specific adjustments",
      "Company size multipliers",
      "Career advancement timelines"
    ]
  };

  const promotionData = {
    "individual-contributor": {
      name: "Individual Contributor",
      next: "senior-individual-contributor",
      increaseRange: [8, 15]
    },
    "senior-individual-contributor": {
      name: "Senior Individual Contributor",
      next: "lead-specialist",
      increaseRange: [12, 20]
    },
    "lead-specialist": {
      name: "Lead/Specialist",
      next: "manager",
      increaseRange: [15, 25]
    },
    "manager": {
      name: "Manager",
      next: "senior-manager",
      increaseRange: [10, 18]
    },
    "senior-manager": {
      name: "Senior Manager",
      next: "director",
      increaseRange: [15, 25]
    },
    "director": {
      name: "Director",
      next: "senior-director",
      increaseRange: [12, 20]
    },
    "senior-director": {
      name: "Senior Director",
      next: "vice-president",
      increaseRange: [15, 30]
    },
    "vice-president": {
      name: "Vice President",
      next: "senior-vice-president",
      increaseRange: [20, 35]
    }
  };

  const industryMultipliers = {
    "Technology": 1.2,
    "Finance": 1.1,
    "Healthcare": 1.0,
    "Manufacturing": 0.9,
    "Retail": 0.8,
    "Education": 0.7
  };

  const companySizeMultipliers = {
    "startup": 0.8,
    "small": 0.9,
    "medium": 1.0,
    "large": 1.1,
    "enterprise": 1.2
  };

  useEffect(() => {
    calculatePromotion();
  }, [currentSalary, currentLevel, targetLevel, industry, companySize]);

  const calculatePromotion = () => {
    const currentLevelData = promotionData[currentLevel as keyof typeof promotionData];
    const targetLevelData = promotionData[targetLevel as keyof typeof promotionData];
    
    if (!currentLevelData || !targetLevelData) return;

    // Calculate levels between current and target
    const levels = Object.keys(promotionData);
    const currentIndex = levels.indexOf(currentLevel);
    const targetIndex = levels.indexOf(targetLevel);
    
    if (targetIndex <= currentIndex) {
      // Same level or downward - not a typical promotion
      setResults({
        error: "Please select a higher-level position for promotion calculation"
      });
      return;
    }

    // Calculate cumulative increase for multi-level promotions
    let totalIncrease = 0;
    let currentSal = currentSalary;
    const steps = [];

    for (let i = currentIndex; i < targetIndex; i++) {
      const levelData = promotionData[levels[i]];
      const nextLevelData = promotionData[levels[i + 1]];
      
      // Base increase range
      const [minIncrease, maxIncrease] = levelData.increaseRange;
      const avgIncrease = (minIncrease + maxIncrease) / 2;
      
      // Apply industry and company size multipliers
      const industryMultiplier = industryMultipliers[industry] || 1.0;
      const sizeMultiplier = companySizeMultipliers[companySize] || 1.0;
      
      const adjustedIncrease = avgIncrease * industryMultiplier * sizeMultiplier;
      const stepIncrease = currentSal * (adjustedIncrease / 100);
      
      steps.push({
        from: levelData.name,
        to: nextLevelData.name,
        increase: stepIncrease,
        percentage: adjustedIncrease,
        newSalary: currentSal + stepIncrease
      });
      
      currentSal += stepIncrease;
      totalIncrease += stepIncrease;
    }

    const finalSalary = currentSalary + totalIncrease;
    const totalPercentage = (totalIncrease / currentSalary) * 100;

    setResults({
      currentSalary,
      finalSalary,
      totalIncrease,
      totalPercentage,
      steps,
      monthlyIncrease: totalIncrease / 12,
      industry,
      companySize,
      projectedTimeframe: steps.length * 18, // Assume 18 months per promotion
    });
  };

  const getPromotionBadgeColor = (percentage: number) => {
    if (percentage >= 20) return "bg-green-500";
    if (percentage >= 15) return "bg-blue-500";
    if (percentage >= 10) return "bg-yellow-500";
    return "bg-gray-500";
  };



  return (
    <>
      <SEOHead
        title="Promotion Salary Calculator 2025 - Career Advancement Pay Planning"
        description="Calculate expected salary increases for job promotions and role changes. Get industry-specific promotion pay data and multi-level career advancement projections."
        canonical="/tools/promotion-salary-calculator"
        keywords="promotion salary calculator, career advancement pay, job promotion increase, role change salary, promotion pay raise"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">
                  <Award className="w-4 h-4 mr-2" />
                  Career Advancement Planning
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                Promotion Salary Calculator
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Calculate expected salary increases for promotions and career advancement. Plan your 
                next career move with industry-specific data and level-based projections.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use Guide */}
        <section className="py-12 bg-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Calculate Your Promotion Salary: Complete Guide
              </h2>
              <p className="text-lg text-gray-600">
                Follow these steps to accurately estimate your salary increase potential
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Current Details</h3>
                <p className="text-gray-600 text-sm">
                  Enter your current salary and select your current job level. Be accurate 
                  with your base salary excluding bonuses.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Target Level</h3>
                <p className="text-gray-600 text-sm">
                  Choose your target promotion level. Each level up typically 
                  represents specific salary increase ranges.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Industry & Size</h3>
                <p className="text-gray-600 text-sm">
                  Select your industry and company size. These factors significantly 
                  impact promotion salary ranges.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">View Projections</h3>
                <p className="text-gray-600 text-sm">
                  Get detailed salary projections including minimum, expected, 
                  and maximum ranges for your promotion.
                </p>
              </div>
            </div>

            {/* Career Level Guide */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Understanding Career Levels & Salary Increases</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Individual Contributor Track</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>IC:</strong> Entry to mid-level individual contributor (8-15% increase)</li>
                    <li>• <strong>Senior IC:</strong> Senior individual contributor (12-20% increase)</li>
                    <li>• <strong>Lead/Specialist:</strong> Technical lead or specialist (15-25% increase)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Management Track</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Manager:</strong> First-time management role (10-18% increase)</li>
                    <li>• <strong>Senior Manager:</strong> Experienced manager (15-25% increase)</li>
                    <li>• <strong>Director:</strong> Department leadership (12-20% increase)</li>
                    <li>• <strong>VP+:</strong> Executive level (15-35% increase)</li>
                  </ul>
                </div>
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
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Career Progression Details
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
                    <Label>Current Job Level</Label>
                    <Select value={currentLevel} onValueChange={setCurrentLevel}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(promotionData).map(([key, data]) => (
                          <SelectItem key={key} value={key}>
                            {data.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Target Job Level</Label>
                    <Select value={targetLevel} onValueChange={setTargetLevel}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(promotionData).map(([key, data]) => (
                          <SelectItem key={key} value={key}>
                            {data.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Industry</Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="Retail">Retail</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Company Size</Label>
                    <Select value={companySize} onValueChange={setCompanySize}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup (&lt;50 employees)</SelectItem>
                        <SelectItem value="small">Small (50-250 employees)</SelectItem>
                        <SelectItem value="medium">Medium (250-1000 employees)</SelectItem>
                        <SelectItem value="large">Large (1000-5000 employees)</SelectItem>
                        <SelectItem value="enterprise">Enterprise (5000+ employees)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5 text-success" />
                    Promotion Projection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {results?.error ? (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-600">{results.error}</p>
                    </div>
                  ) : results ? (
                    <div className="space-y-6">
                      {/* Main Result */}
                      <Card className="gradient-secondary text-white result-glow">
                        <CardContent className="p-6 text-center">
                          <div className="text-sm opacity-90 mb-1">Projected New Salary</div>
                          <div className="text-4xl font-bold">
                            {PayRaiseCalculator.formatCurrency(results.finalSalary)}
                          </div>
                          <div className="text-sm opacity-90 mt-2">
                            <span>{PayRaiseCalculator.formatCurrency(results.totalIncrease)}</span> increase 
                            ({PayRaiseCalculator.formatPercentage(results.totalPercentage)})
                          </div>
                        </CardContent>
                      </Card>

                      {/* Promotion Steps */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Career Progression Steps
                        </h4>
                        <div className="space-y-3">
                          {results.steps.map((step, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="font-medium text-gray-900">
                                    {step.from} → {step.to}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    Step {index + 1} of {results.steps.length}
                                  </div>
                                </div>
                                <Badge className={`${getPromotionBadgeColor(step.percentage)} text-white`}>
                                  +{PayRaiseCalculator.formatPercentage(step.percentage)}
                                </Badge>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Salary increase:</span>
                                <span className="font-medium text-success">
                                  {PayRaiseCalculator.formatCurrency(step.increase)}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>New salary:</span>
                                <span className="font-medium">
                                  {PayRaiseCalculator.formatCurrency(step.newSalary)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Summary Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-blue-50">
                          <CardContent className="p-4 text-center">
                            <div className="text-sm text-blue-600">Monthly Increase</div>
                            <div className="text-xl font-bold text-blue-900">
                              {PayRaiseCalculator.formatCurrency(results.monthlyIncrease)}
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-green-50">
                          <CardContent className="p-4 text-center">
                            <div className="text-sm text-green-600">Timeline</div>
                            <div className="text-xl font-bold text-green-900">
                              {Math.round(results.projectedTimeframe / 12)} years
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Industry Context */}
                      <Card className="bg-yellow-50 border-yellow-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium text-yellow-900 mb-2">
                            <Building2 className="inline mr-2 h-4 w-4" />
                            Industry & Company Context
                          </h5>
                          <div className="text-sm text-yellow-800 space-y-1">
                            <p>Industry: {results.industry} (multiplier: {industryMultipliers[industry]}x)</p>
                            <p>Company Size: {companySize} (multiplier: {companySizeMultipliers[companySize]}x)</p>
                            <p className="mt-2 text-xs">
                              These multipliers are applied to base promotion increase ranges based on market data.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      Enter your details to see promotion projections
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
              Understanding Promotion Salary Increases
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Typical Promotion Increases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Internal Promotion:</span>
                      <span className="font-semibold">8-15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Management Track:</span>
                      <span className="font-semibold">15-25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Executive Level:</span>
                      <span className="font-semibold">20-35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">External Hire:</span>
                      <span className="font-semibold">20-30%</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                    <p className="text-sm text-blue-800">
                      External hires typically receive higher increases due to market competition.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Factors Affecting Increases</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <Award className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Industry:</strong> Tech and finance typically offer higher increases</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Company Size:</strong> Larger companies often have structured salary bands</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Performance:</strong> Top performers can expect higher increases</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Scope Change:</strong> Increased responsibilities justify higher pay</span>
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
