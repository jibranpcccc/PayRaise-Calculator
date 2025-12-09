import { SEOHead } from "../../components/seo/head";
import { SchemaGenerator } from "../../components/seo/schema-generator";
import { BreadcrumbNavigation } from "../../components/seo/breadcrumb-navigation";
import { TrendingUp, Calendar, AlertCircle, ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { Badge } from "../../components/ui/badge";

export default function TypicalAnnualRaisePercentage() {
    const publishDate = "2025-01-26";
    const modifiedDate = "2025-01-26";

    const structuredData = SchemaGenerator.article({
        headline: "Typical Annual Raise Percentage: 2025 Market Standards",
        description: "What is the typical annual raise percentage for 2025? We visualize 20 years of salary data to show you what's normal, what's good, and what's a pay cut.",
        url: "https://payraisepercentagecalculator.com/blog/typical-annual-raise-percentage",
        datePublished: publishDate,
        dateModified: modifiedDate,
        author: "Pay Raise Team",
        image: "https://payraisepercentagecalculator.com/images/blog/typical-annual-raise-percentage.png",
        keywords: [
            "typical annual raise percentage",
            "average merit increase 2025",
            "standard cost of living raise",
            "normal salary increase per year",
            "annual review raise expectations"
        ]
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <SEOHead
                title="Typical Annual Raise Percentage: 2025 Market Data & Standards"
                description="What is the typical annual raise percentage for 2025? We visualize 20 years of salary data to show you what's normal, what's good, and what's a pay cut."
                canonical="/blog/typical-annual-raise-percentage"
                keywords="typical annual raise percentage, average merit increase 2025, standard cost of living raise, normal salary increase per year"
                structuredData={structuredData}
            />

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <BreadcrumbNavigation
                    items={[
                        { name: "Blog", url: "/blog" },
                        { name: "Typical Annual Raise Percentage", url: "/blog/typical-annual-raise-percentage" },
                    ]}
                />

                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-6">
                    {/* Hero Section */}
                    <div className="relative h-64 md:h-80 w-full">
                        <img
                            src="/images/blog/typical-annual-raise-percentage.png"
                            alt="Chart showing historical typical annual raise percentages"
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
                                    <span className="bg-purple-600 px-2 py-1 rounded text-xs uppercase tracking-wider">Market Data</span>
                                    <span>•</span>
                                    <span>Jan 26, 2025</span>
                                    <span>•</span>
                                    <span>6 min read</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    What is the Typical Annual Raise Percentage in 2025?
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Executive Summary Box */}
                        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-10 rounded-r-lg">
                            <h3 className="text-xl font-bold text-purple-900 mb-2">The 2025 Benchmark</h3>
                            <p className="text-purple-800 leading-relaxed">
                                For 2025, the typical annual merit increase is projected to be <strong>3.9%</strong>. This is slightly down from the 2023-2024 highs of 4.4%, but still significantly above the pre-pandemic norm of 3.0%.
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="text-xl leading-relaxed text-gray-600 mb-8">
                                Waiting for your annual review can be nerve-wracking. Will it be enough to cover rent? Will it reflect your hard work? Managing your expectations starts with knowing what "normal" looks like in the current market.
                            </p>

                            <h2 className="text-gray-900 mt-10 mb-4 flex items-center">
                                <BarChart3 className="mr-3 h-8 w-8 text-indigo-600" />
                                Historical Raise Trends (2015-2025)
                            </h2>
                            <p>
                                To understand where we are, let's look at where we've been. For nearly a decade, "3 percent" was the golden rule. That rule broke in 2022.
                            </p>

                            <div className="my-8 not-prose overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="py-3 px-4 font-bold text-gray-700">Year</th>
                                            <th className="py-3 px-4 font-bold text-gray-700">Avg. Raise</th>
                                            <th className="py-3 px-4 font-bold text-gray-700">Inflation (CPI)</th>
                                            <th className="py-3 px-4 font-bold text-gray-700">Real Growth</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="bg-green-50">
                                            <td className="py-3 px-4 text-gray-900 font-bold">2025 (Proj.)</td>
                                            <td className="py-3 px-4 font-bold text-blue-600">3.9%</td>
                                            <td className="py-3 px-4 text-gray-600">~2.8%</td>
                                            <td className="py-3 px-4 text-green-600 font-bold">+1.1%</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 text-gray-900">2024</td>
                                            <td className="py-3 px-4 text-blue-600">4.1%</td>
                                            <td className="py-3 px-4 text-gray-600">3.4%</td>
                                            <td className="py-3 px-4 text-green-600">+0.7%</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 text-gray-900">2023</td>
                                            <td className="py-3 px-4 text-blue-600">4.4%</td>
                                            <td className="py-3 px-4 text-gray-600">4.1%</td>
                                            <td className="py-3 px-4 text-green-600">+0.3%</td>
                                        </tr>
                                        <tr className="bg-red-50">
                                            <td className="py-3 px-4 text-gray-900">2022</td>
                                            <td className="py-3 px-4 text-blue-600">4.0%</td>
                                            <td className="py-3 px-4 text-gray-600">8.0%</td>
                                            <td className="py-3 px-4 text-red-600 font-bold">-4.0%</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 text-gray-900">2010-2020</td>
                                            <td className="py-3 px-4 text-blue-600">3.0%</td>
                                            <td className="py-3 px-4 text-gray-600">1.8%</td>
                                            <td className="py-3 px-4 text-green-600">+1.2%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text-sm text-gray-500 mt-2 italic">Sources: WorldatWork, Mercer Compensation Planning Surveys, BLS CPI Data.</p>
                            </div>

                            <h2 className="text-gray-900 mt-10 mb-4">What Determines YOUR Percentage?</h2>
                            <p>
                                While 3.9% is the budget, individual results vary wildly based on performance ratings. Here is the typical breakdown for 2025:
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 my-6 not-prose">
                                <Card className="border-t-4 border-t-red-400">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-gray-500 font-medium mb-2">Needs Improvement</div>
                                        <div className="text-3xl font-bold text-gray-900 mb-1">0% - 1%</div>
                                        <p className="text-xs text-gray-500">Often put on PIP with no salary adjustment.</p>
                                    </CardContent>
                                </Card>
                                <Card className="border-t-4 border-t-blue-500">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-blue-600 font-bold mb-2">Meets Expectations</div>
                                        <div className="text-3xl font-bold text-gray-900 mb-1">3% - 4%</div>
                                        <p className="text-xs text-gray-500">The "standard" zone for 60% of employees.</p>
                                    </CardContent>
                                </Card>
                                <Card className="border-t-4 border-t-green-500">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-green-600 font-bold mb-2">Exceeds Expectations</div>
                                        <div className="text-3xl font-bold text-gray-900 mb-1">5% - 7%</div>
                                        <p className="text-xs text-gray-500">Reserved for top 10-20% of performers.</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <h2 className="text-gray-900 mt-10 mb-4">Good News vs. Bad News for 2025</h2>

                            <div className="space-y-4">
                                <div className="flex bg-green-50 p-4 rounded-lg">
                                    <TrendingUp className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-900">Good News: Real Wages Are Growing</h4>
                                        <p className="text-green-800 text-sm">
                                            For the first time in three years, projected raises (3.9%) are comfortably higher than projected inflation (2.5-3%). This means your paycheck will actually stretch further.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex bg-yellow-50 p-4 rounded-lg">
                                    <AlertCircle className="h-6 w-6 text-yellow-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-yellow-900">Bad News: Offers Are Cooling</h4>
                                        <p className="text-yellow-800 text-sm">
                                            The massive 15-20% jumps for switching jobs are becoming rarer. Staying put and negotiating a promotion (8-12%) might be safer than risking a move in a cooling market.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-8 rounded-xl mt-12 not-prose text-center">
                                <h3 className="text-xl font-bold mb-3">Compare Your Raise to the National Average</h3>
                                <p className="text-gray-600 mb-6">
                                    Did you get more or less than 3.9%? Use our calculator to see exactly how your raise stacks up.
                                </p>
                                <Link href="/">
                                    <Button className="w-full sm:w-auto">
                                        Calculate My Raise Percentage
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
