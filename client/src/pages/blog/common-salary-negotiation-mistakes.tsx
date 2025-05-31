import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  AlertTriangle, 
  XCircle, 
  CheckCircle,
  ArrowRight,
  Target,
  Shield,
  Brain,
  MessageCircle
} from "lucide-react";

export default function CommonSalaryNegotiationMistakes() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Common Salary Negotiation Mistakes (And How to Avoid Them)",
    "description": "Learn the most common salary negotiation mistakes that cost professionals thousands. Discover proven strategies to avoid these pitfalls and negotiate successfully.",
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

  const criticalMistakes = [
    {
      mistake: "Not Researching Market Rates",
      impact: "High",
      cost: "$15,000-30,000 annually",
      description: "Going into negotiations without knowing industry standards puts you at a severe disadvantage.",
      consequences: [
        "Accepting below-market offers",
        "Lacking negotiation leverage",
        "Missing competitive opportunities",
        "Undervaluing your skills"
      ],
      solution: "Research multiple sources: PayScale, Glassdoor, industry reports, and networking contacts.",
      prevention: "Spend 2-3 weeks gathering comprehensive salary data before any negotiation."
    },
    {
      mistake: "Accepting the First Offer",
      impact: "High",
      cost: "$5,000-15,000 annually",
      description: "Most initial offers have room for improvement, but many candidates accept immediately.",
      consequences: [
        "Leaving money on the table",
        "Setting low baseline for future raises",
        "Missing additional benefits",
        "Showing lack of confidence"
      ],
      solution: "Always ask for time to consider and research counter-offer options.",
      prevention: "Prepare multiple scenarios and know your minimum acceptable offer beforehand."
    },
    {
      mistake: "Making It Personal",
      impact: "Medium",
      cost: "Relationship damage",
      description: "Bringing personal finances or emotional arguments into professional negotiations.",
      consequences: [
        "Damaging professional relationships",
        "Appearing unprofessional",
        "Weakening business case",
        "Creating defensive responses"
      ],
      solution: "Focus on business value, market rates, and professional achievements.",
      prevention: "Practice separating personal needs from professional value proposition."
    },
    {
      mistake: "Negotiating Only Salary",
      impact: "Medium",
      cost: "$3,000-8,000 in benefits",
      description: "Focusing solely on base salary while ignoring valuable benefits and perks.",
      consequences: [
        "Missing valuable benefits",
        "Overlooking total compensation",
        "Limiting negotiation options",
        "Reducing overall package value"
      ],
      solution: "Consider PTO, flexibility, development budget, equity, and other benefits.",
      prevention: "Create a comprehensive wish list of all desired compensation elements."
    },
    {
      mistake: "Poor Timing",
      impact: "High",
      cost: "Negotiation failure",
      description: "Choosing the wrong moment for salary discussions can doom even well-prepared requests.",
      consequences: [
        "Immediate rejection",
        "Appearing tone-deaf",
        "Missing optimal windows",
        "Damaging future opportunities"
      ],
      solution: "Time requests with performance reviews, budget cycles, or major achievements.",
      prevention: "Map out company calendar and identify optimal negotiation windows."
    },
    {
      mistake: "Lack of Documentation",
      impact: "Medium",
      cost: "$10,000+ opportunity loss",
      description: "Failing to document achievements and quantify contributions undermines credibility.",
      consequences: [
        "Weak value proposition",
        "Lacking concrete examples",
        "Reduced negotiation power",
        "Missed achievement highlights"
      ],
      solution: "Maintain ongoing achievement logs with specific metrics and results.",
      prevention: "Set up monthly achievement tracking system with quantifiable outcomes."
    }
  ];

  const psychologicalTraps = [
    {
      trap: "Impostor Syndrome",
      description: "Doubting your worth and settling for less than you deserve",
      warning_signs: [
        "Feeling undeserving of higher pay",
        "Comparing yourself negatively to others",
        "Minimizing your achievements",
        "Avoiding difficult conversations"
      ],
      counter_strategy: "Document accomplishments regularly and seek objective feedback from mentors"
    },
    {
      trap: "Fear of Rejection",
      description: "Avoiding negotiation due to fear of negative consequences",
      warning_signs: [
        "Never asking for raises",
        "Accepting all initial offers",
        "Avoiding salary discussions",
        "Assuming rejection without trying"
      ],
      counter_strategy: "Start with low-stakes practice negotiations and build confidence gradually"
    },
    {
      trap: "Anchoring Bias",
      description: "Being overly influenced by the first number mentioned",
      warning_signs: [
        "Fixating on initial offers",
        "Negotiating around anchor points",
        "Not setting your own baseline",
        "Accepting range midpoints"
      ],
      counter_strategy: "Research extensively and set your own anchors before discussions begin"
    },
    {
      trap: "Zero-Sum Thinking",
      description: "Believing negotiations must have winners and losers",
      warning_signs: [
        "Aggressive negotiation tactics",
        "Not seeking mutual benefits",
        "Focusing only on salary",
        "Damaging relationships"
      ],
      counter_strategy: "Frame negotiations as collaborative problem-solving for mutual benefit"
    }
  ];

  const communicationFailures = [
    {
      failure: "Using Ultimatums",
      example: "\"Give me a raise or I'll quit\"",
      why_harmful: "Creates adversarial dynamic and forces defensive responses",
      better_approach: "\"I'd like to discuss my compensation to ensure it reflects my contributions\""
    },
    {
      failure: "Comparing to Colleagues",
      example: "\"John makes more than me\"",
      why_harmful: "Violates confidentiality and creates uncomfortable situations",
      better_approach: "\"Based on market research, similar roles typically pay X to Y range\""
    },
    {
      failure: "Emotional Appeals",
      example: "\"I really need this raise for my mortgage\"",
      why_harmful: "Makes personal problems the employer's responsibility",
      better_approach: "\"My performance metrics show I've exceeded targets by 20%\""
    },
    {
      failure: "Vague Requests",
      example: "\"I think I deserve more money\"",
      why_harmful: "Lacks specificity and doesn't provide clear direction",
      better_approach: "\"I'm requesting a 12% increase to $85,000 based on my research and performance\""
    }
  ];

  const recoveryStrategies = [
    {
      scenario: "After Being Rejected",
      immediate_action: "Ask for specific feedback on what would change their decision",
      timeline: "Next 30 days",
      strategy: "Create improvement plan addressing their concerns and set follow-up meeting",
      success_rate: "65% get increase within 6 months"
    },
    {
      scenario: "After Poor Negotiation",
      immediate_action: "Acknowledge mistakes and request to restart conversation",
      timeline: "Next 1-2 weeks",
      strategy: "Come back with better preparation and professional approach",
      success_rate: "45% recover successfully"
    },
    {
      scenario: "After Emotional Outburst",
      immediate_action: "Apologize professionally and request another discussion",
      timeline: "Next 2-4 weeks",
      strategy: "Demonstrate emotional intelligence and professional growth",
      success_rate: "35% rebuild trust and negotiate"
    },
    {
      scenario: "After Ultimatum Backfire",
      immediate_action: "Clarify commitment to company and role",
      timeline: "Immediately",
      strategy: "Rebuild trust through consistent performance and collaboration",
      success_rate: "25% recover relationship"
    }
  ];

  return (
    <>
      <SEOHead
        title="Common Salary Negotiation Mistakes (And How to Avoid Them)"
        description="Learn the most common salary negotiation mistakes that cost professionals thousands. Discover proven strategies to avoid these pitfalls and negotiate successfully."
        canonical="/blog/common-salary-negotiation-mistakes"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Common Salary Negotiation Mistakes
              </h1>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-red-100 text-red-800">Costly Mistakes</Badge>
                <Badge variant="outline">Prevention Guide</Badge>
                <Badge variant="outline">7 min read</Badge>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn the most common salary negotiation mistakes that cost professionals thousands 
                of dollars. Discover proven strategies to avoid these pitfalls and negotiate successfully.
              </p>
            </div>
          </div>
        </section>

        {/* Critical Mistakes */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The 6 Most Costly Negotiation Mistakes
            </h2>
            
            <div className="space-y-6">
              {criticalMistakes.map((mistake, index) => (
                <Card key={index} className="calculator-shadow border-l-4 border-red-400">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-red-800 flex items-center">
                        <XCircle className="mr-2 h-5 w-5" />
                        {mistake.mistake}
                      </CardTitle>
                      <div className="text-right">
                        <Badge className={
                          mistake.impact === "High" ? "bg-red-100 text-red-800" :
                          "bg-yellow-100 text-yellow-800"
                        }>
                          {mistake.impact} Impact
                        </Badge>
                        <div className="text-sm text-gray-600 mt-1">{mistake.cost}</div>
                      </div>
                    </div>
                    <p className="text-gray-600">{mistake.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Consequences</h4>
                        <ul className="space-y-1">
                          {mistake.consequences.map((consequence, consIndex) => (
                            <li key={consIndex} className="text-sm text-gray-600">• {consequence}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Solution</h4>
                        <p className="text-sm text-gray-600">{mistake.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Prevention</h4>
                        <p className="text-sm text-gray-600">{mistake.prevention}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Psychological Traps */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Psychological Traps to Avoid
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {psychologicalTraps.map((trap, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Brain className="mr-2 h-5 w-5" />
                      {trap.trap}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{trap.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">Warning Signs</h4>
                        <ul className="space-y-1">
                          {trap.warning_signs.map((sign, signIndex) => (
                            <li key={signIndex} className="text-sm text-gray-600 flex items-center">
                              <AlertTriangle className="h-3 w-3 text-yellow-600 mr-2 flex-shrink-0" />
                              {sign}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-green-400 p-3">
                        <div className="text-sm font-medium text-green-800 mb-1">Counter-Strategy:</div>
                        <div className="text-sm text-green-700">{trap.counter_strategy}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Communication Failures */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Communication Failures That Backfire
            </h2>
            
            <div className="space-y-6">
              {communicationFailures.map((failure, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800 flex items-center">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {failure.failure}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-3">
                          <div className="text-sm font-medium text-red-800 mb-1">❌ Don't Say:</div>
                          <div className="text-sm text-red-700 italic">"{failure.example}"</div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Why It's Harmful:</strong> {failure.why_harmful}
                        </div>
                      </div>
                      
                      <div>
                        <div className="bg-green-50 border-l-4 border-green-400 p-3">
                          <div className="text-sm font-medium text-green-800 mb-1">✅ Say Instead:</div>
                          <div className="text-sm text-green-700 italic">"{failure.better_approach}"</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery Strategies */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Recovery Strategies When Things Go Wrong
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recoveryStrategies.map((recovery, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Shield className="mr-2 h-5 w-5" />
                      {recovery.scenario}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-700">Immediate Action:</div>
                        <div className="text-sm text-gray-600 bg-blue-50 p-2 rounded">
                          {recovery.immediate_action}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700">Timeline:</div>
                        <div className="text-sm text-gray-600">{recovery.timeline}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700">Recovery Strategy:</div>
                        <div className="text-sm text-gray-600">{recovery.strategy}</div>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-green-400 p-2">
                        <div className="text-sm text-green-800">
                          <strong>Success Rate:</strong> {recovery.success_rate}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention Checklist */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Mistake Prevention Checklist
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                      Before Negotiating
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Research market rates thoroughly
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Document achievements with metrics
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Practice conversation scenarios
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Set minimum acceptable terms
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Plan timing strategically
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="mr-2 h-5 w-5 text-blue-600" />
                      During Negotiation
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Stay professional and collaborative
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Focus on business value
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Listen actively to feedback
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Consider total compensation
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Ask for time to consider offers
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
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Negotiate with Confidence</h2>
                <p className="text-gray-600 mb-6">
                  Avoid these common mistakes and negotiate your worth successfully. Preparation 
                  and professionalism are your best tools for salary negotiation success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/guides/negotiating-salary-increase-strategies">
                    <Button className="bg-primary hover:bg-blue-700">
                      Learn Advanced Strategies
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