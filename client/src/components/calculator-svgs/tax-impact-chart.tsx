interface TaxImpactChartProps {
  grossRaise: number;
  netRaise: number;
  taxAmount: number;
  effectiveTaxRate: number;
}

export function TaxImpactChart({ grossRaise, netRaise, taxAmount, effectiveTaxRate }: TaxImpactChartProps) {
  const grossPercentage = 100;
  const netPercentage = (netRaise / grossRaise) * 100;
  const taxPercentage = (taxAmount / grossRaise) * 100;

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Tax Impact Visualization</h3>
        <p className="text-sm text-gray-600">See how taxes affect your raise</p>
      </div>

      <svg viewBox="0 0 400 300" className="w-full h-64">
        <defs>
          <linearGradient id="grossGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="netGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="taxGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect x="50" y="50" width="300" height="200" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" rx="8" />

        {/* Gross Raise Bar */}
        <rect x="70" y="80" width="260" height="40" fill="url(#grossGradient)" rx="4">
          <animate attributeName="width" from="0" to="260" dur="1.5s" begin="0s" />
        </rect>
        <text x="75" y="105" fill="white" fontSize="14" fontWeight="bold">
          Gross Raise: ${grossRaise.toLocaleString()}
        </text>

        {/* Net Raise Bar */}
        <rect x="70" y="140" width={`${(netPercentage / 100) * 260}`} height="40" fill="url(#netGradient)" rx="4">
          <animate attributeName="width" from="0" to={`${(netPercentage / 100) * 260}`} dur="1.5s" begin="0.5s" />
        </rect>
        <text x="75" y="165" fill="white" fontSize="14" fontWeight="bold">
          Net Raise: ${netRaise.toLocaleString()}
        </text>

        {/* Tax Amount Bar */}
        <rect x={`${70 + (netPercentage / 100) * 260}`} y="140" width={`${(taxPercentage / 100) * 260}`} height="40" fill="url(#taxGradient)" rx="4">
          <animate attributeName="width" from="0" to={`${(taxPercentage / 100) * 260}`} dur="1.5s" begin="1s" />
        </rect>
        <text x={`${75 + (netPercentage / 100) * 260}`} y="165" fill="white" fontSize="12" fontWeight="bold">
          Tax: ${taxAmount.toLocaleString()}
        </text>

        {/* Labels */}
        <text x="200" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1F2937">
          Your Raise After Taxes
        </text>
        
        {/* Percentage labels */}
        <text x="370" y="105" textAnchor="end" fontSize="12" fill="#6B7280">100%</text>
        <text x="370" y="165" textAnchor="end" fontSize="12" fill="#6B7280">
          {netPercentage.toFixed(1)}%
        </text>

        {/* Effective tax rate display */}
        <text x="200" y="280" textAnchor="middle" fontSize="14" fontWeight="semibold" fill="#374151">
          Effective Tax Rate: {effectiveTaxRate.toFixed(1)}%
        </text>
      </svg>

      <div className="grid grid-cols-3 gap-4 mt-6 text-center">
        <div className="bg-blue-100 rounded-lg p-3">
          <div className="text-blue-800 font-semibold text-sm">Gross Raise</div>
          <div className="text-blue-900 font-bold">${grossRaise.toLocaleString()}</div>
        </div>
        <div className="bg-green-100 rounded-lg p-3">
          <div className="text-green-800 font-semibold text-sm">Net Take-Home</div>
          <div className="text-green-900 font-bold">${netRaise.toLocaleString()}</div>
        </div>
        <div className="bg-red-100 rounded-lg p-3">
          <div className="text-red-800 font-semibold text-sm">Tax Amount</div>
          <div className="text-red-900 font-bold">${taxAmount.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}