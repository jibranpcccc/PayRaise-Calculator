import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  Search, 
  BarChart3, 
  Users, 
  Building2, 
  MapPin, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  FileText,
  Calculator
} from "lucide-react";

export default function MarketValueSalaryResearch() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const researchSources = [
    {
      category: "Government & Official Sources",
      reliability: "Very High",
      sources: [
        {
          name: "Bureau of Labor Statistics (BLS)",
          url: "https://www.bls.gov/oes/",
          description: "Official government salary data by occupation and location",
          pros: ["Highly accurate", "Comprehensive coverage", "Geographic breakdowns"],
          cons: ["May lag current market", "Broad categories"]
        },
        {
          name: "Federal Pay Scales",
          url: "https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/",
          description: "Government salary standards and locality adjustments",
          pros: ["Transparent methodology", "Regular updates", "Location adjustments"],
          cons: ["Government-specific", "Limited private sector relevance"]
        }
      ]
    },
    {
      category: "Professional Salary Surveys",
      reliability: "High",
      sources: [
        {
          name: "Glassdoor",
          url: "https://www.glassdoor.com/",
          description: "Employee-reported salaries with company insights",
          pros: ["Real employee data", "Company-specific info", "Recent submissions"],
          cons: ["Self-reported accuracy", "Sample bias toward larger companies"]
        },
        {
          name: "PayScale",
          url: "https://www.payscale.com/",
          description: "Skills-based compensation analysis",
          pros: ["Detailed skill breakdowns", "Education impact", "Certification premiums"],
          cons: ["Requires profile completion", "Premium features cost extra"]
        },
        {
          name: "Salary.com",
          url: "https://www.salary.com/",
          description: "Professional salary benchmarking platform",
          pros: ["Detailed job descriptions", "Total compensation", "Market percentiles"],
          cons: ["Limited free data", "Registration required"]
        }
      ]
    },
    {
      category: "Industry-Specific Resources",
      reliability: "High",
      sources: [
        {
          name: "Robert Half Salary Guide",
          url: "https://www.roberthalf.com/salary-guide",
          description: "Annual comprehensive salary guide across industries",
          pros: ["Industry expertise", "Market trend analysis", "Hiring insights"],
          cons: ["Annual updates only", "Recruitment firm perspective"]
        },
        {
          name: "Stack Overflow Developer Survey",
          url: "https://survey.stackoverflow.co/",
          description: "Annual developer compensation and trends survey",
          pros: ["Tech-specific", "Global coverage", "Technology breakdowns"],
          cons: ["Tech industry only", "Self-selected sample"]
        }
      ]
    }
  ];

  const researchMethodology = [
    {
      step: "1. Define Your Research Scope",
      description: "Clearly identify the parameters for accurate comparison",
      actions: [
        "Specify exact job title and key responsibilities",
        "Identify comparable roles with similar scope",
        "Define geographic markets relevant to your situation",
        "Consider both local and remote market opportunities"
      ],
      icon: <Search className="h-6 w-6" />
    },
    {
      step: "2. Gather Multi-Source Data",
      description: "Collect salary information from diverse reliable sources",
      actions: [
        "Use 3-5 different salary databases for comparison",
        "Cross-reference government and private sector data",
        "Include both general and industry-specific sources",
        "Document data collection dates for freshness"
      ],
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      step: "3. Analyze and Validate",
      description: "Process data to identify accurate market ranges",
      actions: [
        "Calculate median, 25th, and 75th percentiles",
        "Remove obvious outliers and inconsistencies",
        "Weight newer data more heavily than older surveys",
        "Consider total compensation beyond base salary"
      ],
      icon: <Calculator className="h-6 w-6" />
    },
    {
      step: "4. Apply Context Factors",
      description: "Adjust findings for your specific situation",
      actions: [
        "Factor in your unique skills and certifications",
        "Adjust for company size and industry segment",
        "Consider performance and tenure factors",
        "Account for benefits and equity components"
      ],
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const contextualFactors = [
    {
      factor: "Company Size Impact",
      description: "Larger companies typically offer higher base salaries but may have different total compensation structures",
      ranges: [
        { size: "Startup (1-50)", adjustment: "-10% to +20%", note: "High equity, variable cash" },
        { size: "Small (51-200)", adjustment: "-5% to +10%", note: "Competitive but limited resources" },
        { size: "Medium (201-1000)", adjustment: "Market rate", note: "Balanced compensation approach" },
        { size: "Large (1000+)", adjustment: "+5% to +15%", note: "Premium base, structured programs" }
      ]
    },
    {
      factor: "Geographic Variations",
      description: "Location significantly impacts salary expectations and cost of living adjustments",
      ranges: [
        { size: "Tier 1 Cities (SF, NYC)", adjustment: "+20% to +40%", note: "High cost, premium rates" },
        { size: "Major Markets (Seattle, Austin)", adjustment: "+10% to +25%", note: "Growing tech hubs" },
        { size: "Secondary Cities", adjustment: "Market baseline", note: "Regional business centers" },
        { size: "Remote/Distributed", adjustment: "-10% to +10%", note: "Varies by company policy" }
      ]
    },
    {
      factor: "Experience Level Premiums",
      description: "Years of experience and specialized skills command different market premiums",
      ranges: [
        { size: "Entry Level (0-2 years)", adjustment: "-20% to -10%", note: "Learning curve discount" },
        { size: "Mid-Level (3-7 years)", adjustment: "Market rate", note: "Core competency baseline" },
        { size: "Senior (8-15 years)", adjustment: "+15% to +30%", note: "Leadership and expertise" },
        { size: "Executive (15+ years)", adjustment: "+30% to +100%", note: "Strategic value and impact" }
      ]
    }
  ];

  const redFlags = [
    {
      warning: "Outdated Data",
      description: "Salary information older than 12 months may not reflect current market conditions",
      impact: "Can lead to 5-15% inaccuracy in rapidly changing markets"
    },
    {
      warning: "Small Sample Sizes",
      description: "Sources with fewer than 50 data points for your role may not be representative",
      impact: "High variance and potential outlier influence"
    },
    {
      warning: "Geographic Mismatches",
      description: "Using national averages for location-specific roles can significantly skew expectations",
      impact: "20-40% variance in high-cost vs. low-cost areas"
    },
    {
      warning: "Title Inflation",
      description: "Job titles vary significantly between companies for similar responsibilities",
      impact: "May overestimate or underestimate true market value"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Market Value Salary Research: Complete Guide to Finding Your Worth",
    "description": "Comprehensive guide to researching your market salary value using reliable sources and proven methodologies. Essential for salary negotiations.",
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
    "url": "https://payraisepercentagecalculator.com/guides/market-value-salary-research"
  };

  return (
    <>
      <SEOHead
        title="Market Value Salary Research: Complete Guide to Finding Your Worth"
        description="Learn how to research your true market salary value using reliable sources and proven methodologies. Essential guide for salary negotiations and career planning."
        canonical="/guides/market-value-salary-research"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Market Value Salary Research: Complete Guide to Finding Your Worth
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Master the art of salary research with proven methodologies and reliable sources. 
              Discover your true market value for confident negotiations and career decisions.
            </p>
          </div>

          {/* Quick Research Tool */}
          <section className="mb-12">
            <Card className="bg-primary text-white">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Quick Market Value Assessment</CardTitle>
                <p className="text-center text-lg opacity-90">
                  Get started with our guided research framework
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div>
                    <Label htmlFor="job-title" className="text-white">Job Title</Label>
                    <Input
                      id="job-title"
                      placeholder="Software Engineer"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location" className="text-white">Location</Label>
                    <Input
                      id="location"
                      placeholder="San Francisco, CA"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-white">Years Experience</Label>
                    <Input
                      id="experience"
                      placeholder="5"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="bg-white text-gray-900"
                    />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Button variant="secondary" size="lg" className="px-8">
                    Start Research Process
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Research Sources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Reliable Salary Research Sources
            </h2>
            <div className="space-y-8">
              {researchSources.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        category.reliability === 'Very High' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {category.reliability} Reliability
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      {category.sources.map((source, sourceIndex) => (
                        <Card key={sourceIndex} className="border border-gray-200">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-gray-900">{source.name}</h4>
                              <ExternalLink className="h-4 w-4 text-gray-400" />
                            </div>
                            <p className="text-gray-600 mb-4">{source.description}</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-green-700 mb-2">Strengths</h5>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  {source.pros.map((pro, proIndex) => (
                                    <li key={proIndex} className="flex items-center gap-2">
                                      <CheckCircle className="h-3 w-3 text-green-500" />
                                      {pro}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-orange-700 mb-2">Limitations</h5>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  {source.cons.map((con, conIndex) => (
                                    <li key={conIndex} className="flex items-center gap-2">
                                      <AlertCircle className="h-3 w-3 text-orange-500" />
                                      {con}
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
              ))}
            </div>
          </section>

          {/* Research Methodology */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Step-by-Step Research Methodology
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {researchMethodology.map((step, index) => (
                <Card key={index} className="border-l-4 border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary text-white p-3 rounded-full">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{step.step}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contextual Factors */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Contextual Factors That Impact Market Value
            </h2>
            <div className="space-y-6">
              {contextualFactors.map((factor, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{factor.factor}</CardTitle>
                    <p className="text-gray-600">{factor.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {factor.ranges.map((range, rangeIndex) => (
                        <Card key={rangeIndex} className="bg-gray-50">
                          <CardContent className="p-4">
                            <h4 className="font-medium text-gray-900 mb-2">{range.size}</h4>
                            <div className="text-lg font-bold text-primary mb-1">{range.adjustment}</div>
                            <p className="text-xs text-gray-600">{range.note}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Red Flags */}
          <section className="mb-12">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-6 w-6" />
                  Research Red Flags to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {redFlags.map((flag, index) => (
                    <div key={index} className="border-l-4 border-red-400 pl-4">
                      <h4 className="font-medium text-red-800 mb-2">{flag.warning}</h4>
                      <p className="text-red-700 text-sm mb-2">{flag.description}</p>
                      <p className="text-red-600 text-xs font-medium">Impact: {flag.impact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Action Steps */}
          <section>
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Research Your Market Value?</h2>
                <p className="text-lg mb-6">
                  Use our tools to apply this research and plan your salary strategy
                </p>
                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Link href="/">
                    <Button variant="secondary" className="w-full">
                      Calculate Current Worth
                    </Button>
                  </Link>
                  <Link href="/tools/salary-negotiation-calculator">
                    <Button variant="secondary" className="w-full">
                      Plan Negotiation
                    </Button>
                  </Link>
                  <Link href="/salary-negotiation-complete-guide">
                    <Button variant="secondary" className="w-full">
                      Negotiation Guide
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