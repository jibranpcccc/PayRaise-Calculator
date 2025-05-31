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
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary flex items-center">
                <Calculator className="mr-2 h-6 w-6" />
                PayRaise Calculator
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className={`px-3 py-2 rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-primary font-medium'
                      : 'text-gray-600 hover:text-primary'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/salary-negotiation-complete-guide">
                <Button className="bg-primary text-white hover:bg-blue-700">
                  Negotiation Guide
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span className={`block px-3 py-2 rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'text-primary font-medium bg-blue-50'
                          : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                      }`}>
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <Link href="/salary-negotiation-complete-guide">
                    <Button className="w-full bg-primary text-white hover:bg-blue-700">
                      Negotiation Guide
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
