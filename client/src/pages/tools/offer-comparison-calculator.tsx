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
  ArrowLeftRight, 
  DollarSign, 
  TrendingUp,
  Building,
  Car,
  Heart,
  GraduationCap,
  Clock,
  Target,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface OfferData {
  title: string;
  baseSalary: number;
  signingBonus: number;
  annualBonus: number;
  stockValue: number;
  retirementMatch: number;
  healthInsuranceCost: number;
  ptoValue: number;
  commuteCosts: number;
  otherBenefits: number;
}

export default function OfferComparisonCalculator() {
  const [offer1, setOffer1] = useState<OfferData>({
    title: "Current Role",
    baseSalary: 75000,
    signingBonus: 0,
    annualBonus: 3750,
    stockValue: 0,
    retirementMatch: 2250,
    healthInsuranceCost: -2400,
    ptoValue: 2885,
    commuteCosts: -3600,
    otherBenefits: 0
  });

  const [offer2, setOffer2] = useState<OfferData>({
    title: "New Offer",
    baseSalary: 85000,
    signingBonus: 10000,
    annualBonus: 8500,
    stockValue: 15000,
    retirementMatch: 2550,
    healthInsuranceCost: -1800,
    ptoValue: 3269,
    commuteCosts: -1200,
    otherBenefits: 1200
  });

  const calculateTotalValue = (offer: OfferData) => {
    return offer.baseSalary + offer.signingBonus + offer.annualBonus + 
           offer.stockValue + offer.retirementMatch + offer.healthInsuranceCost + 
           offer.ptoValue + offer.commuteCosts + offer.otherBenefits;
  };

  const offer1Total = calculateTotalValue(offer1);
  const offer2Total = calculateTotalValue(offer2);
  const difference = offer2Total - offer1Total;
  const percentageDifference = ((difference / offer1Total) * 100);

  const updateOffer = (offerNumber: 1 | 2, field: keyof OfferData, value: string | number) => {
    const setter = offerNumber === 1 ? setOffer1 : setOffer2;
    const currentOffer = offerNumber === 1 ? offer1 : offer2;
    
    setter({
      ...currentOffer,
      [field]: typeof value === 'string' ? value : Number(value) || 0
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Job Offer Comparison Calculator",
    "description": "Compare multiple job offers including salary, benefits, stock options, and total compensation packages to make informed career decisions.",
    "url": "https://payraisepercentagecalculator.com/tools/offer-comparison-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Side-by-side offer comparison",
      "Total compensation analysis",
      "Stock options valuation",
      "Benefits cost calculation",
      "Commute cost consideration",
      "Professional comparison report"
    ]
  };

  return (
    <>
      <SEOHead
        title="Job Offer Comparison Calculator - Evaluate Your Options Like a Pro"
        description="Compare multiple job offers including salary, benefits, stock options, and total compensation. Make informed career decisions with our comprehensive offer analysis tool."
        canonical="/tools/offer-comparison-calculator"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <BreadcrumbNavigation 
            items={BreadcrumbPatterns.tool("Offer Comparison Calculator")}
            className="mb-6"
          />

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <ArrowLeftRight className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">
                Job Offer Comparison Calculator
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Evaluate your options like a pro by comparing the complete compensation packages of multiple job offers. 
              Look beyond base salary to make the best career decision.
            </p>
          </div>

          {/* Calculator Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Offer 1 */}
            <Card className="calculator-shadow">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  <Input
                    value={offer1.title}
                    onChange={(e) => updateOffer(1, 'title', e.target.value)}
                    className="bg-transparent border-none text-lg font-semibold p-0 h-auto"
                    placeholder="Offer 1 Title"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="offer1-base">Base Salary</Label>
                  <Input
                    id="offer1-base"
                    type="number"
                    value={offer1.baseSalary}
                    onChange={(e) => updateOffer(1, 'baseSalary', e.target.value)}
                    placeholder="75000"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer1-signing">Signing Bonus</Label>
                  <Input
                    id="offer1-signing"
                    type="number"
                    value={offer1.signingBonus}
                    onChange={(e) => updateOffer(1, 'signingBonus', e.target.value)}
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer1-bonus">Annual Bonus (Target %)</Label>
                  <Input
                    id="offer1-bonus"
                    type="number"
                    value={offer1.annualBonus}
                    onChange={(e) => updateOffer(1, 'annualBonus', e.target.value)}
                    placeholder="3750"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer1-stock">Stock Options/RSUs (Annual Value)</Label>
                  <Input
                    id="offer1-stock"
                    type="number"
                    value={offer1.stockValue}
                    onChange={(e) => updateOffer(1, 'stockValue', e.target.value)}
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer1-retirement">401k Match Value</Label>
                  <Input
                    id="offer1-retirement"
                    type="number"
                    value={offer1.retirementMatch}
                    onChange={(e) => updateOffer(1, 'retirementMatch', e.target.value)}
                    placeholder="2250"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer1-health">Health Insurance Cost (Annual)</Label>
                  <Input
                    id="offer1-health"
                    type="number"
                    value={Math.abs(offer1.healthInsuranceCost)}
                    onChange={(e) => updateOffer(1, 'healthInsuranceCost', -Math.abs(Number(e.target.value)))}
                    placeholder="2400"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer1-pto">PTO Value (Annual)</Label>
                  <Input
                    id="offer1-pto"
                    type="number"
                    value={offer1.ptoValue}
                    onChange={(e) => updateOffer(1, 'ptoValue', e.target.value)}
                    placeholder="2885"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer1-commute">Commute Costs (Annual)</Label>
                  <Input
                    id="offer1-commute"
                    type="number"
                    value={Math.abs(offer1.commuteCosts)}
                    onChange={(e) => updateOffer(1, 'commuteCosts', -Math.abs(Number(e.target.value)))}
                    placeholder="3600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer1-other">Other Benefits Value</Label>
                  <Input
                    id="offer1-other"
                    type="number"
                    value={offer1.otherBenefits}
                    onChange={(e) => updateOffer(1, 'otherBenefits', e.target.value)}
                    placeholder="0"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Offer 2 */}
            <Card className="calculator-shadow">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 text-green-600 mr-2" />
                  <Input
                    value={offer2.title}
                    onChange={(e) => updateOffer(2, 'title', e.target.value)}
                    className="bg-transparent border-none text-lg font-semibold p-0 h-auto"
                    placeholder="Offer 2 Title"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="offer2-base">Base Salary</Label>
                  <Input
                    id="offer2-base"
                    type="number"
                    value={offer2.baseSalary}
                    onChange={(e) => updateOffer(2, 'baseSalary', e.target.value)}
                    placeholder="85000"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer2-signing">Signing Bonus</Label>
                  <Input
                    id="offer2-signing"
                    type="number"
                    value={offer2.signingBonus}
                    onChange={(e) => updateOffer(2, 'signingBonus', e.target.value)}
                    placeholder="10000"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer2-bonus">Annual Bonus (Target %)</Label>
                  <Input
                    id="offer2-bonus"
                    type="number"
                    value={offer2.annualBonus}
                    onChange={(e) => updateOffer(2, 'annualBonus', e.target.value)}
                    placeholder="8500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer2-stock">Stock Options/RSUs (Annual Value)</Label>
                  <Input
                    id="offer2-stock"
                    type="number"
                    value={offer2.stockValue}
                    onChange={(e) => updateOffer(2, 'stockValue', e.target.value)}
                    placeholder="15000"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer2-retirement">401k Match Value</Label>
                  <Input
                    id="offer2-retirement"
                    type="number"
                    value={offer2.retirementMatch}
                    onChange={(e) => updateOffer(2, 'retirementMatch', e.target.value)}
                    placeholder="2550"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer2-health">Health Insurance Cost (Annual)</Label>
                  <Input
                    id="offer2-health"
                    type="number"
                    value={Math.abs(offer2.healthInsuranceCost)}
                    onChange={(e) => updateOffer(2, 'healthInsuranceCost', -Math.abs(Number(e.target.value)))}
                    placeholder="1800"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer2-pto">PTO Value (Annual)</Label>
                  <Input
                    id="offer2-pto"
                    type="number"
                    value={offer2.ptoValue}
                    onChange={(e) => updateOffer(2, 'ptoValue', e.target.value)}
                    placeholder="3269"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer2-commute">Commute Costs (Annual)</Label>
                  <Input
                    id="offer2-commute"
                    type="number"
                    value={Math.abs(offer2.commuteCosts)}
                    onChange={(e) => updateOffer(2, 'commuteCosts', -Math.abs(Number(e.target.value)))}
                    placeholder="1200"
                  />
                </div>
                
                <div>
                  <Label htmlFor="offer2-other">Other Benefits Value</Label>
                  <Input
                    id="offer2-other"
                    type="number"
                    value={offer2.otherBenefits}
                    onChange={(e) => updateOffer(2, 'otherBenefits', e.target.value)}
                    placeholder="1200"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Comparison */}
          <Card className="mb-12 border-2 border-primary">
            <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Offer Comparison Results
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Offer 1 Total */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{offer1.title}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${offer1Total.toLocaleString()}
                  </div>
                  <Badge variant="outline">Total Annual Value</Badge>
                </div>

                {/* Comparison */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Difference</h3>
                  <div className={`text-3xl font-bold mb-2 ${difference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {difference >= 0 ? '+' : ''}${difference.toLocaleString()}
                  </div>
                  <Badge variant={difference >= 0 ? 'default' : 'destructive'}>
                    {difference >= 0 ? '+' : ''}{percentageDifference.toFixed(1)}%
                  </Badge>
                </div>

                {/* Offer 2 Total */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{offer2.title}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ${offer2Total.toLocaleString()}
                  </div>
                  <Badge variant="outline">Total Annual Value</Badge>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="mt-8 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Component</th>
                      <th className="text-right py-2">{offer1.title}</th>
                      <th className="text-right py-2">{offer2.title}</th>
                      <th className="text-right py-2">Difference</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="py-2">Base Salary</td>
                      <td className="text-right">${offer1.baseSalary.toLocaleString()}</td>
                      <td className="text-right">${offer2.baseSalary.toLocaleString()}</td>
                      <td className="text-right font-medium">
                        ${(offer2.baseSalary - offer1.baseSalary).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Signing Bonus</td>
                      <td className="text-right">${offer1.signingBonus.toLocaleString()}</td>
                      <td className="text-right">${offer2.signingBonus.toLocaleString()}</td>
                      <td className="text-right font-medium">
                        ${(offer2.signingBonus - offer1.signingBonus).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Annual Bonus</td>
                      <td className="text-right">${offer1.annualBonus.toLocaleString()}</td>
                      <td className="text-right">${offer2.annualBonus.toLocaleString()}</td>
                      <td className="text-right font-medium">
                        ${(offer2.annualBonus - offer1.annualBonus).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Stock Value</td>
                      <td className="text-right">${offer1.stockValue.toLocaleString()}</td>
                      <td className="text-right">${offer2.stockValue.toLocaleString()}</td>
                      <td className="text-right font-medium">
                        ${(offer2.stockValue - offer1.stockValue).toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Educational Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                  How to Accurately Estimate Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Valuing Stock Options and RSUs</h4>
                    <p className="text-sm text-gray-600">
                      For RSUs, use current share price × number of shares vesting annually. 
                      For options, calculate potential gain based on current valuation and strike price.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Estimating Bonus Payouts</h4>
                    <p className="text-sm text-gray-600">
                      Use target bonus percentage × base salary. Consider company's historical payout rates and your confidence in achieving targets.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">PTO and Health Benefits</h4>
                    <p className="text-sm text-gray-600">
                      Calculate PTO value as (days × daily rate). Compare health insurance costs including premiums, deductibles, and coverage differences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-green-600 mr-2" />
                  Beyond the Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Qualitative Factors to Consider</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Company culture and values alignment</li>
                      <li>• Growth opportunities and career progression</li>
                      <li>• Work-life balance and flexibility</li>
                      <li>• Learning and development opportunities</li>
                      <li>• Job security and company stability</li>
                      <li>• Team dynamics and management quality</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Pro Tip:</strong> Use these quantitative results as a starting point, 
                      but don't ignore the qualitative factors that impact your daily satisfaction and long-term career success.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Tools & Resources */}
          <section className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Calculators</h4>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/tools/pay-raise-tax-impact-calculator" className="block text-blue-600 hover:text-blue-700">
                    Estimate taxes on your new salary
                  </InternalLink>
                  <InternalLink href="/" className="block text-blue-600 hover:text-blue-700">
                    Calculate raise percentages
                  </InternalLink>
                  <InternalLink href="/tools/effective-hourly-rate-calculator" className="block text-blue-600 hover:text-blue-700">
                    Compare effective hourly rates
                  </InternalLink>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Negotiation Guides</h4>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/salary-negotiation-complete-guide" className="block text-blue-600 hover:text-blue-700">
                    Complete negotiation guide
                  </InternalLink>
                  <InternalLink href="/guides/negotiating-non-salary-benefits-perks" className="block text-blue-600 hover:text-blue-700">
                    How to negotiate better benefits
                  </InternalLink>
                  <InternalLink href="/blog/raise-negotiation-scripts-templates" className="block text-blue-600 hover:text-blue-700">
                    Negotiation scripts and templates
                  </InternalLink>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Market Research</h4>
                <div className="space-y-2 text-sm">
                  <InternalLink href="/guides/market-value-salary-research" className="block text-blue-600 hover:text-blue-700">
                    Research your market value
                  </InternalLink>
                  <InternalLink href="/industry-raise-benchmarks-2025" className="block text-blue-600 hover:text-blue-700">
                    Industry salary benchmarks
                  </InternalLink>
                  <InternalLink href="/blog/average-raise-by-industry-2025" className="block text-blue-600 hover:text-blue-700">
                    Average raises by industry
                  </InternalLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}