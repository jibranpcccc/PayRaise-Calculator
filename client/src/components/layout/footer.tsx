import { Link } from "wouter";
import { Calculator, TrendingUp, BookOpen, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const popularTools = [
    { href: '/', label: 'Pay Raise Calculator', description: 'Calculate your new salary' },
    { href: '/tools/state-wise-raise-calculator', label: 'State-Wise Calculator', description: 'Location-specific analysis' },
    { href: '/tools/raise-after-deductions-calculator', label: 'Net Pay Calculator', description: 'Real take-home increase' },
    { href: '/tools/salary-vs-total-compensation-calculator', label: 'Total Compensation', description: 'Complete package analysis' },
    { href: '/tools/compound-raise-calculator', label: 'Compound Calculator', description: 'Multi-year projections' },
    { href: '/tools/inflation-adjusted-raise-calculator', label: 'Inflation Calculator', description: 'Real purchasing power' },
  ];

  const essentialGuides = [
    { href: '/salary-negotiation-complete-guide', label: 'Negotiation Guide', description: 'Complete strategies' },
    { href: '/guides/top-raise-mistakes-to-avoid', label: 'Avoid Mistakes', description: 'Common pitfalls' },
    { href: '/guides/raise-calculator-vs-salary-calculator', label: 'Tool Comparison', description: 'Which to use when' },
    { href: '/blog/how-much-raise-to-ask-for-based-on-role', label: 'Role-Based Raises', description: 'Position-specific advice' },
    { href: '/blog/best-time-of-year-to-negotiate-raise', label: 'Timing Strategy', description: 'Optimal timing guide' },
    { href: '/industry-raise-benchmarks-2025', label: '2025 Benchmarks', description: 'Current market data' },
  ];

  const quickStats = [
    { label: 'Tools Available', value: '12+', icon: <Calculator className="h-5 w-5" /> },
    { label: 'Users Helped', value: '50,000+', icon: <TrendingUp className="h-5 w-5" /> },
    { label: 'Guides & Articles', value: '25+', icon: <BookOpen className="h-5 w-5" /> },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section with CTA */}
        <div className="text-center mb-12 pb-12 border-b border-gray-700">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Calculate Your <span className="text-gradient-primary">Perfect Raise?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Join 50,000+ professionals using our advanced salary calculators for successful negotiations
          </p>
          <Link href="/">
            <button className="btn-primary-gradient px-8 py-4 text-lg font-semibold rounded-lg">
              Start Calculating Now
            </button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="flex justify-center mb-3 text-blue-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">PayRaise Calculator</h3>
                <p className="text-blue-300 text-sm">Professional Salary Tools</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The most comprehensive suite of salary calculation tools designed for employees, 
              HR professionals, and career coaches. Get accurate raise calculations with tax 
              impact analysis and industry benchmarks.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <span>support@payraisepercentagecalculator.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <span>1-800-PAYRAISE</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
          
          {/* Popular Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Popular Calculators</h4>
            <ul className="space-y-3">
              {popularTools.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href}>
                    <div className="group cursor-pointer">
                      <div className="font-medium text-gray-300 group-hover:text-white transition-colors">
                        {tool.label}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300">
                        {tool.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Essential Guides */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Essential Guides</h4>
            <ul className="space-y-3">
              {essentialGuides.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href}>
                    <div className="group cursor-pointer">
                      <div className="font-medium text-gray-300 group-hover:text-white transition-colors">
                        {guide.label}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300">
                        {guide.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/tools">
                  <span className="hover:text-white transition-colors">All Calculator Tools</span>
                </Link>
              </li>
              <li>
                <Link href="/guides">
                  <span className="hover:text-white transition-colors">Complete Guide Library</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-white transition-colors">Salary Insights Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <span className="hover:text-white transition-colors">About Our Mission</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <span className="hover:text-white transition-colors">Get Support</span>
                </Link>
              </li>
              <li>
                <Link href="/faq-pay-raise-calculator">
                  <span className="hover:text-white transition-colors">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/calculator-accuracy-methodology">
                  <span className="hover:text-white transition-colors">Our Methodology</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-400 text-sm">
              <p className="mb-2 md:mb-0">
                &copy; {currentYear} PayRaisePercentageCalculator.com. All rights reserved.
              </p>
              <p className="text-xs">
                Professional salary calculation tools for informed career decisions and successful negotiations.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Last Updated:</span> January 2025 |{' '}
                <span className="font-semibold">Data Sources:</span> BLS, Market Research
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
