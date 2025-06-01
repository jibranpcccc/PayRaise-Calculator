import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PayRaiseCalculator, type CalculationInput, type CalculationResult } from "@/lib/calculator";
import { CalculatorResults } from "./calculator-results";
import { Edit, TrendingUp, Calculator, Info } from "lucide-react";

export function PayRaiseCalculatorComponent() {
  const [input, setInput] = useState<CalculationInput>({
    currentSalary: 60000,
    raiseType: 'percentage',
    raiseValue: 5,
    payPeriod: 'annual',
    hoursPerWeek: 40,
    includeInflation: false,
    includeTaxes: false,
    taxRate: 22,
    location: '',
    industry: ''
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    calculateRaise();
  }, [input]);

  const calculateRaise = () => {
    try {
      setErrors({});
      
      // Validation
      if (input.currentSalary <= 0) {
        setErrors(prev => ({ ...prev, currentSalary: 'Current salary must be greater than 0' }));
        return;
      }
      
      if (input.raiseValue <= 0) {
        setErrors(prev => ({ ...prev, raiseValue: 'Raise value must be greater than 0' }));
        return;
      }

      if (input.raiseType === 'percentage' && input.raiseValue > 100) {
        setErrors(prev => ({ ...prev, raiseValue: 'Percentage raise cannot exceed 100%' }));
        return;
      }

      const calculatedResult = PayRaiseCalculator.calculate(input);
      setResult(calculatedResult);
    } catch (error) {
      console.error('Calculation error:', error);
      setErrors({ general: 'An error occurred during calculation' });
    }
  };

  const updateInput = (field: keyof CalculationInput, value: any) => {
    setInput(prev => ({ ...prev, [field]: value }));
  };

  const formatInputValue = (value: number, field: string) => {
    if (field === 'currentSalary' || field === 'raiseValue') {
      return value.toLocaleString();
    }
    return value.toString();
  };

  const parseInputValue = (value: string) => {
    return parseFloat(value.replace(/[^\d.]/g, '')) || 0;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="calculator-shadow fade-in mobile-optimized">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center text-mobile-readable">
            <Edit className="mr-2 h-5 w-5 text-primary" />
            Enter Your Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="calculator-mobile">
            {/* Input Section */}
            <div className="space-y-6">
              {/* Current Salary */}
              <div>
                <Label htmlFor="currentSalary" className="text-sm font-medium text-gray-700">
                  Current Salary
                </Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <Input
                    id="currentSalary"
                    type="text"
                    className="pl-8 pr-4 py-3"
                    placeholder="60,000"
                    value={formatInputValue(input.currentSalary, 'currentSalary')}
                    onChange={(e) => updateInput('currentSalary', parseInputValue(e.target.value))}
                  />
                </div>
                {errors.currentSalary && (
                  <p className="text-sm text-red-600 mt-1">{errors.currentSalary}</p>
                )}
              </div>

              {/* Pay Period */}
              <div>
                <Label className="text-sm font-medium text-gray-700">Pay Period</Label>
                <Select value={input.payPeriod} onValueChange={(value) => updateInput('payPeriod', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">Annual</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Hours per week (for hourly) */}
              {input.payPeriod === 'hourly' && (
                <div>
                  <Label htmlFor="hoursPerWeek" className="text-sm font-medium text-gray-700">
                    Hours Per Week
                  </Label>
                  <Input
                    id="hoursPerWeek"
                    type="number"
                    className="mt-2"
                    value={input.hoursPerWeek}
                    onChange={(e) => updateInput('hoursPerWeek', parseInt(e.target.value) || 40)}
                  />
                </div>
              )}

              {/* Raise Type Tabs */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Raise Type</Label>
                <Tabs value={input.raiseType} onValueChange={(value) => updateInput('raiseType', value)}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="percentage">Percentage</TabsTrigger>
                    <TabsTrigger value="amount">Flat Amount</TabsTrigger>
                    <TabsTrigger value="target">Target Salary</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="percentage" className="mt-4">
                    <div className="relative">
                      <Input
                        type="text"
                        className="pr-8"
                        placeholder="5"
                        value={input.raiseValue}
                        onChange={(e) => updateInput('raiseValue', parseFloat(e.target.value) || 0)}
                      />
                      <span className="absolute right-3 top-3 text-gray-500">%</span>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="amount" className="mt-4">
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <Input
                        type="text"
                        className="pl-8"
                        placeholder="3,000"
                        value={formatInputValue(input.raiseValue, 'raiseValue')}
                        onChange={(e) => updateInput('raiseValue', parseInputValue(e.target.value))}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="target" className="mt-4">
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <Input
                        type="text"
                        className="pl-8"
                        placeholder="63,000"
                        value={formatInputValue(input.raiseValue, 'raiseValue')}
                        onChange={(e) => updateInput('raiseValue', parseInputValue(e.target.value))}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
                {errors.raiseValue && (
                  <p className="text-sm text-red-600 mt-1">{errors.raiseValue}</p>
                )}
              </div>

              {/* Advanced Options */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Advanced Features</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="includeInflation"
                      checked={input.includeInflation}
                      onCheckedChange={(checked) => updateInput('includeInflation', checked)}
                    />
                    <Label htmlFor="includeInflation" className="text-sm text-gray-700">
                      Adjust for inflation (3.1% CPI)
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="includeTaxes"
                      checked={input.includeTaxes}
                      onCheckedChange={(checked) => updateInput('includeTaxes', checked)}
                    />
                    <Label htmlFor="includeTaxes" className="text-sm text-gray-700">
                      Show tax impact
                    </Label>
                  </div>

                  {input.includeTaxes && (
                    <div className="ml-6">
                      <Label htmlFor="taxRate" className="text-sm font-medium text-gray-700">
                        Tax Rate (%)
                      </Label>
                      <Input
                        id="taxRate"
                        type="number"
                        className="mt-1 w-24"
                        value={input.taxRate}
                        onChange={(e) => updateInput('taxRate', parseFloat(e.target.value) || 22)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-success" />
                Your Results
              </h3>
              
              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-600">{errors.general}</p>
                </div>
              )}
              
              {result && <CalculatorResults result={result} input={input} />}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Formula Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-semibold">
            <Calculator className="mr-2 h-5 w-5 text-primary" />
            Pay Raise Calculation Formulas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Percentage Raise Formula</h4>
                <div className="font-mono text-sm bg-white p-3 rounded border">
                  New Salary = Current Salary × (1 + Raise % ÷ 100)
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  Example: $60,000 × (1 + 5 ÷ 100) = $63,000
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Dollar Amount Raise</h4>
                <div className="font-mono text-sm bg-white p-3 rounded border">
                  New Salary = Current Salary + Raise Amount
                </div>
                <p className="text-sm text-green-700 mt-2">
                  Example: $60,000 + $3,000 = $63,000
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Target Salary Calculation</h4>
                <div className="font-mono text-sm bg-white p-3 rounded border">
                  Raise Amount = Target Salary - Current Salary
                </div>
                <p className="text-sm text-purple-700 mt-2">
                  Example: $63,000 - $60,000 = $3,000 raise
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Inflation-Adjusted Raise</h4>
                <div className="font-mono text-sm bg-white p-3 rounded border">
                  Real Raise = Nominal Raise - Inflation Rate
                </div>
                <p className="text-sm text-orange-700 mt-2">
                  Example: 5% raise - 3.1% inflation = 1.9% real increase
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">After-Tax Impact</h4>
                <div className="font-mono text-sm bg-white p-3 rounded border">
                  Net Increase = Raise Amount × (1 - Tax Rate)
                </div>
                <p className="text-sm text-red-700 mt-2">
                  Example: $3,000 × (1 - 0.22) = $2,340 net increase
                </p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-2">Hourly Rate Conversion</h4>
                <div className="font-mono text-sm bg-white p-3 rounded border">
                  Hourly Rate = Annual Salary ÷ (Hours/Week × 52)
                </div>
                <p className="text-sm text-indigo-700 mt-2">
                  Example: $63,000 ÷ (40 × 52) = $30.29/hour
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start space-x-2">
              <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-gray-900 mb-1">How to Use These Formulas</h5>
                <p className="text-sm text-gray-600">
                  These formulas help you understand exactly how your pay raise is calculated. Use the percentage formula 
                  for typical annual reviews, the dollar amount for negotiating specific increases, and always consider 
                  inflation and taxes for realistic planning. Our calculator applies these formulas automatically based 
                  on your inputs above.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
