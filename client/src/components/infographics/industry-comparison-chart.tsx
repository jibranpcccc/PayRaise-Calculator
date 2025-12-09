import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { industry: "Tech", percentage: 4.8 },
    { industry: "Energy", percentage: 4.5 },
    { industry: "Healthcare", percentage: 4.1 },
    { industry: "Finance", percentage: 3.9 },
    { industry: "Retail", percentage: 3.2 },
    { industry: "Education", percentage: 3.0 },
];

export function IndustryComparisonChart() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Projected Average Raises by Industry (2025)</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" unit="%" domain={[0, 6]} />
                        <YAxis dataKey="industry" type="category" width={100} />
                        <Tooltip
                            formatter={(value: number) => [`${value}%`, "Avg Raise"]}
                            contentStyle={{ borderRadius: '8px' }}
                        />
                        <Bar name="Avg Raise %" dataKey="percentage" fill="#0d9488" radius={[0, 4, 4, 0]} barSize={32} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
