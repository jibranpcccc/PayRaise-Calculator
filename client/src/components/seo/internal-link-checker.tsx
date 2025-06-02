// Internal Link Audit and Enhancement Component
import { Link } from "wouter";

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  anchor?: string;
}

export function InternalLink({ href, children, className, title, anchor }: InternalLinkProps) {
  const fullHref = anchor ? `${href}#${anchor}` : href;
  
  return (
    <Link 
      href={fullHref}
      className={className} 
      title={title}
      // Add tracking for internal link analytics
      data-internal-link="true"
      data-link-category="navigation"
    >
      {children}
    </Link>
  );
}

// Strategic internal linking patterns for SEO
export const InternalLinkingStrategy = {
  // Hub pages that should link to related content
  hubPages: {
    homepage: [
      "/tools/compound-raise-calculator",
      "/guides/understanding-pay-raises-complete", 
      "/salary-negotiation-complete-guide",
      "/industry-raise-benchmarks-2025",
      "/blog/average-raise-by-industry-2025"
    ],
    toolsIndex: [
      "/guides/market-value-salary-research",
      "/blog/raise-negotiation-scripts-templates",
      "/guides/factors-influencing-pay-raises"
    ],
    guidesIndex: [
      "/tools/salary-negotiation-calculator",
      "/blog/when-ask-for-raise-optimal-timing",
      "/industry-raise-benchmarks-2025"
    ],
    blogIndex: [
      "/guides/understanding-pay-raises-complete",
      "/tools/compound-raise-calculator", 
      "/salary-negotiation-complete-guide"
    ]
  },

  // Content clusters for topical authority
  clusters: {
    calculatorTools: {
      pillar: "/tools",
      supporting: [
        "/tools/compound-raise-calculator",
        "/tools/inflation-adjusted-raise-calculator", 
        "/tools/salary-negotiation-calculator",
        "/tools/remote-work-location-adjuster"
      ]
    },
    negotiationStrategy: {
      pillar: "/salary-negotiation-complete-guide",
      supporting: [
        "/guides/negotiating-salary-increase-strategies",
        "/blog/raise-negotiation-scripts-templates",
        "/blog/when-ask-for-raise-optimal-timing",
        "/tools/salary-negotiation-calculator"
      ]
    },
    marketData: {
      pillar: "/industry-raise-benchmarks-2025", 
      supporting: [
        "/blog/average-raise-by-industry-2025",
        "/guides/market-value-salary-research",
        "/guides/average-pay-raises-data-trends",
        "/blog/inflation-real-salary-impact"
      ]
    },
    raiseCalculations: {
      pillar: "/",
      supporting: [
        "/pay-raise-formulas-guide",
        "/how-pay-raise-calculator-works", 
        "/calculator-accuracy-methodology",
        "/blog/3-vs-5-percent-raise-long-term-impact"
      ]
    }
  },

  // Related content suggestions for each page type
  relatedContent: {
    calculator: [
      "View industry benchmarks",
      "Read negotiation guide", 
      "Explore related tools",
      "Understand the formulas"
    ],
    guide: [
      "Use the calculator",
      "See real examples",
      "Read related articles", 
      "Get negotiation scripts"
    ],
    blog: [
      "Calculate your scenario",
      "Read comprehensive guide",
      "View industry data",
      "Explore tools"
    ]
  }
};

// SEO-optimized link text patterns
export const LinkTextPatterns = {
  calculators: [
    "Calculate your raise",
    "Use our calculator", 
    "Try the tool",
    "Calculate now",
    "Get your results"
  ],
  guides: [
    "Read the complete guide",
    "Learn the strategies",
    "Get expert advice", 
    "Understand the process",
    "Master the technique"
  ],
  data: [
    "See current data",
    "View benchmarks",
    "Check industry rates",
    "Compare your situation", 
    "Analyze the trends"
  ],
  navigation: [
    "Explore all tools",
    "Browse guides",
    "Read latest insights",
    "View resources",
    "Get started"
  ]
};