import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  ClipboardCheck, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  Award,
  FileText,
  Star
} from "lucide-react";

export default function PerformanceReviewRaisePreparation() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Performance Review Raise Preparation: Complete Strategy Guide",
    "description": "Comprehensive guide to preparing for performance reviews and salary discussions. Documentation strategies, goal setting, and negotiation preparation.",
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
    "datePublished": "2025-01-12",
    "dateModified": "2025-01-12"
  };

  const preparationTimeline = [
    {
      phase: "6 Months Before",
      focus: "Foundation Building",
      activities: [
        "Start achievement documentation system",
        "Set measurable performance goals",
        "Identify skill development opportunities",
        "Begin tracking metrics and KPIs"
      ],
      outcome: "Systematic tracking in place"
    },
    {
      phase: "3 Months Before",
      focus: "Evidence Gathering",
      activities: [
        "Compile quarterly achievements",
        "Gather stakeholder feedback",
        "Research market salary data",
        "Document process improvements"
      ],
      outcome: "Comprehensive evidence portfolio"
    },
    {
      phase: "1 Month Before",
      focus: "Presentation Preparation",
      activities: [
        "Create performance summary",
        "Prepare salary increase proposal",
        "Practice conversation scenarios",
        "Schedule review meeting"
      ],
      outcome: "Polished presentation ready"
    },
    {
      phase: "Review Week",
      focus: "Final Preparation",
      activities: [
        "Review all documentation",
        "Confirm meeting logistics",
        "Prepare questions to ask",
        "Set mental framework"
      ],
      outcome: "Confident and prepared"
    }
  ];

  const documentationCategories = [
    {
      category: "Quantifiable Achievements",
      description: "Measurable results and improvements",
      examples: [
        "Increased sales by 23% ($125k additional revenue)",
        "Reduced processing time from 5 days to 2 days",
        "Led team that delivered project 2 weeks early",
        "Improved customer satisfaction score from 7.2 to 8.6"
      ],
      metrics: ["Revenue impact", "Time savings", "Quality improvements", "Cost reductions"]
    },
    {
      category: "Leadership & Initiative",
      description: "Proactive contributions and leadership moments",
      examples: [
        "Mentored 3 junior developers, 2 received promotions",
        "Initiated cross-department efficiency project",
        "Volunteered to lead crisis response team",
        "Created training program adopted company-wide"
      ],
      metrics: ["People impacted", "Programs created", "Teams led", "Initiatives launched"]
    },
    {
      category: "Skill Development",
      description: "Professional growth and new capabilities",
      examples: [
        "Completed AWS certification (now managing cloud infrastructure)",
        "Learned Python, automated 15 manual processes",
        "Attended 3 industry conferences, implemented 5 best practices",
        "Earned PMP certification, now managing larger projects"
      ],
      metrics: ["Certifications earned", "Skills acquired", "Applications implemented", "Training completed"]
    },
    {
      category: "Problem Solving",
      description: "Creative solutions and crisis management",
      examples: [
        "Resolved critical system outage in 2 hours vs typical 8 hours",
        "Identified bug saving company $50k in potential losses",
        "Developed workaround for vendor issue, maintained operations",
        "Created solution reducing customer complaints by 40%"
      ],
      metrics: ["Issues resolved", "Money saved", "Time improved", "Risks mitigated"]
    }
  ];

  const reviewMeetingStructure = [
    {
      section: "Opening (5 minutes)",
      purpose: "Set positive tone and context",
      content: [
        "Express appreciation for the opportunity",
        "Acknowledge company investment in your growth",
        "State your commitment to continued excellence",
        "Outline what you'll cover in the discussion"
      ],
      keyPhrase: "I'm excited to discuss my contributions this year and how we can align my compensation with the value I'm bringing to the team."
    },
    {
      section: "Achievement Review (15 minutes)",
      purpose: "Present documented accomplishments",
      content: [
        "Walk through major achievements with specific metrics",
        "Highlight instances of going above and beyond",
        "Demonstrate growth from previous review period",
        "Connect achievements to company objectives"
      ],
      keyPhrase: "Here are the key results I've delivered this year, with specific impact measurements..."
    },
    {
      section: "Market Context (10 minutes)",
      purpose: "Provide salary adjustment rationale",
      content: [
        "Present industry salary research findings",
        "Compare current compensation to market rates",
        "Discuss role evolution and expanded responsibilities",
        "Reference geographic and skill premiums"
      ],
      keyPhrase: "Based on my research and expanded role, I believe a salary adjustment would align with current market standards..."
    },
    {
      section: "Future Commitment (10 minutes)",
      purpose: "Demonstrate ongoing value proposition",
      content: [
        "Outline goals for the upcoming year",
        "Discuss skill development plans",
        "Present ideas for additional contributions",
        "Show enthusiasm for company direction"
      ],
      keyPhrase: "Looking forward, here's how I plan to continue driving results and growing with the company..."
    },
    {
      section: "Discussion & Resolution (15 minutes)",
      purpose: "Collaborate on next steps",
      content: [
        "Listen to manager's feedback and perspective",
        "Address any concerns or questions",
        "Negotiate specific terms and timeline",
        "Agree on follow-up actions and expectations"
      ],
      keyPhrase: "I'd love to hear your thoughts on this proposal and work together on the best path forward."
    }
  ];

  const commonChallenges = [
    {
      challenge: "\"Budget constraints this year\"",
      response: "I understand budget considerations. Could we explore a phased approach or discuss non-monetary benefits that would work within current constraints?",
      alternatives: ["Flexible schedule", "Additional PTO", "Professional development budget", "Title advancement"]
    },
    {
      challenge: "\"You haven't been here long enough\"",
      response: "I appreciate that perspective. Let me share the specific value I've created in this time and how it compares to typical expectations for this role.",
      alternatives: ["Performance-based timeline", "Probationary increase", "Accelerated review schedule", "Merit bonus consideration"]
    },
    {
      challenge: "\"Company policy doesn't allow mid-cycle increases\"",
      response: "I understand the policy framework. Would it be possible to document this discussion for the next review cycle or explore other recognition options?",
      alternatives: ["Written commitment", "Expanded responsibilities", "Project bonuses", "Development opportunities"]
    },
    {
      challenge: "\"Your performance is good but not exceptional\"",
      response: "I appreciate that feedback. Could you help me understand what 'exceptional' looks like so I can work toward that standard?",
      alternatives: ["Performance improvement plan", "Mentorship opportunities", "Stretch assignments", "Skill development goals"]
    }
  ];

  return (
    <>
      <SEOHead
        title="Performance Review Raise Preparation: Complete Strategy Guide"
        description="Comprehensive guide to preparing for performance reviews and salary discussions. Documentation strategies, goal setting, and negotiation preparation."
        canonical="/guides/performance-review-raise-preparation"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <ClipboardCheck className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Performance Review Raise Preparation
              </h1>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Complete Strategy</Badge>
                <Badge variant="outline">Documentation Guide</Badge>
                <Badge variant="outline">10 min read</Badge>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master the art of performance review preparation. Build compelling documentation, 
                present your achievements effectively, and position yourself for salary success.
              </p>
            </div>
          </div>
        </section>

        {/* Preparation Timeline */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              6-Month Preparation Timeline
            </h2>
            
            <div className="space-y-6">
              {preparationTimeline.map((phase, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-primary">{phase.phase}</CardTitle>
                      <Badge variant="outline">{phase.focus}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Activities</h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Expected Outcome</h4>
                        <div className="bg-green-50 border-l-4 border-green-400 p-3">
                          <p className="text-sm text-green-800">{phase.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Achievement Documentation Framework
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {documentationCategories.map((category, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      {category.category}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Examples</h4>
                        <ul className="space-y-1">
                          {category.examples.map((example, exIndex) => (
                            <li key={exIndex} className="text-sm text-gray-600">• {example}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-3">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Metrics to Track</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="outline" className="text-xs">
                              {metric}
                            </Badge>
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

        {/* Meeting Structure */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Performance Review Meeting Structure
            </h2>
            
            <div className="space-y-6">
              {reviewMeetingStructure.map((section, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{section.section}</CardTitle>
                    <p className="text-sm text-gray-600">{section.purpose}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Content to Cover</h4>
                        <ul className="space-y-1">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-gray-600">• {item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <div className="text-sm font-medium text-blue-800 mb-1">Key Phrase:</div>
                        <div className="text-sm text-blue-700 italic">"{section.keyPhrase}"</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Handling Common Objections
            </h2>
            
            <div className="space-y-6">
              {commonChallenges.map((challenge, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800 flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      {challenge.challenge}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Recommended Response</h4>
                        <div className="bg-green-50 border-l-4 border-green-400 p-3">
                          <p className="text-sm text-green-800 italic">"{challenge.response}"</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Alternative Solutions</h4>
                        <ul className="space-y-1">
                          {challenge.alternatives.map((alt, altIndex) => (
                            <li key={altIndex} className="text-sm text-gray-600">• {alt}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Checklist */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pre-Review Success Checklist
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                      Documentation Complete
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Achievement portfolio compiled
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Metrics and KPIs documented
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Stakeholder feedback gathered
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Market research completed
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="mr-2 h-5 w-5 text-blue-600" />
                      Presentation Ready
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Salary proposal prepared
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Key talking points outlined
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Objection responses practiced
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Meeting agenda confirmed
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Performance Review</h2>
                <p className="text-gray-600 mb-6">
                  Systematic preparation is the key to performance review success. Start documenting 
                  your achievements today and build a compelling case for your next salary increase.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/guides/negotiating-salary-increase-strategies">
                    <Button className="bg-primary hover:bg-blue-700">
                      Master Negotiation Strategies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline">
                      Calculate Your Target Raise
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