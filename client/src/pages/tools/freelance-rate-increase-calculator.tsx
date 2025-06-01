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
  DollarSign, 
  Briefcase,
  Target,
  Clock,
  ArrowRight,
  CheckCircle,
  Info,
  Lightbulb
} from "lucide-react";

interface FreelanceRateInput {
  currentRate: number;
  rateType: 'hourly' | 'project';
  desiredIncrease: number;
  increasedCosts: number;
  billableHours: number;
  projectsPerYear: number;
}

interface RateCalculationResult {
  newRate: number;
  increaseAmount: number;
  increasePercentage: number;
  annualIncomeIncrease: number;
  justificationPoints: string[];
  marketPosition: string;
}

export default function FreelanceRateIncreaseCalculator() {
  const [inputs, setInputs] = useState<FreelanceRateInput>({
    currentRate: 75,
    rateType: 'hourly',
    desiredIncrease: 15,
    increasedCosts: 2000,
    billableHours: 1500,
    projectsPerYear: 24
  });

  const calculateNewRate = (): RateCalculationResult => {
    const increaseAmount = inputs.currentRate * (inputs.desiredIncrease / 100);
    const newRate = inputs.currentRate + increaseAmount;
    
    const annualIncomeIncrease = inputs.rateType === 'hourly' 
      ? increaseAmount * inputs.billableHours
      : increaseAmount * inputs.projectsPerYear;
    
    const costCoveragePercentage = (inputs.increasedCosts / annualIncomeIncrease) * 100;
    
    const justificationPoints = [
      `Covers ${costCoveragePercentage.toFixed(0)}% of increased business costs`,
      `Reflects ${inputs.desiredIncrease}% growth in expertise and value`,
      `Aligns with market inflation and industry standards`,
      `Accounts for expanded skills and portfolio development`
    ];

    let marketPosition = 'Competitive';
    if (inputs.desiredIncrease >= 20) marketPosition = 'Premium';
    else if (inputs.desiredIncrease <= 8) marketPosition = 'Conservative';

    return {
      newRate,
      increaseAmount,
      increasePercentage: inputs.desiredIncrease,
      annualIncomeIncrease,
      justificationPoints,
      marketPosition
    };
  };

  const results = calculateNewRate();

  const updateInput = (field: keyof FreelanceRateInput, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? value : Number(value) || 0
    }));
  };

  const getNextRateReviewDate = () => {
    const today = new Date();
    const nextReview = new Date(today.getFullYear() + 1, today.getMonth());
    return nextReview.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Freelance & Contractor Rate Increase Calculator",
    "description": "Calculate appropriate rate increases for freelancers and contractors. Determine new hourly or project rates with business cost analysis and market justification.",
    "url": "https://payraisepercentagecalculator.com/tools/freelance-rate-increase-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Hourly and project rate calculations",
      "Business cost analysis",
      "Client justification points",
      "Annual income projections",
      "Market positioning guidance"
    ]
  };

  return (
    <>
      <SEOHead
        title="Freelance & Contractor Rate Increase Calculator"
        description="Calculate appropriate rate increases for freelancers and contractors. Determine new hourly or project rates with business cost analysis and market justification points."
        canonical="/tools/freelance-rate-increase-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <BreadcrumbNavigation 
            items={BreadcrumbPatterns.tool("Freelance Rate Calculator")}
            className="mb-6"
          />

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Briefcase className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">
                Freelance & Contractor Rate Increase Calculator
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Calculate appropriate rate increases for your freelance or contracting business. 
              Get justification points and market positioning guidance for client discussions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Input Section */}
            <div className="lg:col-span-1">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                    Rate Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentRate">Current Rate</Label>
                    <Input
                      id="currentRate"
                      type="number"
                      value={inputs.currentRate}
                      onChange={(e) => updateInput('currentRate', e.target.value)}
                      placeholder="75"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="rateType">Rate Type</Label>
                    <select
                      id="rateType"
                      value={inputs.rateType}
                      onChange={(e) => updateInput('rateType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="hourly">Hourly Rate</option>
                      <option value="project">Project Rate</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="desiredIncrease">Desired Increase (%)</Label>
                    <Input
                      id="desiredIncrease"
                      type="number"
                      value={inputs.desiredIncrease}
                      onChange={(e) => updateInput('desiredIncrease', e.target.value)}
                      placeholder="15"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="increasedCosts">Increased Annual Costs</Label>
                    <Input
                      id="increasedCosts"
                      type="number"
                      value={inputs.increasedCosts}
                      onChange={(e) => updateInput('increasedCosts', e.target.value)}
                      placeholder="2000"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Software, insurance, equipment, etc.
                    </p>
                  </div>
                  
                  {inputs.rateType === 'hourly' ? (
                    <div>
                      <Label htmlFor="billableHours">Billable Hours per Year</Label>
                      <Input
                        id="billableHours"
                        type="number"
                        value={inputs.billableHours}
                        onChange={(e) => updateInput('billableHours', e.target.value)}
                        placeholder="1500"
                      />
                    </div>
                  ) : (
                    <div>
                      <Label htmlFor="projectsPerYear">Projects per Year</Label>
                      <Input
                        id="projectsPerYear"
                        type="number"
                        value={inputs.projectsPerYear}
                        onChange={(e) => updateInput('projectsPerYear', e.target.value)}
                        placeholder="24"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2">
              <Card className="calculator-shadow border-2 border-primary">
                <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-white">
                  <CardTitle className="text-2xl flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2" />
                    Your New Rate Calculation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Key Metrics */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        ${inputs.currentRate}
                      </div>
                      <div className="text-sm text-gray-600">Current Rate</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        ${results.newRate.toFixed(0)}
                      </div>
                      <div className="text-sm text-gray-600">New Rate</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        +${results.increaseAmount.toFixed(0)}
                      </div>
                      <div className="text-sm text-gray-600">Increase Amount</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {results.increasePercentage}%
                      </div>
                      <div className="text-sm text-gray-600">Percentage Increase</div>
                    </div>
                  </div>

                  {/* Main Results */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Rate Impact Analysis</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">New {inputs.rateType} rate:</span>
                        <span className="text-2xl font-bold text-green-600">
                          ${results.newRate.toFixed(0)}{inputs.rateType === 'hourly' ? '/hour' : '/project'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Annual income increase:</span>
                        <span className="text-2xl font-bold text-blue-600">
                          +${results.annualIncomeIncrease.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Market positioning:</span>
                        <Badge variant={results.marketPosition === 'Premium' ? 'default' : 
                                       results.marketPosition === 'Conservative' ? 'secondary' : 'outline'}>
                          {results.marketPosition}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Justification Points */}
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                      Client Justification Points
                    </h4>
                    <ul className="space-y-2">
                      {results.justificationPoints.map((point, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
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
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  Factors to Justify Your Rate Increase
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Increased Expertise</h4>
                    <p className="text-sm text-gray-600">
                      Highlight new skills, certifications, or specialized knowledge you've gained 
                      since your last rate adjustment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Portfolio Growth</h4>
                    <p className="text-sm text-gray-600">
                      Showcase successful projects, client testimonials, and measurable results 
                      you've delivered for previous clients.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Market Demand</h4>
                    <p className="text-sm text-gray-600">
                      Reference industry reports showing increased demand for your skills 
                      and current market rates for similar services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Costs</h4>
                    <p className="text-sm text-gray-600">
                      Document increases in software licenses, insurance, professional development, 
                      and other business expenses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  Rate Review Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Annual Reviews</h4>
                    <p className="text-sm text-gray-600">
                      Schedule rate reviews annually, typically at the beginning of each year 
                      or on your business anniversary.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Client Communication</h4>
                    <p className="text-sm text-gray-600">
                      Give existing clients 30-60 days notice of rate changes. Frame increases 
                      as investments in better service quality.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Grandfathering Period</h4>
                    <p className="text-sm text-gray-600">
                      Consider offering current clients a grace period at old rates for 
                      ongoing projects or as a loyalty benefit.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Next Review Date:</strong> Consider reviewing your rates again in {getNextRateReviewDate()}.
                    </p>
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
                  <InternalLink href="/tools/effective-hourly-rate-calculator" className="block text-blue-600 hover:text-blue-700">
                    Compare effective hourly rates
                  </InternalLink>
                  <InternalLink href="/tools/pay-raise-tax-impact-calculator" className="block text-blue-600 hover:text-blue-700">
                    Tax impact on income increases
                  </InternalLink>
                  <InternalLink href="/" className="block text-blue-600 hover:text-blue-700">
                    Basic raise percentage calculator
                  </InternalLink>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Business Guides</h4>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/guides/market-value-salary-research" className="block text-blue-600 hover:text-blue-700">
                    Research market rates
                  </InternalLink>
                  <InternalLink href="/blog/remote-work-raise-strategies" className="block text-blue-600 hover:text-blue-700">
                    Remote freelance strategies
                  </InternalLink>
                  <InternalLink href="/salary-negotiation-complete-guide" className="block text-blue-600 hover:text-blue-700">
                    Negotiation principles
                  </InternalLink>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Authority Sources</h4>
                <div className="space-y-2 text-sm">
                  <a 
                    href="https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    SBA freelancer resources →
                  </a>
                  <a 
                    href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    IRS self-employment guide →
                  </a>
                  <a 
                    href="https://www.bls.gov/spotlight/2016/a-look-at-the-future-of-the-u-s-labor-force-to-2024/home.htm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    BLS freelance market trends →
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