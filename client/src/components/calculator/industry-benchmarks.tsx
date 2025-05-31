import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { type IndustryBenchmark } from "@shared/schema";
import { INDUSTRIES, getIndustryComparison } from "@/lib/industry-data";
import { Building2, TrendingUp } from "lucide-react";

interface IndustryBenchmarksProps {
  userRaise?: number;
  userIndustry?: string;
}

export function IndustryBenchmarks({ userRaise, userIndustry }: IndustryBenchmarksProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(userIndustry || '');

  const { data: benchmarks, isLoading } = useQuery<IndustryBenchmark[]>({
    queryKey: ['/api/industry-benchmarks'],
  });

  const comparison = userRaise && selectedIndustry 
    ? getIndustryComparison(userRaise, selectedIndustry)
    : null;

  const selectedBenchmark = benchmarks?.find(b => b.industry === selectedIndustry);

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'above': return 'default';
      case 'average': return 'secondary';
      case 'below': return 'destructive';
      default: return 'outline';
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Industry Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center">
            <Building2 className="mr-2 h-5 w-5 text-primary" />
            Industry Benchmarks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Industry
              </label>
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRIES.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedBenchmark && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {selectedBenchmark.averageRaise}%
                    </div>
                    <div className="text-sm text-gray-600">Average Raise</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {selectedBenchmark.medianRaise}%
                    </div>
                    <div className="text-sm text-gray-600">Median Raise</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {selectedBenchmark.topQuartileRaise}%
                    </div>
                    <div className="text-sm text-gray-600">Top 25%</div>
                  </div>
                </div>

                {userRaise && comparison && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Your Raise Comparison
                    </h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Your raise: {userRaise.toFixed(1)}%</span>
                      <Badge variant={getBadgeVariant(comparison.status)}>
                        {comparison.status}
                      </Badge>
                    </div>
                    <Progress 
                      value={comparison.percentile || 50} 
                      className="mb-2"
                    />
                    <p className="text-sm text-gray-700">{comparison.message}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* All Industries Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">2025 Raise Overview by Industry</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {benchmarks?.map((benchmark) => {
              const isAboveMarket = benchmark.averageRaise >= 4.0;
              const isBelowMarket = benchmark.averageRaise < 3.5;
              
              return (
                <div key={benchmark.industry} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      isAboveMarket ? 'bg-green-500' : 
                      isBelowMarket ? 'bg-red-500' : 'bg-yellow-500'
                    }`}></div>
                    <span className="text-gray-700">{benchmark.industry}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 mr-2">
                      {benchmark.averageRaise}%
                    </span>
                    <Badge variant={isAboveMarket ? 'default' : isBelowMarket ? 'destructive' : 'secondary'}>
                      {isAboveMarket ? 'Above market' : isBelowMarket ? 'Below market' : 'Average'}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
