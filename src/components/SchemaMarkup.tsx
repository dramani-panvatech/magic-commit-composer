import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'Product' | 'Service';
  data: Record<string, any>;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

// Predefined schema data for common pages
export const organizationSchema = {
  name: "PatientClick",
  description: "AI-Driven Medical Billing Software and Healthcare Technology Solutions",
  url: "https://patientclick.com",
  logo: "https://patientclick.com/pc-logo.png",
  sameAs: [
    "https://twitter.com/patientclick",
    "https://linkedin.com/company/patientclick"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-PATIENT",
    contactType: "customer service",
    availableLanguage: "English"
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US"
  }
};

export const websiteSchema = {
  name: "PatientClick",
  description: "Healthcare Technology Solutions",
  url: "https://patientclick.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://patientclick.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const productSchema = (productData: {
  name: string;
  description: string;
  url: string;
  image?: string;
  offers?: any;
}) => ({
  name: productData.name,
  description: productData.description,
  url: productData.url,
  image: productData.image,
  offers: productData.offers || {
    "@type": "Offer",
    availability: "https://schema.org/InStock"
  }
});

export const serviceSchema = (serviceData: {
  name: string;
  description: string;
  url: string;
  provider: string;
}) => ({
  name: serviceData.name,
  description: serviceData.description,
  url: serviceData.url,
  provider: {
    "@type": "Organization",
    name: serviceData.provider
  }
}); 