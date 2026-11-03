// Careknect's wording, navigation and contact details, taken from careknect.net.

/** Demo photos used as temporary placeholders. Replace before launch. */
const T = "/images/template/";

export const img = {
  blob: `${T}Path-1.svg`,
  heroPhoto: `${T}ML1A8632copy-79381-original-protected.png`,
  heartTop: `${T}Mask-Group-42.png`,
  heartBottom: `${T}Mask-Group-43.png`,
  heartSmall: `${T}Mask-Group-4.png`,
  heartLarge: `${T}Mask-Group-6.png`,
  cloud: `${T}Mask-Group-5.png`,
  aboutPhoto: `${T}A045_07290405_C055-71016-original-protected.jpg`,
  bandBg: `${T}A081_11281412_C046-65327-original-protected-scaled.jpg`,
  roomPhoto: `${T}DSC_9987-582066-original-protected.jpg`,
  nursePhoto: `${T}MG_1758-1-69936-original-protected.jpg`,
  doctorCutout: `${T}Mask-Group-9.png`,
  ctaBg: `${T}Mask-Group-10.png`,
  clipboard: `${T}close-up-of-doctors-with-clipboard-at-hospital-PNAWFWS.jpg`,
  bedside: `${T}MG_1818-1-23222-original-protected.jpg`,
  library: `${T}RK_Library_Medical_2020_0287-38298-original-protected-1-scaled-637x427.jpg`,
  team1: `${T}DSC_1226-20974-original-protected.jpg`,
  team2: `${T}Mask-Group-56.jpg`,
  team3: `${T}male-nurse-with-stethoscope-MBQ4P3Y.jpg`,
  team4: `${T}DSC_1094-64058-original-protected.jpg`,
  round1: `${T}DSK4067-23984-original-protected-1.png`,
  round2: `${T}SNI4227-22658-original-protected.png`,
  round3: `${T}ML1A8632copy-79381-original-protected.png`,
  round4: `${T}Mask-Group-54.jpg`,
  blog1: `${T}DSC_-1-scaled-637x427.jpg`,
  blog2: `${T}DSK-1-scaled-637x427.jpg`,
  heroAbout: `${T}Corona_Vir_Hosp_Day-1.jpg`,
  heroContact: `${T}DSC5_9987-58066-original-protected.jpg`,
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/our-approach", label: "Our Approach" },
  { to: "/contact", label: "Contact" },
];

const EMAIL = "hello@careknect.net";
const PHONE = "+233 57 277 2772";

export const contact = {
  company: "Careknect Limited",
  email: EMAIL,
  phone: PHONE,
  phoneHref: "tel:+233572772772",
  whatsappHref: "https://wa.me/233572772772",
  emailHref: `mailto:${EMAIL}`,
  address: "1st Floor, The Emporium, Mövenpick Ambassador Hotel, Accra, Ghana",
  website: "www.careknect.net",
  mapSrc:
    "https://maps.google.com/maps?q=M%C3%B6venpick%20Ambassador%20Hotel%20Accra&z=15&output=embed",
};

const legalHref = (subject: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

export const legal = [
  { label: "Privacy Policy", href: legalHref("Privacy Policy Request") },
  { label: "Terms of Use", href: legalHref("Terms of Use Request") },
  { label: "Data Protection", href: legalHref("Data Protection Request") },
  { label: "Responsible AI", href: legalHref("Responsible AI Request") },
];
export const privacyHref = legal[0].href;

export const footerBlurb =
  "Purpose-built digital health products for healthcare providers, organisations and the people they serve.";

export type IconName =
  | "clinic"
  | "coordinate"
  | "navigate"
  | "health"
  | "target"
  | "partner"
  | "demo"
  | "services"
  | "process"
  | "redesign"
  | "requirements"
  | "change"
  | "context"
  | "define"
  | "validate"
  | "improve";

export const enquiryTypes = [
  { value: "clinic", label: "Clinic Management Software" },
  { value: "coordinate", label: "Care Coordinator App" },
  { value: "navigate", label: "Care Navigation" },
  { value: "services", label: "Professional Services" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "general", label: "General Enquiry" },
];

type Product = {
  id: string;
  number: string;
  name: string;
  title: string;
  tag?: string;
  icon: IconName;
  image: string;
  secondImage: string;
  summary: string;
  features: string[];
  cta: { label: string; to: string };
};

export const products: Product[] = [
  {
    id: "clinic",
    number: "01",
    name: "Careknect Clinic",
    title: "Clinic Management Software",
    icon: "clinic",
    image: img.clipboard,
    secondImage: img.roomPhoto,
    summary:
      "A digital management platform that helps clinics streamline administrative and patient-management processes, improve operational visibility and support more efficient service delivery.",
    features: [
      "Patient registration and records",
      "Appointment and queue management",
      "Billing and payment administration",
      "Clinical and administrative workflows",
      "Operational reporting and oversight",
    ],
    cta: { label: "Request a Private Demonstration", to: "/contact?enquiry=clinic" },
  },
  {
    id: "coordinate",
    number: "02",
    name: "Careknect Coordinate",
    title: "Care Coordinator App",
    tag: "Flagship Product",
    icon: "coordinate",
    image: img.bedside,
    secondImage: img.nursePhoto,
    summary:
      "A digital case-management and referral platform that helps care teams coordinate services, assign responsibilities and track each client’s progress over time.",
    features: [
      "Shared care plans",
      "Internal and external referrals",
      "Referral status and follow-up tracking",
      "Case updates and progress monitoring",
      "Task assignment, reminders and accountability",
    ],
    cta: { label: "Request a Private Demonstration", to: "/contact?enquiry=coordinate" },
  },
  {
    id: "navigate",
    number: "03",
    name: "Careknect Navigate",
    title: "Care Navigation",
    icon: "navigate",
    image: img.library,
    secondImage: img.blog1,
    summary:
      "An AI-assisted care navigation platform that helps people find appropriate healthcare facilities and services based on their needs, location and preferences.",
    features: [
      "Verified directory of facilities and services",
      "Guided search and service matching",
      "Location and service-availability information",
      "Clear guidance on appropriate next steps",
      "Accessible, people-centred navigation",
    ],
    cta: { label: "Explore a Partnership", to: "/contact?enquiry=navigate" },
  },
];

export const values = [
  { number: "01", title: "Relevance", image: img.team1, text: "We design around clearly defined healthcare challenges and the needs of each intended user." },
  { number: "02", title: "Simplicity", image: img.team2, text: "We make digital tools practical, accessible and easy to use in real healthcare settings." },
  { number: "03", title: "Impact", image: img.team3, text: "We focus on solutions that improve access, coordination, management and service delivery." },
  { number: "04", title: "Trust", image: img.team4, text: "We value responsible innovation, reliable information and respectful partnerships." },
];

export const pillars: { label: string; title: string; icon: IconName; text: string }[] = [
  { label: "Who we are", title: "Health-sector informed", icon: "health", text: "We combine health-sector understanding, operational experience and technology expertise to address real healthcare needs." },
  { label: "How we think", title: "Problem led", icon: "target", text: "We begin with a clearly defined healthcare challenge and the needs and workflows of the people affected by it." },
  { label: "How we work", title: "Partnership driven", icon: "partner", text: "We work with healthcare providers, professionals and organisations to develop practical solutions that can be adopted and sustained." },
];

export const steps: { number: string; title: string; icon: IconName; image: string; text: string }[] = [
  { number: "01", title: "Understand the Context", icon: "context", image: img.round1, text: "We engage relevant stakeholders to understand their experiences, responsibilities, workflows and operating environment." },
  { number: "02", title: "Define the Challenge", icon: "define", image: img.round2, text: "We analyse the information gathered, identify process gaps and agree on the specific problem, priorities and requirements." },
  { number: "03", title: "Design and Validate", icon: "validate", image: img.round3, text: "We work with users and stakeholders to design practical solutions, test key assumptions and confirm that the proposed approach meets their needs." },
  { number: "04", title: "Implement and Improve", icon: "improve", image: img.round4, text: "We support implementation, monitor how the solution performs and use feedback and evidence to guide responsible improvement." },
];

export const services: { number: string; title: string; icon: IconName; image: string; text: string }[] = [
  { number: "01", title: "Process Assessment and Mapping", icon: "process", image: img.blog1, text: "We document existing workflows, responsibilities and service pathways to identify bottlenecks, duplication, delays and missed handovers." },
  { number: "02", title: "Process Optimisation and Service Redesign", icon: "redesign", image: img.blog2, text: "We help organisations redesign workflows, clarify responsibilities and develop practical processes that improve efficiency, accountability and service delivery." },
  { number: "03", title: "Digital Requirements and Solution Design", icon: "requirements", image: img.library, text: "We translate healthcare and operational needs into clear business requirements, process specifications and user-centred digital solution designs." },
  { number: "04", title: "Implementation and Change Support", icon: "change", image: img.nursePhoto, text: "We help organisations prepare their people, processes and operating environments for successful technology adoption and sustainable change." },
];
