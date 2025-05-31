import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEOHead } from "@/components/seo/head";
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Calculator, 
  BarChart3,
  Target,
  AlertTriangle,
  CheckCircle,
  DollarSign
} from "lucide-react";

export default function RaiseVsInflationAnalysis() {
  const [currentSalary, setCurrentSalary] = useState<string>("");
  const [raisePercentage, setRaisePercentage] = useState<string>("");
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Raise vs Inflation Analysis - Real Purchasing Power Calculator",
    "description": "Analyze how your pay raise compares to inflation. Calculate real purchasing power changes and understand the impact of inflation on salary increases.",
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

  const currentInflationRate = 3.1; // 2025 CPI
  
  const inflationScenarios = [
    {
      scenario: "Below Inflation Raise",
      raiseRange: "0% - 3.0%",
      description: "Raise doesn't keep up with inflation",
      impact: "Loss of purchasing power",
      color: "bg-red-50 border-red-200 text-red-800",
      icon: <TrendingDown className="h-5 w-5 text-red-600" />
    },
    {
      scenario: "Inflation-Matching Raise",
      raiseRange: "3.1%",
      description: "Raise exactly matches current inflation",
      impact: "Maintains purchasing power",
      color: "bg-yellow-50 border-yellow-200 text-yellow-800",
      icon: <Minus className="h-5 w-5 text-yellow-600" />
    },
    {
      scenario: "Above Inflation Raise",
      raiseRange: "3.2% +",
      description: "Raise exceeds inflation rate",
      impact: "Increased purchasing power",
      color: "bg-green-50 border-green-200 text-green-800",
      icon: <TrendingUp className="h-5 w-5 text-green-600" />
    }
  ];

  const historicalData = [
    { year: 2020, inflation: 1.2, avgRaise: 3.0, realGain: 1.8 },
    { year: 2021, inflation: 4.7, avgRaise: 3.4, realGain: -1.3 },
    { year: 2022, inflation: 8.0, avgRaise: 4.1, realGain: -3.9 },
    { year: 2023, inflation: 4.1, avgRaise: 4.4, realGain: 0.3 },
    { year: 2024, inflation: 3.4, avgRaise: 4.2, realGain: 0.8 },
    { year: 2025, inflation: 3.1, avgRaise: 4.2, realGain: 1.1 }
  ];

  const calculateRealImpact = () => {
    const salary = parseFloat(currentSalary) || 0;
    const raise = parseFloat(raisePercentage) || 0;
    
    if (salary === 0 || raise === 0) return null;
    
    const newSalary = salary * (1 + raise / 100);
    const raiseAmount = newSalary - salary;
    const realRaise = raise - currentInflationRate;
    const realSalaryValue = salary * (1 + realRaise / 100);
    const purchasingPowerChange = ((realSalaryValue - salary) / salary) * 100;
    
    return {
      newSalary,
      raiseAmount,
      realRaise,
      purchasingPowerChange,
      status: raise > currentInflationRate ? "gain" : raise === currentInflationRate ? "neutral" : "loss"
    };
  };

  const results = calculateRealImpact();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "gain": return "text-green-600";
      case "neutral": return "text-yellow-600";
      case "loss": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "gain": return <TrendingUp className="h-5 w-5 text-green-600" />;
      case "neutral": return <Minus className="h-5 w-5 text-yellow-600" />;
      case "loss": return <TrendingDown className="h-5 w-5 text-red-600" />;
      default: return null;
    }
  };

  return (
    <>
      <SEOHead
        title="Raise vs Inflation Analysis - Real Purchasing Power Calculator"
        description="Analyze how your pay raise compares to inflation. Calculate real purchasing power changes and understand the impact of inflation on salary increases."
        canonical="/raise-vs-inflation-analysis"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Raise vs Inflation Analysis
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Real Purchasing Power Calculator
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Current CPI: 3.1%</Badge>
                <Badge variant="outline">Real-Time Data</Badge>
                <Badge variant="outline">Purchasing Power</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Understand how your pay raise compares to inflation and whether you're gaining 
                or losing purchasing power in the current economic environment.
              </p>
            </div>
          </div>
        </section>

        {/* Current Inflation Impact */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">2025 Economic Context</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">3.1%</div>
                      <div className="text-sm text-gray-600">Current Inflation Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">4.2%</div>
                      <div className="text-sm text-gray-600">Average Raise This Year</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">+1.1%</div>
                      <div className="text-sm text-gray-600">Real Purchasing Power</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">
                  Inflation Impact Calculator
                </CardTitle>
                <p className="text-center text-gray-600">
                  Calculate how your raise compares to current inflation
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentSalary">Current Annual Salary</Label>
                      <Input
                        id="currentSalary"
                        type="number"
                        placeholder="e.g. 65000"
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="raisePercentage">Your Raise Percentage</Label>
                      <Input
                        id="raisePercentage"
                        type="number"
                        step="0.1"
                        placeholder="e.g. 4.5"
                        value={raisePercentage}
                        onChange={(e) => setRaisePercentage(e.target.value)}
                      />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Current Inflation Rate</div>
                      <div className="text-2xl font-bold text-primary">{currentInflationRate}%</div>
                      <div className="text-xs text-gray-500">Consumer Price Index (CPI)</div>
                    </div>
                  </div>
                  
                  {results && (
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        {getStatusIcon(results.status)}
                        <span className="ml-2">Inflation Impact Analysis</span>
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">New Salary:</span>
                          <span className="font-semibold">${results.newSalary.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Nominal Raise:</span>
                          <span className="font-semibold">{raisePercentage}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Real Raise:</span>
                          <span className={`font-semibold ${getStatusColor(results.status)}`}>
                            {results.realRaise > 0 ? '+' : ''}{results.realRaise.toFixed(1)}%
                          </span>
                        </div>
                        <div className="border-t border-gray-300 pt-2">
                          <div className="flex justify-between">
                            <span className="font-semibold">Purchasing Power:</span>
                            <span className={`font-semibold ${getStatusColor(results.status)}`}>
                              {results.purchasingPowerChange > 0 ? '+' : ''}{results.purchasingPowerChange.toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Inflation Scenarios */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Inflation Scenarios
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {inflationScenarios.map((scenario, index) => (
                <Card key={index} className={`calculator-shadow border-2 ${scenario.color}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {scenario.icon}
                      <span className="ml-2">{scenario.scenario}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium">Raise Range:</div>
                        <div className="text-lg font-bold">{scenario.raiseRange}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Description:</div>
                        <div className="text-sm">{scenario.description}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Impact:</div>
                        <div className="text-sm font-semibold">{scenario.impact}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Analysis */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Historical Raise vs Inflation Trends
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Year</th>
                        <th className="text-left py-2">Inflation Rate</th>
                        <th className="text-left py-2">Average Raise</th>
                        <th className="text-left py-2">Real Gain/Loss</th>
                        <th className="text-left py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {historicalData.map((data, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2 font-semibold">{data.year}</td>
                          <td className="py-2">{data.inflation}%</td>
                          <td className="py-2">{data.avgRaise}%</td>
                          <td className={`py-2 font-semibold ${
                            data.realGain > 0 ? 'text-green-600' : 
                            data.realGain === 0 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {data.realGain > 0 ? '+' : ''}{data.realGain}%
                          </td>
                          <td className="py-2">
                            {data.realGain > 0 ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : data.realGain === 0 ? (
                              <Minus className="h-4 w-4 text-yellow-600" />
                            ) : (
                              <AlertTriangle className="h-4 w-4 text-red-600" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> 2021-2022 saw negative real gains due to elevated inflation rates, 
                    while 2023-2025 show recovery with positive real wage growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategic Insights */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Strategic Insights for Salary Negotiations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Minimum Raise Targets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Maintain purchasing power:</span>
                      <span className="font-semibold">3.1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Modest real increase:</span>
                      <span className="font-semibold">4.0%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Strong real increase:</span>
                      <span className="font-semibold">5.0%+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-primary" />
                    Negotiation Leverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Use inflation data in discussions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Emphasize purchasing power maintenance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Reference historical context
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Present real vs nominal increases
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