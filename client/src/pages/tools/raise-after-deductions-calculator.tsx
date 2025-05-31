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
import { DollarSign, TrendingUp, Minus, PiggyBank } from "lucide-react";

interface Deductions {
  retirement401k: number;
  healthInsurance: number;
  dentalVision: number;
  lifeInsurance: number;
  hsaFsa: number;
  parkingTransit: number;
  otherDeductions: number;
}

export default function RaiseAfterDeductionsCalculator() {
  const [currentSalary, setCurrentSalary] = useState("");
  const [raiseValue, setRaiseValue] = useState("");
  const [raiseType, setRaiseType] = useState<"percentage" | "amount">("percentage");
  const [deductions, setDeductions] = useState<Deductions>({
    retirement401k: 0,
    healthInsurance: 0,
    dentalVision: 0,
    lifeInsurance: 0,
    hsaFsa: 0,
    parkingTransit: 0,
    otherDeductions: 0
  });
  const [result, setResult] = useState<any>(null);

  const updateDeduction = (key: keyof Deductions, value: string) => {
    setDeductions(prev => ({
      ...prev,
      [key]: parseFloat(value) || 0
    }));
  };

  const calculateRaise = () => {
    if (!currentSalary || !raiseValue) return;

    const totalDeductions = Object.values(deductions).reduce((sum, val) => sum + val, 0);
    
    const calculation = PayRaiseCalculator.calculate({
      currentSalary: parseFloat(currentSalary),
      raiseType,
      raiseValue: parseFloat(raiseValue),
      payPeriod: "annual",
      includeTaxes: true,
      taxRate: 22
    });

    const currentNetPay = parseFloat(currentSalary) - totalDeductions;
    const newNetPay = calculation.newSalary - totalDeductions;
    const netRaiseIncrease = newNetPay - currentNetPay;

    setResult({
      ...calculation,
      totalDeductions,
      currentNetPay,
      newNetPay,
      netRaiseIncrease,
      deductionPercentage: (totalDeductions / calculation.newSalary) * 100,
      effectiveRaisePercentage: (netRaiseIncrease / currentNetPay) * 100
    });
  };

  const structuredData = SchemaGenerator.calculator({
    name: "Raise After Deductions Calculator",
    description: "Calculate your actual take-home pay raise after deducting 401k, insurance, and other pre-tax deductions",
    url: "https://payraisepercentagecalculator.com/tools/raise-after-deductions-calculator"
  });

  return (
    <>
      <SEOHead
        title="Raise After Deductions Calculator - Net Take-Home Pay Increase"
        description="Calculate your real pay raise after 401k, health insurance, and other deductions. See your actual take-home pay increase with accurate deduction calculations."
        canonical="https://payraisepercentagecalculator.com/tools/raise-after-deductions-calculator"
        keywords="raise after deductions, net pay calculator, take home pay raise, 401k deduction impact"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <Badge className="bg-white text-blue-700">Net Pay Focus</Badge>
              <Badge variant="outline" className="border-white text-white">Deduction Analysis</Badge>
              <Badge variant="outline" className="border-white text-white">Take-Home Truth</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Raise After Deductions Calculator
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See your real pay increase after accounting for 401k contributions, insurance premiums, and other pre-tax deductions.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <div className="space-y-6">
                {/* Salary & Raise Info */}
                <Card className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                      Salary Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                  </CardContent>
                </Card>

                {/* Deductions */}
                <Card className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Minus className="h-5 w-5 text-red-600" />
                      Annual Deductions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        401(k) Contributions
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="6000"
                          value={deductions.retirement401k || ""}
                          onChange={(e) => updateDeduction("retirement401k", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Health Insurance Premium
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="3600"
                          value={deductions.healthInsurance || ""}
                          onChange={(e) => updateDeduction("healthInsurance", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dental & Vision Insurance
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="600"
                          value={deductions.dentalVision || ""}
                          onChange={(e) => updateDeduction("dentalVision", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Life Insurance Premium
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="300"
                          value={deductions.lifeInsurance || ""}
                          onChange={(e) => updateDeduction("lifeInsurance", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        HSA/FSA Contributions
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="2000"
                          value={deductions.hsaFsa || ""}
                          onChange={(e) => updateDeduction("hsaFsa", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parking/Transit Benefits
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="1200"
                          value={deductions.parkingTransit || ""}
                          onChange={(e) => updateDeduction("parkingTransit", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Pre-Tax Deductions
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="500"
                          value={deductions.otherDeductions || ""}
                          onChange={(e) => updateDeduction("otherDeductions", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <Button 
                      onClick={calculateRaise}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={!currentSalary || !raiseValue}
                    >
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Calculate Net Raise
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Results */}
              {result && (
                <Card className="calculator-shadow bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <PiggyBank className="h-5 w-5" />
                      Your Net Raise Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">
                          {PayRaiseCalculator.formatCurrency(result.newSalary)}
                        </div>
                        <div className="text-sm text-gray-600">New Gross Salary</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {PayRaiseCalculator.formatCurrency(result.raiseAmount)}
                        </div>
                        <div className="text-sm text-gray-600">Gross Raise</div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Deduction Breakdown</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Annual Deductions:</span>
                          <span className="font-medium text-red-600">
                            -{PayRaiseCalculator.formatCurrency(result.totalDeductions)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Deduction Percentage:</span>
                          <span className="font-medium">{result.deductionPercentage.toFixed(1)}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-3">Net Pay Analysis</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-blue-700">Current Net Pay:</span>
                          <span className="font-medium">
                            {PayRaiseCalculator.formatCurrency(result.currentNetPay)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-700">New Net Pay:</span>
                          <span className="font-medium">
                            {PayRaiseCalculator.formatCurrency(result.newNetPay)}
                          </span>
                        </div>
                        <div className="flex justify-between border-t border-blue-200 pt-2">
                          <span className="text-blue-700 font-medium">Net Raise Increase:</span>
                          <span className="font-bold text-green-600">
                            {PayRaiseCalculator.formatCurrency(result.netRaiseIncrease)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-700">Effective Raise %:</span>
                          <span className="font-medium">
                            {result.effectiveRaisePercentage.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">Key Insights</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Your net raise is {PayRaiseCalculator.formatCurrency(result.netRaiseIncrease)} after deductions</li>
                        <li>• Deductions reduce your take-home by {result.deductionPercentage.toFixed(1)}%</li>
                        <li>• Your effective raise percentage is {result.effectiveRaisePercentage.toFixed(2)}%</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Understanding Pre-Tax Deductions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Benefits of Pre-Tax Deductions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Reduce your taxable income</li>
                    <li>• Lower your overall tax burden</li>
                    <li>• Build retirement savings automatically</li>
                    <li>• Access tax-advantaged health savings</li>
                    <li>• Employer matching opportunities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Common Deduction Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Retirement:</strong> 401(k), 403(b), TSP contributions</li>
                    <li>• <strong>Insurance:</strong> Health, dental, vision, life, disability</li>
                    <li>• <strong>Health Accounts:</strong> HSA, FSA, dependent care</li>
                    <li>• <strong>Transportation:</strong> Parking, transit passes</li>
                    <li>• <strong>Other:</strong> Union dues, professional memberships</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Related Calculators & Resources
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <InternalLink href="/tools/pay-raise-tax-impact-calculator" className="text-blue-600 hover:text-blue-700 text-sm">
                  Tax Impact Calculator →
                </InternalLink>
                <InternalLink href="/tools/salary-negotiation-calculator" className="text-blue-600 hover:text-blue-700 text-sm">
                  Negotiation Calculator →
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