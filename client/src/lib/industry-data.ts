export interface IndustryData {
  industry: string;
  averageRaise: number;
  medianRaise: number;
  topQuartileRaise: number;
  year: number;
  description?: string;
  trends?: string[];
}

export const INDUSTRIES = [
  'Technology',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Retail',
  'Education',
  'Government',
  'Non-Profit',
  'Construction',
  'Energy',
  'Media',
  'Hospitality'
];

export const DEFAULT_INDUSTRY_DATA: IndustryData[] = [
  {
    industry: 'Technology',
    averageRaise: 4.2,
    medianRaise: 4.0,
    topQuartileRaise: 6.5,
    year: 2025,
    description: 'Above-market raises driven by high demand for technical skills',
    trends: ['AI/ML specialization premiums', 'Remote work salary parity', 'Cloud computing expertise']
  },
  {
    industry: 'Healthcare',
    averageRaise: 3.8,
    medianRaise: 3.5,
    topQuartileRaise: 5.2,
    year: 2025,
    description: 'Steady growth with regional variations',
    trends: ['Nursing shortage premiums', 'Telehealth expansion', 'Specialized care demand']
  },
  {
    industry: 'Finance',
    averageRaise: 4.0,
    medianRaise: 3.8,
    topQuartileRaise: 5.8,
    year: 2025,
    description: 'Strong performance with fintech integration',
    trends: ['Digital banking transformation', 'Risk management premiums', 'Cryptocurrency expertise']
  },
  {
    industry: 'Manufacturing',
    averageRaise: 3.5,
    medianRaise: 3.2,
    topQuartileRaise: 4.8,
    year: 2025,
    description: 'Moderate growth with automation impact',
    trends: ['Automation skills premium', 'Supply chain expertise', 'Sustainability focus']
  },
  {
    industry: 'Retail',
    averageRaise: 3.2,
    medianRaise: 3.0,
    topQuartileRaise: 4.2,
    year: 2025,
    description: 'Below-market average with e-commerce growth',
    trends: ['E-commerce specialization', 'Customer experience focus', 'Omnichannel expertise']
  }
];

export function getIndustryComparison(userRaise: number, industry: string): {
  status: 'above' | 'average' | 'below';
  message: string;
  percentile?: number;
} {
  const industryData = DEFAULT_INDUSTRY_DATA.find(d => d.industry === industry);
  
  if (!industryData) {
    return {
      status: 'average',
      message: 'No industry data available for comparison'
    };
  }

  if (userRaise >= industryData.topQuartileRaise) {
    return {
      status: 'above',
      message: `Excellent! Your raise is in the top 25% for ${industry}`,
      percentile: 75
    };
  } else if (userRaise >= industryData.averageRaise) {
    return {
      status: 'above',
      message: `Great! Your raise is above average for ${industry}`,
      percentile: 60
    };
  } else if (userRaise >= industryData.medianRaise) {
    return {
      status: 'average',
      message: `Your raise is around the median for ${industry}`,
      percentile: 50
    };
  } else {
    return {
      status: 'below',
      message: `Your raise is below the industry median for ${industry}`,
      percentile: 30
    };
  }
}

export function getInflationAdjustedAnalysis(nominalRaise: number): {
  realRaise: number;
  message: string;
  status: 'positive' | 'neutral' | 'negative';
} {
  const CURRENT_INFLATION = 3.1;
  const realRaise = nominalRaise - CURRENT_INFLATION;

  if (realRaise > 1) {
    return {
      realRaise,
      message: `Strong real income growth of ${realRaise.toFixed(1)}% after inflation`,
      status: 'positive'
    };
  } else if (realRaise > 0) {
    return {
      realRaise,
      message: `Modest real income growth of ${realRaise.toFixed(1)}% after inflation`,
      status: 'positive'
    };
  } else if (realRaise >= -0.5) {
    return {
      realRaise,
      message: `Your purchasing power is roughly maintained`,
      status: 'neutral'
    };
  } else {
    return {
      realRaise,
      message: `Your real income decreased by ${Math.abs(realRaise).toFixed(1)}% due to inflation`,
      status: 'negative'
    };
  }
}
