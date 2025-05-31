import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo/head";
import { 
  TrendingUp, 
  Gift, 
  Calculator, 
  DollarSign,
  Target,
  BarChart3,
  PieChart,
  Calendar,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

export default function RaiseVsBonusCalculator() {
  const [currentSalary, setCurrentSalary] = useState<string>("");
  const [raisePercentage, setRaisePercentage] = useState<string>("");
  const [bonusAmount, setBonusAmount] = useState<string>("");
  const [timeframe, setTimeframe] = useState<string>("5");
  const [taxRate, setTaxRate] = useState<string>("25");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Raise vs Bonus Calculator",
    "description": "Compare the long-term financial impact of salary raises versus one-time bonuses. Calculate compound growth and total value over time.",
    "url": "https://payraisepercentagecalculator.com/tools/raise-vs-bonus-calculator",
    "applicationCategory": "FinanceApplication"
  };

  const calculateComparison = () => {
    const salary = parseFloat(currentSalary) || 0;
    const raise = parseFloat(raisePercentage) || 0;
    const bonus = parseFloat(bonusAmount) || 0;
    const years = parseFloat(timeframe) || 5;
    const tax = parseFloat(taxRate) || 25;
    
    if (salary === 0 || (raise === 0 && bonus === 0)) return null;
    
    // Raise scenario calculations
    const newSalary = salary * (1 + raise / 100);
    const annualRaiseAmount = newSalary - salary;
    let raiseCumulativeValue = 0;
    let raiseYearlyBreakdown = [];
    
    for (let year = 1; year <= years; year++) {
      const yearSalary = salary * Math.pow(1 + raise / 100, year);
      const yearIncrease = yearSalary - salary;
      raiseCumulativeValue += yearIncrease;
      raiseYearlyBreakdown.push({
        year,
        salary: yearSalary,
        annualIncrease: yearIncrease,
        cumulativeIncrease: raiseCumulativeValue
      });
    }
    
    // Bonus scenario calculations
    const bonusTax = bonus * (tax / 100);
    const netBonus = bonus - bonusTax;
    const bonusInvestmentReturn = 0.07; // 7% annual return assumption
    let bonusInvestedValue = netBonus;
    let bonusYearlyBreakdown = [];
    
    for (let year = 1; year <= years; year++) {
      bonusInvestedValue *= (1 + bonusInvestmentReturn);
      bonusYearlyBreakdown.push({
        year,
        investedValue: bonusInvestedValue,
        totalGrowth: bonusInvestedValue - netBonus
      });
    }
    
    const finalBonusValue = bonusInvestedValue;
    const finalRaiseValue = raiseCumulativeValue;
    const advantage = finalRaiseValue > finalBonusValue ? "raise" : "bonus";
    const advantageAmount = Math.abs(finalRaiseValue - finalBonusValue);
    
    return {
      raise: {
        annualAmount: annualRaiseAmount,
        cumulativeValue: raiseCumulativeValue,
        finalValue: finalRaiseValue,
        breakdown: raiseYearlyBreakdown
      },
      bonus: {
        grossAmount: bonus,
        netAmount: netBonus,
        taxAmount: bonusTax,
        finalValue: finalBonusValue,
        breakdown: bonusYearlyBreakdown
      },
      comparison: {
        advantage,
        advantageAmount,
        raiseWins: finalRaiseValue > finalBonusValue,
        breakEvenYear: null
      }
    };
  };

  const results = calculateComparison();

  const scenarios = [
    {
      scenario: "Short-term Cash Needs",
      raiseAdvantage: "Lower immediate impact",
      bonusAdvantage: "Immediate lump sum available",
      recommendation: "Consider bonus if you need cash now"
    },
    {
      scenario: "Long-term Wealth Building",
      raiseAdvantage: "Compounds annually, permanent increase",
      bonusAdvantage: "Can be invested for growth",
      recommendation: "Raises typically win over 3+ years"
    },
    {
      scenario: "Career Advancement",
      raiseAdvantage: "Increases base for future raises",
      bonusAdvantage: "No impact on future base salary",
      recommendation: "Raises build long-term earning power"
    },
    {
      scenario: "Job Security",
      raiseAdvantage: "Permanent increase, harder to remove",
      bonusAdvantage: "One-time payment, easily eliminated",
      recommendation: "Raises provide more security"
    }
  ];

  return (
    <>
      <SEOHead
        title="Raise vs Bonus Calculator - Long-Term Value Comparison"
        description="Compare the long-term financial impact of salary raises versus one-time bonuses. Calculate compound growth and total value over time."
        canonical="/tools/raise-vs-bonus-calculator"
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
                Raise vs Bonus Calculator
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Long-Term Value Comparison Tool
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Compound Analysis</Badge>
                <Badge variant="outline">Investment Comparison</Badge>
                <Badge variant="outline">Strategic Planning</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Compare the long-term financial impact of salary raises versus one-time bonuses. 
                Understand which option builds more wealth over time.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">
                  Raise vs Bonus Comparison
                </CardTitle>
                <p className="text-center text-gray-600">
                  Compare long-term value of salary increases versus bonus payments
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
                        placeholder="e.g. 70000"
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="raisePercentage">Potential Raise (%)</Label>
                      <Input
                        id="raisePercentage"
                        type="number"
                        step="0.1"
                        placeholder="e.g. 5.0"
                        value={raisePercentage}
                        onChange={(e) => setRaisePercentage(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="bonusAmount">Alternative Bonus ($)</Label>
                      <Input
                        id="bonusAmount"
                        type="number"
                        placeholder="e.g. 8000"
                        value={bonusAmount}
                        onChange={(e) => setBonusAmount(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="timeframe">Analysis Timeframe (Years)</Label>
                      <Select value={timeframe} onValueChange={setTimeframe}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Year</SelectItem>
                          <SelectItem value="3">3 Years</SelectItem>
                          <SelectItem value="5">5 Years</SelectItem>
                          <SelectItem value="10">10 Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="taxRate">Tax Rate (%)</Label>
                      <Input
                        id="taxRate"
                        type="number"
                        placeholder="e.g. 25"
                        value={taxRate}
                        onChange={(e) => setTaxRate(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {results && (
                    <div className="space-y-4">
                      {/* Raise Results */}
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                          Salary Raise Impact
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Annual Increase:</span>
                            <span className="font-semibold">${results.raise.annualAmount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{timeframe}-Year Total:</span>
                            <span className="font-semibold text-blue-600">${results.raise.finalValue.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bonus Results */}
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Gift className="mr-2 h-5 w-5 text-green-600" />
                          Bonus + Investment
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Net Bonus (after tax):</span>
                            <span className="font-semibold">${results.bonus.netAmount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{timeframe}-Year Value (7% return):</span>
                            <span className="font-semibold text-green-600">${results.bonus.finalValue.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Winner */}
                      <div className={`p-4 rounded-lg border-2 ${
                        results.comparison.raiseWins 
                          ? 'bg-blue-50 border-blue-300' 
                          : 'bg-green-50 border-green-300'
                      }`}>
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Target className="mr-2 h-5 w-5" />
                          Better Choice: {results.comparison.advantage === 'raise' ? 'Salary Raise' : 'Bonus + Investment'}
                        </h3>
                        <div className="text-sm">
                          <span className="font-medium">Advantage: </span>
                          ${results.comparison.advantageAmount.toLocaleString()} more value
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Scenario Analysis */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Scenario-Based Analysis
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {scenarios.map((scenario, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{scenario.scenario}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <TrendingUp className="mr-2 h-4 w-4 text-blue-600" />
                          Raise Advantage
                        </h4>
                        <p className="text-sm text-gray-600">{scenario.raiseAdvantage}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Gift className="mr-2 h-4 w-4 text-green-600" />
                          Bonus Advantage
                        </h4>
                        <p className="text-sm text-gray-600">{scenario.bonusAdvantage}</p>
                      </div>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                        <p className="text-sm text-yellow-800">
                          <strong>Recommendation:</strong> {scenario.recommendation}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Considerations */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Factors to Consider
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                    Raise Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Permanent increase to base salary</li>
                    <li>• Compounds with future raises</li>
                    <li>• Affects overtime calculations</li>
                    <li>• Impacts benefits based on salary</li>
                    <li>• Builds long-term earning power</li>
                    <li>• More predictable income stream</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-yellow-600" />
                    Bonus Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Immediate lump sum available</li>
                    <li>• Higher tax rate (supplemental wages)</li>
                    <li>• No guarantee of future bonuses</li>
                    <li>• Requires disciplined investing</li>
                    <li>• Investment returns not guaranteed</li>
                    <li>• No impact on base salary progression</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment Assumptions */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Investment Assumptions & Methodology
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Calculation Methodology</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Bonus investment assumes 7% annual return</li>
                      <li>• Tax rate applied to bonus (supplemental wages)</li>
                      <li>• Raises compound annually</li>
                      <li>• No additional investment of raise amounts</li>
                      <li>• Does not account for inflation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Important Disclaimers</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Investment returns are not guaranteed</li>
                      <li>• Tax rates may vary by situation</li>
                      <li>• Results depend on personal financial discipline</li>
                      <li>• Consider your complete financial picture</li>
                      <li>• Consult financial advisor for personalized advice</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategic Recommendations */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Decision Framework</h2>
                <p className="text-gray-600 mb-6">
                  The choice between raises and bonuses depends on your financial goals, career stage, 
                  and personal circumstances. Consider both immediate needs and long-term wealth building.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold text-primary">Short-term Focus</div>
                    <div className="text-gray-600">Bonus for immediate cash needs</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Long-term Growth</div>
                    <div className="text-gray-600">Raise for sustained wealth building</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Hybrid Approach</div>
                    <div className="text-gray-600">Negotiate combination deals</div>
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