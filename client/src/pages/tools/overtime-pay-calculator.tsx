import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo/head";
import {
  Clock,
  Calculator,
  DollarSign,
  Calendar,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  BookOpen
} from "lucide-react";
import { BreadcrumbNavigation } from "@/components/seo/breadcrumb-navigation";

export default function OvertimePayCalculator() {
  const [hourlyRate, setHourlyRate] = useState<string>("");
  const [regularHours, setRegularHours] = useState<string>("40");
  const [overtimeHours, setOvertimeHours] = useState<string>("");
  const [overtimeRate, setOvertimeRate] = useState<string>("1.5");
  const [payPeriod, setPayPeriod] = useState<string>("weekly");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "Calculator"],
    "name": "Overtime Pay Calculator 2025 - FLSA Compliant",
    "description": "Calculate overtime pay with federal and state regulations. Includes time-and-a-half, double-time calculations, and FLSA compliance analysis for accurate payroll.",
    "url": "https://payraisepercentagecalculator.com/tools/overtime-pay-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "FLSA compliant overtime calculations",
      "State-specific overtime rules",
      "Time-and-a-half calculations",
      "Double-time pay scenarios",
      "Effective hourly rate analysis"
    ]
  };

  const calculateOvertime = () => {
    const rate = parseFloat(hourlyRate) || 0;
    const regular = parseFloat(regularHours) || 40;
    const overtime = parseFloat(overtimeHours) || 0;
    const multiplier = parseFloat(overtimeRate) || 1.5;

    if (rate === 0) return null;

    const regularPay = regular * rate;
    const overtimePay = overtime * rate * multiplier;
    const totalPay = regularPay + overtimePay;
    const totalHours = regular + overtime;
    const effectiveHourlyRate = totalPay / totalHours;

    const periodMultiplier = payPeriod === "weekly" ? 1 : payPeriod === "biweekly" ? 2 : 4;
    const periodicTotalPay = totalPay * periodMultiplier;
    const periodicOvertimePay = overtimePay * periodMultiplier;

    return {
      regularPay,
      overtimePay,
      totalPay,
      totalHours,
      effectiveHourlyRate,
      periodicTotalPay,
      periodicOvertimePay,
      overtimePercentage: (overtimePay / totalPay) * 100
    };
  };

  const results = calculateOvertime();

  const overtimeRules = [
    {
      rule: "Federal Standard (FLSA)",
      threshold: "40 hours/week",
      rate: "1.5x regular rate",
      coverage: "Most non-exempt employees"
    },
    {
      rule: "California Daily OT",
      threshold: "8 hours/day",
      rate: "1.5x for 8-12 hrs, 2x for 12+ hrs",
      coverage: "California employees"
    },
    {
      rule: "Double Time",
      threshold: "Varies by state",
      rate: "2x regular rate",
      coverage: "Extended hours/holidays"
    },
    {
      rule: "Seventh Day",
      threshold: "7th consecutive day",
      rate: "1.5x or 2x depending on hours",
      coverage: "Some states require"
    }
  ];

  const scenarios = [
    {
      scenario: "Standard Overtime",
      hours: "45 hours/week",
      calculation: "40 reg + 5 OT @ 1.5x",
      example: "$20/hr × 40 + $30/hr × 5 = $950"
    },
    {
      scenario: "California Daily OT",
      hours: "10 hours/day",
      calculation: "8 reg + 2 OT @ 1.5x daily",
      example: "$20/hr × 8 + $30/hr × 2 = $220/day"
    },
    {
      scenario: "Double Time",
      hours: "60 hours/week",
      calculation: "40 reg + 20 OT @ various rates",
      example: "Complex calculation varies by state"
    }
  ];

  return (
    <>
      <SEOHead
        title="Overtime Pay Calculator - Calculate Time-and-a-Half & Double-Time"
        description="Calculate overtime pay based on federal and state regulations. Includes time-and-a-half, double-time, and various overtime scenarios."
        canonical="/tools/overtime-pay-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Overtime Pay Calculator
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Calculate Time-and-a-Half & Double-Time Pay
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">FLSA Compliant</Badge>
                <Badge variant="outline">State Regulations</Badge>
                <Badge variant="outline">Multiple Scenarios</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Calculate overtime pay based on federal and state regulations.
                Understand your rights and ensure proper compensation for extra hours worked.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <BreadcrumbNavigation
            items={[
              { name: "Tools", url: "/tools" },
              { name: "Overtime Calculator", url: "/tools/overtime-pay-calculator" }
            ]}
          />
        </div>

        {/* Step-by-Step Guide */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              How to Calculate Overtime Pay
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Hourly Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Enter your regular hourly wage. If you have a salary, convert it to hourly first.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Hours Worked</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Input your regular hours (usually 40) and the number of overtime hours worked.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Multiplier</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Select 1.5x for standard overtime or 2.0x for double time/holidays.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Overtime Rules Overview */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Federal Overtime Standard</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">40</div>
                      <div className="text-sm text-gray-600">Hours per week threshold</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">1.5x</div>
                      <div className="text-sm text-gray-600">Time-and-a-half rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">FLSA</div>
                      <div className="text-sm text-gray-600">Federal law protection</div>
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
                  Overtime Pay Calculator
                </CardTitle>
                <p className="text-center text-gray-600">
                  Calculate your overtime pay based on hours worked and rates
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="hourlyRate">Regular Hourly Rate ($)</Label>
                      <Input
                        id="hourlyRate"
                        type="number"
                        step="0.01"
                        placeholder="e.g. 20.00"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="regularHours">Regular Hours Worked</Label>
                      <Input
                        id="regularHours"
                        type="number"
                        placeholder="e.g. 40"
                        value={regularHours}
                        onChange={(e) => setRegularHours(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="overtimeHours">Overtime Hours Worked</Label>
                      <Input
                        id="overtimeHours"
                        type="number"
                        placeholder="e.g. 5"
                        value={overtimeHours}
                        onChange={(e) => setOvertimeHours(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="overtimeRate">Overtime Multiplier</Label>
                      <Select value={overtimeRate} onValueChange={setOvertimeRate}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1.5">1.5x (Time-and-a-half)</SelectItem>
                          <SelectItem value="2.0">2.0x (Double-time)</SelectItem>
                          <SelectItem value="1.0">1.0x (Regular rate)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="payPeriod">Pay Period</Label>
                      <Select value={payPeriod} onValueChange={setPayPeriod}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="biweekly">Bi-weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {results && (
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="mr-2 h-5 w-5 text-green-600" />
                        Overtime Pay Breakdown
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Regular Pay:</span>
                          <span className="font-semibold">${results.regularPay.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Overtime Pay:</span>
                          <span className="font-semibold text-green-600">${results.overtimePay.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Total Hours:</span>
                          <span className="font-semibold">{results.totalHours}</span>
                        </div>
                        <div className="border-t border-gray-300 pt-2">
                          <div className="flex justify-between">
                            <span className="font-semibold">Total Pay:</span>
                            <span className="font-bold text-primary">${results.totalPay.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Effective Rate:</span>
                            <span className="font-semibold">${results.effectiveHourlyRate.toFixed(2)}/hr</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">OT Percentage:</span>
                            <span className="font-semibold">{results.overtimePercentage.toFixed(1)}%</span>
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

        {/* Overtime Rules */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Overtime Pay Rules and Regulations
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {overtimeRules.map((rule, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{rule.rule}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Threshold:</span>
                        <div className="text-sm text-gray-600">{rule.threshold}</div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Rate:</span>
                        <div className="text-sm text-gray-600">{rule.rate}</div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Coverage:</span>
                        <div className="text-sm text-gray-600">{rule.coverage}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Calculation Scenarios */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Overtime Scenarios
            </h2>

            <div className="space-y-6">
              {scenarios.map((scenario, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      {scenario.scenario}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Hours Worked:</div>
                        <div className="text-sm text-gray-600">{scenario.hours}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Calculation Method:</div>
                        <div className="text-sm text-gray-600">{scenario.calculation}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Example:</div>
                        <div className="text-sm text-gray-600 font-mono">{scenario.example}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Employee Rights */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your Overtime Rights
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                    You Have the Right To
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Overtime pay for hours over 40/week (most jobs)</li>
                    <li>• Accurate record-keeping of hours worked</li>
                    <li>• File complaints without retaliation</li>
                    <li>• Receive back pay for unpaid overtime</li>
                    <li>• Clear explanation of pay calculations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-yellow-600" />
                    Common Violations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Not paying overtime for hours over 40</li>
                    <li>• Misclassifying employees as exempt</li>
                    <li>• Averaging hours across pay periods</li>
                    <li>• Requiring off-the-clock work</li>
                    <li>• Retaliating for overtime complaints</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Know Your Overtime Rights</h2>
                <p className="text-gray-600 mb-6">
                  Understanding overtime pay protects your earnings and ensures fair compensation
                  for the extra hours you work. Use this calculator to verify your pay.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold text-primary">Keep Records</div>
                    <div className="text-gray-600">Track all hours worked</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Know the Law</div>
                    <div className="text-gray-600">Understand FLSA protections</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Report Violations</div>
                    <div className="text-gray-600">Contact Department of Labor</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}