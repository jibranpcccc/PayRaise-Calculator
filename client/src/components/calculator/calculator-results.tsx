import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type CalculationResult, type CalculationInput, PayRaiseCalculator } from "@/lib/calculator";
import { getInflationAdjustedAnalysis } from "@/lib/industry-data";
import { PDFExporter } from "@/lib/pdf-export";
import { Download, Share2, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface CalculatorResultsProps {
  result: CalculationResult;
  input: CalculationInput;
}

export function CalculatorResults({ result, input }: CalculatorResultsProps) {
  const inflationAnalysis = getInflationAdjustedAnalysis(result.raisePercentage);

  const handleExportPDF = async () => {
    try {
      await PDFExporter.exportCalculation({
        calculation: {
          currentSalary: input.currentSalary,
          newSalary: result.newSalary,
          raiseAmount: result.raiseAmount,
          raisePercentage: result.raisePercentage,
          payPeriod: input.payPeriod,
        },
        analysis: {
          monthlyIncrease: result.monthlyIncrease,
          weeklyIncrease: result.weeklyIncrease,
          annualIncrease: result.raiseAmount,
          realRaise: result.realRaise,
          industry: input.industry,
        },
        projections: result.compoundProjections,
        metadata: {
          calculatedAt: new Date(),
          inflationRate: 3.1,
        },
      });
    } catch (error) {
      console.error('PDF export failed:', error);
      alert('PDF export functionality will be available soon');
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Pay Raise Calculator Results',
      text: `I calculated a ${PayRaiseCalculator.formatPercentage(result.raisePercentage)} raise bringing my salary to ${PayRaiseCalculator.formatCurrency(result.newSalary)}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
        alert('Results copied to clipboard!');
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      alert('Results copied to clipboard!');
    }
  };

  const getInflationIcon = () => {
    if (inflationAnalysis.status === 'positive') return <TrendingUp className="h-4 w-4" />;
    if (inflationAnalysis.status === 'negative') return <TrendingDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getInflationColor = () => {
    if (inflationAnalysis.status === 'positive') return 'text-success';
    if (inflationAnalysis.status === 'negative') return 'text-red-600';
    return 'text-yellow-600';
  };

  return (
    <div className="space-y-6">
      {/* Main Result Card */}
      <Card className="gradient-secondary text-white result-glow">
        <CardContent className="p-6 text-center">
          <div className="text-sm opacity-90 mb-1">New {input.payPeriod} Salary</div>
          <div className="text-4xl font-bold">
            {PayRaiseCalculator.formatCurrency(result.newSalary)}
          </div>
          <div className="text-sm opacity-90 mt-2">
            <span>{PayRaiseCalculator.formatCurrency(result.raiseAmount, 0)}</span> increase
            ({PayRaiseCalculator.formatPercentage(result.raisePercentage)})
          </div>
        </CardContent>
      </Card>

      {/* Breakdown Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gray-50">
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Monthly Increase</div>
            <div className="text-xl font-bold text-gray-900">
              {PayRaiseCalculator.formatCurrency(result.monthlyIncrease)}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-50">
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Weekly Increase</div>
            <div className="text-xl font-bold text-gray-900">
              {PayRaiseCalculator.formatCurrency(result.weeklyIncrease)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Analysis */}
      {(input.includeInflation || result.realRaise !== undefined) && (
        <Card className="bg-blue-50 border-l-4 border-primary">
          <CardContent className="p-4">
            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
              {getInflationIcon()}
              <span className="ml-2">Inflation-Adjusted Analysis</span>
            </h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Nominal increase:</span>
                <span className="font-medium">
                  {PayRaiseCalculator.formatPercentage(result.raisePercentage)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Real increase (after 3.1% inflation):</span>
                <span className={`font-medium ${getInflationColor()}`}>
                  {PayRaiseCalculator.formatPercentage(inflationAnalysis.realRaise)}
                </span>
              </div>
            </div>
            <div className="mt-2">
              <Badge variant="outline" className={getInflationColor()}>
                {inflationAnalysis.message}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tax Impact */}
      {input.includeTaxes && result.netIncrease && (
        <Card className="bg-yellow-50 border-l-4 border-accent">
          <CardContent className="p-4">
            <h4 className="font-medium text-gray-900 mb-2">Tax Impact Analysis</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Gross annual increase:</span>
                <span className="font-medium">
                  {PayRaiseCalculator.formatCurrency(result.raiseAmount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated tax rate:</span>
                <span className="font-medium">{input.taxRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Net annual increase:</span>
                <span className="font-medium text-success">
                  {PayRaiseCalculator.formatCurrency(result.netIncrease)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Compound Projections */}
      {result.compoundProjections && result.compoundProjections.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <h4 className="font-medium text-gray-900 mb-3">5-Year Compound Projections</h4>
            <div className="space-y-2">
              {result.compoundProjections.map((projection) => (
                <div key={projection.year} className="flex justify-between text-sm">
                  <span className="text-gray-600">Year {projection.year}:</span>
                  <div className="text-right">
                    <div className="font-medium">
                      {PayRaiseCalculator.formatCurrency(projection.salary)}
                    </div>
                    <div className="text-xs text-gray-500">
                      Total: {PayRaiseCalculator.formatCurrency(projection.cumulativeIncrease)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button 
          onClick={handleExportPDF}
          className="w-full bg-primary text-white hover:bg-blue-700"
        >
          <Download className="mr-2 h-4 w-4" />
          Export PDF Report
        </Button>
        
        <Button 
          onClick={handleShare}
          variant="outline"
          className="w-full"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share Results
        </Button>
      </div>
    </div>
  );
}
