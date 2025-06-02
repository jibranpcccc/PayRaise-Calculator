# PayRaise Calculator - Professional Salary Analysis Platform

A comprehensive web application for salary calculations, raise analysis, and career advancement tools. Features 19+ specialized calculators, expert guides, and industry benchmarks to help professionals make informed salary decisions.

## 🌟 Key Features

- **19+ Interactive Calculators** with real-time visualizations
- **14+ Expert Guides** for salary negotiation and career advancement
- **Industry Benchmarks** with real-time data from 2025
- **Tax Impact Analysis** across all 50 US states
- **Compound Growth Projections** for long-term planning
- **Mobile-First Design** with responsive layouts
- **SEO Optimized** with comprehensive schema markup

## 🛠 Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tool**: Vite
- **UI Components**: Radix UI + shadcn/ui
- **Analytics**: Google Analytics ready
- **Charts**: Recharts for data visualization

## 📊 Calculator Tools

### Core Calculators
- Pay Raise Percentage Calculator (Main)
- Compound Raise Calculator
- Tax Impact Calculator
- Inflation Adjusted Calculator

### Specialized Tools
- Promotion Salary Calculator
- Overtime Pay Calculator
- Freelance Rate Increase Calculator
- Gender Pay Gap Calculator
- State-wise Raise Calculator
- Remote Work Location Adjuster
- Salary vs Total Compensation Calculator
- And 8+ more specialized tools

## 📚 Content Sections

### Expert Guides
- Complete Salary Negotiation Guide
- Performance Review Preparation
- Market Value Research Methods
- Understanding Pay Raise Types

### Industry Analysis
- 2025 Industry Raise Benchmarks
- Inflation vs Salary Impact
- State-by-State Pay Laws
- Cost of Living Adjustments

### Blog Content
- Negotiation Scripts & Templates
- Remote Work Raise Strategies
- Gender Pay Gap Analysis
- Industry-specific Raise Data

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jibranpcccc/PayRaise-Calculator.git
cd PayRaise-Calculator
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create .env file with:
DATABASE_URL=your_postgresql_connection_string
```

4. **Initialize database**
```bash
npm run db:push
```

5. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 🏗 Project Structure

```
PayRaise-Calculator/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
├── server/                 # Express backend
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Database operations
│   └── index.ts            # Server entry point
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schema definitions
└── public/                 # Static assets
    └── sitemap.xml         # SEO sitemap
```

## 🎯 SEO Features

- **57+ Optimized Pages** with unique meta descriptions
- **Schema Markup** for all calculators and content
- **XML Sitemap** with proper priorities
- **Internal Linking Strategy** for better crawlability
- **Mobile-First Responsive Design**
- **Fast Loading Performance** with Vite optimization

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run db:push      # Push schema changes to database
npm run db:generate  # Generate migration files
```

## 📱 Mobile Optimization

- Responsive design works on all screen sizes
- Touch-friendly calculator interfaces
- Optimized navigation for mobile devices
- Fast loading with minimal JavaScript bundles

## 🔒 Security Features

- Input validation with Zod schemas
- SQL injection protection with Drizzle ORM
- Session management for user data
- Secure environment variable handling

## 📈 Analytics & Tracking

- Google Analytics integration ready
- Custom event tracking for calculator usage
- Performance monitoring capabilities
- User interaction analytics

## 🌐 Deployment

The application is ready for deployment on:
- Vercel (recommended)
- Netlify
- Railway
- Any Node.js hosting platform

### Environment Variables for Production
```bash
DATABASE_URL=your_production_database_url
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For questions or support, please contact the development team.

---

**Built with ❤️ for salary transparency and career advancement**