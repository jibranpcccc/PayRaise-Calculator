import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  MessageSquare, 
  Copy, 
  CheckCircle, 
  Users, 
  Building2, 
  TrendingUp, 
  FileText,
  Clock,
  Target,
  AlertTriangle
} from "lucide-react";

export default function RaiseNegotiationScriptsTemplates() {
  const [copiedScript, setCopiedScript] = useState<string | null>(null);

  const copyToClipboard = (text: string, scriptId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(scriptId);
    setTimeout(() => setCopiedScript(null), 2000);
  };

  const emailTemplates = [
    {
      id: "initial-request",
      title: "Initial Salary Review Request",
      situation: "Requesting a meeting to discuss compensation",
      tone: "Professional, confident",
      template: `Subject: Request for Salary Review Discussion

Dear [Manager's Name],

I hope this email finds you well. I would like to schedule a meeting with you to discuss my current compensation and potential for a salary adjustment.

Over the past [time period], I have consistently delivered strong results in my role as [your position]. I have [specific achievement 1], [specific achievement 2], and [specific achievement 3]. Based on my research of current market rates for similar positions in our industry and geographic area, I believe a discussion about adjusting my compensation would be appropriate.

I have prepared a comprehensive overview of my contributions and market research that I would like to share with you. Would you be available for a 30-45 minute meeting sometime next week to discuss this further?

Thank you for your time and consideration. I look forward to our conversation.

Best regards,
[Your Name]`
    },
    {
      id: "performance-based",
      title: "Performance-Based Raise Request",
      situation: "Following a strong performance review",
      tone: "Achievement-focused, data-driven",
      template: `Subject: Follow-up on Performance Review - Compensation Discussion

Hi [Manager's Name],

Thank you for the positive feedback during my recent performance review. I'm pleased that my contributions in [specific areas] have been recognized and valued.

Given my [rating/feedback received] performance review and the additional responsibilities I've taken on, including [specific new responsibilities], I would like to discuss adjusting my salary to better reflect my current contributions and market value.

My research indicates that professionals in similar roles with comparable experience and performance in our market typically earn between $[X] and $[Y]. Based on my demonstrated value and continued growth in the role, I believe a salary adjustment to $[specific amount] would be appropriate and aligned with industry standards.

I would appreciate the opportunity to discuss this further at your convenience. Please let me know when would be a good time for us to meet.

Thank you for your continued support and leadership.

Best regards,
[Your Name]`
    },
    {
      id: "market-research",
      title: "Market Research-Based Request",
      situation: "Armed with comprehensive salary data",
      tone: "Data-driven, professional",
      template: `Subject: Compensation Review Based on Market Analysis

Dear [Manager's Name],

I hope you're doing well. I'm writing to request a meeting to discuss my current compensation in light of recent market research I've conducted.

Through my analysis of salary data from [sources: BLS, Glassdoor, industry surveys], I've found that the current market rate for [your position] with [X years] of experience in [location/industry] ranges from $[X] to $[Y], with a median of $[Z]. This represents a [percentage]% variance from my current salary of $[current amount].

I believe this data, combined with my strong performance and the value I bring to [specific contributions], supports a discussion about bringing my compensation in line with current market standards.

I've prepared a detailed analysis that I'd like to share with you, along with documentation of my recent achievements and contributions. Could we schedule 30-45 minutes to discuss this information?

I appreciate your time and look forward to our conversation.

Best regards,
[Your Name]`
    }
  ];

  const verbalScripts = [
    {
      id: "opening-conversation",
      title: "Opening the Conversation",
      scenario: "Starting the salary discussion meeting",
      script: `"Thank you for taking the time to meet with me today. I wanted to discuss my compensation and explore the possibility of a salary adjustment based on my performance and current market conditions.

Over the past [time period], I've consistently exceeded my goals and taken on additional responsibilities that have directly contributed to [specific business outcomes]. I've also done research on current market rates for my position and experience level.

I'd like to walk you through my achievements and the market data I've gathered, and then discuss how we might align my compensation with both my contributions and industry standards."`
    },
    {
      id: "presenting-achievements",
      title: "Presenting Your Achievements",
      scenario: "Highlighting your value and contributions",
      script: `"Let me share some specific examples of the value I've delivered:

First, [achievement 1 with quantified impact - e.g., 'I led the project that increased efficiency by 25%, saving the company $X annually'].

Second, [achievement 2 with measurable results - e.g., 'I improved our customer satisfaction scores from X% to Y%, resulting in increased retention'].

Finally, [achievement 3 with business impact - e.g., 'I've taken on additional responsibilities managing Z, which has freed up senior team members to focus on strategic initiatives'].

These contributions demonstrate that I'm operating above my current job description and delivering results that justify compensation growth."`
    },
    {
      id: "market-data-presentation",
      title: "Presenting Market Data",
      scenario: "Sharing salary research findings",
      script: `"I've conducted thorough research using reliable sources including [mention 2-3 sources like BLS, Glassdoor, industry reports]. 

Based on this research, the current market range for [your position] with [X years] experience in [location] is $[X] to $[Y], with a median of $[Z]. This data shows that my current salary of $[current amount] is [X%] below the market median.

I've also looked at [specific factors like company size, industry segment] to ensure the comparison is relevant to our organization. The data consistently shows that there's room for adjustment to bring my compensation in line with market standards.

Given my strong performance and the market data, I believe a salary adjustment to $[target amount] would be both fair and competitive."`
    }
  ];

  const responseHandling = [
    {
      objection: "\"We don't have budget for raises right now\"",
      response: "I understand budget constraints are a real consideration. Could we explore alternative timing, such as aligning this adjustment with the next budget cycle? Or perhaps we could discuss other forms of compensation like additional benefits, professional development opportunities, or a performance-based increase structure?"
    },
    {
      objection: "\"Your salary is already competitive\"",
      response: "I appreciate that perspective. The market research I've done suggests there may be room for adjustment. Could we review the specific data I've gathered together? I'd also like to discuss how my expanded responsibilities and strong performance factor into the overall compensation picture."
    },
    {
      objection: "\"You haven't been in the role long enough\"",
      response: "I understand the importance of tenure, and I value the investment the company has made in me. However, I believe my contributions and the value I've delivered demonstrate that I'm performing at a level that justifies this discussion. Could we focus on the measurable impact I've made during my time here?"
    },
    {
      objection: "\"We'll consider it during the next review cycle\"",
      response: "I appreciate your willingness to consider this. Could we establish a specific timeline and criteria for that review? I'd like to understand what additional achievements or developments would support a positive outcome during that cycle."
    }
  ];

  const followUpTemplates = [
    {
      id: "post-meeting-summary",
      title: "Post-Meeting Follow-Up",
      purpose: "Documenting the discussion and next steps",
      template: `Subject: Thank you for today's discussion - Next steps

Hi [Manager's Name],

Thank you for taking the time to discuss my compensation today. I appreciate your openness to the conversation and the feedback you provided.

To summarize our discussion:
- We reviewed my performance and contributions over the past [time period]
- You acknowledged [specific positive feedback given]
- We discussed the market research showing [key finding]
- Next steps: [specific actions agreed upon and timeline]

I'm committed to continuing to deliver strong results while we work through this process. Please let me know if you need any additional information from me.

Thank you again for your consideration and support.

Best regards,
[Your Name]`
    },
    {
      id: "additional-information",
      title: "Providing Additional Information",
      purpose: "Sending supplementary materials after the meeting",
      template: `Subject: Additional documentation for salary review

Hi [Manager's Name],

As promised during our meeting, I'm attaching the additional documentation we discussed:

- Detailed performance metrics and achievements
- Market salary research with sources
- Examples of expanded responsibilities and impact

I believe this information supports the case for adjusting my compensation to $[amount] as we discussed. I'm happy to provide any other information that would be helpful for your review.

Please let me know if you have any questions or if there's anything else I can provide.

Best regards,
[Your Name]`
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Salary Negotiation Scripts & Templates: Professional Communication Guide",
    "description": "Complete collection of email templates and conversation scripts for salary negotiations. Professional, proven approaches for raise requests and compensation discussions.",
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
    "url": "https://payraisepercentagecalculator.com/blog/raise-negotiation-scripts-templates"
  };

  return (
    <>
      <SEOHead
        title="Salary Negotiation Scripts & Templates: Professional Communication Guide"
        description="Complete collection of email templates and conversation scripts for salary negotiations. Professional, proven approaches for raise requests and compensation discussions."
        canonical="/blog/raise-negotiation-scripts-templates"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Salary Negotiation Scripts & Templates: Professional Communication Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Complete collection of email templates and conversation scripts for salary negotiations. 
              Professional, proven approaches for raise requests and compensation discussions.
            </p>
          </div>

          {/* Templates Tabs */}
          <Tabs defaultValue="emails" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="emails">Email Templates</TabsTrigger>
              <TabsTrigger value="verbal">Verbal Scripts</TabsTrigger>
              <TabsTrigger value="responses">Response Handling</TabsTrigger>
              <TabsTrigger value="followup">Follow-Up</TabsTrigger>
            </TabsList>

            <TabsContent value="emails" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Templates for Salary Requests</h2>
              {emailTemplates.map((template) => (
                <Card key={template.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        {template.title}
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(template.template, template.id)}
                        className="flex items-center gap-2"
                      >
                        {copiedScript === template.id ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        {copiedScript === template.id ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{template.situation}</Badge>
                      <Badge variant="outline">{template.tone}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                        {template.template}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="verbal" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Verbal Conversation Scripts</h2>
              {verbalScripts.map((script) => (
                <Card key={script.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        {script.title}
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(script.script, script.id)}
                        className="flex items-center gap-2"
                      >
                        {copiedScript === script.id ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        {copiedScript === script.id ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    <Badge variant="secondary">{script.scenario}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <p className="text-gray-700 leading-relaxed">{script.script}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="responses" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Handling Common Objections</h2>
              {responseHandling.map((response, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Common Objection
                        </h3>
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <p className="text-red-800 italic">{response.objection}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Professional Response
                        </h3>
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <p className="text-green-800">{response.response}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="followup" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow-Up Email Templates</h2>
              {followUpTemplates.map((template) => (
                <Card key={template.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        {template.title}
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(template.template, template.id)}
                        className="flex items-center gap-2"
                      >
                        {copiedScript === template.id ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        {copiedScript === template.id ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    <Badge variant="secondary">{template.purpose}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                        {template.template}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Best Practices */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Communication Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Timing Matters</h3>
                      <p className="text-gray-600 text-sm">Schedule conversations during performance review periods or after significant achievements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Be Specific</h3>
                      <p className="text-gray-600 text-sm">Use concrete numbers, achievements, and market data rather than vague statements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Stay Professional</h3>
                      <p className="text-gray-600 text-sm">Maintain a collaborative tone focused on business value and mutual benefit.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Focus on Value</h3>
                      <p className="text-gray-600 text-sm">Emphasize contributions, achievements, and future potential rather than personal needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Document Everything</h3>
                      <p className="text-gray-600 text-sm">Keep records of conversations, agreements, and follow-up actions for accountability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Know Your Audience</h3>
                      <p className="text-gray-600 text-sm">Adapt your approach based on your manager's communication style and company culture.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Related Tools */}
          <section>
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Prepare for Your Negotiation</h2>
                <p className="text-lg mb-6">
                  Use our tools to build a strong case for your salary increase
                </p>
                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Link href="/">
                    <Button variant="secondary" className="w-full">
                      Calculate Target Raise
                    </Button>
                  </Link>
                  <Link href="/tools/salary-negotiation-calculator">
                    <Button variant="secondary" className="w-full">
                      Success Probability
                    </Button>
                  </Link>
                  <Link href="/guides/market-value-salary-research">
                    <Button variant="secondary" className="w-full">
                      Market Research Guide
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