import { useState } from "react";
import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { PayRaiseCalculator } from "@/lib/calculator";
import { DollarSign, TrendingUp, Gift, PieChart, Plus } from "lucide-react";

interface CompensationData {
  baseSalary: number;
  annualBonus: number;
  signOnBonus: number;
  stockOptions: number;
  healthInsurance: number;
  dentalVision: number;
  retirement401k: number;
  retirementMatch: number;
  lifeInsurance: number;
  disabilityInsurance: number;
  paidTimeOff: number;
  professionalDevelopment: number;
  phoneInternet: number;
  gymMembership: number;
  otherBenefits: number;
}

export default function SalaryVsTotalCompensationCalculator() {
  const [compensation, setCompensation] = useState<CompensationData>({
    baseSalary: 0,
    annualBonus: 0,
    signOnBonus: 0,
    stockOptions: 0,
    healthInsurance: 0,
    dentalVision: 0,
    retirement401k: 0,
    retirementMatch: 0,
    lifeInsurance: 0,
    disabilityInsurance: 0,
    paidTimeOff: 0,
    professionalDevelopment: 0,
    phoneInternet: 0,
    gymMembership: 0,
    otherBenefits: 0
  });
  const [result, setResult] = useState<any>(null);

  const updateCompensation = (key: keyof CompensationData, value: string) => {
    setCompensation(prev => ({
      ...prev,
      [key]: parseFloat(value) || 0
    }));
  };

  const calculateTotalCompensation = () => {
    if (!compensation.baseSalary) return;

    const directCash = compensation.baseSalary + compensation.annualBonus + (compensation.signOnBonus / 4); // Amortize sign-on over 4 years
    const equityValue = compensation.stockOptions;
    const employerBenefits = compensation.healthInsurance + compensation.dentalVision + 
                            compensation.retirementMatch + compensation.lifeInsurance + 
                            compensation.disabilityInsurance;
    const additionalPerks = compensation.paidTimeOff + compensation.professionalDevelopment + 
                           compensation.phoneInternet + compensation.gymMembership + 
                           compensation.otherBenefits;
    
    const totalCompensation = directCash + equityValue + employerBenefits + additionalPerks;
    const compensationPremium = totalCompensation - compensation.baseSalary;
    const premiumPercentage = (compensationPremium / compensation.baseSalary) * 100;

    setResult({
      baseSalary: compensation.baseSalary,
      directCash,
      equityValue,
      employerBenefits,
      additionalPerks,
      totalCompensation,
      compensationPremium,
      premiumPercentage,
      breakdown: {
        cashPercentage: (directCash / totalCompensation) * 100,
        equityPercentage: (equityValue / totalCompensation) * 100,
        benefitsPercentage: (employerBenefits / totalCompensation) * 100,
        perksPercentage: (additionalPerks / totalCompensation) * 100
      }
    });
  };

  const structuredData = SchemaGenerator.calculator({
    name: "Salary vs Total Compensation Calculator",
    description: "Compare base salary to total compensation including bonuses, benefits, equity, and perks",
    url: "https://payraisepercentagecalculator.com/tools/salary-vs-total-compensation-calculator"
  });

  return (
    <>
      <SEOHead
        title="Salary vs Total Compensation Calculator - True Earnings Analysis"
        description="Calculate your total compensation package including salary, bonuses, benefits, equity, and perks. Understand your complete earnings beyond base salary."
        canonical="https://payraisepercentagecalculator.com/tools/salary-vs-total-compensation-calculator"
        keywords="total compensation calculator, salary vs benefits, equity compensation, total earnings"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <Badge className="bg-white text-blue-700">Total Package</Badge>
              <Badge variant="outline" className="border-white text-white">Beyond Salary</Badge>
              <Badge variant="outline" className="border-white text-white">Complete Picture</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Salary vs Total Compensation Calculator
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover your true earnings by calculating the complete value of your compensation package including bonuses, benefits, equity, and perks.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <div className="space-y-6">
                {/* Base Compensation */}
                <Card className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                      Base Compensation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Base Salary
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="75000"
                          value={compensation.baseSalary || ""}
                          onChange={(e) => updateCompensation("baseSalary", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Bonus (Target)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="7500"
                          value={compensation.annualBonus || ""}
                          onChange={(e) => updateCompensation("annualBonus", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sign-On Bonus (One-Time)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="10000"
                          value={compensation.signOnBonus || ""}
                          onChange={(e) => updateCompensation("signOnBonus", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Equity & Stock */}
                <Card className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      Equity Compensation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Stock/Equity Value
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="15000"
                          value={compensation.stockOptions || ""}
                          onChange={(e) => updateCompensation("stockOptions", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Include RSUs, stock options, ESPP, profit sharing
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gift className="h-5 w-5 text-purple-600" />
                      Employer-Paid Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Health Insurance (Employer Portion)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="8000"
                          value={compensation.healthInsurance || ""}
                          onChange={(e) => updateCompensation("healthInsurance", e.target.value)}
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
                          placeholder="1200"
                          value={compensation.dentalVision || ""}
                          onChange={(e) => updateCompensation("dentalVision", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        401(k) Employer Match
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="3750"
                          value={compensation.retirementMatch || ""}
                          onChange={(e) => updateCompensation("retirementMatch", e.target.value)}
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
                          value={compensation.lifeInsurance || ""}
                          onChange={(e) => updateCompensation("lifeInsurance", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Disability Insurance
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="500"
                          value={compensation.disabilityInsurance || ""}
                          onChange={(e) => updateCompensation("disabilityInsurance", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Perks */}
                <Card className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="h-5 w-5 text-orange-600" />
                      Additional Perks & Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Paid Time Off Value
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="5000"
                          value={compensation.paidTimeOff || ""}
                          onChange={(e) => updateCompensation("paidTimeOff", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Calculate as (daily rate × PTO days)
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Professional Development
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="2000"
                          value={compensation.professionalDevelopment || ""}
                          onChange={(e) => updateCompensation("professionalDevelopment", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone/Internet Stipend
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="1200"
                          value={compensation.phoneInternet || ""}
                          onChange={(e) => updateCompensation("phoneInternet", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gym/Wellness Benefits
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="600"
                          value={compensation.gymMembership || ""}
                          onChange={(e) => updateCompensation("gymMembership", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Benefits
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="1000"
                          value={compensation.otherBenefits || ""}
                          onChange={(e) => updateCompensation("otherBenefits", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <Button 
                      onClick={calculateTotalCompensation}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={!compensation.baseSalary}
                    >
                      <PieChart className="h-4 w-4 mr-2" />
                      Calculate Total Compensation
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Results */}
              {result && (
                <Card className="calculator-shadow bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-800">
                      Total Compensation Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {PayRaiseCalculator.formatCurrency(result.totalCompensation)}
                      </div>
                      <div className="text-lg text-gray-600">Total Annual Compensation</div>
                      <div className="text-sm text-gray-500 mt-2">
                        {result.premiumPercentage.toFixed(1)}% more than base salary
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="text-gray-700">Base Salary</span>
                        <span className="font-medium">
                          {PayRaiseCalculator.formatCurrency(result.baseSalary)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-700">Direct Cash Compensation</span>
                        <span className="font-medium">
                          {PayRaiseCalculator.formatCurrency(result.directCash)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-green-700">Equity Value</span>
                        <span className="font-medium">
                          {PayRaiseCalculator.formatCurrency(result.equityValue)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span className="text-purple-700">Employer Benefits</span>
                        <span className="font-medium">
                          {PayRaiseCalculator.formatCurrency(result.employerBenefits)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <span className="text-orange-700">Additional Perks</span>
                        <span className="font-medium">
                          {PayRaiseCalculator.formatCurrency(result.additionalPerks)}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Compensation Breakdown</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Cash Compensation:</span>
                          <span className="font-medium">{result.breakdown.cashPercentage.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Equity & Stock:</span>
                          <span className="font-medium">{result.breakdown.equityPercentage.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Benefits & Insurance:</span>
                          <span className="font-medium">{result.breakdown.benefitsPercentage.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Perks & Extras:</span>
                          <span className="font-medium">{result.breakdown.perksPercentage.toFixed(1)}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">Key Insights</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Your total compensation is {PayRaiseCalculator.formatCurrency(result.compensationPremium)} above base salary</li>
                        <li>• Benefits and perks add {result.premiumPercentage.toFixed(1)}% to your earnings</li>
                        <li>• Consider this when comparing job offers</li>
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
              Why Total Compensation Matters
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Beyond Base Salary</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Benefits can add 20-40% to total value</li>
                    <li>• Equity compensation grows with company success</li>
                    <li>• Tax advantages of employer-paid benefits</li>
                    <li>• Hidden value in PTO and flexible benefits</li>
                    <li>• Professional development as career investment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Comparing Job Offers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Don't just compare salaries</li>
                    <li>• Factor in all components of compensation</li>
                    <li>• Consider vesting schedules for equity</li>
                    <li>• Evaluate benefit quality and coverage</li>
                    <li>• Account for location and cost of living</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Related Tools & Resources
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <InternalLink href="/tools/bonus-impact-calculator" className="text-blue-600 hover:text-blue-700 text-sm">
                  Bonus Impact Calculator →
                </InternalLink>
                <InternalLink href="/tools/raise-after-deductions-calculator" className="text-blue-600 hover:text-blue-700 text-sm">
                  Deductions Calculator →
                </InternalLink>
                <InternalLink href="/guides/understanding-pay-raises-complete" className="text-blue-600 hover:text-blue-700 text-sm">
                  Understanding Total Compensation →
                </InternalLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}