import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Zap, Heart, Landmark, ShoppingBag, GraduationCap, Monitor, Hammer } from "lucide-react";

const benchmarks = [
    { industry: "Technology", raise: "4.8%", icon: Monitor, color: "text-blue-600", bg: "bg-blue-100" },
    { industry: "Energy", raise: "4.5%", icon: Zap, color: "text-yellow-600", bg: "bg-yellow-100" },
    { industry: "Healthcare", raise: "4.1%", icon: Heart, color: "text-red-600", bg: "bg-red-100" },
    { industry: "Finance", raise: "3.9%", icon: Landmark, color: "text-green-600", bg: "bg-green-100" },
    { industry: "Retail", raise: "3.2%", icon: ShoppingBag, color: "text-purple-600", bg: "bg-purple-100" },
    { industry: "Education", raise: "3.0%", icon: GraduationCap, color: "text-indigo-600", bg: "bg-indigo-100" },
    { industry: "Construction", raise: "3.8%", icon: Hammer, color: "text-orange-600", bg: "bg-orange-100" },
    { industry: "Professional Svcs", raise: "4.0%", icon: Briefcase, color: "text-slate-600", bg: "bg-slate-100" },
];

export function IndustryBenchmarksGrid() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>2025 Industry Raise Benchmarks</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {benchmarks.map((item, index) => (
                        <div key={index} className={`flex flex-col items-center justify-center p-4 rounded-lg border ${item.bg} bg-opacity-30 hover:bg-opacity-50 transition-colors`}>
                            <div className={`p-3 rounded-full bg-white shadow-sm mb-3 ${item.color}`}>
                                <item.icon className="h-6 w-6" />
                            </div>
                            <span className="text-sm font-medium text-gray-600 text-center mb-1">{item.industry}</span>
                            <Badge variant="secondary" className="text-lg font-bold">{item.raise}</Badge>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
