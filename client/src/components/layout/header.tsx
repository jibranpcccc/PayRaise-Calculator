import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Calculator } from "lucide-react";

export function Header() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location === '/') return true;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/tools', label: 'All Calculators' },
    { href: '/guides', label: 'Salary Guides' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-bold text-primary flex items-center">
                <Calculator className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                <span className="hidden sm:inline">PayRaise Calculator</span>
                <span className="sm:hidden">PayRaise</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-blue-50 shadow-sm'
                      : 'text-gray-600 hover:text-primary hover:bg-blue-50'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/salary-negotiation-complete-guide">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  Negotiation Guide
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Quick Calculator Button for Mobile */}
            <Link href="/">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-3 py-2 text-sm rounded-lg hidden sm:inline-flex">
                <Calculator className="h-4 w-4 mr-1" />
                Calculate
              </Button>
            </Link>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px]">
                <div className="flex flex-col mt-8">
                  {/* Mobile Header */}
                  <div className="mb-8 pb-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Navigation</h2>
                    <p className="text-sm text-gray-600">Access all our salary tools and guides</p>
                  </div>
                  
                  {/* Main Navigation */}
                  <div className="space-y-3 mb-8">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <div className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive(item.href)
                            ? 'text-primary font-semibold bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
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
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg rounded-xl">
                        Negotiation Guide
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Mobile Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
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
    </nav>
  );
}
