import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  TrendingUp, 
  Building2, 
  BarChart3, 
  Target, 
  Users, 
  MapPin, 
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap
} from "lucide-react";

export default function AverageRaiseByIndustry2025() {
  const [selectedIndustry, setSelectedIndustry] = useState("technology");

  const industryData = [
    {
      industry: "Technology",
      slug: "technology",
      averageRaise: 6.8,
      medianRaise: 5.5,
      topQuartile: 12.0,
      growthTrend: "Strong",
      marketCondition: "Hot",
      color: "bg-blue-500",
      icon: <Zap className="h-6 w-6" />,
      roles: [
        { title: "Software Engineer", average: 7.2, range: "4-15%" },
        { title: "Data Scientist", average: 8.5, range: "5-18%" },
        { title: "Product Manager", average: 6.8, range: "4-12%" },
        { title: "DevOps Engineer", average: 7.8, range: "5-16%" },
        { title: "UI/UX Designer", average: 6.2, range: "3-11%" }
      ],
      factors: [
        "AI and machine learning skills premium",
        "Remote work competition for talent",
        "Venture capital funding driving salaries",
        "Skills shortage in specialized areas"
      ],
      outlook: "Continued strong growth expected through 2025 with AI-related roles commanding premium increases."
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      averageRaise: 4.2,
      medianRaise: 3.8,
      topQuartile: 7.5,
      growthTrend: "Stable",
      marketCondition: "Competitive",
      color: "bg-green-500",
      icon: <Users className="h-6 w-6" />,
      roles: [
        { title: "Registered Nurse", average: 4.5, range: "3-8%" },
        { title: "Physician", average: 3.8, range: "2-6%" },
        { title: "Healthcare Administrator", average: 4.2, range: "2-7%" },
        { title: "Physical Therapist", average: 4.8, range: "3-9%" },
        { title: "Medical Technician", average: 3.9, range: "2-7%" }
      ],
      factors: [
        "Aging population increasing demand",
        "Regulatory compliance requirements",
        "Rural healthcare worker shortages",
        "Burnout and retention challenges"
      ],
      outlook: "Steady growth with specialized roles and rural positions seeing higher increases."
    },
    {
      industry: "Financial Services",
      slug: "financial",
      averageRaise: 5.1,
      medianRaise: 4.3,
      topQuartile: 8.8,
      growthTrend: "Moderate",
      marketCondition: "Stable",
      color: "bg-yellow-500",
      icon: <DollarSign className="h-6 w-6" />,
      roles: [
        { title: "Financial Analyst", average: 5.2, range: "3-9%" },
        { title: "Investment Banker", average: 6.8, range: "4-15%" },
        { title: "Risk Manager", average: 4.9, range: "3-8%" },
        { title: "Compliance Officer", average: 4.5, range: "2-7%" },
        { title: "Wealth Advisor", average: 5.8, range: "3-12%" }
      ],
      factors: [
        "Fintech disruption driving innovation",
        "Regulatory complexity requiring expertise",
        "Digital transformation investments",
        "ESG and sustainability focus"
      ],
      outlook: "Moderate growth with fintech and digital roles leading increases."
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      averageRaise: 3.6,
      medianRaise: 3.2,
      topQuartile: 6.1,
      growthTrend: "Slow",
      marketCondition: "Traditional",
      color: "bg-orange-500",
      icon: <Building2 className="h-6 w-6" />,
      roles: [
        { title: "Production Manager", average: 4.1, range: "2-7%" },
        { title: "Quality Engineer", average: 4.2, range: "3-8%" },
        { title: "Machine Operator", average: 3.2, range: "2-5%" },
        { title: "Supply Chain Manager", average: 4.8, range: "3-9%" },
        { title: "Industrial Engineer", average: 3.9, range: "2-7%" }
      ],
      factors: [
        "Automation reducing workforce needs",
        "Supply chain optimization focus",
        "Sustainability and efficiency drives",
        "Skilled trades worker shortage"
      ],
      outlook: "Modest increases with automation and supply chain roles seeing higher growth."
    },
    {
      industry: "Retail & E-commerce",
      slug: "retail",
      averageRaise: 3.1,
      medianRaise: 2.8,
      topQuartile: 5.5,
      growthTrend: "Variable",
      marketCondition: "Competitive",
      color: "bg-purple-500",
      icon: <MapPin className="h-6 w-6" />,
      roles: [
        { title: "Store Manager", average: 3.8, range: "2-7%" },
        { title: "E-commerce Manager", average: 5.2, range: "3-10%" },
        { title: "Sales Associate", average: 2.5, range: "1-4%" },
        { title: "Buyer/Merchandiser", average: 4.1, range: "2-8%" },
        { title: "Customer Success", average: 3.9, range: "2-7%" }
      ],
      factors: [
        "Minimum wage increases driving base pay",
        "E-commerce growth creating opportunities",
        "Seasonal workforce fluctuations",
        "Customer experience focus"
      ],
      outlook: "Mixed results with e-commerce and management roles outperforming traditional retail."
    },
    {
      industry: "Education",
      slug: "education",
      averageRaise: 2.9,
      medianRaise: 2.5,
      topQuartile: 4.8,
      growthTrend: "Constrained",
      marketCondition: "Budget-Limited",
      color: "bg-red-500",
      icon: <Target className="h-6 w-6" />,
      roles: [
        { title: "Teacher (K-12)", average: 2.8, range: "1-5%" },
        { title: "Professor", average: 3.2, range: "2-6%" },
        { title: "Administrator", average: 3.5, range: "2-7%" },
        { title: "EdTech Specialist", average: 4.8, range: "3-9%" },
        { title: "Counselor", average: 2.9, range: "1-5%" }
      ],
      factors: [
        "Budget constraints in public sector",
        "Teacher shortages in some regions",
        "Technology integration needs",
        "Student debt concerns affecting recruitment"
      ],
      outlook: "Limited growth due to budget constraints, with technology roles seeing better increases."
    }
  ];

  const currentIndustry = industryData.find(ind => ind.slug === selectedIndustry) || industryData[0];

  const regionalVariations = [
    {
      region: "West Coast (CA, WA, OR)",
      adjustment: "+15-25%",
      description: "Higher cost of living and tech industry concentration drive premium raises",
      topIndustries: ["Technology", "Healthcare", "Financial Services"]
    },
    {
      region: "Northeast (NY, MA, CT)",
      adjustment: "+10-20%",
      description: "Financial services hub with high living costs support elevated compensation",
      topIndustries: ["Financial Services", "Healthcare", "Education"]
    },
    {
      region: "Southwest (TX, AZ, NV)",
      adjustment: "+5-15%",
      description: "Growing business centers with moderate cost adjustments",
      topIndustries: ["Technology", "Manufacturing", "Healthcare"]
    },
    {
      region: "Southeast (FL, GA, NC)",
      adjustment: "0-10%",
      description: "Balanced growth markets with competitive but moderate raises",
      topIndustries: ["Manufacturing", "Healthcare", "Retail"]
    },
    {
      region: "Midwest (IL, OH, MI)",
      adjustment: "-5-5%",
      description: "Traditional manufacturing base with stable but modest increases",
      topIndustries: ["Manufacturing", "Healthcare", "Financial Services"]
    }
  ];

  const companySizeImpact = [
    {
      size: "Fortune 500",
      employees: "10,000+",
      raiseBonus: "+1.5-3.0%",
      characteristics: "Structured programs, comprehensive benefits, market-leading compensation"
    },
    {
      size: "Large Enterprise",
      employees: "1,000-10,000",
      raiseBonus: "+0.5-2.0%",
      characteristics: "Formal review processes, competitive packages, growth opportunities"
    },
    {
      size: "Mid-Size Company",
      employees: "100-1,000",
      raiseBonus: "Baseline",
      characteristics: "Flexible approaches, performance-based, rapidly evolving compensation"
    },
    {
      size: "Small Business",
      employees: "10-100",
      raiseBonus: "-0.5-1.5%",
      characteristics: "Variable budgets, equity potential, close-knit culture benefits"
    },
    {
      size: "Startup",
      employees: "<10",
      raiseBonus: "-1.0-2.0%",
      characteristics: "Equity-heavy, high variability, significant upside potential"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Average Raise by Industry 2025: Complete Salary Increase Data & Trends",
    "description": "Comprehensive 2025 industry salary raise data across technology, healthcare, finance, manufacturing, retail, and education. Regional variations and company size analysis.",
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
    "url": "https://payraisepercentagecalculator.com/blog/average-raise-by-industry-2025"
  };

  return (
    <>
      <SEOHead
        title="Average Raise by Industry 2025: Complete Salary Increase Data & Trends"
        description="Comprehensive 2025 industry salary raise data across technology, healthcare, finance, manufacturing, retail, and education. Regional variations and company size analysis."
        canonical="/blog/average-raise-by-industry-2025"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Average Raise by Industry 2025: Complete Salary Increase Data & Trends
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive analysis of salary increase patterns across major industries. 
              Real data from 2025 surveys, regional variations, and role-specific breakdowns for informed negotiations.
            </p>
          </div>

          {/* Industry Overview Cards */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Raise Overview</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {industryData.map((industry) => (
                <Card 
                  key={industry.slug}
                  className={`cursor-pointer transition-all ${
                    selectedIndustry === industry.slug ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedIndustry(industry.slug)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 ${industry.color} text-white rounded-lg`}>
                          {industry.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{industry.industry}</h3>
                      </div>
                      <Badge 
                        variant={industry.growthTrend === 'Strong' ? 'default' : 
                                industry.growthTrend === 'Moderate' ? 'secondary' : 'outline'}
                      >
                        {industry.growthTrend}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Average Raise:</span>
                        <span className="font-bold text-2xl text-primary">{industry.averageRaise}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Median:</span>
                        <span className="font-medium">{industry.medianRaise}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Top 25%:</span>
                        <span className="font-medium text-green-600">{industry.topQuartile}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detailed Industry Analysis */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className={`p-2 ${currentIndustry.color} text-white rounded-lg`}>
                    {currentIndustry.icon}
                  </div>
                  {currentIndustry.industry} - Detailed Analysis
                </CardTitle>
                <div className="flex gap-2">
                  <Badge variant="secondary">{currentIndustry.marketCondition} Market</Badge>
                  <Badge variant="outline">{currentIndustry.growthTrend} Growth</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="roles" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="roles">Role Breakdown</TabsTrigger>
                    <TabsTrigger value="factors">Market Factors</TabsTrigger>
                    <TabsTrigger value="outlook">2025 Outlook</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="roles" className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Raises by Role</h3>
                    <div className="space-y-3">
                      {currentIndustry.roles.map((role, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{role.title}</h4>
                            <p className="text-sm text-gray-600">Range: {role.range}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{role.average}%</div>
                            <div className="text-xs text-gray-500">Average</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="factors" className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Market Factors</h3>
                    <div className="space-y-3">
                      {currentIndustry.factors.map((factor, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="outlook" className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">2025 Market Outlook</h3>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <p className="text-gray-700">{currentIndustry.outlook}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Regional Variations */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Regional Salary Variations</CardTitle>
                <p className="text-gray-600">How geographic location affects industry raise patterns</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {regionalVariations.map((region, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{region.region}</h3>
                        <Badge 
                          variant={region.adjustment.includes('+') ? 'default' : 'secondary'}
                          className="text-lg px-3 py-1"
                        >
                          {region.adjustment}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{region.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {region.topIndustries.map((industry, iIndex) => (
                          <Badge key={iIndex} variant="outline" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Company Size Impact */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Company Size Impact on Raises</CardTitle>
                <p className="text-gray-600">How organization size affects compensation growth</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {companySizeImpact.map((company, index) => (
                    <Card key={index} className="bg-gray-50">
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-4 gap-4 items-center">
                          <div>
                            <h3 className="font-semibold text-gray-900">{company.size}</h3>
                            <p className="text-sm text-gray-600">{company.employees} employees</p>
                          </div>
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${
                              company.raiseBonus.includes('+') ? 'text-green-600' : 
                              company.raiseBonus.includes('-') ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              {company.raiseBonus}
                            </div>
                            <div className="text-xs text-gray-500">vs. Baseline</div>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-gray-700 text-sm">{company.characteristics}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Action Section */}
          <section>
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Calculate Your Industry-Specific Raise</h2>
                <p className="text-lg mb-6">
                  Use our tools to see how your raise compares to industry standards
                </p>
                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Link href="/">
                    <Button variant="secondary" className="w-full">
                      Calculate Your Raise
                    </Button>
                  </Link>
                  <Link href="/industry-raise-benchmarks-2025">
                    <Button variant="secondary" className="w-full">
                      View All Benchmarks
                    </Button>
                  </Link>
                  <Link href="/tools/salary-negotiation-calculator">
                    <Button variant="secondary" className="w-full">
                      Plan Negotiation
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