import { SEOHead } from "../../components/seo/head";
import { SchemaGenerator } from "../../components/seo/schema-generator";
import { BreadcrumbNavigation } from "../../components/seo/breadcrumb-navigation";
import { Calculator, TrendingUp, DollarSign, AlertTriangle, ArrowRight, BarChart } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";

export default function IsThreePercentRaiseGood() {
    const publishDate = "2025-01-20";
    const modifiedDate = "2025-01-20";

    return (
        <div className="min-h-screen bg-gray-50">
            <SEOHead
                title="Is a 3% Raise Good in 2025? (Inflation vs. Reality)"
                description="Analysis of 2025 salary trends: Is a 3% raise enough to beat inflation? See the data on average merit increases, cost of living, and what you should really ask for."
                canonicalUrl="https://payraisepercentagecalculator.com/blog/is-a-3-percent-raise-good"
                type="article"
                publishedTime={publishDate}
                modifiedTime={modifiedDate}
                keywords={[
                    "is a 3% raise good 2025",
                    "average salary increase 2025",
                    "inflation vs salary raise 2025",
                    "typical merit increase",
                    "cost of living adjustment 2025"
                ]}
            />

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <BreadcrumbNavigation
                    items={[
                        { name: "Home", item: "/" },
                        { name: "Blog", item: "/blog" },
                        { name: "Is a 3% Raise Good?", item: "/blog/is-a-3-percent-raise-good" },
                    ]}
                />

                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-6">
                    {/* Hero Section */}
                    <div className="relative h-64 md:h-80 w-full">
                        <img
                            src="/images/calculators/inflation-adjusted-raise-calculator.jpg"
                            alt="Inflation vs Salary Raise Balance Scale"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                            <div className="p-8 text-white">
                                <div className="flex items-center space-x-2 text-sm font-medium mb-3 opacity-90">
                                    <span className="bg-blue-600 px-2 py-1 rounded text-xs uppercase tracking-wider">Salary Analysis</span>
                                    <span>•</span>
                                    <span>Jan 20, 2025</span>
                                    <span>•</span>
                                    <span>6 min read</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    Is a 3% Raise Good in 2025? The Truth About Inflation
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Executive Summary Box */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10 rounded-r-lg">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">The Short Answer</h3>
                            <p className="text-blue-800 leading-relaxed">
                                In 2025, a 3% raise is considered <strong>average</strong> but may barely keep up with core inflation (projected at 2.5% - 3.4%). While it's better than nothing, it likely offers zero "real" income growth. High performers should target <strong>4.5% - 5%+</strong> to see actual wealth accumulation.
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="text-xl leading-relaxed text-gray-600 mb-8">
                                You’ve just been offered a 3% salary increase. Your manager frames it as a solid merit bump. But when you look at your grocery bills and rent, it doesn't <em>feel</em> like a win. Is it?
                            </p>

                            <h2 className="flex items-center text-gray-900 mt-10 mb-4">
                                <TrendingUp className="mr-3 h-8 w-8 text-blue-600" />
                                The 2025 Data: Salary vs. Inflation
                            </h2>
                            <p>
                                To understand if 3% is "good," we need to look at two key metrics for 2025: projected projected inflation and corporate salary budgets.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">2025 Inflation Forecast</div>
                                        <div className="text-4xl font-bold text-red-600 mb-2">2.5% - 3.4%</div>
                                        <p className="text-sm text-gray-500">
                                            Sources: Morgan Stanley, Goldman Sachs. Core inflation remains sticky in housing and services.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Avg. Corporate Raise Budget</div>
                                        <div className="text-4xl font-bold text-green-600 mb-2">3.9%</div>
                                        <p className="text-sm text-gray-500">
                                            Sources: WorldatWork, The Conference Board. Companies are budgeting higher than pre-pandemic norms.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            <p>
                                <strong>The Verdict:</strong> A 3% raise is <em>below</em> the corporate average of ~3.9%. If inflation hits the upper end of projections (3.4%), your 3% raise is practically a wash—you have the same purchasing power as last year.
                            </p>

                            <h2 className="flex items-center text-gray-900 mt-10 mb-4">
                                <Calculator className="mr-3 h-8 w-8 text-purple-600" />
                                Math Time: The "Real" Value of 3%
                            </h2>
                            <p>
                                Let's run the numbers on a $75,000 salary.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-6 not-prose">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="pb-3 text-gray-500 font-medium">Scenario</th>
                                            <th className="pb-3 text-gray-500 font-medium text-right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="py-3">
                                            <td className="py-3 text-gray-800">New Salary (3% Raise)</td>
                                            <td className="py-3 text-gray-900 font-bold text-right">$77,250</td>
                                        </tr>
                                        <tr className="py-3">
                                            <td className="py-3 text-gray-800">Inflation Cost (est. 3%)</td>
                                            <td className="py-3 text-red-600 font-bold text-right">-$2,250</td>
                                        </tr>
                                        <tr className="py-3 bg-blue-50">
                                            <td className="py-3 text-blue-900 font-bold">Real Buying Power Gain</td>
                                            <td className="py-3 text-blue-900 font-bold text-right">$0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                If your "real" gain is $0, you haven't been rewarded for better experience or performance; you've simply been "maintained."
                            </p>

                            <div className="my-8 not-prose">
                                <Link href="/tools/inflation-adjusted-raise-calculator">
                                    <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg group">
                                        <Calculator className="mr-2 h-5 w-5" />
                                        Calculate Your Real Wage Growth
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>

                            <h2 className="text-gray-900 mt-10 mb-4">When is a 3% Raise Acceptable?</h2>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 text-sm">✓</span>
                                    <span><strong>You recently started:</strong> If you've been in the role less than a year.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 text-sm">✓</span>
                                    <span><strong>Company Struggles:</strong> If your industry is facing a downturn but they still prioritized <i>something</i>.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 text-sm">✓</span>
                                    <span><strong>High Base Salary:</strong> You are already paid above 90th percentile for market rate.</span>
                                </li>
                            </ul>

                            <h2 className="text-gray-900 mt-10 mb-4">When Should You Push for More?</h2>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 text-sm">!</span>
                                    <span><strong>Top Performer:</strong> You exceeded all KPIs. Top performers often get 1.5x-2x the average (meaning 5% to 8%).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 text-sm">!</span>
                                    <span><strong>Market Rate Gap:</strong> New hires for your role are paid more than you.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 text-sm">!</span>
                                    <span><strong>Expanded Scope:</strong> You’ve taken on new responsibilities without a title accumulation.</span>
                                </li>
                            </ul>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-10 not-prose">
                                <h3 className="flex items-center text-lg font-bold text-yellow-800 mb-3">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    What to Do Next
                                </h3>
                                <p className="text-yellow-900 mb-4">
                                    Don't just accept 3% if you deserve more. Use our calculators to prepare your case.
                                </p>
                                <div className="space-y-3">
                                    <Link href="/tools/salary-negotiation-calculator" className="block p-3 bg-white rounded-lg border border-yellow-100 hover:border-yellow-300 transition-colors shadow-sm text-yellow-900 font-medium">
                                        1. Build your negotiation case with data →
                                    </Link>
                                    <Link href="/blog/raise-negotiation-scripts-templates" className="block p-3 bg-white rounded-lg border border-yellow-100 hover:border-yellow-300 transition-colors shadow-sm text-yellow-900 font-medium">
                                        2. Use our scripts to ask for the meeting →
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>
            </div>

            <SchemaGenerator
                type="Article"
                title="Is a 3% Raise Good in 2025?"
                description="Analysis of 2025 salary trends: Is a 3% raise enough to beat inflation?"
                url="https://payraisepercentagecalculator.com/blog/is-a-3-percent-raise-good"
                image="https://payraisepercentagecalculator.com/images/calculators/inflation-adjusted-raise-calculator.jpg"
                author="Pay Raise Team"
                datePublished={publishDate}
                dateModified={modifiedDate}
            />
        </div>
    );
}
