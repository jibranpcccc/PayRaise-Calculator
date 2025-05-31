import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, Target, BarChart3 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface IndustryBenchmarkData {
  industry: string;
  currentYear: number;
  data: {
    averageRaise: number;
    medianRaise: number;
    topQuartileRaise: number;
    trends: string[];
    marketHealth: string;
  };
  economicContext: {
    inflationRate: number;
    unemploymentRate: number;
    gdpGrowth: number;
  };
  lastUpdated: string;
}

interface IndustryBenchmarksWidgetProps {
  defaultIndustry?: string;
  compact?: boolean;
}

export function IndustryBenchmarksWidget({ 
  defaultIndustry = "Technology", 
  compact = false 
}: IndustryBenchmarksWidgetProps) {
  const [selectedIndustry, setSelectedIndustry] = useState(defaultIndustry);
  
  const { data: benchmarkData, isLoading } = useQuery({
    queryKey: ['/api/salary-trends', selectedIndustry],
    queryFn: async (): Promise<IndustryBenchmarkData> => {
      const response = await fetch(`/api/salary-trends?industry=${selectedIndustry}`);
      return response.json();
    },
    refetchInterval: 300000,
  });

  const industries = [
    "Technology",
    "Finance", 
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Education"
  ];

  const getMarketHealthIcon = (health: string) => {
    switch (health?.toLowerCase()) {
      case 'strong':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'recovering':
        return <TrendingUp className="h-4 w-4 text-blue-600" />;
      case 'constrained':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Target className="h-4 w-4 text-blue-600" />;
    }
  };

  const getMarketHealthColor = (health: string) => {
    switch (health?.toLowerCase()) {
      case 'strong':
        return 'text-green-600';
      case 'recovering':
        return 'text-blue-600';
      case 'constrained':
        return 'text-red-600';
      default:
        return 'text-blue-600';
    }
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center text-gray-900">
            <BarChart3 className="mr-2 h-5 w-5 text-blue-600" />
            {compact ? "Industry Benchmarks" : "2025 Industry Salary Benchmarks"}
          </CardTitle>
        </div>
        {!compact && (
          <div className="flex items-center space-x-2">
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-48 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        {isLoading ? (
          <div className="space-y-3">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ) : benchmarkData ? (
          <div className="space-y-4">
            {/* Current Market Status */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Average Raise Rate</div>
                <div className="text-3xl font-bold text-blue-600">
                  {benchmarkData.data.averageRaise}%
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  {getMarketHealthIcon(benchmarkData.data.marketHealth)}
                  <span className={`ml-1 font-medium ${getMarketHealthColor(benchmarkData.data.marketHealth)}`}>
                    {benchmarkData.data.marketHealth}
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  Market Health
                </div>
              </div>
            </div>

            {/* Raise Percentiles */}
            {!compact && (
              <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-200">
                <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-xs text-gray-600 mb-1">Median</div>
                  <div className="text-xl font-bold text-blue-600">{benchmarkData.data.medianRaise}%</div>
                  <div className="text-xs text-gray-500">50th percentile</div>
                </div>
                
                <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-xs text-gray-600 mb-1">Average</div>
                  <div className="text-xl font-bold text-green-600">{benchmarkData.data.averageRaise}%</div>
                  <div className="text-xs text-gray-500">Market average</div>
                </div>
                
                <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-xs text-gray-600 mb-1">Top Quartile</div>
                  <div className="text-xl font-bold text-orange-600">{benchmarkData.data.topQuartileRaise}%</div>
                  <div className="text-xs text-gray-500">75th percentile</div>
                </div>
              </div>
            )}

            {/* Key Trends */}
            {!compact && benchmarkData.data.trends && (
              <div className="pt-3 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-700 mb-3">Key Industry Trends:</div>
                <div className="flex flex-wrap gap-2">
                  {benchmarkData.data.trends.map((trend, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                      {trend}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Economic Context */}
            {!compact && (
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-700 mb-3">Economic Context:</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-lg font-bold text-red-600">{benchmarkData.economicContext.inflationRate}%</div>
                    <div className="text-xs text-gray-500">Inflation Rate</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-lg font-bold text-blue-600">{benchmarkData.economicContext.unemploymentRate}%</div>
                    <div className="text-xs text-gray-500">Unemployment</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-lg font-bold text-green-600">{benchmarkData.economicContext.gdpGrowth}%</div>
                    <div className="text-xs text-gray-500">GDP Growth</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-600 text-sm">Loading industry data...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}