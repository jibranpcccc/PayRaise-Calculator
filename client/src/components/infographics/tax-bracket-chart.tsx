import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { name: "Take Home Pay", value: 72, color: "#22c55e" },
    { name: "Federal Tax", value: 12, color: "#3b82f6" },
    { name: "Social Security", value: 6.2, color: "#f59e0b" },
    { name: "Medicare", value: 1.45, color: "#ef4444" },
    { name: "State Tax (Avg)", value: 8.35, color: "#6366f1" },
];

export function TaxBracketChart() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Where Your Raise Goes (Average Breakdown)</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, "Allocation"]} />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
