import { contact } from "~/content/site";

export const SITE_URL = "https://www.careknect.net";
const SITE_NAME = "Careknect Limited";
const SHARE_IMAGE = `${SITE_URL}/images/brand/careknect-logo.png`;

/** Title, description, canonical link and social-share tags for one page. */
export function seo({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${path}`;
  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_GH" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: SHARE_IMAGE },
    { property: "og:image:alt", content: "Careknect logo" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: SHARE_IMAGE },
  ];
}

/** Organization structured data, so search engines can show the company's details. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: SHARE_IMAGE,
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st Floor, The Emporium, Mövenpick Ambassador Hotel",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
};
