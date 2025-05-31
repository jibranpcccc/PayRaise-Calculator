import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { Mail, MessageSquare, Clock, Shield } from "lucide-react";

export default function ContactUs() {
  const structuredData = SchemaGenerator.organization();

  return (
    <>
      <SEOHead
        title="Contact Us - Pay Raise Calculator Support & Help"
        description="Need help with salary calculations or have questions about pay raises? Contact our expert team for personalized assistance with your career advancement goals."
        canonical="https://payraisepercentagecalculator.com/contact-us"
        keywords="contact pay raise calculator, salary help, compensation questions, career advice support"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <Badge className="bg-white text-blue-700">Expert Support</Badge>
              <Badge variant="outline" className="border-white text-white">24/7 Help</Badge>
              <Badge variant="outline" className="border-white text-white">Career Guidance</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Help with Your Salary Questions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Whether you need assistance with our calculator tools, have specific salary questions, 
              or want personalized career advice, we're here to help you succeed.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the best way to reach us based on your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Detailed questions and technical support
                  </p>
                  <p className="text-blue-600 font-medium">support@payraisepercentagecalculator.com</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Quick questions and immediate help
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Start Chat</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Typical response times
                  </p>
                  <div className="text-sm">
                    <p>Email: 24 hours</p>
                    <p>Chat: Immediate</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Privacy</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Your data is secure
                  </p>
                  <p className="text-sm">All communications are confidential and encrypted</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Send Us a Message
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="your.email@example.com" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select a topic</option>
                        <option value="calculator-help">Calculator Help</option>
                        <option value="salary-question">Salary Question</option>
                        <option value="career-advice">Career Advice</option>
                        <option value="technical-issue">Technical Issue</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Please describe your question or how we can help you..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Answers to Common Questions
              </h2>
              <p className="text-gray-600">
                You might find your answer in our comprehensive FAQ section
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Calculator Questions</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• How accurate are the calculations?</li>
                    <li>• Can I save my calculations?</li>
                    <li>• What tax rates are used?</li>
                    <li>• How often is data updated?</li>
                  </ul>
                  <InternalLink href="/faq-pay-raise-calculator" className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-4 inline-block">
                    View All Calculator FAQs →
                  </InternalLink>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Salary & Career Help</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• When should I ask for a raise?</li>
                    <li>• How much should I ask for?</li>
                    <li>• What if my request is denied?</li>
                    <li>• Industry-specific guidance</li>
                  </ul>
                  <InternalLink href="/salary-negotiation-complete-guide" className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-4 inline-block">
                    Read Negotiation Guide →
                  </InternalLink>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Helpful Resources While You Wait
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Calculator Tools</h3>
                <div className="space-y-2 text-sm">
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
                <h3 className="font-semibold text-gray-900 mb-3">Learning Guides</h3>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/guides/understanding-pay-raises-complete" className="block text-blue-600 hover:text-blue-700">
                    Understanding Pay Raises
                  </InternalLink>
                  <InternalLink href="/guides/negotiating-salary-increase-strategies" className="block text-blue-600 hover:text-blue-700">
                    Negotiation Strategies
                  </InternalLink>
                  <InternalLink href="/guides/market-value-salary-research" className="block text-blue-600 hover:text-blue-700">
                    Salary Research Guide
                  </InternalLink>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Latest Insights</h3>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/blog/average-raise-by-industry-2025" className="block text-blue-600 hover:text-blue-700">
                    2025 Industry Benchmarks
                  </InternalLink>
                  <InternalLink href="/blog/when-ask-for-raise-optimal-timing" className="block text-blue-600 hover:text-blue-700">
                    Optimal Timing Guide
                  </InternalLink>
                  <InternalLink href="/blog/inflation-real-salary-impact" className="block text-blue-600 hover:text-blue-700">
                    Inflation Impact Analysis
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