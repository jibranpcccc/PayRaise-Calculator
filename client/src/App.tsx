import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Page imports
import Home from "@/pages/home";
import ToolsIndex from "@/pages/tools/index";
import CompoundRaiseCalculator from "@/pages/tools/compound-raise-calculator";
import InflationAdjustedRaiseCalculator from "@/pages/tools/inflation-adjusted-raise-calculator";
import PromotionSalaryCalculator from "@/pages/tools/promotion-salary-calculator";
import PayRaiseTaxImpactCalculator from "@/pages/tools/pay-raise-tax-impact-calculator";
import GuidesIndex from "@/pages/guides/index";
import UnderstandingPayRaisesComplete from "@/pages/guides/understanding-pay-raises-complete";
import NegotiatingSalaryIncreaseStrategies from "@/pages/guides/negotiating-salary-increase-strategies";
import PerformanceReviewRaisePreparation from "@/pages/guides/performance-review-raise-preparation";
import BlogIndex from "@/pages/blog/index";
import SalaryNegotiationCompleteGuide from "@/pages/salary-negotiation-complete-guide";
import IndustryRaiseBenchmarks2025 from "@/pages/industry-raise-benchmarks-2025";
import HowPayRaiseCalculatorWorks from "@/pages/how-pay-raise-calculator-works";
import PayRaiseFormulasGuide from "@/pages/pay-raise-formulas-guide";
import TaxImpactSalaryIncreases from "@/pages/tax-impact-salary-increases";
import FaqPayRaiseCalculator from "@/pages/faq-pay-raise-calculator";
import CalculatorAccuracyMethodology from "@/pages/calculator-accuracy-methodology";
import RaiseVsInflationAnalysis from "@/pages/raise-vs-inflation-analysis";
import StatePayRaiseLawsCompliance from "@/pages/state-pay-raise-laws-compliance";
import BonusImpactCalculator from "@/pages/tools/bonus-impact-calculator";
import ColaCalculator from "@/pages/tools/cola-calculator";
import HourlyToSalaryConverter from "@/pages/tools/hourly-to-salary-converter";
import RaiseVsBonusCalculator from "@/pages/tools/raise-vs-bonus-calculator";
import ThreeVsFivePercentRaiseLongTermImpact from "@/pages/blog/3-vs-5-percent-raise-long-term-impact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          {/* Homepage */}
          <Route path="/" component={Home} />
          
          {/* Tools Section */}
          <Route path="/tools" component={ToolsIndex} />
          <Route path="/tools/compound-raise-calculator" component={CompoundRaiseCalculator} />
          <Route path="/tools/inflation-adjusted-raise-calculator" component={InflationAdjustedRaiseCalculator} />
          <Route path="/tools/promotion-salary-calculator" component={PromotionSalaryCalculator} />
          <Route path="/tools/pay-raise-tax-impact-calculator" component={PayRaiseTaxImpactCalculator} />
          <Route path="/tools/bonus-impact-calculator" component={BonusImpactCalculator} />
          <Route path="/tools/cola-calculator" component={ColaCalculator} />
          <Route path="/tools/hourly-to-salary-converter" component={HourlyToSalaryConverter} />
          <Route path="/tools/raise-vs-bonus-calculator" component={RaiseVsBonusCalculator} />
          
          {/* Guides Section */}
          <Route path="/guides" component={GuidesIndex} />
          <Route path="/guides/understanding-pay-raises-complete" component={UnderstandingPayRaisesComplete} />
          <Route path="/guides/negotiating-salary-increase-strategies" component={NegotiatingSalaryIncreaseStrategies} />
          <Route path="/guides/performance-review-raise-preparation" component={PerformanceReviewRaisePreparation} />
          
          {/* Blog Section */}
          <Route path="/blog" component={BlogIndex} />
          <Route path="/blog/3-vs-5-percent-raise-long-term-impact" component={ThreeVsFivePercentRaiseLongTermImpact} />
          
          {/* Core Pages */}
          <Route path="/salary-negotiation-complete-guide" component={SalaryNegotiationCompleteGuide} />
          <Route path="/industry-raise-benchmarks-2025" component={IndustryRaiseBenchmarks2025} />
          <Route path="/how-pay-raise-calculator-works" component={HowPayRaiseCalculatorWorks} />
          <Route path="/pay-raise-formulas-guide" component={PayRaiseFormulasGuide} />
          <Route path="/tax-impact-salary-increases" component={TaxImpactSalaryIncreases} />
          <Route path="/faq-pay-raise-calculator" component={FaqPayRaiseCalculator} />
          <Route path="/calculator-accuracy-methodology" component={CalculatorAccuracyMethodology} />
          <Route path="/raise-vs-inflation-analysis" component={RaiseVsInflationAnalysis} />
          <Route path="/state-pay-raise-laws-compliance" component={StatePayRaiseLawsCompliance} />
          
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
