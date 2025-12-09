import { SEOHead } from "../../components/seo/head";
import { SchemaGenerator } from "../../components/seo/schema-generator";
import { BreadcrumbNavigation } from "../../components/seo/breadcrumb-navigation";
import { Calculator, Percent, DollarSign, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";

export default function HowToCalculateRaisePercentage() {
    const publishDate = "2025-01-25";
    const modifiedDate = "2025-01-25";

    const structuredData = SchemaGenerator.article({
        headline: "How to Calculate Raise Percentage: step-by-Step Guide & Formula (2025)",
        description: "Learn the exact formula to calculate your pay raise percentage. Simple step-by-step guide with examples for hourly and salaried employees.",
        url: "https://payraisepercentagecalculator.com/blog/how-to-calculate-raise-percentage",
        datePublished: publishDate,
        dateModified: modifiedDate,
        author: "Pay Raise Team",
        image: "https://payraisepercentagecalculator.com/images/blog/how-to-calculate-raise-percentage.png",
        keywords: [
            "how to calculate raise percentage",
            "raise calculation formula",
            "calculate salary increase percentage",
            "hourly raise calculator formula",
            "pay raise math"
        ]
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <SEOHead
                title="How to Calculate Raise Percentage: Formula & Examples (2025)"
                description="Learn the exact formula to calculate your pay raise percentage. Simple step-by-step guide with examples for hourly and salaried employees."
                canonical="/blog/how-to-calculate-raise-percentage"
                keywords="how to calculate raise percentage, raise calculation formula, calculate salary increase percentage, hourly raise calculator formula"
                structuredData={structuredData}
            />

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <BreadcrumbNavigation
                    items={[
                        { name: "Blog", url: "/blog" },
                        { name: "How to Calculate Raise Percentage", url: "/blog/how-to-calculate-raise-percentage" },
                    ]}
                />

                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-6">
                    {/* Hero Section */}
                    <div className="relative h-64 md:h-80 w-full">
                        <img
                            src="/images/blog/how-to-calculate-raise-percentage.png"
                            alt="Calculator and notepad showing raise percentage formula"
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
                                    <span className="bg-green-600 px-2 py-1 rounded text-xs uppercase tracking-wider">Guide</span>
                                    <span>•</span>
                                    <span>Jan 25, 2025</span>
                                    <span>•</span>
                                    <span>5 min read</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    How to Calculate Raise Percentage: The Only Formula You Need
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Quick Answer Box */}
                        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-10 rounded-r-lg">
                            <h3 className="text-xl font-bold text-indigo-900 mb-2 flex items-center">
                                <Percent className="mr-2 h-5 w-5" />
                                The Formula
                            </h3>
                            <p className="text-indigo-800 text-lg font-mono bg-white inline-block px-3 py-1 rounded border border-indigo-200 shadow-sm mt-2">
                                (New Salary - Old Salary) ÷ Old Salary × 100 = % Increase
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="text-xl leading-relaxed text-gray-600 mb-8">
                                Congratulations on your raise! But wait—your boss just told you the new dollar amount, not the percentage. Or maybe they gave you the percentage, and you want to double-check the math. Knowing your exact raise percentage is crucial for comparing it against inflation (currently ~3%) and industry averages.
                            </p>

                            <h2 className="text-gray-900 mt-10 mb-4">Step-by-Step Calculation Guide</h2>

                            <div className="space-y-6 not-prose">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Step 1: Find the Difference</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-2">Subtract your <strong>Old Salary</strong> from your <strong>New Salary</strong>. This is your "Raise Amount".</p>
                                        <div className="bg-gray-50 p-3 rounded font-mono text-sm text-gray-600">
                                            $55,000 (New) - $50,000 (Old) = $5,000 (Raise Amount)
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Step 2: Divide by Old Salary</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-2">Take that difference and divide it by your <strong>Old Salary</strong>.</p>
                                        <div className="bg-gray-50 p-3 rounded font-mono text-sm text-gray-600">
                                            $5,000 ÷ $50,000 = 0.10
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Step 3: Convert to Percentage</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-2">Multiply the result by 100.</p>
                                        <div className="bg-gray-50 p-3 rounded font-mono text-sm text-gray-600">
                                            0.10 × 100 = 10%
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <h2 className="text-gray-900 mt-10 mb-4">Examples: Hourly vs. Salaried</h2>

                            <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                                <div className="bg-blue-50 p-6 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                                        <DollarSign className="h-5 w-5 mr-1" /> Salaried Example
                                    </h3>
                                    <ul className="space-y-2 text-sm text-blue-800">
                                        <li><strong>Old Salary:</strong> $72,000</li>
                                        <li><strong>New Salary:</strong> $75,600</li>
                                        <li className="pt-2 border-t border-blue-200">Difference: $3,600</li>
                                        <li>$3,600 ÷ $72,000 = 0.05</li>
                                        <li className="font-bold text-lg">Result: 5% Raise</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-3 flex items-center">
                                        <Clock className="h-5 w-5 mr-1" /> Hourly Example
                                    </h3>
                                    <ul className="space-y-2 text-sm text-green-800">
                                        <li><strong>Old Rate:</strong> $22.00/hr</li>
                                        <li><strong>New Rate:</strong> $23.50/hr</li>
                                        <li className="pt-2 border-t border-green-200">Difference: $1.50</li>
                                        <li>$1.50 ÷ $22.00 = 0.068...</li>
                                        <li className="font-bold text-lg">Result: 6.8% Raise</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-gray-900 mt-10 mb-4">Why Does This Percentage Matter?</h2>
                            <p>
                                Understanding the percentage is far more valuable than just looking at the dollar amount.
                            </p>
                            <ul className="space-y-4 my-4">
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                    <span><strong>Benchmarks:</strong> You can compare 5% against the national average (usually 3-4%) to see if you're being paid competitively.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                    <span><strong>Inflation:</strong> If your raise is 2% but inflation is 3.5%, you effectively took a 1.5% pay cut in purchasing power.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                    <span><strong>Future Growth:</strong> Raises compound over time. A 10% raise early in your career is worth tens of thousands more over a lifetime than a 10% raise later.</span>
                                </li>
                            </ul>

                            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl mt-12 not-prose text-center">
                                <h3 className="text-2xl font-bold mb-4">Skip the Math, Use the Tool</h3>
                                <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                                    Why risk a calculation error? Our free calculator does the math instantly and shows you the tax impact too.
                                </p>
                                <Link href="/">
                                    <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-8 py-6 h-auto text-lg w-full sm:w-auto">
                                        <Calculator className="mr-2 h-6 w-6" />
                                        Use Pay Raise Calculator
                                        <ArrowRight className="ml-2 h-5 w-5" />
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
