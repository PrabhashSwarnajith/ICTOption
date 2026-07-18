/**
 * Utility for setting page meta tags for SEO optimization
 */
export const setPageMeta = (title, description, keywords, canonical) => {
  // Set page title
  document.title = `${title} | ICT Option`;

  // Set meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = description;

  // Set meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = keywords;

  // Set canonical URL
  if (canonical) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `https://www.ictoption.com${canonical}`;
  }

  // Open Graph meta tags for social sharing
  setOpenGraphMeta('og:title', title);
  setOpenGraphMeta('og:description', description);
  setOpenGraphMeta('og:type', 'website');
};

const setOpenGraphMeta = (property, content) => {
  let metaTag = document.querySelector(`meta[property="${property}"]`);
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('property', property);
    document.head.appendChild(metaTag);
  }
  metaTag.content = content;
};
