import { users, calculations, industryBenchmarks, type User, type InsertUser, type Calculation, type InsertCalculation, type IndustryBenchmark, type InsertIndustryBenchmark } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createCalculation(calculation: InsertCalculation): Promise<Calculation>;
  getCalculationsBySession(sessionId: string): Promise<Calculation[]>;
  
  getIndustryBenchmarks(year?: number): Promise<IndustryBenchmark[]>;
  getIndustryBenchmark(industry: string, year?: number): Promise<IndustryBenchmark | undefined>;
  createIndustryBenchmark(benchmark: InsertIndustryBenchmark): Promise<IndustryBenchmark>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private calculations: Map<number, Calculation>;
  private industryBenchmarks: Map<number, IndustryBenchmark>;
  private currentUserId: number;
  private currentCalculationId: number;
  private currentBenchmarkId: number;

  constructor() {
    this.users = new Map();
    this.calculations = new Map();
    this.industryBenchmarks = new Map();
    this.currentUserId = 1;
    this.currentCalculationId = 1;
    this.currentBenchmarkId = 1;
    
    // Initialize with current industry benchmark data
    this.initializeBenchmarks();
  }

  private initializeBenchmarks() {
    const benchmarks: Omit<IndustryBenchmark, 'id' | 'lastUpdated'>[] = [
      { industry: 'Technology', averageRaise: 4.2, medianRaise: 4.0, topQuartileRaise: 6.5, year: 2025 },
      { industry: 'Healthcare', averageRaise: 3.8, medianRaise: 3.5, topQuartileRaise: 5.2, year: 2025 },
      { industry: 'Finance', averageRaise: 4.0, medianRaise: 3.8, topQuartileRaise: 5.8, year: 2025 },
      { industry: 'Manufacturing', averageRaise: 3.5, medianRaise: 3.2, topQuartileRaise: 4.8, year: 2025 },
      { industry: 'Retail', averageRaise: 3.2, medianRaise: 3.0, topQuartileRaise: 4.2, year: 2025 },
      { industry: 'Education', averageRaise: 2.8, medianRaise: 2.5, topQuartileRaise: 3.8, year: 2025 },
      { industry: 'Government', averageRaise: 3.1, medianRaise: 3.0, topQuartileRaise: 4.0, year: 2025 },
      { industry: 'Non-Profit', averageRaise: 2.5, medianRaise: 2.2, topQuartileRaise: 3.5, year: 2025 },
    ];

    benchmarks.forEach(benchmark => {
      const id = this.currentBenchmarkId++;
      this.industryBenchmarks.set(id, {
        id,
        ...benchmark,
        lastUpdated: new Date(),
      });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createCalculation(insertCalculation: InsertCalculation): Promise<Calculation> {
    const id = this.currentCalculationId++;
    const calculation: Calculation = {
      ...insertCalculation,
      id,
      createdAt: new Date(),
    };
    this.calculations.set(id, calculation);
    return calculation;
  }

  async getCalculationsBySession(sessionId: string): Promise<Calculation[]> {
    return Array.from(this.calculations.values()).filter(
      calc => calc.sessionId === sessionId
    );
  }

  async getIndustryBenchmarks(year?: number): Promise<IndustryBenchmark[]> {
    const benchmarks = Array.from(this.industryBenchmarks.values());
    if (year) {
      return benchmarks.filter(b => b.year === year);
    }
    return benchmarks;
  }

  async getIndustryBenchmark(industry: string, year = 2025): Promise<IndustryBenchmark | undefined> {
    return Array.from(this.industryBenchmarks.values()).find(
      b => b.industry === industry && b.year === year
    );
  }

  async createIndustryBenchmark(insertBenchmark: InsertIndustryBenchmark): Promise<IndustryBenchmark> {
    const id = this.currentBenchmarkId++;
    const benchmark: IndustryBenchmark = {
      ...insertBenchmark,
      id,
      lastUpdated: new Date(),
    };
    this.industryBenchmarks.set(id, benchmark);
    return benchmark;
  }
}

export const storage = new MemStorage();
