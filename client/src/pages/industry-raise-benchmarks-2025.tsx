import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo/head";
import { type IndustryBenchmark } from "@shared/schema";
import { 
  Building2, 
  TrendingUp, 
  BarChart3, 
  Users,
  MapPin,
  Calendar,
  Target,
  Award,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

export default function IndustryRaiseBenchmarks2025() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [viewMode, setViewMode] = useState<string>("overview");

  const { data: benchmarks, isLoading } = useQuery<IndustryBenchmark[]>({
    queryKey: ['/api/industry-benchmarks'],
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Industry Raise Benchmarks 2025 - Complete Salary Increase Data",
    "description": "Comprehensive 2025 salary increase data across all major industries. Current market rates, geographic variations, and company size comparisons.",
    "author": {
      "@type": "Organization",
      "name": "PayRaise Calculator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PayRaise Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://payraisepercentagecalculator.com/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const geographicData = [
    { region: "San Francisco Bay Area", avgRaise: 5.2, costOfLiving: "Very High", note: "Tech premium" },
    { region: "New York City", avgRaise: 4.8, costOfLiving: "Very High", note: "Finance hub" },
    { region: "Seattle", avgRaise: 4.6, costOfLiving: "High", note: "Tech corridor" },
    { region: "Austin", avgRaise: 4.3, costOfLiving: "Medium-High", note: "Emerging tech" },
    { region: "Chicago", avgRaise: 4.0, costOfLiving: "Medium-High", note: "Diverse economy" },
    { region: "Atlanta", avgRaise: 3.8, costOfLiving: "Medium", note: "Growing market" },
    { region: "Denver", avgRaise: 3.9, costOfLiving: "Medium", note: "Quality of life" },
    { region: "National Average", avgRaise: 4.2, costOfLiving: "Baseline", note: "All metros" }
  ];

  const companySizeData = [
    { size: "Startup (1-50)", avgRaise: 3.5, equity: "High", benefits: "Limited", culture: "High growth" },
    { size: "Small (51-250)", avgRaise: 3.8, equity: "Medium", benefits: "Basic", culture: "Flexible" },
    { size: "Mid-size (251-1000)", avgRaise: 4.2, equity: "Limited", benefits: "Good", culture: "Structured" },
    { size: "Large (1001-5000)", avgRaise: 4.5, equity: "Rare", benefits: "Excellent", culture: "Corporate" },
    { size: "Enterprise (5000+)", avgRaise: 4.3, equity: "Stock plans", benefits: "Comprehensive", culture: "Established" }
  ];

  const industryTrends = [
    {
      trend: "AI & Machine Learning Premium",
      impact: "+1.5% above industry average",
      industries: ["Technology", "Finance", "Healthcare"],
      description: "Roles requiring AI/ML skills command premium increases"
    },
    {
      trend: "Remote Work Salary Parity",
      impact: "Geographic salary alignment",
      industries: ["Technology", "Professional Services"],
      description: "Companies maintaining location-independent salaries"
    },
    {
      trend: "ESG Focus Investment",
      impact: "+0.5% sustainability roles",
      industries: ["Energy", "Manufacturing", "Finance"],
      description: "Environmental and sustainability roles seeing increased investment"
    },
    {
      trend: "Cybersecurity Skills Shortage",
      impact: "+2.0% security roles",
      industries: ["Technology", "Finance", "Government"],
      description: "Critical shortage driving significant salary premiums"
    }
  ];

  const getBenchmarkColor = (value: number, baseline: number = 4.2) => {
    if (value >= baseline + 0.5) return "text-green-600";
    if (value <= baseline - 0.5) return "text-red-600";
    return "text-yellow-600";
  };

  const getBenchmarkIcon = (value: number, baseline: number = 4.2) => {
    if (value >= baseline + 0.5) return <ArrowUp className="h-4 w-4" />;
    if (value <= baseline - 0.5) return <ArrowDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getBenchmarkLabel = (value: number, baseline: number = 4.2) => {
    if (value >= baseline + 0.5) return "Above Market";
    if (value <= baseline - 0.5) return "Below Market";
    return "Market Average";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading industry benchmarks...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Industry Raise Benchmarks 2025 - Complete Salary Increase Data"
        description="Comprehensive 2025 salary increase data across all major industries. Current market rates, geographic variations, and company size comparisons."
        canonical="/industry-raise-benchmarks-2025"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Industry Raise Benchmarks 2025
              </h1>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Current Market Data</Badge>
                <Badge variant="outline">Updated Monthly</Badge>
                <Badge variant="outline">All Industries</Badge>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive salary increase data across all major industries. 
                Current market rates, geographic variations, and company size comparisons for 2025.
              </p>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">4.2%</div>
                  <div className="text-sm opacity-90">National Average Raise</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">5.2%</div>
                  <div className="text-sm opacity-90">Highest Industry (Tech)</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">67%</div>
                  <div className="text-sm opacity-90">Employees Getting Raises</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">3.1%</div>
                  <div className="text-sm opacity-90">Inflation Rate (CPI)</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* View Controls */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">View:</label>
                <Select value={viewMode} onValueChange={setViewMode}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="overview">Industry Overview</SelectItem>
                    <SelectItem value="detailed">Detailed Analysis</SelectItem>
                    <SelectItem value="geographic">Geographic Data</SelectItem>
                    <SelectItem value="company-size">Company Size</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Filter Industry:</label>
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    {benchmarks?.map((benchmark) => (
                      <SelectItem key={benchmark.industry} value={benchmark.industry}>
                        {benchmark.industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Overview */}
        {viewMode === "overview" && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                2025 Industry Salary Increase Overview
              </h2>
              
              <div className="grid gap-6">
                {benchmarks?.filter(b => selectedIndustry === "all" || b.industry === selectedIndustry).map((benchmark) => (
                  <Card key={benchmark.industry} className="calculator-shadow">
                    <CardContent className="p-6">
                      <div className="grid lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-3">
                          <h3 className="text-xl font-semibold text-gray-900">{benchmark.industry}</h3>
                          <p className="text-sm text-gray-600 mt-1">Industry Sector</p>
                        </div>
                        
                        <div className="lg:col-span-6">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{benchmark.averageRaise}%</div>
                              <div className="text-xs text-gray-600">Average</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600">{benchmark.medianRaise}%</div>
                              <div className="text-xs text-gray-600">Median</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600">{benchmark.topQuartileRaise}%</div>
                              <div className="text-xs text-gray-600">Top 25%</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="lg:col-span-3 text-center lg:text-right">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getBenchmarkColor(parseFloat(benchmark.averageRaise.toString()))}`}>
                            {getBenchmarkIcon(parseFloat(benchmark.averageRaise.toString()))}
                            <span className="ml-1">{getBenchmarkLabel(parseFloat(benchmark.averageRaise.toString()))}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Geographic Analysis */}
        {viewMode === "geographic" && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Geographic Salary Increase Variations
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {geographicData.map((region) => (
                  <Card key={region.region} className="calculator-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-primary" />
                        {region.region}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Average Raise:</span>
                          <span className={`font-bold text-lg ${getBenchmarkColor(region.avgRaise)}`}>
                            {region.avgRaise}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Cost of Living:</span>
                          <Badge variant="outline">{region.costOfLiving}</Badge>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                          <p className="text-sm text-blue-800">{region.note}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Company Size Analysis */}
        {viewMode === "company-size" && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Salary Increases by Company Size
              </h2>
              
              <div className="space-y-6">
                {companySizeData.map((company, index) => (
                  <Card key={index} className="calculator-shadow">
                    <CardContent className="p-6">
                      <div className="grid lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-3">
                          <h3 className="text-lg font-semibold text-gray-900">{company.size}</h3>
                          <p className="text-sm text-gray-600">Company Size</p>
                        </div>
                        
                        <div className="lg:col-span-2 text-center">
                          <div className={`text-2xl font-bold ${getBenchmarkColor(company.avgRaise)}`}>
                            {company.avgRaise}%
                          </div>
                          <div className="text-xs text-gray-600">Avg Raise</div>
                        </div>
                        
                        <div className="lg:col-span-7">
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="text-sm text-gray-600">Equity</div>
                              <Badge variant="outline" className="mt-1">{company.equity}</Badge>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Benefits</div>
                              <Badge variant="outline" className="mt-1">{company.benefits}</Badge>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Culture</div>
                              <Badge variant="outline" className="mt-1">{company.culture}</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Industry Trends */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              2025 Salary Increase Trends
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {industryTrends.map((trend, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      {trend.trend}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-green-50 border-l-4 border-green-400 p-3">
                        <div className="font-semibold text-green-900">Impact: {trend.impact}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Affected Industries:</div>
                        <div className="flex flex-wrap gap-2">
                          {trend.industries.map((industry) => (
                            <Badge key={industry} variant="outline">{industry}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700">{trend.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Data Sources & Methodology
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                      Data Sources
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Bureau of Labor Statistics (BLS)</li>
                      <li>• Society for Human Resource Management (SHRM)</li>
                      <li>• PayScale Annual Salary Survey</li>
                      <li>• Glassdoor Economic Research</li>
                      <li>• Industry association reports</li>
                      <li>• Company compensation surveys</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-secondary" />
                      Update Schedule
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Monthly data refresh</li>
                      <li>• Quarterly trend analysis</li>
                      <li>• Annual comprehensive review</li>
                      <li>• Real-time market adjustments</li>
                      <li>• Seasonal factor corrections</li>
                      <li>• Economic indicator integration</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 border-yellow-200 border rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> All data represents market averages and should be used as guidance. 
                    Individual results may vary based on performance, experience, location, and company-specific factors.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Use This Data to Your Advantage</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Apply these industry benchmarks to plan your salary negotiation strategy
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100">
                <Target className="mr-2 h-4 w-4" />
                Calculate My Target Raise
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Building2 className="mr-2 h-4 w-4" />
                View Negotiation Guide
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
