import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Calculator, TrendingUp, BookOpen, Users, Star } from "lucide-react";

export function Header() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location === '/') return true;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };

  const calculatorTools = [
    { href: '/tools/compound-raise-calculator', label: 'Compound Raise Calculator', description: 'Multi-year growth projections' },
    { href: '/tools/pay-raise-tax-impact-calculator', label: 'Tax Impact Calculator', description: 'Net take-home analysis' },
    { href: '/tools/inflation-adjusted-raise-calculator', label: 'Inflation Calculator', description: 'Real purchasing power' },
    { href: '/tools/raise-impact-retirement-savings-calculator', label: 'Retirement Impact', description: '401(k) contribution effects' },
  ];

  const guideCategories = [
    { href: '/guides/negotiating-salary-increase-strategies', label: 'Negotiation Strategies', description: 'Proven tactics and scripts' },
    { href: '/guides/market-value-salary-research', label: 'Market Research', description: 'Know your worth' },
    { href: '/guides/performance-review-raise-preparation', label: 'Performance Reviews', description: 'Preparation guides' },
    { href: '/industry-raise-benchmarks-2025', label: 'Industry Benchmarks', description: '2025 salary data' },
  ];

  const mobileNavItems = [
    { href: '/', label: 'Home' },
    { href: '/tools', label: 'All Calculators' },
    { href: '/guides', label: 'Salary Guides' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header className="bg-white shadow-lg border-b-2 border-blue-100 sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Calculator className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                    <span className="hidden sm:inline">PayRaise Calculator</span>
                    <span className="sm:hidden">PayRaise</span>
                  </h1>
                  <p className="text-xs text-gray-500 hidden md:block">Professional Salary Tools</p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className={`font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-blue-700 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Home
              </Link>
              
              <Link href="/tools" className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                isActive('/tools') 
                  ? 'text-blue-700 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                <TrendingUp className="w-4 h-4" />
                <span>Calculators</span>
              </Link>

              <Link href="/guides" className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                isActive('/guides') 
                  ? 'text-blue-700 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                <BookOpen className="w-4 h-4" />
                <span>Guides</span>
              </Link>

              <Link href="/blog" className={`font-medium transition-colors duration-200 ${
                isActive('/blog') 
                  ? 'text-blue-700 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Blog
              </Link>

              {/* CTA Button */}
              <Link href="/salary-negotiation-complete-guide">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  <Users className="w-4 h-4 mr-2" />
                  Negotiation Guide
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link href="/">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-4 py-2 text-sm rounded-lg shadow-lg hidden sm:inline-flex">
                <Calculator className="h-4 w-4 mr-1" />
                Calculate
              </Button>
            </Link>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="p-2 border-2 border-blue-200 hover:bg-blue-50">
                  <Menu className="h-6 w-6 text-blue-600" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="flex flex-col mt-8">
                  {/* Mobile Header */}
                  <div className="mb-8 pb-6 border-b border-blue-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <Calculator className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
                    </div>
                    <p className="text-sm text-gray-600">Access all our salary tools and guides</p>
                  </div>
                  
                  {/* Main Navigation */}
                  <div className="space-y-3 mb-8">
                    {mobileNavItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <div className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive(item.href)
                            ? 'text-blue-700 font-semibold bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 shadow-sm'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-white/70'
                        }`}>
                          <span className="text-lg">{item.label}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Mobile CTA Buttons */}
                  <div className="space-y-3">
                    <Link href="/">
                      <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 text-lg rounded-xl shadow-lg">
                        <Calculator className="h-5 w-5 mr-2" />
                        Quick Calculate
                      </Button>
                    </Link>
                    <Link href="/salary-negotiation-complete-guide">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg">
                        <Users className="h-5 w-5 mr-2" />
                        Negotiation Guide
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Mobile Footer */}
                  <div className="mt-8 pt-6 border-t border-blue-200 text-center">
                    <p className="text-xs text-gray-500">
                      Professional salary tools for career advancement
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}