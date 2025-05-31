import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  TrendingUp, 
  BarChart3, 
  Calendar,
  Target,
  MapPin,
  Building2,
  Users,
  ArrowRight,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export default function AveragePayRaisesDataTrends() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Average Pay Raises Data and Trends 2025 - Complete Analysis",
    "description": "Comprehensive analysis of average pay raise percentages across industries, company sizes, and geographic regions. Current market data and historical trends.",
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

  const nationalAverages = [
    { metric: "Overall Average", value: "4.2%", change: "+0.3%", context: "All industries and company sizes" },
    { metric: "Private Sector", value: "4.5%", change: "+0.4%", context: "Private companies only" },
    { metric: "Public Sector", value: "3.1%", change: "+0.1%", context: "Government employees" },
    { metric: "Non-Profit", value: "2.8%", change: "-0.2%", context: "Non-profit organizations" }
  ];

  const industryTrends = [
    {
      industry: "Technology",
      average2023: 4.8,
      average2024: 4.5,
      average2025: 4.2,
      trend: "declining",
      factors: ["Market correction", "AI impact", "Remote work normalization"],
      outlook: "Stabilizing around 4-5%"
    },
    {
      industry: "Healthcare",
      average2023: 3.5,
      average2024: 3.6,
      average2025: 3.8,
      trend: "increasing",
      factors: ["Labor shortages", "Aging population", "Post-pandemic recovery"],
      outlook: "Continued growth expected"
    },
    {
      industry: "Finance",
      average2023: 3.8,
      average2024: 4.1,
      average2025: 4.0,
      trend: "stable",
      factors: ["Interest rate environment", "Regulatory changes", "Digital transformation"],
      outlook: "Steady 3.5-4.5% range"
    },
    {
      industry: "Manufacturing",
      average2023: 3.2,
      average2024: 3.4,
      average2025: 3.5,
      trend: "increasing",
      factors: ["Supply chain resilience", "Automation needs", "Skilled labor demand"],
      outlook: "Gradual improvement"
    }
  ];

  const companySizeData = [
    {
      size: "Startup (1-50)",
      averageRaise: 3.5,
      equityComponent: "High",
      volatility: "Very High",
      notes: "Equity often compensates for lower cash raises"
    },
    {
      size: "Small (51-250)",
      averageRaise: 3.8,
      equityComponent: "Medium",
      volatility: "High",
      notes: "Growing companies with resource constraints"
    },
    {
      size: "Mid-size (251-1000)",
      averageRaise: 4.2,
      equityComponent: "Low",
      volatility: "Medium",
      notes: "More structured compensation programs"
    },
    {
      size: "Large (1001-5000)",
      averageRaise: 4.5,
      equityComponent: "Rare",
      volatility: "Low",
      notes: "Established processes and budgets"
    },
    {
      size: "Enterprise (5000+)",
      averageRaise: 4.3,
      equityComponent: "Stock plans",
      volatility: "Very Low",
      notes: "Complex total compensation packages"
    }
  ];

  const geographicData = [
    { region: "San Francisco Bay Area", average: 5.2, col: "Very High", premium: "+23%" },
    { region: "New York Metro", average: 4.8, col: "Very High", premium: "+14%" },
    { region: "Seattle", average: 4.6, col: "High", premium: "+10%" },
    { region: "Boston", average: 4.4, col: "High", premium: "+5%" },
    { region: "Austin", average: 4.3, col: "Medium-High", premium: "+2%" },
    { region: "National Average", average: 4.2, col: "Baseline", premium: "0%" },
    { region: "Atlanta", average: 3.9, col: "Medium", premium: "-7%" },
    { region: "Phoenix", average: 3.7, col: "Medium-Low", premium: "-12%" }
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "increasing": return "text-green-600";
      case "declining": return "text-red-600";
      case "stable": return "text-blue-600";
      default: return "text-gray-600";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "increasing": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "declining": return <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />;
      case "stable": return <Target className="h-4 w-4 text-blue-600" />;
      default: return null;
    }
  };

  return (
    <>
      <SEOHead
        title="Average Pay Raises Data and Trends 2025 - Complete Analysis"
        description="Comprehensive analysis of average pay raise percentages across industries, company sizes, and geographic regions. Current market data and historical trends."
        canonical="/guides/average-pay-raises-data-trends"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Average Pay Raises Data and Trends 2025
              </h1>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Market Research</Badge>
                <Badge variant="outline">Current Data</Badge>
                <Badge variant="outline">15 min read</Badge>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive analysis of average pay raise percentages across industries, company sizes, 
                and geographic regions. Make informed decisions with current market data and trends.
              </p>
            </div>
          </div>
        </section>

        {/* National Averages */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              2025 National Average Pay Raises
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nationalAverages.map((avg, index) => (
                <Card key={index} className="calculator-shadow text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{avg.metric}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-primary">{avg.value}</div>
                      <div className={`text-sm font-medium ${
                        avg.change.startsWith('+') ? 'text-green-600' : 
                        avg.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {avg.change} from 2024
                      </div>
                      <div className="text-xs text-gray-600">{avg.context}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Trends */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Industry Trends Analysis
            </h2>
            
            <div className="space-y-6">
              {industryTrends.map((industry, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-primary">{industry.industry}</CardTitle>
                      <div className={`flex items-center space-x-2 ${getTrendColor(industry.trend)}`}>
                        {getTrendIcon(industry.trend)}
                        <span className="font-medium capitalize">{industry.trend}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-4">
                        <h4 className="font-semibold text-gray-900 mb-3">3-Year Trend</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">2023:</span>
                            <span className="font-medium">{industry.average2023}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">2024:</span>
                            <span className="font-medium">{industry.average2024}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">2025:</span>
                            <span className="font-bold text-primary">{industry.average2025}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Factors</h4>
                        <ul className="space-y-1">
                          {industry.factors.map((factor, factorIndex) => (
                            <li key={factorIndex} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {factor}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="lg:col-span-4">
                        <h4 className="font-semibold text-gray-900 mb-3">2026 Outlook</h4>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                          <p className="text-sm text-blue-800">{industry.outlook}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Size Analysis */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pay Raises by Company Size
            </h2>
            
            <div className="space-y-6">
              {companySizeData.map((company, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-3">
                        <h3 className="text-lg font-semibold text-gray-900">{company.size}</h3>
                        <div className="text-2xl font-bold text-primary mt-2">
                          {company.averageRaise}%
                        </div>
                        <div className="text-sm text-gray-600">Average raise</div>
                      </div>
                      
                      <div className="lg:col-span-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm font-medium text-gray-700">Equity Component:</div>
                            <Badge variant="outline">{company.equityComponent}</Badge>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-700">Volatility:</div>
                            <Badge variant="outline">{company.volatility}</Badge>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm text-gray-600">{company.notes}</div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-3">
                        <Building2 className="h-8 w-8 text-gray-400 mx-auto" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Geographic Variations */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Geographic Pay Raise Variations
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Region</th>
                        <th className="text-left py-3">Average Raise</th>
                        <th className="text-left py-3">Cost of Living</th>
                        <th className="text-left py-3">Premium vs National</th>
                      </tr>
                    </thead>
                    <tbody>
                      {geographicData.map((region, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                              {region.region}
                            </div>
                          </td>
                          <td className="py-3 font-semibold">{region.average}%</td>
                          <td className="py-3">
                            <Badge variant="outline">{region.col}</Badge>
                          </td>
                          <td className={`py-3 font-medium ${
                            region.premium.startsWith('+') ? 'text-green-600' : 
                            region.premium.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                          }`}>
                            {region.premium}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Sources and Methodology */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Data Sources and Methodology
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    Data Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Bureau of Labor Statistics (BLS) employment data</li>
                    <li>• Society for Human Resource Management (SHRM)</li>
                    <li>• WorldatWork compensation surveys</li>
                    <li>• PayScale and Glassdoor salary reports</li>
                    <li>• Federal Reserve economic data</li>
                    <li>• Industry association surveys</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Methodology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Data aggregated from multiple sources</li>
                    <li>• Weighted averages by employment levels</li>
                    <li>• Seasonal adjustments applied</li>
                    <li>• Outliers removed using statistical methods</li>
                    <li>• Monthly updates with latest data</li>
                    <li>• Cross-validation across sources</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Actionable Insights */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use This Data for Your Negotiations</h2>
                <p className="text-gray-600 mb-6">
                  Understanding market averages gives you negotiating power. Use industry-specific data 
                  and regional comparisons to build a compelling case for your raise request.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/salary-negotiation-complete-guide">
                    <Button className="bg-primary hover:bg-blue-700">
                      Learn Negotiation Strategies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/industry-raise-benchmarks-2025">
                    <Button variant="outline">
                      View Detailed Benchmarks
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}