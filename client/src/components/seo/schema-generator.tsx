export interface CalculatorSchema {
  name: string;
  description: string;
  url: string;
  category?: string;
  features?: string[];
}

export interface ArticleSchema {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string | object;
  publisher?: object;
  image?: string;
  keywords?: string[];
}

export interface GuideSchema {
  name: string;
  description: string;
  url: string;
  educationalLevel?: string;
  learningResourceType?: string;
  timeRequired?: string;
  author?: object;
}

export class SchemaGenerator {
  static calculator(data: CalculatorSchema) {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": data.name,
      "description": data.description,
      "url": data.url,
      "applicationCategory": "FinanceApplication",
      "applicationSubCategory": data.category || "Calculator",
      "operatingSystem": "Any",
      "browserRequirements": "Requires JavaScript",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "creator": {
        "@type": "Organization",
        "name": "PayRaise Calculator",
        "url": "https://payraisepercentagecalculator.com"
      },
      "featureList": data.features || [
        "Real-time calculations",
        "Multiple input formats",
        "Professional results",
        "Free to use"
      ]
    };
  }

  static article(data: ArticleSchema) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.headline,
      "description": data.description,
      "url": data.url,
      "datePublished": data.datePublished,
      "dateModified": data.dateModified || data.datePublished,
      "author": data.author || {
        "@type": "Organization",
        "name": "PayRaise Calculator",
        "url": "https://payraisepercentagecalculator.com"
      },
      "publisher": data.publisher || {
        "@type": "Organization",
        "name": "PayRaise Calculator",
        "url": "https://payraisepercentagecalculator.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://payraisepercentagecalculator.com/logo.png"
        }
      },
      "image": data.image,
      "keywords": data.keywords,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": data.url
      }
    };
  }

  static howToGuide(data: GuideSchema & { steps?: { name: string; text: string; }[] }) {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": data.name,
      "description": data.description,
      "url": data.url,
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "supply": [],
      "tool": [],
      "totalTime": data.timeRequired,
      "step": data.steps?.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text
      })) || [],
      "author": data.author || {
        "@type": "Organization",
        "name": "PayRaise Calculator"
      }
    };
  }

  static learningResource(data: GuideSchema) {
    return {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": data.name,
      "description": data.description,
      "url": data.url,
      "educationalLevel": data.educationalLevel || "Beginner",
      "learningResourceType": data.learningResourceType || "Guide",
      "timeRequired": data.timeRequired,
      "teaches": data.description,
      "author": data.author || {
        "@type": "Organization",
        "name": "PayRaise Calculator"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PayRaise Calculator",
        "url": "https://payraisepercentagecalculator.com"
      }
    };
  }

  static faqPage(faqs: { question: string; answer: string; }[]) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  static breadcrumbList(items: { name: string; url: string; }[]) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  }

  static organization() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PayRaise Calculator",
      "url": "https://payraisepercentagecalculator.com",
      "logo": "https://payraisepercentagecalculator.com/logo.png",
      "description": "Professional salary and pay raise calculators with expert guidance for career advancement and salary negotiations.",
      "sameAs": [
        "https://twitter.com/payrasecalc",
        "https://linkedin.com/company/payrase-calculator"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English"]
      }
    };
  }

  static website() {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "PayRaise Calculator",
      "url": "https://payraisepercentagecalculator.com",
      "description": "Professional pay raise and salary calculators with comprehensive guides for career advancement and salary negotiations.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://payraisepercentagecalculator.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PayRaise Calculator"
      }
    };
  }
}