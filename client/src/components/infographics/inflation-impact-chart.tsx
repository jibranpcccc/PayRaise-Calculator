import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { year: "2020", inflation: 1.4, salaryAvg: 3.0 },
    { year: "2021", inflation: 4.7, salaryAvg: 3.0 },
    { year: "2022", inflation: 8.0, salaryAvg: 4.8 },
    { year: "2023", inflation: 4.1, salaryAvg: 4.6 },
    { year: "2024", inflation: 3.1, salaryAvg: 4.0 },
    { year: "2025 (Proj)", inflation: 2.5, salaryAvg: 3.9 },
];

export function InflationImpactChart() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Inflation vs. Salary Growth (2020-2025)</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="year" />
                        <YAxis unit="%" />
                        <Tooltip contentStyle={{ borderRadius: '8px' }} />
                        <Legend />
                        <Area type="monotone" dataKey="inflation" stackId="1" stroke="#ef4444" fill="#fee2e2" name="Inflation Rate" />
                        <Area type="monotone" dataKey="salaryAvg" stackId="2" stroke="#22c55e" fill="#dcfce7" name="Avg Salary Increase" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
