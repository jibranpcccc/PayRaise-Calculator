import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCalculatorButton } from "@/components/floating-calculator-button";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { CriticalCSSInjector, PreloadNonCriticalCSS } from "@/components/performance/css-optimizer";

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
import OfferComparisonCalculator from "@/pages/tools/offer-comparison-calculator";
import RaiseImpactRetirementSavingsCalculator from "@/pages/tools/raise-impact-retirement-savings-calculator";
import EffectiveHourlyRateCalculator from "@/pages/tools/effective-hourly-rate-calculator";
import FreelanceRateIncreaseCalculator from "@/pages/tools/freelance-rate-increase-calculator";
import ThreeVsFivePercentRaiseLongTermImpact from "@/pages/blog/3-vs-5-percent-raise-long-term-impact";
import WhenAskForRaiseOptimalTiming from "@/pages/blog/when-ask-for-raise-optimal-timing";
import CommonSalaryNegotiationMistakes from "@/pages/blog/common-salary-negotiation-mistakes";
import SalaryTransparencyImpact from "@/pages/blog/salary-transparency-impact";
import AveragePayRaisesDataTrends from "@/pages/guides/average-pay-raises-data-trends";
import FactorsInfluencingPayRaises from "@/pages/guides/factors-influencing-pay-raises";
import MarketValueSalaryResearch from "@/pages/guides/market-value-salary-research";
import CostLivingAdjustmentGuide from "@/pages/guides/cost-living-adjustment-guide";
import RaiseNegotiationScriptsTemplates from "@/pages/blog/raise-negotiation-scripts-templates";
import HourlyVsSalaryRaiseDifferences from "@/pages/blog/hourly-vs-salary-raise-differences";
import AverageRaiseByIndustry2025 from "@/pages/blog/average-raise-by-industry-2025";
import InflationRealSalaryImpact from "@/pages/blog/inflation-real-salary-impact";
import RemoteWorkRaiseStrategies from "@/pages/blog/remote-work-raise-strategies";
import GenderPayGapCalculator from "@/pages/tools/gender-pay-gap-calculator";
import OvertimePayCalculator from "@/pages/tools/overtime-pay-calculator";
import PromotionCalculator from "@/pages/tools/promotion-calculator";
import RemoteWorkLocationAdjuster from "@/pages/tools/remote-work-location-adjuster";
import SalaryNegotiationCalculator from "@/pages/tools/salary-negotiation-calculator";
import StateWiseRaiseCalculator from "@/pages/tools/state-wise-raise-calculator";
import RaiseAfterDeductionsCalculator from "@/pages/tools/raise-after-deductions-calculator";
import SalaryVsTotalCompensationCalculator from "@/pages/tools/salary-vs-total-compensation-calculator";
import RaiseCalculatorVsSalaryCalculator from "@/pages/guides/raise-calculator-vs-salary-calculator";
import WhyYourRaiseFeelsSmallerThisYear from "@/pages/blog/why-your-raise-feels-smaller-this-year";
import HowMuchRaiseToAskForBasedOnRole from "@/pages/blog/how-much-raise-to-ask-for-based-on-role";
import BestTimeOfYearToNegotiateRaise from "@/pages/blog/best-time-of-year-to-negotiate-raise";
import RaiseCalculatorUpdates2025 from "@/pages/blog/raise-calculator-updates-2025";
import TopRaiseMistakesToAvoid from "@/pages/guides/top-raise-mistakes-to-avoid";
import MeritIncreaseVsPromotion from "@/pages/guides/merit-increase-vs-promotion";
import SalaryIncreaseTimingGuide from "@/pages/guides/salary-increase-timing-guide";
import RaiseRejectionNextSteps from "@/pages/guides/raise-rejection-next-steps";
import NegotiatingNonSalaryBenefitsPerks from "@/pages/guides/negotiating-non-salary-benefits-perks";
import ContactUs from "@/pages/contact-us";
import AboutUs from "@/pages/about-us";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col above-fold">
      <Header />
      <main className="flex-1" role="main">
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
          <Route path="/tools/gender-pay-gap-calculator" component={GenderPayGapCalculator} />
          <Route path="/tools/overtime-pay-calculator" component={OvertimePayCalculator} />
          <Route path="/tools/promotion-calculator" component={PromotionCalculator} />
          <Route path="/tools/remote-work-location-adjuster" component={RemoteWorkLocationAdjuster} />
          <Route path="/tools/salary-negotiation-calculator" component={SalaryNegotiationCalculator} />
          <Route path="/tools/state-wise-raise-calculator" component={StateWiseRaiseCalculator} />
          <Route path="/tools/raise-after-deductions-calculator" component={RaiseAfterDeductionsCalculator} />
          <Route path="/tools/salary-vs-total-compensation-calculator" component={SalaryVsTotalCompensationCalculator} />
          <Route path="/tools/offer-comparison-calculator" component={OfferComparisonCalculator} />
          <Route path="/tools/raise-impact-retirement-savings-calculator" component={RaiseImpactRetirementSavingsCalculator} />
          <Route path="/tools/effective-hourly-rate-calculator" component={EffectiveHourlyRateCalculator} />
          <Route path="/tools/freelance-rate-increase-calculator" component={FreelanceRateIncreaseCalculator} />
          
          {/* Guides Section */}
          <Route path="/guides" component={GuidesIndex} />
          <Route path="/guides/understanding-pay-raises-complete" component={UnderstandingPayRaisesComplete} />
          <Route path="/guides/average-pay-raises-data-trends" component={AveragePayRaisesDataTrends} />
          <Route path="/guides/factors-influencing-pay-raises" component={FactorsInfluencingPayRaises} />
          <Route path="/guides/market-value-salary-research" component={MarketValueSalaryResearch} />
          <Route path="/guides/cost-living-adjustment-guide" component={CostLivingAdjustmentGuide} />
          <Route path="/guides/negotiating-salary-increase-strategies" component={NegotiatingSalaryIncreaseStrategies} />
          <Route path="/guides/performance-review-raise-preparation" component={PerformanceReviewRaisePreparation} />
          <Route path="/guides/raise-calculator-vs-salary-calculator" component={RaiseCalculatorVsSalaryCalculator} />
          <Route path="/guides/top-raise-mistakes-to-avoid" component={TopRaiseMistakesToAvoid} />
          <Route path="/guides/merit-increase-vs-promotion" component={MeritIncreaseVsPromotion} />
          <Route path="/guides/salary-increase-timing-guide" component={SalaryIncreaseTimingGuide} />
          <Route path="/guides/raise-rejection-next-steps" component={RaiseRejectionNextSteps} />
          <Route path="/guides/negotiating-non-salary-benefits-perks" component={NegotiatingNonSalaryBenefitsPerks} />
          
          {/* Blog Section */}
          <Route path="/blog" component={BlogIndex} />
          <Route path="/blog/3-vs-5-percent-raise-long-term-impact" component={ThreeVsFivePercentRaiseLongTermImpact} />
          <Route path="/blog/when-ask-for-raise-optimal-timing" component={WhenAskForRaiseOptimalTiming} />
          <Route path="/blog/raise-negotiation-scripts-templates" component={RaiseNegotiationScriptsTemplates} />
          <Route path="/blog/hourly-vs-salary-raise-differences" component={HourlyVsSalaryRaiseDifferences} />
          <Route path="/blog/average-raise-by-industry-2025" component={AverageRaiseByIndustry2025} />
          <Route path="/blog/inflation-real-salary-impact" component={InflationRealSalaryImpact} />
          <Route path="/blog/remote-work-raise-strategies" component={RemoteWorkRaiseStrategies} />
          <Route path="/blog/common-salary-negotiation-mistakes" component={CommonSalaryNegotiationMistakes} />
          <Route path="/blog/salary-transparency-impact" component={SalaryTransparencyImpact} />
          <Route path="/blog/why-your-raise-feels-smaller-this-year" component={WhyYourRaiseFeelsSmallerThisYear} />
          <Route path="/blog/how-much-raise-to-ask-for-based-on-role" component={HowMuchRaiseToAskForBasedOnRole} />
          <Route path="/blog/best-time-of-year-to-negotiate-raise" component={BestTimeOfYearToNegotiateRaise} />
          <Route path="/blog/raise-calculator-updates-2025" component={RaiseCalculatorUpdates2025} />
          
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
          
          {/* Additional Pages */}
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={AboutUs} />
          
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingCalculatorButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CriticalCSSInjector />
      <PreloadNonCriticalCSS />
      <TooltipProvider>
        <Toaster />
        <Suspense fallback={<LoadingSpinner />}>
          <Router />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
