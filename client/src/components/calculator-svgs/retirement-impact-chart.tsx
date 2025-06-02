interface RetirementImpactChartProps {
  currentContribution: number;
  newContribution: number;
  employerMatch: number;
  annualGrowth: number;
  yearsToRetirement: number;
}

export function RetirementImpactChart({ 
  currentContribution, 
  newContribution, 
  employerMatch, 
  annualGrowth,
  yearsToRetirement 
}: RetirementImpactChartProps) {
  const additionalContribution = newContribution - currentContribution;
  const totalWithMatch = newContribution + employerMatch;
  
  // Calculate compound growth over years
  const futureValue = totalWithMatch * Math.pow(1 + (annualGrowth / 100), yearsToRetirement);
  const currentFutureValue = (currentContribution + employerMatch) * Math.pow(1 + (annualGrowth / 100), yearsToRetirement);
  const additionalRetirementValue = futureValue - currentFutureValue;

  return (
    <div className="w-full bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Retirement Savings Impact</h3>
        <p className="text-sm text-gray-600">How your raise boosts retirement growth</p>
      </div>

      <svg viewBox="0 0 400 320" className="w-full h-72">
        <defs>
          <linearGradient id="currentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="raiseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="matchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect x="30" y="40" width="340" height="240" fill="#FEFBFF" stroke="#E0E7FF" strokeWidth="2" rx="8" />

        {/* Y-axis */}
        <line x1="60" y1="60" x2="60" y2="260" stroke="#6B7280" strokeWidth="2" />
        
        {/* X-axis */}
        <line x1="60" y1="260" x2="350" y2="260" stroke="#6B7280" strokeWidth="2" />

        {/* Current contribution bar */}
        <rect x="100" y={260 - (currentContribution / newContribution) * 150} width="40" height={(currentContribution / newContribution) * 150} fill="url(#currentGradient)" rx="4">
          <animate attributeName="height" from="0" to={(currentContribution / newContribution) * 150} dur="1.5s" begin="0s" />
          <animate attributeName="y" from="260" to={260 - (currentContribution / newContribution) * 150} dur="1.5s" begin="0s" />
        </rect>
        <text x="120" y="275" textAnchor="middle" fontSize="12" fill="#374151">Current</text>

        {/* Additional contribution bar */}
        <rect x="100" y={260 - 150} width="40" height={(additionalContribution / newContribution) * 150} fill="url(#raiseGradient)" rx="4">
          <animate attributeName="height" from="0" to={(additionalContribution / newContribution) * 150} dur="1.5s" begin="0.5s" />
          <animate attributeName="y" from={260 - (currentContribution / newContribution) * 150} to={260 - 150} dur="1.5s" begin="0.5s" />
        </rect>

        {/* Employer match bar */}
        <rect x="170" y={260 - (employerMatch / newContribution) * 150} width="40" height={(employerMatch / newContribution) * 150} fill="url(#matchGradient)" rx="4">
          <animate attributeName="height" from="0" to={(employerMatch / newContribution) * 150} dur="1.5s" begin="1s" />
          <animate attributeName="y" from="260" to={260 - (employerMatch / newContribution) * 150} dur="1.5s" begin="1s" />
        </rect>
        <text x="190" y="275" textAnchor="middle" fontSize="12" fill="#374151">Match</text>

        {/* Future value representation */}
        <rect x="250" y="80" width="60" height="180" fill="url(#currentGradient)" opacity="0.3" rx="4">
          <animate attributeName="height" from="0" to="180" dur="2s" begin="1.5s" />
          <animate attributeName="y" from="260" to="80" dur="2s" begin="1.5s" />
        </rect>
        <text x="280" y="275" textAnchor="middle" fontSize="12" fill="#374151">@Retirement</text>

        {/* Growth arrow */}
        <path d="M 220 160 Q 235 140 250 160" stroke="#10B981" strokeWidth="3" fill="none" markerEnd="url(#growthArrow)">
          <animate attributeName="stroke-dasharray" values="0,100;100,100" dur="1s" begin="2s" />
        </path>

        <defs>
          <marker id="growthArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
          </marker>
        </defs>

        {/* Labels */}
        <text x="200" y="25" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1F2937">
          401(k) Contribution Impact
        </text>

        <text x="120" y={260 - 75} textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
          +${additionalContribution.toLocaleString()}
        </text>

        <text x="190" y={260 - (employerMatch / newContribution) * 75} textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
          ${employerMatch.toLocaleString()}
        </text>

        <text x="280" y="170" textAnchor="middle" fontSize="12" fill="#7C3AED" fontWeight="bold">
          ${Math.round(futureValue / 1000)}K
        </text>

        {/* Y-axis labels */}
        <text x="45" y="265" textAnchor="end" fontSize="10" fill="#6B7280">$0</text>
        <text x="45" y="160" textAnchor="end" fontSize="10" fill="#6B7280">${Math.round(newContribution/2).toLocaleString()}</text>
        <text x="45" y="65" textAnchor="end" fontSize="10" fill="#6B7280">${newContribution.toLocaleString()}</text>

        {/* Bottom insight */}
        <text x="200" y="305" textAnchor="middle" fontSize="12" fill="#374151">
          Additional retirement value: ${Math.round(additionalRetirementValue / 1000)}K in {yearsToRetirement} years
        </text>
      </svg>

      <div className="grid grid-cols-3 gap-4 mt-6 text-center">
        <div className="bg-purple-100 rounded-lg p-3">
          <div className="text-purple-800 font-semibold text-sm">New Annual</div>
          <div className="text-purple-900 font-bold">${newContribution.toLocaleString()}</div>
        </div>
        <div className="bg-yellow-100 rounded-lg p-3">
          <div className="text-yellow-800 font-semibold text-sm">Employer Match</div>
          <div className="text-yellow-900 font-bold">${employerMatch.toLocaleString()}</div>
        </div>
        <div className="bg-green-100 rounded-lg p-3">
          <div className="text-green-800 font-semibold text-sm">Future Value</div>
          <div className="text-green-900 font-bold">${Math.round(futureValue / 1000)}K</div>
        </div>
      </div>
    </div>
  );
}