import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEOHead } from "@/components/seo/head";
import { 
  HelpCircle, 
  Search, 
  Calculator, 
  DollarSign,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Plus,
  Minus
} from "lucide-react";

export default function FaqPayRaiseCalculator() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is the pay raise calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pay raise calculator uses precise mathematical formulas and is 100% accurate for the calculations performed. The accuracy of real-world applicability depends on the quality of input data you provide."
        }
      },
      {
        "@type": "Question", 
        "name": "Does the calculator include taxes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our advanced calculator can factor in federal and state taxes when you enable the tax calculation feature. It uses current tax brackets and rates for accurate net pay calculations."
        }
      }
    ]
  };

  const faqCategories = [
    {
      category: "Calculator Basics",
      icon: <Calculator className="h-5 w-5" />,
      questions: [
        {
          question: "How accurate is the pay raise calculator?",
          answer: "Our pay raise calculator uses precise mathematical formulas and is 100% accurate for the calculations performed. The accuracy of real-world applicability depends on the quality of input data you provide. We use current tax brackets, inflation rates, and industry benchmarks to ensure relevance."
        },
        {
          question: "What information do I need to use the calculator?",
          answer: "At minimum, you need your current salary and either the raise percentage, dollar amount, or target salary. For more detailed analysis, you can optionally provide your pay period (annual/monthly/weekly/hourly), location, industry, and whether you want tax or inflation adjustments included."
        },
        {
          question: "Can I calculate raises for different pay periods?",
          answer: "Yes, our calculator supports annual, monthly, weekly, and hourly pay periods. You can input your salary in any format, and the calculator will convert and display results across all time periods for comprehensive analysis."
        },
        {
          question: "Is my salary information secure and private?",
          answer: "Absolutely. All calculations are performed locally in your browser, and no salary information is stored or transmitted to our servers. Your financial data remains completely private and secure throughout the calculation process."
        }
      ]
    },
    {
      category: "Calculation Features",
      icon: <TrendingUp className="h-5 w-5" />,
      questions: [
        {
          question: "Does the calculator include taxes?",
          answer: "Yes, our advanced calculator can factor in federal and state taxes when you enable the tax calculation feature. It uses current tax brackets and rates for accurate net pay calculations. You can also input custom tax rates for more precise results."
        },
        {
          question: "How does the inflation adjustment work?",
          answer: "The calculator uses the current Consumer Price Index (CPI) inflation rate to calculate your 'real' raise after accounting for inflation. This shows whether your raise maintains, increases, or decreases your purchasing power compared to the previous year."
        },
        {
          question: "What are compound projections?",
          answer: "Compound projections show how your salary could grow over multiple years if you receive similar percentage raises annually. This feature helps you understand the long-term financial impact of consistent salary increases and aids in career planning."
        },
        {
          question: "How are industry benchmarks calculated?",
          answer: "Industry benchmarks are based on current market research data, salary surveys, and government labor statistics. We regularly update this data to reflect current market conditions and provide relevant comparisons for your raise evaluation."
        }
      ]
    },
    {
      category: "Practical Usage",
      icon: <DollarSign className="h-5 w-5" />,
      questions: [
        {
          question: "Should I use percentage or dollar amount for my raise?",
          answer: "Use percentage if you're discussing a standard annual review raise (typically 3-7%). Use dollar amount if you've been offered a specific increase or are negotiating a promotion. Use target salary if you have a specific goal in mind and want to know what percentage increase you need."
        },
        {
          question: "How do I account for bonuses and benefits?",
          answer: "The calculator focuses on base salary changes. For total compensation analysis, calculate your raise on base salary first, then separately evaluate changes to bonuses, stock options, benefits, and other compensation components to get the complete picture."
        },
        {
          question: "What if I'm switching from hourly to salary?",
          answer: "Enter your current hourly wage and hours per week, then use the target salary feature to input your proposed annual salary. The calculator will show the equivalent hourly rate and help you compare the total compensation change."
        },
        {
          question: "How often should I calculate potential raises?",
          answer: "Calculate potential raises before performance reviews (typically annually), when considering job offers, during salary negotiations, or when planning career moves. Regular analysis helps you stay informed about your market value and compensation growth."
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: <Shield className="h-5 w-5" />,
      questions: [
        {
          question: "Why are my tax calculations different from my paycheck?",
          answer: "Paycheck taxes include many factors our calculator doesn't account for: state-specific deductions, local taxes, insurance premiums, retirement contributions, and other pre-tax deductions. Our calculator provides federal tax estimates - consult a tax professional for comprehensive analysis."
        },
        {
          question: "The calculator shows a different percentage than I expected. Why?",
          answer: "Ensure you're using the same calculation method as your employer. Some calculate raises on current salary, others on previous year's total compensation. Also verify whether bonuses, overtime, or other compensation is included in the base calculation."
        },
        {
          question: "What if my industry isn't listed in the benchmarks?",
          answer: "Select the closest related industry or use 'Other' if available. Industry benchmarks are general guides - your specific role, company size, location, and performance matter more than broad industry averages for individual salary negotiations."
        },
        {
          question: "Can I save or print my calculation results?",
          answer: "Yes, use the PDF export feature to save your calculation results. This creates a comprehensive report including your inputs, calculations, industry comparisons, and projections that you can save for your records or use in salary discussions."
        }
      ]
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const quickAnswers = [
    {
      question: "Is the calculator free?",
      answer: "Yes, completely free with no registration required."
    },
    {
      question: "Do you store my data?",
      answer: "No, all calculations happen in your browser."
    },
    {
      question: "Can I use it on mobile?",
      answer: "Yes, fully responsive and mobile-optimized."
    },
    {
      question: "How current is the data?",
      answer: "Updated monthly with latest rates and benchmarks."
    }
  ];

  return (
    <>
      <SEOHead
        title="Pay Raise Calculator FAQ - Common Questions Answered"
        description="Frequently asked questions about using our pay raise calculator. Get answers about accuracy, features, tax calculations, and troubleshooting tips."
        canonical="/faq-pay-raise-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Pay Raise Calculator FAQ
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Common Questions and Helpful Answers
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Comprehensive Guide</Badge>
                <Badge variant="outline">Quick Answers</Badge>
                <Badge variant="outline">Updated Regularly</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Find answers to the most frequently asked questions about using our pay raise calculator, 
                understanding results, and maximizing the tool's effectiveness.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Quick Answers */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <Card className="calculator-shadow mb-8">
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search FAQ questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Answers */}
            <Card className="calculator-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Quick Answers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {quickAnswers.map((qa, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-900 text-sm mb-1">{qa.question}</div>
                      <div className="text-sm text-gray-600">{qa.answer}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {searchTerm && (
              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  {filteredFaqs.reduce((total, category) => total + category.questions.length, 0)} results found for "{searchTerm}"
                </p>
              </div>
            )}

            <div className="space-y-8">
              {(searchTerm ? filteredFaqs : faqCategories).map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-3">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isExpanded = expandedFaq === globalIndex;
                      
                      return (
                        <Card key={faqIndex} className="calculator-shadow">
                          <CardHeader 
                            className="cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => toggleFaq(globalIndex)}
                          >
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-gray-900 flex-1 text-left">
                                {faq.question}
                              </CardTitle>
                              <div className="ml-4">
                                {isExpanded ? (
                                  <Minus className="h-5 w-5 text-gray-500" />
                                ) : (
                                  <Plus className="h-5 w-5 text-gray-500" />
                                )}
                              </div>
                            </div>
                          </CardHeader>
                          {isExpanded && (
                            <CardContent>
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </CardContent>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {searchTerm && filteredFaqs.length === 0 && (
              <Card className="calculator-shadow">
                <CardContent className="p-8 text-center">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any FAQ items matching "{searchTerm}". 
                    Try searching with different keywords or browse our categories above.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchTerm("")}
                  >
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? We're here to help you get the most out of our calculator.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Calculator className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-2">Try the Calculator</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Sometimes the best way to understand is to try it yourself
                      </p>
                      <Button variant="outline" className="w-full">
                        Use Calculator
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-2">Read Guides</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Comprehensive guides on salary negotiation and raises
                      </p>
                      <Button variant="outline" className="w-full">
                        Browse Guides
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 text-center">
                      <HelpCircle className="h-8 w-8 text-success mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-2">More Tools</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Explore our other salary and compensation calculators
                      </p>
                      <Button variant="outline" className="w-full">
                        View Tools
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Popular Related Articles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How Pay Raise Calculator Works</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Detailed explanation of the mathematical formulas and methodologies behind our calculations.
                  </p>
                  <div className="flex items-center text-primary text-sm">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Pay Raise Formulas Guide</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Complete mathematical reference for all salary calculation formulas with examples.
                  </p>
                  <div className="flex items-center text-primary text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Tax Impact of Salary Increases</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Understanding how raises affect your taxes and strategies to maximize take-home pay.
                  </p>
                  <div className="flex items-center text-primary text-sm">
                    <span>Explore taxes</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Industry Raise Benchmarks 2025</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Current market data on salary increases across all major industries and regions.
                  </p>
                  <div className="flex items-center text-primary text-sm">
                    <span>View data</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}