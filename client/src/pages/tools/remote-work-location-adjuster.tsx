import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo/head";
import { Calculator, MapPin, TrendingUp, DollarSign, Building2, Home } from "lucide-react";

export default function RemoteWorkLocationAdjuster() {
  const [currentSalary, setCurrentSalary] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [newLocation, setNewLocation] = useState<string>("");
  const [workArrangement, setWorkArrangement] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "Calculator"],
    "name": "Remote Work Location Salary Adjuster 2025",
    "description": "Calculate salary adjustments for remote work and location changes. Get precise compensation recommendations based on cost of living and work arrangements.",
    "url": "https://payraisepercentagecalculator.com/tools/remote-work-location-adjuster",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Cost of living salary adjustments",
      "Remote work compensation analysis",
      "Hybrid work arrangement calculations",
      "Geographic salary comparisons"
    ]
  };

  const locations = [
    { value: "san-francisco", label: "San Francisco, CA", adjustment: 1.0 },
    { value: "new-york", label: "New York, NY", adjustment: 0.95 },
    { value: "seattle", label: "Seattle, WA", adjustment: 0.88 },
    { value: "austin", label: "Austin, TX", adjustment: 0.75 },
    { value: "denver", label: "Denver, CO", adjustment: 0.72 },
    { value: "atlanta", label: "Atlanta, GA", adjustment: 0.68 },
    { value: "phoenix", label: "Phoenix, AZ", adjustment: 0.65 },
    { value: "dallas", label: "Dallas, TX", adjustment: 0.70 },
    { value: "miami", label: "Miami, FL", adjustment: 0.73 },
    { value: "chicago", label: "Chicago, IL", adjustment: 0.78 }
  ];

  const workArrangements = [
    { value: "full-remote", label: "Full Remote", adjustment: 0.85 },
    { value: "hybrid", label: "Hybrid (2-3 days office)", adjustment: 0.95 },
    { value: "office-based", label: "Full Office", adjustment: 1.0 }
  ];

  const calculateAdjustment = () => {
    if (!currentSalary || !currentLocation || !newLocation || !workArrangement) return;
    
    const salary = parseFloat(currentSalary);
    const currentLoc = locations.find(l => l.value === currentLocation);
    const newLoc = locations.find(l => l.value === newLocation);
    const workAdj = workArrangements.find(w => w.value === workArrangement);
    
    if (!currentLoc || !newLoc || !workAdj) return;
    
    // Calculate location adjustment
    const locationRatio = newLoc.adjustment / currentLoc.adjustment;
    const workAdjustment = workAdj.adjustment;
    
    const adjustedSalary = salary * locationRatio * workAdjustment;
    const salaryDifference = adjustedSalary - salary;
    const percentageChange = ((adjustedSalary - salary) / salary) * 100;
    
    setResult({
      originalSalary: salary,
      adjustedSalary,
      salaryDifference,
      percentageChange,
      currentLocation: currentLoc.label,
      newLocation: newLoc.label,
      workArrangement: workAdj.label,
      locationRatio,
      workAdjustment
    });
  };

  const costCategories = [
    {
      category: "Housing Costs",
      description: "Rent, mortgage, property taxes vary significantly by location",
      impact: "40-60% of salary adjustment",
      icon: <Home className="h-5 w-5" />
    },
    {
      category: "Transportation",
      description: "Commuting costs, parking, public transit fees",
      impact: "10-20% of total difference",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      category: "State Income Tax",
      description: "State tax rates range from 0% to 13.3%",
      impact: "5-15% of salary impact",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      category: "Cost of Living",
      description: "Food, utilities, services pricing variations",
      impact: "15-25% of adjustment",
      icon: <Building2 className="h-5 w-5" />
    }
  ];



  return (
    <>
      <SEOHead
        title="Remote Work Location Salary Adjuster 2025 - Calculate Compensation Changes"
        description="Calculate salary adjustments for remote work and relocation. Analyze cost of living differences, work arrangements, and geographic compensation impacts."
        canonical="/tools/remote-work-location-adjuster"
        keywords="remote work salary calculator, location salary adjustment, cost of living calculator, work from home pay, relocation salary"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-3 rounded-full">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Remote Work Location Adjuster
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate salary adjustments for remote work arrangements and location changes. 
              Understand how cost of living and work flexibility affect compensation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator */}
            <div className="lg:col-span-2">
              <Card className="calculator-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Location & Work Arrangement Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="current-salary">Current Annual Salary</Label>
                      <Input
                        id="current-salary"
                        type="number"
                        placeholder="85000"
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="work-arrangement">Work Arrangement</Label>
                      <Select value={workArrangement} onValueChange={setWorkArrangement}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select work arrangement" />
                        </SelectTrigger>
                        <SelectContent>
                          {workArrangements.map((arrangement) => (
                            <SelectItem key={arrangement.value} value={arrangement.value}>
                              {arrangement.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="current-location">Current Location</Label>
                      <Select value={currentLocation} onValueChange={setCurrentLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select current location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location.value} value={location.value}>
                              {location.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="new-location">New Location</Label>
                      <Select value={newLocation} onValueChange={setNewLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select new location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location.value} value={location.value}>
                              {location.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateAdjustment} 
                    className="w-full"
                    disabled={!currentSalary || !currentLocation || !newLocation || !workArrangement}
                  >
                    Calculate Salary Adjustment
                  </Button>

                  {result && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Salary Adjustment Results</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Original Salary:</span>
                                <span className="font-medium">${result.originalSalary.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Adjusted Salary:</span>
                                <span className="font-bold text-lg text-primary">${result.adjustedSalary.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Difference:</span>
                                <span className={`font-medium ${result.salaryDifference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {result.salaryDifference >= 0 ? '+' : ''}${result.salaryDifference.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Percentage Change:</span>
                                <span className={`font-medium ${result.percentageChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {result.percentageChange >= 0 ? '+' : ''}{result.percentageChange.toFixed(1)}%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="space-y-2 text-sm">
                              <div><strong>Location Change:</strong> {result.currentLocation} → {result.newLocation}</div>
                              <div><strong>Work Arrangement:</strong> {result.workArrangement}</div>
                              <div><strong>Location Factor:</strong> {result.locationRatio.toFixed(2)}x</div>
                              <div><strong>Remote Factor:</strong> {result.workAdjustment.toFixed(2)}x</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Cost Factors */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Key Cost Factors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {costCategories.map((category, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <div className="flex items-center gap-2 mb-1">
                          {category.icon}
                          <h4 className="font-medium text-gray-900">{category.category}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{category.description}</p>
                        <p className="text-xs text-primary font-medium">{category.impact}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Educational Content */}
          <div className="mt-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Remote Work Salary Adjustments</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Location-Based Factors</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Cost of living variations between cities</li>
                      <li>• State and local tax implications</li>
                      <li>• Housing market differences</li>
                      <li>• Transportation and commuting costs</li>
                      <li>• Healthcare and insurance variations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Remote Work Considerations</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Company location-based pay policies</li>
                      <li>• Market rates for remote positions</li>
                      <li>• Home office setup and maintenance costs</li>
                      <li>• Flexibility premium or discount</li>
                      <li>• Career advancement opportunities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}