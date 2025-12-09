import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { year: "Year 1", raise: 52500, bonus: 52500 },
    { year: "Year 2", raise: 55125, bonus: 52850 }, // Raise calculated on new base, Bonus investment returns
    { year: "Year 3", raise: 57881, bonus: 53220 },
    { year: "Year 4", raise: 60775, bonus: 53613 },
    { year: "Year 5", raise: 63814, bonus: 54029 },
];

export function RaiseVsBonusChart() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>5-Year Value: 5% Raise vs $2,500 Bonus (Invested)</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis domain={['dataMin - 1000', 'auto']} tickFormatter={(val) => `$${val / 1000}k`} />
                        <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, "Total Value"]} />
                        <Legend />
                        <Line type="monotone" dataKey="raise" stroke="#2563eb" strokeWidth={3} name="Salary Raise Scenario" />
                        <Line type="monotone" dataKey="bonus" stroke="#16a34a" strokeWidth={3} name="One-Time Bonus Scenario" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
