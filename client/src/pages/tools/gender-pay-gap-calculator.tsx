import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo/head";
import { 
  Users, 
  Calculator, 
  BarChart3,
  Target,
  AlertTriangle,
  TrendingDown,
  DollarSign,
  Scale
} from "lucide-react";

export default function GenderPayGapCalculator() {
  const [maleSalary, setMaleSalary] = useState<string>("");
  const [femaleSalary, setFemaleSalary] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [position, setPosition] = useState<string>("");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Gender Pay Gap Calculator",
    "description": "Calculate and analyze gender pay gaps by industry, position, and experience level. Understand compensation disparities and market standards.",
    "url": "https://payraisepercentagecalculator.com/tools/gender-pay-gap-calculator",
    "applicationCategory": "FinanceApplication"
  };

  const industryGaps = {
    "Technology": { gap: 8.2, trend: "improving" },
    "Finance": { gap: 15.6, trend: "stable" },
    "Healthcare": { gap: 7.8, trend: "improving" },
    "Manufacturing": { gap: 18.2, trend: "declining" },
    "Retail": { gap: 11.4, trend: "stable" },
    "Education": { gap: 5.3, trend: "improving" },
    "Government": { gap: 4.1, trend: "stable" },
    "Non-Profit": { gap: 6.7, trend: "improving" }
  };

  const calculateGap = () => {
    const male = parseFloat(maleSalary) || 0;
    const female = parseFloat(femaleSalary) || 0;
    
    if (male === 0 || female === 0) return null;
    
    const gap = ((male - female) / male) * 100;
    const annualDifference = male - female;
    const lifetimeImpact = annualDifference * 40; // 40-year career
    const industryGap = industry ? industryGaps[industry as keyof typeof industryGaps]?.gap : 12.3;
    
    return {
      gap: Math.abs(gap),
      annualDifference: Math.abs(annualDifference),
      lifetimeImpact: Math.abs(lifetimeImpact),
      industryGap,
      comparison: gap > (industryGap || 12.3) ? "above" : gap < (industryGap || 12.3) ? "below" : "average"
    };
  };

  const results = calculateGap();

  const keyStatistics = [
    { metric: "National Average Gap", value: "12.3%", context: "All industries, 2025" },
    { metric: "Narrowing Rate", value: "0.8%", context: "Annual improvement" },
    { metric: "Lifetime Impact", value: "$430,000", context: "Average career difference" },
    { metric: "Equal Pay Timeline", value: "2059", context: "Projected equality year" }
  ];

  const factorsInfluencing = [
    {
      factor: "Experience Level",
      impact: "High",
      description: "Gaps often widen with seniority levels",
      mitigation: "Regular pay equity audits"
    },
    {
      factor: "Industry Choice",
      impact: "High",
      description: "Significant variation across sectors",
      mitigation: "Industry-specific advocacy"
    },
    {
      factor: "Geographic Location",
      impact: "Medium",
      description: "Regional differences in pay equity",
      mitigation: "Location-aware negotiations"
    },
    {
      factor: "Company Size",
      impact: "Medium",
      description: "Larger companies often have better equity",
      mitigation: "Choose employers with equity commitments"
    }
  ];

  return (
    <>
      <SEOHead
        title="Gender Pay Gap Calculator - Analyze Compensation Disparities"
        description="Calculate and analyze gender pay gaps by industry, position, and experience level. Understand compensation disparities and market standards."
        canonical="/tools/gender-pay-gap-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Scale className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Gender Pay Gap Calculator
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Analyze Compensation Disparities and Market Standards
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Pay Equity Analysis</Badge>
                <Badge variant="outline">Industry Benchmarks</Badge>
                <Badge variant="outline">2025 Data</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Calculate gender pay gaps, compare against industry standards, and understand 
                the factors that contribute to compensation disparities.
              </p>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              {keyStatistics.map((stat, index) => (
                <Card key={index} className="calculator-shadow text-center">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-900 mb-1">{stat.metric}</div>
                    <div className="text-xs text-gray-600">{stat.context}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">
                  Pay Gap Analysis Calculator
                </CardTitle>
                <p className="text-center text-gray-600">
                  Compare salaries to identify and analyze pay disparities
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="maleSalary">Male/Higher Salary ($)</Label>
                      <Input
                        id="maleSalary"
                        type="number"
                        placeholder="e.g. 75000"
                        value={maleSalary}
                        onChange={(e) => setMaleSalary(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="femaleSalary">Female/Lower Salary ($)</Label>
                      <Input
                        id="femaleSalary"
                        type="number"
                        placeholder="e.g. 65000"
                        value={femaleSalary}
                        onChange={(e) => setFemaleSalary(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry (Optional)</Label>
                      <Select value={industry} onValueChange={setIndustry}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(industryGaps).map((ind) => (
                            <SelectItem key={ind} value={ind}>
                              {ind}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="position">Position Level (Optional)</Label>
                      <Select value={position} onValueChange={setPosition}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="mid">Mid Level</SelectItem>
                          <SelectItem value="senior">Senior Level</SelectItem>
                          <SelectItem value="executive">Executive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {results && (
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <TrendingDown className="mr-2 h-5 w-5 text-red-600" />
                        Pay Gap Analysis
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Pay Gap:</span>
                          <span className="font-bold text-red-600">{results.gap.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Annual Difference:</span>
                          <span className="font-semibold">${results.annualDifference.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Lifetime Impact:</span>
                          <span className="font-semibold text-red-600">${results.lifetimeImpact.toLocaleString()}</span>
                        </div>
                        {industry && (
                          <div className="border-t border-gray-300 pt-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Industry Average:</span>
                              <span className="font-semibold">{results.industryGap}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Comparison:</span>
                              <Badge className={
                                results.comparison === "above" ? "bg-red-100 text-red-800" :
                                results.comparison === "below" ? "bg-green-100 text-green-800" :
                                "bg-yellow-100 text-yellow-800"
                              }>
                                {results.comparison === "above" ? "Above Industry Average" :
                                 results.comparison === "below" ? "Below Industry Average" :
                                 "At Industry Average"}
                              </Badge>
                            </div>
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

        {/* Industry Analysis */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pay Gap by Industry
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(industryGaps).map(([ind, data]) => (
                <Card key={ind} className="calculator-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">{ind}</h3>
                    <div className="text-2xl font-bold text-red-600 mb-2">{data.gap}%</div>
                    <Badge className={
                      data.trend === "improving" ? "bg-green-100 text-green-800" :
                      data.trend === "declining" ? "bg-red-100 text-red-800" :
                      "bg-yellow-100 text-yellow-800"
                    }>
                      {data.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Factors Influencing Pay Gaps */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Factors Influencing Pay Gaps
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {factorsInfluencing.map((factor, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      {factor.factor}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Impact Level:</span>
                        <Badge className={
                          factor.impact === "High" ? "bg-red-100 text-red-800" :
                          factor.impact === "Medium" ? "bg-yellow-100 text-yellow-800" :
                          "bg-green-100 text-green-800"
                        }>
                          {factor.impact}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Description:</span>
                        <p className="text-sm text-gray-600 mt-1">{factor.description}</p>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <div className="text-sm text-blue-800">
                          <strong>Mitigation:</strong> {factor.mitigation}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal and Ethical Considerations */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Legal and Ethical Considerations
            </h2>
            
            <div className="space-y-6">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="mr-2 h-5 w-5 text-primary" />
                    Legal Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Equal Pay Act of 1963: Requires equal pay for equal work</li>
                    <li>• Title VII: Prohibits employment discrimination based on sex</li>
                    <li>• Lilly Ledbetter Fair Pay Act: Extends time limits for pay discrimination claims</li>
                    <li>• State pay equity laws: Many states have additional protections</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-yellow-600" />
                    Important Disclaimers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li>• This calculator is for educational and awareness purposes only</li>
                      <li>• Pay differences may result from various legitimate factors</li>
                      <li>• Consult legal professionals for specific discrimination concerns</li>
                      <li>• Data should be interpreted within proper context and industry norms</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Action Steps */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Addressing Pay Gaps</h2>
                <p className="text-gray-600 mb-6">
                  Understanding pay gaps is the first step toward creating more equitable compensation. 
                  Use this data to advocate for fair pay and workplace equity.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold text-primary">Research & Document</div>
                    <div className="text-gray-600">Gather compensation data and evidence</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Know Your Rights</div>
                    <div className="text-gray-600">Understand legal protections available</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Take Action</div>
                    <div className="text-gray-600">Address disparities through proper channels</div>
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