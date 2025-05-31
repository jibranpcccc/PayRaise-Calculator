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
  TrendingUp,
  Target,
  ArrowRight
} from "lucide-react";

export default function HourlyToSalaryConverter() {
  const [hourlyRate, setHourlyRate] = useState<string>("");
  const [hoursPerWeek, setHoursPerWeek] = useState<string>("40");
  const [weeksPerYear, setWeeksPerYear] = useState<string>("52");
  const [salaryAmount, setSalaryAmount] = useState<string>("");
  const [conversionType, setConversionType] = useState<string>("hourly-to-salary");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Hourly to Salary Converter",
    "description": "Convert between hourly and salary compensation. Calculate annual, monthly, weekly wages with customizable work schedules.",
    "url": "https://payraisepercentagecalculator.com/tools/hourly-to-salary-converter",
    "applicationCategory": "FinanceApplication"
  };

  const calculateConversion = () => {
    const hours = parseFloat(hoursPerWeek) || 40;
    const weeks = parseFloat(weeksPerYear) || 52;
    
    if (conversionType === "hourly-to-salary") {
      const rate = parseFloat(hourlyRate) || 0;
      if (rate === 0) return null;
      
      const annualSalary = rate * hours * weeks;
      const monthlySalary = annualSalary / 12;
      const weeklySalary = rate * hours;
      const biweeklySalary = weeklySalary * 2;
      
      return {
        type: "hourly-to-salary",
        hourlyRate: rate,
        annualSalary,
        monthlySalary,
        weeklySalary,
        biweeklySalary,
        totalHours: hours * weeks
      };
    } else {
      const salary = parseFloat(salaryAmount) || 0;
      if (salary === 0) return null;
      
      const equivalentHourly = salary / (hours * weeks);
      const monthlyAmount = salary / 12;
      const weeklyAmount = salary / weeks;
      const biweeklyAmount = weeklyAmount * 2;
      
      return {
        type: "salary-to-hourly",
        annualSalary: salary,
        equivalentHourly,
        monthlyAmount,
        weeklyAmount,
        biweeklyAmount,
        totalHours: hours * weeks
      };
    }
  };

  const results = calculateConversion();

  const workScheduleOptions = [
    { hours: 40, description: "Full-time standard", weeks: 52 },
    { hours: 35, description: "Full-time reduced", weeks: 52 },
    { hours: 30, description: "Part-time", weeks: 52 },
    { hours: 20, description: "Part-time", weeks: 52 },
    { hours: 40, description: "Contract (50 weeks)", weeks: 50 },
    { hours: 40, description: "With 2 weeks vacation", weeks: 50 }
  ];

  const benefitsComparison = [
    {
      aspect: "Health Insurance",
      hourly: "Often not provided or limited",
      salary: "Comprehensive coverage typically included"
    },
    {
      aspect: "Paid Time Off",
      hourly: "Limited or unpaid time off",
      salary: "Vacation, sick days, holidays included"
    },
    {
      aspect: "Retirement Benefits",
      hourly: "401(k) may not be available",
      salary: "401(k) with company matching common"
    },
    {
      aspect: "Job Security",
      hourly: "Variable hours, less security",
      salary: "More stable, predictable income"
    },
    {
      aspect: "Overtime Pay",
      hourly: "Time-and-a-half for 40+ hours",
      salary: "Exempt positions don't get overtime"
    }
  ];

  return (
    <>
      <SEOHead
        title="Hourly to Salary Converter - Wage Calculation Tool"
        description="Convert between hourly and salary compensation. Calculate annual, monthly, weekly wages with customizable work schedules and compare benefits."
        canonical="/tools/hourly-to-salary-converter"
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
                Hourly to Salary Converter
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Professional Wage Calculation Tool
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Bidirectional Converter</Badge>
                <Badge variant="outline">Custom Schedules</Badge>
                <Badge variant="outline">Benefits Analysis</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Convert between hourly wages and annual salaries with customizable work schedules. 
                Compare compensation structures and understand total employment value.
              </p>
            </div>
          </div>
        </section>

        {/* Converter */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">
                  Hourly ↔ Salary Converter
                </CardTitle>
                <div className="flex justify-center mt-4">
                  <Select value={conversionType} onValueChange={setConversionType}>
                    <SelectTrigger className="w-64">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly-to-salary">Hourly → Salary</SelectItem>
                      <SelectItem value="salary-to-hourly">Salary → Hourly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {conversionType === "hourly-to-salary" ? (
                      <div>
                        <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                        <Input
                          id="hourlyRate"
                          type="number"
                          step="0.01"
                          placeholder="e.g. 25.00"
                          value={hourlyRate}
                          onChange={(e) => setHourlyRate(e.target.value)}
                        />
                      </div>
                    ) : (
                      <div>
                        <Label htmlFor="salaryAmount">Annual Salary ($)</Label>
                        <Input
                          id="salaryAmount"
                          type="number"
                          placeholder="e.g. 65000"
                          value={salaryAmount}
                          onChange={(e) => setSalaryAmount(e.target.value)}
                        />
                      </div>
                    )}
                    
                    <div>
                      <Label htmlFor="hoursPerWeek">Hours per Week</Label>
                      <Input
                        id="hoursPerWeek"
                        type="number"
                        placeholder="e.g. 40"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="weeksPerYear">Weeks per Year</Label>
                      <Input
                        id="weeksPerYear"
                        type="number"
                        placeholder="e.g. 52"
                        value={weeksPerYear}
                        onChange={(e) => setWeeksPerYear(e.target.value)}
                      />
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-800">
                        <strong>Total Work Hours:</strong> {((parseFloat(hoursPerWeek) || 40) * (parseFloat(weeksPerYear) || 52)).toLocaleString()} hours/year
                      </div>
                    </div>
                  </div>
                  
                  {results && (
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Calculator className="mr-2 h-5 w-5 text-primary" />
                        Conversion Results
                      </h3>
                      <div className="space-y-3">
                        {results.type === "hourly-to-salary" ? (
                          <>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Hourly Rate:</span>
                              <span className="font-semibold">${results.hourlyRate.toFixed(2)}/hour</span>
                            </div>
                            <div className="border-t border-gray-300 pt-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Annual Salary:</span>
                                <span className="font-semibold text-primary">${results.annualSalary.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Monthly:</span>
                                <span className="font-semibold">${results.monthlySalary.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Bi-weekly:</span>
                                <span className="font-semibold">${results.biweeklySalary.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Weekly:</span>
                                <span className="font-semibold">${results.weeklySalary.toLocaleString()}</span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Annual Salary:</span>
                              <span className="font-semibold">${results.annualSalary.toLocaleString()}</span>
                            </div>
                            <div className="border-t border-gray-300 pt-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Equivalent Hourly:</span>
                                <span className="font-semibold text-primary">${results.equivalentHourly.toFixed(2)}/hour</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Monthly:</span>
                                <span className="font-semibold">${results.monthlyAmount.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Bi-weekly:</span>
                                <span className="font-semibold">${results.biweeklyAmount.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Weekly:</span>
                                <span className="font-semibold">${results.weeklyAmount.toLocaleString()}</span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Schedule Templates */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Work Schedule Templates
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {workScheduleOptions.map((schedule, index) => (
                <Card key={index} className="calculator-shadow hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => {
                        setHoursPerWeek(schedule.hours.toString());
                        setWeeksPerYear(schedule.weeks.toString());
                      }}>
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{schedule.description}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>{schedule.hours} hours/week</div>
                      <div>{schedule.weeks} weeks/year</div>
                      <div className="font-medium text-primary">
                        {(schedule.hours * schedule.weeks).toLocaleString()} total hours
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Comparison */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Hourly vs Salary: Beyond the Numbers
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Benefit Category</th>
                        <th className="text-left py-3">Hourly Positions</th>
                        <th className="text-left py-3">Salary Positions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {benefitsComparison.map((benefit, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 font-medium">{benefit.aspect}</td>
                          <td className="py-3 text-sm text-gray-600">{benefit.hourly}</td>
                          <td className="py-3 text-sm text-gray-600">{benefit.salary}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategic Considerations */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Making the Right Choice
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-primary" />
                    Choose Hourly When
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• You want overtime pay opportunities</li>
                    <li>• Flexible scheduling is important</li>
                    <li>• You prefer work-life boundaries</li>
                    <li>• Learning new skills in entry-level roles</li>
                    <li>• Seasonal or project-based work</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    Choose Salary When
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• You want predictable income</li>
                    <li>• Benefits package is important</li>
                    <li>• Career advancement opportunities</li>
                    <li>• Management or leadership roles</li>
                    <li>• Long-term financial planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Conversion Tips */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conversion Best Practices</h2>
                <p className="text-gray-600 mb-6">
                  When converting between hourly and salary positions, consider total compensation 
                  including benefits, work-life balance, and career growth opportunities.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold text-primary">Factor in Benefits</div>
                    <div className="text-gray-600">Add 20-30% for benefit value</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Consider Overtime</div>
                    <div className="text-gray-600">Calculate potential extra earnings</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Long-term Growth</div>
                    <div className="text-gray-600">Evaluate advancement potential</div>
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