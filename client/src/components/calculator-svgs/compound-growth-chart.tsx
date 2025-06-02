interface CompoundGrowthChartProps {
  projections: Array<{
    year: number;
    salary: number;
    totalIncrease: number;
  }>;
  currentSalary: number;
}

export function CompoundGrowthChart({ projections, currentSalary }: CompoundGrowthChartProps) {
  if (!projections.length) return null;

  const maxSalary = Math.max(...projections.map(p => p.salary));
  const chartHeight = 200;
  const chartWidth = 400;
  const padding = 40;

  // Calculate points for the curve
  const points = projections.map((projection, index) => {
    const x = padding + (index / (projections.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((projection.salary - currentSalary) / (maxSalary - currentSalary)) * (chartHeight - 2 * padding);
    return { x, y, ...projection };
  });

  // Add starting point
  const startPoint = { x: padding, y: chartHeight - padding, year: 0, salary: currentSalary };
  const allPoints = [startPoint, ...points];

  // Create path for the curve
  const pathData = allPoints.map((point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`;
    return `L ${point.x} ${point.y}`;
  }).join(' ');

  return (
    <div className="w-full max-w-lg mx-auto">
      <svg width="100%" height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="overflow-visible">
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width={chartWidth} height={chartHeight} fill="url(#grid)" />

        {/* Chart area gradient */}
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Area under curve */}
        <path
          d={`${pathData} L ${allPoints[allPoints.length - 1].x} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`}
          fill="url(#areaGradient)"
        />

        {/* Main growth curve */}
        <path
          d={pathData}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {allPoints.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#ffffff"
              stroke="#3b82f6"
              strokeWidth="3"
              className="hover:scale-125 transition-transform cursor-pointer"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="3"
              fill="#3b82f6"
            />
          </g>
        ))}

        {/* Y-axis labels */}
        <text x="10" y={padding} textAnchor="start" className="text-xs fill-gray-600" fontSize="10">
          ${Math.round(maxSalary / 1000)}k
        </text>
        <text x="10" y={chartHeight - padding + 5} textAnchor="start" className="text-xs fill-gray-600" fontSize="10">
          ${Math.round(currentSalary / 1000)}k
        </text>

        {/* X-axis labels */}
        <text x={padding} y={chartHeight - 10} textAnchor="middle" className="text-xs fill-gray-600" fontSize="10">
          Start
        </text>
        <text x={chartWidth - padding} y={chartHeight - 10} textAnchor="middle" className="text-xs fill-gray-600" fontSize="10">
          Year {projections.length}
        </text>

        {/* Title */}
        <text x={chartWidth / 2} y="20" textAnchor="middle" className="text-sm font-semibold fill-gray-800" fontSize="14">
          Compound Salary Growth Projection
        </text>
      </svg>

      {/* Interactive legend */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">
            ${(maxSalary - currentSalary).toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Growth</div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {((maxSalary / currentSalary - 1) * 100).toFixed(1)}%
          </div>
          <div className="text-sm text-gray-600">Total Increase</div>
        </div>
      </div>
    </div>
  );
}