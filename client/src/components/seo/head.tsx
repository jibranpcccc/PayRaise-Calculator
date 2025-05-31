interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
}

export function SEOHead({ 
  title, 
  description, 
  canonical, 
  keywords = "pay raise calculator, salary increase, wage calculator, promotion calculator",
  ogImage = "/og-image.jpg",
  structuredData
}: SEOHeadProps) {
  const fullTitle = title.includes('PayRaise Calculator') ? title : `${title} | PayRaise Calculator`;
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://payraisepercentagecalculator.com';
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : `${baseUrl}${window?.location?.pathname || ''}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="PayRaise Calculator" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="PayRaise Calculator" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      
      {/* Structured Data */}
      {structuredData && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
}
