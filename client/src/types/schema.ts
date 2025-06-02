// Frontend-only schema types for static build
import { z } from "zod";

// User types
export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

export interface User {
  id: number;
  username: string;
  password: string;
}

// Calculation types
export const insertCalculationSchema = z.object({
  currentSalary: z.string(),
  raisePercentage: z.string().nullable().optional(),
  raiseAmount: z.string().nullable().optional(),
  targetSalary: z.string().nullable().optional(),
  payPeriod: z.string(),
  includeInflation: z.boolean().nullable().optional(),
  includeTaxes: z.boolean().nullable().optional(),
  industry: z.string().nullable().optional(),
  location: z.string().nullable().optional(),
  sessionId: z.string().nullable().optional(),
});

export type InsertCalculation = z.infer<typeof insertCalculationSchema>;

export interface Calculation {
  id: number;
  currentSalary: string;
  raisePercentage: string | null;
  raiseAmount: string | null;
  targetSalary: string | null;
  payPeriod: string;
  includeInflation: boolean | null;
  includeTaxes: boolean | null;
  industry: string | null;
  location: string | null;
  sessionId: string | null;
  createdAt: Date | null;
}

// Industry benchmark types
export const insertIndustryBenchmarkSchema = z.object({
  industry: z.string(),
  averageRaise: z.string(),
  medianRaise: z.string(),
  topQuartileRaise: z.string(),
  year: z.number(),
});

export type InsertIndustryBenchmark = z.infer<typeof insertIndustryBenchmarkSchema>;

export interface IndustryBenchmark {
  id: number;
  industry: string;
  averageRaise: string;
  medianRaise: string;
  topQuartileRaise: string;
  year: number;
}