import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  MessageSquare, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Users,
  Shield,
  Lightbulb,
  Award
} from "lucide-react";

export default function NegotiatingSalaryIncreaseStrategies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Negotiating Salary Increase: Advanced Strategies That Get Results",
    "description": "Master proven negotiation techniques for salary increases. Learn psychological tactics, communication strategies, and professional approaches that deliver results.",
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

  const negotiationStrategies = [
    {
      strategy: "Value-First Approach",
      success: "78%",
      description: "Lead with demonstrated value and specific achievements",
      tactics: [
        "Document quantifiable contributions",
        "Present ROI calculations",
        "Show problem-solving examples",
        "Highlight efficiency improvements"
      ],
      bestFor: "High performers with measurable results",
      timing: "After major project completion"
    },
    {
      strategy: "Market-Based Positioning",
      success: "71%",
      description: "Use industry benchmarks and competitive data",
      tactics: [
        "Research salary surveys",
        "Gather competitor intelligence",
        "Present geographic adjustments",
        "Show skills premium data"
      ],
      bestFor: "Professionals with in-demand skills",
      timing: "During budget planning periods"
    },
    {
      strategy: "Future-Focused Negotiation",
      success: "65%",
      description: "Emphasize future potential and growth trajectory",
      tactics: [
        "Present career development plan",
        "Show expanded responsibilities",
        "Discuss skill advancement",
        "Outline leadership potential"
      ],
      bestFor: "Ambitious professionals seeking growth",
      timing: "Performance review cycles"
    },
    {
      strategy: "Retention-Leverage Method",
      success: "69%",
      description: "Highlight replacement costs and knowledge retention",
      tactics: [
        "Calculate training investment",
        "Show institutional knowledge value",
        "Present recruitment costs",
        "Emphasize team relationships"
      ],
      bestFor: "Long-term employees with expertise",
      timing: "During talent market fluctuations"
    }
  ];

  const communicationTechniques = [
    {
      technique: "Anchoring",
      description: "Start with higher number to set negotiation range",
      example: "Based on my research, market rate is $85-95k. I'd like to discuss $90k.",
      psychology: "Influences perception of reasonable range",
      risk: "May seem unrealistic if too high"
    },
    {
      technique: "Collaborative Framing",
      description: "Position as problem-solving together",
      example: "How can we structure compensation to reflect my contribution?",
      psychology: "Reduces defensive responses",
      risk: "May lack assertiveness"
    },
    {
      technique: "Data-Driven Presentation",
      description: "Use objective metrics and benchmarks",
      example: "Industry data shows 15% premium for these certifications.",
      psychology: "Reduces personal bias perception",
      risk: "May seem impersonal"
    },
    {
      technique: "Future Value Proposition",
      description: "Focus on ROI and future contributions",
      example: "This investment will enable me to lead the new initiative.",
      psychology: "Shifts focus from cost to investment",
      risk: "Requires commitment to deliver"
    }
  ];

  const negotiationPhases = [
    {
      phase: "Preparation",
      duration: "2-4 weeks",
      activities: [
        "Research market rates",
        "Document achievements",
        "Identify key talking points",
        "Practice conversation"
      ],
      successFactors: ["Thorough research", "Clear value proposition", "Realistic expectations"],
      commonMistakes: ["Insufficient preparation", "Emotional approach", "Poor timing"]
    },
    {
      phase: "Opening",
      duration: "15-30 minutes",
      activities: [
        "Express appreciation",
        "State purpose clearly",
        "Present initial case",
        "Listen actively"
      ],
      successFactors: ["Professional tone", "Clear communication", "Confident delivery"],
      commonMistakes: ["Aggressive approach", "Ultimatums", "Defensive posture"]
    },
    {
      phase: "Discussion",
      duration: "30-60 minutes",
      activities: [
        "Present evidence",
        "Address concerns",
        "Explore options",
        "Find common ground"
      ],
      successFactors: ["Flexibility", "Active listening", "Problem-solving focus"],
      commonMistakes: ["Rigid positions", "Emotional reactions", "Interrupting"]
    },
    {
      phase: "Resolution",
      duration: "15-30 minutes",
      activities: [
        "Summarize agreement",
        "Clarify next steps",
        "Set timeline",
        "Express gratitude"
      ],
      successFactors: ["Clear documentation", "Mutual understanding", "Professional close"],
      commonMistakes: ["Vague agreements", "No follow-up plan", "Pushing too hard"]
    }
  ];

  const psychologicalTactics = [
    {
      tactic: "Reciprocity Principle",
      application: "Acknowledge company investment, propose mutual benefit",
      example: "I appreciate the training opportunities. Here's how I can contribute more.",
      effectiveness: "High",
      ethical: true
    },
    {
      tactic: "Scarcity Mindset",
      application: "Highlight unique skills and limited availability",
      example: "My blockchain expertise is increasingly valuable in our market.",
      effectiveness: "Medium",
      ethical: true
    },
    {
      tactic: "Social Proof",
      application: "Reference industry standards and peer comparisons",
      example: "Similar roles at companies like ours typically pay in this range.",
      effectiveness: "High",
      ethical: true
    },
    {
      tactic: "Authority Positioning",
      application: "Establish expertise and credibility early",
      example: "As the lead on three successful launches this year...",
      effectiveness: "Medium",
      ethical: true
    }
  ];

  return (
    <>
      <SEOHead
        title="Negotiating Salary Increase: Advanced Strategies That Get Results"
        description="Master proven negotiation techniques for salary increases. Learn psychological tactics, communication strategies, and professional approaches that deliver results."
        canonical="/guides/negotiating-salary-increase-strategies"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Negotiating Salary Increase: Advanced Strategies
              </h1>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Proven Techniques</Badge>
                <Badge variant="outline">Psychology-Based</Badge>
                <Badge variant="outline">8 min read</Badge>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master proven negotiation techniques that deliver results. Learn psychological 
                tactics, communication strategies, and professional approaches for successful salary discussions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Strategies */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Proven Negotiation Strategies
            </h2>
            
            <div className="space-y-6">
              {negotiationStrategies.map((strategy, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-primary">{strategy.strategy}</CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{strategy.success}</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                    </div>
                    <p className="text-gray-600">{strategy.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Tactics</h4>
                        <ul className="space-y-2">
                          {strategy.tactics.map((tactic, tacticIndex) => (
                            <li key={tacticIndex} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {tactic}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="lg:col-span-3">
                        <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                        <p className="text-sm text-gray-600">{strategy.bestFor}</p>
                      </div>
                      
                      <div className="lg:col-span-3">
                        <h4 className="font-semibold text-gray-900 mb-2">Optimal Timing</h4>
                        <p className="text-sm text-gray-600">{strategy.timing}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Communication Techniques */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Advanced Communication Techniques
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {communicationTechniques.map((technique, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{technique.technique}</CardTitle>
                    <p className="text-sm text-gray-600">{technique.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <div className="text-sm font-medium text-blue-800 mb-1">Example:</div>
                        <div className="text-sm text-blue-700 italic">"{technique.example}"</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="font-medium text-gray-700">Psychology:</div>
                          <div className="text-gray-600">{technique.psychology}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-700">Risk:</div>
                          <div className="text-gray-600">{technique.risk}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Negotiation Process */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Four-Phase Negotiation Process
            </h2>
            
            <div className="space-y-6">
              {negotiationPhases.map((phase, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-primary">
                        Phase {index + 1}: {phase.phase}
                      </CardTitle>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Activities</h4>
                        <ul className="space-y-1">
                          {phase.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-600">• {activity}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">Success Factors</h4>
                        <ul className="space-y-1">
                          {phase.successFactors.map((factor, factorIndex) => (
                            <li key={factorIndex} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {factor}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3">Avoid These Mistakes</h4>
                        <ul className="space-y-1">
                          {phase.commonMistakes.map((mistake, mistakeIndex) => (
                            <li key={mistakeIndex} className="text-sm text-gray-600 flex items-center">
                              <AlertTriangle className="h-3 w-3 text-red-600 mr-2 flex-shrink-0" />
                              {mistake}
                            </li>
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

        {/* Psychological Tactics */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ethical Psychological Tactics
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {psychologicalTactics.map((tactic, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Lightbulb className="mr-2 h-5 w-5" />
                      {tactic.tactic}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Application:</div>
                        <div className="text-sm text-gray-600">{tactic.application}</div>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-green-400 p-3">
                        <div className="text-sm font-medium text-green-800 mb-1">Example:</div>
                        <div className="text-sm text-green-700 italic">"{tactic.example}"</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <Badge className={
                            tactic.effectiveness === "High" ? "bg-green-100 text-green-800" :
                            "bg-yellow-100 text-yellow-800"
                          }>
                            {tactic.effectiveness} Effectiveness
                          </Badge>
                        </div>
                        <div>
                          {tactic.ethical ? (
                            <Badge className="bg-blue-100 text-blue-800">
                              <Shield className="h-3 w-3 mr-1" />
                              Ethical
                            </Badge>
                          ) : (
                            <Badge className="bg-red-100 text-red-800">Caution</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Script Templates */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Conversation Script Templates
            </h2>
            
            <div className="space-y-6">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Opening Script</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 mb-3">
                      "Thank you for taking the time to meet with me. I've really enjoyed working on [specific projects] 
                      and contributing to [specific results]. I'd like to discuss my compensation and how we can align 
                      it with the value I'm bringing to the team."
                    </p>
                    <div className="text-xs text-blue-600">
                      <strong>Key elements:</strong> Gratitude, specific achievements, value focus, collaborative tone
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Value Presentation Script</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800 mb-3">
                      "Over the past year, I've [specific achievement #1], which resulted in [quantifiable result]. 
                      I also [achievement #2], leading to [measurable impact]. Based on my research of market rates 
                      for similar roles and responsibilities, I believe a salary adjustment to [amount] would be appropriate."
                    </p>
                    <div className="text-xs text-green-600">
                      <strong>Key elements:</strong> Specific achievements, quantifiable results, market research, clear ask
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Closing Script</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800 mb-3">
                      "I'm excited about continuing to contribute to [company/team goals] and believe this adjustment 
                      reflects the value I bring. What are your thoughts on this proposal, and what would be the next 
                      steps to move forward?"
                    </p>
                    <div className="text-xs text-purple-600">
                      <strong>Key elements:</strong> Future focus, enthusiasm, open question, action orientation
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Master Your Next Salary Negotiation</h2>
                <p className="text-gray-600 mb-6">
                  Armed with these proven strategies, you're ready to negotiate with confidence. 
                  Prepare thoroughly, communicate professionally, and present your value clearly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/guides/performance-review-raise-preparation">
                    <Button className="bg-primary hover:bg-blue-700">
                      Performance Review Prep
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