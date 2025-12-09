import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { year: "Year 1", raise3: 51500, raise5: 52500 },
    { year: "Year 2", raise3: 53045, raise5: 55125 },
    { year: "Year 3", raise3: 54636, raise5: 57881 },
    { year: "Year 4", raise3: 56275, raise5: 60775 },
    { year: "Year 5", raise3: 57963, raise5: 63814 },
];

export function CompoundRaiseChart() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>5-Year Cumulative Impact: 3% vs 5% Raise (Starting $50k)</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="year" />
                        <YAxis
                            tickFormatter={(value) => `$${value / 1000}k`}
                            domain={['dataMin - 1000', 'auto']}
                        />
                        <Tooltip
                            formatter={(value: number) => [`$${value.toLocaleString()}`, "Salary"]}
                            contentStyle={{ borderRadius: '8px' }}
                        />
                        <Legend />
                        <Bar name="3% Raise" dataKey="raise3" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                        <Bar name="5% Raise" dataKey="raise5" fill="#2563eb" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
