import { Link } from "wouter";
import { Calculator, Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const toolsLinks = [
    { href: '/', label: 'Pay Raise Calculator' },
    { href: '/tools/compound-raise-calculator', label: 'Compound Raise Calculator' },
    { href: '/tools/inflation-adjusted-raise-calculator', label: 'Inflation-Adjusted Calculator' },
    { href: '/tools/promotion-salary-calculator', label: 'Promotion Calculator' },
    { href: '/tools/pay-raise-tax-impact-calculator', label: 'Tax Impact Calculator' },
    { href: '/tools', label: 'View All Tools' },
  ];

  const guidesLinks = [
    { href: '/salary-negotiation-complete-guide', label: 'Salary Negotiation Guide' },
    { href: '/guides/understanding-pay-raises-complete', label: 'Understanding Pay Raises' },
    { href: '/industry-raise-benchmarks-2025', label: 'Industry Benchmarks' },
    { href: '/guides/performance-review-raise-preparation', label: 'Performance Review Prep' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq-pay-raise-calculator', label: 'FAQ' },
  ];

  const companyLinks = [
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/how-pay-raise-calculator-works', label: 'Our Methodology' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Calculator className="mr-2 h-6 w-6" />
              PayRaise Calculator
            </h3>
            <p className="text-gray-400 mb-4">
              Professional salary calculation tools trusted by 50,000+ employees for accurate 
              raise calculations and negotiation planning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Calculator Tools */}
          <div>
            <h4 className="font-semibold mb-4">Calculator Tools</h4>
            <ul className="space-y-2 text-gray-400">
              {toolsLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Guides & Resources */}
          <div>
            <h4 className="font-semibold mb-4">Guides & Resources</h4>
            <ul className="space-y-2 text-gray-400">
              {guidesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} PayRaisePercentageCalculator.com. All rights reserved. | 
            Professional salary calculation tools for informed career decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
