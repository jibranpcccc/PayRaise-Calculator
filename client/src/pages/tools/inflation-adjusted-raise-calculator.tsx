import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import { PayRaiseCalculator } from "@/lib/calculator";
import { getInflationAdjustedAnalysis } from "@/lib/industry-data";
import { InflationImpactChart } from "@/components/calculator-svgs/inflation-impact-chart";
import { Link } from "wouter";
import { TrendingUp, TrendingDown, AlertTriangle, PiggyBank, Calculator, Target, ExternalLink, ArrowRight, DollarSign } from "lucide-react";

export default function InflationAdjustedRaiseCalculator() {
  const [currentSalary, setCurrentSalary] = useState(60000);
  const [raisePercentage, setRaisePercentage] = useState(5);
  const [inflationRate, setInflationRate] = useState(3.1);
  const [customInflation, setCustomInflation] = useState(false);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    calculateInflationAdjusted();
  }, [currentSalary, raisePercentage, inflationRate]);

  const calculateInflationAdjusted = () => {
    const newSalary = currentSalary * (1 + raisePercentage / 100);
    const raiseAmount = newSalary - currentSalary;
    const realRaise = raisePercentage - inflationRate;
    const realPurchasingPower = currentSalary * (1 + realRaise / 100);
    const inflationImpact = currentSalary * (inflationRate / 100);
    const netRealIncrease = raiseAmount - inflationImpact;

    const analysis = getInflationAdjustedAnalysis(raisePercentage);

    setResults({
      newSalary,
      raiseAmount,
      realRaise,
      realPurchasingPower,
      inflationImpact,
      netRealIncrease,
      analysis,
      monthlyInflationCost: inflationImpact / 12,
      monthlyRealGain: netRealIncrease / 12
    });
  };

  const getRealRaiseColor = () => {
    if (results?.realRaise > 1) return "text-green-600";
    if (results?.realRaise > 0) return "text-yellow-600";
    return "text-red-600";
  };

  const getRealRaiseIcon = () => {
    if (results?.realRaise > 1) return <TrendingUp className="h-5 w-5 text-green-600" />;
    if (results?.realRaise > 0) return <TrendingUp className="h-5 w-5 text-yellow-600" />;
    return <TrendingDown className="h-5 w-5 text-red-600" />;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "Calculator"],
    "name": "Inflation-Adjusted Raise Calculator 2025 - Real Purchasing Power",
    "description": "Calculate real purchasing power after inflation. See how current 3.1% inflation rate affects your salary increase and determine your true financial gain.",
    "url": "https://payraisepercentagecalculator.com/tools/inflation-adjusted-raise-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Real purchasing power calculations",
      "Current inflation rate integration",
      "Inflation impact analysis",
      "Net real increase calculations"
    ]
  };

  return (
    <>
      <SEOHead
        title="Inflation-Adjusted Raise Calculator 2025 - Real Purchasing Power Analysis"
        description="Calculate real purchasing power after inflation. See how current 3.1% inflation rate affects your salary increase and determine your true financial gain."
        canonical="/tools/inflation-adjusted-raise-calculator"
        keywords="inflation adjusted raise calculator, real purchasing power, inflation impact salary, cost of living adjustment, real wage growth"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Inflation-Adjusted Raise Calculator
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                See your real purchasing power after accounting for inflation
              </p>
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-yellow-100 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="text-yellow-800 text-sm">
                  Current CPI inflation rate: 3.1% (Bureau of Labor Statistics)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              How to Calculate Inflation-Adjusted Raises
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <CardTitle className="text-lg">Enter Your Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Input your current salary and expected raise percentage. The calculator uses the current inflation rate of 3.1%.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <CardTitle className="text-lg">View Real Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">See your nominal raise vs real purchasing power. A 5% raise with 3.1% inflation equals 1.9% real increase.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <CardTitle className="text-lg">Plan Your Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Use the insights to negotiate raises that maintain or improve your purchasing power in the current economy.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PiggyBank className="mr-2 h-5 w-5 text-primary" />
                    Enter Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="currentSalary">Current Annual Salary</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <Input
                        id="currentSalary"
                        type="text"
                        className="pl-8"
                        value={currentSalary.toLocaleString()}
                        onChange={(e) => setCurrentSalary(parseFloat(e.target.value.replace(/[^\d.]/g, '')) || 0)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="raisePercentage">Raise Percentage</Label>
                    <div className="relative mt-2">
                      <Input
                        id="raisePercentage"
                        type="number"
                        step="0.1"
                        className="pr-8"
                        value={raisePercentage}
                        onChange={(e) => setRaisePercentage(parseFloat(e.target.value) || 0)}
                      />
                      <span className="absolute right-3 top-3 text-gray-500">%</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inflationRate">Inflation Rate</Label>
                    <Select 
                      value={customInflation ? "custom" : "current"} 
                      onValueChange={(value) => {
                        setCustomInflation(value === "custom");
                        if (value === "current") setInflationRate(3.1);
                      }}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">Current CPI (3.1%)</SelectItem>
                        <SelectItem value="custom">Custom Rate</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {customInflation && (
                      <div className="relative mt-2">
                        <Input
                          type="number"
                          step="0.1"
                          className="pr-8"
                          value={inflationRate}
                          onChange={(e) => setInflationRate(parseFloat(e.target.value) || 0)}
                        />
                        <span className="absolute right-3 top-3 text-gray-500">%</span>
                      </div>
                    )}
                  </div>

                  {/* Quick Inflation Context */}
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-blue-900 mb-2">Understanding Inflation</h4>
                      <div className="text-sm text-blue-800 space-y-1">
                        <p>• 3.1% = Your purchasing power stays the same</p>
                        <p>• Above 3.1% = Real income increase</p>
                        <p>• Below 3.1% = Real income decrease</p>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-success" />
                    Inflation Impact Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {results && (
                    <div className="space-y-6">
                      {/* Main Real Raise Result */}
                      <Card className={`border-2 ${results.realRaise > 0 ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                        <CardContent className="p-4 text-center">
                          <div className="flex items-center justify-center mb-2">
                            {getRealRaiseIcon()}
                            <span className="ml-2 text-sm font-medium">Real Raise (After Inflation)</span>
                          </div>
                          <div className={`text-3xl font-bold ${getRealRaiseColor()}`}>
                            {PayRaiseCalculator.formatPercentage(results.realRaise)}
                          </div>
                          <Badge variant={results.analysis.status === 'positive' ? 'default' : 
                                        results.analysis.status === 'neutral' ? 'secondary' : 'destructive'}>
                            {results.analysis.message}
                          </Badge>
                        </CardContent>
                      </Card>

                      {/* Breakdown */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Detailed Breakdown</h4>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="text-sm text-gray-600">Nominal Raise</div>
                            <div className="text-lg font-bold text-gray-900">
                              {PayRaiseCalculator.formatPercentage(raisePercentage)}
                            </div>
                            <div className="text-xs text-gray-500">
                              {PayRaiseCalculator.formatCurrency(results.raiseAmount)}
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="text-sm text-gray-600">Inflation Impact</div>
                            <div className="text-lg font-bold text-red-600">
                              -{PayRaiseCalculator.formatPercentage(inflationRate)}
                            </div>
                            <div className="text-xs text-gray-500">
                              -{PayRaiseCalculator.formatCurrency(results.inflationImpact)}
                            </div>
                          </div>
                        </div>

                        <Card className="bg-yellow-50 border-yellow-200">
                          <CardContent className="p-4">
                            <h5 className="font-medium text-yellow-900 mb-2">Monthly Impact</h5>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Monthly raise amount:</span>
                                <span className="font-medium text-green-600">
                                  +{PayRaiseCalculator.formatCurrency(results.raiseAmount / 12)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>Monthly inflation cost:</span>
                                <span className="font-medium text-red-600">
                                  -{PayRaiseCalculator.formatCurrency(results.monthlyInflationCost)}
                                </span>
                              </div>
                              <hr className="border-yellow-300" />
                              <div className="flex justify-between font-semibold">
                                <span>Real monthly gain:</span>
                                <span className={results.netRealIncrease > 0 ? 'text-green-600' : 'text-red-600'}>
                                  {results.netRealIncrease > 0 ? '+' : ''}
                                  {PayRaiseCalculator.formatCurrency(results.monthlyRealGain)}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Purchasing Power Analysis */}
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium text-blue-900 mb-2">Purchasing Power Analysis</h5>
                          <div className="space-y-2 text-sm text-blue-800">
                            <div className="flex justify-between">
                              <span>Your new salary:</span>
                              <span className="font-medium">
                                {PayRaiseCalculator.formatCurrency(results.newSalary)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Equivalent purchasing power:</span>
                              <span className="font-medium">
                                {PayRaiseCalculator.formatCurrency(results.realPurchasingPower)}
                              </span>
                            </div>
                            <p className="mt-2 text-xs">
                              This shows what your new salary can actually buy compared to today's prices.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Inflation's Impact on Your Raise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>What is Real vs. Nominal?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Nominal Raise</h4>
                    <p className="text-gray-600 text-sm">
                      The actual percentage or dollar amount increase in your salary. 
                      This is what you see on your paycheck.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Real Raise</h4>
                    <p className="text-gray-600 text-sm">
                      Your purchasing power increase after accounting for inflation. 
                      This is what your raise can actually buy.
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                    <p className="text-sm text-yellow-800">
                      <strong>Example:</strong> A 5% raise during 3% inflation = 2% real increase in buying power.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why This Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Helps you understand your true financial progress</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Essential for salary negotiation planning</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Prevents the illusion of income growth during high inflation</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Helps with long-term financial planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
