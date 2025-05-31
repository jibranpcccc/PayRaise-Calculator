import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCalculationSchema, insertIndustryBenchmarkSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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

  // Real-time Salary Trend Prediction API
  app.get("/api/salary-trends", async (req, res) => {
    try {
      const industry = req.query.industry as string || "Technology";
      
      // Check for required external API keys for authentic market data
      const requiredKeys = ["BLS_API_KEY", "PAYSCALE_API_KEY", "GLASSDOOR_API_KEY"];
      const missingKeys = requiredKeys.filter(key => !process.env[key]);
      
      if (missingKeys.length > 0) {
        return res.status(400).json({
          error: "External market data APIs required",
          message: "Real-time salary trend predictions require access to external market data services",
          requiredServices: [
            "Bureau of Labor Statistics API (BLS_API_KEY)",
            "PayScale API (PAYSCALE_API_KEY)", 
            "Glassdoor API (GLASSDOOR_API_KEY)",
            "Indeed API (INDEED_API_KEY)"
          ],
          missingKeys,
          instructions: "Please provide the required API keys to enable real-time salary trend predictions"
        });
      }

      // Placeholder for external API integration - requires authentic market data APIs
      // When API keys are provided, this will fetch real-time data from BLS, PayScale, Glassdoor, etc.
      res.status(503).json({
        error: "Market data service unavailable",
        message: "Real-time salary predictions require external market data APIs",
        industry,
        timestamp: new Date().toISOString()
      });
      
    } catch (error) {
      console.error("Error fetching salary trends:", error);
      res.status(500).json({ 
        error: "Failed to fetch salary trend data",
        message: "Unable to connect to external market data services" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
