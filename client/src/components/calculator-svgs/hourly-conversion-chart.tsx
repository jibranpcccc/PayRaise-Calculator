interface HourlyConversionChartProps {
  annualSalary: number;
  hourlyRate: number;
  weeklyHours: number;
  weeksPerYear: number;
}

export function HourlyConversionChart({ annualSalary, hourlyRate, weeklyHours, weeksPerYear }: HourlyConversionChartProps) {
  const totalHours = weeklyHours * weeksPerYear;
  const monthlyRate = hourlyRate * (weeklyHours * 52 / 12);
  const weeklyRate = hourlyRate * weeklyHours;

  return (
    <div className="w-full bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Salary Breakdown Visualization</h3>
        <p className="text-sm text-gray-600">How your annual salary converts to different time periods</p>
      </div>

      <svg viewBox="0 0 400 280" className="w-full h-64">
        <defs>
          <linearGradient id="salaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="hourlyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="weeklyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="monthlyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect x="30" y="30" width="340" height="220" fill="#FEFEFE" stroke="#E5E7EB" strokeWidth="2" rx="8" />

        {/* Title */}
        <text x="200" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1F2937">
          Salary Conversion Breakdown
        </text>

        {/* Annual Bar */}
        <rect x="60" y="70" width="280" height="35" fill="url(#salaryGradient)" rx="4">
          <animate attributeName="width" from="0" to="280" dur="1.5s" begin="0s" />
        </rect>
        <text x="70" y="92" fill="white" fontSize="14" fontWeight="bold">
          Annual: ${annualSalary.toLocaleString()}
        </text>

        {/* Monthly Bar */}
        <rect x="60" y="115" width={`${(monthlyRate / (annualSalary / 12)) * 280}`} height="35" fill="url(#monthlyGradient)" rx="4">
          <animate attributeName="width" from="0" to={`${(monthlyRate / (annualSalary / 12)) * 280}`} dur="1.5s" begin="0.3s" />
        </rect>
        <text x="70" y="137" fill="white" fontSize="14" fontWeight="bold">
          Monthly: ${monthlyRate.toLocaleString()}
        </text>

        {/* Weekly Bar */}
        <rect x="60" y="160" width={`${(weeklyRate / (annualSalary / 52)) * 280}`} height="35" fill="url(#weeklyGradient)" rx="4">
          <animate attributeName="width" from="0" to={`${(weeklyRate / (annualSalary / 52)) * 280}`} dur="1.5s" begin="0.6s" />
        </rect>
        <text x="70" y="182" fill="white" fontSize="14" fontWeight="bold">
          Weekly: ${weeklyRate.toLocaleString()}
        </text>

        {/* Hourly Bar */}
        <rect x="60" y="205" width={`${(hourlyRate / (annualSalary / totalHours)) * 280}`} height="35" fill="url(#hourlyGradient)" rx="4">
          <animate attributeName="width" from="0" to={`${(hourlyRate / (annualSalary / totalHours)) * 280}`} dur="1.5s" begin="0.9s" />
        </rect>
        <text x="70" y="227" fill="white" fontSize="14" fontWeight="bold">
          Hourly: ${hourlyRate.toFixed(2)}
        </text>

        {/* Hours worked indicator */}
        <text x="200" y="265" textAnchor="middle" fontSize="12" fill="#6B7280">
          Based on {weeklyHours} hours/week × {weeksPerYear} weeks = {totalHours} hours/year
        </text>
      </svg>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 text-center text-sm">
        <div className="bg-green-100 rounded-lg p-3">
          <div className="text-green-800 font-semibold">Annual</div>
          <div className="text-green-900 font-bold">${annualSalary.toLocaleString()}</div>
        </div>
        <div className="bg-yellow-100 rounded-lg p-3">
          <div className="text-yellow-800 font-semibold">Monthly</div>
          <div className="text-yellow-900 font-bold">${Math.round(monthlyRate).toLocaleString()}</div>
        </div>
        <div className="bg-purple-100 rounded-lg p-3">
          <div className="text-purple-800 font-semibold">Weekly</div>
          <div className="text-purple-900 font-bold">${Math.round(weeklyRate).toLocaleString()}</div>
        </div>
        <div className="bg-blue-100 rounded-lg p-3">
          <div className="text-blue-800 font-semibold">Hourly</div>
          <div className="text-blue-900 font-bold">${hourlyRate.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}