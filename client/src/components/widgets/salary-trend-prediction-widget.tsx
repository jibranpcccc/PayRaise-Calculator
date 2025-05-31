import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3,
  Clock,
  Target,
  AlertTriangle,
  Zap,
  ExternalLink
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface SalaryTrendData {
  industry: string;
  currentAverage: number;
  prediction3Month: number;
  prediction6Month: number;
  prediction12Month: number;
  trendDirection: 'up' | 'down' | 'stable';
  confidence: number;
  factors: string[];
  lastUpdated: string;
  dataSource: string;
}

interface TrendPredictionWidgetProps {
  defaultIndustry?: string;
  compact?: boolean;
}

export function SalaryTrendPredictionWidget({ 
  defaultIndustry = "Technology", 
  compact = false 
}: TrendPredictionWidgetProps) {
  const [selectedIndustry, setSelectedIndustry] = useState(defaultIndustry);
  
  // Fetch real-time salary trend data from external APIs
  const { data: trendData, isLoading, error, refetch } = useQuery({
    queryKey: ['/api/salary-trends', selectedIndustry],
    queryFn: async () => {
      const response = await fetch(`/api/salary-trends?industry=${selectedIndustry}`);
      if (!response.ok) {
        throw new Error('Failed to fetch salary trend data');
      }
      return response.json() as SalaryTrendData;
    },
    refetchInterval: 300000, // Refresh every 5 minutes
    staleTime: 240000, // Consider data stale after 4 minutes
  });

  const industries = [
    "Technology",
    "Finance", 
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Education",
    "Government",
    "Consulting"
  ];

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Target className="h-4 w-4 text-blue-600" />;
    }
  };

  const getTrendColor = (direction: string) => {
    switch (direction) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-blue-600';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculatePercentageChange = (current: number, future: number) => {
    return ((future - current) / current * 100).toFixed(1);
  };

  // Handle API connection requirements
  if (error) {
    return (
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <ExternalLink className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-orange-800 mb-2">
                Real-time Market Data Required
              </h3>
              <p className="text-orange-700 text-sm mb-3">
                This feature requires access to external salary market data APIs for authentic real-time predictions. 
                To enable live salary trend analysis, we need API access to services like:
              </p>
              <ul className="text-orange-700 text-sm space-y-1 mb-4">
                <li>• Bureau of Labor Statistics API</li>
                <li>• PayScale or Glassdoor API access</li>
                <li>• Indeed Salary Insights API</li>
                <li>• LinkedIn Economic Graph API</li>
              </ul>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => refetch()}
                  className="text-orange-700 border-orange-300 hover:bg-orange-100"
                >
                  Retry Connection
                </Button>
                <Button 
                  size="sm" 
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Configure API Access
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="salary-trend-widget calculator-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Zap className="mr-2 h-5 w-5 text-primary" />
            {compact ? "Salary Trends" : "Real-time Salary Trend Predictions"}
          </CardTitle>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            Live Data
          </div>
        </div>
        {!compact && (
          <div className="flex items-center space-x-2">
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-48">
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
            <div className="text-sm text-blue-600 flex items-center">
              <BarChart3 className="h-4 w-4 mr-1 animate-pulse" />
              Connecting to market data APIs...
            </div>
          </div>
        ) : trendData ? (
          <div className="space-y-4">
            {/* Current Status */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Current Average</div>
                <div className="text-2xl font-bold text-primary">
                  {formatCurrency(trendData.currentAverage)}
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  {getTrendIcon(trendData.trendDirection)}
                  <span className={`ml-1 font-medium ${getTrendColor(trendData.trendDirection)}`}>
                    {trendData.trendDirection.charAt(0).toUpperCase() + trendData.trendDirection.slice(1)}
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  {trendData.confidence}% confidence
                </div>
              </div>
            </div>

            {/* Predictions */}
            {!compact && (
              <div className="grid grid-cols-3 gap-3 py-3 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-xs text-gray-600">3 Month</div>
                  <div className="font-semibold">{formatCurrency(trendData.prediction3Month)}</div>
                  <div className={`text-xs ${
                    parseFloat(calculatePercentageChange(trendData.currentAverage, trendData.prediction3Month)) > 0 
                      ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {calculatePercentageChange(trendData.currentAverage, trendData.prediction3Month) > 0 ? '+' : ''}
                    {calculatePercentageChange(trendData.currentAverage, trendData.prediction3Month)}%
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-xs text-gray-600">6 Month</div>
                  <div className="font-semibold">{formatCurrency(trendData.prediction6Month)}</div>
                  <div className={`text-xs ${
                    parseFloat(calculatePercentageChange(trendData.currentAverage, trendData.prediction6Month)) > 0 
                      ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {calculatePercentageChange(trendData.currentAverage, trendData.prediction6Month) > 0 ? '+' : ''}
                    {calculatePercentageChange(trendData.currentAverage, trendData.prediction6Month)}%
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-xs text-gray-600">12 Month</div>
                  <div className="font-semibold">{formatCurrency(trendData.prediction12Month)}</div>
                  <div className={`text-xs ${
                    parseFloat(calculatePercentageChange(trendData.currentAverage, trendData.prediction12Month)) > 0 
                      ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {calculatePercentageChange(trendData.currentAverage, trendData.prediction12Month) > 0 ? '+' : ''}
                    {calculatePercentageChange(trendData.currentAverage, trendData.prediction12Month)}%
                  </div>
                </div>
              </div>
            )}

            {/* Key Factors */}
            {!compact && trendData.factors && (
              <div className="pt-3 border-t border-gray-200">
                <div className="text-xs font-medium text-gray-700 mb-2">Key Trend Factors:</div>
                <div className="flex flex-wrap gap-1">
                  {trendData.factors.slice(0, 3).map((factor, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {factor}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Data Source & Last Updated */}
            <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t border-gray-100">
              <span>
                Source: {trendData.dataSource} | 
                Updated: {new Date(trendData.lastUpdated).toLocaleTimeString()}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => refetch()}
                className="h-6 px-2 text-xs"
              >
                <BarChart3 className="h-3 w-3 mr-1" />
                Refresh
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <AlertTriangle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 text-sm mb-3">Waiting for market data connection</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => refetch()}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Connect to Market APIs
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}