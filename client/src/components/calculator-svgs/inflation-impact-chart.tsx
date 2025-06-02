interface InflationImpactChartProps {
  nominalRaise: number;
  realRaise: number;
  inflationRate: number;
  years?: number;
}

export function InflationImpactChart({ nominalRaise, realRaise, inflationRate, years = 1 }: InflationImpactChartProps) {
  const realPercentage = (realRaise / nominalRaise) * 100;
  const inflationImpact = nominalRaise - realRaise;
  const inflationPercentage = (inflationImpact / nominalRaise) * 100;

  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Inflation Impact Analysis</h3>
        <p className="text-sm text-gray-600">Your raise's real purchasing power</p>
      </div>

      <svg viewBox="0 0 400 300" className="w-full h-64">
        <defs>
          <linearGradient id="nominalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="realGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="inflationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <pattern id="erosionPattern" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="#FEF3C7"/>
            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#F59E0B" strokeWidth="0.5"/>
          </pattern>
        </defs>

        {/* Background */}
        <rect x="50" y="50" width="300" height="200" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="2" rx="8" />

        {/* Nominal Raise Bar */}
        <rect x="70" y="80" width="260" height="50" fill="url(#nominalGradient)" rx="4">
          <animate attributeName="width" from="0" to="260" dur="1.5s" begin="0s" />
        </rect>
        <text x="75" y="110" fill="white" fontSize="14" fontWeight="bold">
          Nominal Raise: {nominalRaise.toFixed(1)}%
        </text>

        {/* Real Raise Bar */}
        <rect x="70" y="150" width={`${(realPercentage / 100) * 260}`} height="50" fill="url(#realGradient)" rx="4">
          <animate attributeName="width" from="0" to={`${(realPercentage / 100) * 260}`} dur="1.5s" begin="0.5s" />
        </rect>
        <text x="75" y="180" fill="white" fontSize="14" fontWeight="bold">
          Real Raise: {realRaise.toFixed(1)}%
        </text>

        {/* Inflation Erosion */}
        <rect 
          x={`${70 + (realPercentage / 100) * 260}`} 
          y="150" 
          width={`${(inflationPercentage / 100) * 260}`} 
          height="50" 
          fill="url(#erosionPattern)" 
          stroke="#F59E0B" 
          strokeWidth="2"
          rx="4"
        >
          <animate attributeName="width" from="0" to={`${(inflationPercentage / 100) * 260}`} dur="1.5s" begin="1s" />
        </rect>

        {/* Inflation arrow and label */}
        <path 
          d={`M ${70 + (realPercentage / 100) * 260 + (inflationPercentage / 100) * 260 / 2} 140 L ${70 + (realPercentage / 100) * 260 + (inflationPercentage / 100) * 260 / 2} 120`}
          stroke="#F59E0B" 
          strokeWidth="2" 
          markerEnd="url(#arrowhead)"
        />
        <text 
          x={`${70 + (realPercentage / 100) * 260 + (inflationPercentage / 100) * 260 / 2}`} 
          y="115" 
          textAnchor="middle" 
          fontSize="12" 
          fill="#D97706" 
          fontWeight="bold"
        >
          -{inflationRate}% Inflation
        </text>

        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#F59E0B" />
          </marker>
        </defs>

        {/* Title */}
        <text x="200" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1F2937">
          Inflation vs. Your Raise
        </text>

        {/* Bottom insight */}
        <text x="200" y="280" textAnchor="middle" fontSize="12" fill="#374151">
          Real purchasing power: {realPercentage.toFixed(1)}% of nominal raise
        </text>
      </svg>

      <div className="grid grid-cols-3 gap-4 mt-6 text-center">
        <div className="bg-blue-100 rounded-lg p-3">
          <div className="text-blue-800 font-semibold text-sm">Nominal Raise</div>
          <div className="text-blue-900 font-bold">{nominalRaise.toFixed(1)}%</div>
        </div>
        <div className="bg-green-100 rounded-lg p-3">
          <div className="text-green-800 font-semibold text-sm">Real Value</div>
          <div className="text-green-900 font-bold">{realRaise.toFixed(1)}%</div>
        </div>
        <div className="bg-orange-100 rounded-lg p-3">
          <div className="text-orange-800 font-semibold text-sm">Lost to Inflation</div>
          <div className="text-orange-900 font-bold">{inflationImpact.toFixed(1)}%</div>
        </div>
      </div>
    </div>
  );
}