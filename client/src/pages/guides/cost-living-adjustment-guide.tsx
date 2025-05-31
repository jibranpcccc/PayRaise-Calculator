import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  TrendingUp, 
  MapPin, 
  Calculator, 
  BarChart3, 
  DollarSign, 
  Building2, 
  Home, 
  Car,
  ShoppingCart,
  Briefcase,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function CostLivingAdjustmentGuide() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");

  const colaFactors = [
    {
      category: "Housing Costs",
      weight: "35-45%",
      description: "Rent, mortgage payments, property taxes, and utilities",
      impact: "Highest impact factor in most COLA calculations",
      examples: [
        "San Francisco vs. Austin: +180% housing costs",
        "New York vs. Phoenix: +150% housing costs",
        "Seattle vs. Atlanta: +120% housing costs"
      ],
      icon: <Home className="h-6 w-6" />
    },
    {
      category: "Transportation",
      weight: "15-20%",
      description: "Gas prices, public transit, parking, and vehicle costs",
      impact: "Significant variation between urban and suburban areas",
      examples: [
        "NYC public transit: $127/month vs. car-dependent cities",
        "Downtown parking: $200-500/month in major cities",
        "Gas prices vary by $0.50-1.00/gallon between states"
      ],
      icon: <Car className="h-6 w-6" />
    },
    {
      category: "Food & Groceries",
      weight: "10-15%",
      description: "Restaurant prices, grocery costs, and daily meal expenses",
      impact: "Urban premium of 15-30% over suburban areas",
      examples: [
        "Restaurant meals 25-40% higher in major metros",
        "Grocery costs vary 10-25% between regions",
        "Coffee/lunch expenses significantly higher in business districts"
      ],
      icon: <ShoppingCart className="h-6 w-6" />
    },
    {
      category: "Healthcare",
      weight: "8-12%",
      description: "Insurance premiums, medical costs, and healthcare services",
      impact: "Regional variations in both access and pricing",
      examples: [
        "Health insurance premiums vary 20-40% by state",
        "Specialist care costs differ significantly",
        "Prescription drug prices affected by state regulations"
      ],
      icon: <Building2 className="h-6 w-6" />
    },
    {
      category: "Taxes",
      weight: "12-18%",
      description: "State income tax, sales tax, and local tax rates",
      impact: "No state income tax vs. 13.3% in high-tax states",
      examples: [
        "State income tax: 0% (TX, FL, WA) vs. 13.3% (CA)",
        "Sales tax: 0% (OR) vs. 11%+ (some localities)",
        "Property tax rates vary dramatically by location"
      ],
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  const colaCalculationMethods = [
    {
      method: "Consumer Price Index (CPI) Based",
      description: "Uses Bureau of Labor Statistics regional CPI data",
      accuracy: "High",
      pros: [
        "Official government data",
        "Standardized methodology",
        "Regular updates",
        "Comprehensive categories"
      ],
      cons: [
        "May lag current market conditions",
        "Broad averages may not reflect individual situations",
        "Limited granularity for specific roles"
      ],
      bestFor: "Government positions, large corporations with standardized policies"
    },
    {
      method: "Market Basket Analysis",
      description: "Compares specific goods and services costs between locations",
      accuracy: "Very High",
      pros: [
        "Tailored to individual spending patterns",
        "Real-time market data",
        "Role-specific adjustments possible",
        "Granular cost breakdowns"
      ],
      cons: [
        "Time-intensive to calculate",
        "Requires detailed spending data",
        "May be subjective",
        "Data collection challenges"
      ],
      bestFor: "Executive relocations, specialized roles, international assignments"
    },
    {
      method: "Salary Survey Comparison",
      description: "Uses industry salary surveys to compare regional compensation",
      accuracy: "Moderate to High",
      pros: [
        "Industry-specific data",
        "Reflects current market rates",
        "Role-level granularity",
        "Peer company benchmarking"
      ],
      cons: [
        "Limited survey participation",
        "May include other factors beyond COLA",
        "Timing of data collection varies",
        "Sample size limitations"
      ],
      bestFor: "Private sector roles, competitive industries, specific job functions"
    }
  ];

  const implementationStrategies = [
    {
      strategy: "Proactive COLA Requests",
      timing: "Annual review cycles or economic changes",
      preparation: [
        "Research current inflation rates and local economic conditions",
        "Gather data on cost increases in housing, transportation, and essentials",
        "Document impact on personal financial situation",
        "Prepare presentation with multiple data sources"
      ],
      successRate: "65-80% with strong documentation"
    },
    {
      strategy: "Relocation COLA Negotiation",
      timing: "During job offer or transfer discussions",
      preparation: [
        "Calculate comprehensive cost differences between locations",
        "Research company relocation policies and precedents",
        "Identify all affected expense categories",
        "Propose phase-in period for adjustments"
      ],
      successRate: "75-90% for company-initiated relocations"
    },
    {
      strategy: "Market-Based COLA Advocacy",
      timing: "When local market conditions change significantly",
      preparation: [
        "Monitor local job market and competitor salary ranges",
        "Track regional economic development and business growth",
        "Document talent retention challenges in the area",
        "Present business case for maintaining competitive compensation"
      ],
      successRate: "50-70% depending on company financial health"
    }
  ];

  const regionalColaData = [
    {
      region: "San Francisco Bay Area",
      colaMultiplier: 1.85,
      housingPremium: "+180%",
      overallCost: "+85%",
      keyFactors: ["Tech industry concentration", "Limited housing supply", "High state taxes"],
      recommendedMinimum: "85-100% COLA for out-of-state transfers"
    },
    {
      region: "New York City Metro",
      colaMultiplier: 1.68,
      housingPremium: "+150%",
      overallCost: "+68%",
      keyFactors: ["Manhattan premium", "State income tax", "Transportation costs"],
      recommendedMinimum: "60-75% COLA for most transfers"
    },
    {
      region: "Seattle Metro",
      colaMultiplier: 1.42,
      housingPremium: "+120%",
      overallCost: "+42%",
      keyFactors: ["No state income tax", "Growing tech sector", "Housing shortage"],
      recommendedMinimum: "35-50% COLA adjustment"
    },
    {
      region: "Los Angeles Metro",
      colaMultiplier: 1.35,
      housingPremium: "+110%",
      overallCost: "+35%",
      keyFactors: ["Entertainment industry", "High state taxes", "Transportation costs"],
      recommendedMinimum: "30-45% COLA adjustment"
    },
    {
      region: "Austin, TX",
      colaMultiplier: 1.15,
      housingPremium: "+45%",
      overallCost: "+15%",
      keyFactors: ["No state income tax", "Growing tech hub", "Moderate housing costs"],
      recommendedMinimum: "10-20% COLA adjustment"
    },
    {
      region: "National Average",
      colaMultiplier: 1.00,
      housingPremium: "Baseline",
      overallCost: "Baseline",
      keyFactors: ["Reference point for calculations"],
      recommendedMinimum: "Standard compensation structure"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cost of Living Adjustment Guide: Complete COLA Calculation & Negotiation",
    "description": "Comprehensive guide to understanding and calculating cost of living adjustments. Methods, factors, and strategies for COLA negotiations and relocations.",
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
    "url": "https://payraisepercentagecalculator.com/guides/cost-living-adjustment-guide"
  };

  return (
    <>
      <SEOHead
        title="Cost of Living Adjustment Guide: Complete COLA Calculation & Negotiation"
        description="Comprehensive guide to understanding and calculating cost of living adjustments. Methods, factors, and strategies for COLA negotiations and relocations."
        canonical="/guides/cost-living-adjustment-guide"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cost of Living Adjustment Guide: Complete COLA Calculation & Negotiation
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Master the art of cost of living adjustments with comprehensive calculation methods, 
              negotiation strategies, and real-world regional data for informed salary discussions.
            </p>
          </div>

          {/* Quick COLA Calculator */}
          <section className="mb-12">
            <Card className="bg-primary text-white">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Quick COLA Assessment Tool</CardTitle>
                <p className="text-center text-lg opacity-90">
                  Get started with our preliminary cost comparison
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div>
                    <Label htmlFor="current-location" className="text-white">Current Location</Label>
                    <Input
                      id="current-location"
                      placeholder="Austin, TX"
                      value={currentLocation}
                      onChange={(e) => setCurrentLocation(e.target.value)}
                      className="bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-location" className="text-white">New Location</Label>
                    <Input
                      id="new-location"
                      placeholder="San Francisco, CA"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="current-salary" className="text-white">Current Salary</Label>
                    <Input
                      id="current-salary"
                      placeholder="85000"
                      value={currentSalary}
                      onChange={(e) => setCurrentSalary(e.target.value)}
                      className="bg-white text-gray-900"
                    />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Link href="/tools/cola-calculator">
                    <Button variant="secondary" size="lg" className="px-8">
                      Calculate Detailed COLA
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* COLA Factors */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Factors in COLA Calculations
            </h2>
            <div className="space-y-6">
              {colaFactors.map((factor, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 bg-primary text-white rounded-lg">
                          {factor.icon}
                        </div>
                        {factor.category}
                      </CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{factor.weight}</div>
                        <div className="text-xs text-gray-500">of COLA</div>
                      </div>
                    </div>
                    <p className="text-gray-600">{factor.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Impact Overview</h4>
                        <p className="text-gray-700 bg-blue-50 p-3 rounded-lg">{factor.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Real-World Examples</h4>
                        <ul className="space-y-2">
                          {factor.examples.map((example, eIndex) => (
                            <li key={eIndex} className="flex items-start gap-2">
                              <BarChart3 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Calculation Methods */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              COLA Calculation Methods
            </h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {colaCalculationMethods.map((method, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{method.method}</CardTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Accuracy:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        method.accuracy === 'Very High' ? 'bg-green-100 text-green-700' :
                        method.accuracy === 'High' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {method.accuracy}
                      </span>
                    </div>
                    <p className="text-gray-600">{method.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Advantages</h4>
                        <ul className="space-y-1">
                          {method.pros.map((pro, pIndex) => (
                            <li key={pIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-700 mb-2">Limitations</h4>
                        <ul className="space-y-1">
                          {method.cons.map((con, cIndex) => (
                            <li key={cIndex} className="flex items-start gap-2">
                              <AlertCircle className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 mb-1">Best For:</h5>
                        <p className="text-sm text-gray-700">{method.bestFor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Regional COLA Data */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Regional COLA Reference Data</CardTitle>
                <p className="text-gray-600">
                  Comparative cost adjustments for major US metropolitan areas
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalColaData.map((region, index) => (
                    <Card key={index} className="bg-gray-50">
                      <CardContent className="p-6">
                        <div className="grid lg:grid-cols-4 gap-4 items-center">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{region.region}</h3>
                            <p className="text-sm text-gray-600">Multiplier: {region.colaMultiplier}x</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{region.overallCost}</div>
                            <div className="text-xs text-gray-500">vs. National Avg</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-orange-600">{region.housingPremium}</div>
                            <div className="text-xs text-gray-500">Housing Premium</div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-700 mb-2">{region.recommendedMinimum}</p>
                            <div className="flex flex-wrap gap-1">
                              {region.keyFactors.map((factor, fIndex) => (
                                <span key={fIndex} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                                  {factor}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              COLA Implementation Strategies
            </h2>
            <div className="space-y-6">
              {implementationStrategies.map((strategy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{strategy.strategy}</CardTitle>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{strategy.successRate}</div>
                        <div className="text-xs text-gray-500">Success Rate</div>
                      </div>
                    </div>
                    <p className="text-gray-600">Best timing: {strategy.timing}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-gray-900 mb-3">Preparation Steps:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {strategy.preparation.map((step, sIndex) => (
                        <div key={sIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                            {sIndex + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Tools & Resources */}
          <section>
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Calculate Your COLA Requirements</h2>
                <p className="text-lg mb-6">
                  Use our comprehensive tools to determine fair cost of living adjustments
                </p>
                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Link href="/tools/cola-calculator">
                    <Button variant="secondary" className="w-full">
                      COLA Calculator
                    </Button>
                  </Link>
                  <Link href="/tools/remote-work-location-adjuster">
                    <Button variant="secondary" className="w-full">
                      Location Adjuster
                    </Button>
                  </Link>
                  <Link href="/tools/salary-negotiation-calculator">
                    <Button variant="secondary" className="w-full">
                      Negotiation Planner
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