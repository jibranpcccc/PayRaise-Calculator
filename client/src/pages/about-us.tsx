import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { Users, Target, Award, TrendingUp, Calculator, Heart } from "lucide-react";

export default function AboutUs() {
  const structuredData = SchemaGenerator.organization();

  return (
    <>
      <SEOHead
        title="About Us - Pay Raise Calculator Team & Mission"
        description="Learn about our mission to help professionals understand their worth and negotiate fair compensation. Meet the team behind the most trusted pay raise calculator tools."
        canonical="https://payraisepercentagecalculator.com/about-us"
        keywords="about pay raise calculator, salary negotiation experts, compensation team, career development mission"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <Badge className="bg-white text-blue-700">Our Mission</Badge>
              <Badge variant="outline" className="border-white text-white">Expert Team</Badge>
              <Badge variant="outline" className="border-white text-white">Your Success</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Your Career Growth
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We believe every professional deserves fair compensation. Our mission is to provide 
              the tools, knowledge, and confidence you need to understand your worth and negotiate effectively.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Built This</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Too many talented professionals accept less than they deserve simply because 
                they lack the tools and knowledge to understand their market value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize salary negotiation by providing accurate, data-driven tools 
                    that help professionals understand their true market value and negotiate confidently.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    A world where compensation gaps are eliminated through transparency, 
                    education, and equal access to negotiation tools and strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Heart className="h-16 w-16 text-red-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                  <p className="text-gray-600">
                    Transparency, accuracy, and accessibility. We believe everyone deserves 
                    access to the same high-quality tools regardless of their background or experience level.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            </div>

            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                It started with a simple observation: talented professionals were consistently 
                undervaluing themselves in salary negotiations. Despite having strong skills and 
                valuable experience, many were accepting offers below market rate simply because 
                they lacked access to reliable data and calculation tools.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our founders, experienced in both technology and human resources, recognized that 
                existing salary tools were either too basic, behind paywalls, or focused on 
                employers rather than employees. There was a clear need for comprehensive, 
                accurate, and free tools designed specifically for professionals seeking fair compensation.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We spent months researching salary trends, tax implications, industry benchmarks, 
                and negotiation strategies. Our goal was to create not just a calculator, but a 
                complete ecosystem of tools and educational resources that would level the playing field.
              </p>

              <p className="text-lg leading-relaxed">
                Today, our platform serves thousands of professionals across all industries, 
                helping them understand their worth, calculate the true impact of raises, and 
                negotiate with confidence. Every feature we build is guided by one principle: 
                empowering you to achieve the compensation you deserve.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just another salary calculator. We're your comprehensive career advancement platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">Advanced Calculations</h3>
                <p className="text-gray-600 text-sm">
                  Beyond basic percentage calculations, we factor in taxes, inflation, 
                  compound growth, and industry-specific variables for accurate projections.
                </p>
              </div>

              <div className="text-center">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">Industry Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Our team includes HR professionals, compensation analysts, and career coaches 
                  who understand the nuances of different industries and roles.
                </p>
              </div>

              <div className="text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">Community Focus</h3>
                <p className="text-gray-600 text-sm">
                  We're building a community where professionals can learn from each other, 
                  share experiences, and support career growth through collective knowledge.
                </p>
              </div>

              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">Real-Time Data</h3>
                <p className="text-gray-600 text-sm">
                  Our calculations are based on current market data, tax rates, and economic 
                  indicators, updated regularly to ensure accuracy and relevance.
                </p>
              </div>

              <div className="text-center">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">Always Free</h3>
                <p className="text-gray-600 text-sm">
                  We believe financial empowerment shouldn't be behind a paywall. 
                  All our core tools and resources are completely free to use.
                </p>
              </div>

              <div className="text-center">
                <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">Actionable Insights</h3>
                <p className="text-gray-600 text-sm">
                  We don't just give you numbers - we provide context, guidance, and 
                  strategic recommendations to help you take action on your career goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Stats */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">Our Impact in Numbers</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-blue-200">Calculations Performed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$2.3M+</div>
                <div className="text-blue-200">Additional Salary Negotiated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-200">Industries Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-200">User Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Discover Your Worth?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have used our tools to understand their market value 
              and negotiate better compensation packages.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <InternalLink href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
                Try Our Calculator
              </InternalLink>
              <InternalLink href="/guides/understanding-pay-raises-complete" className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors">
                Learn About Raises
              </InternalLink>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Popular Tools</h3>
                <div className="space-y-2">
                  <InternalLink href="/tools/compound-raise-calculator" className="block text-blue-600 hover:text-blue-700">
                    Compound Raise Calculator
                  </InternalLink>
                  <InternalLink href="/tools/inflation-adjusted-raise-calculator" className="block text-blue-600 hover:text-blue-700">
                    Inflation-Adjusted Calculator
                  </InternalLink>
                  <InternalLink href="/tools/pay-raise-tax-impact-calculator" className="block text-blue-600 hover:text-blue-700">
                    Tax Impact Calculator
                  </InternalLink>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Learning Resources</h3>
                <div className="space-y-2">
                  <InternalLink href="/salary-negotiation-complete-guide" className="block text-blue-600 hover:text-blue-700">
                    Negotiation Guide
                  </InternalLink>
                  <InternalLink href="/guides/market-value-salary-research" className="block text-blue-600 hover:text-blue-700">
                    Salary Research Methods
                  </InternalLink>
                  <InternalLink href="/industry-raise-benchmarks-2025" className="block text-blue-600 hover:text-blue-700">
                    Industry Benchmarks
                  </InternalLink>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Get Support</h3>
                <div className="space-y-2">
                  <InternalLink href="/contact-us" className="block text-blue-600 hover:text-blue-700">
                    Contact Our Team
                  </InternalLink>
                  <InternalLink href="/faq-pay-raise-calculator" className="block text-blue-600 hover:text-blue-700">
                    Frequently Asked Questions
                  </InternalLink>
                  <InternalLink href="/calculator-accuracy-methodology" className="block text-blue-600 hover:text-blue-700">
                    Our Methodology
                  </InternalLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}