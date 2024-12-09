export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateSEO({ 
  title, 
  description = "Transform your business with AI-powered solutions for automation and customer engagement.",
  image = "/logo.svg",
  noIndex = false 
}: SEOProps) {
  const siteName = "Entagl";
  const formattedTitle = title ? `${title} | ${siteName}` : siteName;
  
  return {
    title: formattedTitle,
    description,
    image,
    noIndex
  };
}