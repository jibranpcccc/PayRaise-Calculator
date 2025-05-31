import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { 
  Award, 
  Target, 
  FileText, 
  Calendar, 
  TrendingUp,
  CheckCircle,
  Star,
  BarChart3,
  Users,
  Lightbulb,
  ArrowRight,
  Clock
} from "lucide-react";

export default function PerformanceReviewRaisePreparation() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Performance Review Raise Preparation - Complete Guide",
    "description": "Essential preparation for annual review discussions and raise requests. Step-by-step guide to documenting achievements and maximizing your review.",
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

  const preparationTimeline = [
    {
      period: "3 Months Before",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-blue-500",
      tasks: [
        "Start documenting achievements and metrics",
        "Set clear goals aligned with company objectives",
        "Begin tracking quantifiable impacts",
        "Schedule regular check-ins with manager"
      ]
    },
    {
      period: "1 Month Before",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-green-500",
      tasks: [
        "Compile comprehensive achievement portfolio",
        "Research market salary data for your role",
        "Gather feedback from colleagues and clients",
        "Prepare specific examples of value creation"
      ]
    },
    {
      period: "1 Week Before",
      icon: <Target className="h-6 w-6" />,
      color: "bg-yellow-500",
      tasks: [
        "Practice your presentation and key talking points",
        "Prepare questions about career development",
        "Review company performance and industry trends",
        "Set realistic expectations and backup plans"
      ]
    },
    {
      period: "Day Of",
      icon: <Star className="h-6 w-6" />,
      color: "bg-purple-500",
      tasks: [
        "Arrive prepared with all documentation",
        "Present achievements confidently",
        "Listen actively to feedback",
        "Discuss future goals and development"
      ]
    }
  ];

  const achievementCategories = [
    {
      title: "Revenue Impact",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      examples: [
        "Generated $50,000 in new sales through client relationship building",
        "Reduced customer churn by 15% through improved service processes",
        "Increased conversion rates by 8% through A/B testing initiatives",
        "Secured 3 major client renewals worth $200,000 combined"
      ],
      tip: "Always quantify financial impact when possible"
    },
    {
      title: "Cost Savings",
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      examples: [
        "Streamlined processes saving 10 hours/week team time",
        "Negotiated vendor contracts reducing costs by $25,000 annually",
        "Implemented automation reducing manual work by 30%",
        "Identified and eliminated redundant software licenses"
      ],
      tip: "Calculate time saved and convert to dollar value"
    },
    {
      title: "Leadership & Mentoring",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      examples: [
        "Mentored 2 junior employees who received promotions",
        "Led cross-functional team of 8 on successful project",
        "Trained 15 staff members on new procedures",
        "Facilitated knowledge sharing sessions with 95% attendance"
      ],
      tip: "Highlight impact on team development and culture"
    },
    {
      title: "Innovation & Improvement",
      icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
      examples: [
        "Developed new process reducing project timelines by 20%",
        "Proposed and implemented customer feedback system",
        "Created training materials improving onboarding efficiency",
        "Identified market opportunity leading to new product line"
      ],
      tip: "Emphasize proactive thinking and problem-solving"
    }
  ];

  const selfAssessmentQuestions = [
    {
      category: "Performance Goals",
      questions: [
        "Which goals did you exceed, meet, or miss?",
        "What were the measurable outcomes of your work?",
        "How did your performance compare to previous years?",
        "What obstacles did you overcome to achieve results?"
      ]
    },
    {
      category: "Skill Development",
      questions: [
        "What new skills have you developed this year?",
        "How have you applied learning to improve performance?",
        "What certifications or training have you completed?",
        "How do your skills compare to role requirements?"
      ]
    },
    {
      category: "Team Collaboration",
      questions: [
        "How have you contributed to team success?",
        "What positive feedback have you received?",
        "How have you helped colleagues grow?",
        "What role do you play in team dynamics?"
      ]
    },
    {
      category: "Future Growth",
      questions: [
        "What are your career aspirations?",
        "How can you add more value to the organization?",
        "What additional responsibilities interest you?",
        "How can the company support your development?"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Performance Review Raise Preparation - Complete Guide"
        description="Essential preparation for annual review discussions and raise requests. Step-by-step guide to documenting achievements and maximizing your review."
        canonical="/guides/performance-review-raise-preparation"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Performance Review Raise Preparation
              </h1>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-green-100 text-green-800">Beginner Friendly</Badge>
                <Badge variant="outline">10 min read</Badge>
                <Badge variant="outline">Action-Oriented</Badge>
              </div>
              <p className="text-xl text-gray-600">
                Essential preparation for annual review discussions and raise requests. 
                Maximize your review outcomes with strategic preparation and documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Checklist */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Performance Review Success Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Before the Review</h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Document all achievements with metrics
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Research market salary data
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Prepare specific examples and stories
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Set clear goals for next year
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">During the Review</h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Present achievements confidently
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Ask for specific feedback
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Discuss compensation expectations
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Plan development opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Preparation Timeline */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Preparation Timeline
            </h2>
            
            <div className="space-y-6">
              {preparationTimeline.map((phase, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                        {phase.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.period}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {phase.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievement Documentation */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Documenting Your Achievements
            </h2>
            
            <div className="grid gap-6">
              {achievementCategories.map((category, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      {category.icon}
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Example Achievements:</h4>
                        <ul className="space-y-2">
                          {category.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="text-sm text-gray-700 pl-4 border-l-2 border-gray-200">
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="bg-yellow-50 border-yellow-200 border rounded-lg p-4">
                          <h5 className="font-medium text-yellow-900 mb-2">💡 Pro Tip</h5>
                          <p className="text-sm text-yellow-800">{category.tip}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Self-Assessment Framework */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Self-Assessment Framework
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {selfAssessmentQuestions.map((section, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.questions.map((question, questionIndex) => (
                        <li key={questionIndex} className="flex items-start">
                          <span className="text-primary mr-2 font-bold">?</span>
                          <span className="text-sm text-gray-700">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Salary Discussion Strategy */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Salary Discussion Strategy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Before You Ask
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Research market rates for your role
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Calculate your value contribution
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Understand company financial health
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Prepare specific percentage or amount
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-700 flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Making the Ask
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Lead with your achievements
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Reference market data
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Be specific about amount/percentage
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Remain professional and confident
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-700 flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Follow-Up Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Star className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      Send thank you email summarizing discussion
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      Document any promises or timelines
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      Schedule follow-up meeting if needed
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      Continue documenting achievements
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Prepare for Your Review?</h3>
              <p className="text-blue-100 mb-6">
                Use our tools to calculate your target raise and prepare your negotiation strategy
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/">
                  <Button className="bg-white text-primary hover:bg-gray-100">
                    <Target className="mr-2 h-4 w-4" />
                    Calculate Target Raise
                  </Button>
                </Link>
                <Link href="/guides/negotiating-salary-increase-strategies">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Negotiation Strategies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
