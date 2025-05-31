import { useState } from "react";
import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { PayRaiseCalculator } from "@/lib/calculator";
import { MapPin, DollarSign, TrendingUp, Info } from "lucide-react";

const STATE_TAX_DATA = {
  "Alabama": { stateTax: 5.0, cola: 92.4 },
  "Alaska": { stateTax: 0.0, cola: 127.8 },
  "Arizona": { stateTax: 4.5, cola: 102.1 },
  "Arkansas": { stateTax: 6.5, cola: 89.6 },
  "California": { stateTax: 13.3, cola: 151.7 },
  "Colorado": { stateTax: 4.4, cola: 104.1 },
  "Connecticut": { stateTax: 6.99, cola: 129.8 },
  "Delaware": { stateTax: 6.6, cola: 109.9 },
  "Florida": { stateTax: 0.0, cola: 101.9 },
  "Georgia": { stateTax: 5.75, cola: 91.4 },
  "Hawaii": { stateTax: 11.0, cola: 184.9 },
  "Idaho": { stateTax: 6.0, cola: 94.3 },
  "Illinois": { stateTax: 4.95, cola: 95.1 },
  "Indiana": { stateTax: 3.23, cola: 87.9 },
  "Iowa": { stateTax: 8.53, cola: 88.9 },
  "Kansas": { stateTax: 5.7, cola: 86.4 },
  "Kentucky": { stateTax: 5.0, cola: 88.8 },
  "Louisiana": { stateTax: 4.25, cola: 94.1 },
  "Maine": { stateTax: 7.15, cola: 113.0 },
  "Maryland": { stateTax: 5.75, cola: 129.7 },
  "Massachusetts": { stateTax: 5.0, cola: 148.7 },
  "Michigan": { stateTax: 4.25, cola: 89.6 },
  "Minnesota": { stateTax: 9.85, cola: 101.1 },
  "Mississippi": { stateTax: 5.0, cola: 84.8 },
  "Missouri": { stateTax: 5.4, cola: 87.1 },
  "Montana": { stateTax: 6.9, cola: 103.4 },
  "Nebraska": { stateTax: 6.84, cola: 90.1 },
  "Nevada": { stateTax: 0.0, cola: 104.5 },
  "New Hampshire": { stateTax: 0.0, cola: 106.4 },
  "New Jersey": { stateTax: 10.75, cola: 125.1 },
  "New Mexico": { stateTax: 5.9, cola: 91.0 },
  "New York": { stateTax: 10.9, cola: 139.1 },
  "North Carolina": { stateTax: 4.99, cola: 94.2 },
  "North Dakota": { stateTax: 2.9, cola: 98.9 },
  "Ohio": { stateTax: 3.99, cola: 89.1 },
  "Oklahoma": { stateTax: 5.0, cola: 87.9 },
  "Oregon": { stateTax: 9.9, cola: 134.2 },
  "Pennsylvania": { stateTax: 3.07, cola: 96.1 },
  "Rhode Island": { stateTax: 5.99, cola: 119.4 },
  "South Carolina": { stateTax: 7.0, cola: 95.9 },
  "South Dakota": { stateTax: 0.0, cola: 92.5 },
  "Tennessee": { stateTax: 0.0, cola: 89.4 },
  "Texas": { stateTax: 0.0, cola: 93.9 },
  "Utah": { stateTax: 4.95, cola: 103.4 },
  "Vermont": { stateTax: 8.75, cola: 116.9 },
  "Virginia": { stateTax: 5.75, cola: 103.0 },
  "Washington": { stateTax: 0.0, cola: 113.6 },
  "West Virginia": { stateTax: 6.5, cola: 90.5 },
  "Wisconsin": { stateTax: 7.65, cola: 96.9 },
  "Wyoming": { stateTax: 0.0, cola: 92.3 }
};

export default function StateWiseRaiseCalculator() {
  const [currentSalary, setCurrentSalary] = useState("");
  const [raiseValue, setRaiseValue] = useState("");
  const [raiseType, setRaiseType] = useState<"percentage" | "amount">("percentage");
  const [selectedState, setSelectedState] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculateRaise = () => {
    if (!currentSalary || !raiseValue || !selectedState) return;

    const stateData = STATE_TAX_DATA[selectedState as keyof typeof STATE_TAX_DATA];
    const effectiveTaxRate = 22 + stateData.stateTax; // Federal + State

    const calculation = PayRaiseCalculator.calculate({
      currentSalary: parseFloat(currentSalary),
      raiseType,
      raiseValue: parseFloat(raiseValue),
      payPeriod: "annual",
      includeTaxes: true,
      taxRate: effectiveTaxRate,
      location: selectedState
    });

    setResult({
      ...calculation,
      stateData,
      effectiveTaxRate,
      colaAdjustedSalary: calculation.newSalary * (stateData.cola / 100),
      colaAdjustedIncrease: calculation.raiseAmount * (stateData.cola / 100)
    });
  };

  const structuredData = SchemaGenerator.calculator({
    name: "State-Wise Raise Calculator",
    description: "Calculate pay raise impact based on your U.S. state tax brackets and cost of living adjustments",
    url: "https://payraisepercentagecalculator.com/tools/state-wise-raise-calculator"
  });

  return (
    <>
      <SEOHead
        title="State-Wise Raise Calculator - Tax & Cost of Living Impact by State"
        description="Calculate how your pay raise varies by state considering state taxes and cost of living. Get accurate net raise calculations for all 50 U.S. states."
        canonical="https://payraisepercentagecalculator.com/tools/state-wise-raise-calculator"
        keywords="state raise calculator, state tax impact, cost of living raise, state salary calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <Badge className="bg-white text-blue-700">State Analysis</Badge>
              <Badge variant="outline" className="border-white text-white">Tax Impact</Badge>
              <Badge variant="outline" className="border-white text-white">COLA Adjusted</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              State-Wise Raise Calculator
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See how your raise impact varies by state, factoring in state taxes and cost of living differences across all 50 U.S. states.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Enter Your Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Annual Salary
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="number"
                        placeholder="75000"
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Raise Type
                    </label>
                    <Select value={raiseType} onValueChange={(value: "percentage" | "amount") => setRaiseType(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage (%)</SelectItem>
                        <SelectItem value="amount">Dollar Amount ($)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Raise Value
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        {raiseType === "percentage" ? "%" : "$"}
                      </span>
                      <Input
                        type="number"
                        placeholder={raiseType === "percentage" ? "5.0" : "5000"}
                        value={raiseValue}
                        onChange={(e) => setRaiseValue(e.target.value)}
                        className="pl-8"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select State
                    </label>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your state" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {Object.keys(STATE_TAX_DATA).map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={calculateRaise}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={!currentSalary || !raiseValue || !selectedState}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Calculate State Impact
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              {result && (
                <Card className="calculator-shadow bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-800">
                      Results for {selectedState}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">
                          {PayRaiseCalculator.formatCurrency(result.newSalary)}
                        </div>
                        <div className="text-sm text-gray-600">New Salary</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {PayRaiseCalculator.formatCurrency(result.raiseAmount)}
                        </div>
                        <div className="text-sm text-gray-600">Gross Increase</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Federal + State Tax Rate:</span>
                        <span className="font-medium">{result.effectiveTaxRate.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Net Raise (After Taxes):</span>
                        <span className="font-medium text-green-600">
                          {PayRaiseCalculator.formatCurrency(result.netIncrease)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cost of Living Index:</span>
                        <span className="font-medium">{result.stateData.cola}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">COLA-Adjusted Value:</span>
                        <span className="font-medium text-blue-600">
                          {PayRaiseCalculator.formatCurrency(result.colaAdjustedIncrease)}
                        </span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-800">
                          <strong>State Impact:</strong> In {selectedState}, your effective tax rate is {result.effectiveTaxRate.toFixed(1)}% 
                          and the cost of living is {result.stateData.cola > 100 ? 'higher' : 'lower'} than the national average.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* State Comparison Table */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              State Tax & Cost of Living Quick Reference
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                  {Object.entries(STATE_TAX_DATA).map(([state, data]) => (
                    <div key={state} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                      <span className="font-medium text-sm">{state}</span>
                      <div className="text-right text-sm">
                        <div className="text-gray-600">{data.stateTax}% tax</div>
                        <div className="text-blue-600">{data.cola} COLA</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Understanding State-Level Impact
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tax Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• States like TX, FL, WA have no state income tax</li>
                    <li>• CA, NY, NJ have the highest state tax rates</li>
                    <li>• Your total tax burden affects net raise value</li>
                    <li>• Consider both federal and state brackets</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cost of Living Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Housing costs vary dramatically by state</li>
                    <li>• Transportation and utilities differ significantly</li>
                    <li>• Same salary has different purchasing power</li>
                    <li>• Consider COLA when evaluating offers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Related Tools & Resources
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <InternalLink href="/tools/pay-raise-tax-impact-calculator" className="text-blue-600 hover:text-blue-700 text-sm">
                  Tax Impact Calculator →
                </InternalLink>
                <InternalLink href="/tools/cola-calculator" className="text-blue-600 hover:text-blue-700 text-sm">
                  COLA Calculator →
                </InternalLink>
                <InternalLink href="/guides/understanding-pay-raises-complete" className="text-blue-600 hover:text-blue-700 text-sm">
                  Understanding Raises →
                </InternalLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}