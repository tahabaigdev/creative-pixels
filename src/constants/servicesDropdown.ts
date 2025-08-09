import designTabImg from "../assets/images/design-tab-img.png";
import type { StaticImageData } from "next/image";
import clickArrowBlack from "../assets/images/icons/click-arrow-black.svg";
import clickArrowPink from "../assets/images/icons/click-arrow-pink.svg";
import clickArrowGreen from "../assets/images/icons/click-arrow-green.svg";

export interface ServiceLink {
  label: string;
  href: string;
}

export interface ServiceColumn {
  title: string;
  links: ServiceLink[];
}

export interface ServiceTab {
  name: string; // Tab label
  icon: string;
  columns: ServiceColumn[];
  image: string | StaticImageData;
}

export const serviceTabs: ServiceTab[] = [
  {
    name: "Design & Branding",
    icon: clickArrowBlack,
    columns: [
      {
        title: "Designing",
        links: [
          { label: "UI / UX Design", href: "/services/ui-ux" },
          { label: "Website Design", href: "/services/website" },
          { label: "Mobile App Design", href: "/services/mobile-app" },
          { label: "Landing Page Design", href: "/services/landing-page" },
          { label: "Dashboards", href: "/services/dashboards" },
        ],
      },
      {
        title: "Branding",
        links: [
          { label: "Logo Design", href: "/services/logo" },
          { label: "Brand Guidelines", href: "/services/guidelines" },
          { label: "Social Media Branding", href: "/services/social-media" },
          { label: "Infographics", href: "/services/infographics" },
          { label: "Business Cards", href: "/services/business-cards" },
        ],
      },
    ],
    image: designTabImg,
  },
  {
    name: "Website Development",
    icon: clickArrowPink,
    columns: [
      {
        title: "Web Design",
        links: [
          { label: "UI / UX Design", href: "/services/ui-ux" },
          { label: "Website Design", href: "/services/website" },
          { label: "Mobile App Design", href: "/services/mobile-app" },
          { label: "Landing Page Design", href: "/services/landing-page" },
          { label: "Dashboards", href: "/services/dashboards" },
        ],
      },
      {
        title: "SEO Optimization",
        links: [
          { label: "Logo ", href: "/services/logo" },
          { label: "Brand Guidelines", href: "/services/guidelines" },
          { label: "Social Media Branding", href: "/services/social-media" },
          { label: "Infographics", href: "/services/infographics" },
          { label: "Business ", href: "/services/business-cards" },
        ],
      },
    ],
    image: designTabImg,
  },
  {
    name: "Maintenance and Growth",
    icon: clickArrowGreen,
    columns: [
      {
        title: "Optimization",
        links: [
          { label: "UI / UX Design", href: "/services/ui-ux" },
          { label: "Website Design", href: "/services/website" },
          { label: "Mobile App", href: "/services/mobile-app" },
          { label: "Landing Page Design", href: "/services/landing-page" },
          { label: "Dashboards", href: "/services/dashboards" },
        ],
      },
      {
        title: "Branding",
        links: [
          { label: "Logo Design", href: "/services/logo" },
          { label: "Brand Guidelines", href: "/services/guidelines" },
          { label: "Social Media Branding", href: "/services/social-media" },
          { label: "Infographics", href: "/services/infographics" },
          { label: "Business Cards", href: "/services/business-cards" },
        ],
      },
    ],
    image: designTabImg,
  },
];
