import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { BreadcrumbNavigation, BreadcrumbPatterns } from "@/components/seo/breadcrumb-navigation";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { 
  Calculator, 
  Clock, 
  DollarSign, 
  TrendingUp,
  AlertTriangle,
  Target,
  ArrowRight,
  CheckCircle,
  Info
} from "lucide-react";

interface RoleData {
  title: string;
  annualSalary: number;
  hoursPerWeek: number;
  effectiveHourlyRate: number;
  yearlyHours: number;
}

export default function EffectiveHourlyRateCalculator() {
  const [currentRole, setCurrentRole] = useState<Omit<RoleData, 'effectiveHourlyRate' | 'yearlyHours'>>({
    title: "Current Role",
    annualSalary: 75000,
    hoursPerWeek: 40
  });

  const [newRole, setNewRole] = useState<Omit<RoleData, 'effectiveHourlyRate' | 'yearlyHours'>>({
    title: "New Role/Offer",
    annualSalary: 85000,
    hoursPerWeek: 50
  });

  const calculateRoleData = (role: Omit<RoleData, 'effectiveHourlyRate' | 'yearlyHours'>): RoleData => {
    const yearlyHours = role.hoursPerWeek * 52;
    const effectiveHourlyRate = role.annualSalary / yearlyHours;
    
    return {
      ...role,
      effectiveHourlyRate,
      yearlyHours
    };
  };

  const currentRoleData = calculateRoleData(currentRole);
  const newRoleData = calculateRoleData(newRole);
  
  const hourlyRateDifference = newRoleData.effectiveHourlyRate - currentRoleData.effectiveHourlyRate;
  const percentageDifference = ((hourlyRateDifference / currentRoleData.effectiveHourlyRate) * 100);
  const workLifeBalance = newRoleData.hoursPerWeek - currentRoleData.hoursPerWeek;

  const updateRole = (roleType: 'current' | 'new', field: keyof Omit<RoleData, 'effectiveHourlyRate' | 'yearlyHours'>, value: string | number) => {
    const setter = roleType === 'current' ? setCurrentRole : setNewRole;
    const currentData = roleType === 'current' ? currentRole : newRole;
    
    setter({
      ...currentData,
      [field]: typeof value === 'string' ? value : Number(value) || 0
    });
  };

  const getWorkLifeBalanceIndicator = () => {
    if (workLifeBalance > 10) return { color: 'text-red-600', text: 'Significantly More Hours', icon: AlertTriangle };
    if (workLifeBalance > 5) return { color: 'text-orange-600', text: 'More Hours', icon: AlertTriangle };
    if (workLifeBalance > 0) return { color: 'text-yellow-600', text: 'Slightly More Hours', icon: Info };
    if (workLifeBalance === 0) return { color: 'text-green-600', text: 'Same Hours', icon: CheckCircle };
    return { color: 'text-green-600', text: 'Fewer Hours', icon: CheckCircle };
  };

  const balanceIndicator = getWorkLifeBalanceIndicator();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Effective Hourly Rate Calculator",
    "description": "Calculate and compare effective hourly rates between job roles. Determine if a promotion or new job offer provides better value considering working hours.",
    "url": "https://payraisepercentagecalculator.com/tools/effective-hourly-rate-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Side-by-side hourly rate comparison",
      "Work-life balance analysis",
      "Promotion value assessment",
      "Annual hours calculation",
      "Real compensation per hour"
    ]
  };

  return (
    <>
      <SEOHead
        title="Effective Hourly Rate Calculator: Is Your New Role Really Paying More?"
        description="Calculate and compare effective hourly rates between job roles. Determine if a promotion or new job offer provides better value considering working hours and work-life balance."
        canonical="/tools/effective-hourly-rate-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <BreadcrumbNavigation 
            items={BreadcrumbPatterns.tool("Effective Hourly Rate Calculator")}
            className="mb-6"
          />

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Clock className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">
                Effective Hourly Rate Calculator
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Discover the true value of job offers and promotions by calculating your effective hourly wage. 
              Sometimes a higher salary means less money per hour worked.
            </p>
          </div>

          {/* Calculator Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Current Role */}
            <Card className="calculator-shadow">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                  <Input
                    value={currentRole.title}
                    onChange={(e) => updateRole('current', 'title', e.target.value)}
                    className="bg-transparent border-none text-lg font-semibold p-0 h-auto"
                    placeholder="Current Role"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <Label htmlFor="current-salary">Annual Salary</Label>
                  <Input
                    id="current-salary"
                    type="number"
                    value={currentRole.annualSalary}
                    onChange={(e) => updateRole('current', 'annualSalary', e.target.value)}
                    placeholder="75000"
                  />
                </div>
                
                <div>
                  <Label htmlFor="current-hours">Average Hours Per Week</Label>
                  <Input
                    id="current-hours"
                    type="number"
                    value={currentRole.hoursPerWeek}
                    onChange={(e) => updateRole('current', 'hoursPerWeek', e.target.value)}
                    placeholder="40"
                  />
                </div>

                {/* Current Role Results */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Calculated Results</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-blue-700">Effective Hourly Rate:</span>
                      <span className="font-bold text-blue-900">
                        ${currentRoleData.effectiveHourlyRate.toFixed(2)}/hour
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-600">Annual Hours:</span>
                      <span className="text-blue-800">
                        {currentRoleData.yearlyHours.toLocaleString()} hours
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Role */}
            <Card className="calculator-shadow">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <Input
                    value={newRole.title}
                    onChange={(e) => updateRole('new', 'title', e.target.value)}
                    className="bg-transparent border-none text-lg font-semibold p-0 h-auto"
                    placeholder="New Role/Offer"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <Label htmlFor="new-salary">Annual Salary</Label>
                  <Input
                    id="new-salary"
                    type="number"
                    value={newRole.annualSalary}
                    onChange={(e) => updateRole('new', 'annualSalary', e.target.value)}
                    placeholder="85000"
                  />
                </div>
                
                <div>
                  <Label htmlFor="new-hours">Average Hours Per Week</Label>
                  <Input
                    id="new-hours"
                    type="number"
                    value={newRole.hoursPerWeek}
                    onChange={(e) => updateRole('new', 'hoursPerWeek', e.target.value)}
                    placeholder="50"
                  />
                </div>

                {/* New Role Results */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Calculated Results</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-green-700">Effective Hourly Rate:</span>
                      <span className="font-bold text-green-900">
                        ${newRoleData.effectiveHourlyRate.toFixed(2)}/hour
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Annual Hours:</span>
                      <span className="text-green-800">
                        {newRoleData.yearlyHours.toLocaleString()} hours
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Results */}
          <Card className="mb-12 border-2 border-primary">
            <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Effective Hourly Rate Comparison
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {/* Current Rate */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{currentRole.title}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${currentRoleData.effectiveHourlyRate.toFixed(2)}
                  </div>
                  <Badge variant="outline">Per Hour</Badge>
                  <div className="text-sm text-gray-600 mt-2">
                    {currentRole.hoursPerWeek} hours/week
                  </div>
                </div>

                {/* Difference */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hourly Rate Difference</h3>
                  <div className={`text-3xl font-bold mb-2 ${hourlyRateDifference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {hourlyRateDifference >= 0 ? '+' : ''}${hourlyRateDifference.toFixed(2)}
                  </div>
                  <Badge variant={hourlyRateDifference >= 0 ? 'default' : 'destructive'}>
                    {hourlyRateDifference >= 0 ? '+' : ''}{percentageDifference.toFixed(1)}%
                  </Badge>
                  <div className="text-sm text-gray-600 mt-2">
                    Per hour change
                  </div>
                </div>

                {/* New Rate */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{newRole.title}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ${newRoleData.effectiveHourlyRate.toFixed(2)}
                  </div>
                  <Badge variant="outline">Per Hour</Badge>
                  <div className="text-sm text-gray-600 mt-2">
                    {newRole.hoursPerWeek} hours/week
                  </div>
                </div>
              </div>

              {/* Work-Life Balance Analysis */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Work-Life Balance Impact</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700">Weekly Hours Difference:</span>
                  <div className="flex items-center">
                    <balanceIndicator.icon className={`h-5 w-5 ${balanceIndicator.color} mr-2`} />
                    <span className={`font-semibold ${balanceIndicator.color}`}>
                      {workLifeBalance > 0 ? '+' : ''}{workLifeBalance} hours
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700">Work-Life Balance Assessment:</span>
                  <span className={`font-semibold ${balanceIndicator.color}`}>
                    {balanceIndicator.text}
                  </span>
                </div>

                {workLifeBalance > 0 && (
                  <div className="bg-yellow-50 p-4 rounded border-l-4 border-l-yellow-500">
                    <p className="text-yellow-800 text-sm">
                      <strong>Consider:</strong> The new role requires {workLifeBalance} more hours per week. 
                      While the salary is higher, your effective hourly rate is {hourlyRateDifference < 0 ? 'lower' : 'higher'}.
                      Factor in potential burnout, reduced family time, and work-life balance when making your decision.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Educational Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 text-blue-600 mr-2" />
                  Why Effective Hourly Rate Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">True Value Assessment</h4>
                    <p className="text-sm text-gray-600">
                      Salary figures alone can be misleading. A $10,000 raise that requires 15 extra hours 
                      per week might actually decrease your hourly compensation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Work-Life Balance Consideration</h4>
                    <p className="text-sm text-gray-600">
                      Higher effective hourly rates mean more money per hour worked, leaving more time 
                      for family, hobbies, and personal development.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Burnout Risk Assessment</h4>
                    <p className="text-sm text-gray-600">
                      Roles requiring significantly more hours may lead to burnout, health issues, 
                      and decreased job performance over time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-green-600 mr-2" />
                  Factors That Influence Real Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Unpaid Overtime</h4>
                    <p className="text-sm text-gray-600">
                      Many salaried positions expect additional hours during busy periods, project deadlines, 
                      or to meet performance expectations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Commute Time</h4>
                    <p className="text-sm text-gray-600">
                      Consider adding commute time to your weekly hours calculation. A 1-hour round-trip 
                      commute adds 5 hours to your work week.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">On-Call Responsibilities</h4>
                    <p className="text-sm text-gray-600">
                      Some roles require being available outside normal hours for urgent issues, 
                      effectively extending your working time commitment.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Pro Tip:</strong> Track your actual hours for 2-4 weeks in your current role 
                      to get an accurate baseline for comparison.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Resources */}
          <section className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Calculators</h4>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/tools/promotion-salary-calculator" className="block text-blue-600 hover:text-blue-700">
                    Calculate promotion salary increases
                  </InternalLink>
                  <InternalLink href="/tools/offer-comparison-calculator" className="block text-blue-600 hover:text-blue-700">
                    Compare complete job offers
                  </InternalLink>
                  <InternalLink href="/tools/hourly-to-salary-converter" className="block text-blue-600 hover:text-blue-700">
                    Convert hourly to salary rates
                  </InternalLink>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Career Guides</h4>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/guides/merit-increase-vs-promotion" className="block text-blue-600 hover:text-blue-700">
                    Merit increase vs promotion comparison
                  </InternalLink>
                  <InternalLink href="/salary-negotiation-complete-guide" className="block text-blue-600 hover:text-blue-700">
                    Negotiate terms beyond salary
                  </InternalLink>
                  <InternalLink href="/guides/negotiating-non-salary-benefits-perks" className="block text-blue-600 hover:text-blue-700">
                    Negotiate benefits and work arrangements
                  </InternalLink>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Work-Life Balance</h4>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/blog/remote-work-raise-strategies" className="block text-blue-600 hover:text-blue-700">
                    Remote work compensation strategies
                  </InternalLink>
                  <InternalLink href="/blog/why-your-raise-feels-smaller-this-year" className="block text-blue-600 hover:text-blue-700">
                    Understanding real compensation value
                  </InternalLink>
                  <a 
                    href="https://www.dol.gov/general/topic/workhours/overtime" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    Department of Labor overtime rules →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}