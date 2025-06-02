import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo/head";
import { 
  TrendingUp, 
  MapPin, 
  Calculator, 
  DollarSign,
  Target,
  BarChart3,
  Home,
  ShoppingCart
} from "lucide-react";

export default function ColaCalculator() {
  const [currentSalary, setCurrentSalary] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [newLocation, setNewLocation] = useState<string>("");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Cost of Living Adjustment (COLA) Calculator",
    "description": "Calculate cost of living adjustments for salary changes when moving between locations or annual COLA increases.",
    "url": "https://payraisepercentagecalculator.com/tools/cola-calculator",
    "applicationCategory": "FinanceApplication"
  };

  const locationData = {
    "San Francisco, CA": { index: 100, housing: 100, transport: 100, food: 100 },
    "New York, NY": { index: 95, housing: 92, transport: 85, food: 98 },
    "Los Angeles, CA": { index: 88, housing: 85, transport: 90, food: 92 },
    "Seattle, WA": { index: 82, housing: 78, transport: 88, food: 85 },
    "Boston, MA": { index: 85, housing: 80, transport: 82, food: 88 },
    "Washington, DC": { index: 83, housing: 79, transport: 85, food: 86 },
    "Chicago, IL": { index: 75, housing: 68, transport: 78, food: 80 },
    "Denver, CO": { index: 72, housing: 65, transport: 75, food: 78 },
    "Austin, TX": { index: 68, housing: 60, transport: 72, food: 75 },
    "Atlanta, GA": { index: 65, housing: 58, transport: 70, food: 72 },
    "Phoenix, AZ": { index: 62, housing: 55, transport: 68, food: 70 },
    "Dallas, TX": { index: 60, housing: 52, transport: 65, food: 68 },
    "National Average": { index: 55, housing: 50, transport: 60, food: 65 }
  };

  const socialSecurityCOLA = {
    2024: 3.2,
    2025: 2.5, // Projected
    2026: 2.8, // Projected
    2027: 3.0  // Projected
  };

  const calculateCOLA = () => {
    const salary = parseFloat(currentSalary) || 0;
    
    if (salary === 0) return null;
    
    if (currentLocation && newLocation && currentLocation !== newLocation) {
      const currentCost = locationData[currentLocation as keyof typeof locationData];
      const newCost = locationData[newLocation as keyof typeof locationData];
      
      if (currentCost && newCost) {
        const adjustmentRatio = newCost.index / currentCost.index;
        const adjustedSalary = salary * adjustmentRatio;
        const colaAmount = adjustedSalary - salary;
        const colaPercentage = ((adjustedSalary - salary) / salary) * 100;
        
        return {
          type: "location",
          adjustedSalary,
          colaAmount,
          colaPercentage,
          currentCost,
          newCost,
          adjustmentRatio
        };
      }
    }
    
    // Annual COLA calculation
    const annualCOLA = socialSecurityCOLA[2025];
    const colaAmount = salary * (annualCOLA / 100);
    const adjustedSalary = salary + colaAmount;
    
    return {
      type: "annual",
      adjustedSalary,
      colaAmount,
      colaPercentage: annualCOLA,
      annualCOLA
    };
  };

  const results = calculateCOLA();

  return (
    <>
      <SEOHead
        title="COLA Calculator - Cost of Living Adjustment Calculator 2025"
        description="Calculate cost of living adjustments for salary changes when moving between locations or annual COLA increases. Compare real costs across major US cities."
        canonical="/tools/cola-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Cost of Living Adjustment Calculator
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Calculate salary adjustments for location changes and annual COLA increases
              </p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              How to Use the COLA Calculator
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Choose Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Select your current and new location to compare cost of living differences across major US cities.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Enter Salary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Input your current salary to see the required adjustment for maintaining purchasing power.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Review Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">See your adjusted salary requirement and breakdown by housing, transportation, and food costs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    COLA Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="current-salary">Current Annual Salary</Label>
                    <Input
                      id="current-salary"
                      type="number"
                      placeholder="60000"
                      value={currentSalary}
                      onChange={(e) => setCurrentSalary(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="current-location">Current Location</Label>
                    <Select value={currentLocation} onValueChange={setCurrentLocation}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select current location" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(locationData).map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="new-location">New Location (Optional)</Label>
                    <Select value={newLocation} onValueChange={setNewLocation}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select new location for comparison" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(locationData).map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">2025 Social Security COLA</h4>
                    <p className="text-sm text-blue-700">
                      The projected Social Security Cost of Living Adjustment for 2025 is 2.5%, 
                      reflecting current economic conditions and inflation trends.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              {results && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      COLA Analysis Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          ${results.adjustedSalary.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-700">Adjusted Salary</div>
                      </div>
                      
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {results.colaPercentage > 0 ? '+' : ''}{results.colaPercentage.toFixed(1)}%
                        </div>
                        <div className="text-sm text-blue-700">COLA Adjustment</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Salary:</span>
                        <span className="font-medium">${parseFloat(currentSalary || '0').toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">COLA Amount:</span>
                        <span className="font-medium text-green-600">
                          ${Math.abs(results.colaAmount).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Impact:</span>
                        <span className="font-medium">
                          ${(results.colaAmount / 12).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {results.type === 'location' && results.currentCost && results.newCost && (
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Cost Comparison</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Overall Cost Index:</span>
                            <span className="text-sm">{results.currentCost.index} → {results.newCost.index}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Housing Costs:</span>
                            <span className="text-sm">{results.currentCost.housing} → {results.newCost.housing}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Transportation:</span>
                            <span className="text-sm">{results.currentCost.transport} → {results.newCost.transport}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Understanding Cost of Living Adjustments</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location-Based COLA</h3>
                <p className="text-gray-600 mb-4">
                  When relocating for work, your salary should adjust to maintain the same standard of living. 
                  This calculator compares cost indices across major US cities for housing, transportation, and food.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Housing typically represents 60-70% of cost differences</li>
                  <li>• Transportation costs vary significantly by city infrastructure</li>
                  <li>• Food costs are generally more stable across locations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Annual COLA Increases</h3>
                <p className="text-gray-600 mb-4">
                  Many employers provide annual cost of living adjustments based on inflation rates. 
                  These help maintain purchasing power as prices rise over time.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Based on Consumer Price Index (CPI) data</li>
                  <li>• Typically range from 2-4% annually</li>
                  <li>• May be automatic or require negotiation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );

  const costCategories = [
    {
      category: "Housing",
      description: "Rent, mortgage, property taxes, utilities",
      impact: "40-50% of total cost difference",
      icon: <Home className="h-5 w-5" />
    },
    {
      category: "Transportation",
      description: "Gas, public transit, car insurance, parking",
      impact: "15-20% of total cost difference",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      category: "Food & Groceries",
      description: "Restaurants, groceries, dining costs",
      impact: "10-15% of total cost difference",
      icon: <ShoppingCart className="h-5 w-5" />
    },
    {
      category: "Healthcare",
      description: "Insurance premiums, medical costs",
      impact: "8-12% of total cost difference",
      icon: <Target className="h-5 w-5" />
    }
  ];

  return (
    <>
      <SEOHead
        title="COLA Calculator 2025: Cost of Living Adjustment Analysis | Free Tool"
        description="Calculate cost of living adjustments for salary changes when moving between locations or annual COLA increases. Compare 13 major cities with detailed breakdowns."
        canonical="/tools/cola-calculator"
        keywords="COLA calculator, cost of living adjustment, salary adjustment, city comparison, relocation salary, geographic pay difference"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 text-teal-800 border border-teal-200">
                  <MapPin className="w-4 h-4 mr-2" />
                  Geographic Salary Analysis
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                COLA Calculator
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Calculate cost of living adjustments for relocations and annual increases. 
                Compare salaries across major cities and understand geographic pay differences.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use Guide */}
        <section className="py-12 bg-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Calculate COLA Adjustments: Complete Guide
              </h2>
              <p className="text-lg text-gray-600">
                Understand cost of living differences and salary adjustments
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Enter Current Info</h3>
                <p className="text-gray-600 text-sm">
                  Input your current salary and select your current location from 
                  our database of major cities.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Choose New Location</h3>
                <p className="text-gray-600 text-sm">
                  Select your target city or leave blank for annual COLA 
                  calculations based on Social Security rates.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">View Adjustment</h3>
                <p className="text-gray-600 text-sm">
                  See your required salary adjustment with detailed breakdown 
                  by housing, transport, and living costs.
                </p>
              </div>
            </div>

            {/* COLA Types Guide */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Understanding COLA Types</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Geographic COLA</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Housing:</strong> 40-50% of cost difference (rent, utilities, property taxes)</li>
                    <li>• <strong>Transportation:</strong> 15-20% (gas, transit, parking, insurance)</li>
                    <li>• <strong>Food & Groceries:</strong> 10-15% (restaurants, groceries, dining)</li>
                    <li>• <strong>Healthcare:</strong> 8-12% (insurance, medical costs)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Annual COLA</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>2025 Rate:</strong> 2.5% projected (Social Security basis)</li>
                    <li>• <strong>2024 Rate:</strong> 3.2% actual adjustment</li>
                    <li>• <strong>Federal Employees:</strong> Often matches Social Security COLA</li>
                    <li>• <strong>Private Sector:</strong> Varies by company policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Location Analysis</Badge>
                <Badge variant="outline">2025 COLA: 2.5%</Badge>
                <Badge variant="outline">Salary Planning</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Calculate salary adjustments needed for relocations or understand annual 
                cost of living increases for maintaining purchasing power.
              </p>
            </div>
          </div>
        </section>

        {/* Current COLA Info */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">2025 COLA Information</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">2.5%</div>
                      <div className="text-sm text-gray-600">Social Security COLA 2025</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">3.1%</div>
                      <div className="text-sm text-gray-600">Current Inflation Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">4.2%</div>
                      <div className="text-sm text-gray-600">Average Salary Increase</div>
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
                  Cost of Living Adjustment Calculator
                </CardTitle>
                <p className="text-center text-gray-600">
                  Calculate salary adjustments for location changes or annual COLA
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
                        placeholder="e.g. 80000"
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentLocation">Current Location (Optional)</Label>
                      <Select value={currentLocation} onValueChange={setCurrentLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select current location" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(locationData).map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="newLocation">New Location (Optional)</Label>
                      <Select value={newLocation} onValueChange={setNewLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select new location" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(locationData).map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-800">
                        <strong>Note:</strong> Leave locations blank to calculate annual COLA based on 
                        2025 Social Security adjustment of 2.5%.
                      </div>
                    </div>
                  </div>
                  
                  {results && (
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                        COLA Analysis Results
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Current Salary:</span>
                          <span className="font-semibold">${parseFloat(currentSalary).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">COLA Adjustment:</span>
                          <span className="font-semibold text-green-600">
                            {results.colaPercentage > 0 ? '+' : ''}{results.colaPercentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">COLA Amount:</span>
                          <span className="font-semibold text-green-600">
                            ${Math.abs(results.colaAmount).toFixed(0).toLocaleString()}
                          </span>
                        </div>
                        <div className="border-t border-gray-300 pt-2">
                          <div className="flex justify-between">
                            <span className="font-semibold">Adjusted Salary:</span>
                            <span className="font-semibold text-primary">
                              ${results.adjustedSalary.toFixed(0).toLocaleString()}
                            </span>
                          </div>
                        </div>
                        {results.type === "location" && results.adjustmentRatio && (
                          <div className="text-xs text-gray-600 mt-2">
                            Cost index ratio: {results.adjustmentRatio.toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cost Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cost of Living Factors
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {costCategories.map((category, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">Includes:</span>
                        <p className="text-sm text-gray-700">{category.description}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Typical Impact:</span>
                        <Badge variant="outline" className="ml-2">{category.impact}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Historical COLA Data */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Historical COLA Adjustments
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Social Security COLA History</h3>
                    <div className="space-y-2">
                      {Object.entries(socialSecurityCOLA).map(([year, rate]) => (
                        <div key={year} className="flex justify-between">
                          <span className="text-sm text-gray-600">{year}:</span>
                          <span className="font-medium">{rate}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">COLA Calculation Factors</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Consumer Price Index (CPI) changes</li>
                      <li>• Regional cost variations</li>
                      <li>• Housing market trends</li>
                      <li>• Transportation costs</li>
                      <li>• Healthcare expense changes</li>
                      <li>• Federal poverty guidelines</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategic Planning */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">COLA Planning Strategy</h2>
                <p className="text-gray-600 mb-6">
                  Understanding cost of living adjustments helps in salary negotiations, 
                  relocation decisions, and long-term financial planning.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold text-primary">Relocation Planning</div>
                    <div className="text-gray-600">Calculate salary needs for moves</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Annual Reviews</div>
                    <div className="text-gray-600">Request COLA-based increases</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Budget Planning</div>
                    <div className="text-gray-600">Anticipate cost changes</div>
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