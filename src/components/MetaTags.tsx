import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    keywords?: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
}

export const MetaTags: React.FC<MetaTagsProps> = ({
    title,
    description,
    canonical,
    ogImage = "/pc-logo.png",
    ogType = "website",
    keywords,
    author = "PatientClick",
    publishedTime,
    modifiedTime,
    section,
    tags = []
}) => {
    const fullTitle = title.includes('PatientClick') ? title : `${title} | PatientClick`;
    const fullCanonical = canonical || window.location.href;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />

            {/* Canonical URL */}
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="PatientClick" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Article-specific meta tags */}
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {section && <meta property="article:section" content={section} />}
            {tags.map((tag, index) => (
                <meta key={index} property="article:tag" content={tag} />
            ))}

            {/* Additional SEO Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    );
}; 