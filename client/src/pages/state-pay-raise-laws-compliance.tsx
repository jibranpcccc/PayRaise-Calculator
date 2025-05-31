import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo/head";
import { 
  Scale, 
  MapPin, 
  Shield,
  CheckCircle,
  AlertTriangle,
  Info,
  Building2,
  Users,
  Clock,
  FileText
} from "lucide-react";

export default function StatePayRaiseLawsCompliance() {
  const [selectedState, setSelectedState] = useState<string>("all");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "State Pay Raise Laws and Compliance Requirements 2025",
    "description": "Comprehensive guide to state-specific pay raise laws, compliance requirements, and regulatory obligations for employers and employees.",
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

  const stateLaws = [
    {
      state: "California",
      payTransparency: "Required",
      salaryHistory: "Prohibited",
      equalPay: "Comprehensive",
      retaliation: "Strong Protection",
      details: {
        payTransparency: "Must disclose salary ranges in job postings for positions with 15+ employees",
        salaryHistory: "Cannot ask about salary history; must provide pay scale upon request",
        equalPay: "Equal pay for substantially similar work regardless of gender, race, ethnicity",
        retaliation: "Strong anti-retaliation protections for pay equity discussions"
      }
    },
    {
      state: "New York",
      payTransparency: "Required",
      salaryHistory: "Prohibited",
      equalPay: "Comprehensive",
      retaliation: "Strong Protection",
      details: {
        payTransparency: "Salary ranges required in job advertisements",
        salaryHistory: "Prohibited from asking about salary history",
        equalPay: "Equal pay for equal work protections",
        retaliation: "Cannot retaliate for pay equity inquiries"
      }
    },
    {
      state: "Colorado",
      payTransparency: "Required",
      salaryHistory: "Prohibited",
      equalPay: "Yes",
      retaliation: "Protected",
      details: {
        payTransparency: "Must include compensation and benefits in job postings",
        salaryHistory: "Cannot ask about or rely on salary history",
        equalPay: "Equal pay for equal work law",
        retaliation: "Protection against retaliation for wage discussions"
      }
    },
    {
      state: "Washington",
      payTransparency: "Required",
      salaryHistory: "Prohibited",
      equalPay: "Yes",
      retaliation: "Protected",
      details: {
        payTransparency: "Salary range disclosure required upon request",
        salaryHistory: "Cannot ask about salary history",
        equalPay: "Equal pay opportunity act",
        retaliation: "Anti-retaliation protections"
      }
    },
    {
      state: "Texas",
      payTransparency: "Limited",
      salaryHistory: "Allowed",
      equalPay: "Federal Only",
      retaliation: "Basic Protection",
      details: {
        payTransparency: "No state requirements beyond federal",
        salaryHistory: "Can ask about salary history",
        equalPay: "Follows federal Equal Pay Act",
        retaliation: "Basic federal protections apply"
      }
    },
    {
      state: "Florida",
      payTransparency: "None",
      salaryHistory: "Allowed",
      equalPay: "Federal Only",
      retaliation: "Basic Protection",
      details: {
        payTransparency: "No state pay transparency requirements",
        salaryHistory: "No restrictions on salary history inquiries",
        equalPay: "Federal protections only",
        retaliation: "Federal anti-retaliation protections"
      }
    }
  ];

  const federalLaws = [
    {
      law: "Equal Pay Act of 1963",
      scope: "Gender-based pay discrimination",
      requirement: "Equal pay for equal work regardless of gender",
      compliance: "Applies to all employers with employees engaged in commerce"
    },
    {
      law: "Title VII of Civil Rights Act",
      scope: "Discrimination protection",
      requirement: "Prohibits pay discrimination based on race, color, religion, sex, national origin",
      compliance: "Employers with 15+ employees"
    },
    {
      law: "Americans with Disabilities Act",
      scope: "Disability discrimination",
      requirement: "Equal pay opportunities for qualified individuals with disabilities",
      compliance: "Employers with 15+ employees"
    },
    {
      law: "Age Discrimination in Employment Act",
      scope: "Age-based discrimination",
      requirement: "Prohibits pay discrimination against employees 40 and older",
      compliance: "Employers with 20+ employees"
    }
  ];

  const complianceBestPractices = [
    {
      category: "Documentation",
      practices: [
        "Maintain detailed job descriptions with clear qualifications",
        "Document all pay decisions with objective justifications",
        "Keep records of performance evaluations and merit increases",
        "Ensure pay equity audits are conducted regularly"
      ]
    },
    {
      category: "Transparency",
      practices: [
        "Provide clear pay scales and advancement criteria",
        "Communicate pay increase policies and procedures",
        "Allow employees to discuss wages without retaliation",
        "Respond promptly to pay equity concerns"
      ]
    },
    {
      category: "Training",
      practices: [
        "Train managers on pay equity laws and compliance",
        "Educate HR staff on state-specific requirements",
        "Provide regular updates on changing regulations",
        "Implement bias training for compensation decisions"
      ]
    },
    {
      category: "Monitoring",
      practices: [
        "Conduct regular pay equity analyses",
        "Monitor for systemic pay disparities",
        "Review compensation practices annually",
        "Track compliance with disclosure requirements"
      ]
    }
  ];

  const getComplianceColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "required":
      case "comprehensive":
      case "strong protection":
        return "bg-green-100 text-green-800 border-green-300";
      case "prohibited":
      case "protected":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "yes":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "limited":
      case "basic protection":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "allowed":
      case "none":
      case "federal only":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const filteredStates = selectedState === "all" ? stateLaws : stateLaws.filter(state => state.state === selectedState);

  return (
    <>
      <SEOHead
        title="State Pay Raise Laws and Compliance Requirements 2025"
        description="Comprehensive guide to state-specific pay raise laws, compliance requirements, and regulatory obligations for employers and employees."
        canonical="/state-pay-raise-laws-compliance"
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
                State Pay Raise Laws & Compliance
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                2025 Regulatory Requirements and Best Practices
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Legal Compliance</Badge>
                <Badge variant="outline">Updated 2025</Badge>
                <Badge variant="outline">State & Federal</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Navigate the complex landscape of state pay raise laws, transparency requirements, 
                and compliance obligations for both employers and employees.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Legal Disclaimer</h3>
                    <p className="text-yellow-700 text-sm">
                      This information is provided for educational purposes only and does not constitute legal advice. 
                      Pay raise laws vary significantly by state and locality, and regulations change frequently. 
                      Always consult with qualified legal counsel for specific compliance requirements and legal questions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* State Filter */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">State-Specific Requirements</h2>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Filter by State:</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    {stateLaws.map((state) => (
                      <SelectItem key={state.state} value={state.state}>
                        {state.state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* State Laws Overview */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {filteredStates.map((state, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <MapPin className="mr-2 h-5 w-5 text-primary" />
                      {state.state}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Quick Overview */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Compliance Overview</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Pay Transparency:</span>
                            <Badge className={getComplianceColor(state.payTransparency)}>
                              {state.payTransparency}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Salary History Inquiries:</span>
                            <Badge className={getComplianceColor(state.salaryHistory)}>
                              {state.salaryHistory}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Equal Pay Laws:</span>
                            <Badge className={getComplianceColor(state.equalPay)}>
                              {state.equalPay}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Retaliation Protection:</span>
                            <Badge className={getComplianceColor(state.retaliation)}>
                              {state.retaliation}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Detailed Requirements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Detailed Requirements</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="text-xs font-medium text-gray-700 mb-1">Pay Transparency:</div>
                            <div className="text-sm text-gray-600">{state.details.payTransparency}</div>
                          </div>
                          <div>
                            <div className="text-xs font-medium text-gray-700 mb-1">Salary History:</div>
                            <div className="text-sm text-gray-600">{state.details.salaryHistory}</div>
                          </div>
                          <div>
                            <div className="text-xs font-medium text-gray-700 mb-1">Equal Pay:</div>
                            <div className="text-sm text-gray-600">{state.details.equalPay}</div>
                          </div>
                          <div>
                            <div className="text-xs font-medium text-gray-700 mb-1">Retaliation Protection:</div>
                            <div className="text-sm text-gray-600">{state.details.retaliation}</div>
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

        {/* Federal Laws */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Federal Pay Equity Laws
            </h2>
            
            <div className="space-y-6">
              {federalLaws.map((law, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Shield className="mr-2 h-5 w-5" />
                      {law.law}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Scope:</div>
                        <div className="text-sm text-gray-600">{law.scope}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Requirement:</div>
                        <div className="text-sm text-gray-600">{law.requirement}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Compliance:</div>
                        <div className="text-sm text-gray-600">{law.compliance}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Best Practices */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Compliance Best Practices
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {complianceBestPractices.map((category, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.practices.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Compliance Resources
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="mr-2 h-5 w-5 text-primary" />
                    For Employers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Info className="h-4 w-4 text-blue-600 mr-2" />
                      Equal Employment Opportunity Commission (EEOC)
                    </li>
                    <li className="flex items-center">
                      <Info className="h-4 w-4 text-blue-600 mr-2" />
                      Department of Labor Pay Equity Resources
                    </li>
                    <li className="flex items-center">
                      <Info className="h-4 w-4 text-blue-600 mr-2" />
                      State Labor Department Guidelines
                    </li>
                    <li className="flex items-center">
                      <Info className="h-4 w-4 text-blue-600 mr-2" />
                      HR Compliance Training Programs
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    For Employees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Info className="h-4 w-4 text-blue-600 mr-2" />
                      EEOC Complaint Filing Process
                    </li>
                    <li className="flex items-center">
                      <Info className="h-4 w-4 text-blue-600 mr-2" />
                      State Civil Rights Agencies
                    </li>
                    <li className="flex items-center">
                      <Info className="h-4 w-4 text-blue-600 mr-2" />
                      Worker Rights Organizations
                    </li>
                    <li className="flex items-center">
                      <Info className="h-4 w-4 text-blue-600 mr-2" />
                      Legal Aid Employment Services
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