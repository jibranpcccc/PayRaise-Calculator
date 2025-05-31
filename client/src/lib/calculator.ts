export interface CalculationInput {
  currentSalary: number;
  raiseType: 'percentage' | 'amount' | 'target';
  raiseValue: number;
  payPeriod: 'annual' | 'monthly' | 'weekly' | 'hourly';
  hoursPerWeek?: number;
  includeInflation?: boolean;
  includeTaxes?: boolean;
  taxRate?: number;
  location?: string;
  industry?: string;
}

export interface CalculationResult {
  newSalary: number;
  raiseAmount: number;
  raisePercentage: number;
  monthlyIncrease: number;
  weeklyIncrease: number;
  hourlyIncrease?: number;
  realRaise?: number; // After inflation
  netIncrease?: number; // After taxes
  annualValue: number;
  monthlyValue: number;
  weeklyValue: number;
  hourlyValue?: number;
  compoundProjections?: CompoundProjection[];
}

export interface CompoundProjection {
  year: number;
  salary: number;
  totalIncrease: number;
  cumulativeIncrease: number;
}

export class PayRaiseCalculator {
  private static readonly CURRENT_INFLATION = 3.1; // 2025 CPI
  private static readonly HOURS_PER_YEAR = 52 * 40; // Standard full-time
  private static readonly WEEKS_PER_YEAR = 52;
  private static readonly MONTHS_PER_YEAR = 12;

  static calculate(input: CalculationInput): CalculationResult {
    // Convert all inputs to annual salary
    const annualSalary = this.convertToAnnual(input.currentSalary, input.payPeriod, input.hoursPerWeek);
    
    let newAnnualSalary: number;
    let raisePercentage: number;
    let raiseAmount: number;

    switch (input.raiseType) {
      case 'percentage':
        raisePercentage = input.raiseValue;
        newAnnualSalary = annualSalary * (1 + raisePercentage / 100);
        raiseAmount = newAnnualSalary - annualSalary;
        break;
      
      case 'amount':
        raiseAmount = this.convertToAnnual(input.raiseValue, input.payPeriod, input.hoursPerWeek) - 
                     (input.payPeriod === 'annual' ? 0 : annualSalary);
        if (input.payPeriod !== 'annual') {
          raiseAmount = input.raiseValue * this.getMultiplier(input.payPeriod, input.hoursPerWeek);
        } else {
          raiseAmount = input.raiseValue;
        }
        newAnnualSalary = annualSalary + raiseAmount;
        raisePercentage = (raiseAmount / annualSalary) * 100;
        break;
      
      case 'target':
        newAnnualSalary = this.convertToAnnual(input.raiseValue, input.payPeriod, input.hoursPerWeek);
        raiseAmount = newAnnualSalary - annualSalary;
        raisePercentage = (raiseAmount / annualSalary) * 100;
        break;
      
      default:
        throw new Error('Invalid raise type');
    }

    const monthlyIncrease = raiseAmount / this.MONTHS_PER_YEAR;
    const weeklyIncrease = raiseAmount / this.WEEKS_PER_YEAR;
    const hourlyIncrease = input.hoursPerWeek ? raiseAmount / (this.WEEKS_PER_YEAR * input.hoursPerWeek) : undefined;

    // Calculate real raise (after inflation)
    const realRaise = input.includeInflation ? raisePercentage - this.CURRENT_INFLATION : undefined;

    // Calculate net increase (after taxes)
    const taxRate = input.includeTaxes ? (input.taxRate || this.estimateTaxRate(newAnnualSalary)) : 0;
    const netIncrease = input.includeTaxes ? raiseAmount * (1 - taxRate / 100) : undefined;

    // Convert back to requested pay period
    const result: CalculationResult = {
      newSalary: this.convertFromAnnual(newAnnualSalary, input.payPeriod, input.hoursPerWeek),
      raiseAmount: this.convertFromAnnual(raiseAmount, input.payPeriod, input.hoursPerWeek),
      raisePercentage,
      monthlyIncrease,
      weeklyIncrease,
      hourlyIncrease,
      realRaise,
      netIncrease,
      annualValue: newAnnualSalary,
      monthlyValue: newAnnualSalary / this.MONTHS_PER_YEAR,
      weeklyValue: newAnnualSalary / this.WEEKS_PER_YEAR,
      hourlyValue: input.hoursPerWeek ? newAnnualSalary / (this.WEEKS_PER_YEAR * input.hoursPerWeek) : undefined
    };

    // Add compound projections if requested
    if (input.raiseType === 'percentage') {
      result.compoundProjections = this.calculateCompoundProjections(annualSalary, raisePercentage);
    }

    return result;
  }

  private static convertToAnnual(value: number, period: string, hoursPerWeek = 40): number {
    switch (period) {
      case 'annual':
        return value;
      case 'monthly':
        return value * this.MONTHS_PER_YEAR;
      case 'weekly':
        return value * this.WEEKS_PER_YEAR;
      case 'hourly':
        return value * this.WEEKS_PER_YEAR * hoursPerWeek;
      default:
        return value;
    }
  }

  private static convertFromAnnual(annual: number, period: string, hoursPerWeek = 40): number {
    switch (period) {
      case 'annual':
        return annual;
      case 'monthly':
        return annual / this.MONTHS_PER_YEAR;
      case 'weekly':
        return annual / this.WEEKS_PER_YEAR;
      case 'hourly':
        return annual / (this.WEEKS_PER_YEAR * hoursPerWeek);
      default:
        return annual;
    }
  }

  private static getMultiplier(period: string, hoursPerWeek = 40): number {
    switch (period) {
      case 'monthly':
        return this.MONTHS_PER_YEAR;
      case 'weekly':
        return this.WEEKS_PER_YEAR;
      case 'hourly':
        return this.WEEKS_PER_YEAR * hoursPerWeek;
      default:
        return 1;
    }
  }

  private static estimateTaxRate(annualSalary: number): number {
    // Simplified federal tax rate estimation
    if (annualSalary <= 20000) return 10;
    if (annualSalary <= 40000) return 15;
    if (annualSalary <= 80000) return 22;
    if (annualSalary <= 160000) return 24;
    if (annualSalary <= 200000) return 32;
    return 35;
  }

  private static calculateCompoundProjections(initialSalary: number, raisePercentage: number): CompoundProjection[] {
    const projections: CompoundProjection[] = [];
    let currentSalary = initialSalary;

    for (let year = 1; year <= 5; year++) {
      const newSalary = currentSalary * (1 + raisePercentage / 100);
      const yearlyIncrease = newSalary - currentSalary;
      const totalIncrease = newSalary - initialSalary;

      projections.push({
        year,
        salary: newSalary,
        totalIncrease: yearlyIncrease,
        cumulativeIncrease: totalIncrease
      });

      currentSalary = newSalary;
    }

    return projections;
  }

  static formatCurrency(amount: number, decimals = 0): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(amount);
  }

  static formatPercentage(percentage: number, decimals = 1): string {
    return `${percentage.toFixed(decimals)}%`;
  }
}
