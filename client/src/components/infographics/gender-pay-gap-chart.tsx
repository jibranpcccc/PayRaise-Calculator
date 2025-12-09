import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { group: "All Earners", men: 1.00, women: 0.82 },
    { group: "Ages 25-34", men: 1.00, women: 0.92 },
    { group: "Ages 35-44", men: 1.00, women: 0.83 },
    { group: "Ages 45-54", men: 1.00, women: 0.79 },
];

export function GenderPayGapChart() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Gender Pay Gap by Age Group (Dollar for Dollar)</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="group" />
                        <YAxis tickFormatter={(val) => `$${val.toFixed(2)}`} domain={[0, 1.2]} />
                        <Tooltip formatter={(value: number) => [`$${value.toFixed(2)}`, "Earnings per $1.00"]} />
                        <Legend />
                        <Bar name="Men" dataKey="men" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                        <Bar name="Women" dataKey="women" fill="#ec4899" radius={[4, 4, 0, 0]} />
                        <ReferenceLine y={1} stroke="red" strokeDasharray="3 3" label="Equal Pay" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
