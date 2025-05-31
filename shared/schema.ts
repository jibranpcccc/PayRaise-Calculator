import { pgTable, text, serial, integer, boolean, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const calculations = pgTable("calculations", {
  id: serial("id").primaryKey(),
  currentSalary: decimal("current_salary", { precision: 12, scale: 2 }).notNull(),
  raisePercentage: decimal("raise_percentage", { precision: 5, scale: 2 }),
  raiseAmount: decimal("raise_amount", { precision: 12, scale: 2 }),
  targetSalary: decimal("target_salary", { precision: 12, scale: 2 }),
  payPeriod: text("pay_period").notNull().default("annual"),
  includeInflation: boolean("include_inflation").default(false),
  includeTaxes: boolean("include_taxes").default(false),
  industry: text("industry"),
  location: text("location"),
  sessionId: text("session_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const industryBenchmarks = pgTable("industry_benchmarks", {
  id: serial("id").primaryKey(),
  industry: text("industry").notNull(),
  averageRaise: decimal("average_raise", { precision: 5, scale: 2 }).notNull(),
  medianRaise: decimal("median_raise", { precision: 5, scale: 2 }).notNull(),
  topQuartileRaise: decimal("top_quartile_raise", { precision: 5, scale: 2 }).notNull(),
  year: integer("year").notNull(),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCalculationSchema = createInsertSchema(calculations).omit({
  id: true,
  createdAt: true,
});

export const insertIndustryBenchmarkSchema = createInsertSchema(industryBenchmarks).omit({
  id: true,
  lastUpdated: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Calculation = typeof calculations.$inferSelect;
export type InsertCalculation = z.infer<typeof insertCalculationSchema>;
export type IndustryBenchmark = typeof industryBenchmarks.$inferSelect;
export type InsertIndustryBenchmark = z.infer<typeof insertIndustryBenchmarkSchema>;
