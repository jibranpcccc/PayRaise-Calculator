/**
 * Prerender Script for PayRaise Calculator
 * 
 * This script uses Puppeteer to prerender all routes as static HTML
 * at build time, making the site fully crawlable by search engines.
 * 
 * Run after vite build: node prerender.js
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import handler from 'serve-handler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// All routes to prerender (extracted from App.tsx)
const routes = [
    '/',
    '/tools',
    '/tools/compound-raise-calculator',
    '/tools/inflation-adjusted-raise-calculator',
    '/tools/promotion-salary-calculator',
    '/tools/pay-raise-tax-impact-calculator',
    '/tools/bonus-impact-calculator',
    '/tools/cola-calculator',
    '/tools/hourly-to-salary-converter',
    '/tools/raise-vs-bonus-calculator',
    '/tools/gender-pay-gap-calculator',
    '/tools/overtime-pay-calculator',
    '/tools/promotion-calculator',
    '/tools/remote-work-location-adjuster',
    '/tools/salary-negotiation-calculator',
    '/tools/state-wise-raise-calculator',
    '/tools/raise-after-deductions-calculator',
    '/tools/salary-vs-total-compensation-calculator',
    '/tools/offer-comparison-calculator',
    '/tools/raise-impact-retirement-savings-calculator',
    '/tools/effective-hourly-rate-calculator',
    '/tools/freelance-rate-increase-calculator',
    '/guides',
    '/guides/understanding-pay-raises-complete',
    '/guides/average-pay-raises-data-trends',
    '/guides/factors-influencing-pay-raises',
    '/guides/market-value-salary-research',
    '/guides/cost-living-adjustment-guide',
    '/guides/negotiating-salary-increase-strategies',
    '/guides/performance-review-raise-preparation',
    '/guides/raise-calculator-vs-salary-calculator',
    '/guides/top-raise-mistakes-to-avoid',
    '/guides/merit-increase-vs-promotion',
    '/guides/salary-increase-timing-guide',
    '/guides/raise-rejection-next-steps',
    '/guides/negotiating-non-salary-benefits-perks',
    '/blog',
    '/blog/3-vs-5-percent-raise-long-term-impact',
    '/blog/when-ask-for-raise-optimal-timing',
    '/blog/raise-negotiation-scripts-templates',
    '/blog/how-to-calculate-raise-percentage',
    '/blog/typical-annual-raise-percentage',
    '/blog/counter-offer-salary-examples',
    '/blog/hourly-vs-salary-raise-differences',
    '/blog/average-raise-by-industry-2025',
    '/blog/inflation-real-salary-impact',
    '/blog/remote-work-raise-strategies',
    '/blog/common-salary-negotiation-mistakes',
    '/blog/salary-transparency-impact',
    '/blog/why-your-raise-feels-smaller-this-year',
    '/blog/how-much-raise-to-ask-for-based-on-role',
    '/blog/best-time-of-year-to-negotiate-raise',
    '/blog/raise-calculator-updates-2025',
    '/salary-negotiation-complete-guide',
    '/industry-raise-benchmarks-2025',
    '/how-pay-raise-calculator-works',
    '/pay-raise-formulas-guide',
    '/tax-impact-salary-increases',
    '/faq-pay-raise-calculator',
    '/calculator-accuracy-methodology',
    '/raise-vs-inflation-analysis',
    '/state-pay-raise-laws-compliance',
    '/contact-us',
    '/about-us',
];

const DIST_DIR = join(__dirname, 'dist');
const PORT = 8080;

async function startServer() {
    return new Promise((resolve) => {
        const server = createServer((req, res) => {
            return handler(req, res, {
                public: DIST_DIR,
                rewrites: [{ source: '**', destination: '/index.html' }],
            });
        });

        server.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`);
            resolve(server);
        });
    });
}

async function prerenderRoutes() {
    console.log('Starting prerender process...');
    console.log(`Found ${routes.length} routes to prerender`);

    const server = await startServer();
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    for (const route of routes) {
        try {
            const page = await browser.newPage();
            const url = `http://localhost:${PORT}${route}`;

            console.log(`Prerendering: ${route}`);

            await page.goto(url, {
                waitUntil: 'networkidle0',
                timeout: 30000,
            });

            // Wait for main content to render
            await page.waitForSelector('#root', { timeout: 10000 });

            // Get the rendered HTML
            const html = await page.content();

            // Determine output path
            const outputPath = route === '/'
                ? join(DIST_DIR, 'index.html')
                : join(DIST_DIR, route, 'index.html');

            // Create directory if needed
            const dir = dirname(outputPath);
            if (!existsSync(dir)) {
                mkdirSync(dir, { recursive: true });
            }

            // Write the prerendered HTML
            writeFileSync(outputPath, html);
            console.log(`  ✓ Saved: ${outputPath}`);

            await page.close();
        } catch (error) {
            console.error(`  ✗ Error prerendering ${route}:`, error.message);
        }
    }

    await browser.close();
    server.close();

    console.log('\n✅ Prerendering complete!');
}

prerenderRoutes().catch(console.error);
