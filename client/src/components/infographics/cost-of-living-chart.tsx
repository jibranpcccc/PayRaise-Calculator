import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { city: "NYC", index: 100 },
    { city: "San Fran", index: 92 },
    { city: "Boston", index: 88 },
    { city: "DC", index: 85 },
    { city: "LA", index: 80 },
    { city: "Chicago", index: 75 },
    { city: "Austin", index: 68 },
    { city: "Houston", index: 62 },
];

export function CostOfLivingComparisonChart() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Cost of Living Index (Baseline: NYC = 100)</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="city" />
                        <YAxis />
                        <Tooltip cursor={{ fill: '#f3f4f6' }} />
                        <Bar dataKey="index" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="COL Index" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
