import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SEOHead } from "@/components/seo/head";
import { Calculator, Target, TrendingUp, DollarSign, Users, FileText } from "lucide-react";

export default function SalaryNegotiationCalculator() {
  const [currentSalary, setCurrentSalary] = useState<string>("");
  const [targetIncrease, setTargetIncrease] = useState<string>("");
  const [performanceRating, setPerformanceRating] = useState<string>("");
  const [yearsAtCompany, setYearsAtCompany] = useState<string>("");
  const [industryGrowth, setIndustryGrowth] = useState<string>("");
  const [marketResearch, setMarketResearch] = useState<boolean>(false);
  const [recentAchievements, setRecentAchievements] = useState<boolean>(false);
  const [additionalResponsibilities, setAdditionalResponsibilities] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);

  const performanceRatings = [
    { value: "exceeds", label: "Exceeds Expectations", multiplier: 1.3 },
    { value: "meets", label: "Meets Expectations", multiplier: 1.0 },
    { value: "below", label: "Below Expectations", multiplier: 0.7 }
  ];

  const industryGrowthRates = [
    { value: "high", label: "High Growth (>10%)", bonus: 0.02 },
    { value: "moderate", label: "Moderate Growth (5-10%)", bonus: 0.01 },
    { value: "stable", label: "Stable (2-5%)", bonus: 0.005 },
    { value: "declining", label: "Declining (<2%)", bonus: -0.01 }
  ];

  const calculateNegotiationPosition = () => {
    if (!currentSalary || !targetIncrease || !performanceRating || !yearsAtCompany || !industryGrowth) return;
    
    const salary = parseFloat(currentSalary);
    const targetPercent = parseFloat(targetIncrease) / 100;
    const years = parseInt(yearsAtCompany);
    
    const performanceMultiplier = performanceRatings.find(r => r.value === performanceRating)?.multiplier || 1.0;
    const industryBonus = industryGrowthRates.find(g => g.value === industryGrowth)?.bonus || 0;
    
    // Base success probability calculation
    let successProbability = 0.5; // Base 50%
    
    // Adjust for performance
    if (performanceRating === "exceeds") successProbability += 0.25;
    if (performanceRating === "below") successProbability -= 0.3;
    
    // Adjust for tenure
    if (years >= 3) successProbability += 0.15;
    if (years >= 5) successProbability += 0.1;
    if (years < 1) successProbability -= 0.2;
    
    // Adjust for supporting factors
    if (marketResearch) successProbability += 0.15;
    if (recentAchievements) successProbability += 0.2;
    if (additionalResponsibilities) successProbability += 0.15;
    
    // Adjust for industry growth
    successProbability += industryBonus * 10; // Convert to percentage points
    
    // Cap between 10% and 95%
    successProbability = Math.max(0.1, Math.min(0.95, successProbability));
    
    const targetSalary = salary * (1 + targetPercent);
    const recommendedAsk = targetSalary * 1.1; // Ask 10% higher than target
    const fallbackPosition = salary * (1 + targetPercent * 0.7); // 70% of target as fallback
    
    const strengthFactors = [];
    if (performanceRating === "exceeds") strengthFactors.push("Strong performance record");
    if (years >= 3) strengthFactors.push("Established tenure");
    if (marketResearch) strengthFactors.push("Market research completed");
    if (recentAchievements) strengthFactors.push("Recent significant achievements");
    if (additionalResponsibilities) strengthFactors.push("Expanded responsibilities");
    
    const weaknessFactors = [];
    if (performanceRating === "below") weaknessFactors.push("Performance concerns");
    if (years < 1) weaknessFactors.push("Limited tenure");
    if (!marketResearch) weaknessFactors.push("Lack of market data");
    
    setResult({
      currentSalary: salary,
      targetSalary,
      recommendedAsk,
      fallbackPosition,
      successProbability: successProbability * 100,
      strengthFactors,
      weaknessFactors,
      performanceMultiplier,
      industryBonus
    });
  };

  const negotiationTips = [
    {
      category: "Preparation",
      tips: [
        "Research industry salary benchmarks thoroughly",
        "Document your achievements and contributions",
        "Prepare specific examples of value delivered",
        "Practice your negotiation conversation"
      ]
    },
    {
      category: "Timing",
      tips: [
        "Schedule during performance review cycles",
        "Avoid busy periods or company stress",
        "Allow adequate time for discussion",
        "Follow up appropriately after meetings"
      ]
    },
    {
      category: "Strategy",
      tips: [
        "Start with total compensation, not just salary",
        "Present data-driven arguments",
        "Be prepared for counteroffers",
        "Have alternative benefits in mind"
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Salary Negotiation Calculator",
    "description": "Calculate your salary negotiation strategy with success probability analysis and preparation guidance.",
    "url": "https://payraisepercentagecalculator.com/tools/salary-negotiation-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <SEOHead
        title="Salary Negotiation Calculator - Plan Your Raise Strategy & Success Rate"
        description="Calculate your salary negotiation strategy with success probability analysis. Get personalized recommendations for raise requests and negotiation preparation."
        canonical="/tools/salary-negotiation-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-3 rounded-full">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Salary Negotiation Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your salary negotiation strategy with data-driven insights. Calculate success probability 
              and get personalized recommendations for your raise request.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator */}
            <div className="lg:col-span-2">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Negotiation Strategy Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="current-salary">Current Annual Salary</Label>
                      <Input
                        id="current-salary"
                        type="number"
                        placeholder="75000"
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="target-increase">Target Raise (%)</Label>
                      <Input
                        id="target-increase"
                        type="number"
                        placeholder="8"
                        value={targetIncrease}
                        onChange={(e) => setTargetIncrease(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="performance-rating">Performance Rating</Label>
                      <Select value={performanceRating} onValueChange={setPerformanceRating}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select performance level" />
                        </SelectTrigger>
                        <SelectContent>
                          {performanceRatings.map((rating) => (
                            <SelectItem key={rating.value} value={rating.value}>
                              {rating.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="years-company">Years at Company</Label>
                      <Input
                        id="years-company"
                        type="number"
                        placeholder="3"
                        value={yearsAtCompany}
                        onChange={(e) => setYearsAtCompany(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="industry-growth">Industry Growth Rate</Label>
                    <Select value={industryGrowth} onValueChange={setIndustryGrowth}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry growth" />
                      </SelectTrigger>
                      <SelectContent>
                        {industryGrowthRates.map((growth) => (
                          <SelectItem key={growth.value} value={growth.value}>
                            {growth.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>Negotiation Strengths (Check all that apply)</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="market-research" 
                          checked={marketResearch}
                          onCheckedChange={(checked) => setMarketResearch(checked === true)}
                        />
                        <Label htmlFor="market-research">Completed market salary research</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="recent-achievements" 
                          checked={recentAchievements}
                          onCheckedChange={(checked) => setRecentAchievements(checked === true)}
                        />
                        <Label htmlFor="recent-achievements">Recent significant achievements</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="additional-responsibilities" 
                          checked={additionalResponsibilities}
                          onCheckedChange={(checked) => setAdditionalResponsibilities(checked === true)}
                        />
                        <Label htmlFor="additional-responsibilities">Additional responsibilities taken on</Label>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateNegotiationPosition} 
                    className="w-full"
                    disabled={!currentSalary || !targetIncrease || !performanceRating || !yearsAtCompany || !industryGrowth}
                  >
                    Calculate Negotiation Strategy
                  </Button>

                  {result && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Negotiation Analysis</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">Salary Strategy</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Current Salary:</span>
                                <span className="font-medium">${result.currentSalary.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Target Salary:</span>
                                <span className="font-medium text-primary">${result.targetSalary.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Initial Ask:</span>
                                <span className="font-bold text-green-600">${result.recommendedAsk.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Fallback Position:</span>
                                <span className="font-medium text-orange-600">${result.fallbackPosition.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">Success Analysis</h4>
                            <div className="text-center mb-3">
                              <div className={`text-3xl font-bold ${result.successProbability > 70 ? 'text-green-600' : result.successProbability > 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                                {result.successProbability.toFixed(0)}%
                              </div>
                              <div className="text-sm text-gray-600">Success Probability</div>
                            </div>
                            <div className="space-y-2">
                              {result.strengthFactors.length > 0 && (
                                <div>
                                  <div className="text-xs font-medium text-green-700 mb-1">Strengths:</div>
                                  <ul className="text-xs text-green-600 space-y-1">
                                    {result.strengthFactors.map((factor: string, index: number) => (
                                      <li key={index}>• {factor}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {result.weaknessFactors.length > 0 && (
                                <div>
                                  <div className="text-xs font-medium text-red-700 mb-1">Areas to Address:</div>
                                  <ul className="text-xs text-red-600 space-y-1">
                                    {result.weaknessFactors.map((factor: string, index: number) => (
                                      <li key={index}>• {factor}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Negotiation Tips */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Negotiation Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {negotiationTips.map((section, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-gray-900 mb-2">{section.category}</h4>
                        <ul className="space-y-1">
                          {section.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-sm text-gray-600">• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Strategy Guide */}
          <div className="mt-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Negotiation Strategy Framework</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Before the Meeting</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Gather salary benchmarking data</li>
                      <li>• Document your achievements</li>
                      <li>• Set clear objectives and alternatives</li>
                      <li>• Practice your pitch</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">During the Meeting</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Present data-driven arguments</li>
                      <li>• Focus on value delivered</li>
                      <li>• Listen actively to responses</li>
                      <li>• Remain professional and positive</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">After the Meeting</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Follow up in writing</li>
                      <li>• Document agreements made</li>
                      <li>• Set timeline for decisions</li>
                      <li>• Maintain professional relationships</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}