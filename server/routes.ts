import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCalculationSchema, insertIndustryBenchmarkSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    res.type('application/xml');
    res.sendFile(path.resolve("public/sitemap.xml"));
  });

  // Serve robots.txt
  app.get("/robots.txt", (req, res) => {
    res.type('text/plain');
    res.sendFile(path.resolve("public/robots.txt"));
  });
  // Calculation endpoints
  app.post("/api/calculations", async (req, res) => {
    try {
      const validatedData = insertCalculationSchema.parse(req.body);
      const calculation = await storage.createCalculation(validatedData);
      res.json(calculation);
    } catch (error) {
      res.status(400).json({ error: "Invalid calculation data" });
    }
  });

  app.get("/api/calculations/session/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const calculations = await storage.getCalculationsBySession(sessionId);
      res.json(calculations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch calculations" });
    }
  });

  // Industry benchmark endpoints
  app.get("/api/industry-benchmarks", async (req, res) => {
    try {
      const year = req.query.year ? parseInt(req.query.year as string) : undefined;
      const benchmarks = await storage.getIndustryBenchmarks(year);
      res.json(benchmarks);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch industry benchmarks" });
    }
  });

  app.get("/api/industry-benchmarks/:industry", async (req, res) => {
    try {
      const { industry } = req.params;
      const year = req.query.year ? parseInt(req.query.year as string) : 2025;
      const benchmark = await storage.getIndustryBenchmark(industry, year);
      
      if (!benchmark) {
        return res.status(404).json({ error: "Industry benchmark not found" });
      }
      
      res.json(benchmark);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch industry benchmark" });
    }
  });

  // Economic data endpoints
  app.get("/api/economic-data/inflation", async (req, res) => {
    try {
      // Current CPI data
      res.json({
        currentCPI: 3.1,
        lastUpdated: new Date().toISOString(),
        source: "Bureau of Labor Statistics"
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inflation data" });
    }
  });

  // Market trends endpoint
  app.get("/api/market-trends", async (req, res) => {
    try {
      res.json({
        averageRaise2025: 4.2,
        inflationRate: 3.1,
        unemploymentRate: 3.7,
        trends: {
          remote_work_impact: "Positive correlation with higher raises",
          skills_in_demand: ["AI/ML", "Cloud Computing", "Data Analysis"],
          geography_leaders: ["San Francisco", "Seattle", "New York"]
        }
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch market trends" });
    }
  });

  // Salary Trend Data API
  app.get("/api/salary-trends", async (req, res) => {
    try {
      const industry = req.query.industry as string || "Technology";
      
      // Static comprehensive salary trend data
      const salaryTrends = {
        Technology: {
          averageRaise: 4.2,
          medianRaise: 3.8,
          topQuartileRaise: 6.5,
          trends: ["AI/ML Skills Premium", "Remote Work Flexibility", "Cloud Computing Demand"],
          marketHealth: "Strong"
        },
        Healthcare: {
          averageRaise: 3.8,
          medianRaise: 3.5,
          topQuartileRaise: 5.2,
          trends: ["Nursing Shortage Premium", "Telehealth Growth", "Specialized Care Demand"],
          marketHealth: "Stable"
        },
        Finance: {
          averageRaise: 4.0,
          medianRaise: 3.7,
          topQuartileRaise: 5.8,
          trends: ["FinTech Innovation", "Regulatory Compliance", "Digital Banking"],
          marketHealth: "Moderate"
        },
        Retail: {
          averageRaise: 3.2,
          medianRaise: 2.8,
          topQuartileRaise: 4.5,
          trends: ["E-commerce Growth", "Customer Experience Focus", "Supply Chain Optimization"],
          marketHealth: "Recovering"
        },
        Manufacturing: {
          averageRaise: 3.5,
          medianRaise: 3.2,
          topQuartileRaise: 4.8,
          trends: ["Automation Integration", "Sustainability Initiatives", "Supply Chain Resilience"],
          marketHealth: "Stable"
        },
        Education: {
          averageRaise: 2.8,
          medianRaise: 2.5,
          topQuartileRaise: 3.8,
          trends: ["EdTech Integration", "Teacher Shortage", "Remote Learning"],
          marketHealth: "Constrained"
        }
      };

      const industryData = salaryTrends[industry as keyof typeof salaryTrends] || salaryTrends.Technology;
      
      res.json({
        industry,
        currentYear: 2025,
        data: industryData,
        economicContext: {
          inflationRate: 3.1,
          unemploymentRate: 3.7,
          gdpGrowth: 2.4
        },
        lastUpdated: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch salary trends" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
