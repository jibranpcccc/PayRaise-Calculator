import { SEOHead } from "../../components/seo/head";
import { SchemaGenerator } from "../../components/seo/schema-generator";
import { BreadcrumbNavigation } from "../../components/seo/breadcrumb-navigation";
import { MessageSquare, ShieldCheck, Mail, ArrowRight, XCircle } from "lucide-react";
import { Card, CardContent, CardTitle, CardHeader } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";

export default function CounterOfferSalaryExamples() {
    const publishDate = "2025-01-27";
    const modifiedDate = "2025-01-27";

    const structuredData = SchemaGenerator.article({
        headline: "Counter Offer Salary Examples: 5 Scripts That Work (2025)",
        description: "Received a lowball salary offer? Use these copy-and-paste counter offer email templates and scripts to negotiate a higher salary without being aggressive.",
        url: "https://payraisepercentagecalculator.com/blog/counter-offer-salary-examples",
        datePublished: publishDate,
        dateModified: modifiedDate,
        author: "Pay Raise Team",
        image: "https://payraisepercentagecalculator.com/images/blog/counter-offer-salary-examples.png",
        keywords: [
            "counter offer salary examples",
            "salary negotiation email template",
            "how to counter offer salary",
            "sample counter offer letter",
            "responding to low salary offer"
        ]
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <SEOHead
                title="Counter Offer Salary Examples: 5 Scripts That Work (2025)"
                description="Received a lowball salary offer? Use these copy-and-paste counter offer email templates and scripts to negotiate a higher salary without being aggressive."
                canonical="/blog/counter-offer-salary-examples"
                keywords="counter offer salary examples, salary negotiation email template, how to counter offer salary, sample counter offer letter"
                structuredData={structuredData}
            />

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <BreadcrumbNavigation
                    items={[
                        { name: "Blog", url: "/blog" },
                        { name: "Counter Offer Salary Examples", url: "/blog/counter-offer-salary-examples" },
                    ]}
                />

                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-6">
                    {/* Hero Section */}
                    <div className="relative h-64 md:h-80 w-full">
                        <img
                            src="/images/blog/counter-offer-salary-examples.png"
                            alt="Professional typing a salary counter offer email"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.className += ' bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center';
                                target.parentElement!.innerHTML += '<span class="text-blue-500 font-medium text-lg">Image Loading...</span>';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                            <div className="p-8 text-white">
                                <div className="flex items-center space-x-2 text-sm font-medium mb-3 opacity-90">
                                    <span className="bg-orange-500 px-2 py-1 rounded text-xs uppercase tracking-wider">Negotiation</span>
                                    <span>•</span>
                                    <span>Jan 27, 2025</span>
                                    <span>•</span>
                                    <span>7 min read</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    Counter Offer Salary Examples: 5 Scripts That Work
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Intro Box */}
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-10 rounded-r-lg">
                            <p className="text-orange-900 leading-relaxed font-medium">
                                <strong>Reality Check:</strong> 58% of hiring managers expect a salary negotiation, yet only 39% of candidates try. By sending one of these emails, you could increase your starting pay by $5,000 to $15,000 instantly.
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="text-xl leading-relaxed text-gray-600 mb-8">
                                The offer is in. The excitement is real. But the number... it's a little lower than you hoped. Do you accept? Absolutely not. You counter. Here are 3 proven scenarios and the exact scripts to use.
                            </p>

                            <h2 className="text-gray-900 mt-12 mb-6 flex items-center">
                                <Mail className="mr-3 h-6 w-6 text-blue-600" />
                                Scenario 1: The "Research-Backed" Counter
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">Use this when you have data showing they are underpaying based on market rates.</p>

                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 not-prose font-sans">
                                <div className="mb-4 text-sm text-gray-500 border-b pb-2">Subject: Job Offer - [Your Name]</div>
                                <p className="mb-4">Hi [Recruiter Name],</p>
                                <p className="mb-4">Thank you so much for the offer to join the team as a [Role Name]. I'm incredibly excited about the company's mission and the work we discussed.</p>
                                <p className="mb-4">However, regarding the salary, I'd like to discuss the base pay of $75,000. Based on my research of similar roles in [City/Industry] and my experience with [Specific Skill], looking at market data, the typical range is closer to <strong>$82,000 - $88,000</strong>.</p>
                                <p className="mb-4">Is there flexibility to move the base salary closer to $85,000 to reflect this market rate?</p>
                                <p className="mb-4">I am very keen to join and this is the final step to make that happen.</p>
                                <p>Best,<br />[Your Name]</p>
                            </div>

                            <div className="mt-4 flex gap-4">
                                <Link href="/industry-raise-benchmarks-2025">
                                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                                        View Market Data Needed for This Script
                                    </Button>
                                </Link>
                            </div>


                            <h2 className="text-gray-900 mt-12 mb-6 flex items-center">
                                <ShieldCheck className="mr-3 h-6 w-6 text-green-600" />
                                Scenario 2: The "Value-Add" Counter
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">Use this when the offer is fair, but you are bringing extra skills ( certifications, unmatched experience) that warrant a premium.</p>

                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 not-prose font-sans">
                                <p className="mb-4">Hi [Hiring Manager Name],</p>
                                <p className="mb-4">I appreciate the offer and I'm eager to help the team achieve [Goal you discussed].</p>
                                <p className="mb-4">Looking at the compensation package, I noticed the base is set at $90,000. Given that I am coming into this role not just with standard experience but with [Specific Certification/Client List/Niche Skill], I will be able to hit the ground running immediately without the typical ramp-up period.</p>
                                <p className="mb-4">Because of this immediate value contribution, I was aiming for a base salary of <strong>$98,000</strong>.</p>
                                <p className="mb-4">If we can reach that number, I'd be thrilled to sign the offer letter today.</p>
                                <p>Best,<br />[Your Name]</p>
                            </div>


                            <h2 className="text-gray-900 mt-12 mb-6 flex items-center">
                                <MessageSquare className="mr-3 h-6 w-6 text-purple-600" />
                                Scenario 3: The "Competing Offer" Counter
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">Use this only if you actually have another offer. It's high leverage but high risk.</p>

                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 not-prose font-sans">
                                <p className="mb-4">Hi [Recruiter Name],</p>
                                <p className="mb-4">Thank you for the offer. I've really enjoyed meeting the team and [Company Name] remains my top choice.</p>
                                <p className="mb-4">Transparency is important to me, so I wanted to share that I have received another offer from a competitor with a base salary of <strong>$105,000</strong>.</p>
                                <p className="mb-4">Because I believe [Company Name] is the best fit for my long-term career, I would prefer to join your team. If you can match the $105,000 base salary, I will decline the other offer and accept yours immediately.</p>
                                <p>Best,<br />[Your Name]</p>
                            </div>

                            <h2 className="text-gray-900 mt-12 mb-4">What NOT To Say</h2>
                            <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
                                <Card className="bg-red-50 border-red-100">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-bold text-red-700 flex items-center">
                                            <XCircle className="h-4 w-4 mr-2" />
                                            "I need more because rent is high"
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-red-800">Never base negotiation on personal financial needs. Base it on your value to the company.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-red-50 border-red-100">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-bold text-red-700 flex items-center">
                                            <XCircle className="h-4 w-4 mr-2" />
                                            "That's insulting"
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-red-800">Keep emotion out of it. It's just a business transaction. Stay professional.</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="bg-blue-600 text-white p-8 rounded-xl mt-8 not-prose text-center shadow-lg">
                                <h3 className="text-2xl font-bold mb-3">Compare Two Job Offers</h3>
                                <p className="text-blue-100 mb-6">
                                    Salary isn't everything. Use our Offer Comparison Calculator to weigh benefits, bonuses, and equity side-by-side.
                                </p>
                                <Link href="/tools/offer-comparison-calculator">
                                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                        Launch Comparison Tool
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
